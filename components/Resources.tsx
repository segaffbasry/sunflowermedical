"use client";

import Reveal, { RevealWords } from "./ui/Reveal";
import { resources } from "@/lib/content";

function ResourceIcon({ index }: { index: number }) {
  const paths = [
    <>
      <path d="M7 3.5h7l3 3V20.5H7z" />
      <path d="M14 3.5v3h3M10 11h4M10 14.5h4" />
    </>,
    <>
      <circle cx="8" cy="8" r="2.3" />
      <circle cx="16" cy="8" r="2.3" />
      <circle cx="8" cy="16" r="2.3" />
      <circle cx="16" cy="16" r="2.3" />
    </>,
    <>
      <path d="M5 20v-2.5a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4V20" />
      <circle cx="12" cy="7.5" r="3.5" />
    </>,
  ];

  return (
    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#fdfdf7] text-[#1b1b18] ring-1 ring-inset ring-[rgba(27,27,24,0.08)] transition-transform duration-300 ease-out group-hover:scale-[1.04]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
          {paths[index]}
        </g>
      </svg>
    </span>
  );
}

export default function Resources() {
  return (
    <section id="resources" className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-10 border-t border-[rgba(27,27,24,0.1)] pt-8 lg:grid-cols-[0.72fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-[calc(var(--header-height)+1.5rem)] lg:self-start">
            <Reveal>
              <div className="eyebrow mb-5">Resources</div>
            </Reveal>
            <h2 className="display display-md max-w-md">
              <RevealWords text="Everything a specifier needs, in one place." />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-[#61615b]">
                Product information, finish options and trade tools, organised for quick access.
              </p>
            </Reveal>
          </div>

          <div className="grid items-start gap-2 min-[1500px]:grid-cols-2">
            {resources.map((resource, index) => (
              <Reveal
                key={resource.title}
                delay={index * 0.08}
                className={index === 0 ? "min-[1500px]:col-span-2" : ""}
              >
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-28 items-center gap-4 rounded-[20px] px-4 py-4 transition-colors duration-300 hover:bg-[#f2f2ed] focus-visible:bg-[#f2f2ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfdf7] sm:px-5"
                >
                  <ResourceIcon index={index} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[1rem] font-semibold tracking-[-0.025em] text-[#1b1b18]">
                      {resource.title}
                    </span>
                    <span className="mt-1 block text-[0.875rem] leading-relaxed text-[#61615b]">
                      {resource.text}
                    </span>
                  </span>
                  <span className="ml-auto hidden shrink-0 items-center gap-2 text-[0.8125rem] font-semibold text-[#4a4a44] sm:flex">
                    {resource.action}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(27,27,24,0.06)] transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-[#ffc937]">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                          d="M2.6 7h8.8M7.7 3.3 11.4 7l-3.7 3.7"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
