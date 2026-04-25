# ComplianceIQ Marketing Site

Standalone Next.js 15 marketing site for **ComplianceIQ** — deployed at `copilot.kouamvision.com`.

A static product landing page. Independent from the firm site (`kouamvision.com`) and from the working ComplianceIQ app (`app.copilot.kouamvision.com`).

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript 5
- Tailwind CSS 3
- Fraunces + IBM Plex Sans + IBM Plex Mono via `next/font`
- No backend, no database, no API routes
- All motion via CSS + IntersectionObserver (no Framer Motion / GSAP)

## Project structure

```
app/
  layout.tsx                ← fonts, metadata, JSON-LD
  globals.css               ← Tailwind + design tokens + keyframes
  page.tsx                  ← composes all sections
  sitemap.ts
  robots.ts
components/landing/
  RevealObserver.tsx        ← IntersectionObserver for .reveal classes
  ParallaxObserver.tsx      ← scroll-based image drift
  LandingNav.tsx            ← scroll-aware (transparent over hero)
  Hero.tsx                  ← video bg + animated preview card with streaming answer
  ProblemSection.tsx        ← Generic-vs-ComplianceIQ comparison
  HowItWorks.tsx            ← Sticky scroll narrative — 3 SVG layers cross-fade
  ImageSplit.tsx            ← Reusable split-section component
  Splits.tsx                ← SecuritySplit, IsolationSplit, ResidencySplit
  FeaturesGrid.tsx          ← 6 feature cards
  StatsSection.tsx          ← Count-up benchmarks (RAGAS numbers)
  CTASection.tsx            ← Book a demo
  LandingFooter.tsx
  shared.tsx                ← SectionShell, SectionHead helpers
lib/
  urls.ts                   ← DEMO_URL, APP_URL, FIRM_URL constants
public/
  README.md                 ← Asset requirements
  IMAGES.md                 ← Midjourney prompts (editorial archive aesthetic)
```

## Environment variables

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://copilot.kouamvision.com` | Used for metadata + sitemap |
| `NEXT_PUBLIC_DEMO_URL` | `https://kouamvision.com/contact?intent=demo` | Where "Book a demo" CTAs point |
| `NEXT_PUBLIC_APP_URL` | `https://app.copilot.kouamvision.com` | Where "Sign in" / "Start onboarding" point |

All have sensible defaults — set in Vercel only if you need to override.

## Design system

| Token | Value | Use |
|---|---|---|
| `--bone` | `#F5F1E8` | Background |
| `--bone-2` | `#EBE6D7` | Subtle layer |
| `--ink` | `#1C1B17` | Primary text + dark sections |
| `--sienna` | `#B84A2E` | Single accent |
| `--muted` | `#6B665C` | Secondary text |
| `--rule` | `#D9D2C1` | Hairline dividers |

Aesthetic intentionally matches the firm site (`kouamvision.com`). Cohesive brand family.

## Motion strategy

- Hero: CSS-only fade-up stagger + animated preview card (floats, streams answer word-by-word)
- ProblemSection: reveal on scroll
- HowItWorks: **sticky scroll narrative** — left visual stays pinned, three SVG layers cross-fade as right-side text scrolls past
- Splits: reveal + subtle parallax on image
- FeaturesGrid: stagger reveal
- StatsSection: count-up animation when entering viewport
- CTASection: reveal

All motion respects `prefers-reduced-motion`.

## Deployment

Push to GitHub, import to Vercel, set env vars, deploy. Vercel auto-detects Next.js.

DNS: point `copilot.kouamvision.com` (CNAME → `cname.vercel-dns.com`) at Vercel via Cloudflare DNS.

For full deployment + AWS infra setup (for the app subdomain), see the firm site's `INFRASTRUCTURE.md`.

## What's intentionally not here

- ❌ Authentication — visitors who click "Sign in" go to the app subdomain
- ❌ Demo booking form — handled by the firm site's `/contact?intent=demo`
- ❌ Pricing page — add when there's pricing
- ❌ Blog / docs — add when there's content
- ❌ Status page — add when there are real outages

Stay focused. The job of this site is to convince a visitor to either book a demo or try the app.
