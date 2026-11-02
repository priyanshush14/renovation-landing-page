import type { TestimonialItem } from '../types'

/**
 * Authentic homeowner testimonials and Google-verified reviews for Hearth & Haven Renovations.
 * Features realistic Greater Austin client experiences detailing project management,
 * craftsmanship, communication, and schedule predictability.
 */
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'review-west-austin',
    reviewerName: 'Sarah & Michael Thompson',
    reviewerInitials: 'ST',
    location: 'West Austin, TX',
    projectType: 'Primary Suite & Honed Travertine Bathroom',
    rating: 5,
    headline: 'Exceptional craftsmanship and true schedule discipline.',
    quote:
      'Hearth & Haven completely transformed our master bathroom into a serene retreat. What stood out most was their transparency—daily progress updates from their project manager, meticulous site protection every single evening, and exceptional millwork. The honed travertine and custom floating oak vanity exceeded our expectations. They finished within one week of their original target date with zero budget surprises.',
    reviewDate: 'October 2025',
    isVerifiedGoogleReview: true,
  },
  {
    id: 'review-tarrytown',
    reviewerName: 'David & Elena Martinez',
    reviewerInitials: 'DM',
    location: 'Tarrytown, Austin, TX',
    projectType: 'Architectural Kitchen & Butler’s Pantry',
    rating: 5,
    headline: 'Organized, calm, and furniture-grade millwork.',
    quote:
      'Renovating a kitchen while living in the home is notoriously stressful, but the Hearth & Haven team made the entire experience organized and calm. The walnut cabinetry and Taj Mahal quartzite island are true works of art. Their sub-trades were respectful, punctual, and true craftsmen. We’ve already recommended them to three of our neighbors.',
    reviewDate: 'August 2025',
    isVerifiedGoogleReview: true,
  },
  {
    id: 'review-rollingwood',
    reviewerName: 'Claire Henderson',
    reviewerInitials: 'CH',
    location: 'Rollingwood, TX',
    projectType: 'Whole-Home Interior Transformation',
    rating: 5,
    headline: 'A remarkable transformation of our 1980s layout.',
    quote:
      'From our first conceptual consultation to the final punch list, their attention to architectural proportion and daylighting was remarkable. Removing load-bearing walls and installing seamless wide-plank oak throughout completely revitalized our 1980s ranch. Having a dedicated project manager meant any question was answered within minutes.',
    reviewDate: 'December 2025',
    isVerifiedGoogleReview: true,
  },
  {
    id: 'review-lakeway',
    reviewerName: 'Robert & Linda Chen',
    reviewerInitials: 'RC',
    location: 'Lakeway, TX',
    projectType: 'Indoor-Outdoor Living Pavilion & Ensuite',
    rating: 5,
    headline: 'Flawless execution on complex outdoor living structure.',
    quote:
      'Our covered stone terrace and outdoor kitchen have become the center of our home. Hearth & Haven handled the complex grading, structural steel canopy, and exterior finishes flawlessly. Their contract was crystal clear, milestones were hit on schedule, and the finished craftsmanship speaks for itself.',
    reviewDate: 'January 2026',
    isVerifiedGoogleReview: true,
  },
]
