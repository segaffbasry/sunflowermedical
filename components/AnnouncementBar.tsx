"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const announcements = [
  "We specialise in customisation and branding.",
  "Made to order in Bradford.",
  "UK delivery with our own fleet.",
];

export default function AnnouncementBar({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onVisibilityChange = () => setPageHidden(document.hidden);
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused || pageHidden) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % announcements.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [pageHidden, paused, reduceMotion]);

  return (
    <aside
      aria-label="Announcements"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
      className="relative flex h-[var(--announcement-height)] items-center overflow-hidden bg-[#ffc937] px-14 text-[#1b1b18] sm:px-16"
    >
      <div className="relative mx-auto flex h-full w-full max-w-4xl items-center justify-center text-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.p
            key={announcements[active]}
            initial={reduceMotion ? false : { y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? undefined : { y: -12, opacity: 0 }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center text-[0.6875rem] font-semibold leading-tight tracking-[-0.01em] sm:text-[0.8125rem]"
          >
            {announcements[active]}
          </motion.p>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close announcement bar"
        className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-[#1b1b18] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] focus-visible:ring-inset sm:right-3"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M1.5 1.5 10.5 10.5M10.5 1.5 1.5 10.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </aside>
  );
}
