# Design Critique: Enigma Website Redesign (vision + system, pre-code)

**Stage:** final check before coding · **Reviewed:** desktop full-page render, mobile hero render, design-system.md

### Overall Impression
The direction lands: the page finally *looks like cinema* — the logo becomes a glowing centerpiece instead of a pulsing nav ornament, the one-accent discipline holds, and the memorial gestures are quiet and dignified. The biggest opportunities are all in brand mechanics: the full logo lockup fails at small sizes, and a handful of typographic wraps are accidental rather than designed.

### Usability
| Finding | Severity | Recommendation |
|---|---|---|
| Nav + footer logo (54px/40px) renders the lockup's wordmark as an illegible smudge — and it *duplicates* the typeset "ENIGMA ENTERTAINMENT" beside it | 🔴 | Use the **triangle mark only** at small sizes (a crop of the same untouched artwork — standard mark-vs-lockup brand practice); the full lockup stays as the hero centerpiece |
| Featured-film meta line wraps mid-phrase, orphaning "HEWITT" | 🔴 | Split into two deliberate lines (title meta / credit line) with a max-width |
| "Watch *reTribution* on IMDb" links to an IMDb title page, not a player | 🟢 | Kept as-is — it's the family's original wording and their canonical link. Open question for Carol: relabel to "*reTribution* on IMDb"? |
| Nav has 6 links + pill; gets crowded below ~1200px | 🟡 | Tighten gaps ≤1200px; switch to hamburger below **900px** (not 640) |

### Visual Hierarchy
- **First read (2s):** glowing triangle → "Bold, independent storytelling." → teal CTA. Correct order, correct emotion.
- **Reading flow:** hero → story timeline → *reTribution* feature (the italic 96px title is rightly the loudest element after the hero) → filmography → founders → vision → contact. No competing elements.
- **Accidental wraps:** hero H1 and contact headline break lines arbitrarily. Use `text-wrap: balance` so wraps are designed, not incidental.

### Consistency
| Element | Issue | Fix in code |
|---|---|---|
| Timeline copy | "Nathan **dies** in a tragic accident" (historic present) | Use the family's own published phrasing: "Nathan **died** in a tragic accident" — their words, their tone |
| "IMDB" in caps labels | Brand casing is **IMDb** | Use "IMDb" everywhere, even in letterspaced caps |
| Founders photo | Source photo has a **circular vignette baked in**; placing it in a rectangular hairline frame shows a circle floating in a dark box | Embrace it: circular portrait with a hairline ring — matches the source instead of fighting it |
| Timeline year/text alignment | First text line sits slightly below the year's baseline | Align text first-line to year baseline (grid `align-items: start` + matched padding) |
| Laurel + section icons | Hero laurels render sparse, "Preserve" icon ambiguous | Redraw laurel SVG fuller; swap Preserve icon to a clearer archive/film-reel form |

### Accessibility
- **Contrast:** all token pairs pass AA (see system §1.1); dimmest text (#75838B) = 4.9:1, used only ≥12px. ✓
- **Touch targets:** CTAs 50–56px, nav links need padding to reach 44px on mobile. Enforce in code.
- **Static mock → real page gaps to close in code:** visible focus rings, skip-link, one `<h1>`, `aria-expanded` hamburger, scroll-spy that never removes outlines, `prefers-reduced-motion` guard on all reveals.
- **Mobile eyebrow** wraps to two centered lines — reduce to 9px/0.3em tracking on mobile so it holds one line.

### Emotional tone (memorial sensitivity)
- Studio-first, memorial-woven-through is the right balance: the site is *about Nathan's living body of work*, not an obituary. ✓
- Violet reserved for exactly two moments (2023 node, footer dedication) reads as intentional and restrained. ✓
- Keep all biographical phrasing verbatim from the family's original copy — never dramatize their words.

### What Works Well
- The transparent-background logo treatment on the dark stage, with a **static** glow, is a genuine upgrade while honoring "keep the logo as it is."
- One-accent discipline + gold-only-for-laurels gives the award real weight.
- The timeline turns the story's text wall into the page's most moving section.
- Sections as full-width light bands (instead of the old boxes-in-boxes) reads far more cinematic.

### Priority Recommendations (to apply in the build)
1. **Triangle-mark crop for nav + footer** — fixes the worst legibility failure without touching the artwork.
2. **Designed line-breaks** — `text-wrap: balance` on display headlines; two-line film meta; one-line mobile eyebrow.
3. **Circular founders portrait** — stop fighting the source photo's baked-in crop.
4. **Copy fidelity pass** — "died" not "dies"; "IMDb" casing; all links/handles copied exactly from the original site.
5. **Ship the a11y layer the mock can't show** — focus rings, skip-link, hamburger semantics, reduced-motion guards.
