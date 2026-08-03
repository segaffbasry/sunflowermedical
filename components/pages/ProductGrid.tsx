import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { products } from "@/lib/content";

export default function ProductGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <Reveal key={product.slug} delay={(index % 3) * 0.07}>
          <Link
            href={`/products/${product.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-[22px] bg-white ring-1 ring-inset ring-[rgba(27,27,24,0.08)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_24px_54px_-30px_rgba(27,27,24,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]"
          >
            <span className="relative block aspect-[4/3] overflow-hidden border-b border-[rgba(27,27,24,0.07)] bg-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                className="object-contain p-6 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.055]"
              />
              <span className="absolute right-4 top-4 rounded-full bg-[rgba(253,253,247,0.94)] px-3 py-1.5 text-[0.6875rem] font-semibold text-[#4a4a44] shadow-[0_6px_18px_-14px_rgba(27,27,24,0.45)]">
                {product.count}
              </span>
            </span>

            <span className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="flex items-start justify-between gap-4">
                <span className="display text-[1.35rem] leading-[1.12]">{product.short}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(27,27,24,0.06)] transition-[background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:bg-[#ffc937]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
              <span className="mt-4 flex flex-wrap gap-1.5">
                {product.types.map((type) => (
                  <span key={type} className="rounded-full bg-[rgba(27,27,24,0.05)] px-2.5 py-1 text-[0.6875rem] text-[#61615b]">
                    {type}
                  </span>
                ))}
              </span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
