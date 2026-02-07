# Sarah Connor for Senate — Campaign Website

A modern, responsive single-page campaign website built with React, Vite, and Tailwind CSS. Created by [Win Advocacy](https://winadvocacy.com) — we build political websites that win.

## Quick Start

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
```

## Customization

This template is designed to be easily re-skinned for any candidate.

### 1. Candidate Data (`src/config/siteData.js`)

All candidate-specific content — name, slogans, bio, contact info — lives in one file. Update it to swap in a new candidate.

### 2. Images (`src/assets/`)

Replace these images with your candidate's assets:

| File | Purpose |
|------|---------|
| `hero-bg.png` | Hero section background |
| `logo-white.png` | Campaign logo |
| `about-intro.png` | Image + text section image |
| `candidate-portrait.png` | Candidate photo (about section) |

### 3. Colors (`src/config/colors.js`)

Update the color palette to match the campaign's brand. Colors are automatically available as Tailwind classes (e.g., `bg-primary-600`, `text-secondary-500`).

### 4. Meta / SEO (`index.html`)

Update the `<title>`, Open Graph tags, and favicon files in `src/assets/favicon/`.

## Tech Stack

- **React 19** with Vite
- **Tailwind CSS** for styling
- **Motion** for animations

---

Built with care by [Win Advocacy](https://winadvocacy.com)
