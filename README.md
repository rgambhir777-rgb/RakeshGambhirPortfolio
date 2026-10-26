---
title: Rakesh Gambhir
emoji: 🛰️
colorFrom: yellow
colorTo: gray
sdk: static
app_build_command: npm run build
app_file: out/index.html
nodejs_version: "22"
pinned: true
short_description: Forward Deployed AI Engineer, agents, LLMOps and AI QA
---

# Rakesh Gambhir · AI FDE profile

A single-page professional profile built with Next.js (App Router, TypeScript) and exported as static HTML. The block above is Hugging Face Space configuration, and GitHub ignores it.

Published at:
- GitHub Pages: https://rgambhir777-rgb.github.io/RakeshGambhirPortfolio/
- Hugging Face Space: https://huggingface.co/spaces/nusoftai/RakeshGambhir

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

## Layout

| Path | What it holds |
|---|---|
| `lib/profile.ts` | All contact details and section content (edit text here) |
| `components/` | One component per page section |
| `app/globals.css` | The full stylesheet (trace-console design) |
| `app/layout.tsx` | Fonts, metadata, `<html>` shell |

## Still to personalise

| Placeholder | Where in `lib/profile.ts` |
|---|---|
| Stats strip | `metrics` |
| Selected work | `repos`, which should point to real repos |
| About | the three paragraphs in `components/About.tsx` |

## Publishing

- **GitHub** (`origin`): `rgambhir777-rgb/RakeshGambhirPortfolio`. `.github/workflows/pages.yml` builds with `NEXT_PUBLIC_BASE_PATH=/RakeshGambhirPortfolio` and deploys `out/`. Under **Settings → Pages**, the source must be **GitHub Actions**.
- **Hugging Face** (`hf`): `nusoftai/RakeshGambhir`, a static Space. It runs `npm run build` and serves `out/index.html` at the root.
