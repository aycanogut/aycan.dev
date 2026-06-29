# aycan.dev

Personal portfolio site. Static, dark-only, type-led design.

## Stack

- **Astro 7** (`output: 'static'`) — no React, no client framework. Components are `.astro` files.
- **Tailwind v4** via `@tailwindcss/vite`. Theme tokens live in [src/styles/global.css](src/styles/global.css) under `@theme`. There is no `tailwind.config` and no `@tailwindcss/typography`.
- **Vanilla TypeScript** for animations (no animation library) — a hero name-decode and an `IntersectionObserver` scroll-reveal, driven from [src/scripts/animations.ts](src/scripts/animations.ts) via `data-*` attributes.
- TypeScript (`astro/tsconfigs/strict`). Path alias `@/*` → `./src/*`.

## Project layout

- `src/pages/` — routes (`index.astro`).
- `src/layouts/` — page shells (`Layout.astro`: `<head>`, SEO/OG meta, fonts, analytics).
- `src/components/` — page sections (`Hero`, `Projects`, `Contact`, `Header`). One section per file.
- `src/data/` — static content/config (`site.ts`, `projects.ts`). Keep copy and lists here, not hardcoded in markup.
- `src/scripts/` — vanilla TS run on the client (animations).
- `src/styles/global.css` — Tailwind import, design tokens (`@theme`), animation primitives.

## Component rules

- **One component per file** — never define multiple components in one `.astro` file. Extract sub-pieces into their own files.
- **Props are typed with a named `interface Props`** in the frontmatter — never an inline object type, never an empty interface.
- **Use `interface` over `type`** for prop and object shapes.
- **Use semantic HTML elements** — prefer `<article>`, `<section>`, `<header>`, `<nav>`, `<dl>/<dt>/<dd>`, `<ul>/<li>`, `<footer>` over generic `<div>`/`<span>` wherever content has inherent meaning. Add ARIA roles for table-like structures that can't use native `<table>`.
- **Card-like blocks use `<article>`**; card headings use `<h5>`.
- Inline glyphs (`↗`, `↑`) are the icon convention here — there is no icon component/sprite system.

## Styling rules

- **Use theme tokens for colors**, via Tailwind utilities — `text-fg-3`, `bg-bg-alt`, `text-accent` — never raw `var(--color-*)` in markup.
- **Color tokens** (defined in `@theme` in [src/styles/global.css](src/styles/global.css)):
  - Surfaces: `bg`, `bg-alt`
  - Text (lightest → dimmest): `ink`, `fg-1`, `fg-2`, `fg-3`, `fg-4`, `fg-5`
  - Hairlines: `line`, `line-soft`
  - Accent: `accent`
- **Fonts** (utilities map to `--font-*` tokens):
  - `font-display` — Anton (large uppercase headings: `h1`/`h2`)
  - `font-sans` — DM Sans Variable (body copy, prose)
  - `font-mono` — JetBrains Mono (eyebrows, labels, meta, footer fine print — usually `uppercase` + letter-spacing)
- **Avoid arbitrary values — prefer standard Tailwind utilities, which are already `rem`-based.** Use `text-xl` not `text-[1.25rem]`, `p-4` not `p-[1rem]`, `w-36` not `w-[9rem]`. Arbitrary values (`[…]`) are only acceptable when there is genuinely no matching utility, and **when you must use one, use `rem`, never `px`** (`mt-[2.25rem]`, not `mt-[36px]`).
  > Existing components were built with `clamp()`/`px` arbitrary values (e.g. `text-[clamp(44px,8vw,104px)]`). That is legacy — match the rule above for new/edited markup and migrate old values to `rem` + the named scale when you touch them.
- **Use the named type scale** — `text-xs … text-6xl` — and build responsive hierarchy with breakpoint prefixes rather than `clamp()`:
  - h1 / hero: `text-4xl md:text-5xl lg:text-6xl`
  - h2 / section title: `text-3xl md:text-4xl lg:text-5xl`
  - h3: `text-2xl md:text-3xl`
  - body / description: `text-base md:text-lg`
  - eyebrow / meta / label: `text-sm` (uppercase + tracking carries the weight, not size)
  - **Display-heading exception:** the two `font-display` (Anton) showpiece headings — the Hero `h1` and the Contact `h2` — intentionally run larger than the scale above (`text-5xl` up to `text-8xl`/`text-9xl`). This is the deliberate "type-led" treatment; keep it. The scale applies to all other headings.
- **No inline `style` attribute** — use Tailwind classes. Exception: genuinely dynamic runtime values Tailwind can't generate.
- **Use shorthand utilities** when width/height are equal — `size-2` not `h-2 w-2`; likewise `inset-*`, `overflow-*` for equal axes.
- Reveal-on-scroll elements opt in with `data-reveal` (and optional `data-delay`); the start/hidden state is defined in `global.css`, animated by `animations.ts`. Don't reimplement fade-ins ad hoc.
