import type { ProjectConcept } from '../types'
import { getAssetUrl } from '../lib/assets'

export const PROJECTS_DATA: ProjectConcept[] = [
  {
    id: 'warm-modern-kitchen',
    title: 'Warm Modern Kitchen',
    category: 'Kitchen Architecture',
    conceptTag: 'Concept 01',
    tagline: 'Natural oak millwork, honed quartzite, and intentional daylighting.',
    narrative:
      'Designed around the rhythm of family mornings and evening dinners, this concept replaces closed-off upper cabinets with tailored open shelving and a concealed working scullery. Warm white oak grain grounds the space against soft ivory plaster walls and aged bronze hardware.',
    scope: [
      'Bespoke rift-cut white oak cabinetry',
      'Honed Taj Mahal quartzite perimeter and island',
      'Integrated panel-ready refrigeration & hidden pantry',
      'Acoustic plaster ceiling with directional spotlights',
    ],
    mainImage: getAssetUrl('images/project-warm-kitchen-main.jpg'),
    detailImage: getAssetUrl('images/project-warm-kitchen-detail.jpg'),
    alt: 'Concept presentation of a warm modern kitchen renovation with oak island and stone counters',
  },
  {
    id: 'quiet-retreat-bathroom',
    title: 'Quiet Retreat Bathroom',
    category: 'Primary Ensuite',
    conceptTag: 'Concept 02',
    tagline: 'Honed travertine surfaces, curbless wet area, and concealed lighting.',
    narrative:
      'Envisioned as a calming sanctuary away from Austin’s bustling days. Tactile travertine slabs line the walls, paired with a solid cast-stone soaking tub and concealed 2700K perimeter cove illumination that provides warm, shadowless light.',
    scope: [
      'Full-height fluted and honed travertine tile',
      'Zero-threshold wet room with linear drainage',
      'Solid oak floating dual vanity with vessel basins',
      'Thermostatic rainfall system and concealed niche',
    ],
    mainImage: getAssetUrl('images/project-quiet-bath-main.jpg'),
    detailImage: getAssetUrl('images/project-quiet-bath-detail.jpg'),
    alt: 'Concept presentation of a quiet luxury primary bathroom with travertine walls and soaking tub',
  },
  {
    id: 'connected-living',
    title: 'Connected Living',
    category: 'Whole-Home Concept',
    conceptTag: 'Concept 03',
    tagline: 'Unified spatial flow, vaulted natural timber, and expansive glazing.',
    narrative:
      'A complete interior transformation opening a fragmented 1980s ranch layout into an interconnected family home. By removing interior structural partitions and framing expansive sliding glass walls, living, dining, and outdoor terrace flow as one continuous haven.',
    scope: [
      'Structural load-bearing partition removal',
      'Engineered exposed timber ceiling beams',
      'Continuous wide-plank European oak flooring',
      'Low-iron multi-slide glazed door systems',
    ],
    mainImage: getAssetUrl('images/project-connected-living-main.jpg'),
    detailImage: getAssetUrl('images/project-connected-living-detail.jpg'),
    alt: 'Concept presentation of an expansive whole-home renovation connecting open living and dining',
  },
]
