

## Redesign: Diagonal Ascending Schematic Layout

Replace the current vertical zone/card layout with an **ascending diagonal schematic** matching the reference image — 5 nodes rising from bottom-left to top-right, connected by colored gradient lines, with all text visible (no expandables).

### Layout

**Desktop (lg+)**: An SVG-based diagonal diagram inside a wide container (max-w-5xl). Five icon circles are positioned along an ascending diagonal path from bottom-left to top-right. Colored line segments connect each pair of adjacent nodes. Text labels (level tag, title, context) are positioned near each node — alternating above/below or left/right of the path for readability.

```text
                                          ○ Node 5 (top-right)
                                        /
                                    ○ Node 4
                                  /
                              ○ Node 3
                            /
                        ○ Node 2
                      /
                  ○ Node 1 (bottom-left)
```

**Mobile (below lg)**: Falls back to a vertical timeline — gradient line on the left, cards stacked vertically. All text visible, no interaction needed.

### Data (5 nodes, micro → macro)

1. **Front-Line Care Navigation** — `Search` icon — "My background in direct patient navigation for Medicaid. Navigating care in shelters and clinics in collaboration with clinicians to drive holistic outcomes."
2. **Operations & Data** — `Building2` icon — "My time 'under the hood' of healthcare. Managing billing systems, data workflows, and daily clinical operations."
3. **The Tech-Clinical Bridge** — `Cable` icon — "Working with startups and clinics to integrate technology into existing clinical workflows. Building solutions from the ground up."
4. **Clinical Strategy** — `Crosshair` icon — "My work as a consultant. Identifying clinic-level inefficiencies and architecting practical solutions."
5. **Statewide Systems & Networks** — `Globe` icon — "High-level oversight. Managing MCO/ACO networks and statewide Medicaid program coordination."

Each node also gets a level label (e.g., "Level 1: The Personal (Zoomed In)") displayed as a small tag above the title.

### Visual Details

- **Connector lines**: SVG `<line>` elements between node positions, each segment a different color from the gradient (primary → teal → secondary → blue → accent)
- **Icon circles**: 48px circles with colored backgrounds, icon inside, positioned absolutely on the SVG canvas
- **Text cards**: Positioned near each node with title, level label, and context paragraph — no borders, just text with subtle opacity animation
- **No expandables**: All text always visible
- **framer-motion**: Each node group fades/slides in with staggered delay via `whileInView`

### Copy

- **Heading**: "Healthcare from Every Angle"
- **Intro**: "I've been the patient advocate, the operator, and the strategist. That's why I know where things break — and how to put them back together."
- **Outro**: "This range is why I can spot what's broken, talk to whoever's in the room, and actually fix it."

### File Changes

**`src/components/ExperienceMapSection.tsx`** — Full rewrite:
- Remove zones/expandable card architecture
- Define 5 node objects with icon, title, levelLabel, context
- Desktop: Use a relative-positioned container with absolutely-positioned node groups along a diagonal. SVG overlay for connector lines between nodes
- Mobile: Vertical timeline fallback with left-side gradient line
- All text visible, no useState/AnimatePresence needed
- Icons from lucide-react: `Search`, `Building2`, `Cable`, `Crosshair`, `Globe`

