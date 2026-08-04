"use client";

import Image from "next/image";
import Reveal, { RevealWords } from "./ui/Reveal";
import { about } from "@/lib/content";

const factoryScenes = [
  {
    image: "/photography/factory-cad.png",
    alt: "Sunflower Medical product design work in CAD",
    label: "Design and CAD",
    position: "50% 50%",
  },
  {
    image: "/photography/factory-sheet-handling.jpeg",
    alt: "A Sunflower Medical technician handling sheet material in the Bradford factory",
    label: "In-house fabrication",
    position: "50% 50%",
  },
  {
    image: "/photography/factory-assembly.png",
    alt: "A representative view of a clinical trolley being assembled",
    label: "Final assembly",
    position: "50% 50%",
  },
  {
    image: "/photography/treatment-bay.jpeg",
    alt: "Clinical bay with a hospital bed, privacy curtain and monitoring equipment",
    label: "Ready for clinical spaces",
    position: "58% 58%",
  },
];

export default function Factory() {
  return (
    <section id="factory" className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-[calc(var(--header-height)+1.5rem)] lg:self-start">
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

          {/* Real spaces and real process replace isolated catalogue cut-outs here. */}
          <div className="grid gap-4 sm:grid-cols-2">
            {factoryScenes.map((scene, i) => (
              <Reveal
                key={scene.label}
                delay={i * 0.08}
                className={i % 2 === 1 ? "sm:translate-y-10" : ""}
              >
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#ecece7] ring-1 ring-inset ring-[rgba(27,27,24,0.08)]">
                  <Image
                    src={scene.image}
                    alt={scene.alt}
                    fill
                    sizes="(max-width: 639px) 92vw, (max-width: 1023px) 45vw, 24vw"
                    loading={i === 0 ? "eager" : "lazy"}
                    style={{ objectPosition: scene.position }}
                    className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
                  />
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-[rgba(253,253,247,0.92)] px-3.5 py-2 text-[0.75rem] font-medium text-[#1b1b18] shadow-[0_8px_24px_-18px_rgba(27,27,24,0.7)] sm:bottom-4 sm:left-4">
                    {scene.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
