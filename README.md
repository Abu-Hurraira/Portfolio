# Ammar Abu Hurraira — Portfolio

Premium personal portfolio for **Ammar Abu Hurraira**, a Software Engineer specializing in **Laravel**, **React**, and **.NET**.

Live-ready Vite app with a black & crimson aesthetic, smooth motion, lazy-loaded sections, and project case studies.

**GitHub:** [Abu-Hurraira/Portfolio](https://github.com/Abu-Hurraira/Portfolio)  
**Profile:** [github.com/Abu-Hurraira](https://github.com/Abu-Hurraira)

---

## About

This site showcases professional experience at **Creative IT Park** (Islamabad), enterprise CRM work (Laravel, WhatsApp Business API, Gemini AI), and selected projects:

- Teacher Folder Management System (ASP.NET Core)
- Creative IT Park CRM (Laravel)
- Restaurant Finder (React + Leaflet)
- Tracker (productivity / analytics)

---

## Tech stack

| Layer | Tools |
|--------|--------|
| UI | React 19, TypeScript, Tailwind CSS v4 |
| Motion | Framer Motion, GSAP, Lenis smooth scroll |
| Routing | React Router |
| Tooling | Vite 8, oxlint |
| Deploy | Vercel / Netlify (static `dist` build) |

---

## Features

- Black & red theme with **dark / light** modes
- Hero with samurai artwork, typing titles, and CTAs
- Lazy-loaded home sections (viewport-aware) that persist across theme switches
- Project grid + dedicated case-study pages
- Live **GitHub** profile & repos via API
- Company showcase, experience timeline, skills bento, services, contact form
- Command palette (`Ctrl` / `⌘` + `K`), floating dock, custom cursor
- SEO metadata, Open Graph tags, `sitemap.xml`, `robots.txt`
- Konami-code easter egg

---

## Getting started

### Prerequisites

- Node.js 20+ recommended
- npm

### Install & run

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

---

## Project structure

```text
src/
  components/   # UI, layout, effects, shared helpers
  sections/     # Home page sections
  pages/        # Routes (Home, Project detail, Contact, Company, 404)
  context/      # Theme + app state
  data/         # Site content & project metadata
  services/     # GitHub API
  hooks/        # Reusable hooks
public/
  hero/         # Hero artwork
  projects/     # Project screenshots (PNG)
```

---

## Customization

| What | Where |
|------|--------|
| Name, email, phone, links | `src/data/index.ts` |
| Projects & copy | `src/data/index.ts` |
| Hero image | `public/hero/anime-character.jpg` |
| Project images | `public/projects/` (see `public/projects/README.md`) |
| Resume PDF | add `public/resume.pdf` |

---

## Deploy

### Vercel

1. Import the GitHub repo
2. Build command: `npm run build`
3. Output directory: `dist`

`vercel.json` is included for SPA routing.

### Netlify

1. Connect the repo
2. Build: `npm run build`
3. Publish: `dist`

`netlify.toml` is included for SPA redirects.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run oxlint |

---

## License

Personal portfolio project. Feel free to fork for learning; please don’t republish as your own without credit.

---

Built by [Ammar Abu Hurraira](https://github.com/Abu-Hurraira) · Islamabad, Pakistan
