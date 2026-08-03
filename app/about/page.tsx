import type { Metadata } from "next";
import InteriorHero from "@/components/pages/InteriorHero";
import Reveal, { RevealWords } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import FootCta from "@/components/FootCta";
import { aboutPage, sourceLinks } from "@/lib/source-content";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Meet the Bradford team that designs, manufactures, assembles and distributes Sunflower Medical healthcare furniture from one UK site.",
};

export default function AboutPage() {
  return (
    <main>
      <InteriorHero
        eyebrow="About Sunflower Medical"
        title="One team. One factory. Better control."
        intro={aboutPage.intro}
        pills={["Bradford, West Yorkshire", "In-house 3D CAD", "UK manufacturing", "Bespoke capability"]}
      />

      <section className="pb-24 sm:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          <Reveal>
            <div className="eyebrow lg:sticky lg:top-28">Concept to distribution</div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {aboutPage.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08} className={index === 0 ? "sm:col-span-2" : ""}>
                <p className={`${index === 0 ? "text-[clamp(1.45rem,2.4vw,2.35rem)] leading-[1.25] tracking-[-0.035em] text-[#1b1b18]" : "text-[1rem] leading-[1.7] text-[#61615b]"}`}>
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4ef] py-24 sm:py-32">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <Reveal><div className="eyebrow mb-5">Under one roof</div></Reveal>
              <h2 className="display display-lg max-w-xl"><RevealWords text="The capability to change the product, not just the label." /></h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {aboutPage.capabilities.map((capability, index) => (
                <Reveal key={capability} delay={index * 0.06}>
                  <div className="group flex min-h-28 items-end justify-between rounded-[20px] bg-[#fdfdf7] p-5 ring-1 ring-inset ring-[rgba(27,27,24,0.07)] transition-[transform,box-shadow] duration-400 hover:-translate-y-1 hover:shadow-[0_18px_44px_-30px_rgba(27,27,24,0.35)]">
                    <span className="max-w-[15rem] text-[1rem] font-semibold tracking-[-0.025em]">{capability}</span>
                    <span className="text-[0.6875rem] font-semibold text-[#73736d]">0{index + 1}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="shell">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.highlights.map((item, index) => (
              <Reveal key={item.value} delay={index * 0.07}>
                <div className="min-h-44 rounded-[20px] border-t border-[rgba(27,27,24,0.13)] pt-5">
                  <div className="display text-[clamp(1.8rem,3vw,3rem)]">{item.value}</div>
                  <div className="mt-3 max-w-[13rem] text-[0.875rem] leading-relaxed text-[#61615b]">{item.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-[24px] bg-[#1b1b18] p-7 text-[#fdfdf7] sm:p-10">
                <div className="eyebrow !text-[#b8b8b0]">Our products</div>
                <p className="mt-8 text-[clamp(1.25rem,2vw,1.8rem)] leading-[1.38] tracking-[-0.03em]">{aboutPage.products}</p>
                <Button href="/products" variant="sun" arrow className="mt-9">Explore the range</Button>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="flex h-full flex-col justify-between rounded-[24px] bg-[#e9effd] p-7 sm:p-10">
                <div className="eyebrow">Our values</div>
                <p className="mt-8 text-[clamp(1.4rem,2.5vw,2.35rem)] font-semibold leading-[1.16] tracking-[-0.045em]">{aboutPage.values}</p>
                <a href={sourceLinks.catalogue} target="_blank" rel="noreferrer" className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#fdfdf7] px-5 py-3 text-[0.875rem] font-semibold ring-1 ring-inset ring-[rgba(27,27,24,0.1)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]">
                  View the catalogue <span aria-hidden="true">↗</span>
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <FootCta />
    </main>
  );
}
