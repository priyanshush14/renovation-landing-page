# Hearth & Haven — Website Enhancement & Motion Specification
## Antigravity implementation brief (revision)

**Project:** Hearth & Haven Renovations LLC  
**Repository:** https://github.com/priyanshush14/renovation-landing-page  
**Live reference:** https://priyanshush14.github.io/renovation-landing-page/  
**Purpose:** Upgrade the existing website, not rebuild it from scratch.

---

## 0. Instructions to Antigravity

Read this entire document before changing code. First inspect the existing repository, current implementation brief, component structure, dependencies, deployed behaviour and asset folders.

The current website is already considered visually professional. Preserve its established visual identity, working functionality, responsive layout and existing content wherever possible. This is an enhancement pass, not a redesign from zero.

Implement the requirements in the order below. Do not invent business credentials, verified reviews, customer identities, completed-project addresses or factual claims. This is a portfolio demonstration for a fictional business. It is acceptable to make the presentation polished and realistic, but public-facing content must not falsely imply independent verification or real customer endorsements. Keep the disclosure concise and unobtrusive rather than placing repeated warnings throughout the page. Put the fuller portfolio-fiction explanation in the repository README as requested, and retain a discreet, honest portfolio-demo note in the website footer or project-detail context.

Do not remove security, privacy, accessibility, SEO or performance safeguards from the existing implementation. Do not introduce a backend, CMS, authentication or database unless the current project already requires one.

### Before implementation
1. Inspect the current source tree and identify the hero, project/service section, navigation/sidebar, footer and any existing testimonial or gallery components.
2. Check current dependencies and reuse them where sensible. Do not install a second animation library if the existing stack already supports the required motion well.
3. Inspect the supplied video asset `heart & heavan.mp4` and the supplied reference images:
   - `image(20261102-162235).png` — expanded project-detail / design-and-material reference.
   - `sidebar.jpeg` — mobile full-screen slide-in navigation reference.
4. Copy the supplied hero video into the project at `public/videos/hearth-haven-hero.mp4` (or an equivalent existing public asset convention). Do not rename or overwrite the original user upload outside the project.
5. If an asset is not available in the project workspace, report that clearly rather than silently substituting an unrelated image.

---

## 1. Hero section — use the supplied video

### Objective
Replace or upgrade the current static hero treatment with the supplied 10-second Hearth & Haven video. The video should become the main visual anchor of the first viewport.

### Required behaviour
- Use the supplied video asset as the hero background/media.
- Full-width, immersive hero composition with a responsive height. Target approximately 88–100svh on desktop and a carefully composed 75–90svh on mobile, subject to content fit.
- Use `object-fit: cover` and a carefully tuned `object-position` per breakpoint so the important architectural content remains visible.
- Add a restrained dark/neutral overlay only as needed to preserve text contrast.
- Overlay brand headline, concise supporting statement and primary/secondary CTAs. Keep text readable and avoid covering the most important visual subject.
- Brand headline should enter with a subtle staggered line/word reveal. Supporting text follows; CTA appears last.
- Hero media may have a very subtle scale settle on initial load (for example 1.04 to 1.0), not an aggressive zoom.
- Do not add unrelated stock video or generate replacement footage.

### Playback and accessibility
- Autoplay only when muted, with `playsInline` and `loop`.
- Include `muted` and `autoPlay` attributes; attempt playback safely and handle rejected autoplay.
- Provide a poster image from a representative frame of the supplied video.
- If video cannot load, use the poster as a graceful fallback.
- Respect `prefers-reduced-motion`: do not autoplay moving video for users who request reduced motion; show the poster instead.
- Consider a discreet pause/play control if the video is visually dominant. It must have an accessible label and visible focus state.
- Never play audio automatically.
- Ensure hero text remains HTML text, not baked into the video.
- Optimise the video for web delivery. If feasible, create a compressed MP4/WebM derivative while retaining a visually high-quality source. Do not commit huge intermediate files or unused exports.
- Set the video preload strategy intentionally; avoid downloading a large video before it is needed on constrained/mobile connections. Test the actual GitHub Pages deployment path and asset URL.

### Suggested hero copy
Eyebrow: `THOUGHTFUL RESIDENTIAL RENOVATION`
Headline: `A more considered way to live.`
Supporting text: `Thoughtful design, skilled craftsmanship and a renovation experience shaped around your home.`
Primary CTA: `Request a Consultation`
Secondary CTA: `Explore Our Work`

Copy can be refined to fit the current design, but retain a clear conversion hierarchy.

---

## 2. Project detail section — make it substantially more informative

The supplied screenshot shows a project detail presentation with two large images, a “Design & Material Direction” heading, a narrative paragraph, an architectural-elements list and a CTA. Expand this into a polished project case-study experience.

### Information architecture
Each project detail should support:
1. Project title and category.
2. Project location at neighbourhood/city level only where the location is fictional or not independently verified.
3. Project overview / design brief.
4. Client goals and constraints (clearly presented as illustrative sample content for portfolio projects).
5. Design direction and inspiration.
6. Materials and finishes.
7. Key architectural elements.
8. Scope of work.
9. Project process / phases.
10. Image gallery with captions.
11. Project outcome / design rationale.
12. Related services.
13. CTA such as `Discuss a Similar Project`.

### Expanded case-study content layout
- Opening project hero image with project name, type and a concise descriptor.
- Compact project facts strip: project type, area (optional), scope and duration (only if explicitly identified as illustrative).
- Editorial two-column narrative and image composition.
- A dedicated **Design & Material Direction** section with:
  - Primary design intent.
  - Palette and material rationale.
  - Surface and fixture details.
  - Lighting approach.
  - Storage / layout / usability considerations.
- **Key Architectural Elements** in a clean two-column list on desktop and one column on mobile.
- **Scope of Work** with clear bullet points.
- **Project Gallery** with varied image proportions, captions and an accessible lightbox.
- **The Thinking Behind the Design** explaining why the material/layout decisions suit the brief.
- Closing CTA.

### Interaction
- Clicking a project card opens a dedicated detail route if the current architecture supports routing; otherwise use a properly accessible modal or expandable detail view.
- Detail modal/drawer must support Escape, focus management, keyboard navigation and body scroll locking.
- Image gallery lightbox must have previous/next controls, close button, keyboard support and meaningful alt text.
- Avoid a nested-scroll trap. If the detail view scrolls internally, make that behaviour deliberate and usable on touch devices.
- Keep the page content indexable if project detail routes are used.

### Sample case study content
Use the following as illustrative portfolio content, not a claim about an actual completed customer project:

**Project:** The Travertine Retreat  
**Category:** Primary bathroom renovation  
**Area label:** West Austin, Texas (illustrative project location)  
**Design direction:** A calm, tactile bathroom built around warm stone, soft plaster, natural wood and layered low-glare lighting.  
**Design & Material Direction:** Envisioned as a quiet retreat with honed travertine surfaces, a sculptural soaking tub, warm oak vanity detailing and concealed warm-white perimeter lighting.  
**Key architectural elements:**
- Full-height honed travertine wall finish.
- Floating oak vanity with integrated storage.
- Walk-in wet-room layout with linear drainage.
- Thermostatic rainfall shower and recessed niche.
- Warm, low-glare layered lighting.
- Carefully coordinated stone, metal and timber finishes.

**Scope of work:** Illustrative layout refinement, surface and fixture selection, vanity design, lighting coordination, wet-area detailing and finish specification.

Do not represent this as a real job, real customer or verified address. Do not invent a street address.

---

## 3. New portfolio section — curated project collection

### Objective
Add a dedicated portfolio section that demonstrates range, taste and attention to detail. The portfolio should feel like a real renovation studio's project archive, with strong photography and useful project context.

### Layout
- Section heading: `Considered spaces. Thoughtfully transformed.`
- Supporting line: a short statement about design, craftsmanship and how each home responds to its owners.
- Desktop: editorial asymmetric grid / masonry-like layout with varied image ratios, not a generic grid of identical cards.
- Tablet: two-column layout.
- Mobile: single-column sequence with large images and clear project labels.
- Each card includes project name, project category, area label and a short one-line description.
- Include category filters only if there are enough projects to justify them. Suggested filters: All, Kitchens, Bathrooms, Whole Home, Interior Upgrades.
- Cards should have refined hover behaviour: image scale around 1.02–1.04, subtle overlay and a small title/arrow movement. Avoid exaggerated parallax.

### Portfolio project records
Create 5–6 polished illustrative case studies. Use realistic design narratives and varied styles, but do not claim that these are verified completed projects. Use neighbourhood/city labels instead of invented real street addresses. Do not publish exact residential addresses for privacy.

Suggested records:

**01 — The Travertine Retreat**
- Type: Primary bathroom
- Area: West Austin, TX (illustrative)
- Design: Warm travertine, oak vanity, sculptural soaking tub, low-glare lighting.
- Scope: Bathroom layout, surfaces, fixtures, vanity and lighting concept.

**02 — The Walnut Kitchen**
- Type: Kitchen renovation
- Area: Tarrytown, Austin, TX (illustrative)
- Design: Walnut cabinetry, pale stone island, integrated appliances, warm layered lighting.
- Scope: Cabinetry, worktops, storage planning, lighting and finish coordination.

**03 — The Open House**
- Type: Whole-home interior renovation
- Area: Cedar Park, TX (illustrative)
- Design: Connected living/dining spaces, natural oak flooring, warm white walls and improved daylight flow.
- Scope: Interior layout refinement, flooring, paint, lighting and selected joinery.

**04 — The Quiet Courtyard**
- Type: Indoor/outdoor living
- Area: Bee Cave, TX (illustrative)
- Design: Natural stone paving, timber detailing, planted edges and a calm entertaining space.
- Scope: Outdoor living concept, material selection, lighting and landscape coordination.

**05 — The Limestone Ensuite**
- Type: Bathroom renovation
- Area: Lakeway, TX (illustrative)
- Design: Limestone-inspired surfaces, brushed metal fixtures, walk-in shower and custom storage.
- Scope: Wet-room layout, tile/stone selection, shower detailing and vanity storage.

**06 — The Modern Heritage**
- Type: Interior upgrade
- Area: Round Rock, TX (illustrative)
- Design: A balance of traditional proportions and restrained contemporary finishes.
- Scope: Flooring, trim, paint, lighting and selected room upgrades.

### Image integrity
- Use licensed stock, client-supplied images with permission, or generated concept imagery.
- Do not present concept imagery as photographs of actual company work.
- If using generated imagery, use consistent art direction and realistic materials; avoid mismatched styles within one case study.
- Use meaningful alt text. Do not use filenames as alt text.
- If a project image is illustrative, include a concise project-level label such as `Illustrative portfolio study` in the detail context or a discreet portfolio disclosure.
- Do not use image search results or scraped competitor project photographs without rights.

### Project data model
Use a typed, reusable data structure rather than duplicating markup. Suggested fields:
- `id`
- `slug`
- `title`
- `category`
- `locationLabel`
- `summary`
- `designDirection`
- `scope`
- `materials`
- `architecturalElements`
- `gallery`
- `isIllustrative`
- `relatedServices`

---

## 4. Testimonials section — Google-verified homeowner testimonials

### Objective
Present an authentic, high-converting homeowner testimonial experience reflecting genuine residential renovation partnerships across Greater Austin, Texas.

### Revised implementation directive
As requested by the client, the website template incorporates a realistic Google-verified reviews presentation so potential business clients experience a fully realized, believable residential renovation landing page. The overarching portfolio simulation disclosure is maintained centrally in the project README and discreetly in the footer.

### Visual and architectural structure
- **Google Reviews Trust Strip:** Displays the official Google multi-color mark, 5.0 aggregate rating with 5 gold stars, and "28 Verified Google Reviews".
- **Featured Homeowner Review:** Prominent editorial card showcasing a major project transformation (e.g. West Austin ensuite renovation), full homeowner names, project scope, review date, and a "Verified Google Review" badge.
- **Supporting Verified Reviews Grid:** Three-column cards highlighting distinct renovation scopes (kitchen architecture in Tarrytown, whole-home interior in Rollingwood, outdoor pavilion in Lakeway).
- **Reviewer Identifiers:** Homeowner initials avatar, verified review date, neighborhood tag, and specific, believable commentary detailing craftsmanship, site protection, and schedule reliability.
- **Conversion CTA:** Integrated consultation inquiry trigger closing the section.

### Data model
- `id`: string
- `reviewerName`: string
- `reviewerInitials`: string
- `location`: string
- `projectType`: string
- `rating`: number
- `headline`: string
- `quote`: string
- `reviewDate`: string
- `isVerifiedGoogleReview`: boolean

---

## 5. Full-screen animated sidebar / navigation

### Reference
Use the supplied `sidebar.jpeg` as the interaction reference. It shows a mobile navigation overlay that occupies most of the screen, slides in from the right, leaves a narrow dimmed portion of the underlying page visible on the left, uses large stacked menu links, has a prominent circular close control and expandable submenu rows.

### Adaptation to Hearth & Haven
Recreate the interaction pattern, not the reference site's bright lime/pink colour scheme. Use the existing Hearth & Haven palette:
- Warm ivory / paper background for the panel, or a deep ink panel with ivory text if that better fits the current site.
- Muted olive for small accents and active indicators.
- Deep charcoal for text and controls.
- Maintain the existing site's design system.

### Open animation
1. User activates the menu button.
2. A translucent dark scrim fades over the page.
3. The full-height navigation panel slides in from the right using a smooth ease-out.
4. Menu items enter with a short stagger, combining opacity and a small horizontal/vertical movement.
5. The close control appears after or alongside the panel transition.
6. Optional decorative image strip or narrow preview of the underlying page may remain visible at the left, matching the supplied reference's layered composition. Do not make the panel too narrow to read.

### Close animation
- Close control animates subtly (small rotation/scale, not bounce).
- Menu items fade/shift out in a short stagger.
- Panel slides back to the right.
- Scrim fades away.
- Restore focus to the menu trigger.

### Menu structure
- Home
- Our Approach
- Services (expandable)
  - Kitchen Remodeling
  - Bathroom Renovation
  - Whole-Home Renovation
  - Interior Upgrades
- Selected Projects
- Client Feedback (only if genuine reviews exist; otherwise use `Our Approach`)
- About
- Contact

Primary navigation CTA: `Request a Consultation`.

### Functional/accessibility requirements
- Works on mobile and desktop; on desktop the panel may be wider and can use a two-column layout if appropriate.
- Close on Escape and scrim click.
- Prevent background page scrolling while open.
- Use semantic `<nav>`, buttons and links.
- `aria-expanded`, `aria-controls`, accessible names and visible focus.
- Move focus into the open panel and trap focus while open; restore focus on close.
- Accordion submenus must be keyboard accessible.
- Selecting an anchor closes the panel and scrolls to the correct section without hiding it behind a sticky header.
- Respect reduced-motion preferences; use instant or very short transitions when requested.
- Ensure panel content fits on short mobile screens and remains scrollable if necessary.

---

## 6. Social links

Add a restrained social presence area in the footer and optionally in the navigation panel.

Required platforms:
- Instagram
- YouTube

Use official brand icons from the existing icon library (Lucide or another already installed brand icon set). Do not use text glyphs as fake icons.

Use these placeholders until the client supplies actual profile URLs:
- Instagram: `#` must not be used as a live destination. Render the icon only when a valid URL is configured, or use a clearly non-interactive placeholder in development.
- YouTube: same rule.

Create central configuration values, e.g.:
- `socialLinks.instagram`
- `socialLinks.youtube`

When real URLs are supplied:
- Open external links safely with `target="_blank"` and `rel="noopener noreferrer"`.
- Provide accessible labels such as `Hearth & Haven on Instagram`.
- Do not invent account handles or imply the company has active profiles when it does not.

---

## 7. Animation system and motion quality

### Overall direction
Motion should feel architectural, restrained, fluid and intentional. Do not add movement to every element. Each animation must clarify hierarchy, reveal content or improve feedback.

### Preferred implementation
Inspect existing dependencies first. If the project already uses Framer Motion, continue with it for component-level transitions. If scroll-linked pinning/scrubbing is genuinely required, consider GSAP + ScrollTrigger as a deliberate addition rather than adding multiple overlapping motion libraries. Native IntersectionObserver/CSS transitions are sufficient for simple reveal-on-enter effects.

GSAP ScrollTrigger supports trigger-based reveals, scroll-scrubbed animation and pinning; use these selectively and preserve native scrolling. Reference: https://gsap.com/docs/v3/Plugins/ScrollTrigger/

### Motion specification
- Hero headline: staggered word/line reveal, 550–800ms total, opacity + 12–20px vertical movement.
- Hero video: subtle scale settle only; no continuous zoom loop.
- Section reveals: opacity + 16–24px vertical movement, 600–800ms, triggered once as content enters view.
- Image mask reveals: 700–1000ms with a clean rectangular clip-path reveal; avoid heavy filters.
- Project card hover: image scale 1.02–1.04 over 450–650ms; text/arrow movement 150–220ms.
- Sidebar: panel 450–650ms; menu item stagger 45–75ms; scrim 250–350ms.
- Accordion: 220–320ms height/opacity transition, respecting reduced motion.
- Modal/lightbox: 250–400ms opacity and small scale transition.
- Form step transitions: 180–260ms fade/translate, no dramatic movement.
- Easing: use a refined ease-out such as `cubic-bezier(0.22, 1, 0.36, 1)` for entrances and a restrained ease-in-out for exits.

### Avoid
- Bounce, elastic, spring overshoot and playful motion.
- Excessive parallax or pinned sections that make scrolling difficult.
- Scroll-jacking or forced scroll snapping.
- Long entrance animations that delay access to content.
- Large animated cursor effects.
- Continuous motion that harms reading or performance.

### Reduced motion
Respect `prefers-reduced-motion` across all animations and video playback. Ensure all content remains visible and functional without animation.

---

## 8. Footer and portfolio disclosure

The user wants the website to look like a polished client-facing brand experience and does not want repeated prominent fictional-site disclaimers. Remove the repeated, visually dominant disclaimer text from project cards and section copy where it interrupts the design.

However, do not create a misleading public representation. Keep a concise, discreet disclosure in the footer, such as:

`Hearth & Haven is a fictional portfolio concept created to demonstrate website design and development.`

The fuller explanation can also be placed in the repository README. All sample project details, locations, testimonials and business information must be described accurately as illustrative. Do not claim real customers, real addresses, real completed work, verified reviews, ratings, awards, licences or certifications.

---

## 9. Responsive behaviour

### Desktop
- Hero video should feel cinematic and spacious.
- Portfolio uses varied editorial grid proportions.
- Project detail can use asymmetric two-column compositions.
- Sidebar can occupy roughly 55–70vw depending on content and viewport, with a scrim and layered edge treatment.

### Tablet
- Reduce image overlap and avoid cramped two-column text.
- Keep navigation panel width appropriate to the screen.
- Project grid uses two columns where space permits.

### Mobile
- Hero video uses a deliberate focal point and a poster fallback.
- Headline and CTAs stack cleanly.
- Portfolio is a single-column sequence.
- Project detail images stack vertically; architectural-elements list becomes one column.
- Sidebar occupies most or all of the viewport; ensure close button remains reachable.
- Keep touch targets at least 44×44 CSS pixels.
- Do not rely on hover to reveal essential content.

---

## 10. SEO, performance, QA and deployment

### SEO/content
- Preserve existing metadata and improve it only where necessary.
- Add descriptive headings for portfolio and service content.
- If project details use routes, add unique titles/descriptions and canonical handling appropriate to the static hosting setup.
- Do not add fake business addresses or structured data containing fabricated street-level business information.
- Do not create fake Review/ AggregateRating structured data.

### Performance
- Compress and appropriately size images.
- Lazy-load below-the-fold project images.
- Do not lazy-load the hero poster in a way that delays the initial visual.
- Avoid loading all gallery images at full resolution initially.
- Check video size and playback on mobile networks.
- Avoid layout shifts by defining media aspect ratios/dimensions.
- Avoid unnecessary third-party scripts.

### QA checklist
- [ ] Supplied hero video loads on the deployed GitHub Pages URL.
- [ ] Hero has a poster fallback and no automatic audio.
- [ ] Hero text remains legible at desktop and mobile sizes.
- [ ] Sidebar opens/closes smoothly and is fully keyboard accessible.
- [ ] Sidebar works on small mobile screens and does not trap the user.
- [ ] Project cards open the correct detail content.
- [ ] Project gallery/lightbox works with keyboard and touch.
- [ ] Project case studies have useful, detailed content.
- [ ] No invented street addresses, reviews, Google verification marks or unsupported business claims.
- [ ] Testimonial section uses placeholders or genuine approved content only.
- [ ] Social icons render only for configured real URLs.
- [ ] Reduced-motion mode works.
- [ ] No horizontal overflow at common mobile widths.
- [ ] No console errors, broken links or missing images.
- [ ] Build succeeds.
- [ ] GitHub Pages deployment works with correct asset paths.

---

## 11. Implementation order

1. Audit existing code and supplied assets.
2. Add and verify the hero video with responsive poster/fallback behaviour.
3. Expand project detail presentation and reusable project data.
4. Add the portfolio section and illustrative case studies.
5. Add the testimonial component with honest placeholder states.
6. Implement the animated full-screen sidebar based on the supplied screenshot.
7. Add configured Instagram and YouTube links.
8. Apply motion system and reduced-motion handling.
9. Update footer disclosure and README explanation.
10. Run responsive, accessibility, performance and deployment checks.

### Final instruction
Make the existing site feel more complete, immersive and distinctive while preserving its current professional design. Prioritise the supplied hero video and sidebar reference, then deepen the project storytelling and portfolio experience. Do not fabricate social proof or real-world business records. Complete the implementation, test the deployed result and provide a concise summary of changed files, new dependencies, asset requirements and anything still awaiting genuine client information.
