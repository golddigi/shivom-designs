const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

for (const comparison of document.querySelectorAll('[data-comparison]')) {
  const input = comparison.querySelector('[data-comparison-input]');
  const output = comparison.querySelector('[data-comparison-output]');

  input.addEventListener('input', () => {
    const value = input.value;
    comparison.style.setProperty('--split', value + '%');
    output.textContent = value + '% muted image revealed';
  });

  input.hidden = false;
  output.hidden = false;
}

for (const carousel of document.querySelectorAll('[data-carousel]')) {
  const track = carousel.querySelector('[data-carousel-track]');
  const controls = carousel.querySelector('[data-carousel-controls]');
  const [previous, next] = controls.querySelectorAll('button');

  const updateControls = () => {
    const end = track.scrollWidth - track.clientWidth;
    const hasOverflow = end > 2;
    controls.hidden = !hasOverflow;
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= end - 2;
  };

  controls.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest('[data-carousel-step]');
    if (!button) return;

    const first = track.firstElementChild;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const width = first.getBoundingClientRect().width + gap;

    track.scrollBy({
      left: width * Number(button.dataset.carouselStep),
      behavior: motionPreference.matches ? 'instant' : 'smooth',
    });
  });

  track.addEventListener('scroll', updateControls, { passive: true });
  new ResizeObserver(updateControls).observe(track);
  updateControls();
}

const dialog = document.querySelector('[data-film-dialog]');

if (dialog instanceof HTMLDialogElement && typeof dialog.showModal === 'function') {
  const player = dialog.querySelector('[data-film-player]');
  const external = dialog.querySelector('[data-film-external]');
  let opener;

  for (const link of document.querySelectorAll('[data-film-id]')) {
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;

      dialog.querySelector('[data-film-name]').textContent = link.dataset.filmTitle;
      dialog.querySelector('[data-film-source]').textContent = 'Preview film by ' + link.dataset.filmCredit;
      external.href = link.href;

      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + link.dataset.filmId + '?autoplay=1&playsinline=1&rel=0';
      iframe.title = link.dataset.filmTitle;
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      player.replaceChildren(iframe);

      dialog.showModal();
    });
  }

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    player.replaceChildren();
    opener?.focus();
  });
}

for (const video of document.querySelectorAll('[data-local-film]')) {
  const container = video.closest('.film-frame');
  const button = container.querySelector('[data-local-toggle]');
  const label = button.lastElementChild;
  const breakpoint = window.matchMedia('(max-width: ' + video.dataset.breakpoint + 'px)');
  let inView = false;
  let userPreference = null;

  const syncPlayback = async () => {
    if (inView && (userPreference ?? !motionPreference.matches)) {
      const { narrow, wide } = video.dataset;
      const source = breakpoint.matches ? narrow ?? wide : wide ?? narrow;
      if (video.getAttribute('src') !== source) video.src = source;
      try {
        await video.play();
      } catch {
        if (video.paused) video.removeAttribute('data-playing');
      }
    } else {
      video.pause();
    }
  };

  const syncButton = () => {
    const playing = !video.paused && !video.error;
    const action = playing ? 'Pause' : 'Play';
    label.textContent = `${action} film`;
    button.setAttribute('aria-label', `${action} ${button.dataset.localToggle}`);
    video.toggleAttribute('data-playing', playing);
  };

  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    syncPlayback();
  }, { threshold: .12 });

  button.addEventListener('click', () => {
    userPreference = video.paused;
    syncPlayback();
  });
  video.addEventListener('playing', syncButton);
  video.addEventListener('pause', syncButton);
  video.addEventListener('error', syncButton);
  breakpoint.addEventListener('change', syncPlayback);
  motionPreference.addEventListener('change', syncPlayback);
  observer.observe(container);
  syncButton();
  button.hidden = false;
}

const nearby = new Set();
const driftFrames = [...document.querySelectorAll('[data-drift]')];
let animationFrame = 0;

const updateDrift = () => {
  animationFrame = 0;
  const viewport = window.innerHeight;
  const narrow = window.innerWidth < 768;
  const changes = [];

  for (const frame of nearby) {
    const slot = frame.closest('.image-slot') ?? frame;
    const { top, height } = slot.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (viewport - top) / (viewport + height)));
    let fraction = narrow ? .16 : .34;
    if (!narrow && frame.classList.contains('image-portrait')) fraction = .5;
    if (frame.closest('.film-frame, .comparison')) fraction = narrow ? .09 : .18;
    const overscan = height * fraction;
    changes.push([frame, overscan, -overscan * (1 - progress)]);
  }

  for (const [frame, overscan, translate] of changes) {
    frame.style.setProperty('--drift-overscan', overscan.toFixed(1) + 'px');
    frame.style.setProperty('--drift-y', translate.toFixed(1) + 'px');
    frame.dataset.driftActive = '';
  }
};

const scheduleDrift = () => {
  if (!motionPreference.matches && !animationFrame) animationFrame = requestAnimationFrame(updateDrift);
};

const driftObserver = new IntersectionObserver((entries) => {
  for (const { isIntersecting, target } of entries) {
    if (isIntersecting) nearby.add(target);
    else nearby.delete(target);
  }
  scheduleDrift();
}, { rootMargin: '180px 0px' });

const entranceObserver = new IntersectionObserver((entries, observer) => {
  for (const { isIntersecting, target } of entries) {
    if (!isIntersecting) continue;
    observer.unobserve(target);
    if (!motionPreference.matches) target.dataset.entering = '';
  }
}, { threshold: .07 });

const setupDrift = () => {
  if (motionPreference.matches) {
    driftObserver.disconnect();
    nearby.clear();
    for (const frame of driftFrames) frame.removeAttribute('data-drift-active');
  } else {
    for (const frame of driftFrames) driftObserver.observe(frame);
    scheduleDrift();
  }
};

window.addEventListener('scroll', scheduleDrift, { passive: true });
window.addEventListener('resize', scheduleDrift);
motionPreference.addEventListener('change', setupDrift);
for (const element of document.querySelectorAll('[data-reveal]')) entranceObserver.observe(element);
setupDrift();
