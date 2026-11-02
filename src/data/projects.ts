import type { ProjectConcept } from '../types'
import { getAssetUrl } from '../lib/assets'

export const PROJECTS_DATA: ProjectConcept[] = [
  {
    id: 'travertine-retreat',
    slug: 'the-travertine-retreat',
    title: 'The Travertine Retreat',
    category: 'Primary Bathroom Renovation',
    filterCategory: 'bathrooms',
    conceptTag: 'Study 01',
    locationLabel: 'West Austin, TX (illustrative)',
    tagline: 'Warm stone, soft plaster, natural wood, and layered low-glare lighting.',
    summary:
      'A serene primary ensuite conceived around tactile honesty, natural daylight, and a restorative wet-room sequence.',
    narrative:
      'Envisioned as a quiet sanctuary away from daily demands. Tactile travertine surfaces line the walls, paired with a solid cast-stone soaking tub and concealed 2700K perimeter cove illumination that provides warm, shadowless light throughout morning and evening routines.',
    clientBrief: {
      goals:
        'Transform an outdated 1990s compartmentalized bathroom into an expansive, spa-like sanctuary with abundant warm light and honest natural materials.',
      constraints:
        'Illustrative portfolio scenario: working within existing exterior envelope dimensions while maximizing perceived volume and storage.',
    },
    designDirection: {
      intent:
        'A calm, tactile bathroom built around warm stone, soft plaster, natural wood, and layered low-glare lighting.',
      paletteAndMaterials:
        'Honed Navona travertine, natural quarter-sawn white oak, aged bronze fittings, and ivory micro-cement plaster ceiling.',
      surfacesAndFixtures:
        'Full-height honed travertine slabs, sculptural matte cast-stone tub, and brushed gunmetal thermostatic controls.',
      lightingApproach:
        'Concealed 2700K perimeter cove lighting, soft architectural wash over stone textures, and glare-free vertical vanity illumination.',
      storageAndLayout:
        'Floating oak dual vanity with integrated soft-close organizers, mirrored recessed wall niches, and concealed linen storage.',
    },
    architecturalElements: [
      'Full-height honed travertine wall finish',
      'Floating oak vanity with integrated storage',
      'Walk-in wet-room layout with linear drainage',
      'Thermostatic rainfall shower and recessed niche',
      'Warm, low-glare layered perimeter lighting',
      'Carefully coordinated stone, metal and timber finishes',
    ],
    scope: [
      'Layout refinement and partition restructuring',
      'Surface and fixture curation and selection',
      'Bespoke floating oak vanity fabrication',
      'Layered architectural lighting coordination',
      'Wet-area zero-threshold detailing and waterproofing',
      'Precision stone installation and finish specification',
    ],
    thinkingBehindDesign:
      'By replacing fragmented shower enclosures with a unified zero-threshold wet room, light flows unhindered across the honed travertine. The tactile warmth of natural oak grounds the space against the mineral calm of stone.',
    relatedServices: [
      { title: 'Bathroom Renovation', href: '#services' },
      { title: 'Flooring & Finishes', href: '#services' },
    ],
    gallery: [
      {
        url: getAssetUrl('images/project-quiet-bath-main.jpg'),
        alt: 'Honed travertine ensuite with freestanding soaking tub and minimalist walk-in wet area',
        caption: 'Ensuite view highlighting the seamless floor-to-ceiling travertine wall treatment and natural light.',
        aspectRatio: '4/3',
      },
      {
        url: getAssetUrl('images/project-quiet-bath-detail.jpg'),
        alt: 'Architectural detail of custom floating white oak vanity and brushed fixtures',
        caption: 'Tactile study of the bespoke oak vanity, showing recessed edge pulls and undermount stone detailing.',
        aspectRatio: '4/3',
      },
      {
        url: getAssetUrl('images/service-bathroom.jpg'),
        alt: 'Walk-in rainfall shower with linear drain and built-in architectural ledge',
        caption: 'Wet room perspective showcasing thermostatic rainfall hardware and integrated stone niche.',
        aspectRatio: '16/9',
      },
    ],
    mainImage: getAssetUrl('images/project-quiet-bath-main.jpg'),
    detailImage: getAssetUrl('images/project-quiet-bath-detail.jpg'),
    alt: 'Travertine retreat bathroom with natural light and cast stone tub',
    isIllustrative: true,
  },
  {
    id: 'walnut-kitchen',
    slug: 'the-walnut-kitchen',
    title: 'The Walnut Kitchen',
    category: 'Kitchen Renovation',
    filterCategory: 'kitchens',
    conceptTag: 'Study 02',
    locationLabel: 'Tarrytown, Austin, TX (illustrative)',
    tagline: 'Walnut cabinetry, pale stone island, integrated appliances, and warm layered lighting.',
    summary:
      'An architectural kitchen tailored for cooking and informal gathering, balancing dark rich timber with luminous quartzite.',
    narrative:
      'Designed around the rhythm of family mornings and evening dinners, this concept replaces closed-off upper cabinets with tailored open shelving and a concealed working scullery. Warm timber grain grounds the space against soft ivory plaster walls and aged bronze hardware.',
    clientBrief: {
      goals:
        'Create an open social kitchen that conceals small appliance clutter while providing generous preparation and dining surfaces.',
      constraints:
        'Illustrative portfolio scenario: integrating heavy slab surfaces and professional refrigeration into existing structural spans.',
    },
    designDirection: {
      intent:
        'A refined culinary workspace that balances furniture-grade millwork with hardworking stone surfaces and clear circulation paths.',
      paletteAndMaterials:
        'American black walnut, honed Taj Mahal quartzite, limewashed off-white plaster, and unlacquered brass accents.',
      surfacesAndFixtures:
        'Continuous 3-inch mitered quartzite island, flush undermount sink, concealed induction cooktop with downdraft ventilation.',
      lightingApproach:
        'Warm 2700K recessed directional spots, under-shelf linear glow, and sculptural pendant focal points over the island.',
      storageAndLayout:
        'Dedicated walk-through pantry/scullery, full-height pullout larders, and custom cutlery and spice timber inserts.',
    },
    architecturalElements: [
      'Custom rift-cut walnut millwork with concealed hardware',
      'Honed Taj Mahal quartzite island with waterfall return',
      'Concealed scullery pantry behind matching panel doors',
      'Flush-mount induction cooking zone and integrated ventilation',
      'Directional low-glare ceiling downlights',
      'Unlacquered brass deck-mounted bridge tapware',
    ],
    scope: [
      'Kitchen space planning and structural aperture widening',
      'Cabinetry design, finish drafting and millwork fabrication',
      'Quartzite slab selection, templating and precision edging',
      'Integrated panel-ready appliance coordination',
      'Electrical layout for task, ambient and accent scenes',
      'Plumbing reconfiguration and fixture installation',
    ],
    thinkingBehindDesign:
      'Locating the scullery behind hidden paneled millwork allows the primary island to remain uncluttered for entertaining, while the tactile walnut provides warmth against the cool natural stone.',
    relatedServices: [
      { title: 'Kitchen Remodeling', href: '#services' },
      { title: 'Interior Transformations', href: '#services' },
    ],
    gallery: [
      {
        url: getAssetUrl('images/project-warm-kitchen-main.jpg'),
        alt: 'Expansive kitchen renovation showing walnut island, quartzite countertops, and warm ambient lighting',
        caption: 'Central kitchen perspective featuring the monolithic quartzite island and tailored walnut cabinetry.',
        aspectRatio: '4/3',
      },
      {
        url: getAssetUrl('images/project-warm-kitchen-detail.jpg'),
        alt: 'Detail view of open shelving, ribbed tile splashback, and architectural countertop appliances',
        caption: 'Detail of bespoke timber joinery, showing flush joinery and subtle under-shelf illumination.',
        aspectRatio: '4/3',
      },
      {
        url: getAssetUrl('images/service-kitchen.jpg'),
        alt: 'Preparation station with integrated storage and undermount prep sink',
        caption: 'Secondary work zone illustrating continuous material flow and durable quartzite worktops.',
        aspectRatio: '16/9',
      },
    ],
    mainImage: getAssetUrl('images/project-warm-kitchen-main.jpg'),
    detailImage: getAssetUrl('images/project-warm-kitchen-detail.jpg'),
    alt: 'Warm modern kitchen featuring walnut millwork and pale stone island',
    isIllustrative: true,
  },
  {
    id: 'connected-living',
    slug: 'the-open-house',
    title: 'The Open House',
    category: 'Whole-Home Renovation',
    filterCategory: 'whole-home',
    conceptTag: 'Study 03',
    locationLabel: 'Cedar Park, TX (illustrative)',
    tagline: 'Connected living/dining spaces, natural oak flooring, and improved daylight flow.',
    summary:
      'A comprehensive transformation opening a compartmentalized single-story layout into a fluid, light-filled family haven.',
    narrative:
      'A complete interior transformation converting a fragmented 1980s floor plan into an interconnected residence. By removing non-bearing and load-bearing partitions and framing expansive sliding glass walls, living, dining, and outdoor terrace flow as one continuous sequence.',
    clientBrief: {
      goals:
        'Improve day-to-day connectivity for entertaining, maximize views of native live oak trees, and modernize thermal performance.',
      constraints:
        'Illustrative portfolio scenario: retrofitting structural steel flitch beams within ceiling cavities to maintain clean flat ceilings.',
    },
    designDirection: {
      intent:
        'An open, breathable living environment that emphasizes architectural simplicity, natural wood warmth, and boundless natural light.',
      paletteAndMaterials:
        'European white oak wide-plank flooring, warm lime-based wall paint, black anodized thermal-break aluminium doors, and exposed cedar beams.',
      surfacesAndFixtures:
        'Flush plaster trims, trimless interior pivot doors, bespoke fireside timber benching, and minimalist floor diffusers.',
      lightingApproach:
        'Indirect ceiling uplighting, perimeter cove lighting to wash textured walls, and zoned scenes for daytime and evening gatherings.',
      storageAndLayout:
        'Full-height architectural storage wall concealing media, home workspace, and audio equipment behind touch-latch oak panels.',
    },
    architecturalElements: [
      'Structural load-bearing partition removal with recessed steel support',
      'Continuous wide-plank European oak flooring throughout',
      'Floor-to-ceiling multi-slide glazed door systems',
      'Exposed natural timber beam detailing at vaulted ceilings',
      'Flush-set architectural baseboards and reglet reveal doors',
      'Custom floor-to-ceiling architectural built-in library',
    ],
    scope: [
      'Structural engineering coordination and beam installation',
      'Space re-zoning and ceiling plane alignment',
      'Whole-home flooring replacement and acoustic underlay',
      'Window and exterior door replacement with high-performance glass',
      'Complete electrical rewire and smart dimming infrastructure',
      'Custom interior trim carpentry and architectural paintwork',
    ],
    thinkingBehindDesign:
      'By aligning ceiling planes and continuing the same 9-inch oak flooring without threshold breaks from entry to terrace doors, the visual volume of the home expands dramatically.',
    relatedServices: [
      { title: 'Complete Home Renovation', href: '#services' },
      { title: 'Flooring & Finishes', href: '#services' },
    ],
    gallery: [
      {
        url: getAssetUrl('images/project-connected-living-main.jpg'),
        alt: 'Open-concept living room flowing into dining area with vaulted ceiling and oak floors',
        caption: 'Expansive main living volume illustrating unobstructed sightlines and daylight penetration.',
        aspectRatio: '4/3',
      },
      {
        url: getAssetUrl('images/project-connected-living-detail.jpg'),
        alt: 'Detail of wide-plank oak flooring meeting flush floor-to-ceiling glass patio door',
        caption: 'Seamless threshold detail connecting interior timber flooring to the outdoor terrace.',
        aspectRatio: '4/3',
      },
      {
        url: getAssetUrl('images/hero-architectural.jpg'),
        alt: 'Modern architectural home at dusk showing seamless glass sliding doors and illuminated interior',
        caption: 'Exterior dusk perspective showing the interior-to-outdoor spatial harmony achieved after renovation.',
        aspectRatio: '16/9',
      },
    ],
    mainImage: getAssetUrl('images/project-connected-living-main.jpg'),
    detailImage: getAssetUrl('images/project-connected-living-detail.jpg'),
    alt: 'Whole-home renovation with connected living spaces and vaulted ceilings',
    isIllustrative: true,
  },
  {
    id: 'quiet-courtyard',
    slug: 'the-quiet-courtyard',
    title: 'The Quiet Courtyard',
    category: 'Indoor / Outdoor Living',
    filterCategory: 'whole-home',
    conceptTag: 'Study 04',
    locationLabel: 'Bee Cave, TX (illustrative)',
    tagline: 'Natural stone paving, timber detailing, planted edges, and a calm entertaining space.',
    summary:
      'An outdoor living pavilion designed to extend residential living into shaded Central Texas gardens year-round.',
    narrative:
      'Framed by native hill country topography, this project reconfigures a sloped backyard into an architectural terrace. Large-format limestone pavers and thermally treated ash wall cladding create an intimate outdoor lounge sheltered from intense midday sun.',
    clientBrief: {
      goals:
        'Create a low-maintenance, architecturally integrated outdoor kitchen and seating zone that feels like a natural extension of the living room.',
      constraints:
        'Illustrative portfolio scenario: managing intense west-facing afternoon solar heat gain and preserving mature cedar elms.',
    },
    designDirection: {
      intent:
        'A calm outdoor room uniting stone, timber, and native landscape to encourage unhurried evening gatherings.',
      paletteAndMaterials:
        'Texas limestone pavers, thermally treated ash siding, graphite steel canopy, and native limestone dry-stack accents.',
      surfacesAndFixtures:
        'Weatherproof 316 marine-grade stainless cooking modules, honed granite outdoor preparation island, integrated linear fire trough.',
      lightingApproach:
        'Discrete 2400K landscape lighting, soft uplighting on tree trunks, and concealed dimmable downlights in canopy rafters.',
      storageAndLayout:
        'Weather-sealed outdoor storage credenza, integrated recycling and waste, and concealed refrigeration drawers.',
    },
    architecturalElements: [
      'Zero-threshold flush indoor/outdoor drainage connection',
      'Honed large-format limestone terrace paving',
      'Architectural steel pergola with cedar shade slats',
      'Custom outdoor preparation bar with monolithic stone top',
      'Low-voltage tree and wall-wash illumination system',
      'Integrated linear drainage and native xeriscape planting beds',
    ],
    scope: [
      'Terrace grading, foundation pad and sub-base preparation',
      'Exterior steel shade structure engineering and erection',
      'Precision stone paver installation with thermal jointing',
      'Exterior plumbing for bar sink and gas supply lines',
      'Dedicated exterior low-voltage lighting control system',
      'Weather-resistant outdoor cabinetry fabrication',
    ],
    thinkingBehindDesign:
      'Extending the floor datum straight outward past sliding glass walls dissolves the boundary between indoors and outdoors, creating a true secondary living space.',
    relatedServices: [
      { title: 'Complete Home Renovation', href: '#services' },
      { title: 'Interior Transformations', href: '#services' },
    ],
    gallery: [
      {
        url: getAssetUrl('images/hero-architectural.jpg'),
        alt: 'Twilight view of sheltered outdoor living room with wood cladding and large glass doors',
        caption: 'Courtyard pavilion at dusk showing warm lighting and integrated indoor-outdoor transition.',
        aspectRatio: '16/9',
      },
      {
        url: getAssetUrl('images/service-whole-home.jpg'),
        alt: 'Exterior architectural detail of cedar cladding and floor-to-ceiling glass wall',
        caption: 'Close architectural study of thermally modified wood cladding and clean structural joints.',
        aspectRatio: '4/3',
      },
      {
        url: getAssetUrl('images/about-detail.jpg'),
        alt: 'Architectural finishes and tactile stone sample board',
        caption: 'Material selection board pairing limestone paving, dark bronze metal, and oiled ash timber.',
        aspectRatio: '4/3',
      },
    ],
    mainImage: getAssetUrl('images/hero-architectural.jpg'),
    detailImage: getAssetUrl('images/service-whole-home.jpg'),
    alt: 'Courtyard terrace with limestone pavers and timber ceiling pergola',
    isIllustrative: true,
  },
  {
    id: 'limestone-ensuite',
    slug: 'the-limestone-ensuite',
    title: 'The Limestone Ensuite',
    category: 'Bathroom Renovation',
    filterCategory: 'bathrooms',
    conceptTag: 'Study 05',
    locationLabel: 'Lakeway, TX (illustrative)',
    tagline: 'Limestone-inspired surfaces, brushed metal fixtures, walk-in shower, and custom storage.',
    summary:
      'A compact guest and family bathroom upgraded with rich textural warmth and clean geometric millwork.',
    narrative:
      'Focused on textural calm and intelligent compact space planning. By pairing large-format warm limestone tiles with a custom quarter-sawn oak vanity, this ensuite achieves a sense of monumental solidity without requiring a huge square footage.',
    clientBrief: {
      goals:
        'Elevate a dated hall bathroom into an elegant guest ensuite with easy-to-clean surfaces and concealed personal storage.',
      constraints:
        'Illustrative portfolio scenario: working within a rigid 9×11 ft structural perimeter with fixed plumbing stack locations.',
    },
    designDirection: {
      intent:
        'Monolithic simplicity: fewer visible seams, generous warm stone planes, and tactile fixtures that age gracefully.',
      paletteAndMaterials:
        'Warm cream limestone tiles, quarter-sawn white oak cabinetry, brushed gunmetal hardware, and micro-fluted glass.',
      surfacesAndFixtures:
        'Curbless walk-in shower with concealed linear drain, wall-hung dual flush toilet, and custom undermount stone trough sink.',
      lightingApproach:
        'Soft backlit perimeter mirrors, directional wet-area shower spotlighting, and subtle floor-level night illumination.',
      storageAndLayout:
        'Recessed full-height mirrored medicine cabinets flush with tile, plus deep double drawers in the floating timber vanity.',
    },
    architecturalElements: [
      'Large-format warm limestone wall and floor tile',
      'Floating quarter-sawn oak vanity with custom stone basin',
      'Curbless walk-in shower with frameless fluted glass panel',
      'In-wall brushed gunmetal thermostatic valve and handshower',
      'Recessed flush medicine cabinets with integrated demister',
      'Radiantly heated floor underlay with digital thermostat',
    ],
    scope: [
      'Complete strip-down to structural framing and subfloor repair',
      'Full Schluter-Kerdi waterproof tanking system application',
      'Precision tile layout with mitred external corners',
      'Custom floating vanity and recessed mirror installation',
      'Plumbing rough-in and finish fixture installation',
      'Low-voltage ambient and task lighting integration',
    ],
    thinkingBehindDesign:
      'Running the same limestone floor tile continuously through the shower pan without a raised curb makes the bathroom floor appear almost 30% wider.',
    relatedServices: [
      { title: 'Bathroom Renovation', href: '#services' },
      { title: 'Flooring & Finishes', href: '#services' },
    ],
    gallery: [
      {
        url: getAssetUrl('images/service-bathroom.jpg'),
        alt: 'Modern limestone guest bathroom with frameless glass shower and wall-mounted vanity',
        caption: 'Full room perspective highlighting the curbless transition and continuous tile alignment.',
        aspectRatio: '16/9',
      },
      {
        url: getAssetUrl('images/project-quiet-bath-main.jpg'),
        alt: 'Stone basin and brushed gunmetal tapware detail',
        caption: 'Close-up of stone basin integration and precision tapware alignment.',
        aspectRatio: '4/3',
      },
      {
        url: getAssetUrl('images/project-quiet-bath-detail.jpg'),
        alt: 'Oak vanity woodwork and dovetail drawer construction',
        caption: 'Interior drawer carpentry detail demonstrating solid oak dovetail construction.',
        aspectRatio: '4/3',
      },
    ],
    mainImage: getAssetUrl('images/service-bathroom.jpg'),
    detailImage: getAssetUrl('images/project-quiet-bath-main.jpg'),
    alt: 'Limestone ensuite with warm stone tile and floating oak vanity',
    isIllustrative: true,
  },
  {
    id: 'modern-heritage',
    slug: 'the-modern-heritage',
    title: 'The Modern Heritage',
    category: 'Interior Upgrade',
    filterCategory: 'interior',
    conceptTag: 'Study 06',
    locationLabel: 'Round Rock, TX (illustrative)',
    tagline: 'A balance of traditional proportions and restrained contemporary finishes.',
    summary:
      'A sensitive revitalization of a classic home, honoring historic millwork while introducing crisp, understated contemporary details.',
    narrative:
      'Celebrating the architectural bones of a historic suburban home while shedding decades of heavy ornament. By restoring tall profile mouldings, applying chalky mineral paint, and introducing wide-plank flooring, the rooms regain their natural grace.',
    clientBrief: {
      goals:
        'Revitalize formal entry, parlor, and library spaces without losing the home’s traditional warmth and architectural integrity.',
      constraints:
        'Illustrative portfolio scenario: repairing uneven century-old plaster surfaces and integrating modern wiring discreetly.',
    },
    designDirection: {
      intent:
        'Harmonious dialogue between classical proportions and clean, modern tactile finishes.',
      paletteAndMaterials:
        'Natural white oak in herringbone and plank, warm Roman clay plaster, blackened steel hardware, and soft linen textiles.',
      surfacesAndFixtures:
        'Restored high-profile solid wood mouldings, custom fireside bookshelves with brass picture lights, and honed soapstone hearth.',
      lightingApproach:
        'Concealed museum-quality picture lights, warm dimmable recessed ambient wash, and classic fabric-shaded architectural fixtures.',
      storageAndLayout:
        'Floor-to-ceiling built-in joinery with adjustable shelving, concealed wiring raceways, and integrated rolling library ladder.',
    },
    architecturalElements: [
      'Restored custom-profile crown moulding and 9-inch baseboards',
      'Herringbone white oak parquet in entry foyer',
      'Roman clay wall finish with soft matte light reflection',
      'Bespoke painted library built-ins flanking masonry fireplace',
      'Hand-forged blackened iron architectural hardware',
      'Concealed media storage and smart low-voltage controls',
    ],
    scope: [
      'Historic plaster wall consolidation and Roman clay application',
      'Precision millwork restoration, fabrication, and spray finishing',
      'Subfloor leveling and custom herringbone hardwood installation',
      'Fireplace hearth replacement with honed natural soapstone',
      'Electrical rewiring for discrete architectural lighting',
      'Architectural door hardware replacement throughout living level',
    ],
    thinkingBehindDesign:
      'Rather than stripping historic character, we simplified the paint palette and restored architectural profiles, allowing light to define the rooms rather than decorative excess.',
    relatedServices: [
      { title: 'Interior Transformations', href: '#services' },
      { title: 'Flooring & Finishes', href: '#services' },
    ],
    gallery: [
      {
        url: getAssetUrl('images/service-interior.jpg'),
        alt: 'Restored living room with warm mineral paint, tall baseboards, and elegant built-in bookshelves',
        caption: 'Main living space showing restored trim proportions and soft matte Roman clay plaster finish.',
        aspectRatio: '16/9',
      },
      {
        url: getAssetUrl('images/service-flooring.jpg'),
        alt: 'Detail of herringbone white oak hardwood flooring with subtle natural oil finish',
        caption: 'Close-up of herringbone oak installation with natural matte protective oil finish.',
        aspectRatio: '4/3',
      },
      {
        url: getAssetUrl('images/about-detail.jpg'),
        alt: 'Cabinetry detailing and architectural hardware selection',
        caption: 'Craftsmanship sample showing custom joinery join and blackened iron hardware fitting.',
        aspectRatio: '4/3',
      },
    ],
    mainImage: getAssetUrl('images/service-interior.jpg'),
    detailImage: getAssetUrl('images/service-flooring.jpg'),
    alt: 'Modern heritage interior with classic trim and contemporary finishes',
    isIllustrative: true,
  },
]
