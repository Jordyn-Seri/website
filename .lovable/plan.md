## Redesign "Healthcare from Every Angle" as a Zoom-Level Journey

Replace the generic radial node diagram with a **vertical "zoom lens" visual** — a layered depth chart that tells a story of moving from the closest, most personal level of healthcare (the patient) outward to the biggest systemic view, with side-steps for the operator and startup perspectives. This makes the spatial metaphor of "zoomed in vs. zoomed out" literal and personal.

### Concept: "The Depth of My Experience"

A vertical visual journey with 3 depth layers plus 2 lateral perspectives, arranged like a lens/telescope diagram:

```text
  ┌─────────────────────────────────────┐
  │    🔍  ZOOMED IN                    │
  │    ❤️  The Patient's World          │  ← closest to the ground
  │    🔍  The Consultant's View        │  ← clinic-level
  ├─────────────────────────────────────┤
  │    📊  SIDE VIEW                    │
  │    ⚙️  The Operator's Lens          │  ← the machinery behind it
  │    🚀  The Startup Seat             │  ← building it from scratch
  ├─────────────────────────────────────┤
  │    🌐  ZOOMED OUT                   │
  │    🔗  The Systems View             │  ← statewide / network level
  └─────────────────────────────────────┘
```

### Design

**Desktop layout**: A tall, narrow visual (centered, max-w-3xl) with three labeled "zones" stacked vertically:

1. **"Zoomed In"** zone (top) — two cards side by side: Patient's World + Consultant's View. Framed with a label like "Up close — where care happens"
2. **"Behind the Scenes"** zone (middle) — two cards: Operator's Lens + Startup Seat. Label: "The machinery — how it runs and gets built"
3. **"Zoomed Out"** zone (bottom) — one full-width card: Systems View. Label: "The big picture — networks, plans, policy"

Between zones, a vertical connecting line with a subtle gradient (primary → secondary → accent) to show the journey from micro to macro.

Each card: icon + title always visible, bullet points revealed on hover/click with framer-motion. Cards use distinct border colors per zone.

**Header copy updated**: "Healthcare from Every Angle" as heading, with subtext: "I've been the patient advocate, the operator, and the strategist. That's why I know where things break — and how to put them back together."

**Mobile**: Same vertical stack, simplified — each zone label + cards collapse naturally. Cards are accordion-style tap-to-expand.

### File Changes

`**src/components/ExperienceMapSection.tsx**` — Full rewrite:

- Restructure data into 3 zones (zoomedIn, behindTheScenes, zoomedOut)
- Each zone has a label, subtitle, and array of vantage points
- Desktop: zones stacked vertically with connecting gradient line (SVG or border-left), cards in flex rows within each zone
- Each card shows icon + title always, bullets expand on hover (desktop) / tap (mobile)
- Zone labels styled as small uppercase badges on the left margin
- Closing quote remains at the bottom

No changes needed to Index.tsx or Navbar.tsx (same component, same id).