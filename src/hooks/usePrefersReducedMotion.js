import { useEffect, useState } from "react";

/**
 * Tracks the user's OS-level `prefers-reduced-motion` setting.
 * Components can use this to skip JS-driven animation entirely,
 * on top of the CSS-level handling in index.css.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (event) => setReduced(event.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return reduced;
}
