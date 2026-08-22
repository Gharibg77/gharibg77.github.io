# Enigma Entertainment Group — Website

The public site of Enigma Entertainment Group LLC, honouring the work and legacy of writer–director Nathan Hewitt.

## Running locally
No build step — open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Editing
| What you want to change | Where |
|---|---|
| Text / links / sections | `index.html` |
| Colors, fonts, spacing | the `:root` tokens at the top of `css/styles.css` |
| Menu / animations | `js/main.js` |
| The *reTribution* poster | add `assets/retribution-poster.jpg`, then replace the placeholder `<div class="feature__poster">` in `index.html` with `<img class="feature__poster-img" src="assets/retribution-poster.jpg" alt="reTribution film poster">` |

Design decisions are documented in `docs/design-system.md`; `CLAUDE.md` gives AI assistants the project context.

## Deploying
Commit and push to `main` — GitHub Pages serves this folder as-is.
