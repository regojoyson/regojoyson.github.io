# regojoyson.github.io

Personal portfolio of **Samuel Joyson Rego**, Staff Software Engineer.

A clean, single-page profile site with light and dark modes, subtle scroll animations, a timeline, filterable projects with detail popups, and a contact form.

It's a static site with no build step: plain HTML, CSS and JavaScript. Fonts (Inter) and tech logos (Devicon) load from a CDN.

## Edit content

All text lives in [`js/data.js`](js/data.js): profile, stats, about, experience, projects, skills, education and certifications.

## Run locally

ES modules need a local server; opening the file directly won't work:

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173.

## Deploy to GitHub Pages (free)

1. On GitHub, create a **public** repo named exactly `regojoyson.github.io`.
2. From this folder:

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/regojoyson/regojoyson.github.io.git
git push -u origin main
```

3. In the repo, go to **Settings → Pages**. Set Source to *Deploy from a branch*, Branch to `main`, and folder to `/ (root)`.
4. After about a minute the site is live at **https://regojoyson.github.io**.

Every later `git push` redeploys the site automatically.

## Profile photo

The hero photo is `assets/profile.jpg`. Replace it with any square photo (about 600×600). If it's missing, the hero shows your initials.

## Structure

```
index.html        page structure + icon sprite
css/style.css     all styling (light/dark themes, responsive, reduced-motion)
js/data.js        ← all content
js/main.js        rendering, animations, theme toggle, project filter/modal, contact form
```
