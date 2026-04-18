
## Plan: Swap Background Colors for Sections

The user wants to swap which sections use `background` (midnight black) vs `bg-card` (nighttime blue). Currently sections alternate; this flips them.

### Current vs Desired

| Section | Current BG | Desired BG |
|---|---|---|
| WhoIHelp | bg-card | background |
| Services | background | bg-card |
| Impact (Case Studies) | bg-card | background |
| ExperienceMap (Healthcare from Every Angle) | bg-card | bg-card *(already correct — "nighttime blue")* |
| Testimonials | bg-secondary | unchanged |
| Credentials | bg-card | background |
| Personal (Human Behind the Data) | background | bg-card |

Wait — re-reading: user says "healthcare from every angle should be nighttime blue" = bg-card (already is). Credentials should be midnight black = background. Personal should be nighttime blue = bg-card.

### Changes

**1. Section background swaps:**
- `WhoIHelpSection.tsx`: `bg-card` → `background` (remove bg class)
- `ServicesSection.tsx`: no bg → add `bg-card`
- `ImpactSection.tsx`: `bg-card` → remove (background)
- `CredentialsSection.tsx`: `bg-card` → remove (background)
- `PersonalSection.tsx`: no bg → add `bg-card`
- `ExperienceMapSection.tsx`: keep `bg-card`
- `TestimonialsSection.tsx`: keep `bg-secondary`

**2. Update `src/pages/Index.tsx` gradient dividers** to match new adjacency:

```
Hero (background)
  ↓ gradient (background → background) = none needed, remove
WhoIHelp (background)
  ↓ gradient (background → card)
Services (card)
  ↓ gradient (card → background)
Impact (background)
  ↓ gradient (background → card)
ExperienceMap (card)
  [hard edge]
Testimonials (secondary)
  [hard edge]
Credentials (background)
  ↓ gradient (background → card)
Personal (card)
Footer
```

Result: 7 component files touched for bg classes + `Index.tsx` gradient dividers updated to match new color adjacencies.
