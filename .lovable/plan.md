

## Add "Healthcare from Every Angle" Section

### Placement
Between **Who I Help** and **What I Offer** (Services). This positions the experience map early — establishing credibility before diving into services and case studies.

**New order**: Hero → Who I Help → **Healthcare from Every Angle** → What I Offer → Case Studies → Testimonials → Credentials → Personal → Footer

### Design: Radial/Honeycomb Experience Map

A visually bold **pentagon/radial layout** on desktop — five nodes arranged in a circle around a central label ("5 Vantage Points"), connected by subtle lines. Each node is an icon + title that **expands on click/hover** to reveal bullet points via an animated panel. On mobile, degrades to **stacked expandable cards**.

This is visually distinct from every other section (no cards grid, no list, no timeline).

### New file: `src/components/ExperienceMapSection.tsx`

**Data** — Five vantage points:

1. **The Consultant's View** — Icon: `Search` — "Identifying inefficiencies and their solutions for healthcare clinics"
2. **The Patient's World** — Icon: `Heart` — Two bullets: "Hands-on care navigation for Medicaid patients..." and "Coordinating with providers..."
3. **The Operator's Lens** — Icon: `BarChart3` — "Data systems, billing, and operations"
4. **The Systems View** — Icon: `Network` — Two bullets: "Health plan & statewide medicaid program network oversight" and "ACOs, MCOs, and community org coordination"
5. **The Startup Seat** — Icon: `Rocket` — Two bullets: "Connecting clinical workflows to technology" and "Building from the ground up"

**Desktop layout** (lg+):
- Section bg: `bg-card` to alternate with surrounding sections
- Intro text: "Five vantage points. One through line: making healthcare work better."
- Central area: 5 nodes positioned in a circle using absolute positioning within a relative container (~500px square)
- Each node: icon in a colored circle + label below, connected to center with subtle SVG lines
- On hover: node scales up slightly, a tooltip/panel appears with bullet points (framer-motion AnimatePresence)
- Center: a small label or decorative element
- Closing text below: "That range is why I can spot what's broken, talk to whoever's in the room, and actually fix it."

**Mobile layout** (below lg):
- Stacked cards, each with icon + title; tap to expand/collapse bullet points (accordion-style with framer-motion)

**Styling**: Uses `primary` (lime) for active/hovered nodes, `secondary` (teal) and `accent` (cyan) for variety across nodes, `border` for connection lines.

### Update: `src/pages/Index.tsx`
Import and place `ExperienceMapSection` between `WhoIHelpSection` and `ServicesSection`.

### Update: `src/components/Navbar.tsx`
Add `{ label: "Experience", href: "#experience" }` after "Who I Help" in navLinks.

