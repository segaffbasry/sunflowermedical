"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useUI } from "./UIProvider";
import Button from "./ui/Button";
import { useDialogFocus } from "./ui/useDialogFocus";

const EASE = [0.16, 1, 0.3, 1] as const;

/* The product page, delivered as a panel so the catalogue stays put
   behind it. In build this becomes /products/[slug] as well, with the
   panel used for the quick look. */

export default function QuickView() {
  const { quickView: p, closeQuickView } = useUI();
  const [finish, setFinish] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  useDialogFocus(dialogRef, Boolean(p));

  return (
    <AnimatePresence onExitComplete={() => setFinish(0)}>
      {p && (
        <motion.div className="fixed inset-0 z-[80]" initial="hidden" animate="show" exit="hidden">
          <motion.div
            className="absolute inset-0 bg-[rgba(27,27,24,0.4)] backdrop-blur-[4px]"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 0.4 }}
            onClick={closeQuickView}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-view-title"
            tabIndex={-1}
            className="absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col bg-[#fdfdf7] shadow-[-30px_0_80px_-30px_rgba(27,27,24,0.4)]"
            variants={{ hidden: { x: "100%" }, show: { x: "0%" } }}
            transition={{ duration: 0.72, ease: EASE }}
          >
            {/* Top bar */}
            <div className="flex shrink-0 items-center justify-between border-b border-[rgba(27,27,24,0.09)] px-6 py-4">
              <span className="eyebrow">Product</span>
              <button
                type="button"
                onClick={closeQuickView}
                aria-label="Close"
                className="flex h-11 w-11 items-center justify-center rounded-full text-[#61615b] ring-1 ring-inset ring-[rgba(27,27,24,0.14)] transition-colors hover:bg-[rgba(27,27,24,0.05)] hover:text-[#1b1b18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]"
              >
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* Hero image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative aspect-[16/10] w-full overflow-hidden bg-white"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 42rem"
                  className="object-contain p-8"
                />
              </motion.div>

              <div className="px-6 py-8 sm:px-9">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {p.types.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[rgba(27,27,24,0.05)] px-2.5 py-1 text-[0.6875rem] text-[#4a4a44]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h2 id="quick-view-title" className="display mt-5 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.08]">
                    {p.name}
                  </h2>
                  <p className="lede mt-4">{p.blurb}</p>
                </motion.div>

                {/* Finishes */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.36, ease: EASE }}
                  className="mt-9"
                >
                  <div className="eyebrow mb-3">Finish</div>
                  <div className="flex items-center gap-2.5">
                    {p.finishes.map((f, i) => (
                      <button
                        key={f + i}
                        type="button"
                        onClick={() => setFinish(i)}
                        aria-label={`Finish ${i + 1}`}
                        aria-pressed={finish === i}
                        className={`h-9 w-9 rounded-full ring-offset-2 ring-offset-[#fdfdf7] transition-all duration-300 ${
                          finish === i
                            ? "ring-2 ring-[#1b1b18]"
                            : "ring-1 ring-[rgba(27,27,24,0.14)] hover:ring-[rgba(27,27,24,0.34)]"
                        }`}
                        style={{ background: f }}
                      />
                    ))}
                    <span className="ml-2 text-[0.8125rem] text-[#61615b]">
                      + full RAL range to order
                    </span>
                  </div>
                </motion.div>

                {/* Specs */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.44, ease: EASE }}
                  className="mt-9"
                >
                  <div className="eyebrow mb-3">Specification</div>
                  <dl className="overflow-hidden rounded-xl ring-1 ring-[rgba(27,27,24,0.09)]">
                    {p.specs.map((s, i) => (
                      <div
                        key={s.label}
                        className={`flex items-center justify-between px-4 py-3 text-[0.875rem] ${
                          i % 2 === 0 ? "bg-[#f7f6ef]" : "bg-transparent"
                        }`}
                      >
                        <dt className="text-[#61615b]">{s.label}</dt>
                        <dd className="font-medium text-[#1b1b18]">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>

                {/* Branding note */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.52, ease: EASE }}
                  className="mt-6 flex gap-3 rounded-xl bg-[rgba(255,201,55,0.16)] p-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ffc937]">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M1.6 5.2 3.9 7.5 8.4 3" stroke="#1b1b18" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-[0.875rem] leading-relaxed text-[#4a4a44]">
                    Available with your own colourway and logo applied at manufacture. Minimum
                    order and artwork requirements apply.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Sticky action bar */}
            <div className="shrink-0 border-t border-[rgba(27,27,24,0.09)] bg-[rgba(253,253,247,0.94)] px-6 py-4 backdrop-blur-xl sm:px-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="truncate text-[0.875rem] font-medium text-[#1b1b18]">{p.short}</div>
                  <div className="text-[0.75rem] text-[#61615b]">Price on specification</div>
                </div>
                <div className="flex w-full flex-col gap-2 min-[430px]:flex-row sm:w-auto sm:shrink-0">
                  <Button href="/contact" variant="secondary" size="sm" onClick={closeQuickView} className="w-full min-[430px]:w-auto">
                    Enquire
                  </Button>
                  <Button href={`/products/${p.slug}`} variant="primary" size="sm" arrow onClick={closeQuickView} className="w-full min-[430px]:w-auto">
                    View full category
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
