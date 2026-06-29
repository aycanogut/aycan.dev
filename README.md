# aycan.dev

Personal portfolio of **Aycan Öğüt** — a minimal, type-led, single-page site.

## Stack

- [Astro](https://astro.build) (static output)
- TypeScript (strict)
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- Vanilla TypeScript for animations — a hero name-decode + `IntersectionObserver` scroll-reveal (no animation library)
- Self-hosted fonts (Fontsource): **Anton** (display), **DM Sans** (body), **JetBrains Mono** (labels)
- `@astrojs/sitemap` for the sitemap, Google Analytics 4 for analytics

## Develop

Requires Node `>= 22` (see `.nvmrc`).

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
  components/   Header · Hero · Projects · Contact · Analytics
  data/         site.ts · projects.ts
  layouts/      Layout.astro (head, SEO, OG, GA)
  pages/        index.astro · 404.astro
  scripts/      animations.ts (name-decode + IntersectionObserver reveal)
  styles/       global.css (theme tokens, dot grid, keyframes)
public/         favicon.svg · favicon.ico · favicon-96x96.png · apple-touch-icon.png
                site.webmanifest · web-app-manifest-{192,512}.png · og.png · robots.txt
```
