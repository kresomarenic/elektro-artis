# Elektro Artis

Marketing site for **Elektro Artis d.o.o.** — 24/7 emergency electrician services in Zagreb and surrounding area.

Live site: [elektro-artis.hr](https://elektro-artis.hr)

## Stack

- Next.js 16 (App Router, TypeScript strict)
- Tailwind CSS v4 (tokens in `app/globals.css` via `@theme {}`)
- Framer Motion (wrapped with `MotionConfig reducedMotion="user"`)
- Lucide icons
- Fonts: DM Sans (headings), Inter (body)

## Development

```bash
pnpm install
pnpm dev
```

Server runs on [http://localhost:3000](http://localhost:3000).

## Project conventions

See [CLAUDE.md](CLAUDE.md) for design constraints, hard rules (SEO URLs, color usage, logo handling), and key file locations. See [AGENTS.md](AGENTS.md) for the Next.js 16 caveat.

## Deployment

Deployed via Vercel from `kresomarenic/elektro-artis` on GitHub.
