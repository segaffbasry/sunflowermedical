import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InteriorHero from "@/components/pages/InteriorHero";
import Reveal, { RevealWords } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import FootCta from "@/components/FootCta";
import { products } from "@/lib/content";
import { productSource } from "@/lib/source-content";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.blurb,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const productIndex = products.findIndex((item) => item.slug === slug);
  const product = products[productIndex];
  const source = productSource[slug];

  if (!product || !source) notFound();

  const nextProduct = products[(productIndex + 1) % products.length];

  return (
    <main>
      <InteriorHero
        eyebrow="Product category"
        title={source.title}
        intro={product.blurb}
        pills={product.types}
      />

      <section className="pb-24 sm:pb-32">
        <div className="shell grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[26px] bg-white ring-1 ring-inset ring-[rgba(27,27,24,0.08)]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 92vw, 56vw"
                className="object-contain p-8 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.035] sm:p-12"
              />
              <span className="absolute right-5 top-5 rounded-full bg-[#f4f4ef] px-4 py-2 text-[0.75rem] font-semibold text-[#4a4a44]">
                {product.count}
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              {source.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 0.08}>
                  <p className={`${index === 0 ? "text-[clamp(1.3rem,2.1vw,1.85rem)] leading-[1.4] tracking-[-0.032em] text-[#1b1b18]" : "text-[0.975rem] leading-[1.72] text-[#61615b]"}`}>
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary" arrow>Discuss this range</Button>
                <a href={source.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 text-[0.875rem] font-semibold ring-1 ring-inset ring-[rgba(27,27,24,0.18)] transition-colors hover:bg-[rgba(27,27,24,0.055)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]">
                  Current product listings <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4ef] py-24 sm:py-32">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <div>
              <Reveal><div className="eyebrow mb-5">Sub-ranges</div></Reveal>
              <h2 className="display display-md"><RevealWords text="Choose the format that fits the job." /></h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {source.subranges.map((subrange, index) => (
                <Reveal key={subrange.name} delay={(index % 4) * 0.06}>
                  <a
                    href={subrange.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-32 items-end justify-between gap-5 rounded-[20px] bg-[#fdfdf7] p-5 ring-1 ring-inset ring-[rgba(27,27,24,0.07)] transition-[transform,box-shadow] duration-400 hover:-translate-y-1 hover:shadow-[0_18px_42px_-30px_rgba(27,27,24,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]"
                  >
                    <span className="max-w-[18rem] text-[1rem] font-semibold leading-[1.25] tracking-[-0.025em]">{subrange.name}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(27,27,24,0.06)] transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-[#ffc937]" aria-hidden="true">↗</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="shell grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
          <div>
            <Reveal><div className="eyebrow mb-5">At a glance</div></Reveal>
            <h2 className="display display-md"><RevealWords text="Useful details, clearly stated." /></h2>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-md text-[0.9375rem] leading-[1.7] text-[#61615b]">
                Product dimensions, configurations and ordering details are available in the current catalogue or from the sales team.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <dl className="overflow-hidden rounded-[22px] ring-1 ring-[rgba(27,27,24,0.09)]">
              {product.specs.map((spec, index) => (
                <div key={spec.label} className={`grid gap-2 px-5 py-4 sm:grid-cols-[0.72fr_1.28fr] sm:items-center sm:px-7 ${index % 2 === 0 ? "bg-[#f4f4ef]" : "bg-[#fdfdf7]"}`}>
                  <dt className="text-[0.8125rem] font-medium text-[#73736d]">{spec.label}</dt>
                  <dd className="text-[0.9375rem] font-semibold tracking-[-0.02em] text-[#1b1b18]">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <Reveal>
            <Link href={`/products/${nextProduct.slug}`} className="group flex flex-col justify-between gap-8 rounded-[24px] bg-[#e9effd] p-7 ring-1 ring-inset ring-[rgba(27,27,24,0.07)] transition-transform duration-400 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] sm:flex-row sm:items-end sm:p-10">
              <span>
                <span className="eyebrow">Next category</span>
                <span className="display mt-5 block text-[clamp(1.65rem,3.3vw,3.35rem)]">{nextProduct.short}</span>
              </span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fdfdf7] text-[1.25rem] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <FootCta />
    </main>
  );
}
