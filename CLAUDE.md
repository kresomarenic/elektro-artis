@AGENTS.md

## Project Identity
Elektro Artis d.o.o. — emergency electrician services, Zagreb area.
Business: 24/7 emergency interventions, installations, maintenance.

## Tech Stack
- **Framework:** Next.js 16.2.3 (App Router, TypeScript, strict mode)
- **Styling:** Tailwind CSS v4 — NO `tailwind.config.ts`. All tokens in `app/globals.css` via `@theme {}`.
- **Animation:** Framer Motion (wrapped in `components/providers.tsx` with `MotionConfig reducedMotion="user"`)
- **Icons:** Lucide React
- **Package manager:** pnpm (`pnpm dev` → port 3000)
- **Fonts:** DM Sans (`--font-dm-sans`, headings), Inter (`--font-inter`, body)

## Git & Deployment
- **GitHub:** `git@github-private:kresomarenic/elektro-artis.git` (SSH alias `github-private` → personal key `~/.ssh/id_ed25519_kresomarenic`)
- **Git identity (local):** `kresomarenic` / `kresomarenic@yahoo.com` — already set as local config, do not change
- **Vercel:** deploying from GitHub repo `kresomarenic/elektro-artis`

## Brand Colors (defined in app/globals.css)
- `--color-blue: #1565c0` — primary brand blue
- `--color-blue-dark: #0d47a1` — footer, dark accents
- `--color-blue-xlight: #f0f7ff`
- `--color-blue-light: #e3f0ff`
- `--color-muted: #546075` — muted text (~5.5:1 contrast on white, WCAG AA)

## Design Constraints (hard rules — do not violate)
1. **SEO URLs are sacred:** `/usluge`, `/hitne-intervencije`, `/kontakt` must never be renamed or restructured.
2. **Yellow only in logo ring** — no yellow anywhere else in the UI.
3. **No dark sections** — footer (`bg-blue-dark`) is the only exception; everything else must be light or blue-family.
4. **Don't change the logo** without an explicit user instruction and a provided source file. `components/shared/Logo.tsx` is a placeholder ("E + lightning bolt"). Real logo = lightbulb + power plug icon with custom decorative font text. When user provides file: save to `/public/`, update `Logo.tsx` to `<img>` tag with auto-width sizing.
5. **Animations must be visible** — base traces ~18% opacity, animated elements ~45–65% opacity with glow filter. Don't default to ultra-subtle.
6. **User owns the copy** — don't propose alternate wording for trust badges or CTAs without being asked.
7. **WhatsApp buttons:** use `#25D366` green throughout.
8. **No contact form** — removed by design. `/kontakt` shows phone, WhatsApp, address, hours, and map only.

## Key Files
- `app/globals.css` — design tokens, animation keyframes, reduced-motion, touch-action, focus-visible
- `app/layout.tsx` — root layout (fonts, metadata, Providers wrapper)
- `app/page.tsx` — homepage sections composition
- `components/providers.tsx` — client wrapper with `MotionConfig reducedMotion="user"`
- `components/layout/Header.tsx` — blue header, scroll-aware, Framer Motion
- `components/layout/Footer.tsx` — blue-dark footer
- `components/layout/MobileMenu.tsx` — mobile nav
- `components/shared/Logo.tsx` — PLACEHOLDER, needs real logo from user
- `components/shared/PhoneButton.tsx` — reusable phone CTA (min-h-[44px] on all sizes)
- `components/shared/WhatsAppButton.tsx` — fixed floating WhatsApp button (animate-wa-pulse)
- `components/sections/Hero.tsx` — PCB circuit animation, trust badges
- `components/sections/EmergencyHero.tsx` — emergency page hero
- `lib/constants/site.ts` — phone, email, address, OIB, GA4 ID

## Component Sections
Hero, Stats, Services, ServicesList, Process, WhyUs, Gallery, Reviews, CtaBanner, Faq, EmergencyHero

## Accessibility & UX (applied)
- `prefers-reduced-motion` — CSS stops wire-current-* and animate-wa-pulse; Framer Motion via MotionConfig
- `touch-action: manipulation` on a/button — removes 300ms mobile tap delay
- `overscroll-behavior: contain` on body — prevents accidental pull-to-refresh
- `:focus-visible` — 2px blue focus ring for keyboard navigation
- `active:scale-[0.97]` on all CTAs — press feedback
- Touch targets min 44px (PhoneButton all sizes)

## Pending Work
- **Logo replacement:** User must provide the logo file. Save to `/public/`, update `Logo.tsx` to `<img>` tag. Do NOT attempt to recreate from description or memory.
- **Vercel domain:** Add `elektro-artis.hr` in Vercel → Settings → Domains after initial deploy.

## Next.js 16 Breaking Changes (critical)
- `params` and `searchParams` props in pages/layouts are now `Promise`-based — must be awaited.
- Read `node_modules/next/dist/docs/` before writing route-level code.
