"use client";

import { useEffect, useState, type RefObject } from "react";

/* One IntersectionObserver per reveal avoids a page-wide scroll handler for
   every card while the initial rect check still handles deep links and scroll
   restoration to content that is already above the viewport. */

export function useRevealed(
  ref: RefObject<Element | null>,
  { once = true, threshold = 0.12 }: { once?: boolean; threshold?: number } = {},
) {
  const [shown, setShown] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rect = el.getBoundingClientRect();
    const visibleNow = rect.top < window.innerHeight * (1 - threshold) && rect.bottom > 0;

    if (reduced || rect.bottom < 0 || visibleNow) {
      setInstant(reduced || rect.bottom < 0);
      setShown(true);
      if (once) return;
    }

    if (!("IntersectionObserver" in window)) {
      setInstant(true);
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) observer.disconnect();
        } else if (entry.boundingClientRect.bottom < 0) {
          setInstant(true);
          setShown(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { rootMargin: `0px 0px -${threshold * 100}% 0px` },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once, threshold]);

  return { shown, instant };
}
