

## Move & Restyle "What I Offer" Section

### 1. Reorder in `src/pages/Index.tsx`
Move `ServicesSection` before `ImpactSection`:
Hero → Who I Help → **What I Offer** → Case Studies → Testimonials → ...

### 2. Add nav link in `src/components/Navbar.tsx`
Insert `{ label: "Services", href: "#services" }` after "Who I Help" in the `navLinks` array.

### 3. Restyle `src/components/ServicesSection.tsx` to differentiate from Who I Help
Currently both sections are near-identical 3-column card grids. Redesign Services as a **horizontal layout** — each service as a compact row with icon on the left, title and description on the right, separated by subtle dividers. No cards/borders. This creates visual contrast:

- Remove the card grid; use a single-column stacked list layout (max-w-3xl centered)
- Each service: flex row with icon circle on left, title + description text on right
- Divider lines between items
- Remove `bg-card` from the section (use default background) so it sits differently from Who I Help which uses `bg-card`
- Keep the "What I Offer" heading

This gives a clear visual distinction: Who I Help = card grid, What I Offer = clean list.

