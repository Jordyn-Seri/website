

## Add Memberships to Credentials Section

### Changes

**Copy 4 uploaded logos to `src/assets/`**:
- `user-uploads://image.png` → `src/assets/women-applying-ai.png`
- `user-uploads://image-2.png` → `src/assets/health-tech-nerds.png`
- `user-uploads://image-3.png` → `src/assets/whcm.png`
- `user-uploads://image-4.png` → `src/assets/hba.png`

**Update `src/components/CredentialsSection.tsx`**:
- Import all 4 logo images
- Add a "Memberships" subsection below "Core Skills" in the left column
- Display as a list of items, each with the org logo (small, ~32px) and name side by side
- Style similarly to the certifications pills: `flex items-center gap-3`, with logos in small rounded containers and org names as text
- Use `rounded-full overflow-hidden` on logo containers for consistent presentation

