# CLAUDE.md

## Project
Public website for Enigma Entertainment Group LLC — an independent film production company founded by Ann & Scott Hewitt to honour the legacy of their son, writer–director Nathan Hewitt, and to champion new independent storytelling.

## Tech Stack
- Frontend: static HTML + CSS + vanilla JS (no framework, no build step)
- Hosting: GitHub Pages (served from the repo root; all paths are relative so it works at any base path, e.g. /enigma)
- Fonts: Google Fonts (Cormorant Garamond + Archivo), loaded with `display=swap`

## Key Files
- `index.html` — the entire single-page site (semantic sections with anchor IDs)
- `css/styles.css` — all styling; design tokens live in `:root` at the top
- `js/main.js` — mobile menu, scroll reveals, scroll-spy, footer year (all optional-enhancement JS; the page works with JS disabled)
- `assets/logo-lockup.png` — original logo artwork, background made transparent (used in hero)
- `assets/logo-mark.png` — triangle-only crop of the same artwork (used in nav + footer)
- `assets/founders.jpg` — Ann & Scott (photo has a circular vignette baked in; CSS renders it as a circle)
- `enigma-logo.png` — the ORIGINAL untouched logo file; never delete or overwrite
- `docs/design-system.md` — tokens, type scale, component rules (the source of truth for styling decisions)
- `docs/design-critique.md` — the critique that shaped the current layout

## Conventions
- Design tokens: change colors/spacing ONLY via the CSS custom properties in `:root`
- Film titles are always display-serif italic with original casing: *reTribution*, *A Short Goodbye* (class `film-title`)
- Uppercase text always gets letter-spacing ≥ 0.14em; serif display text is never uppercase
- One accent color (teal). Gold appears only with festival laurels. Violet text appears only in the two memorial moments (2023 timeline node, footer dedication)
- BEM-ish class naming: `block__element--modifier`
- NO em or en dashes (— –) anywhere in user-visible site copy (Carol's rule: they read as AI-written). Rewrite the sentence instead. Ordinary hyphens in compound words (writer-director, festival-ready) are fine; meta separators use the middle dot (·)

## Constraints
- Keep the logo artwork untouched — cropping/transparency for presentation is fine; redrawing is not
- All biographical copy about Nathan uses the family's own published phrasing — do not dramatize or rewrite it
- No looping animations (the old pulsing logo glow was deliberately retired); all motion respects `prefers-reduced-motion`
- No JS frameworks, no build step — the repo must deploy to GitHub Pages as-is
- Real facts only: never invent awards, dates, or quotes. The Now Showing poster lives at `assets/retribution-poster.jpg` (provided by the family); to update it, replace that file with a same-named image

## Deploy
Commit and push to `main` — GitHub Pages serves the repo root. The legacy SvelteKit build (`_app/`, `200.html`) is no longer referenced by `index.html`.

## Positioning (per Scott Hewitt, Aug 2026)
Primary audience: film distributors. Primary flow: watch *reTribution* → contact to distribute. Contact copy leads with distribution. No investor-facing content — the founders prefer self-financing to retain control. The site remains publicly findable (Carol's call).

## Tone
Cinematic, warm, dignified. The site is about Nathan's living body of work — studio-first, memorial woven through quietly.
