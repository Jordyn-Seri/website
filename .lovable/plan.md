

## Reorder "Who I Help" Cards

Reorder the `cards` array in `src/components/WhoIHelpSection.tsx` so the display order becomes:
1. **Startups** (left) - currently 3rd
2. **Clinics** (middle) - currently 2nd
3. **Health Systems** (right) - currently 1st

**Change required:**
Replace lines 4-22 in `WhoIHelpSection.tsx`:
- Move the `Rocket/Startups` object to first position
- Keep `Stethoscope/Clinics` in second position
- Move `Building2/Health Systems` to third position

