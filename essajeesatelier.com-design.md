---
version: alpha
name: Essajees Atelier
description: An elegant, gallery-like interior design system with warm metallic accents, airy whitespace, and editorial typography.
colors:
  primary: "#baa170"
  primary-60: "#d3c09a"
  primary-80: "#c6b084"
  secondary: "#191919"
  tertiary: "#ffffff"
  neutral: "#f7f3ec"
  surface: "#ffffff"
  surface-strong: "#f5f1ea"
  on-surface: "#191919"
  muted: "#e5e7eb"
  outline: "#d8c9ab"
  error: "#b4533c"
typography:
  headline-display:
    fontFamily: "Playfair Display"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: 1.23
    letterSpacing: "0px"
  headline-lg:
    fontFamily: "Playfair Display"
    fontSize: "31px"
    fontWeight: 500
    lineHeight: 1.59
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Playfair Display"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.54
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "Playfair Display"
    fontSize: "19px"
    fontWeight: 500
    lineHeight: 1.42
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Montserrat"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0px"
  body-md:
    fontFamily: "Montserrat"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.66
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Montserrat"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.57
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Montserrat"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.57
    letterSpacing: "0px"
  label-md:
    fontFamily: "Montserrat"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.46
    letterSpacing: "0.02em"
  label-sm:
    fontFamily: "Montserrat"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.03em"
  nav-link:
    fontFamily: "Montserrat"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.04em"
  button-md:
    fontFamily: "Montserrat"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 8px
  sm: 20px
  md: 32px
  lg: 50px
  xl: 116px
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
    size: "187px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
    size: "187px"
    height: "54px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  nav-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: "0px 24px"
---

# Essajees Atelier

## Overview
Essajees Atelier feels refined, serene, and editorial, with the atmosphere of a premium interior showroom or boutique design studio. The screenshot emphasizes spaciousness, quiet luxury, and careful restraint rather than visual density. Gold-toned accents, classic serif type, and ample white space create a calm, professional tone suited to an audience that values craftsmanship and timeless interiors.

## Colors
- **Primary (#baa170):** A warm antique-gold accent used for navigation, borders, and calls to action. It reads as metallic and sophisticated rather than flashy, reinforcing the atelier feel.
- **Secondary (#191919):** A deep charcoal-black used for text and high-contrast details. It anchors the otherwise light palette and keeps the interface legible and premium.
- **Surface (#ffffff):** The main background color, creating a bright gallery-like canvas that allows imagery and typography to breathe.
- **Surface Strong (#f5f1ea):** A soft warm off-white for subtle layering, hover states, or quiet panels when extra separation is needed without adding heaviness.
- **Neutral (#f7f3ec):** A gently tinted neutral that supports the warm interior palette and avoids stark, clinical whites.
- **Outline (#d8c9ab):** A muted gold-beige used for delicate borders, dividers, and framing treatments in the navigation and components.
- **Muted (#e5e7eb):** A light neutral border color for cards and simple containers when a cooler, understated edge is needed.
- **Error (#b4533c):** A restrained terracotta-red for validation and destructive states; it should remain uncommon so it does not disrupt the serene mood.

## Typography
The system pairs a classic serif display face, Playfair Display, with a clean sans-serif, Montserrat. Playfair Display is used for headlines and brand moments, with medium weight creating an elegant, editorial contrast that feels more like magazine design than product UI. Montserrat handles navigation, body copy, labels, and buttons, keeping the interface crisp and contemporary.

Headings should feel composed and refined rather than bold or aggressive. The observed scale is large but not oversized, and line heights are generous to preserve luxury spacing. Labels and navigation benefit from slight letter spacing, especially in uppercase or all-caps contexts, to echo the airy, architectural rhythm seen in the header.

## Layout
The layout is spacious and horizontally structured, with a strong top navigation bar and a full-bleed hero image. Content generally sits within wide margins and fixed visual rails rather than a dense multi-column grid. The spacing scale is intentionally simple: 8px for tight internal rhythm, 20px and 32px for routine separation, 50px for section breathing room, and 116px for large structural gaps.

Use large padding around sections and keep containers visually calm. Cards and modular content should have comfortable internal padding, but the overall composition should preserve the open, showroom-like feel. Avoid compact stacking unless the content genuinely requires it.

## Elevation & Depth
The design is mostly flat, relying on contrast, thin borders, and image depth instead of dramatic shadows. The screenshot shows very little shadow use; hierarchy comes from spacing, tonal separation, and the prominence of photography. When depth is necessary, use subtle borders or a barely perceptible shadow rather than layered drop shadows.

This restraint supports the premium interior aesthetic. Flat surfaces, clean edges, and minimal visual noise keep the experience calm and architectural.

## Shapes
The shape language is understated and mostly rectilinear. Interactive elements and framing devices appear sharp or nearly sharp, with rounded corners used sparingly and lightly when a softer container is needed. The overall feel is architectural and precise rather than playful.

Use `rounded.none` for navigation and buttons, `rounded.sm` for inputs, and `rounded.md` for cards when a gentler presentation is appropriate. Avoid pill shapes unless a component specifically requires a softer, more approachable feel.

## Components
Buttons should feel refined, minimal, and consistent with the editorial tone. `button-primary` and `button-secondary` are visually similar in this system: transparent backgrounds, 1px primary-colored borders, gold text, and square corners. Keep them medium in size with substantial horizontal padding and a clear minimum height so they feel deliberate, not dense. Hover states can use a faint warm surface tint or slightly stronger gold emphasis, but should not become saturated or filled-heavy.

Links should remain understated, using `button-link` styling with underlines or subtle text emphasis rather than button chrome. Navigation items (`nav-item`) should be airy and evenly spaced, with letter-spaced Montserrat text in the primary gold tone.

Cards should be light and unobtrusive, with a white background, thin muted border, `rounded.md`, and modest padding. They should support imagery or content without introducing heavy shadow or contrast. Inputs should follow the same philosophy: clean white fields, gentle borders, modest padding, and subtle rounded corners for usability without visual weight.

Use chips, badges, or tags only when needed, and keep them restrained in color and size. Any iconography should be thin, minimal, and aligned with the gold-accent system. Lists and informational blocks should favor generous line spacing and simple separators over boxed or densely segmented layouts.

## Do's and Don'ts
- Do keep layouts spacious and gallery-like, with generous breathing room around key elements.
- Do use the gold accent sparingly for navigation, borders, and important actions.
- Do pair Playfair Display for headlines with Montserrat for all utility text, controls, and body copy.
- Do prefer flat surfaces and thin borders over heavy shadows or decorative depth.
- Don't use saturated colors, loud gradients, or glossy effects that compete with the photography.
- Don't round interactive elements aggressively; avoid pills and overly soft UI.
- Don't compress spacing or overpack sections; the system should feel calm and premium.
- Don't let buttons become filled, oversized, or visually dominant compared with the content.