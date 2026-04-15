

## Plan: Re-order Sections and Smooth Background Transitions

### New Section Order and Background Analysis

| # | Section | Current BG | Adjacent transition needed |
|---|---------|-----------|--------------------------|
| 1 | Hero | gradient/background | → bg-card |
| 2 | Who I Help | bg-card | → bg-card (same) |
| 3 | Credentials | bg-card | → background |
| 4 | Services | background | → bg-card |
| 5 | Experience Map | bg-card | → background |
| 6 | Impact (Case Studies) | background | → bg-secondary |
| 7 | Testimonials | bg-secondary | → background |
| 8 | Personal (About Me) | background | → footer |

### Changes

**1. `src/pages/Index.tsx`** — Reorder components and add gradient transition dividers between sections where background colors change:

```
Hero
  ↓ gradient div (background → card)
WhoIHelp
Credentials  ← both bg-card, no divider needed
  ↓ gradient div (card → background)
Services
  ↓ gradient div (background → card)
ExperienceMap
  ↓ gradient div (card → background)
Impact
  ↓ gradient div (background → secondary)
Testimonials
  ↓ gradient div (secondary → background)
Personal
Footer
```

Each gradient div is a simple `<div className="h-12 bg-gradient-to-b from-[hsl(var(--X))] to-[hsl(var(--Y))]" />` element using the theme's CSS variables.

**2. Update memory** for the new section order.

