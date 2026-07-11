# Sarath Chandra Bokkela — Portfolio

A Next.js (App Router) portfolio site with a circuit-board / PCB visual theme —
copper trace lines, solder-pad section markers, and IC-chip styled project
cards, nodding to a background in Electrical & Electronics Engineering plus
full-stack software work.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

**Option A — Vercel CLI (fastest)**
```bash
npm i -g vercel
vercel login
vercel        # deploys a preview
vercel --prod # promotes to your production URL
```

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: Next.js (auto-detected). No env vars needed.
4. Click Deploy — you'll get a live `*.vercel.app` URL in about a minute.

## Editing content

- `components/Hero.jsx` — name, tagline, contact pins
- `components/Experience.jsx` — role and project bullet points
- `components/Skills.jsx` — grouped skill chips
- `components/EducationAchievements.jsx` — education and award
- `components/Contact.jsx` — footer contact block

Colors and fonts are defined in `tailwind.config.js` and `app/layout.js`.
