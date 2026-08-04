import type { Metadata } from "next";
import InteriorHero from "@/components/pages/InteriorHero";
import EditorialImage from "@/components/pages/EditorialImage";
import ProductGrid from "@/components/pages/ProductGrid";
import Reveal, { RevealWords } from "@/components/ui/Reveal";
import FootCta from "@/components/FootCta";

export const metadata: Metadata = {
  title: "Healthcare furniture products",
  description:
    "Explore nine ranges of British-made healthcare furniture, from examination couches and clinical seating to storage, screens and HTM cabinetry.",
};

export default function ProductsPage() {
  return (
    <main>
      <InteriorHero
        eyebrow="Product range"
        title="Furniture made for the realities of healthcare."
        intro="Nine specialist ranges, designed and manufactured in Bradford with cleanability, durability and day-to-day clinical use in mind."
        pills={["Examination & treatment", "Clinical storage", "Patient privacy", "Ward furniture", "Custom finishes"]}
      />

      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <Reveal className="mb-12 sm:mb-16">
            <EditorialImage
              src="/photography/treatment-room-hero.png"
              alt="A blue examination couch, clinical storage and mobile privacy screens in a treatment room"
              caption="Products working together in a clinical setting"
              className="aspect-[4/3] sm:aspect-[16/7]"
              position="50% 55%"
              sizes="(max-width: 767px) 92vw, 92vw"
            />
          </Reveal>

          <div className="mb-12 grid gap-7 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <Reveal><div className="eyebrow">All categories</div></Reveal>
            <div>
              <h2 className="display display-md"><RevealWords text="Start with the range. Then make it fit the room." /></h2>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-2xl text-[0.9375rem] leading-[1.7] text-[#61615b]">
                  Each category opens to its verified sub-ranges and current source material. Contact our team for product selection, finishes, customisation and ordering.
                </p>
              </Reveal>
            </div>
          </div>
          <ProductGrid />
        </div>
      </section>

      <FootCta />
    </main>
  );
}
