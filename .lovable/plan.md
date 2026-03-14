

## Add "What I Offer" Services Section

**Placement**: Before "What Clients Say" (Testimonials). This is more strategic because it tells visitors *what you do* before they read social proof validating it — a classic persuade-then-confirm flow.

**New section order**: Who I Help → Case Studies → **What I Offer** → Testimonials → Credentials → Personal → Footer

### New file: `src/components/ServicesSection.tsx`

Three-column card layout (matching the style of WhoIHelpSection) with:

1. **Project Management** — Icon: `ClipboardCheck`. Description: Traditional PM support for project implementations — planning, execution, and delivery.
2. **Chief of Staff** — Icon: `UserCog`. Description: Executive assistance, strategic partnership, and cross-functional project management.
3. **Operational Support** — Icon: `Settings`. Description: Workflow optimization, process automation, and systems design for efficiency.

Each card: border, rounded-2xl, hover shadow, icon in a tinted circle, title, description. Uses `bg-card` background to match existing sections' alternating pattern (the section before it, ImpactSection, has no bg class, and TestimonialsSection after uses `bg-secondary`).

### Update: `src/pages/Index.tsx`

Import `ServicesSection` and place it between `ImpactSection` and `TestimonialsSection`.

