

## Plan: Add Contact Form with Modal

### Overview
Create a contact form in a dialog/modal that opens when any "Schedule a Consult" button is clicked. The form will have Name, Email, Company Name, and Message fields, with validation and a placeholder action URL for future third-party integration.

### Architecture
- Use a shared React context to control the modal open/close state from anywhere in the app
- Use a Dialog (already available via shadcn) for the modal
- Use react-hook-form + zod for validation
- Place the modal component at the root level in Index.tsx

### New Files

**`src/contexts/ContactFormContext.tsx`**
- Create a context with `openContactForm()` function and `isOpen`/`setIsOpen` state
- Provider wraps the app in Index.tsx

**`src/components/ContactFormDialog.tsx`**
- Dialog modal containing the contact form
- Fields: Name (required), Email (required), Company Name (optional), Message (required)
- Form submits via POST to a placeholder URL (`https://formspree.io/f/YOUR_FORM_ID`)
- On success, show "Thank you! I'll be in touch soon." message inside the dialog
- Validate required fields with zod before submission
- Styled consistently with the site's dark theme and olive accent colors

### Modified Files

**`src/pages/Index.tsx`**
- Wrap content with `ContactFormProvider`
- Add `<ContactFormDialog />` component

**`src/components/Navbar.tsx`**
- Both desktop and mobile "Schedule a Consult" buttons: change from `<a href="mailto:...">` to `<button onClick={openContactForm}>`, keeping existing styling
- Close mobile menu when opening form

**`src/components/HeroSection.tsx`**
- "Schedule a Consult" button: change from `<a href="mailto:...">` to `<button onClick={openContactForm}>`, keeping existing styling and arrow icon

### Technical Details
- Placeholder action URL is a single constant at the top of ContactFormDialog for easy swapping
- Form uses `fetch()` POST with JSON body to the placeholder URL, wrapped in try/catch
- The context pattern avoids prop drilling across Navbar, Hero, and any future buttons

