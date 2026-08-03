"use client";

import Reveal, { RevealWords } from "./ui/Reveal";
import Button from "./ui/Button";
import { statement, proof } from "@/lib/content";

export default function Statement() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="eyebrow mb-5">{statement.eyebrow}</div>
            </Reveal>
            <h2 className="display display-lg">
              <RevealWords text={statement.heading} />
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            {statement.body.map((para, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="lede mb-5">{para}</p>
              </Reveal>
            ))}
            <Reveal delay={0.28}>
              <Button href={statement.cta.href} variant="secondary" arrow className="mt-2">
                {statement.cta.label}
              </Button>
            </Reveal>
          </div>
        </div>

        {/* Stat row */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl bg-[rgba(27,27,24,0.09)] sm:grid-cols-2 lg:grid-cols-4">
          {proof.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="bg-[#fdfdf7]">
              <div className="h-full bg-[#fdfdf7] p-6 transition-colors duration-300 hover:bg-[#f7f6ef]">
                <div className="display text-[2.6rem] leading-none">{s.value}</div>
                <div className="mt-3 text-[0.875rem] font-medium text-[#1b1b18]">{s.label}</div>
                <div className="mt-1 text-[0.8125rem] text-[#61615b]">{s.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
