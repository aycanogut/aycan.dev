# aycan.dev

Personal portfolio of **Aycan Öğüt** — a minimal, type-led, single-page site.

## Stack

- [Astro](https://astro.build) (static output)
- TypeScript (strict)
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- [GSAP](https://gsap.com) for the name-decode + scroll-reveal animations
- Self-hosted fonts (Fontsource): **Anton** (display), **DM Sans** (body), **JetBrains Mono** (labels)
- `@astrojs/sitemap` for the sitemap, Google Analytics 4 for analytics

## Develop

Requires Node `>= 22.12` (see `.nvmrc`).

```sh
nvm use            # node 22
pnpm install
pnpm dev           # local dev server
pnpm build         # type-check + static build to dist/
pnpm preview       # serve the production build
```

## Configuration

- Site content lives in `src/data/` — `site.ts` (identity, socials, tech stack) and
  `projects.ts` (project list).
- Analytics: set `PUBLIC_GA_MEASUREMENT_ID` in `.env` (see `.env.example`). The GA snippet
  only renders when this is present.
- Contact is a `mailto:info@aycan.dev` link. Forwarding `info@aycan.dev` to a real inbox is
  configured at the email/DNS provider, not in this repo.

## Structure

```
src/
  components/   Header · Hero · Projects · Contact
  data/         site.ts · projects.ts
  layouts/      Layout.astro (head, SEO, OG, GA)
  pages/        index.astro
  scripts/      animations.ts (GSAP decode + ScrollTrigger)
  styles/       global.css (theme tokens, dot grid, keyframes)
public/         favicon.svg · og.png · robots.txt
```
