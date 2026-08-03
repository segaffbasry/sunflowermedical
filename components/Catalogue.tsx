"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { useUI } from "./UIProvider";
import Reveal, { RevealWords } from "./ui/Reveal";
import { useRevealed } from "./ui/useReveal";
import { products } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/* The Saniswiss catalogue card: full-bleed photograph, a clean
   typographic label, and a sub-type list that unfurls on hover.
   Clicking opens the product page as a panel rather than a navigation. */

function Card({ p, i }: { p: (typeof products)[number]; i: number }) {
  const { openQuickView } = useUI();
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const { shown, instant } = useRevealed(ref);

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => openQuickView(p)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      initial={{ opacity: 0, y: 34 }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
      transition={instant ? { duration: 0 } : { duration: 0.8, delay: (i % 3) * 0.08, ease: EASE }}
      className="group relative flex w-full flex-col overflow-hidden rounded-[20px] bg-white text-left ring-1 ring-inset ring-[rgba(27,27,24,0.08)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(27,27,24,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]"
    >
      {/* Photograph. The source shots are studio cut-outs on white, so they
          are contained on a soft panel rather than cropped edge to edge. */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[rgba(27,27,24,0.06)] bg-white">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
          className="object-contain p-5 transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
        />

        <div className="absolute right-3.5 top-3.5 rounded-full bg-[rgba(253,253,247,0.92)] px-3 py-1 text-[0.6875rem] font-medium text-[#4a4a44] backdrop-blur-sm">
          {p.count}
        </div>
      </div>

      {/* Clean label block */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="display text-[1.35rem] leading-[1.12]">{p.short}</h3>
          <span
            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              hover ? "bg-[#ffc937] text-[#1b1b18]" : "bg-[rgba(27,27,24,0.06)] text-[#4a4a44]"
            }`}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              className={`transition-transform duration-500 ${hover ? "rotate-45" : ""}`}
            >
              <path d="M7 2.4v9.2M2.4 7h9.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </div>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.types.map((type) => (
            <li key={type} className="rounded-full bg-[rgba(255,201,55,0.2)] px-2.5 py-1 text-[0.6875rem] text-[#4a4a44] transition-colors duration-300 group-hover:bg-[rgba(255,201,55,0.3)]">
              {type}
            </li>
          ))}
        </ul>
      </div>
    </motion.button>
  );
}

export default function Catalogue() {
  return (
    <section id="catalogue" className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="mb-12 flex flex-col gap-6 border-t border-[rgba(27,27,24,0.1)] pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <div className="eyebrow mb-4">The range</div>
            </Reveal>
            <h2 className="display display-lg max-w-2xl">
              <RevealWords text="Nine categories. One factory floor." />
            </h2>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-[0.9375rem] leading-relaxed text-[#61615b]">
              Every line below is manufactured by us, which is why every line below can be changed.
              Explore a card for range details, finishes and the verified sub-ranges.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Card key={p.slug} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
