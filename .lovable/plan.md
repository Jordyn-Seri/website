

## Replace Personal Photo Placeholder with User's Photo

Replace the gradient placeholder in the "Human Behind the Data" section with the user's uploaded profile photo.

### Changes

**1. Copy image to assets folder**
- Source: `user-uploads://LinkedIn_Profile_Picture_Mirror.jpeg`
- Destination: `src/assets/profile-photo.jpg`

**2. Update `src/components/PersonalSection.tsx`**
- Add import statement for the profile photo
- Replace the placeholder div (lines 17-22) with an `<img>` tag using the imported photo
- Keep the motion wrapper, aspect ratio, and rounded corners
- Keep the decorative TreePine badge (or use Mountain if already changed)

