# Estância Monte Horebe — Website

[![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Marketing website for **Estância Monte Horebe**, a boutique inn in Mulungu (Ceará, Brazil), in the Serra de Baturité region. The site showcases accommodations, amenities, local culture, and integrates with Booking.com and WhatsApp for reservations and contact.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Architecture & Project Structure](#architecture--project-structure)
- [Technical Decisions](#technical-decisions)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Code Quality & Conventions](#code-quality--conventions)
- [Performance & UX](#performance--ux)
- [Deployment](#deployment)

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | Next.js 16 (App Router) | Server Components by default, file-based routing, built-in optimizations (fonts, images, metadata), and first-class React 19 support. |
| **Language** | TypeScript 5 (strict) | Type safety, better DX, and fewer runtime bugs. `strict: true` in `tsconfig.json`. |
| **Styling** | Tailwind CSS 4 + PostCSS | Utility-first CSS, design tokens via CSS variables, small bundle impact, and fast iteration. |
| **UI Components** | Radix UI + shadcn/ui (New York) | Accessible primitives (Radix), consistent design system, and copy-paste components without a heavy dependency tree. |
| **Forms** | react-hook-form + Zod + @hookform/resolvers | Controlled forms with validation and type-safe schemas. Used for the contact/reservation form. |
| **Icons** | Lucide React | Lightweight, tree-shakeable, consistent icon set. |
| **Analytics** | Vercel Analytics | Privacy-friendly, zero-config analytics for deployment on Vercel. |

**Supporting libraries:** `clsx` + `tailwind-merge` for conditional class names (`cn()` in `lib/utils.ts`), Embla Carousel for the hero banner, `next-themes` for optional dark mode, `date-fns` for date formatting, `recharts` for data visualization where needed.

---

## Architecture & Project Structure

```
monte-horebe/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout: fonts, metadata, viewport, analytics
│   ├── page.tsx            # Home (landing)
│   ├── globals.css         # Tailwind + theme (CSS variables, base styles)
│   ├── error.tsx           # Error boundary (client) for graceful error UI
│   ├── contato/page.tsx    # Contact / reservation page
│   └── dicas/page.tsx      # Tips & regional info
├── components/
│   ├── ui/                 # shadcn/ui primitives (Button, Card, Carousel, etc.)
│   ├── header.tsx          # Fixed nav, mobile menu, Booking CTA
│   ├── hero.tsx            # Full-viewport hero + image carousel
│   ├── about.tsx           # About the inn
│   ├── accommodations.tsx  # Room types + Booking links
│   ├── amenities.tsx       # Facilities
│   ├── gallery.tsx         # Photo gallery
│   ├── agenda-cultural.tsx # Regional events (data from lib)
│   ├── location.tsx        # Map + contact info
│   ├── policies.tsx        # Check-in/out, cancellation
│   ├── testimonials.tsx     # Guest reviews
│   ├── contact.tsx         # Reservation form → WhatsApp
│   ├── footer.tsx          # Links, contact, social
│   └── whatsapp-button.tsx # Floating CTA
├── lib/
│   ├── constants.ts        # BOOKING_URL, WHATSAPP_NUMBER, getWhatsAppUrl() — env-driven
│   ├── utils.ts            # cn() and shared helpers
│   ├── agenda-cultural.ts  # Typed event list (content/data layer)
│   └── rota-verde-cafe.ts  # “Green Coffee Route” partners (typed data)
├── hooks/                  # use-mobile, use-toast (shared logic)
├── public/                 # Static assets (images, favicon)
├── eslint.config.mjs      # ESLint 9 flat config (Next.js core-web-vitals)
├── next.config.mjs         # Image remote patterns, TS build options
└── tsconfig.json           # Path alias @/*, strict mode
```

**Design principles:**

- **App Router:** All routes live under `app/` with `layout.tsx` for shared shell and `page.tsx` per route. Layouts compose (e.g. home vs contact share header/footer via composition).
- **Server vs Client:** Pages and most sections are Server Components. Only interactive pieces use `"use client"` (header scroll/menu, hero carousel, contact form, WhatsApp button, error boundary).
- **Data vs UI:** Content that changes often (events, partners) lives in `lib/*.ts` as typed arrays/interfaces so non-developers can edit copy without touching JSX.
- **Path alias:** `@/*` points to project root so imports are consistent (`@/components/...`, `@/lib/...`).

---

## Technical Decisions

### 1. **Next.js App Router & React Server Components**

- **Decision:** Use the App Router and keep as much as possible as Server Components.
- **Why:** Smaller client bundle, better SEO (HTML from server), and clear split: server for layout/data, client only where interactivity is needed (forms, carousel, mobile menu).

### 2. **Centralized Constants & Environment-Based Config**

- **Decision:** `lib/constants.ts` exposes `BOOKING_URL`, `WHATSAPP_NUMBER`, and `getWhatsAppUrl(text?)`. Values come from `NEXT_PUBLIC_BOOKING_URL` and `NEXT_PUBLIC_WHATSAPP` with fallbacks.
- **Why:** Single source of truth for URLs and contact data; easy to change per environment (e.g. staging vs production) without touching code; all CTAs (header, footer, contact form, accommodations) use the same helpers.

### 3. **Explicit Viewport & Mobile-First Layout**

- **Decision:** Export `viewport` in `app/layout.tsx` with `width: "device-width"`, `initialScale: 1`, `maximumScale: 5`. Root `html`/`body` and main content use `w-full min-w-0 overflow-x-hidden` (Tailwind) and base CSS to avoid horizontal scroll and half-screen blank space on small viewports.
- **Why:** Ensures correct scaling on phones and prevents the “narrow strip of content with white bar on the side” issue on mobile.

### 4. **Error Boundary at App Level**

- **Decision:** `app/error.tsx` is a client component that catches runtime errors in the app subtree, logs the error, and shows a friendly message with “Try again” (calls `reset()`) and “Back to home” (Next.js `Link`).
- **Why:** Prevents the whole app from showing a blank or raw error screen; gives users a clear recovery path and keeps branding.

### 5. **Typography & Font Loading**

- **Decision:** Use `next/font` (Google) for Playfair Display (serif) and Lato (sans) with subset `latin` and variable fonts stored in CSS variables (`--font-playfair`, `--font-lato`). Applied via Tailwind in `globals.css` and layout.
- **Why:** No layout shift (fonts are optimized and self-hosted by Next), better performance than loading Google Fonts via a third-party script.

### 6. **Image Strategy**

- **Decision:** Use `next/image` for all content images. In `next.config.mjs`, `remotePatterns` allow optimized images from `cf.bstatic.com` and `t-cf.bstatic.com` (Booking CDN). No `unoptimized: true` so Next.js can serve WebP/AVIF and responsive sizes.
- **Why:** Better LCP and bandwidth usage; consistent treatment of local and CDN images.

### 7. **Accessibility**

- **Decision:** Semantic HTML (`header`, `nav`, `main`, `section`, `footer`), `aria-label` on icon-only buttons (e.g. menu, scroll hint), `aria-hidden` on decorative elements, and proper `<label>` association for form inputs. Radix/shadcn components bring keyboard and screen-reader support.
- **Why:** Usable for keyboard and assistive tech; aligns with WCAG-oriented practices and Core Web Vitals–related lint rules.

### 8. **SEO & Metadata**

- **Decision:** `metadata` export in root layout (title, description, keywords). `lang="pt-BR"` on `<html>`. No generator or tooling-specific meta tags in production.
- **Why:** Clear indexing signals for search engines and correct language/region for Portuguese (Brazil) content.

### 9. **ESLint: Next.js + Flat Config**

- **Decision:** ESLint 9 with flat config (`eslint.config.mjs`), extending `eslint-config-next/core-web-vitals`. Ignores `.next`, `out`, `build`, `node_modules`.
- **Why:** Catches Next-specific issues (e.g. `<a>` vs `<Link>` for internal routes, image usage) and aligns with framework recommendations without legacy `.eslintrc` complexity.

### 10. **Content as Data (Agenda, Partners)**

- **Decision:** Regional events and “Rota Verde do Café” partners are defined in `lib/agenda-cultural.ts` and `lib/rota-verde-cafe.ts` with TypeScript interfaces (`EventoAgenda`, `EquipamentoRota`). Components import these and map over the data.
- **Why:** Content updates don’t require touching component code; types keep structure consistent and document the shape of the data.

---

## Getting Started

**Prerequisites:** Node.js 18+, pnpm (recommended) or npm.

```bash
# Clone and install
git clone <repo-url>
cd monte-horebe
pnpm install

# Optional: copy env example and set overrides
cp .env.example .env.local   # edit if you need different Booking/WhatsApp URLs

# Development
pnpm dev
# Open http://localhost:3000

# Production build
pnpm build
pnpm start
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_BOOKING_URL` | No | Full URL for the Booking.com property page. Default: current Estância Monte Horebe link in `lib/constants.ts`. |
| `NEXT_PUBLIC_WHATSAPP` | No | Main WhatsApp number (E.164 without `+`). Default: `5585988662996`. |

Used in `lib/constants.ts`; all booking and WhatsApp links/buttons consume these via `BOOKING_URL` and `getWhatsAppUrl()`. See `.env.example` for a template.

---

## Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev` | Local development with hot reload. |
| `build` | `next build` | Production build (optimized output). |
| `start` | `next start` | Run production server after `build`. |
| `lint` | `eslint .` | Run ESLint (Next.js core-web-vitals rules). |

---

## Code Quality & Conventions

- **TypeScript:** Strict mode enabled. No `any` for public APIs; types/interfaces for props and data shapes (e.g. `EventoAgenda`, `EquipamentoRota`).
- **Linting:** `pnpm lint` runs ESLint with Next.js and Core Web Vitals rules. Fix before committing; optional: run in CI.
- **Imports:** Prefer `@/components/...`, `@/lib/...`, `@/hooks/...` for clarity and refactor safety.
- **Client boundaries:** Only add `"use client"` where needed (state, events, browser APIs). Keep pages and static sections as Server Components.
- **Styling:** Tailwind utility classes; use `cn()` from `lib/utils.ts` for conditional or composed class names.

---

## Performance & UX

- **Fonts:** `next/font` for Playfair Display and Lato — no external font requests, reduced CLS.
- **Images:** `next/image` with default optimization and allowed remote patterns for Booking CDN; responsive and modern formats where supported.
- **Viewport:** Correct meta and layout width so mobile users get full-width content and no horizontal scroll.
- **Analytics:** Vercel Analytics script in root layout for minimal overhead when deployed on Vercel.
- **Error handling:** App-level error boundary so failures don’t leave the user on a blank or technical error page.

---

## Deployment

The project is set up for **Vercel** (or any Node.js host that supports Next.js):

1. Connect the repo to Vercel and use the default build command (`pnpm build`) and output (Next.js).
2. Optionally set `NEXT_PUBLIC_BOOKING_URL` and `NEXT_PUBLIC_WHATSAPP` in the project environment variables.
3. No `unoptimized: true` for images, so ensure the platform supports Next.js image optimization (Vercel does by default). For static export or unsupported hosts, you may need to re-enable `images.unoptimized` in `next.config.mjs`.

---

## License

Private project. All rights reserved.

---

*README written to reflect the current architecture and technical decisions for maintainability and recruiter/team onboarding.*
