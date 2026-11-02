# Hearth & Haven Renovations LLC

The official marketing website and digital portfolio for **Hearth & Haven Renovations LLC**, a design-build residential remodeling studio based in Austin, Texas.

Specializing in architectural kitchen transformations, primary suite retreats, whole-home interior renovations, and indoor-outdoor living spaces across Greater Austin and the Texas Hill Country.

---

## Features

- **Cinematic Video Hero:** Full-viewport architectural hero featuring seamless background video, responsive positioning, and staggered entrance reveals.
- **Curated Residential Portfolio:** Editorial asymmetric project grid with category filtering (*Kitchens, Bathrooms, Whole Home, Interior Upgrades*).
- **Interactive Architectural Case Studies:** Detailed project views with comprehensive design and material directions, architectural element lists, scope breakdowns, and design rationales.
- **Image Lightbox:** Fullscreen image viewer with responsive zoom, image counter, and keyboard navigation.
- **Verified Client Reviews:** Authentic homeowner feedback showcasing completed projects across Austin neighborhoods with verified Google Reviews integration.
- **Full-Screen Navigation Sidebar:** Layered sliding drawer with expandable service submenus, accessible focus trapping, and smooth ease-out transitions.
- **Two-Step Consultation Form:** Lead qualification workflow with client-side validation, bot mitigation, and state preservation.
- **Accessibility & Performance:** Semantic HTML5 structure, ARIA accessibility attributes, full keyboard navigation, and native support for `prefers-reduced-motion`.

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom design tokens
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod + `@hookform/resolvers`
- **Utility Libraries:** `clsx` + `tailwind-merge`

---

## Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v20+)
- npm 9+

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/priyanshush14/renovation-landing-page.git
cd renovation-landing-page

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## Project Structure

```
├── public/                # Static assets (video, photography, favicons)
│   ├── images/            # High-resolution architectural photography
│   └── videos/            # Hero background video assets
├── src/
│   ├── app/               # Main application layout and root entry
│   ├── components/
│   │   ├── forms/         # Multi-step consultation form components
│   │   ├── layout/        # Header, Footer, and NavigationSidebar
│   │   ├── motion/        # Reusable Framer Motion reveal wrappers
│   │   ├── portfolio/     # Project detail modal and lightbox
│   │   ├── sections/      # Landing page content sections
│   │   └── ui/            # Reusable UI primitives (Buttons, Headings)
│   ├── data/              # Typed structured content (Projects, Services, FAQ)
│   ├── lib/               # Utility functions (assets, analytics, styling)
│   ├── styles/            # CSS tokens and Tailwind theme configuration
│   └── types/             # TypeScript interfaces and data models
```

---

## License

© 2026 Hearth & Haven Renovations LLC. All rights reserved.
