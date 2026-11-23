# Contact Us design guide

Reference [Essajees Atelier Contact Us](https://www.essajeesatelier.com/contact-us/). This guide records the visible page and gives implementation targets for a contact page with the same layout, pacing, and interaction pattern. Use your own brand assets and verified contact details.

Measured viewports were **1534 × 809**, **900 × 1000**, and **390 × 844** CSS pixels. Dimensions below refer to layout or visible clip bounds. The main document was about 15 px narrower than each viewport in the inspection environment.

## 1. Page sequence and feel

The page opens with a quiet white navigation bar, a generous top margin, and a wide architectural still with softly rounded corners. On desktop there is no visible text overlay on the image. As the banner scrolls away, the page shifts to a practical contact directory. A short left column holds the title and three social/contact icons. A wider right column holds the enquiry instructions, office details, and map. The footer follows directly.

On the phone, a centered “Get in Touch” heading appears above the banner. The “Contact Us” title and icon row occupy their own block under the image. Enquiries, office details, and the map then read from top to bottom, followed by the stacked footer. Keep the page quiet and editorial. The image carries the visual emphasis and the contact information remains immediately legible.

## 2. Visual tokens

| Element | Measured styling |
| --- | --- |
| Main canvas | White `#ffffff` |
| Main text | `#191919`, Montserrat, base 14 px with 23.24 px line-height |
| Contact heading | Playfair Display, `#baa170`. Desktop 40 px / 49.2 px. Tablet and phone 28 px. |
| Phone introductory heading | Playfair Display, centered, 28 px in a roughly 34 px line box |
| Enquiry text | 15 px on desktop, 14 px at 900 and 390 |
| Office details | 14 px on all three samples. Use readable uppercase labels followed by values. |
| Footer address | Montserrat 15 px, centered under the wordmark |
| Footer navigation headings | Playfair Display, 24 px desktop and about 17 px phone |
| Banner clip radius | 16 px |
| Map radius | 8 px |
| Social glyphs | About 28–30 px at desktop. The three measured link boxes were roughly 56–58 px wide and 37–40 px high. A 44 px minimum height is a practical implementation target. |

Use the warm gold for display typography. Verify contrast when selecting colors for interactive controls, contact links, and keyboard focus.

## 3. Layout measurements

The following coordinates are approximate document positions from the top of the page. Use the column relationships and vertical gaps as guides. Allow real content to determine the final height and avoid setting sections to absolute positions.

| Region | 1534 px viewport | 900 px viewport | 390 px viewport |
| --- | --- | --- | --- |
| Header | y=0, height 84 px | height 56 px | height 56 px |
| Introductory heading | Hidden | Hidden | x≈35, y≈96, 325 px wide and centered |
| Banner clip | x≈195, y≈144, 1150 × 647 px | x≈118, y≈96, 670 × 377 px | x≈35, y≈160, 325 × 183 px |
| Contact title | x≈215, y≈851, 330 px text slot | x≈138, y≈525, 170 px slot | x≈55, y≈395, 128 px slot, measured over two lines |
| Enquiry block | x≈595, y≈851, 750 px wide | x≈358, y≈525, 430 px wide | x≈35, y≈504, 325 px wide |
| Office details | y≈923, around 93 px tall | y≈616, around 93 px tall | y≈641, around 116 px tall |
| Embedded map | x≈595, y≈1067, 750 × 450 px | x≈358, y≈755, 430 × 450 px | x≈35, y≈804, 325 × 450 px |
| Footer begins | y≈1585 | y≈1258 | y≈1307 |
| Entire document | About 2197 px tall | About 2132 px tall | About 2395 px tall |

### Header

At desktop, start with an 84 px row. Place the wordmark around the center at roughly 270 px wide, with Home and About to the left and Past Projects and Contact to the right. Mark Contact as current with `aria-current="page"` where it remains a link. The observed header is positioned relatively in normal flow. At tablet and phone widths use a 56 px row. A compact menu is a suitable implementation for narrow widths. Give it a labeled toggle, visible focus, Escape handling, and focus return. The opened mobile menu interaction was not tested.

### Contact block

- Align the leading edges of the desktop banner and main content near x=195. Use an approximately 350 px left region and 750 px right region with about 50 px between the working tracks. The title is inset about 20 px from the banner edge. At 900 the left title and right details still share a row, with approximately one-third and two-thirds proportions.
- Place the icon row around 10 px below the title's line box on desktop. Use Instagram, LinkedIn, and email as individually labeled destinations, with glyphs sized independently from their hit areas.
- Put one paragraph for project enquiries and one for career enquiries in the right column. The project instruction includes a requested email subject. Follow with a group for the office address, opening hours, and phone. Office information should read well when the longest address line wraps.
- The reference's main contact section uses direct contact information. Its DOM contains a search overlay, but no contact form or visible enquiry fields. It also contains a generic CTA hidden in the measured desktop state. Keep the observed contact path simple. Use verified addresses for `mailto:` links, a URL-encoded subject if presetting one, and a `tel:` link for the office number in the implementation.
- Stack the title/social block above the details on phones. The measured phone title wraps. Preserve logical heading order with “Contact Us” as the H1 and treat the introductory line as decorative copy or a paragraph.

### Map

The reference uses a lazy-loading Google Maps embed, full right-column width, with a fixed **450 px height** in all three samples. Keep the map 450 px high if matching that vertical rhythm. Its width-to-height ratio therefore changes from **5:3** at desktop to roughly **0.72:1** at phone width. Clip the map to an 8 px radius. Reserve the full frame before loading. Add an iframe title such as “Map showing the studio location” and provide a conventional directions link so the address works without an embed. The reference allowed fullscreen. Verify scrolling past the map with a wheel and on touch so it does not trap the reader's gesture.

### Footer

On desktop arrange the footer into a wide brand/address area and two narrower link areas. The observed logo asset was **415 × 162**, shown at native CSS dimensions in the desktop sample. Center the address and social links below it. Place general page links near x≈815 and city/project links near x≈1105. Under the main footer, align copyright left and credits right. At 900 the brand/address block sits above the navigation groups. At 390 stack all blocks and center the copyright and credits on separate lines. Use descriptive labels for each link group.

## 4. Banner artwork and motion

### Media production

The page has **no video**. Use one **1400 × 788** architectural still like the measured source, or a higher-resolution equivalent. That is approximately **16:9**. The rendered clips preserved that proportion at all three widths. An exact 16:9 export such as 1600 × 900 is suitable, with additional sizes for mobile and high-density screens. Use an optimized WebP or AVIF with a fallback, preserve the dimensions, and use `object-fit: cover` with a centered focal point to match the initial style. Keep important details near the center so they survive the parallax crop. The reference uses the same still for its wide and narrow banner markup. A single responsive image is sufficient.

### Scroll and entrance

- **Document scroll.** Root `scroll-behavior` computed to `auto`. SmoothScroll and jQuery smooth-scroll assets were loaded. Exact wheel easing was unverified. Use native page scrolling as the baseline and keep anchor navigation and scroll restoration working.
- **Stationary clip.** Use a 16:9 layout frame with `overflow: hidden` and 16 px corner radius. Apply the parallax transform to media inside the clip, leaving the frame in the document flow.
- **Vertical parallax.** The image carries `.ukiyo` and the page loads Ukiyo.js. At the top of the desktop page the sampled inner image had approximately −260 px Y translation plus a translated wrapper. At the bottom scroll sample the inner image's combined document position was different while its dimensions were unchanged. Tablet and phone translation were lower in their samples. The desktop stack included multiple oversized layers. Treat those offsets as observations, not fixed values to apply at all widths.
- **Entrance.** The banner wrapper reported `moveVertical`, **650 ms**, forwards fill. The map wrapper reported `slideInUp`, **1 s**, both fill. Give each a separate reveal wrapper if reproducing both motions. Start from a small downward offset and optionally low opacity, settle at the normal position, and leave it there. Trigger on proximity to the viewport. Use a conservative amount of travel on a phone so the map remains easy to reach.

For a custom parallax, use an inner image taller than the clip and interpolate its translation from a negative overscan limit toward zero as the frame passes through the viewport. Clamp translation between `frameHeight - imageHeight` and `0` to keep the clip filled. Start with 20–35% extra image height on wide screens and a much smaller travel on narrow screens, then tune from visual checks. Batch scroll updates in `requestAnimationFrame`, observe resize, and update only while the banner is nearby. The entrance wrapper and inner image should own independent transforms. With reduced motion, use a static banner crop and show the map immediately.

## 5. Responsive implementation and verification

- Use a centered max-width near 1150 px on desktop. Preserve the sampled 670 px content region at 900 px and around 325 px at 390 px. Use fluid gutters between those values, and allow smaller gutters at 320 px.
- Suggested implementation breakpoint for the compact header is around 992 px. Around 768 px, try stacking contact details and exposing the centered introductory line. These are starting points inferred from the sampled widths. Exact source switch widths were not established.
- Reserve the banner aspect ratio with CSS or intrinsic dimensions and the map height independently. Make column minima shrink, allow long email addresses to wrap, and ensure navigation controls remain reachable at large zoom.
- Compare the layout at 1534, 900, and 390 px. Check the additional phone heading, order of contact details, banner clip radius and map height. Test at 320 px, landscape, and 200% zoom for overflow.
- Test image travel during slow scroll, fast scroll, and reversal. Check the corners for exposed blank pixels. Confirm that keyboard scrolling, reduced motion, scroll restoration, and JavaScript-disabled rendering leave the content readable.
- Verify every social, email, phone, and directions destination before publishing. Check that the map's iframe title is announced and its lazy load does not shift the footer. No messages were sent and the map's internal controls were not exercised during inspection.
