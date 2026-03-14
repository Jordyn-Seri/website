

## Recolor the Site to New Palette

Update all CSS custom properties in `src/index.css` and the tailwind config to reflect the new color scheme. The site currently uses a light warm theme with olive accents; this changes it to a dark blue-black base with vibrant lime/teal/cyan accents.

### Color Mapping (HSL values for CSS variables)

| Role | Hex | HSL |
|------|-----|-----|
| Background | #111827 | 220 39% 11% |
| Main Text (foreground) | #F9FAFB | 210 20% 98% |
| Primary Accent (lime) | #A3E635 | 84 78% 55% |
| Secondary Accent (teal) | #14B8A6 | 173 80% 40% |
| Actionable (cyan) | #06B6D4 | 189 94% 43% |

### Changes

**`src/index.css`** — Update `:root` variables (the site doesn't use dark mode toggle, so we set the main theme directly):

- `--background`: 220 39% 11% (deep blue-black)
- `--foreground`: 210 20% 98% (light gray)
- `--card`: 220 39% 15% (slightly lighter card bg)
- `--card-foreground`: 210 20% 98%
- `--popover`: 220 39% 15%
- `--popover-foreground`: 210 20% 98%
- `--primary`: 84 78% 55% (vibrant lime — main accent)
- `--primary-foreground`: 220 39% 11% (dark text on lime)
- `--secondary`: 173 80% 40% (muted teal)
- `--secondary-foreground`: 210 20% 98%
- `--muted`: 220 30% 20% (dark muted bg)
- `--muted-foreground`: 220 15% 65% (gray text)
- `--accent`: 189 94% 43% (electric cyan)
- `--accent-foreground`: 220 39% 11%
- `--olive` → remap to lime: 84 78% 55%
- `--olive-foreground`: 220 39% 11%
- `--border`: 220 30% 20%
- `--input`: 220 30% 20%
- `--ring`: 84 78% 55%
- Update `.dark` similarly or remove if unused

**`tailwind.config.ts`** — No structural changes needed (it already references CSS variables). The olive color alias stays mapped to `--olive`.

**Component files** — No changes needed. All components use semantic color classes (`text-primary`, `bg-secondary`, `text-olive`, etc.) which will automatically pick up new values.

