

## Plan: Reduce Section Padding and Smooth Gradients

### Changes

**1. Reduce vertical padding on all sections** — Change `py-24 lg:py-32` to `py-16 lg:py-20` across these files:
- `src/components/WhoIHelpSection.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/ImpactSection.tsx`
- `src/components/ExperienceMapSection.tsx`
- `src/components/CredentialsSection.tsx`
- `src/components/PersonalSection.tsx`
- `src/components/TestimonialsSection.tsx`

**2. Update `src/pages/Index.tsx`** — Replace gradient dividers:
- Change all `h-16` gradient divs to `h-32` for a much longer, subtler blend between sections
- **Exception**: Remove the gradient divs immediately before and after `TestimonialsSection` — the Testimonials section will have hard edges (no gradient transition)

### Result

```
Hero
  ↓ h-32 gradient (background → card)     ← long subtle blend
WhoIHelp (bg-card)
  ↓ h-32 gradient (card → background)
Services (background)
  ↓ h-32 gradient (background → card)
Impact (bg-card)
  ↓ h-32 gradient (card → card)
ExperienceMap (bg-card)
  [no gradient — hard edge]
Testimonials (bg-secondary)               ← stark lines top & bottom
  [no gradient — hard edge]
Credentials (bg-card)
  ↓ h-32 gradient (card → background)
Personal (background)
Footer
```

Seven section files get padding reduced; one layout file gets gradient heights increased and two gradients removed.

