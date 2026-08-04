import type { Metadata } from "next";
import InteriorHero from "@/components/pages/InteriorHero";
import EditorialImage from "@/components/pages/EditorialImage";
import ProductGrid from "@/components/pages/ProductGrid";
import Reveal, { RevealWords } from "@/components/ui/Reveal";
import FootCta from "@/components/FootCta";
import { sourceLinks } from "@/lib/source-content";

export const metadata: Metadata = {
  title: "Catalogue & resources",
  description:
    "View the current Sunflower Medical product catalogue, interactive brochure and distributor resources.",
};

const resources = [
  {
    eyebrow: "90-page PDF",
    title: "Product catalogue",
    text: "The current range with product details, dimensions, ordering information and material-care guidance.",
    action: "View catalogue",
    href: sourceLinks.catalogue,
    tone: "bg-[#e9effd]",
  },
  {
    eyebrow: "Interactive",
    title: "Online brochure",
    text: "Flip through the catalogue in your browser and move directly between product sections.",
    action: "Open brochure",
    href: sourceLinks.brochure,
    tone: "bg-[#f7efd5]",
  },
  {
    eyebrow: "Trade access",
    title: "Distributor portal",
    text: "Partner access for trade materials and distributor resources.",
    action: "Open portal",
    href: sourceLinks.distributor,
    tone: "bg-[#edf1ea]",
  },
] as const;

export default function CataloguePage() {
  return (
    <main>
      <InteriorHero
        eyebrow="Catalogue & resources"
        title="The detail, ready when you need it."
        intro="Browse the current range online, download the full catalogue or access trade materials through the distributor portal."
        pills={["Current product range", "Dimensions & options", "Material care", "Distributor resources"]}
      />

      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <div className="grid gap-4 lg:grid-cols-12">
            {resources.map((resource, index) => (
              <Reveal key={resource.title} delay={index * 0.08} className={index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-12"}>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex h-full min-h-72 flex-col justify-between rounded-[24px] p-7 ring-1 ring-inset ring-[rgba(27,27,24,0.07)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-36px_rgba(27,27,24,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] sm:p-10 ${resource.tone}`}
                >
                  <span>
                    <span className="eyebrow">{resource.eyebrow}</span>
                    <span className="display mt-6 block text-[clamp(1.8rem,3vw,3.2rem)]">{resource.title}</span>
                    <span className="mt-4 block max-w-xl text-[0.9375rem] leading-relaxed text-[#61615b]">{resource.text}</span>
                  </span>
                  <span className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#fdfdf7] px-5 py-3 text-[0.875rem] font-semibold shadow-[0_8px_24px_-20px_rgba(27,27,24,0.45)]">
                    {resource.action}
                    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">↗</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="mt-4">
            <EditorialImage
              src="/photography/clinic-reception.png"
              alt="A modern healthcare reception furnished with rows of linked blue seating"
              caption="See the range in a complete healthcare setting"
              className="aspect-[4/3] sm:aspect-[16/7]"
              position="50% 55%"
              sizes="(max-width: 767px) 92vw, 92vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f4ef] py-24 sm:py-32">
        <div className="shell">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <Reveal><div className="eyebrow">Browse by category</div></Reveal>
            <h2 className="display display-lg"><RevealWords text="Nine focused ranges, designed around healthcare work." /></h2>
          </div>
          <ProductGrid />
        </div>
      </section>

      <FootCta />
    </main>
  );
}
