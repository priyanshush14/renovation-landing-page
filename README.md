# Hearth & Haven Renovations LLC — Website Product & Motion Specification

A production-grade, architectural marketing landing page built for **Hearth & Haven Renovations LLC**, a design-build residential remodeling studio based in Austin, Texas.

Designed and engineered to the exact specifications in `Hearth_and_Haven_Enhancement_Motion_Specification.md` and the initial architectural brief.

---

## 1. Portfolio & Simulation Disclosure

> **Portfolio Simulation Notice**  
> Hearth & Haven Renovations LLC is a fictional portfolio concept created to demonstrate modern web engineering, editorial art direction, and architectural motion design.  
> - All project case studies ("The Travertine Retreat", "The Walnut Kitchen", "The Open House", "The Quiet Courtyard", "The Limestone Ensuite", "The Modern Heritage") are concept spatial studies created for portfolio demonstration.
> - Addresses, client scenarios, testimonial quotes, and planning figures are illustrative concepts and do not represent verified real-world customer contracts, licenses, certifications, or awards.
> - Public social media destinations and reviews are configurable placeholders and will only link to verified external accounts when approved profiles are provided by the client.

---

## 2. Overview & Motion Direction

- **Art Direction**: Architectural, editorial, cinematic, warm and tactile.
- **Color Palette**:
  - Ink (`#292824`) — Primary typography, structural accents, hero and footer canvas
  - Ivory (`#F5F1E9`) — Main page canvas and card surfaces
  - Paper (`#FBF9F5`) — Alternating editorial surfaces and detail modal background
  - Olive (`#85866D`) / Olive Dark (`#62644F`) — Architectural botanical accent and active indicators
  - Stone (`#D8CCBA`) — 1px dividers, borders, and tactile framing
  - Taupe (`#B7A894`) / Muted (`#77746C`) — Secondary descriptive typography
- **Typography**:
  - Display: `DM Serif Display`
  - Body & UI: `Manrope`
- **Motion System**:
  - Entrance ease: `cubic-bezier(0.22, 1, 0.36, 1)`
  - Hero headline: staggered word/line reveal (550–800ms)
  - Hero video: subtle initial scale settle (1.04 to 1.0), autoplay muted, continuous looping with poster fallback
  - Navigation sidebar: smooth slide-in panel (450–650ms), page scrim with preview strip, staggered menu links (45–75ms)
  - Lightbox / Modal: accessible transitions (250–400ms) with Escape key and focus management
  - Strict compliance with `prefers-reduced-motion` across video playback and animations

---

## 3. Implemented Sitemap & Architecture

| Section | Anchor | Description |
| :--- | :--- | :--- |
| **Header** | `#top` | Adapts dynamically: inverted logo & links over dark video hero, crisp ivory backdrop on scroll. Bespoke architectural framed menu button with interactive multi-line micro-interaction. |
| **Hero** | `#top` | Immersive full-viewport hero featuring the supplied 10-second Hearth & Haven video playing continuously in an infinite loop, high-res poster fallback, staggered headline reveal, and dual conversion CTAs. |
| **Trust Strip** | `#trust` | Verified studio principles (Fixed Estimates, Single Point of Contact, Dedicated Project Oversight). |
| **About / Philosophy** | `#about` | Humanizes the studio, outlining transparent contracting and design-forward execution. |
| **Services** | `#services` | 5 residential disciplines (Kitchens, Bathrooms, Whole-Home, Flooring & Finishes, Transformations) in an asymmetric editorial grid with planning guides. |
| **Curated Portfolio** | `#projects` | 6 complete illustrative case studies in an editorial asymmetric grid with category filters (All, Kitchens, Bathrooms, Whole Home, Interior Upgrades). |
| **Project Detail Modal** | Modal | Detailed case-study presentation: Project Overview, Design & Material Direction, Key Architectural Elements (2 columns), Scope of Work, Design Rationale, and Related Services. |
| **Gallery Lightbox** | Lightbox | Accessible fullscreen lightbox with next/prev arrows, image counter, descriptive captions, and Escape/click-away dismissal. |
| **Why Hearth & Haven** | `#why-us` | 4 proof-oriented pillars (Transparent Estimates, Dedicated PM, Structured Process, Considerate Craftsmanship). |
| **Renovation Process** | `#process` | 5-stage numbered roadmap with duration estimates and key deliverables. |
| **Client Testimonials** | `#testimonials` | Authentic Google-verified testimonial presentation featuring 5.0-star rating summary, official Google mark, verified review badges, and realistic Austin homeowner renovation case studies. |
| **Budget & Planning** | `#planning` | Cost drivers guide (structural, MEP, finishes, Austin permitting) and indicative planning ranges. |
| **FAQ** | `#faq` | 8 grounded questions with keyboard-accessible accordions (`aria-expanded`, smooth transitions). |
| **Lead Consultation Form** | `#contact` | Two-step lead qualification journey with validation, bot mitigation, and secure submission architecture. |
| **Navigation Sidebar** | Overlay | Recreated from the reference pattern: sliding panel, page scrim leaving a left preview strip, prominent circular close control, expandable Services accordion, and direct anchors. |
| **Footer** | `#top` | Positioning, navigation directory, services directory, demo contact channels, and discreet portfolio disclosure. |

---

## 4. Technology Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with custom CSS tokens (`src/styles/tokens.css`)
- **Animation**: Framer Motion (with `prefers-reduced-motion` compliance)
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form + Zod + `@hookform/resolvers`
- **Class Utilities**: `clsx` + `tailwind-merge`

---

## 5. Setup & Running Instructions

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

## 6. Social Media Configuration

Configured in `src/data/social.ts`:
```typescript
export const SOCIAL_LINKS = {
  instagram: undefined, // Add verified profile URL when ready
  youtube: undefined,   // Add verified channel URL when ready
}
```
When configured with real URLs, external links open safely with `target="_blank"` and `rel="noopener noreferrer"`. When undefined, safe non-interactive placeholders are rendered without broken `#` links.
