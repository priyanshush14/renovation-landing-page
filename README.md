# Hearth & Haven Renovations LLC — Website Product & Implementation

A production-grade, responsive marketing landing page built for **Hearth & Haven Renovations LLC**, a design-build residential remodeling studio based in Austin, Texas.

Designed and engineered to the exact specifications in `Hearth_and_Haven_Antigravity_Implementation_Brief.md`.

---

## 1. Overview & Visual Identity

- **Art Direction**: Architectural, quiet luxury, editorial, warm and tactile.
- **Color Palette**:
  - Ink (`#292824`) — Primary typography, structural accents, dark sections
  - Ivory (`#F5F1E9`) — Main page canvas
  - Paper (`#FBF9F5`) — Alternating editorial surfaces
  - Olive (`#85866D`) / Olive Dark (`#62644F`) — Architectural botanical accent & interactive hover states
  - Stone (`#D8CCBA`) — 1px dividers, borders, and subtle surfaces
  - Taupe (`#B7A894`) / Muted (`#77746C`) — Secondary descriptive typography
- **Typography**:
  - Display: `DM Serif Display` (Google Fonts)
  - Body & UI: `Manrope` (Google Fonts)
  - Responsive clamp typography scales, generous negative space, max-width 1280px.

---

## 2. Implemented Sitemap & Sections

| Section | Anchor | Description |
| :--- | :--- | :--- |
| **Header** | `#top` | Brand wordmark, navigation links, primary consultation CTA, scroll-reactive ivory backdrop, accessible mobile menu overlay with Escape key and scroll lock. |
| **Hero** | `#top` | Eyebrow, primary headline, supporting copy, dual CTAs ("Request a Free Consultation", "Explore Our Work"), and architectural photography. |
| **Trust Strip** | `#trust` | 3 verified trust statements (no fabricated counters). |
| **About / Philosophy** | `#about` | Humanizes the business, explains transparent contracting and design-forward execution. |
| **Services** | `#services` | 5 core residential services (Kitchens, Bathrooms, Whole-Home, Flooring, Transformations) in an asymmetric editorial grid with planning guides. |
| **Featured Projects** | `#projects` | 3 concept project studies ("Warm Modern Kitchen", "Quiet Retreat Bathroom", "Connected Living") with interactive study modal. |
| **Why Hearth & Haven** | `#why-us` | 4 proof-oriented pillars (Transparent Estimates, Dedicated PM, Structured Process, Considerate Craftsmanship). |
| **Renovation Process** | `#process` | 5-stage numbered roadmap with duration estimates and key deliverables. |
| **Client Proof** | `#testimonials` | Ethical social proof state explaining authentic case studies are published upon verified project sign-off; Austin references available upon request. |
| **Budget & Planning** | `#planning` | Cost drivers guide (structural, MEP, finishes, Austin permitting) and indicative planning ranges. |
| **FAQ** | `#faq` | 8 grounded questions with keyboard-accessible accordions (`aria-expanded`, smooth transitions). |
| **Consultation Form** | `#contact` | Two-step lead qualification journey with validation, bot mitigation, and secure submission architecture. |
| **Footer** | `#top` | Wordmark, positioning, service area communities, business hours, demo contact info, portfolio simulation disclosure, back-to-top control. |

---

## 3. Technology Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with custom CSS tokens (`src/styles/tokens.css`)
- **Animation**: Framer Motion (with `prefers-reduced-motion` compliance)
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form + Zod + `@hookform/resolvers`
- **Class Utilities**: `clsx` + `tailwind-merge`

---

## 4. Setup & Running Instructions

### Prerequisites
- Node.js 18+ (tested on Node v24.15.0)
- npm 9+

### Installation
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript type check
npm run typecheck

# Run linter
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Form Architecture & Security

### Two-Step Journey
- **Step 1 (Project Details)**: Renovation type, Austin ZIP code, approximate budget tier, desired project start, optional brief description.
- **Step 2 (Contact Details)**: Full name, valid email address, phone number, explicit communication consent checkbox.
- **Bot Mitigation**: Invisible honeypot field (`websiteUrl`) that rejects bot submissions silently.
- **Data Preservation**: User inputs are preserved when navigating between steps or encountering errors.

### Submission Modes
1. **Production Mode (with Vercel Serverless & Resend)**:
   - Endpoint: `api/contact.ts`
   - Accepts `POST` requests only.
   - Server-side Zod validation independent of frontend.
   - HTML sanitization / escaping for all user inputs.
   - Requires environment variables: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
2. **Safe Portfolio Simulation Demo Mode (Default)**:
   - When running in local Vite development or client-only environments without Resend credentials, the form safely validates and demonstrates the success state without pretending external emails were delivered to fictional addresses.

---

## 6. Environment Variables

Template available in `.env.example`:
```env
# Optional Resend API Key for live email delivery
RESEND_API_KEY=

# Internal recipient inbox for homeowner consultation requests
CONTACT_TO_EMAIL=

# Verified sender email address (e.g. notifications@yourdomain.com)
CONTACT_FROM_EMAIL=
```

---

## 7. Security Headers & Privacy Compliance

Configured in `vercel.json`:
- `Content-Security-Policy`: Restricts scripts, styles, fonts, and connects to authorized origins only.
- `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload`
- `X-Content-Type-Options`: `nosniff`
- `X-Frame-Options`: `DENY`
- `Referrer-Policy`: `strict-origin-when-cross-origin`
- `Permissions-Policy`: `camera=(), microphone=(), geolocation=(), payment=()`

Privacy:
- Analytics strictly tracks user action events (e.g., `form_started`, `primary_cta_click`) without transmitting PII (names, emails, phone numbers, or freeform text).

---

## 8. Asset Inventory & Attribution

All imagery curated for warm daylight, natural oak, limestone, travertine, linen, and believable residential architecture:
- `hero-architectural.jpg` — Unsplash (licensed for free commercial/portfolio use)
- `about-detail.jpg` — Unsplash
- `service-kitchen.jpg`, `service-bathroom.jpg`, `service-whole-home.jpg`, `service-flooring.jpg`, `service-interior.jpg` — Unsplash
- `project-*.jpg` — Unsplash

All assets are stored locally in `public/images/`.

---

## 9. Simulation Disclosures

Hearth & Haven Renovations LLC is a simulated business entity created for portfolio demonstration. All phone numbers (`+1 (512) 555-0148`), emails (`hello@hearthandhaven.example`), project names, and planning budget ranges are illustrative concepts.
