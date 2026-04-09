## Redesign: "Healthcare from Every Angle" — Vertical Schematic

Full rewrite of `src/components/ExperienceMapSection.tsx`. Replace the diagonal SVG layout with a centered vertical "focal length" schematic on desktop, and a left-aligned vertical timeline on mobile.

### Layout

**Desktop (lg+)**: Centered vertical gradient line with 5 nodes. Text cards alternate left and right of the line in a zigzag pattern. Each node has an icon circle sitting on the line, with its text card on the opposite side connected visually by a short horizontal connector stub.

```text
   [Text Card 1]  ——○
                    |
                   ○——  [Text Card 2]
                    |
   [Text Card 3]  ——○
                    |
                   ○——  [Text Card 4]
                    |
   [Text Card 5]  ——○
```

- Container: `max-w-4xl mx-auto`, relative positioning
- Vertical gradient line: absolute, centered, full height, `bg-gradient-to-b from-primary via-secondary to-accent`
- Each node row uses flexbox: text on one side, icon circle in center on the line, empty space on other side
- Odd nodes (1,3,5): text left, icon right-of-center
- Even nodes (2,4): text right, icon left-of-center
- Short horizontal line stubs connect icon to the vertical line

**Mobile (< lg)**: Vertical timeline on the left (same as current `MobileTimeline` pattern). All text to the right.

### Content updates

Keep existing 5 nodes with same icons. Update context text per the request:

1. "Front-Line Care Navigation" — "Background in direct patient navigation for Medicaid. Navigating care in shelters and clinics in collaboration with clinicians to drive holistic outcomes."
2. "Operations & Data Management" — "My time 'under the hood' of healthcare, managing billing systems, data workflows, and daily departmental operations."
3. "The Technical-Clinical Bridge" — "Working with startups and clinics to integrate technology into existing clinical workflows."
4. "Clinical Strategy" — "My work as a consultant identifying clinic-level inefficiencies and architecting practical solutions."
5. "Statewide Systems & Network Management" — "High-level oversight in managing ACO networks and statewide Medicaid program coordination."

Update outro: "This range is why I can spot what's broken. And actually help you fix it."

### Visual details

- Gradient line: primary → secondary → accent (green → teal → blue)
- Icon circles: 56px, colored bg matching node color class
- Remove the level labels (THE PERSONAL, THE MACHINERY, etc.)
- framer-motion `whileInView` stagger animations preserved
- No expandables, all text visible

### File changes

- `**src/components/ExperienceMapSection.tsx**` — full rewrite replacing `DesktopDiagram` (SVG diagonal) with a flexbox-based centered vertical schematic + keeping mobile timeline