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
| The *reTribution* poster | replace `assets/retribution-poster.jpg` with a new file of the same name (a higher-resolution original upgrades sharpness instantly, no code change) |

Design decisions are documented in `docs/design-system.md`; `CLAUDE.md` gives AI assistants the project context.

## Deploying
Commit and push to `main` — GitHub Pages serves this folder as-is.
