"use client";

import Image from "next/image";
import Reveal, { RevealWords } from "./ui/Reveal";
import { about, products } from "@/lib/content";

export default function Factory() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="eyebrow mb-5">{about.eyebrow}</div>
            </Reveal>
            <h2 className="display display-lg mb-7">
              <RevealWords text={about.heading} />
            </h2>
            {about.body.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="lede mb-5 max-w-md">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.28}>
              <ul className="mt-8 space-y-0">
                {about.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-center gap-3 border-b border-[rgba(27,27,24,0.09)] py-3 text-[0.9375rem] text-[#4a4a44] last:border-0"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ffc937]">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M1.6 5.2 3.9 7.5 8.4 3"
                          stroke="#1b1b18"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Offset image stack */}
          <div className="grid grid-cols-2 gap-4">
            {[products[8], products[2], products[7], products[6]].map((p, i) => (
              <Reveal
                key={p.slug}
                delay={i * 0.08}
                className={i % 2 === 1 ? "sm:translate-y-10" : ""}
              >
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white ring-1 ring-inset ring-[rgba(27,27,24,0.08)]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 45vw, 24vw"
                    className="object-contain p-6 transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
