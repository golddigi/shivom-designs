# Shivom Design

A static Astro website built with HTML in `.astro` templates, Tailwind CSS 4, and vanilla JavaScript.

## Develop locally

```sh
npm ci
npm run dev -- --background
```

Open the local URL printed by Astro. Use `npm run dev -- status`, `npm run dev -- logs`, and `npm run dev -- stop` to manage the server. Run `npm run build` to generate the static site in `dist/`.

## Replace preview media

- Interior images live in `public/assets/interiors/`. The current images are generated placeholders. To swap in your own, replace the WebP files at the same widths, or add image names, widths, alt text, and focal points in `src/data/studio.js`.
- The homepage comparison uses `hero-640.webp` and `hero-muted-640.webp` on mobile and the matching 1120 files at wider sizes. Replace these with aligned before and after photos.
- The homepage uses the supplied portrait MP4s for its opening film and studio reel. To add dedicated landscape cuts, place the MP4s in `public/assets/` and set the `wide` paths under `studioFilms` in `src/data/studio.js`. That file also holds the press preview video IDs and studio contact details.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/pages/` | Home, About, Past Projects, case studies, Contact, journal, and 404 |
| `src/layouts/BaseLayout.astro` | Shared page shell, header, and footer |
| `src/components/` | Reusable images, film players, project cards, and carousels |
| `src/styles/global.css` | Tailwind CSS and site styles |
| `src/scripts/` | Mobile navigation and page interactions |
| `src/content/work/` | Markdown project entries powering the project gallery and case studies |
