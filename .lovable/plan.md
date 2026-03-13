

## Add Hobby Icons (Single Row)

Update the PersonalSection to display 6 hobby icons on one row by:
1. Adding new Lucide icons: `Headphones` (Podcasts), `Scissors` (Sewing), `Bird` (Birding), `BookOpen` (Learning)
2. Removing the `TreePine` (Outdoors) icon
3. Keeping the flex row layout but adjusting gap/spacing to fit 6 items comfortably

### Changes to `src/components/PersonalSection.tsx`

**Line 2**: Update imports to include new icons and remove `TreePine`
```typescript
import { Mountain, Bike, Headphones, Scissors, Bird, BookOpen } from "lucide-react";
```

**Lines 54-58**: Replace the items array with 6 hobbies (removing Outdoors)
```typescript
{[
  { icon: Mountain, label: "Rock Climbing" },
  { icon: Bike, label: "Mountain Biking" },
  { icon: Headphones, label: "Podcasts" },
  { icon: Scissors, label: "Sewing" },
  { icon: Bird, label: "Birding" },
  { icon: BookOpen, label: "Learning" },
]}
```

**Line 53**: Adjust the flex container gap to fit 6 items (e.g., `gap-4` or `gap-5`)

Note: If `Bird` icon is not available in lucide-react, will use `Feather` as fallback.

