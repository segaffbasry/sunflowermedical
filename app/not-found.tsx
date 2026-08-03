import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="top" className="shell flex min-h-[78svh] items-center pb-20 pt-[calc(var(--header-height)+5rem)]">
      <div className="max-w-3xl">
        <div className="eyebrow">404 · Page not found</div>
        <h1 className="display mt-6 text-[clamp(2.8rem,7vw,7rem)] leading-[0.95]">This page has moved out of range.</h1>
        <p className="lede mt-7 max-w-xl">Explore the current healthcare furniture categories or talk to the Sunflower Medical team.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/products" arrow>Browse products</Button>
          <Link href="/contact" className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full px-7 text-[0.9375rem] font-semibold ring-1 ring-inset ring-[rgba(27,27,24,0.18)] transition-colors hover:bg-[rgba(27,27,24,0.055)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
