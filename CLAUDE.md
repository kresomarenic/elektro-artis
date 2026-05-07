@AGENTS.md

## Project Identity
Elektro Artis d.o.o. — emergency electrician services, Zagreb area.
Business: 24/7 emergency interventions, installations, maintenance.

## Tech Stack
- **Framework:** Next.js 16.2.3 (App Router, TypeScript, strict mode)
- **Styling:** Tailwind CSS v4 — NO `tailwind.config.ts`. All tokens in `app/globals.css` via `@theme {}`.
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Package manager:** pnpm (`pnpm dev` → port 3000)
- **Fonts:** DM Sans (`--font-dm-sans`, headings), Inter (`--font-inter`, body)

## Brand Colors (defined in app/globals.css)
- `--color-blue: #1565c0` — primary brand blue
- `--color-blue-dark: #0d47a1` — footer, dark accents
- `--color-blue-xlight: #f0f7ff`
- `--color-blue-light: #e3f0ff`

## Design Constraints (hard rules — do not violate)
1. **SEO URLs are sacred:** `/usluge`, `/hitne-intervencije`, `/kontakt` must never be renamed or restructured.
2. **Yellow only in logo ring** — no yellow anywhere else in the UI.
3. **No dark sections** — footer (`bg-blue-dark`) is the only exception; everything else must be light or blue-family.
4. **Don't change the logo** without an explicit user instruction and a provided source file. `components/shared/Logo.tsx` is a placeholder ("E + lightning bolt"). Real logo = lightbulb + power plug icon with custom decorative font text. When user provides file: save to `/public/`, update `Logo.tsx` to `<img>` tag with auto-width sizing.
5. **Animations must be visible** — base traces ~18% opacity, animated elements ~45–65% opacity with glow filter. Don't default to ultra-subtle.
6. **User owns the copy** — don't propose alternate wording for trust badges or CTAs without being asked.
7. **WhatsApp buttons:** use `#25D366` green throughout.

## Key Files
- `app/globals.css` — design tokens + animation keyframes
- `app/layout.tsx` — root layout (fonts, metadata)
- `app/page.tsx` — homepage sections composition
- `components/layout/Header.tsx` — blue header, scroll-aware, Framer Motion
- `components/layout/Footer.tsx` — blue-dark footer
- `components/layout/MobileMenu.tsx` — mobile nav
- `components/shared/Logo.tsx` — PLACEHOLDER, needs real logo from user
- `components/sections/Hero.tsx` — PCB circuit animation, trust badges
- `components/sections/EmergencyHero.tsx` — emergency page hero
- `lib/constants/site.ts` — phone, email, address, OIB

## Component Sections
Hero, Stats, Services, ServicesList, Process, WhyUs, Gallery, Reviews, CtaBanner, ContactSection, Faq, EmergencyHero

## Pending Work
- **Logo replacement:** User must provide the logo file. Save to `/public/`, update `Logo.tsx` to `<img>` tag. Do NOT attempt to recreate from description or memory.

## Next.js 16 Breaking Changes (critical)
- `params` and `searchParams` props in pages/layouts are now `Promise`-based — must be awaited.
- Read `node_modules/next/dist/docs/` before writing route-level code.
