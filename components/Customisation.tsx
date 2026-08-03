"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import Reveal, { RevealWords } from "./ui/Reveal";
import { useRevealed } from "./ui/useReveal";
import { Mark } from "./Logo";
import { customisation } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Customisation() {
  const [active, setActive] = useState(0);
  const swatch = customisation.swatches[active];
  const stepsRef = useRef<HTMLDivElement>(null);
  const steps = useRevealed(stepsRef);

  return (
    <section id="customisation" className="relative overflow-hidden bg-[#f5f5f0] py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: the pitch */}
          <div>
            <Reveal>
              <div className="eyebrow mb-5">{customisation.eyebrow}</div>
            </Reveal>
            <h2 className="display display-lg mb-6">
              <RevealWords text={customisation.heading} />
            </h2>
            <Reveal delay={0.12}>
              <p className="lede max-w-lg">{customisation.body}</p>
            </Reveal>

            {/* Interactive swatch tray */}
            <Reveal delay={0.2}>
              <div className="mt-10">
                <div className="eyebrow mb-4">Pick a colourway</div>
                <div className="flex flex-wrap gap-2.5" role="radiogroup" aria-label="Preview colourway">
                  {customisation.swatches.map((s, i) => (
                    <button
                      key={s.name}
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-label={s.name}
                      role="radio"
                      aria-checked={active === i}
                      className={`h-11 w-11 rounded-full ring-offset-2 ring-offset-[#f5f5f0] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        active === i
                          ? "scale-110 ring-2 ring-[#1b1b18]"
                          : "ring-1 ring-[rgba(27,27,24,0.12)] hover:scale-105"
                      }`}
                      style={{ background: s.hex }}
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-baseline gap-3">
                  <motion.span
                    key={swatch.name}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="display text-[1.35rem]"
                  >
                    {swatch.name}
                  </motion.span>
                  <span className="text-[0.8125rem] uppercase tracking-wider text-[#61615b]">
                    {swatch.hex}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: the four steps */}
          <div className="relative">
            {/* Branded-product preview that responds to the swatch */}
            <Reveal>
              <div className="relative mb-8 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-[#fdfdf7] ring-1 ring-[rgba(27,27,24,0.08)]">
                <motion.div
                  className="absolute inset-0"
                  animate={{ background: `${swatch.hex}14` }}
                  transition={{ duration: 0.5 }}
                />
                <div className="relative flex flex-col items-center gap-4">
                  <motion.div animate={{ opacity: 1 }} className="flex items-center gap-3">
                    <Mark className="h-9 w-auto" tone={swatch.hex} />
                    <span className="display text-[1.9rem] lowercase" style={{ color: "#1b1b18" }}>
                      your ward
                    </span>
                  </motion.div>
                  <motion.div
                    className="h-1.5 w-40 rounded-full"
                    animate={{ background: swatch.hex }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="text-[0.75rem] uppercase tracking-[0.16em] text-[#61615b]">
                    Applied at manufacture
                  </span>
                </div>
              </div>
            </Reveal>

            <div
              ref={stepsRef}
              className="grid gap-px overflow-hidden rounded-2xl bg-[rgba(27,27,24,0.09)] sm:grid-cols-2"
            >
              {customisation.steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 20 }}
                  animate={steps.shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={
                    steps.instant ? { duration: 0 } : { duration: 0.7, delay: i * 0.08, ease: EASE }
                  }
                  className="group bg-[#f5f5f0] p-6 transition-colors duration-300 hover:bg-[#fdfdf7]"
                >
                  <div className="text-[0.75rem] font-medium tracking-[0.1em] text-[#73736d] transition-colors duration-300 group-hover:text-[#e8ae14]">
                    {s.n}
                  </div>
                  <h3 className="display mt-3 text-[1.3rem]">{s.title}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-[#61615b]">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
