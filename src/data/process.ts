import type { ProcessStage } from '../types'

export const PROCESS_DATA: ProcessStage[] = [
  {
    step: '01',
    title: 'Initial Consultation',
    durationEstimate: '30–45 mins',
    description:
      'We discuss your vision, daily routines, target timeline, and investment range to determine if Hearth & Haven is the right partner for your project.',
    deliverables: [
      'Vision & lifestyle alignment conversation',
      'Preliminary feasibility & service-area review',
      'Clear explanation of our collaboration model',
    ],
  },
  {
    step: '02',
    title: 'Property Assessment',
    durationEstimate: '1–2 hours on-site',
    description:
      'A comprehensive on-site review of your home’s existing architecture, structural conditions, electrical/plumbing infrastructure, and spatial opportunities.',
    deliverables: [
      'Laser-measured spatial verification',
      'Mechanical, electrical & plumbing condition audit',
      'Initial layout suggestions & material considerations',
    ],
  },
  {
    step: '03',
    title: 'Proposal & Estimate',
    durationEstimate: '1–2 weeks',
    description:
      'A transparent, line-item proposal outlining the agreed architectural scope, material selections, realistic allowances, and projected construction schedule.',
    deliverables: [
      'Itemized scope of work with transparent cost breakdown',
      'Material specification schedule & trade allowances',
      'Milestone-driven project timeline',
    ],
  },
  {
    step: '04',
    title: 'Renovation Execution',
    durationEstimate: 'Milestone-managed',
    description:
      'Your dedicated project manager orchestrates trades, site protection, permits, and quality controls, keeping you informed with weekly photo and status updates.',
    deliverables: [
      'Single point of contact coordinating all work',
      'Rigorous dust containment & surface protection',
      'Regular photo logs & progress checkpoints',
    ],
  },
  {
    step: '05',
    title: 'Final Walkthrough & Handover',
    durationEstimate: 'Completion phase',
    description:
      'Together we walk through every corner of the finished space, resolve any punch-list items to the millimeter, and deliver your comprehensive care dossier.',
    deliverables: [
      'Detailed punch-list sign-off with homeowner',
      'Equipment warranties, paint codes & finish manuals',
      'Post-completion check-in schedule',
    ],
  },
]
