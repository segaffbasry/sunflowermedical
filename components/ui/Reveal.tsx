"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useRevealed } from "./useReveal";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Standard in-view entrance. Everything on the page uses this so the
   scroll has one consistent rhythm rather than six competing ones. */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  className = "",
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { shown, instant } = useRevealed(ref, { once });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={instant ? { duration: 0 } : { duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Word-by-word entrance for section headings. */
export function RevealWords({
  text,
  className = "",
  delay = 0,
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { shown, instant } = useRevealed(ref, { once });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "105%" }}
            animate={shown ? { y: "0%" } : { y: "105%" }}
            transition={
              instant ? { duration: 0 } : { duration: 0.8, delay: delay + i * 0.045, ease: EASE }
            }
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
