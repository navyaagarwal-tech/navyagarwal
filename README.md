# navyagarwal.com

Personal site for Navya Agarwal — plain HTML/CSS, no build step, deployed via GitHub Pages.
Look and feel is modeled on the [Indigo](https://github.com/sergiokopplin/indigo) Jekyll theme
(minimalist, centered layout, indigo accent color, dark/light toggle) but implemented as
static HTML so it can keep deploying exactly like the current site does.

## Structure

```
navyagarwal/
├── index.html            Home page: avatar, name, tagline, socials, nav
├── talks/index.html        Speaking engagements        → /talks/
├── writing/index.html       Articles                    → /writing/
├── press/index.html          Press & interviews          → /press/
├── jury/index.html             Awards jury roles           → /jury/
├── advisory/index.html       Advisory & leadership roles → /advisory/
├── shared.css                  Shared styling (Indigo-inspired, light + dark theme)
├── theme.js                      Dark/light toggle logic (localStorage + system preference)
├── assets/
│   └── photo.jpg                500×500 thumbnail used on the home page
├── .nojekyll                     Tells GitHub Pages to skip Jekyll processing
└── CNAME                         Custom domain: navyagarwal.com
```

Each section lives in its own folder as `index.html` rather than a flat `talks.html` file, so
GitHub Pages serves it at the clean URL `/talks/` (no `.html` in the address bar). All internal
links, and the `shared.css`/`theme.js`/`assets` references, use root-absolute paths (e.g.
`/shared.css`, `/talks/`) so they resolve correctly regardless of folder depth.

## Updating your photo

`assets/photo.jpg` is a 500×500 thumbnail cropped from your headshot — kept small on purpose so
the page loads fast. To swap it for a different photo:

1. Drop the new image into `assets/`.
2. Crop it to a square focused on your face/shoulders and resize down to roughly 500×500px
   (a full-resolution photo works but is unnecessarily heavy for an avatar).
3. Save it as `assets/photo.jpg` (or update the `<img src>` in `index.html` if you use a different filename).

## Previewing locally

No build step needed — just serve the folder so the clean URLs resolve the same way GitHub
Pages will serve them:

```bash
cd navyagarwal
python3 -m http.server 8000
# visit http://localhost:8000/talks/  (not talks.html)
```

Opening `index.html` directly by double-clicking will work for the home page, but the `/talks/`-style
links won't resolve without a local server, since browsers need an actual HTTP server to map
`/talks/` to `talks/index.html`.

## Dark / light theme

Handled by `theme.js` + CSS variables in `shared.css` (`:root` for light, `html[data-theme="dark"]`
for dark). The toggle button (top-right on every page) flips the theme and remembers the choice
in the browser's `localStorage`. It also respects the visitor's OS-level preference on first visit.

## Publishing to GitHub

```bash
cd navyagarwal
git add .
git commit -m "Clean URLs: move sections into folders with index.html"
git push
```

Since a `CNAME` file is included, GitHub Pages will keep serving the site at
`navyagarwal.com` — no extra DNS changes needed. The `.nojekyll` file ensures GitHub Pages
serves the files as-is instead of running them through Jekyll.
