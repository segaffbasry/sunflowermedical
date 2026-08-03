import type { ReactNode } from "react";
import Link from "next/link";
import Reveal, { RevealWords } from "@/components/ui/Reveal";

export type LegalSection = {
  id: string;
  title: string;
  number?: string;
  showInNav?: boolean;
  paragraphs?: readonly ReactNode[];
  bullets?: readonly ReactNode[];
  clauses?: readonly {
    number: string;
    text: ReactNode;
  }[];
  action?: {
    label: string;
    href: string;
    note?: string;
    external?: boolean;
  };
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  dateLabel?: string;
  sections: readonly LegalSection[];
  contactLabel: string;
  contactHref: string;
};

const linkClass =
  "rounded-sm font-semibold text-[#1d54cf] underline decoration-[rgba(29,84,207,0.25)] underline-offset-4 transition-colors hover:text-[#153f9f] hover:decoration-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfdf7]";

export function LegalInlineLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={linkClass}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  dateLabel = "Last updated",
  sections,
  contactLabel,
  contactHref,
}: LegalPageProps) {
  return (
    <main id="top">
      <section className="pb-14 pt-[calc(var(--header-height)+4rem)] sm:pb-20 sm:pt-[calc(var(--header-height)+6rem)]">
        <div className="shell">
          <div className="grid gap-8 border-b border-[rgba(27,27,24,0.11)] pb-12 sm:pb-16 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
            <Reveal>
              <div className="flex items-center gap-3 pt-2">
                <span className="h-2 w-2 rounded-full bg-[#ffc937]" aria-hidden="true" />
                <span className="eyebrow">{eyebrow}</span>
              </div>
            </Reveal>

            <div>
              <h1 className="display text-[clamp(2.75rem,6.2vw,6.4rem)] leading-[0.96]">
                <RevealWords text={title} />
              </h1>
              <Reveal delay={0.12}>
                <p className="mt-7 max-w-3xl text-[clamp(1.05rem,1.55vw,1.35rem)] leading-[1.55] tracking-[-0.022em] text-[#4a4a44]">
                  {intro}
                </p>
                <p className="mt-5 text-[0.75rem] font-semibold uppercase tracking-[0.11em] text-[#73736d]">
                  {dateLabel} {updated}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-[0.48fr_1.52fr] lg:gap-20">
          <Reveal>
            <aside className="lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
              <nav aria-label={`On this ${title.toLowerCase()} page`}>
                <div className="eyebrow mb-4">On this page</div>
                <ol className="border-t border-[rgba(27,27,24,0.1)]">
                  {sections.filter((section) => section.showInNav !== false).map((section, index) => (
                    <li key={section.id} className="border-b border-[rgba(27,27,24,0.1)]">
                      <a
                        href={`#${section.id}`}
                        className="group flex items-center gap-4 rounded-lg px-2 py-3.5 text-[0.8125rem] text-[#4a4a44] transition-colors hover:bg-[rgba(27,27,24,0.045)] hover:text-[#1b1b18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]"
                      >
                        <span className="w-5 text-[0.6875rem] font-semibold text-[#92928b] transition-colors group-hover:text-[#1b1b18]">
                          {section.number ?? String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-medium">{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="mt-7 rounded-[18px] bg-[#f4f4ef] p-5 ring-1 ring-inset ring-[rgba(27,27,24,0.06)]">
                <div className="text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[#73736d]">
                  Questions about this page?
                </div>
                <a
                  href={contactHref}
                  className="mt-3 inline-flex rounded text-[0.875rem] font-semibold text-[#1b1b18] transition-colors hover:text-[#1d54cf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]"
                >
                  {contactLabel}
                </a>
              </div>
            </aside>
          </Reveal>

          <article>
            {sections.map((section, index) => (
              <Reveal key={section.id} delay={Math.min(index * 0.035, 0.16)}>
                <section
                  id={section.id}
                  className="grid gap-6 border-t border-[rgba(27,27,24,0.11)] py-10 first:pt-0 lg:grid-cols-[4.5rem_1fr] lg:gap-8 sm:py-12"
                >
                  <div className="text-[0.6875rem] font-semibold text-[#92928b]">
                    {section.number ?? String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h2 className="display text-[clamp(1.55rem,2.4vw,2.35rem)] leading-[1.12]">
                      {section.title}
                    </h2>

                    {section.paragraphs && (
                      <div className="mt-5 space-y-4 text-[0.9375rem] leading-[1.75] text-[#565650] sm:text-[1rem]">
                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>{paragraph}</p>
                        ))}
                      </div>
                    )}

                    {section.bullets && (
                      <ul className="mt-6 space-y-3" role="list">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex gap-3 text-[0.9375rem] leading-[1.65] text-[#565650] sm:text-[1rem]"
                          >
                            <span
                              className="mt-[0.66em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffc937]"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.clauses && (
                      <dl className="mt-6 space-y-4">
                        {section.clauses.map((clause, clauseIndex) => (
                          <div
                            key={`${clause.number}-${clauseIndex}`}
                            className="grid gap-1.5 border-t border-[rgba(27,27,24,0.075)] pt-4 sm:grid-cols-[4.75rem_1fr] sm:gap-5"
                          >
                            <dt className="text-[0.75rem] font-semibold tabular-nums text-[#73736d]">
                              {clause.number}
                            </dt>
                            <dd className="text-[0.9rem] leading-[1.7] text-[#565650] sm:text-[0.9375rem]">
                              {clause.text}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    {section.action && (
                      <div className="mt-7 rounded-[18px] bg-[#f4f4ef] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
                        <div>
                          <div className="text-[0.9375rem] font-semibold text-[#1b1b18]">
                            {section.action.label}
                          </div>
                          {section.action.note && (
                            <p className="mt-1 max-w-xl text-[0.8125rem] leading-relaxed text-[#61615b]">
                              {section.action.note}
                            </p>
                          )}
                        </div>
                        <a
                          href={section.action.href}
                          target={section.action.external ? "_blank" : undefined}
                          rel={section.action.external ? "noreferrer" : undefined}
                          className="cta-button relative mt-4 inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#1b1b18] px-5 text-[0.8125rem] font-semibold text-[#fdfdf7] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-14px_rgba(27,27,24,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f4ef] sm:mt-0"
                        >
                          <span>Open document</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    )}
                  </div>
                </section>
              </Reveal>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
