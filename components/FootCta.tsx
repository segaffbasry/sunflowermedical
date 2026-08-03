"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Reveal from "./ui/Reveal";
import { useRevealed } from "./ui/useReveal";
import Button from "./ui/Button";
import { Mark } from "./Logo";
import { footCta } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FootCta() {
  const panelRef = useRef<HTMLDivElement>(null);
  const { shown, instant } = useRevealed(panelRef);

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="shell">
        <div
          ref={panelRef}
          className="relative overflow-hidden rounded-[32px] bg-[#1b1b18] px-7 py-16 sm:px-14 sm:py-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
            animate={
              shown ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.7, rotate: -12 }
            }
            transition={instant ? { duration: 0 } : { duration: 1, ease: EASE }}
            className="mb-10"
          >
            <Mark className="h-10 w-auto" />
          </motion.div>

          <h2 className="display display-lg relative max-w-2xl text-[#fdfdf7]">
            {footCta.heading.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: "108%" }}
                  animate={shown ? { y: "0%" } : { y: "108%" }}
                  transition={
                    instant ? { duration: 0 } : { duration: 1, delay: 0.12 + i * 0.1, ease: EASE }
                  }
                >
                  {i === 1 ? <span className="text-[#ffc937]">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h2>

          <Reveal delay={0.2}>
            <p className="relative mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-[rgba(253,253,247,0.62)]">
              {footCta.body}
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="relative mt-10 flex flex-wrap items-center gap-3">
              <Button href={footCta.primary.href} variant="sun" arrow>
                {footCta.primary.label}
              </Button>
              <Button href={footCta.secondary.href} variant="inverse">
                {footCta.secondary.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
