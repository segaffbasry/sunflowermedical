"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    /* Anchor links should glide rather than jump. */
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const headerOffset = Number.parseFloat(
        getComputedStyle(document.documentElement).scrollPaddingTop,
      );
      lenis.scrollTo(el as HTMLElement, {
        offset: Number.isFinite(headerOffset) ? -headerOffset : 0,
      });
    };
    document.addEventListener("click", onClick);

    /* Pause the scroll rig whenever an overlay locks the body. */
    const observer = new MutationObserver(() => {
      if (document.body.dataset.locked === "true") lenis.stop();
      else lenis.start();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-locked"] });

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return null;
}
