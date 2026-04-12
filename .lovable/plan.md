

## Plan: Slow down testimonial auto-rotation to 18 seconds

The testimonial carousel interval in `TestimonialsSection.tsx` needs to be changed from its current value to 18000ms (18 seconds).

### Change
**File: `src/components/TestimonialsSection.tsx`**
- Update the `setInterval` timer value to `18000`.

