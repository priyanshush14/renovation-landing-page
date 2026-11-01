# HEARTH & HAVEN RENOVATIONS LLC

## Website Product & Implementation Specification

**Project ID:** HH-WEB-001\
**Document version:** 1.0\
**Document status:** Approved implementation brief for portfolio
simulation\
**Business location:** Austin, Texas, USA\
**Website type:** Responsive, conversion-focused marketing landing page\
**Authentication:** Not required\
**Primary conversion:** Qualified renovation consultation enquiry

> **CONFIDENTIAL SIMULATION NOTICE**\
> Hearth & Haven Renovations LLC is a fictional company created for a
> portfolio exercise. All company details, claims, staff, contact
> information, reviews, project histories, figures, imagery and
> operational information in this document are fictional unless
> explicitly identified as real external research. Do not present
> invented testimonials, certifications, awards, project statistics,
> licenses or customer stories as genuine. Use clearly labelled concept
> content and imagery until genuine approved assets are supplied.
> this is just a notice dont give a display it to be frictional in the landing page.
> this landing page will be used my bussiness owners.

---

# 0. Instructions to the implementation agent

Build the website described in this document as a complete, polished,
production-quality **single-page marketing website**. This is not a
dashboard, SaaS application or full-stack customer portal.

Follow these rules:

1.  Read this entire document before creating files or writing
    components.
2.  Treat the brand and conversion requirements as product requirements,
    not optional inspiration.
3.  Do not invent additional business claims, testimonials, licenses,
    awards, guarantees, project counts or customer identities.
4.  Do not use generic AI-looking layouts, generic gradients,
    glassmorphism, excessive rounded cards, random floating blobs,
    overused purple/blue palettes, or repetitive template sections.
5.  The visual result must feel like a premium residential renovation
    and design-build studio: warm, architectural, editorial, restrained,
    tactile and confident.
6.  Prioritize excellent typography, photography, spacing, visual
    hierarchy, responsive behaviour, accessibility and page performance.
7.  Use reusable components and clean TypeScript. Avoid one enormous
    component.
8.  Do not add authentication, user accounts, admin panels, payments,
    databases or a customer dashboard.
9.  The enquiry form must not pretend to submit successfully if no real
    delivery endpoint is configured. In development, provide a clear
    demo mode. In production, require a secure server-side endpoint
    before enabling real submission.
10. Before finishing, run the available lint, type-check and production
    build commands. Fix all errors.

## Definition of done

The project is complete only when: - The entire agreed sitemap is
implemented as one navigable landing page. - Every navigation item and
CTA works. - The enquiry form has client-side validation and a secure
server-side submission design. - No secret keys or private credentials
exist in frontend code. - Mobile, tablet and desktop layouts have been
checked. - Keyboard navigation, focus states, contrast and
reduced-motion preferences are supported. - Images are optimized and
have appropriate alt text. - SEO metadata and social sharing metadata
are present. - Analytics events are defined without collecting
unnecessary personal information. - No placeholder links, dead buttons,
fake success states or broken images remain. - All fictional portfolio
material is clearly disclosed as concept content.

---

# 1. Complete client context

## 1.1 Business identity

---

Field Fictional client information

---

Legal name Hearth & Haven Renovations LLC

Trading name Hearth & Haven

Founded 2018

Headquarters Austin, Texas, United States

Industry Residential renovation and
remodeling

Company size 12 fictional employees

Service area Austin, Round Rock, Cedar Park,
Pflugerville, Georgetown, Lakeway
and Bee Cave

Business hours Monday--Friday 8 AM--6 PM; Saturday
9 AM--2 PM; Sunday closed

Fictional email hello@hearthandhaven.example

Fictional phone +1 (512) 555-0148

---

The `.example` email domain is reserved for examples and is not a
deliverable business mailbox. The phone number is also fictional. Do not
use these as real contact channels or publish them as if they work.

## 1.2 Company background

Hearth & Haven was created in 2018 by two construction professionals who
saw homeowners struggle with unclear budgets, inconsistent contractor
communication, delays, fragmented trades and uncertainty during
residential renovations.

The fictional company began with kitchen remodeling and expanded into
bathroom renovation, flooring and interior upgrades, space
transformation and whole-home renovation.

The business wants to be perceived as a dependable, design-conscious
renovation partner---not the cheapest contractor in town.

## 1.3 Mission

To make home renovation a transparent, organized and rewarding
experience by combining thoughtful design, skilled craftsmanship and
dependable project management.

## 1.4 Vision

To become one of the most trusted residential renovation companies in
the Greater Austin area.

## 1.5 Brand personality

- Warm, composed and welcoming.
- Premium without being pretentious.
- Architectural and design-conscious.
- Experienced and dependable.
- Clear, honest and reassuring.
- Personal rather than corporate.

## 1.6 Positioning statement

**Hearth & Haven is a residential renovation partner for Austin-area
homeowners who value considered design, skilled workmanship and a more
organized renovation experience.**

Do not position the company as a luxury-only firm that excludes ordinary
homeowners. The desired feeling is premium and elevated, but
approachable.

## 1.7 Primary business problem

The fictional company relies heavily on referrals, previous customers,
local contractor networks and social media. It lacks a professional
website that consistently explains its services, showcases completed
work, establishes trust and generates qualified enquiries.

Specific problems: - Weak centralized online presence. - No polished
portfolio of completed projects. - Prospects cannot easily understand
the company's process. - Enquiries may be outside the service area or
outside the company's project fit. - Potential customers compare it with
competitors that have more developed websites. - The business has no
structured digital enquiry journey.

## 1.8 Website objectives

### Primary objective

Generate qualified consultation enquiries from homeowners within the
company's service area.

### Secondary objectives

- Establish credibility.
- Showcase renovation work.
- Explain services and project process.
- Address common concerns about budget, timing and communication.
- Encourage visitors to request a consultation.
- Support local search visibility.
- Give the company a strong digital presentation for future marketing
  campaigns.

### Fictional management targets

The client has proposed 20--30 qualified enquiries per month and 8--12
consultation bookings per month within six months of launch. These are
fictional aspirations, not guaranteed performance forecasts. Do not
display them on the website.

## 1.9 Target audiences

### Primary: established homeowners, approximately 30--60

Homeowners in Greater Austin considering a kitchen, bathroom, interior
or whole-home renovation. They may be busy professionals or families who
value good communication and dependable project coordination.

### Secondary: new homeowners

People who have recently purchased a home and want to renovate before
moving in.

### Customer motivations

- Improve comfort and daily usability.
- Modernize an outdated home.
- Improve the layout or storage.
- Make a recently purchased property feel personal.
- Coordinate a larger renovation with one accountable team.

### Customer anxieties

- Cost overruns and unclear estimates.
- Contractors not communicating.
- Work taking longer than expected.
- Poor workmanship.
- Damage, disruption or lack of respect for the home.
- Not knowing what happens after the first enquiry.
- Difficulty comparing contractors.

The page must answer these concerns through clear information, genuine
proof and a predictable next step.

## 1.10 Services

All service prices and timelines below are fictional planning figures.
They are not binding quotes and must be presented as indicative only if
included publicly.

---

Service Description Fictional indicative Fictional typical
budget duration

---

Kitchen Layout, \$18,000--\$45,000 3--7 weeks
remodeling cabinetry,  
 countertops,  
 flooring,  
 lighting and  
 fixtures

Bathroom Tile, shower, \$8,000--\$25,000 2--5 weeks
renovation vanity,  
 lighting,  
 plumbing  
 fixtures and  
 space  
 optimization

Complete home Multiple rooms, \$60,000--\$150,000+ 2--6 months
renovation flooring,  
 fixtures,  
 cabinetry and  
 coordinated  
 execution

Flooring and Flooring, \$5,000--\$20,000 Scope-dependent
interior interior  
 upgrades finishes,  
 lighting and  
 selected  
 improvements

Interior space Layout \$12,000--\$40,000 Scope-dependent
transformation improvements and  
 aesthetic  
 modernization

---

Do not imply that every project fits these ranges. Actual costs depend
on property condition, scope, material choices, structural requirements,
permits and site conditions.

## 1.11 Unique value propositions

1.  **Transparent estimates:** written proposals explain scope,
    materials and anticipated costs.
2.  **Dedicated project manager:** a designated contact coordinates
    communication on major projects.
3.  **Structured process:** a clear journey from consultation to final
    walkthrough.
4.  **Quality-minded execution:** considered material selection, skilled
    installation and quality checks.
5.  **Consistent communication:** progress updates throughout the
    project.
6.  **Personalized planning:** recommendations consider the homeowner's
    preferences, property and budget.

These are fictional client-provided positioning claims. They must be
verified before a real business publishes them.

---

# 2. Competitor research and strategic implications

The research below is a directional review of public-facing websites,
not a complete technical, conversion-rate or traffic audit. Competitor
websites can change. Revisit them during implementation.

## 2.1 ATX Renovations

Website: https://atxrenovations.com/

Observed strengths in the reviewed public experience: - Premium
positioning and confident headline language. - Strong project
photography and visual presentation. - Trust indicators and credentials
are prominent. - Founder/company story supports credibility. - A clear
process helps reduce uncertainty. - Project galleries help visitors
imagine the outcome. - Consultation calls to action are repeated.

What Hearth & Haven should learn: - Treat the portfolio as a central
conversion asset, not a decorative gallery. - Show the standard of work
visually before asking for a lead. - Explain the process, not just the
list of services. - Use a distinctive premium visual identity.

Opportunity: - Make the next step after the CTA especially clear. - Pair
strong project storytelling with a focused, low-friction enquiry path.

## 2.2 reVision Kitchen and Bath Remodeling

Website: https://revisionaustin.com/

Observed strengths: - Personal, owner-led positioning. - Explains the
consultation and proposal journey. - Helps customers understand how the
company works. - Communicates the value of a point of contact and
organized project handling. - Reduces uncertainty around planning and
estimates.

What Hearth & Haven should learn: - Customers are buying a managed
experience, not only a finished room. - Explain what happens after the
first enquiry. - Communicate accountability and human involvement.

Opportunity: - Show a concise five-step process and state who contacts
the homeowner after a request.

## 2.3 Hancock Design and Build

Website: https://www.hancockdesignandbuild.com/

Observed strengths: - Clear specialization and positioning. -
Founder-led storytelling. - Project imagery and customer proof. -
Helpful FAQs. - Cost guidance that helps prospects understand the
investment involved.

What Hearth & Haven should learn: - Cost uncertainty is a major
barrier. - FAQs can answer objections before the visitor contacts the
company. - Budget guidance can help qualify enquiries.

Opportunity: - Give careful, clearly qualified budget guidance and make
it clear that a site assessment is needed for an accurate proposal.

## 2.4 Best Austin Handyman & Remodeling

Website: https://bestaustinhandyman.com/

A published agency case study about this business describes: -
Service-specific content. - Project examples linked to services. -
Consistent quote-request calls to action. - Separate contact and
quote-request paths. - Phone visibility and mobile-first navigation. -
Analytics tracking for calls and completed quote forms.

The agency case study reports a 55% increase in organic clicks over its
comparison period. Treat this as a vendor-reported case-study result,
not an independently verified benchmark or a promise.

What Hearth & Haven should learn: - Match content to the visitor's
intended service. - Make contact and quote requests easy to find. -
Track meaningful actions, not just page views. - Ensure mobile
navigation and enquiry flows are effortless.

## 2.5 Competitive synthesis

The strongest shared principles are: - Credibility is built through
genuine project proof. - Premium photography helps prospects imagine the
result. - Process transparency reduces perceived risk. - FAQs and
pricing context address uncertainty. - Repeated, clear CTAs make the
next step obvious. - Mobile usability and lead tracking matter. -
Service-specific relevance improves the visitor journey.

Hearth & Haven should combine: 1. The visual confidence and portfolio
emphasis of premium remodelers. 2. The personal and process-oriented
reassurance of owner-led firms. 3. The educational value of cost
guidance and FAQs. 4. The clear lead pathways and measurement discipline
of conversion-focused websites.

Do not copy competitor layouts, text, logos, images or brand identity.
Use the research to inform our own original design.

---

# 3. Conversion strategy

## 3.1 Conversion principle

The page should move a homeowner through this mental journey:

**Attention → Relevance → Trust → Confidence → Enquiry → Follow-up**

A visitor should understand: - What the company does. - Whether it
serves their location. - Whether it handles their type of project. -
What makes its approach different. - What the process looks like. - What
the next step involves.

The form is not the only conversion element. Every section should
resolve a question or reduce a barrier.

## 3.2 Primary conversion

**Request a Free Consultation**

Use this exact primary CTA consistently in the header, hero, relevant
mid-page prompts and final CTA.

Do not promise a free on-site design service or detailed estimate unless
the client confirms that is part of its real offer. The CTA only
requests an initial consultation.

## 3.3 Secondary conversion

**Explore Our Work**

This CTA scrolls to the project portfolio section.

Secondary actions: - Tap-to-call phone link. - Email link. - Click a
service anchor. - Open a project detail lightbox or project detail view.

## 3.4 Visitor objections and how the page answers them

---

Visitor question Page response

---

Can I trust this company? Company introduction, genuine
credentials and authentic reviews

Have they done work like mine? Relevant project portfolio and
service sections

What will the process be? Five-step renovation process

How much might it cost? Clearly qualified indicative budget
context or estimate guidance

Will they communicate? Dedicated project manager and
update process

Do they serve my area? Service-area statement and ZIP code
field

What happens after I enquire? Explicit form confirmation and
follow-up explanation

---

## 3.5 CTA placement rules

- Header: primary CTA visible on desktop.
- Mobile header: compact menu and clear consultation action.
- Hero: primary CTA and secondary project CTA.
- After portfolio: consultation CTA for visitors persuaded by the
  work.
- After process: CTA for visitors who value organization.
- Final section: strong consultation CTA and form.
- Do not place a button in every section. Repetition should feel
  intentional, not aggressive.

## 3.6 Lead qualification form

Use a two-step form to avoid presenting a large intimidating form
immediately.

### Step 1: Project details

- Renovation type.
- Property ZIP code.
- Approximate budget.
- Desired project start.
- Optional short project description.

### Step 2: Contact details

- Full name.
- Email address.
- Phone number.
- Consent checkbox only where required for the specific communication
  or marketing purpose.

### Renovation type choices

- Kitchen remodeling.
- Bathroom renovation.
- Complete home renovation.
- Flooring and interior upgrades.
- Other.

### Budget choices

- Under \$5,000.
- \$5,000--\$10,000.
- \$10,000--\$25,000.
- \$25,000--\$50,000.
- \$50,000--\$100,000.
- \$100,000+.
- Not sure yet.

### Timeline choices

- Immediately.
- Within 1--3 months.
- Within 3--6 months.
- More than 6 months.
- Just exploring.

### Form UX requirements

- Show progress, e.g. "Step 1 of 2".
- Preserve entered data when moving between steps.
- Allow moving back without losing data.
- Validate each step before proceeding.
- Use clear inline error messages.
- Use correct input types and autocomplete attributes.
- Do not ask for unnecessary sensitive information.
- Make optional fields clearly optional.
- Do not force marketing consent as a condition of requesting a
  consultation.
- Explain what happens after submission.
- On success, show a clear confirmation and next-step expectation.
- On failure, preserve the user's input and explain how to retry or
  use the phone/email fallback.

## 3.7 Trust and proof rules

Until authentic client assets exist: - Use concept photography with
appropriate licenses or generated concept visuals. - Label project
examples as "Concept project" or "Illustrative concept". - Do not create
fake customer names, headshots, star ratings or quotes. - Do not invent
"150+ projects", "98% satisfaction", awards, licenses or
certifications. - Use neutral trust copy based on the supplied fictional
business positioning, and label the overall site as a fictional
portfolio concept in the footer or case-study context. - Never imply
that generated interior images are completed client projects.

## 3.8 Measurement plan

Track: - `primary_cta_click` - `secondary_cta_click` - `phone_click` -
`email_click` - `form_started` - `form_step_completed` -
`form_validation_error` - `form_submitted` - `form_submission_failed` -
`project_gallery_opened` - `service_anchor_clicked`

Do not send form field values, names, phone numbers, emails or free-text
project descriptions to analytics. Use a privacy-conscious analytics
configuration and obtain consent where required.

Key metrics: - CTA click-through rate. - Form start rate. - Form
completion rate. - Qualified enquiry rate (requires business-side
qualification). - Consultation booking rate. - Phone click rate. -
Mobile versus desktop conversion performance.

Do not claim a conversion rate target without traffic and campaign
context. Use actual baseline data after launch.

---

# 4. Complete sitemap and page architecture

This is a single-page landing website. The sitemap represents the page's
information architecture and anchor destinations, not separate
authenticated routes.

## 4.1 Sitemap

```text
/
├── Header / Navigation
│   ├── Brand mark
│   ├── Services (#services)
│   ├── Our Work (#projects)
│   ├── Our Process (#process)
│   ├── About (#about)
│   └── Request a Consultation (#contact)
│
├── Hero (#top)
│   ├── Eyebrow: Austin Residential Renovation
│   ├── Primary headline
│   ├── Supporting statement
│   ├── Primary CTA
│   ├── Secondary CTA
│   └── Hero photography
│
├── Trust Strip (#trust)
│   ├── Experience statement
│   ├── Service-area statement
│   └── Process / project-care statement
│
├── Introduction (#about)
│   ├── Editorial image
│   ├── Company introduction
│   └── Brand philosophy
│
├── Services (#services)
│   ├── Kitchen Remodeling
│   ├── Bathroom Renovation
│   ├── Complete Home Renovation
│   ├── Flooring & Interior Upgrades
│   └── Interior Space Transformation
│
├── Featured Projects (#projects)
│   ├── Project 01 – Kitchen concept
│   ├── Project 02 – Bathroom concept
│   └── Project 03 – Whole-home concept
│
├── Why Hearth & Haven (#why-us)
│   ├── Transparent estimates
│   ├── Dedicated project manager
│   ├── Structured process
│   └── Communication and craftsmanship
│
├── Renovation Process (#process)
│   ├── Initial Consultation
│   ├── Property Assessment
│   ├── Proposal & Estimate
│   ├── Renovation Execution
│   └── Final Inspection & Handover
│
├── Testimonials / Client Proof (#testimonials)
│   └── Only authentic approved testimonials in real deployment
│
├── Budget & Planning (#planning)
│   ├── Budget context
│   ├── Factors that affect cost
│   └── CTA
│
├── FAQ (#faq)
│   ├── Service area
│   ├── Project types
│   ├── Estimates
│   ├── Timeline
│   ├── Consultation
│   └── Project communication
│
├── Consultation Form (#contact)
│   ├── Step 1 – Project details
│   ├── Step 2 – Contact details
│   ├── Validation
│   └── Success / error state
│
└── Footer
    ├── Brand statement
    ├── Navigation links
    ├── Services
    ├── Service area
    ├── Fictional contact details (demo only)
    ├── Privacy notice
    └── Portfolio simulation disclosure
```

## 4.2 Section-by-section content and layout specification

### A. Header / navigation

Purpose: orientation and persistent access to the primary conversion
action.

Desktop: - Brand wordmark on the left. - Navigation links centered or
right-aligned. - Primary consultation CTA at the far right. -
Transparent or warm ivory background over the page, transitioning to a
solid ivory surface after scrolling. - Thin understated bottom border
only when useful.

Mobile: - Brand wordmark. - Menu button with accessible label. -
Consultation CTA or compact icon/button. - Full-screen or anchored
dropdown menu with large tap targets. - Menu closes after selecting a
link and after Escape. - Lock background scroll while an overlay menu is
open.

### B. Hero

Purpose: immediate relevance, premium impression and clear next action.

Headline direction: **"A better home begins with a better renovation
experience."**

Supporting copy: "Thoughtful design. Skilled craftsmanship. A renovation
process built around your home and your priorities."

Eyebrow: "AUSTIN, TEXAS · RESIDENTIAL RENOVATION"

Primary CTA: "Request a Free Consultation"

Secondary CTA: "Explore Our Work"

Visual: - One exceptional, wide architectural interior photograph. -
Warm natural daylight. - Refined residential kitchen or living space. -
No collage of random stock thumbnails. - Use a restrained image crop and
considered negative space. - Text should remain readable at all
breakpoints.

Desktop composition: - Large editorial text block and large image, or
text over an image only if contrast and legibility are excellent. -
Avoid overlaid text on a visually busy photo. - The hero should feel
like an architecture/interiors publication.

Mobile: - Headline first, image immediately below or behind with strong
contrast. - Buttons full-width or stacked. - No text overflow or tiny
controls.

### C. Trust strip

Purpose: quickly reassure visitors without inventing proof.

Use three concise trust statements: - "A considered approach to every
home" - "A clear, guided renovation process" - "Serving Austin and
nearby communities"

Do not use fabricated numerical counters.

### D. About / introduction

Purpose: humanize the company and explain its philosophy.

Suggested heading: **"A more considered way to renovate."**

Copy should communicate: - Renovation is personal and can be
disruptive. - A clear plan and consistent communication matter. - The
team aims to combine design thinking with practical execution. - The
homeowner should understand what happens next.

Layout: - Large image paired with a restrained editorial text column. -
Use a serif heading, short paragraphs and one small CTA. - Avoid a
generic "About us" card.

### E. Services

Purpose: help visitors quickly identify fit.

Use five service items: 1. Kitchen Remodeling. 2. Bathroom Renovation. 3. Complete Home Renovation. 4. Flooring & Interior Upgrades. 5.
Interior Space Transformation.

Each service item: - Relevant image. - Clear title. - One concise
benefit-led description. - Optional "Discuss your project" link
scrolling to the form. - No fake "starting at" prices unless the client
has approved the ranges.

Visual approach: - Asymmetric editorial grid. - Avoid five identical
rounded cards. - Use image-led blocks, fine rules and clear
typography. - Keep text short and scannable.

### F. Featured projects

Purpose: visual proof and aspiration.

Create three fictional concept project entries: - "Warm Modern Kitchen"
-- kitchen concept. - "Quiet Retreat Bathroom" -- bathroom concept. -
"Connected Living" -- whole-home concept.

Each entry should contain: - Concept label. - Project category. - Short
project narrative. - One primary image. - Optional supporting
image(s). - A clear note that this is concept imagery, not a verified
completed Hearth & Haven project.

Use a varied editorial grid. Images should be large and carefully
cropped. Avoid fake addresses, client identities, project budgets or
completion dates.

### G. Why choose Hearth & Haven

Purpose: differentiate and answer "why this company?"

Use four proof-oriented themes: - Transparent estimates. - A dedicated
project manager. - A structured renovation process. - Consistent
communication.

Use simple line icons only if they improve comprehension. Prefer
typographic hierarchy and short descriptions over icon-heavy cards.

### H. Renovation process

Purpose: reduce uncertainty.

Five stages: 1. Initial Consultation -- understand the homeowner's
goals, location and approximate budget. 2. Property Assessment -- assess
the existing property and discuss possibilities. 3. Proposal & Estimate
-- provide a proposed scope, estimate, material considerations and
expected timeline. 4. Renovation Execution -- coordinate the agreed work
and communicate progress. 5. Final Inspection & Handover -- walk through
the completed agreed scope and address outstanding items.

Visual: - Horizontal numbered timeline on desktop. - Vertical stacked
steps on mobile. - Use thin lines, large numerals and concise copy. -
Avoid excessive motion.

### I. Testimonials / client proof

Purpose: social proof.

For this fictional portfolio build, do not fabricate testimonials. Build
the section as a component that can accept approved review data later.

During portfolio simulation: - Either omit the section from the visible
page until authentic material exists, or show a clearly marked "Client
stories will appear here" content state. - Do not create fake five-star
ratings or fictional customer portraits.

### J. Budget and planning

Purpose: qualify prospects and reduce price uncertainty.

Heading direction: **"Every home is different. A clear plan comes
first."**

Explain that renovation costs depend on: - Existing property
condition. - Project scope and layout changes. - Materials and
finishes. - Plumbing, electrical or structural work. - Permits and
inspections where applicable. - Site access and project complexity.

If displaying indicative ranges from the fictional client brief, add a
clear note: "Planning ranges only. Final pricing depends on site
assessment, scope, selections and project conditions."

Do not present ranges as a guaranteed quote or a universal Austin market
benchmark.

### K. FAQ

Purpose: resolve remaining objections.

Suggested questions: 1. Which areas do you serve? 2. What types of
renovation projects do you take on? 3. How does the initial consultation
work? 4. Do you provide written estimates? 5. How long does a renovation
take? 6. Can I live in my home during renovation? 7. How will I receive
project updates? 8. What should I prepare before requesting a
consultation?

Answers must be concise and grounded in the fictional client brief.
Where details are not supplied, say the project team will discuss them
during consultation rather than inventing a policy.

Use accessible accordion controls: - Keyboard-operable. - Correct
`aria-expanded` and `aria-controls`. - Clear focus state. - Avoid
automatically opening multiple answers unless intentional.

### L. Consultation form

Purpose: turn qualified interest into an actionable enquiry.

Use the two-step form described in Section 3.6.

Form heading: **"Tell us a little about your project."**

Supporting text: "Share a few details and our team can understand what
you're planning before getting in touch."

Include privacy reassurance: "Your details are used to respond to your
renovation enquiry. Do not submit payment information or sensitive
personal information."

The site must not claim that the form is live unless the secure endpoint
is configured and tested.

### M. Footer

Include: - Brand wordmark. - Short positioning statement. - Navigation
links. - Service links. - Service-area list. - Fictional phone/email
only in clearly marked portfolio demo context. - Privacy policy link
only if a real privacy page exists; otherwise do not create a dead
link. - Simulation disclosure: "Concept website created for a portfolio
project. Hearth & Haven Renovations LLC is a fictional brand."

---

# 5. Visual design system: premium, architectural and timeless

## 5.1 Art direction

The design should feel like a boutique architecture and interior design
studio---not a generic contractor template and not a trendy AI-generated
SaaS page.

Desired qualities: - Editorial. - Architectural. - Quiet luxury. - Warm
and tactile. - Confident. - Restrained. - Timeless. - Human.

Reference mood: - Premium residential architecture publications. -
Boutique interior design studios. - High-end hospitality interiors. -
Contemporary homes with natural materials.

## 5.2 Colour palette

Use this palette consistently. Do not add bright gradients or random
accent colours.

Token Hex Use

---

`--color-ink` `#292824` Primary text, dark sections
`--color-ivory` `#F5F1E9` Main page background
`--color-paper` `#FBF9F5` Alternate light surfaces
`--color-olive` `#85866D` Restrained accent
`--color-olive-dark` `#62644F` Hover and active accent
`--color-stone` `#D8CCBA` Borders, dividers, subtle surfaces
`--color-taupe` `#B7A894` Secondary decorative tone
`--color-muted` `#77746C` Secondary text
`--color-white` `#FFFFFF` Image/text contrast where needed
`--color-error` `#A34336` Form errors
`--color-success` `#526B50` Form success

Rules: - Main background should be ivory or paper, not pure white
everywhere. - Use ink for strong text. - Olive should be an accent, not
a large saturated background. - Dark sections should use ink with ivory
text. - Use stone for subtle separators. - Do not use gradients as a
substitute for photography. - Ensure WCAG AA contrast for text and
controls.

## 5.3 Typography

Use a refined editorial serif for display headings and a neutral
sans-serif for body/UI.

Recommended Google Fonts: - Display: `DM Serif Display` or
`Cormorant Garamond`. - Body/UI: `Manrope` or `DM Sans`.

Preferred pairing: - `DM Serif Display` for hero and section headings. -
`Manrope` for body, navigation, forms and buttons.

Load fonts efficiently: - Use only necessary weights. - Prefer
self-hosted font files if practical, or use the font provider's
optimized delivery. - Add sensible fallback fonts. - Avoid layout shift
while fonts load.

Typography scale (responsive with `clamp()`): - Hero display:
`clamp(3rem, 6.2vw, 6.4rem)`, line-height 0.98--1.08. - Section heading:
`clamp(2.25rem, 4vw, 4.25rem)`. - Subheading:
`clamp(1.25rem, 2vw, 1.75rem)`. - Body large: 18--20px. - Body:
16--17px. - Small label: 11--13px, uppercase, letter spacing
0.08--0.14em. - Navigation: 13--15px.

Do not use all-caps for paragraphs. Reserve uppercase tracking for small
eyebrow labels.

## 5.4 Layout and spacing

- Maximum content width: approximately 1280px.
- Text measure: 55--75 characters for long-form text.
- Desktop side padding: 64--88px depending on viewport.
- Tablet side padding: 32--40px.
- Mobile side padding: 20--24px.
- Section vertical spacing: 104--144px desktop; 72--96px tablet;
  56--76px mobile.
- Use an 8px spacing rhythm.
- Use generous negative space.
- Avoid excessive cards and unnecessary containers.
- Prefer full-width image compositions, editorial columns, fine rules
  and asymmetrical grids.

## 5.5 Shape language

- Buttons: subtle 2--4px radius or restrained pill only if visually
  appropriate; do not make every element pill-shaped.
- Cards: mostly square or lightly rounded corners (4--8px).
- Image corners: 2--6px, or square edge for editorial layouts.
- Dividers: 1px stone.
- Avoid excessive shadows.
- If shadow is needed, keep it very soft and realistic.

## 5.6 Imagery direction

Images are one of the most important design assets.

Use photography with: - Natural daylight. - Warm oak, walnut, limestone,
travertine, plaster, linen and brushed metal. - Neutral and earthy
colours. - Realistic lived-in details. - High-end but believable
residential interiors. - Architectural composition and depth. - A mix of
wide room images and close material details.

Avoid: - Overly glossy CGI-looking rooms. - Unrealistic floating
furniture. - Repetitive identical kitchens. - Over-saturated orange
wood. - Cold blue lighting. - Obvious generic stock photography. -
Images with embedded text or watermarks. - Reusing the same image across
multiple sections.

Use licensed, client-supplied or original generated assets. If
generated, treat them as concept imagery and label them as such. Never
imply generated images are actual completed client projects.

Recommended image subjects: 1. Hero: warm modern kitchen or open-plan
living space. 2. About: architectural interior detail or renovation
craftsmanship. 3. Services: distinct kitchen, bathroom, whole-home,
flooring and interior images. 4. Projects: three separate concept
projects with coherent visual storytelling. 5. Process: real
team/process imagery if supplied; otherwise restrained detail
photography.

Image implementation: - Use responsive `srcset`/`sizes` where
possible. - Prefer AVIF/WebP with fallbacks. - Set explicit width and
height or aspect ratio to prevent layout shift. - Lazy-load
below-the-fold images. - Do not lazy-load the primary hero image if it
is the Largest Contentful Paint element. - Provide meaningful alt text
for informative images; empty alt for decorative imagery. - Use
object-position deliberately.

## 5.7 Iconography

Use Lucide icons sparingly. - 1.5px or 1.75px stroke. - Consistent
size. - No colourful icon tiles. - Icons must clarify actions or
concepts, not decorate empty space.

---

# 6. Motion and interaction specification

Animation should feel like subtle editorial motion, not a theme demo.
Motion must support hierarchy and feedback. It should never delay access
to content or interfere with usability.

## 6.1 Motion principles

- Short, calm, purposeful.
- Prefer opacity and small transforms.
- Avoid large parallax, spinning elements, bouncing cards or
  continuous motion.
- Do not animate every element.
- Respect `prefers-reduced-motion`.
- Avoid layout-shifting animation.
- Do not make content invisible until JavaScript runs.
- Use motion sparingly on mobile to preserve performance.

## 6.2 Global timing and easing

Suggested values: - Micro-interaction: 120--180ms. - Button hover:
160--220ms. - Dropdown/menu: 180--260ms. - Section reveal: 500--750ms. -
Image reveal: 650--900ms. - Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for
gentle ease-out. - Avoid overshoot/spring motion for premium
interactions.

## 6.3 Header

- At page top: transparent or paper-toned with clear text.
- On scroll: transition to solid ivory with subtle border and optional
  very light shadow.
- Transition duration: 180--240ms.
- Navigation hover: accent underline grows from left to right over
  180ms.
- Mobile menu: fade and translate vertically by 8--12px over 200ms.
- Close menu on Escape, outside click and link selection.
- Ensure menu focus is managed and restored to trigger when closed.

## 6.4 Hero

- Hero text: gentle fade-up (12--18px) over 650ms.
- Eyebrow appears first, then heading, then supporting copy and CTAs
  with small stagger (80--120ms).
- Hero image: subtle opacity fade or slow scale from 1.025 to 1 over
  900ms.
- Do not use dramatic zoom or scroll-jacking.
- Keep text visible if animation is disabled or JS fails.

## 6.5 Buttons

Primary button: - Background ink, text ivory. - Hover background
olive-dark or slightly lighter ink. - Arrow icon moves 3--4px to the
right on hover. - Transition 180ms. - Press state: subtle scale to
0.985. - Focus: visible 2px outline with offset. - Disabled state: lower
contrast and no hover animation.

Secondary button: - Transparent/paper background with ink border. -
Hover fills ink and changes text to ivory. - Transition 180--220ms.

Text links: - Underline or bottom border animates from 0 to full
width. - Do not rely on colour alone to communicate interactivity.

## 6.6 Scroll reveals

For major sections only: - Fade in with translateY 16--22px. - Duration
600--750ms. - Trigger once when 15--20% of the element enters
viewport. - Do not animate every paragraph separately. - If reduced
motion is enabled, show content immediately without transform.

## 6.7 Service images and project gallery

- Image hover: subtle scale to 1.02 or 1.03 over 500--700ms.
- Text remains stable.
- Optional small arrow or "Explore service" link shifts 3px.
- Avoid card flipping, tilt, cursor-following or heavy parallax.
- On touch devices, do not require hover to reveal information.

## 6.8 Process timeline

- Number or line can reveal with a restrained opacity/width
  transition.
- Do not animate the entire timeline on every scroll.
- Keep all content available without interaction.

## 6.9 FAQ accordion

- Height/opacity transition 180--240ms.
- Chevron rotates 90--180 degrees.
- Use measured height or a robust grid-row technique; avoid abrupt
  clipping.
- Respect reduced motion.

## 6.10 Form

- Field focus: border changes to olive-dark and a subtle focus ring
  appears.
- Error: immediate inline message and error border; no shaking
  animation.
- Step transition: short fade/translate (150--200ms).
- Progress indicator animates smoothly.
- Submission: show a clear loading state; prevent accidental duplicate
  submission.
- Success: restrained checkmark or confirmation panel fade-in.
- Never show success until the server confirms acceptance.

## 6.11 Footer

- No elaborate animation required.
- Link underline on hover.
- Back-to-top control may smoothly scroll to the top, but respect
  reduced motion.

---

# 7. Exact technology stack

Use the following stack unless a genuine technical blocker is
identified. Do not introduce unnecessary frameworks or libraries.

## 7.1 Frontend

---

Purpose Technology

---

UI framework React

Build tool Vite

Language TypeScript

Styling Tailwind CSS

Routing No router required for this
single-page site

Animation Framer Motion

Icons Lucide React

Forms React Hook Form

Validation Zod

Form resolver `@hookform/resolvers`

Class utility `clsx` and/or `tailwind-merge`

Accessibility primitives Native semantic HTML first; Radix
only if a complex accessible
primitive is genuinely needed

---

Do not install a large component library simply to create buttons, cards
and basic layout. Create a small bespoke component system consistent
with the brand.

## 7.2 Backend / form delivery

The landing page does not need a database or authentication.

Preferred secure submission architecture: - A serverless endpoint on
Vercel Functions or a small Node.js API. - Zod validation on the server,
independent of client validation. - An email delivery provider such as
Resend, configured server-side. - Environment variables for all
secrets. - Optional CRM integration only after client authorization and
scope approval.

Do not expose an email API key, SMTP credential or private integration
token in browser JavaScript.

The frontend must POST only to the configured same-origin endpoint, for
example `/api/contact`.

If deploying to a static host without serverless functions, use a
reputable hosted form provider with spam controls and privacy terms, or
deploy a separate secure API. Do not build a fake client-only submit.

## 7.3 Hosting and deployment

Preferred: - Vercel for frontend and serverless endpoint. - GitHub for
version control. - Environment variables managed in deployment
settings. - HTTPS enforced by hosting provider. - Preview deployments
for review. - Production deployment only after form endpoint and privacy
details are configured.

## 7.4 Suggested package dependencies

Core:

```bash
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers clsx tailwind-merge
```

Development:

```bash
npm install -D typescript eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Use the current Vite React TypeScript template and the Tailwind version
compatible with the chosen Vite setup. Check the official Tailwind
installation guide rather than mixing configuration instructions from
different major versions.

Optional: - `@vercel/analytics` only if the client chooses it and
privacy requirements are addressed. - A privacy-conscious analytics
provider such as Plausible or an appropriately configured GA4. - `sharp`
or an image CDN for asset optimization if required.

Do not install a database ORM, authentication SDK, Redux, GraphQL client
or payment package for this project.

## 7.5 Project structure

Recommended structure:

```text
hearth-haven/
├── public/
│   ├── images/
│   ├── icons/
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Eyebrow.tsx
│   │   │   └── Divider.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustStrip.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Planning.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Contact.tsx
│   │   ├── forms/
│   │   │   ├── ConsultationForm.tsx
│   │   │   ├── ProjectDetailsStep.tsx
│   │   │   ├── ContactDetailsStep.tsx
│   │   │   └── FormStatus.tsx
│   │   └── motion/
│   │       ├── Reveal.tsx
│   │       └── MotionConfig.tsx
│   ├── data/
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   ├── process.ts
│   │   └── faq.ts
│   ├── lib/
│   │   ├── analytics.ts
│   │   ├── cn.ts
│   │   └── form-schema.ts
│   ├── styles/
│   │   ├── index.css
│   │   └── tokens.css
│   └── types/
│       └── index.ts
├── api/
│   └── contact.ts
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

The exact serverless folder convention depends on the Vercel deployment
configuration. Confirm that the endpoint is actually deployed and
tested. If the project is hosted elsewhere, adapt the API location
without changing the security principles.

## 7.6 Component architecture

Build reusable components: - `Container` - `Section` - `Button` -
`Eyebrow` - `SectionHeading` - `ImageFrame` - `ServiceItem` -
`ProjectFeature` - `ProcessStep` - `FAQItem` - `FormField` -
`ConsultationForm`

Keep page content in typed data files where it improves maintainability.
Avoid building a generic page builder or overengineering this small
project.

---

# 8. Security and privacy requirements

This is a public marketing website without authentication. "Secure"
means protecting the form endpoint, user-submitted data, site integrity
and secrets---not adding login features.

## 8.1 No authentication

Do not implement: - Login or signup. - Passwords. - User profiles. -
Session management. - Admin dashboard. - Customer portal. - JWT
authentication. - Database-backed user accounts.

## 8.2 Form endpoint security

If a serverless endpoint is implemented: - Accept POST only. - Validate
request body server-side using Zod. - Enforce a reasonable request body
size limit. - Validate and normalize email and phone input. - Reject
unexpected fields. - Escape or safely render user-provided text in
emails and dashboards. - Never interpolate untrusted form content into
raw HTML without escaping. - Add rate limiting using a suitable provider
or platform mechanism. - Add bot mitigation such as a privacy-conscious
challenge or honeypot where appropriate. - Do not rely on client-side
validation for security. - Avoid exposing stack traces or internal
errors to visitors. - Use generic error messages on the client and log
diagnostic details server-side without unnecessary personal data. - Add
server-side spam controls. - Prevent duplicate submissions where
practical, for example using a short-lived idempotency token or
submission fingerprint. - Use a secure email provider API from the
server only.

## 8.3 Secrets

- Keep `.env` out of version control.
- Commit `.env.example` with variable names only.
- Never prefix server secrets with `VITE_`.
- Never put API keys in frontend source.
- Rotate credentials if they are ever committed or exposed.
- Use separate preview and production secrets.

Example `.env.example`:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

The `.example` addresses in the fictional client brief cannot receive
email. Do not claim email delivery works until a real authorized
recipient and verified sender are configured.

## 8.4 Data handling

Collect only what is necessary to respond to a renovation enquiry. - Do
not request payment card information. - Do not request government ID or
other sensitive information. - Do not transmit form values to
analytics. - Do not log full form bodies in production. - Establish a
retention policy before collecting real leads. - Restrict access to
enquiry inboxes and CRM records. - Use HTTPS. - Keep dependencies
updated.

## 8.5 Browser security headers

Configure appropriate headers through the deployment platform,
including: - `Content-Security-Policy` appropriate to actual scripts,
images, fonts and API origins. - `Strict-Transport-Security` after HTTPS
is confirmed. - `X-Content-Type-Options: nosniff`. -
`Referrer-Policy: strict-origin-when-cross-origin`. -
`Permissions-Policy` limiting unused browser capabilities. - A suitable
`frame-ancestors` CSP directive or `X-Frame-Options` where appropriate.

Do not blindly copy a CSP that breaks fonts, images, analytics or the
form endpoint. Test the final policy.

## 8.6 Legal and compliance caveat

This is a fictional US business website. Before a real launch, the
actual business must review applicable privacy, marketing,
accessibility, contractor advertising, licensing and consumer protection
requirements. Do not invent a privacy policy or legal claims. Use
reviewed, accurate legal content.

---

# 9. SEO and local discovery

## 9.1 Page metadata

Suggested title:
`Home Renovation & Remodeling in Austin, TX | Hearth & Haven`

Suggested meta description:
`Thoughtful kitchen, bathroom and home renovations in Austin, Texas. Discover a more organized renovation experience with Hearth & Haven.`

Suggested canonical URL: Set only after the production domain is known.
Do not invent a live canonical domain.

## 9.2 Semantic structure

- One clear `h1`.
- Logical `h2` section headings.
- Use semantic `header`, `nav`, `main`, `section`, `form` and
  `footer`.
- Use descriptive link text.
- Use meaningful image alt text.
- Ensure anchor targets are not hidden behind sticky navigation.

## 9.3 Local relevance

Mention Austin and nearby service areas naturally in relevant copy. Do
not stuff location keywords into every heading.

Potential search themes: - Home renovation Austin TX. - Kitchen
remodeling Austin. - Bathroom renovation Austin. - Residential
remodeling contractor Austin. - Whole-home renovation Austin.

## 9.4 Structured data

Only add `LocalBusiness` or an appropriate contractor/business schema
when actual business information is verified. For this simulation, do
not publish fabricated license, review, address, opening-hour or
geo-coordinate properties. Use no structured data or clearly marked
development-only data until real details are available.

## 9.5 Technical SEO

- Descriptive page title and meta description.
- Open Graph and social preview metadata.
- Favicon.
- XML sitemap if the deployment setup warrants it.
- Robots directives appropriate to preview versus production.
- Image filenames and alt text that describe content naturally.
- Fast, mobile-friendly page.
- Avoid duplicate headings and hidden keyword text.

---

# 10. Accessibility and responsive requirements

## 10.1 Accessibility

Target WCAG 2.2 AA practices: - Keyboard-accessible navigation and
forms. - Visible focus indicators. - Sufficient colour contrast. -
Correct labels and error associations. - Semantic buttons and links. -
Accessible mobile menu. - Accessible accordions. - Meaningful alt
text. - Reduced-motion support. - No colour-only error indication. -
Logical heading order. - Avoid auto-playing audio or video. - Ensure
controls have adequate touch target size.

## 10.2 Responsive breakpoints

Use Tailwind defaults unless the design requires adjustments: - Mobile:
below 640px. - Small tablet: 640--767px. - Tablet: 768--1023px. -
Desktop: 1024--1279px. - Wide desktop: 1280px and above.

Design mobile-first. Do not simply shrink the desktop layout.

## 10.3 Responsive checks

Test at minimum: - 360 × 800. - 390 × 844. - 768 × 1024. - 1024 × 768. -
1440 × 900. - 1920 × 1080.

Check: - No horizontal overflow. - Hero text fits. - Buttons are
tappable. - Navigation is usable. - Forms are comfortable to complete. -
Images crop appropriately. - No important content is hidden. - Sticky
elements do not obscure form controls or anchors.

---

# 11. Performance requirements

Aim for strong Core Web Vitals and a fast experience on ordinary mobile
connections.

Implementation priorities: - Use optimized AVIF/WebP assets. - Serve
responsive image sizes. - Preload only the true hero/LCP image when
appropriate. - Lazy-load below-the-fold imagery. - Avoid large video
backgrounds. - Avoid excessive animation libraries or heavy scripts. -
Use code splitting only where it provides a real benefit. - Avoid layout
shift with explicit image dimensions. - Limit font weights. - Keep DOM
structure manageable. - Test with Lighthouse and browser performance
tools.

Do not claim a specific Lighthouse score until measured on the deployed
build.

---

# 12. Content and asset inventory

## 12.1 Assets needed

---

Asset Requirement Status in simulation

---

Logo Wordmark and optional Not supplied
mark

Hero image Premium residential Concept asset needed
interior

About image Craftsmanship / Concept asset needed
interior detail

Kitchen image Kitchen renovation Concept asset needed

Bathroom image Bathroom renovation Concept asset needed

Whole-home image Residential interior Concept asset needed

Flooring image Flooring/material Concept asset needed
detail

Project gallery Three coherent concept Concept assets needed
projects

Team photo Genuine team photograph Not supplied

Testimonials Approved customer Not supplied
reviews

Legal copy Reviewed privacy/legal Not supplied
content

---

## 12.2 Asset handling

- Use consistent colour grading and image quality.
- Avoid using the same image more than once unless it is an
  intentional crop/detail.
- Do not use images with watermarks.
- Store image source/licence notes in the project README or asset
  manifest.
- Label generated images as concept imagery.
- Do not invent real project metadata.

## 12.3 Brand logo direction

Create a restrained wordmark: - "HEARTH & HAVEN" in elegant uppercase or
small-cap serif/sans pairing. - "RENOVATIONS" as a small, tracked
descriptor. - No house-roof clipart. - No generic hammer/roof icon. -
Optional abstract architectural monogram only if it is subtle and
distinctive. - Must work in dark ink and ivory reversed versions.

---

# 13. Development sequence for Antigravity

Work in controlled phases. Do not generate the entire site in one
unreviewed step.

## Phase 1 --- Project setup

1.  Inspect the existing workspace before modifying it.
2.  Initialize React + Vite + TypeScript if no app exists.
3.  Configure Tailwind using the current official setup for the
    installed version.
4.  Install only the dependencies specified in this brief.
5.  Create the folder structure.
6.  Establish global tokens and typography.
7.  Confirm development server and production build work.

Deliverable: working scaffold and design tokens.

## Phase 2 --- Static design foundation

1.  Build header and footer.
2.  Build button, container, section heading and divider components.
3.  Implement hero section.
4.  Implement responsive navigation.
5.  Confirm visual quality at desktop and mobile sizes.

Deliverable: polished top-of-page experience.

## Phase 3 --- Main page sections

1.  Trust strip.
2.  About.
3.  Services.
4.  Featured concept projects.
5.  Why us.
6.  Process.
7.  Testimonials placeholder or omitted section.
8.  Planning/budget.
9.  FAQ.
10. Contact section.

Deliverable: complete responsive landing page with all sections.

## Phase 4 --- Interactions and motion

1.  Add restrained Framer Motion reveals.
2.  Add button hover/press states.
3.  Add mobile menu interaction.
4.  Add accessible FAQ accordion.
5.  Add project gallery interactions if useful.
6.  Add reduced-motion behaviour.

Deliverable: refined interactions without sacrificing performance.

## Phase 5 --- Form and security

1.  Implement two-step form with React Hook Form and Zod.
2.  Implement client validation and error states.
3.  Implement secure server endpoint if deployment supports it.
4.  Validate request server-side.
5.  Add rate limiting and spam controls.
6.  Configure email provider only with authorized credentials.
7.  Test success and failure paths.
8.  Ensure no secrets are exposed.

Deliverable: secure and tested enquiry workflow, or clearly labelled
demo mode if no backend credentials are available.

## Phase 6 --- SEO, accessibility and optimization

1.  Add metadata and semantic structure.
2.  Optimize image assets.
3.  Audit keyboard navigation.
4.  Audit contrast and labels.
5.  Test reduced motion.
6.  Run Lighthouse.
7.  Test mobile layout and browser console.
8.  Run lint, type check and production build.

Deliverable: release candidate.

## Phase 7 --- Deployment and handover

1.  Commit project to Git.
2.  Configure Vercel or approved host.
3.  Configure environment variables.
4.  Test production form delivery.
5.  Verify HTTPS and headers.
6.  Check preview and production URLs.
7.  Write README with setup, environment variables and deployment
    instructions.
8.  Record remaining fictional content and real-client dependencies.

Deliverable: deployed portfolio project and handover notes.

---

# 14. QA and acceptance checklist

## Visual quality

- [ ] Site looks premium, architectural and distinctive.
- [ ] No generic AI template appearance.
- [ ] Typography hierarchy is clear.
- [ ] Colour palette is consistent.
- [ ] Photography is high quality and coherent.
- [ ] Spacing and alignment are consistent.
- [ ] No unnecessary gradients, glassmorphism or excessive cards.
- [ ] No fake reviews, certifications or statistics.

## Functionality

- [ ] All anchor navigation works.
- [ ] Header CTA scrolls to contact.
- [ ] Secondary CTA scrolls to projects.
- [ ] Mobile menu opens and closes.
- [ ] FAQ accordions work with keyboard and pointer.
- [ ] Form step navigation works.
- [ ] Form validation works.
- [ ] Form success only appears after server confirmation.
- [ ] Error state preserves entered data.
- [ ] Phone/email links use correct protocols when configured.

## Responsive

- [ ] 360px mobile.
- [ ] 390px mobile.
- [ ] Tablet portrait.
- [ ] Tablet landscape.
- [ ] Desktop.
- [ ] Wide desktop.
- [ ] No horizontal scrolling.
- [ ] Sticky header does not cover anchors.

## Security

- [ ] No secrets in frontend bundle.
- [ ] `.env` ignored by Git.
- [ ] Server validates submitted data.
- [ ] Request size is limited.
- [ ] Rate limiting/spam controls exist.
- [ ] No raw user content is injected into HTML.
- [ ] No sensitive form content is sent to analytics.
- [ ] HTTPS enabled in production.
- [ ] Security headers configured and tested.

## Accessibility

- [ ] Keyboard navigation works.
- [ ] Focus states visible.
- [ ] Inputs have labels.
- [ ] Errors are announced and associated with fields.
- [ ] Contrast is sufficient.
- [ ] Reduced motion respected.
- [ ] Images have suitable alt text.
- [ ] Semantic headings are in order.

## Performance and SEO

- [ ] Images optimized.
- [ ] Hero image handled appropriately for LCP.
- [ ] Below-fold images lazy-loaded.
- [ ] No major console errors.
- [ ] Page title and meta description present.
- [ ] Social preview metadata present.
- [ ] Canonical URL set only when known.
- [ ] Lighthouse audit reviewed.
- [ ] Sitemap/robots configured appropriately.

---

# 15. Explicitly out of scope

Do not build: - Authentication or user accounts. - Admin dashboard. -
Customer portal. - Online payments. - Contractor marketplace. - Project
management system. - Appointment calendar integration. - Live chat
unless separately approved. - CRM dashboard. - Database-backed project
management. - Blog/CMS unless requested as a later phase. - Multiple
marketing pages beyond this landing page. - E-commerce.

The website is a focused marketing and lead-generation landing page.

---

# 16. Final creative direction

The finished website should make a homeowner feel:

- "This company understands the importance of my home."
- "Their work looks considered and well executed."
- "I understand how they approach a renovation."
- "I know what happens if I contact them."
- "I feel comfortable starting a conversation."

The website should not feel like: - A generic contractor template. - A
SaaS startup landing page. - An AI-generated collection of gradients and
cards. - A construction directory. - A flashy animation showcase.

**Design principle:** Quiet confidence. Strong photography. Excellent
typography. Clear information. Thoughtful motion. A friction-conscious
enquiry journey.

**Engineering principle:** Simple architecture, secure form handling,
accessible interactions, fast delivery and no unnecessary backend
complexity.

**Business principle:** Every major section must either build trust,
explain value, answer an objection or help the visitor take the next
step.

---

# 17. Final instruction to Antigravity

Build the website as described, but work phase by phase and inspect the
result after each phase.

Do not sacrifice design quality for speed. Do not invent factual proof.
Do not add features outside scope. Do not mark a feature complete until
it has been tested.

When finished, provide: 1. Summary of implemented sections. 2. Final
project structure. 3. Dependencies used. 4. Setup and run instructions. 5. Environment variables required. 6. Form endpoint status and whether
real delivery is configured. 7. Security measures implemented. 8.
Accessibility and responsive checks performed. 9. Build/test results. 10. Known limitations and assets still needed.

**End of implementation specification.**
