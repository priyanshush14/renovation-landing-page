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

export interface ProjectConcept {
  id: string
  title: string
  category: string
  conceptTag: string
  tagline: string
  narrative: string
  scope: string[]
  mainImage: string
  detailImage: string
  alt: string
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
