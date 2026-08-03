import Reveal, { RevealWords } from "@/components/ui/Reveal";

type InteriorHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  pills?: readonly string[];
};

export default function InteriorHero({ eyebrow, title, intro, pills = [] }: InteriorHeroProps) {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-[calc(72px+4.5rem)] sm:pb-24 sm:pt-[calc(72px+7rem)]">
      <div className="shell">
        <div className="grid gap-8 border-b border-[rgba(27,27,24,0.1)] pb-12 sm:pb-16 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
          <Reveal>
            <div className="eyebrow pt-2">{eyebrow}</div>
          </Reveal>

          <div>
            <h1 className="display text-[clamp(2.6rem,6vw,6.6rem)] leading-[0.96]">
              <RevealWords text={title} />
            </h1>
            <Reveal delay={0.14}>
              <p className="mt-7 max-w-3xl text-[clamp(1.05rem,1.55vw,1.35rem)] leading-[1.5] tracking-[-0.022em] text-[#4a4a44]">
                {intro}
              </p>
            </Reveal>
          </div>
        </div>

        {pills.length > 0 && (
          <Reveal delay={0.22}>
            <div className="pill-rail -mx-5 overflow-x-auto px-5 pt-5 sm:mx-0 sm:px-0">
              <ul className="flex w-max items-center gap-2 sm:w-auto sm:flex-wrap" aria-label={`${title} highlights`}>
                {pills.map((pill) => (
                  <li
                    key={pill}
                    className="inline-flex min-h-9 shrink-0 items-center gap-2 rounded-full bg-[rgba(27,27,24,0.055)] px-4 text-[0.75rem] font-medium text-[#4a4a44] transition-colors duration-300 hover:bg-[rgba(27,27,24,0.09)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ffc937]" aria-hidden="true" />
                    {pill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
