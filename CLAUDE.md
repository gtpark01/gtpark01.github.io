# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal academic website for **Geon-Tae Park**, PhD student in Electrical and Computer Engineering at the University of Michigan, Ann Arbor. Built as a Jekyll site, deployed via GitHub Pages from `main` of `gtpark01.github.io`.

## Local development

```bash
bundle install        # one time
bundle exec jekyll serve   # http://localhost:4000 with live reload
```

The `Gemfile` pins the GitHub Pages bundle, so what you see locally matches what GitHub Pages builds.

## Architecture — data-driven, modular

Content lives in **`_data/*.yml`** (single source of truth). Layouts and includes are presentational only. To add or edit content, edit the YAML — you should not need to touch HTML for routine updates.

### Data files (`_data/`)
- `navigation.yml` — top nav. Order = display order.
- `social.yml` — social links. `icon` keys into `_includes/icons.html`.
- `news.yml` — homepage news feed. Newest first. `tag` styles the chip.
- `education.yml`, `experience.yml` — used by `/about/` and `/cv/`.
- `publications.yml` — papers. `pdf:` points into `/papers/`. `featured: true` puts the paper on the home page's "Selected publications" block.
- `projects.yml` — featured projects shown at `/projects/`.
- `research_areas.yml` — the three research directions, shown on home and `/research/`.

### Layouts (`_layouts/`)
- `default.html` — shell: `<head>`, nav, main, footer, scripts. Every other layout extends this via `layout: default` front matter.
- `home.html` — full landing page (hero, intro strip, research preview, featured pubs, news). Pulls everything from `_data/`.
- `page.html` — used by every standard page; renders `page.title` + `page.eyebrow` + `page.lede` as a header, then `{{ content }}`.

### Includes (`_includes/`)
- `head.html` — `<head>` with fonts, theme color, FOUC-prevention script that reads `localStorage.theme`.
- `nav.html` — sticky header with theme toggle and mobile drawer.
- `footer.html` — large CTA + 4-col link grid + decorative wordmark.
- `icons.html` — SVG icon set. Usage: `{% include icons.html name="github" %}`. Names: `mail · scholar · orcid · github · linkedin · arrow-up-right · arrow-right · arrow-down · sun · moon · pdf · doi · spark`.
- `scroll-progress.html` — top-of-page progress bar.

### Pages
Markdown files at repo root, each with front matter (`layout`, `title`, `permalink`, `eyebrow`, `lede`, `slug`):
`index.md` (home) · `about.md` · `research/index.md` · `publications.md` · `projects.md` · `cv.md` · `contact.md`.

The `slug` front-matter value drives `<body class="page page--{slug}">` so any page can be styled individually.

### Assets
- `assets/css/main.css` — single stylesheet, organized in 22 numbered sections. Uses CSS custom properties for the design system (tokens at the top under `:root` and `[data-theme="dark"]`). Modern CSS only (`color-mix`, `clamp`, `aspect-ratio`); do not add Sass.
- `assets/js/main.js` — vanilla JS. Sections inside: reveal animations (IntersectionObserver), header behavior, theme toggle, mobile menu, scroll progress, cursor glow, hero rotator, hero tilt, publications filter.
- `assets/images/portrait.jpg` — hero portrait. **Replaceable** — keep dimensions roughly portrait (4:5).
- `assets/images/research-slides/research[1-3].jpg` — research area images. **Replaceable**.
- `papers/*.pdf` — published papers. **Filenames are stable; do not rename.** Referenced from `_data/publications.yml`.

## Design system (key invariants)

- **Tokens in `:root` and `[data-theme="dark"]`** in `main.css`. Change a color once, the whole site updates.
- **Typography:** `Fraunces` (variable serif, headings) + `Inter` (sans, body) + `JetBrains Mono` (mono details). Loaded from Google Fonts in `head.html`.
- **Palette:** warm paper (`--color-bg: #faf8f2`) with deep ink and U-M-derived accent (`#00274c` blue, `#ffcb05` maize).
- **Motion:** all transitions use the `--ease-out`/`--ease-in-out`/`--ease-soft` cubic-beziers and the `--dur*` duration tokens. Respect `prefers-reduced-motion` (handled globally).
- **Reveal animations:** add `data-reveal` to any element and it will fade-up on scroll. Inside it, `<span class="reveal-line"><span>text</span></span>` and `<span class="reveal-word"><span>text</span></span>` give masked line/word reveals (used in section titles). Standalone reveal-lines without a `data-reveal` parent are observed independently.

## Adding new content

| Task | Where |
|---|---|
| Add a publication | `_data/publications.yml` (set `featured: true` to surface on home) |
| Add news item | `_data/news.yml` |
| Add nav link | `_data/navigation.yml` (then create the page if needed) |
| Add a new page | Create `<slug>.md` with `layout: page`, set `title`/`permalink`/`slug` |
| Change site colors | `:root` tokens in `main.css` |
| Update rotating hero keywords | `keywords` array in `assets/js/main.js` |
| Replace hero portrait | drop into `assets/images/portrait.jpg` |

## Conventions

- Run `bundle exec jekyll build` to check for build errors before committing big changes.
- Don't rename anything in `papers/` — `_data/publications.yml` points there.
- The site is fully responsive; breakpoints live at the bottom of `main.css` (`1024px`, `768px`, `480px`). Test mobile after any layout change.
- Reduced-motion handling is global — animations are suppressed automatically.
