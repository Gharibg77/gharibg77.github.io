# Enigma Entertainment Group — Design System

**Direction:** "The Projector Room" — cinematic & elegant. Everything on this site behaves like light in a dark theater: one glowing accent (the logo's teal), deep layered blacks, serif titles like film credits, and restrained gold reserved for laurels.

**Scope:** single-page static site (HTML/CSS/JS), no framework, GitHub Pages–ready.

---

## 1. Design Tokens

> Tokens are the *atomic decisions* of the design — named once, reused everywhere.
> In code they become CSS custom properties on `:root`, so changing a token re-themes the whole site.

### 1.1 Color

| Token | Value | Role | Contrast on `bg-0` |
|---|---|---|---|
| `--bg-0` | `#050607` | Page ground (deepest black, cool) | — |
| `--bg-1` | `#07090C` | Raised section band | — |
| `--bg-2` | `#0A0D12` | Panel / card gradient end | — |
| `--bg-card` | `linear-gradient(180deg, #090C10, #060708)` | Card fill | — |
| `--ink` | `#EDF1F2` | Primary text | 16.9:1 ✓ |
| `--ink-strong` | `#F4F7F7` | Display headlines | 17.8:1 ✓ |
| `--ink-mid` | `#A9B4BA` | Body copy | 8.6:1 ✓ |
| `--ink-dim` | `#75838B` | Meta, captions | 4.9:1 ✓ (small-text floor) |
| `--teal` | `#3EC9DA` | THE accent: links, CTAs, eyebrows, hairline highlights | 9.2:1 ✓ |
| `--teal-soft` | `#7FDCE8` | Link hover | 11.5:1 ✓ |
| `--teal-deep` | `#157785` | Glows, gradient light only — never text | — |
| `--teal-ink` | `#04181B` | Text on teal buttons | 8.3:1 on teal ✓ |
| `--violet` | `#4B2C8E` | Atmosphere gradients only — **never text** | — |
| `--violet-text` | `#9C7BE8` | The single memorial accent (2023, "In memory") | 5.6:1 ✓ |
| `--gold` | `#C9A959` | Laurels & awards only | 7.4:1 ✓ |
| `--line` | `rgba(158, 216, 224, 0.12)` | Hairline borders | — |
| `--line-strong` | `rgba(158, 216, 224, 0.22)` | Card borders, image frames | — |

**Color rules**

1. **One working accent.** Teal is the only interactive color. If everything glows, nothing does.
2. **Gold = earned.** `--gold` appears exclusively with festival laurels/awards. Never decorative.
3. **Violet = memory.** Deep violet lives in background light only; `--violet-text` marks exactly two moments (the 2023 timeline node, the footer dedication).
4. **No pure black / pure white.** Blacks are cool-toned (`#050607`), whites slightly cool (`#EDF1F2`) — matches the logo's temperature.

### 1.2 Typography

| Token | Family | Fallback | Used for |
|---|---|---|---|
| `--font-display` | Cormorant Garamond (500, 600, + italics) | Georgia, serif | Headlines, film titles, years, numerals |
| `--font-ui` | Archivo (400–700) | Helvetica Neue, Arial, sans-serif | Body, labels, buttons, nav |

**Type scale** (desktop → mobile)

| Token | Size | Line | Tracking | Role |
|---|---|---|---|---|
| `--t-hero` | 84 → 42px | 1.06 | -0.5px | H1, one per page |
| `--t-film` | 96 → 52px | 1.0 | 0 | Featured film title (italic) |
| `--t-h2` | 46 → 32px | 1.12 | 0 | Section headlines |
| `--t-h3` | 27 → 22px | 1.2 | 0 | Card titles |
| `--t-card-film` | 42 → 30px | 1.05 | 0 | Filmography titles (italic) |
| `--t-year` | 34 → 26px | 1.1 | 0 | Timeline years (serif) |
| `--t-lede` | 18 → 16px | 1.7 | 0 | Hero subtitle |
| `--t-body` | 16 → 15px | 1.8 | 0 | Paragraphs |
| `--t-small` | 15 → 14px | 1.7 | 0 | Card copy, bios |
| `--t-meta` | 12–13px | 1.6 | 0.18–0.22em | Meta lines, captions (caps) |
| `--t-eyebrow` | 12px | 1 | 0.44em | Section eyebrows (caps, teal) |

**Type rules**

1. Film titles are **always** display-serif *italic* with original casing: *reTribution*, *A Short Goodbye* — including inside buttons and body text.
2. Anything uppercase gets generous tracking (≥ 0.14em); serif display text is never uppercase and never letter-spaced.
3. Max measure for body copy: 640px (~65ch).
4. Weights: serif 500/600 only; Archivo 400 body, 500–600 labels, 700 buttons. No 300s (too thin on dark), no 800s.

### 1.3 Spacing (4px base)

`--s-1..10` = 4, 8, 12, 16, 24, 32, 48, 64, 96, 120

| Context | Value |
|---|---|
| Section vertical padding | 96–104px desktop · 64px mobile |
| Section header → content | 48–56px |
| Card padding | 40px desktop · 24–28px mobile |
| Grid gaps | 32px cards · 84–96px two-column splits |
| Button padding | 17px × 30px (lg) · 14px × 24px (md) |

### 1.4 Borders, radii, elevation

| Token | Value | Notes |
|---|---|---|
| `--r-btn` | 2px | Sharp, cinematic — deliberately not pill |
| `--r-card` | 3px | Barely-rounded panels |
| `--r-img` | 3px | Photos, poster |
| Hairlines | 1px `--line` / `--line-strong` | Section seams, card borders |
| Elevation | Light, not shadow | Dark UI elevates with **glow + hairline**, not drop shadows: `filter: drop-shadow(0 0 42px rgba(62,201,218,.28))` on the hero logo; cards rely on gradient fill + border |

### 1.5 Motion

| Token | Value |
|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--dur-hover` | 180ms |
| `--dur-reveal` | 650ms |
| Reveal pattern | Sections fade-up 16px on scroll (IntersectionObserver), children stagger 80ms |
| Hover pattern | Buttons: background lighten + 1px lift; cards: border brightens to `--line-strong`; links: color → `--teal-soft` |
| **Hard rule** | No looping animation. The old pulsing logo glow is retired — the glow is static. `prefers-reduced-motion: reduce` disables all reveals/lifts. |

---

## 2. Layout Grid

| Token | Value |
|---|---|
| Container | `max-width: 1200px`, centered, `padding-inline: 32px` (20px mobile) |
| Section rhythm | Alternating `--bg-0` / gradient band (`--bg-1 → --bg-2`), separated by hairlines — **no floating card-in-card boxes** (the old site's pattern) |
| Two-column splits | CSS grid `1fr 1fr` or asymmetric (`380px 1fr`, `460px 1fr`), gap 84–96px; collapse to single column < 900px |
| Card rows | `repeat(2–3, minmax(0, 1fr))`, gap 32px; collapse < 900px / < 640px |
| Breakpoints | 1024px (pad), 900px (columns collapse), 640px (mobile type scale, nav → hamburger) |

**Page order:** Nav → Hero → Our Story → Featured Film → Nathan's Work → Founders → Vision → Contact → Footer.

---

## 3. Components

### 3.1 Navigation bar

Sticky, `rgba(5,6,7,0.88)` + `backdrop-filter: blur(14px)`, bottom hairline.

| Part | Spec |
|---|---|
| Logo | Transparent-background lockup, **height 54px** (was 90px — nav is chrome, not a billboard), no glow in nav |
| Brand text | Two stacked lines: "ENIGMA ENTERTAINMENT" 13px/0.32em + "GROUP LLC" 10px/0.42em `--ink-dim`, split from logo by 1px vertical hairline |
| Links | 12px caps, 0.18em, `--ink-mid` → white on hover with teal underline growing left→right (180ms) |
| Contact | Outlined teal pill — the only pill on the site (nav affordance) |
| States | Hover (above) · Focus: 2px teal `outline-offset: 3px` · Current-section: teal text (scroll-spy) |
| Mobile < 640px | Logo 38px + "ENIGMA" wordmark; links collapse into hamburger (24px stroke SVG) opening a full-screen overlay; body scroll locked; Esc / link-tap closes |
| A11y | `<header><nav aria-label="Main">`; hamburger is `<button aria-expanded aria-controls>`; overlay traps focus |

### 3.2 Buttons

| Variant | Fill | Text | Border | Hover | Use |
|---|---|---|---|---|---|
| Primary | `--teal` | `--teal-ink`, 13px/700/0.14em caps | none | bg → `#5FD4E3`, translateY(-1px) | 1 per section max |
| Ghost | transparent | `--ink` | 1px `--line-strong` | border + text → teal | Secondary action |
| Text link | — | `--teal` 12px/600/0.16em caps + ↗ icon | — | → `--teal-soft`, icon nudges 2px | Inline / card actions |

All: `--r-btn` 2px; min hit target 44px; visible focus ring (2px teal, offset 3px); external links get the 45° arrow SVG + `rel="noreferrer"`.

### 3.3 Section header

Eyebrow (12px caps 0.44em teal, optional 44px leading hairline) → serif H2 → optional lede (`--ink-mid`, max 640px). Left-aligned by default; centered only for Vision and Contact. **Every section starts with this pattern — no exceptions.**

### 3.4 Hero

Full-height dark stage. Background = 3 layered radial/conic gradients (violet crown top, teal beam lower-left echoing the logo's rays — beam opacity ≤ 0.15 so text wins). Content centered: logo (190px, static teal glow) → eyebrow → H1 → lede → CTA pair → laurel award strip. Mobile: logo 120px, CTAs stack full-width.

### 3.5 Laurel award badge

Two mirrored stroke-SVG laurel branches in `--gold` flanking two caps lines: award name (gold, 700) + festival/year (`--ink-dim`, 500). Sizes: lg (hero, 34×56 branches) · md (film panel, 26×42). Never rendered without a real award.

### 3.6 Timeline (Our Story)

Grid `120px 1px 1fr`; serif right-aligned years in teal; continuous 1px hairline rail; entries 40px apart. The 2023 node uses `--violet-text` + violet-tinted rail segment — the design's one quiet memorial gesture. Scroll-reveal staggers entries 80ms. Semantics: `<ol>` with years as `<h3>` — screen-reader order matches visual order.

### 3.7 Feature panel — "Now Showing"

Gradient band section. Grid `380px 1fr`, gap 84px. Left: poster frame, 2:3, hairline border, inner teal light-wash gradient — holds the film-frame icon + `[FILM POSTER / STILL]` caption until a real asset exists. Right: eyebrow with hairline → film title (`--t-film`, italic serif) → caps meta line → synopsis → laurel (md) → button row (Primary IMDb · Ghost FilmFreeway · Text @filmretribution). Mobile: stacks, poster max-width 280px centered.

### 3.8 Film card (Nathan's Work)

Card fill + hairline border + **2px teal top rule**; serif index numeral ("01"), italic serif title (42px), caps meta, one-line description, text-link. Hover: border → `--line-strong`, top rule brightens. Grid of 2 (grows to 3 as the slate grows).

### 3.9 Founder block

Asymmetric grid `460px 1fr`. Photo: hairline frame, `--r-img`, `filter: saturate(0.82) contrast(1.04)` (matches the palette without faking B&W), caps caption below. Text: section header → shared intro → two name blocks (serif name 26px, teal caps role, bio) each with a 1px teal left rule, 22px padding. **Uses the real joint photo of Ann & Scott; individual portraits slot in when available — never stretch the 48px legacy thumbnail.**

### 3.10 Vision pillar card

3-across card row. 30px stroke icon (1.4px weight, teal, drawn on a 24px grid — film frame / people / archive), serif H3, `--t-small` copy. Icons are inline SVG — never emoji.

### 3.11 Contact + Footer

Contact: centered, teal-glow radial rising from below; serif invitation headline ("Let's make something worth watching."); Primary email button + Ghost Instagram. Footer: hairline seam, `#040506`; logo 40px + © line left; *"In memory of Nathan Hewitt"* in `--violet-text` italic serif center; caps text links right. Mobile: stacks centered.

---

## 4. Accessibility & performance baseline

1. Contrast: all text tokens pass WCAG AA on their grounds (table §1.1); `--ink-dim` is the floor and only for ≥12px meta.
2. Landmarks: `<header> <main> <section aria-labelledby> <footer>`; skip-to-content link; one `<h1>`.
3. Focus: every interactive element has a visible 2px teal focus ring; scroll-spy never removes outlines.
4. Motion: all reveals gated behind `prefers-reduced-motion: no-preference`.
5. Images: explicit `width/height` (no layout shift), `loading="lazy"` below the fold, meaningful `alt`.
6. Performance: system fonts fallback while Google Fonts load (`font-display: swap`); no JS frameworks; single CSS file; images pre-sized.

---

## 5. Token → code mapping

```css
:root {
  /* color */
  --bg-0:#050607; --bg-1:#07090C; --bg-2:#0A0D12;
  --ink:#EDF1F2; --ink-strong:#F4F7F7; --ink-mid:#A9B4BA; --ink-dim:#75838B;
  --teal:#3EC9DA; --teal-soft:#7FDCE8; --teal-deep:#157785; --teal-ink:#04181B;
  --violet:#4B2C8E; --violet-text:#9C7BE8; --gold:#C9A959;
  --line:rgba(158,216,224,.12); --line-strong:rgba(158,216,224,.22);
  /* type */
  --font-display:'Cormorant Garamond', Georgia, serif;
  --font-ui:'Archivo', 'Helvetica Neue', Arial, sans-serif;
  /* rhythm */
  --container:1200px; --r-btn:2px; --r-card:3px;
  --ease-out:cubic-bezier(.22,1,.36,1); --dur-hover:180ms; --dur-reveal:650ms;
}
```
