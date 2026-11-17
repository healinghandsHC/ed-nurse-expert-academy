# ED Nurse Expert Academy

A structured emergency department nursing academy with detailed modules, case simulations, reference material, adaptive practice, and local progress tracking. Built for a registered nurse who is new to the emergency department.

- **10 modules, 60 lessons** — from ED foundations to core ED skills, following the Emergency Department Nursing course curriculum (ED-01 to ED-60).
- **5 detailed case studies** with trends, decision points, calculations, SBAR escalation practice, and full debriefs.
- **400 adaptive practice questions** seeded from 10 ED topics, with difficulty that follows the learner.
- **26-entry reference library** of ED medications, infusions, and equipment.
- **Progress stays on the device** (localStorage) — no account, no database.

## Stack

Vite + React + TypeScript + Tailwind CSS. Static site, published to GitHub Pages.

## Develop

```sh
npm install
npm run dev
```

## Build & publish

```sh
npm run build        # typecheck + vite build -> dist/
```

The `dist/` output is published to the `gh-pages` branch, served at
https://healinghandshc.github.io/ed-nurse-expert-academy/

## Content source

Lesson content is drawn from the narration of Derrick Collins's Emergency
Department Nursing video course (60 full-length lessons), with abbreviations
spelled out on first use and teaching written for a nurse new to the ED.
