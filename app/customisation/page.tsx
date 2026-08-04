import type { Metadata } from "next";
import InteriorHero from "@/components/pages/InteriorHero";
import EditorialImage from "@/components/pages/EditorialImage";
import Reveal, { RevealWords } from "@/components/ui/Reveal";
import Customisation from "@/components/Customisation";
import EnquiryForm from "@/components/EnquiryForm";
import { customisationPage } from "@/lib/source-content";

export const metadata: Metadata = {
  title: "Customisation & branding",
  description:
    "Custom colours, finishes, branding and bespoke healthcare furniture designed and manufactured by Sunflower Medical in Bradford.",
};

export default function CustomisationPage() {
  return (
    <main>
      <InteriorHero
        eyebrow="Customisation & branding"
        title="Healthcare furniture, made recognisably yours."
        intro={customisationPage.intro}
        pills={["Custom colours", "Professional branding", "Bespoke 3D CAD", "Made in Bradford"]}
      />

      <section className="pb-24 sm:pb-32">
        <div className="shell grid gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:gap-20">
          <Reveal>
            <div className="eyebrow lg:sticky lg:top-[calc(var(--header-height)+1.5rem)]">
              Tailored around the setting
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {customisationPage.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08}>
                <p className="text-[clamp(1.15rem,1.7vw,1.55rem)] leading-[1.48] tracking-[-0.027em] text-[#4a4a44]">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <div className="rounded-[26px] bg-[#1b1b18] p-7 text-[#fdfdf7] sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <Reveal><div className="eyebrow mb-5 !text-[#b8b8b0]">Designed and manufactured in the UK</div></Reveal>
                <h2 className="display display-md !text-[#fdfdf7]"><RevealWords text="Complete control, from the drawing to the delivery." /></h2>
                <Reveal delay={0.14} className="mt-8">
                  <EditorialImage
                    src="/photography/waiting-area-blue-screens.jpg"
                    alt="Coordinated light blue healthcare seating and mobile privacy screens in a reception area"
                    caption="Coordinated colours and finishes"
                    className="aspect-[5/4]"
                    position="50% 63%"
                    sizes="(max-width: 1023px) 84vw, 31vw"
                  />
                </Reveal>
              </div>
              <div className="space-y-6">
                {customisationPage.manufacture.map((paragraph, index) => (
                  <Reveal key={paragraph} delay={index * 0.08}>
                    <p className="text-[1rem] leading-[1.7] text-[#d3d3cb]">{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Customisation />

      <section className="py-24 sm:py-32">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <div>
              <Reveal><div className="eyebrow mb-5">What we offer</div></Reveal>
              <h2 className="display display-md"><RevealWords text="A practical route from requirement to finished product." /></h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {customisationPage.offers.map((offer, index) => (
                <Reveal key={offer.title} delay={index * 0.07}>
                  <article className={`h-full rounded-[22px] p-6 ring-1 ring-inset ring-[rgba(27,27,24,0.07)] transition-transform duration-400 hover:-translate-y-1 ${index === 0 ? "bg-[#e9effd]" : index === 1 ? "bg-[#f7efd5]" : "bg-[#f4f4ef]"}`}>
                    <span className="text-[0.6875rem] font-semibold text-[#73736d]">0{index + 1}</span>
                    <h3 className="mt-10 text-[1.15rem] font-semibold tracking-[-0.03em]">{offer.title}</h3>
                    <p className="mt-3 text-[0.875rem] leading-[1.65] text-[#61615b]">{offer.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16 sm:mt-24">
            <Reveal>
              <EnquiryForm title="Discuss a customised product" />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
