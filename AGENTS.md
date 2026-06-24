# BKTech Landing — AI Agent Guide

Landing page & marketing site for **BKTech**, a software house from Sumatera Barat, Indonesia.
Built with Next.js App Router, React 19, Tailwind CSS v4, and Framer Motion.

## Commands

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build
npm run start      # Serve the production build
npm run lint       # ESLint (eslint-config-next: core-web-vitals + TS)
npx tsc --noEmit   # Typecheck (no typecheck script defined — use this)
```

Always run `npm run lint` and `npx tsc --noEmit` after non-trivial changes.
There is no test framework configured.

## Tech Stack

- **Next.js 16** (App Router, server components by default, `next/image`, file-based routing)
- **React 19**
- **TypeScript 5** (strict mode)
- **Tailwind CSS v4** (CSS-first config via `@theme` in `src/app/globals.css` — **no `tailwind.config.js`**)
- **Framer Motion 12** for animations
- **lucide-react** for icons
- Path alias: `@/*` → `./src/*`

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Tailwind v4 theme tokens + custom utilities
│   ├── layout.tsx          # Root layout (Poppins font, metadata, body)
│   ├── page.tsx            # Home page (server component composing home/*)
│   └── projects/page.tsx   # /projects — full portfolio grid (server component)
├── components/
│   ├── home/               # Home page sections (Hero, Services, Portfolio, ...)
│   ├── layout/             # Navbar, Footer
│   ├── projects/           # ProjectsGrid — client grid for /projects
│   └── ui/                 # Reusable UI (Cards, ProjectModal)
└── data/
    └── projects.ts         # Single source of truth for project data + Project interface
```

## Conventions

### Components
- **Server components by default.** Add `"use client"` only when needed (state, effects, event handlers, Framer Motion, `next/image` with client interactivity).
- Page files (`src/app/**/page.tsx`) are server components — they compose client components and export `metadata`.
- Home sections are named exports in `src/components/home/*` and are composed in `src/app/page.tsx`.
- Animations: define `fadeUp` / `staggerFade` `Variants` and use `motion.*` with `initial="hidden" whileInView="visible" viewport={{ once: true }}`.

### Styling
- **Tailwind v4 theme tokens are defined in `globals.css` via `@theme`.** Use the semantic color names, not raw hex:
  - `charcoal-{900,800,700,100}` — dark neutrals (text, dark backgrounds)
  - `offwhite-{100,200,300,400}` — light neutrals (200 = page base)
  - `terracotta` / `terracotta-hover` / `terracotta-light` — the muted Minang red accent
- Custom utility classes in `globals.css` (apply via className):
  - `songket-border-top`, `songket-border-left` — songket-inspired zigzag borders on image containers
  - `structural-grid` — faint background grid (used as fixed overlay on pages)
  - `weave-bg` — diagonal weave pattern
- Mobile-first: write base styles, then `md:` breakpoints. Some sections also use `lg:`.
- Use Tailwind arbitrary properties for one-offs (e.g. `[&::-webkit-scrollbar]:hidden`).
- Font: Poppins via `next/font`, exposed as `--font-poppins` and mapped to `font-sans`.

### Images
- Use `next/image` for all images. The `next.config.ts` allowlist only permits `images.unsplash.com` as a remote host — add new hosts there if needed.
- Logo assets live in `public/logo/`. Other public assets in `public/`.

### Data
- Project data is centralized in `src/data/projects.ts` (the `Project` interface + `projects` array). Import from there — do not redeclare the array in components. Both the home `Portfolio` carousel and `/projects` grid import from it.

### Layout pattern
- Pages wrap content in `max-w-7xl mx-auto px-6` with an inner `border-x border-charcoal-900/10` container to create the signature bordered-column look.
- `Navbar` is fixed; pages start content with `pt-24` to clear it.

## Verification Checklist

Before claiming work is done:
1. `npx tsc --noEmit` — must pass with no output
2. `npm run lint` — no new errors/warnings in files you touched (pre-existing issues in `Philosophy.tsx`, `CallToAction.tsx`, `ProjectModal.tsx` are known)
3. If changing a page, run `npm run dev` and confirm it renders without console errors
