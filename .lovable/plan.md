
The autoplay timer in `TestimonialsSection.tsx` uses `setInterval` with 18000ms, which should rotate every 18s regardless of which card is shown. However, the timer only resets on mount — so when the user manually clicks prev/next/dots, the interval keeps its original tick schedule, which can make the next auto-advance feel short.

But the more likely cause: the interval is set once and never resets when `current` changes. Since `setInterval` fires every 18s from mount, each card *should* get exactly 18s. Unless the component re-renders or the interval drifts, all cards get equal time.

The real fix to guarantee equal display time per card (and reset the timer after manual navigation): make the interval depend on `current` so it resets every time the slide changes.

### Change

In `src/components/TestimonialsSection.tsx`, update the autoplay `useEffect` to:
- Add `current` to the dependency array so the 18s timer restarts whenever the slide changes (whether via auto-advance or manual click).
- This guarantees every card — including the 3rd — gets a full 18 seconds on screen.

No other files affected.
