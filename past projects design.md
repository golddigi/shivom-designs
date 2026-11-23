# Past Projects · Project detail design

Reference: [Merlin Residence, Essajees Atelier](https://www.essajeesatelier.com/past-projects/merlin-residence/). This spec covers the linked individual case study under Past Projects. Desktop measurements come from a 1534 × 865 CSS-pixel viewport. Responsive CSS rules were inspected. Mobile and tablet layout values marked as targets are implementation choices to validate on devices.

## Visual direction

Build an editorial architecture portfolio. Photos carry the visual weight. Use a white canvas, restrained warm-gold serif headings, compact sans-serif prose, and large gaps between chapters. Keep the typography and photos aligned to a shared content grid. The movement should make the photos feel deeper without competing with the writing or interrupting the reader's scroll.

| Element | Reference or implementation target |
| --- | --- |
| Canvas | White, observed as `#fff` |
| Display type | Playfair Display, observed accent `#baa170` |
| Body type | Montserrat, observed base size 14 px. Use a comfortable 1.55–1.7 line height as a target. |
| Project title | Observed 45 px / 55.35 px desktop. Target 32–36 px on phones. |
| Section titles | Observed 40 px / 49.2 px desktop. Target 28–32 px on phones. |
| Desktop content | Target a centered max width of approximately 1150 px. Observed hero begins at x=195 and is 1150 px wide. |
| Photo corners | Observed 12 px on gallery frames. Keep the clipping edge on the stationary frame. |
| Text contrast | Keep small text dark. Check accent colors against the chosen background, especially for links and smaller labels. |

Use your own photography, branding, and text. Favor images with enough detail and room at the top and bottom for moving crops. Give high-priority architectural details enough clearance to stay visible at both scroll extremes.

## Page sequence

1. **Site header.** Center the brand within a desktop navigation row with Home, About, Past Projects, and Contact as the main destinations. The reference showed a logo at the top of the viewport during deep scroll. Use a sticky header with an opaque background over content and indicate the current navigation section. On small screens, use an accessible menu toggle with an expanded state, Escape handling, and focus return.
2. **Project introduction.** Show a breadcrumb, the project title as the sole H1, a short editorial subtitle, and category, year, and location. Set metadata as small label/value pairs. The desktop title appeared near document y=204. Keep this area compact enough for the hero to start within the first viewport.
3. **Hero.** A single wide photograph fills the content measure. Observed desktop frame was 1150 × 600 px near y=387. Use cover cropping with a project-specific focal point. Apply the entrance transition and a slow vertical drift inside the frame.
4. **The Space.** On desktop, position narrative copy on the left and two tall image frames to its right. At the sampled width the heading began at x=195, the first photo at x=595, and the second at x=975. The two frames measured 370 × 555 px and had a 10 px gap. This chapter began near y=1067, about 80 px after the hero ended.
5. **The Journey.** Continue the editorial narrative with another gold serif heading and short paragraphs. The sampled heading began near y=1802. Maintain generous space below this section before the gallery. The source DOM contained other optional headings, including The Ask, The Result, and Testimonial, which were hidden in the sampled desktop layout. Make these optional content fields and omit empty sections.
6. **Gallery.** Use three columns and two rows at wide widths. Observed frames were 370 × 555 px with approximately 30 px column gaps and 10 px row gaps. The first row began near y=2673 and the second near y=3238. The gallery starts slightly outside the main text alignment in the reference. Let gallery tiles dominate the section and use consistent rounding. A `.zoom` wrapper was present on one tile. Treat hover behavior as unverified. A static tile is sufficient for the core parallax effect.
7. **Contact and footer.** Follow the gallery with whitespace, a short contact heading and a clear contact action. The sampled CTA heading sits near y=4197. End with brand and navigation links. Use landmarks for the header, main content, and footer.

Desktop y-coordinates are proportional reference points for a page with the same amount of content. Keep section spacing responsive and let paragraphs determine the flow.

## Scroll behavior and image motion

The reader moves down a continuous vertical page. Each section remains in normal flow. Use natural touch momentum and keyboard scrolling. Keep the frame stable once its entrance finishes, then let the photo glide within it as the frame passes through the viewport.

| Layer | Observed behavior | Implementation |
| --- | --- | --- |
| Document | Computed root `scroll-behavior: auto`. The page loads SmoothScroll and jQuery smooth-scroll scripts. Their runtime settings were unverified. | Start with native scrolling. Use smooth scrolling for deliberate anchor jumps only as a target. Avoid scroll snapping and let the browser handle touch momentum and keyboard input. |
| Entrance wrapper | `.tm-animation.move-up.animate` applies `moveVertical`, 650 ms, `ease`, one iteration with forwards fill. The rule sets an initial Y offset of 150 px. Keyframe ends at Y=0 and opacity 1. | Trigger a one-time fade and upward move as each wrapper enters view. Use an IntersectionObserver with a small threshold such as 0.1 as an implementation target. Process already-visible content on mount. |
| Static frame | Gallery uses a relative, overflow-hidden frame with 12 px radius and isolation. | Set the frame dimensions with layout CSS. Reserve its dimensions before the image loads. |
| Image inside frame | Ukiyo.js is initialized with `new Ukiyo(".ukiyo")`. One observed gallery photo moved from approximately −251 px to −184 px after 220 px of downward scroll. The sampled transform showed translation with scale 1. | Oversize the image layer vertically and animate only its Y transform. Use Ukiyo.js for behavior closest to the reference, or use the bounded interpolation below. |

### Framework-neutral motion recipe

Use three separate elements for each photo: an entrance wrapper, a clipped frame, and an oversized image. The wrapper owns entrance opacity and translation. The image owns the parallax translation. This prevents the parallax update from overwriting the entrance transform.

- Use `position: relative`, `overflow: hidden`, and `border-radius: 12px` on the frame.
- Position the image at the top of the frame with full width and `object-fit: cover`. For a frame of height `H` and an overscan allowance `O`, make the image layer `H + 2O` tall. Use focal-point controls for individual photographs.
- Compute progress from the frame's unanimated layout bounds: `p = clamp((viewportHeight - frameTop) / (viewportHeight + frameHeight), 0, 1)`. For the observed direction, set the image translation to `-2 * O * (1 - p)` px. At both extremes, the image still covers the frame. Read bounds from a stable outer slot when the entrance animation is running.
- A practical starting point is `O = 20–30%` of the frame height on desktop and `8–15%` on phones. These are tuning targets. Larger overscan increases motion and crop. Reduce it for images with important foreground details or on smaller screens.
- If implementing without Ukiyo, schedule transform updates through a shared `requestAnimationFrame` callback and use passive scroll listeners. Read frame geometry before writing transforms. Suspend updates for far-offscreen frames, refresh dimensions on resize, and initialize the image position before revealing it.
- For `prefers-reduced-motion: reduce`, show images at a stable crop at full opacity, remove the entrance transform, and use instant anchor jumps. Keep the page readable when scripts fail by making visible content the CSS default and enabling the pre-entry state only after motion is initialized.

## Responsive behavior

The source contains image rules at 992 px and 768 px. At widths up to 992 px, inspected CSS caps the hero image at 300 px and the result image at 210 px with `!important`. At widths up to 768 px, another rule declares 460 px heights for both images. The max-height caps may still constrain the image elements. These declarations do not establish the rendered frame heights on mobile because the parallax library wraps the images and injects dimensions.

| Viewport | Implementation target |
| --- | --- |
| 1200 px and above | Center the desktop measure. Use the copy-plus-two-images chapter, the three-column gallery, and a hero up to 600 px tall. |
| 993–1199 px | Use 28–36 px page gutters and fluid grid tracks. Preserve the desktop layout while keeping prose comfortably readable. |
| 769–992 px | Use 24–32 px gutters. Put the chapter copy above a two-photo row and use two gallery columns. Start with a hero around 300 px tall and adjust the crop to the chosen photo. |
| 768 px and below | Use 16–24 px gutters and one reading column. Wrap metadata and place chapter photos below the copy. Use a single-column gallery at typical phone widths, keeping each photo's portrait aspect ratio. Use a 240–300 px hero as a starting range. |
| Extra narrow and large text | Allow headings and metadata to wrap, preserve tap targets, and ensure the page has zero horizontal overflow at 320 px CSS width. |

Treat the responsive layout above as acceptance targets. Keep the project title, details, and CTA in document order across widths. Use safe `minmax(0, 1fr)` tracks and let CSS size the clips before motion initialization. Recompute overscan after orientation changes.

## Image loading and accessibility

- Use responsive `srcset` and `sizes` for the hero and gallery. Match available image widths to frame width, overscan, and device pixel density. Use modern formats with a fallback where needed.
- Load the hero eagerly, and lazy-load images below the initial viewport. Reserve all frame dimensions to keep the page from jumping. Keep a neutral frame background while images decode.
- Use descriptive alt text for meaningful photography and empty alt text for decorative repeats. Keep noninteractive photos out of the tab sequence. Give interactive items visible keyboard focus.
- Ensure the sticky header leaves room for jump targets via `scroll-margin-top`. Confirm that zoom and larger text settings preserve the reading order and navigation.

## Implementation checks

- At 1534 × 865, check the heading, hero, split chapter, portrait grid, and CTA against the section sequence and frame measurements above.
- At 320, 390, 768, 992, 1024, and 1534 px, check for clipped text, unwanted horizontal scroll, and dead space around image frames. Test touch scrolling in both portrait and landscape.
- Scroll slowly, fling through the gallery, and reverse direction. The frame edges should remain filled, images should stay attached to their frames, and each entrance should run at most once.
- Use Space, Page Down, keyboard navigation, anchor links, and browser back with restored scroll. Verify that the header does not cover focused elements.
- Test reduced motion, disabled JavaScript, and a throttled connection. Content should remain visible, dimensions should stay reserved, and the CTA should remain reachable.
