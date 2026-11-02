export type RenovationType =
  | 'kitchen-remodeling'
  | 'bathroom-renovation'
  | 'complete-home-renovation'
  | 'flooring-interior'
  | 'interior-transformation'
  | 'other'

export type BudgetChoice =
  | 'under-5k'
  | '5k-10k'
  | '10k-25k'
  | '25k-50k'
  | '50k-100k'
  | '100k-plus'
  | 'not-sure'

export type TimelineChoice =
  | 'immediately'
  | '1-3-months'
  | '3-6-months'
  | 'more-than-6-months'
  | 'just-exploring'

export interface ConsultationFormData {
  // Step 1: Project details
  renovationType: RenovationType
  zipCode: string
  budget: BudgetChoice
  timeline: TimelineChoice
  description?: string

  // Step 2: Contact details
  fullName: string
  email: string
  phone: string
  communicationConsent: boolean

  // Honeypot field for bot protection (should remain empty)
  websiteUrl?: string
}

export interface ServiceItem {
  id: RenovationType
  title: string
  subtitle: string
  description: string
  features: string[]
  fictionalBudget: string
  fictionalDuration: string
  image: string
  imageAlt: string
}

export interface GalleryItem {
  url: string
  alt: string
  caption: string
  aspectRatio?: '4/3' | '16/9' | '3/4' | '1/1'
}

export interface DesignDirection {
  intent: string
  paletteAndMaterials: string
  surfacesAndFixtures: string
  lightingApproach: string
  storageAndLayout: string
}

export interface ProjectConcept {
  id: string
  slug: string
  title: string
  category: string
  filterCategory: 'kitchens' | 'bathrooms' | 'whole-home' | 'interior'
  locationLabel: string
  conceptTag: string
  tagline: string
  summary: string
  narrative: string
  clientBrief?: {
    goals: string
    constraints: string
  }
  designDirection: DesignDirection
  architecturalElements: string[]
  scope: string[]
  thinkingBehindDesign: string
  relatedServices: {
    title: string
    href: string
  }[]
  gallery: GalleryItem[]
  mainImage: string
  detailImage: string
  alt: string
  isIllustrative: boolean
}

export interface TestimonialItem {
  id: string
  reviewerName: string
  location: string
  projectType: string
  rating: number
  headline?: string
  quote: string
  reviewDate: string
  isVerifiedGoogleReview: boolean
  reviewerInitials?: string
}

export interface SocialLinksConfig {
  instagram?: string
  youtube?: string
}

export interface ProcessStage {
  step: string
  title: string
  durationEstimate?: string
  description: string
  deliverables: string[]
}

export interface FAQItemData {
  id: string
  question: string
  answer: string
  category?: string
}
