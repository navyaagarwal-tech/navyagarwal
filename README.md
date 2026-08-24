# navyagarwal.com

Personal site for Navya Agarwal — plain HTML/CSS, no build step, deployed via GitHub Pages.
Look and feel is modeled on the [Indigo](https://github.com/sergiokopplin/indigo) Jekyll theme
(minimalist, centered layout, indigo accent color, dark/light toggle) but implemented as
static HTML so it can keep deploying exactly like the current site does.

## Structure

```
navyagarwal/
├── index.html        Home page: avatar, name, tagline, socials, nav
├── talks.html         Speaking engagements
├── writing.html        Articles
├── press.html          Press & interviews
├── jury.html            Awards jury roles
├── advisory.html      Advisory & leadership roles
├── shared.css           Shared styling (Indigo-inspired, light + dark theme)
├── theme.js              Dark/light toggle logic (localStorage + system preference)
├── assets/
│   ├── photo.jpg                500×500 thumbnail used on the home page (cropped from your headshot)
│   └── photo-placeholder.png    Unused now — safe to delete
└── CNAME                 Custom domain: navyagarwal.com
```

## Updating your photo

`assets/photo.jpg` is a 500×500 thumbnail cropped from the headshot you provided — kept small on
purpose so the page loads fast. To swap it for a different photo:

1. Drop the new image into `assets/`.
2. Crop it to a square focused on your face/shoulders and resize down to roughly 500×500px
   (a full-resolution photo works but is unnecessarily heavy for an avatar).
3. Save it as `assets/photo.jpg` (or update the `<img src>` in `index.html` if you use a different filename).

## Previewing locally

No build step needed — just open `index.html` in a browser, or serve the folder:

```bash
cd navyagarwal
python3 -m http.server 8000
# visit http://localhost:8000
```

## Dark / light theme

Handled by `theme.js` + CSS variables in `shared.css` (`:root` for light, `html[data-theme="dark"]`
for dark). The toggle button (top-right on every page) flips the theme and remembers the choice
in the browser's `localStorage`. It also respects the visitor's OS-level preference on first visit.

## Publishing to GitHub

This folder isn't a git repo yet. To push it to your existing repo
(`https://github.com/navyaagarwal-tech/navyagarwal`):

```bash
cd navyagarwal
git init
git remote add origin https://github.com/navyaagarwal-tech/navyagarwal.git
git add .
git commit -m "Redesign with Indigo-inspired look, dark/light theme, avatar photo"
git branch -M main
git push -u origin main --force   # only if you want to replace the current repo contents
```

Since a `CNAME` file is included, GitHub Pages will keep serving the site at
`navyagarwal.com` once pushed — no extra DNS changes needed.
