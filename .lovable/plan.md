

## Restructure Credentials Section Layout

### Changes

**Copy PMI logo to `src/assets/`**:
- `user-uploads://image-5.png` → `src/assets/pmi.png`

**Update `src/components/CredentialsSection.tsx`**:

1. **Add PMI to memberships array** with name "Project Management Institute" and the new logo

2. **Restructure the two-column layout**:
   - **Left column**: Certifications + Memberships (5 orgs now)
   - **Right column**: Featured Video + Core Skills (moved from left)

3. **Fix logo styling**: Use `object-contain` instead of `object-cover`, and `rounded-lg` instead of `rounded-full` so logos display fully without cropping

This balances the columns and keeps related credential items (certs + memberships) together on the left, with the video and skills on the right.

