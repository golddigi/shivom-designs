# Homepage design guide

[Essajees Atelier homepage](https://www.essajeesatelier.com/) is the reference for this guide. It covers the homepage from navigation to footer, including media exports, layout, scrolling, and responsive checks. Build the experience with photography, video, branding, and copy you own or have permission to use. Retain the pacing, hierarchy, media proportions, and interaction behavior described here.

## 1. Visual direction and layout

The homepage opens with a film immediately below a shallow navigation bar. Wide white space separates the film, centered editorial statement, and portrait project grid. The grid occupies several screenfuls and establishes the site's rhythm. Later sections alternate photographs, centered statements, split editorial layouts, short horizontal carousels, and text-led sections. End with a prominent contact prompt and a compact footer.

| Token | Desktop observation | Narrow observation or implementation guidance |
| --- | --- | --- |
| Canvas and text | White `#fff` with primary text `#191919` | Retain white space. Use dark body copy for comfortable contrast. |
| Heading accent | Warm gold `#baa170` | Use for display headings and decorative details. Check contrast before using it for small functional text. |
| Display font | Playfair Display. Major headings 40 px / 49.2 px. Project titles 30 px / 36.9 px. | At 390 px, major headings generally 26 px, project titles 22 px, leading editorial statement 24 px, blog section heading 28 px. |
| Body font | Montserrat, 14 px / 23.24 px | Keep readable at small widths. Metadata and eyebrow labels can use uppercase with modest tracking. |
| Main desktop container | 1150 px wide, x≈195 in the inspected viewport | Approximately 670 px at 900 and 325 px at 390. Use a centered container with explicit width caps and reduce the gutter on narrow phones. |
| Centered statements | 920 px wide at desktop, centered, usually two lines | Use available content width. The lead statement wrapped to four lines at 390. |
| Standard media radius | Project frame 12 px, outer image wrapper 14 px | Preserve the image frame's rounding at each breakpoint. |
| Desktop spacing rhythm | Hero ends near y=927, leading statement starts at y≈987, Featured Projects heading at y≈1185 | Use these as checkpoints. Keep height responsive to copy, film aspect ratio, and viewport. |

Viewport checks were made at 1534 × 865, 900 × 1000, and 390 × 844 CSS pixels. The measured page layout was about 15 px narrower than each viewport. Treat x/y values as approximate, and compare sections after lazy media and fonts have loaded. Carousel slides and animated wrappers can move independently of their layout slots.

## 2. Video and artwork production

Use four distinct video exports. Dimensions below are the intrinsic video dimensions read from the playing elements. Visible frames can be fractional at some window sizes.

| Placement | Source size | Width-to-height ratio | Frame at measured widths | Duration |
| --- | --- | --- | --- | --- |
| Opening hero, wide | 1920 × 1080 | **16:9** | 1499 × 843 at 1534, x≈20, y≈84 | 33.44 s |
| Opening hero, narrow | 426 × 520 | **213:260**, about 0.819:1 | 355 × 433 at 390 and 865 × 1056 at 900, below the 56 px header | 33.44 s |
| JEA reel, wide | 1280 × 588 | **320:147**, about 2.177:1 | 1150 × 528 at 1534 and 670 × 308 at 900 | 14 s |
| JEA reel, narrow | 426 × 756 | **71:126**, about 0.5635:1, close to 9:16 | 325 × 577 at 390 | 14 s |

### Export and composition

- Deliver each cut in its own aspect ratio. For higher resolution, preserve the exact ratio. Useful higher-resolution exports include 852 × 1040 for the portrait hero and 852 × 1512 for the portrait JEA reel. Reframe individual shots for each output. In a wide room shot, the center may be empty once cropped to portrait, so check every edit.
- The inspected players were muted, autoplaying, looping, inline, centered, and used `object-fit: contain` inside fluid, proportionate wrappers. Give the wrapper the exact aspect ratio to avoid letterboxing. The source used Video.js. Native video can provide these playback characteristics.
- Export a good-looking poster in each ratio, ideally from a frame that leads smoothly into the first shot. Poster URLs were present on the portrait hero and both JEA cuts. Add a wide hero poster to the implementation as a loading and reduced-motion fallback.
- Use an H.264 MP4 with fast-start metadata as the baseline delivery format. An additional efficient video format or adaptive streaming is optional. Remove the audio track for silent decorative reels. Tune compression against actual room textures and playback startup.
- Only attach the active source at each breakpoint. Prioritize the hero poster, allow muted autoplay if the browser permits, defer the JEA video until it nears the viewport, and pause offscreen playback as an implementation target. If autoplay is blocked, keep the poster in place and present an accessible play action if needed.
- On reduced-motion preferences, show a still by default. Provide a pause control for the autoplaying loop. Preserve the full frame in either state so the rest of the page stays stable.

### Still images

| Placement | Observed source / frame | Production guidance |
| --- | --- | --- |
| Alternate hero slider stills | 1920 × 960 or 2000 × 1000, **2:1**. Present in the DOM and hidden at the measured sizes. | Use 2:1 only if implementing a still slider variant. Match each video ratio for the actual video posters. |
| Featured Projects | 740 × 906 sources, rendered 490 × 600 desktop and 305 × 373 phone, approximately **0.817:1** | Export at the source ratio or higher. Compose for overscan and set a per-image focal point. |
| About portrait | 742 × 705 source, desktop frame about 525 × 499 | Near-square crop with space around the subject. |
| Press video card poster | 570 × 364 source, desktop frame about 343 × 219, **285:182** | Keep titles in HTML below the image. Use this ratio for cards and preserve original video ratios in the player. |
| Magazine covers | Desktop frame about 212 × 310, **106:155**. Original cover ratios vary. | Keep titles and cover graphics safe during cropping. Preserve each original if using a contained cover treatment. |
| Before/after comparison | Intrinsic dimensions unavailable during inspection | Export both shots at identical dimensions. Align camera position, perspective, and focal plane. Choose the frame ratio from the images and reserve it before loading. |

## 3. Page structure from top to bottom

Coordinates below refer to the 1534 px desktop inspection. Use them to judge spacing as a whole. Document coordinates after the comparison may shift when that media loads.

| Section | Desktop checkpoint | Layout and behavior |
| --- | --- | --- |
| Navigation | y=0, height 84 px | White page shows through a transparent header. Center the wordmark at roughly 270 px wide. Balance Home and About against Past Projects and Contact, with small social/contact icons in the navigation treatment. The inspected header moved offscreen during a 1600 px downward scroll. At 900 and 390 its measured height was 56 px. Use a compact accessible menu where the full navigation no longer fits. |
| Opening film | y≈84–927 | Give the media almost the full viewport width with about 20 px leading inset. Keep the film in normal flow so its aspect ratio determines the space before the intro. The portrait cut occupies less than a screen on the measured phone and more than a screen on the measured tablet. |
| Studio statement | y≈987 | One prominent centered 40 px serif statement in a 920 px measure. Leave roughly 60 px after the video and substantial space before the next section. Use this as an appropriate homepage H1. |
| Featured Projects | heading y≈1185, first row layout y≈1473 | Six portrait project cards in a two-column, three-row composition. At desktop, image frames begin at x≈215 and 855 and are 490 × 600. Each card places a gold serif title under the photo, with room for secondary project context or action. Make the card or its title a semantic link to the project detail page. Keep the overall column spacing broad. At 390, all six sit in one column in the same reading order. |
| About | image y≈3969, heading y≈4069 | Two-column editorial feature. Left portrait about 525 × 499. Right copy block about 450 px wide, starting near x≈850 and vertically offset down from the image top. Include an About destination. Stack coherently on phones. |
| JEA | heading y≈4548, film y≈4676 | Left-aligned two-line serif heading in about 850 px, then a reel spanning the 1150 px content grid. Use the JEA-specific aspect ratios above. |
| Scale statement | y≈5295 | Center another broad, two-line gold statement. Use it as breathing room between the reel and process. |
| Our Process | y≈5453 | Four numbered steps in order: Briefing, Design, Execution, Handover. Each has an uppercase label and a short paragraph. Give each step a consistent visual block. Put narrower layouts in reading order and allow all copy to reflow. |
| A Seamless Experience | y≈6054 | Centered heading and explanatory copy with a before/after comparison in a roughly 933 px centered slot at desktop. Use a draggable divider and the same crop for both layers. Provide equivalent keyboard controls and a results label such as percentage revealed. Follow with a projects CTA. |
| Testimonials | heading y≈6421 | Centered heading and single-slide horizontal quote carousel in a 1150 px track. A visible quote/name reading column measured roughly 737 px. Author label uses 22 px desktop serif and about 19 px on the sampled phone. Maintain a reasonable height for varying quote lengths. |
| Press & Articles | y≈7008 | Use a larger gold heading followed by Video Features, Magazine Covers, and Articles. Subheadings are gold uppercase Montserrat at 18 px desktop and 16 px narrow. Give each subgroup its own row and spacing. |
| Video Features | track y≈7149 | Roughly three visible poster cards at desktop, two at 900 and one at 390. Desktop poster faces are about 343 px wide, with 24 px dark serif titles below. Use an obvious play action. On overlay playback, close on Escape and return focus to the opener. The source playback overlay interaction was not tested. |
| Magazine Covers | track y≈7707 | Horizontal strip with roughly five full covers on desktop. Keep images prominent and let a partial edge or carousel controls signal more content. |
| Articles | heading y≈8138 | Dedicated press article links after the covers, before Awards. Give sources and editorial titles enough room to wrap. |
| Awards | heading y≈8833, track y≈8933 | A separate recognition carousel on the main grid with an approximately 211 px track height at desktop. Present each award with its issuer and year where available. |
| Latest blogs | heading y≈9305 | Three desktop entries with aligned thumbnails and linked editorial titles. Measured content columns about 357 px wide, near x≈195, 591, and 988. Use stacked cards at very narrow widths. |
| FAQs | heading y≈9888 | Below editorial content, above contact. Use question headings with accessible accordion buttons or native disclosure and retain stable reading order. Exact reference expansion behavior was not verified. |
| Contact and footer | CTA heading y≈11186 | Give the contact prompt a generous white-space break and a clear action. End with the wordmark and page/contact navigation. Maintain semantic navigation landmarks and visible focus. |

## 4. Scroll and motion

### Page scrolling

The defining rhythm comes from normal vertical scrolling through alternating tall media and quieter content. The reference loads SmoothScroll, jQuery smooth-scroll, GSAP, and ScrollTrigger scripts. Their presence does not establish where each script is active or the exact wheel easing. Desktop inspection confirmed that downward scrolling actually moves the document and that the featured images move within their own clips. Begin with native wheel, touch, scrollbar, and keyboard behavior. If adding eased wheel motion, keep that narrowly scoped and verify that scroll restoration, trackpads, touch, focus, and anchor jumps still work. Reserve smooth anchor movement for purposeful in-page navigation and respect reduced motion.

### Project-card drift

- Initialize Ukiyo.js on the image nodes, matching the observed `new Ukiyo(".ukiyo")`. Use a stable layout slot, a separate entrance wrapper, a rounded overflow-hidden crop, and an oversized inner image. The desktop 490 × 600 clip held a 490 × 900 inner image with cover fitting. That is a **1.5× image height** and 300 px of total overscan.
- The inner image uses a Y-only `translate3d` transform. In the sampled first row it was about −375 px at the top of the page and −76 px at y≈1600. The −375 px reading was obtained while the cards were offscreen. When implementing independently, clamp on-screen values so the clip cannot expose a blank edge.
- For a custom equivalent, let `p` be the frame's normalized progress from first entering at the viewport bottom to fully leaving at the top. Use `p = clamp((viewportHeight - frameTop) / (viewportHeight + frameHeight), 0, 1)` and `translateY = -(innerHeight - frameHeight) * (1 - p)`. Batch transform writes in animation frames and only update nearby images. Recompute sizes on breakpoint and orientation changes.
- The outer wrapper uses the theme's `moveVertical` entrance with **650 ms**, `ease`, forwards fill. The theme rule supplies a 150 px starting Y offset, and the final keyframe settles at 0 px and opacity 1. Keep that entrance transform on the wrapper, with independent image drift. Trigger once per card near viewport entry. Default to visible content if scripting fails.
- For reduced motion, use centered static crops at full opacity. For low-powered phones, reduce the available motion while maintaining the same frame aspect ratio. Verify that slide transitions and touch dragging remain responsive while the videos decode.

### Horizontal and direct manipulation

Swiper 4.5.0 is loaded, and desktop DOM showed initialized tracks for testimonials, video features, magazine covers, and awards. Build these as independent carousels. Provide labeled previous/next controls and touch support. Give horizontal drags a clear threshold so a vertical swipe still scrolls the homepage. Use a 300–450 ms eased transition as an implementation target. Exact autoplay timing was not measured. Provide a way to stop autoplay if you enable it, and exclude inaccessible offscreen carousel clones from the tab sequence. The before/after control is a direct manipulation interaction and should track input immediately rather than easing behind the pointer.

## 5. Responsive implementation

| Checkpoint | Confirmed layout | Implementation starting point |
| --- | --- | --- |
| Desktop 1534 × 865 | 84 px header, wide hero and wide JEA. Two project columns, 490 × 600 images, 1150 px main content. | Keep generous desktop gutters. Use a centered max-width grid and let row spacing scale with type and media. |
| Tablet 900 × 1000 | 56 px header, **portrait hero**, **wide JEA**, two project columns with approximately 290 × 355 frames, and 670 px content. | Use an independent breakpoint for each video family. Keep project columns balanced and use roughly 22 px project titles. |
| Phone 390 × 844 | 56 px header, both portrait videos, approximately 325 px content width, single project column with 305 × 373 frames. | Keep the primary content stack linear. Leave about 20 px for the hero inset and use the observed x≈35 for main content at this width. Give project images an extra inset relative to the heading, about 20 px at the measured width. |
| 320 px and landscape | No measurement | Keep the page free of horizontal overflow, allow menu and text wrapping, and preserve room for carousel controls and the comparison handle. |

The samples establish how media switch at those widths. The exact threshold between samples was not determined. To implement, start by switching the hero to portrait at 991 px and JEA to portrait at 767 px. Use roughly 767 px as the starting single-column project breakpoint. These are suggested breakpoints. Test around each one and adjust based on the desired crop and typography rather than device labels.

Reserve dimensions with `aspect-ratio` or intrinsic width and height. Use `minmax(0, 1fr)` for grids. Apply clipping locally to images and carousel tracks. Use `srcset` and `sizes` for stills, modern image formats, and lazy loading below the fold. Keep text, links, and navigation available before media initialization.

## 6. Acceptance checks

- Compare the initial viewport, Featured Projects, and JEA at 1534, 900, and 390 px. Check the visible media variant and frame proportions, font sizes, gutters, card order, and project grid column count.
- Test the 900 px hero specifically. At the measured width it is approximately 1056 px tall, so the next section begins below the fold. On the 390 px reference the hero ends near y=489 and the introduction begins near y=549.
- Scroll slowly, quickly, and in reverse on both a wheel and touch. Confirm each featured image visibly drifts inside a stable crop without blank edges, and the entrance settles after about 650 ms.
- Verify that all four poster/video pairs match their frames. Check the loop point, blocked autoplay fallback, pause behavior, orientation changes, and whether hidden variants consume bandwidth.
- Exercise each carousel with click, touch, and keyboard. Exercise the comparison using a pointer and keyboard. Check that FAQ, video, menu, and carousel controls expose their state to assistive technology.
- Test reduced motion, JavaScript disabled, slow connections, and 200% zoom. Preserve access to the first project, studio information, and contact action. Inspect the page for layout shifts as fonts and media load.
