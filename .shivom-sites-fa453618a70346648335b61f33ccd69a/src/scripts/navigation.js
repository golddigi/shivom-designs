const header = document.querySelector('[data-site-header]');
const toggle = header?.querySelector('[data-menu-toggle]');

if (toggle instanceof HTMLButtonElement) {
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  toggle.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', String(!isOpen()));
  });

  header.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen() && toggle.getClientRects().length) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

  toggle.hidden = false;
}
