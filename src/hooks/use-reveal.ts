import * as React from "react";

/**
 * Adds `.is-visible` when the element scrolls into view.
 * Pair with the `.reveal` utility in styles.css.
 */
export function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = React.useRef<T | null>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options]);
  return ref;
}
