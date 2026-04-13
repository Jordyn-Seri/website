

## Plan: Smooth Background Transitions Between Sections

### Problem
Sections jump between `background`, `bg-card`, and `bg-secondary` with hard edges, creating a jarring visual effect.

### Approach
Add gradient dividers between sections that transition from one background color to the next. This will be done by adding `::before` or `::after` pseudo-element gradients at the top/bottom of sections where the background changes, using a thin gradient overlay.

### Changes

**1. Add a reusable CSS utility for section gradient transitions** (`src/index.css`)
- Add gradient fade classes that blend from one bg to the next (e.g., `background → card`, `card → secondary`, etc.)

**2. Update each section with transition backgrounds:**

| Section | Current BG | New approach |
|---------|-----------|-------------|
| Services | none | Keep as-is (matches hero's bg) |
| Impact | none | Add bottom gradient fading into card color |
| WhoIHelp | bg-card | Keep bg-card, top gradient from background |
| Testimonials | bg-secondary | Top gradient from card, bottom gradient to card |
| ExperienceMap | bg-card | Keep bg-card |
| Credentials | bg-card | Bottom gradient fading to background |
| Personal | none | Top gradient from card |

Each transition will be a small `div` with a `bg-gradient-to-b` between the relevant color stops, inserted between sections in `Index.tsx`, or applied as top/bottom padding gradients within each section.

### Implementation
- Add ~5 gradient transition divs (simple `<div>` elements, ~32-48px tall) between sections in `Index.tsx` where background color changes
- Each div uses `bg-gradient-to-b from-[color1] to-[color2]` with the theme's HSL variables

