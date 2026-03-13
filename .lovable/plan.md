
**Background Color Changes: Primary (Teal) → Olive**

I will update all background colors using the primary teal to use the olive color instead, while keeping text colors unchanged.

**Files to Modify:**

1. **HeroSection.tsx** (3 changes):
   - Gradient end color: `to-primary/10` → `to-olive/10`
   - Right blur orb: `bg-primary/5` → `bg-olive/5`
   - Badge background: `bg-primary/10` → `bg-olive/10`

2. **PersonalSection.tsx** (1 change):
   - Gradient start color: `from-primary/20` → `from-olive/20`

3. **WhoIHelpSection.tsx** (2 changes):
   - Icon container: `bg-primary/10` → `bg-olive/10`
   - Hover border: `hover:border-primary/30` → `hover:border-olive/30`

4. **CredentialsSection.tsx** (2 changes):
   - Certification badge border: `border-primary/20` → `border-olive/20`
   - Certification badge background: `bg-primary/5` → `bg-olive/5`

**Technical Approach:**
Simple find-and-replace on background-related class names. Text colors (`text-primary`) remain unchanged to maintain readability and contrast. The olive color (`#6F7C12`) is already defined in the CSS variables as `--olive`.
