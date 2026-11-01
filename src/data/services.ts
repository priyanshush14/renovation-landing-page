import type { ServiceItem } from '../types'

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    subtitle: 'The Heart of the Home',
    description:
      'Considered spatial layouts, bespoke cabinetry, natural stone countertops, and tailored lighting that elevate everyday cooking and gathering.',
    features: [
      'Custom cabinetry & concealed pantry storage',
      'Natural quartz, quartzite & limestone slabs',
      'Layered architectural & task lighting',
      'Premium fixture installation & ventilation',
    ],
    fictionalBudget: '$18,000–$45,000',
    fictionalDuration: '3–7 weeks',
    image: '/images/service-kitchen.jpg',
    imageAlt: 'Bespoke modern kitchen with warm white oak cabinets, honed stone counters, and recessed lighting',
  },
  {
    id: 'bathroom-renovation',
    title: 'Bathroom Renovation',
    subtitle: 'Calm & Restorative Sanctuaries',
    description:
      'Seamless tile craftsmanship, curbless walk-in showers, freestanding vanities, and tactile natural surfaces designed for enduring daily luxury.',
    features: [
      'Large-format porcelain & fluted travertine',
      'Curbless showers with frameless glass',
      'Custom floating vanities & concealed niches',
      'Thermostatic controls & architectural hardware',
    ],
    fictionalBudget: '$8,000–$25,000',
    fictionalDuration: '2–5 weeks',
    image: '/images/service-bathroom.jpg',
    imageAlt: 'Minimalist bathroom renovation with travertine tile, warm lighting, and brushed bronze fixtures',
  },
  {
    id: 'complete-home-renovation',
    title: 'Complete Home Renovation',
    subtitle: 'Cohesive Architectural Overhauls',
    description:
      'Harmonizing multi-room living, refined materials, structural flow, and updated infrastructure under one dedicated project coordination team.',
    features: [
      'Full floor plan reconfiguration & open living',
      'Comprehensive material & finish palettes',
      'Coordinated mechanical, electrical & plumbing',
      'Single point of accountability from day one',
    ],
    fictionalBudget: '$60,000–$150,000+',
    fictionalDuration: '2–6 months',
    image: '/images/service-whole-home.jpg',
    imageAlt: 'Open concept whole-home renovation with vaulted wood ceilings, wide plank floors, and natural light',
  },
  {
    id: 'flooring-interior',
    title: 'Flooring & Interior Upgrades',
    subtitle: 'Tactile Finishes & Millwork',
    description:
      'Wide-plank white oak, herringbone detailing, artisanal plaster finishes, and clean architectural trim that give your home grounding and warmth.',
    features: [
      'European white oak & precision herringbone',
      'Custom baseboards, casing & shadow-line trim',
      'Roman clay & textured lime wash accents',
      'Acoustic underlayment & moisture management',
    ],
    fictionalBudget: '$5,000–$20,000',
    fictionalDuration: 'Scope-dependent',
    image: '/images/service-flooring.jpg',
    imageAlt: 'Sunlit wide plank European white oak flooring with clean architectural baseboards',
  },
  {
    id: 'interior-transformation',
    title: 'Interior Space Transformation',
    subtitle: 'Layout Reimagination',
    description:
      'Removing non-load-bearing boundaries, opening daylight corridors, and framing architectural built-ins to unlock underutilized square footage.',
    features: [
      'Engineered beam integration & wall removal',
      'Architectural hearths & plaster fireplace surrounds',
      'Built-in banquettes, libraries & alcoves',
      'Optimized natural sightlines & circulation',
    ],
    fictionalBudget: '$12,000–$40,000',
    fictionalDuration: 'Scope-dependent',
    image: '/images/service-interior.jpg',
    imageAlt: 'Modern living space transformation with integrated architectural fireplace and plaster alcove shelving',
  },
]
