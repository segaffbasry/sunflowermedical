import type { Metadata } from "next";
import InteriorHero from "@/components/pages/InteriorHero";
import Reveal, { RevealWords } from "@/components/ui/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { company } from "@/lib/content";
import { contactPage } from "@/lib/source-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sunflower Medical sales, customer services or export teams for healthcare furniture product, delivery, customisation and distributor enquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <InteriorHero
        eyebrow="Get in touch"
        title="A direct line to the people who make it."
        intro={contactPage.intro}
        pills={[contactPage.hours, "UK & international", "Product guidance", "Custom solutions"]}
      />

      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <div className="grid gap-3 lg:grid-cols-3">
            {contactPage.departments.map((department, index) => (
              <Reveal key={department.title} delay={index * 0.07}>
                <article className={`flex h-full min-h-64 flex-col justify-between rounded-[22px] p-6 ring-1 ring-inset ring-[rgba(27,27,24,0.07)] sm:p-8 ${index === 0 ? "bg-[#e9effd]" : index === 1 ? "bg-[#f7efd5]" : "bg-[#edf1ea]"}`}>
                  <div>
                    <span className="text-[0.6875rem] font-semibold text-[#73736d]">0{index + 1}</span>
                    <h2 className="mt-7 text-[1.25rem] font-semibold tracking-[-0.035em]">{department.title}</h2>
                  </div>
                  <div className="mt-10 space-y-1.5 text-[0.875rem]">
                    <a href={`mailto:${department.email}`} className="block w-fit rounded py-1 font-medium text-[#1b1b18] transition-colors hover:text-[#1d54cf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]">{department.email}</a>
                    <a href="tel:+441274684004" className="block w-fit rounded py-1 text-[#4a4a44] transition-colors hover:text-[#1b1b18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]">{department.phone}</a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4ef] py-24 sm:py-32">
        <div className="shell">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <Reveal><div className="eyebrow">How we can help</div></Reveal>
            <h2 className="display display-lg"><RevealWords text="Local service, with support that travels." /></h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {[contactPage.uk, contactPage.international].map((market, marketIndex) => (
              <Reveal key={market.title} delay={marketIndex * 0.08}>
                <article className="h-full rounded-[24px] bg-[#fdfdf7] p-7 ring-1 ring-inset ring-[rgba(27,27,24,0.08)] sm:p-9">
                  <h3 className="display text-[clamp(1.65rem,2.7vw,2.7rem)]">{market.title}</h3>
                  <p className="mt-5 max-w-xl text-[0.9375rem] leading-[1.7] text-[#61615b]">{market.intro}</p>
                  <ul className="mt-8 divide-y divide-[rgba(27,27,24,0.09)]">
                    {market.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 py-3 text-[0.875rem] font-medium text-[#4a4a44]">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ffc937]" aria-hidden="true">
                          <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M1.6 5.2 3.9 7.5 8.4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="shell grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
          <Reveal>
            <aside className="flex h-full flex-col justify-between rounded-[24px] bg-[#1b1b18] p-7 text-[#fdfdf7] sm:p-9">
              <div>
                <div className="eyebrow !text-[#b8b8b0]">Visit or call</div>
                <h2 className="display mt-6 text-[clamp(1.8rem,3vw,3rem)] !text-[#fdfdf7]">Bradford, West Yorkshire.</h2>
              </div>
              <div className="mt-12 space-y-7 text-[0.9375rem] text-[#d3d3cb]">
                <address className="not-italic leading-relaxed">
                  {company.address.line1}<br />
                  {company.address.line2}<br />
                  {company.address.city}, {company.address.postcode}
                </address>
                <div>
                  <div className="text-[#fdfdf7]">{contactPage.hours}</div>
                  <div className="mt-1 text-[0.8125rem] text-[#b8b8b0]">Closed weekends and public holidays</div>
                </div>
              </div>
            </aside>
          </Reveal>
          <Reveal delay={0.08}>
            <EnquiryForm title="Send the team an enquiry" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
