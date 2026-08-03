"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Button from "./ui/Button";
import { useUI } from "./UIProvider";
import { hero, products, proof } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const BENTO_LAYOUT = [
  "md:col-span-6 md:row-span-2",
  "md:col-span-6 md:row-span-1",
  "md:col-span-3 md:row-span-1",
  "md:col-span-3 md:row-span-1",
];
const BENTO_TONE = ["bg-[#f2f2ed]", "bg-[#e9effd]", "bg-[#f7efd5]", "bg-[#edf1ea]"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { openQuickView } = useUI();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-[var(--header-height)]"
    >
      <div className="shell relative flex flex-1 flex-col justify-center pb-8 pt-14 sm:pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full bg-[rgba(27,27,24,0.045)] py-1.5 pl-2 pr-4"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ffc937]">
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                <path d="M1.6 5.2 3.9 7.5 8.4 3" stroke="#1b1b18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[0.8125rem] text-[#4a4a44]">
              Designed, welded and upholstered in Bradford
            </span>
          </motion.div>

          {/* Line-by-line masked reveal */}
          <h1 className="display display-xl">
            {hero.lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: "108%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.05, delay: 0.35 + i * 0.12, ease: EASE }}
                >
                  {i === hero.markerWord ? (
                    <span className="marker">
                      <motion.span
                        aria-hidden="true"
                        className="absolute inset-y-[0.08em] -inset-x-[0.28em] -z-0 rounded-[0.5em] bg-[rgba(255,201,55,0.42)]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        style={{ transformOrigin: "left center" }}
                        transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
                      />
                      <span className="relative z-10">{line}</span>
                    </span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            className="lede mt-7 max-w-xl"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href={hero.primary.href} variant="primary" arrow>
              {hero.primary.label}
            </Button>
            <Button href={hero.secondary.href} variant="secondary">
              {hero.secondary.label}
            </Button>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.12, ease: EASE }}
          className="pill-rail -mx-5 mt-7 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0"
        >
          <ul aria-label="Manufacturing credentials" className="flex w-max items-center gap-2 sm:w-auto sm:flex-wrap">
            {proof.marks.map((mark) => (
              <li
                key={mark}
                className="inline-flex h-8 shrink-0 items-center gap-2 rounded-full bg-[#1b1b18] px-4 text-[0.75rem] font-medium tracking-[-0.01em] text-[#fdfdf7]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffc937]" aria-hidden="true" />
                {mark}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Asymmetric product bento, inspired by Holo's generous feature cards. */}
      <motion.div style={reduceMotion ? undefined : { y: imgY, opacity: fade }} className="shell relative pb-8">
        <div className="grid grid-cols-2 gap-3 md:auto-rows-[9.5rem] md:grid-cols-12 lg:auto-rows-[10.5rem] lg:gap-4">
          {products.slice(0, 4).map((p, i) => (
            <motion.button
              key={p.slug}
              type="button"
              onClick={() => openQuickView(p)}
              aria-label={`View details for ${p.name}`}
              aria-haspopup="dialog"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={reduceMotion ? undefined : { scale: 0.992 }}
              transition={{ duration: 1, delay: 1.1 + i * 0.09, ease: EASE }}
              className={`group relative aspect-[5/4] w-full touch-manipulation overflow-hidden rounded-[24px] text-left ring-1 ring-inset ring-[rgba(27,27,24,0.07)] transition-[box-shadow,filter] duration-300 hover:brightness-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfdf7] sm:rounded-[28px] md:aspect-auto ${BENTO_LAYOUT[i]} ${BENTO_TONE[i]}`}
            >
              <Image
                src={p.image}
                alt=""
                fill
                sizes="(max-width: 768px) 45vw, (max-width: 1280px) 46vw, 44vw"
                loading={i < 2 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                className={`pointer-events-none object-contain mix-blend-multiply transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045] group-focus-visible:scale-[1.045] ${
                  i === 0 ? "p-6 pb-16 md:p-9 md:pb-16" : "p-5 pb-14"
                }`}
              />

              <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-[rgba(253,253,247,0.9)] px-3 py-1.5 text-[0.6875rem] font-medium text-[#4a4a44] shadow-[0_4px_14px_-10px_rgba(27,27,24,0.35)] backdrop-blur-sm sm:right-4 sm:top-4">
                {p.count}
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <span className="inline-flex max-w-full items-center rounded-full bg-[#1b1b18] px-3.5 py-2 text-[0.75rem] font-medium tracking-[-0.01em] text-[#fdfdf7] shadow-[0_8px_24px_-14px_rgba(27,27,24,0.65)] sm:px-4">
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap">{p.short}</span>
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[rgba(27,27,24,0.1)] pt-4">
          <span className="eyebrow">{hero.scrollCue}</span>
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={reduceMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#61615b]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M3.3 8.3 7 12l3.7-3.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
