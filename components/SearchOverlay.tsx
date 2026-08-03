"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useUI } from "./UIProvider";
import { useDialogFocus } from "./ui/useDialogFocus";
import { products, searchSuggestions } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SearchOverlay() {
  const { overlay, closeOverlay, quickView, openQuickView } = useUI();
  const open = overlay === "search";
  const [q, setQ] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  useDialogFocus(dialogRef, open);

  /* Live filter across category name, sub-types and blurb. */
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return products.slice(0, 4);
    return products.filter((p) =>
      [p.name, p.short, p.blurb, ...p.types].join(" ").toLowerCase().includes(term),
    );
  }, [q]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setQ("");
        if (!quickView) document.getElementById("site-search-trigger")?.focus();
      }}
    >
      {open && (
        <motion.div
          className="fixed inset-0 z-[70]"
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div
            className="absolute inset-0 bg-[rgba(27,27,24,0.28)] backdrop-blur-[3px]"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 0.4 }}
            onClick={closeOverlay}
          />

          <motion.div
            ref={dialogRef}
            id="site-search-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Search products"
            tabIndex={-1}
            className="relative mx-auto max-h-[100dvh] w-full overflow-y-auto overscroll-contain bg-[#fdfdf7] shadow-[0_24px_80px_-24px_rgba(27,27,24,0.35)]"
            variants={{
              hidden: { y: "-100%" },
              show: { y: "0%" },
            }}
            transition={{ duration: 0.72, ease: EASE }}
          >
            <div className="shell py-6">
              {/* Input row */}
              <div className="flex items-center gap-3 border-b border-[rgba(27,27,24,0.12)] pb-5 pt-2 transition-colors focus-within:border-[#1b1b18] sm:gap-4">
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#61615b]">
                  <circle cx="7.2" cy="7.2" r="4.7" stroke="currentColor" strokeWidth="1.3" />
                  <path d="m10.8 10.8 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                <input
                  type="search"
                  aria-label="Search products"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search products…"
                  className="display display-md min-w-0 flex-1 bg-transparent text-[#1b1b18] placeholder:text-[#73736d] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={closeOverlay}
                  aria-label="Close search"
                  className="flex h-11 w-11 shrink-0 items-center justify-center gap-2 rounded-full text-[0.8125rem] text-[#61615b] ring-1 ring-inset ring-[rgba(27,27,24,0.14)] transition-colors hover:bg-[rgba(27,27,24,0.04)] hover:text-[#1b1b18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] sm:w-auto sm:px-4"
                >
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="sm:hidden" aria-hidden="true">
                    <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  <span className="hidden sm:inline">Close</span>
                  <kbd className="hidden font-sans text-[0.625rem] text-[#73736d] sm:inline">ESC</kbd>
                </button>
              </div>

              {/* Suggestions */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="eyebrow mr-1">Popular</span>
                {searchSuggestions.map((s, i) => (
                  <motion.button
                    key={s}
                    type="button"
                    onClick={() => setQ(s)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.04, ease: EASE }}
                    className="min-h-11 rounded-full bg-[rgba(27,27,24,0.045)] px-3.5 py-2 text-[0.8125rem] text-[#4a4a44] transition-colors duration-200 hover:bg-[rgba(255,201,55,0.32)] hover:text-[#1b1b18]"
                  >
                    {s}
                  </motion.button>
                ))}
              </div>

              {/* Results */}
              <div className="mb-4 mt-8">
                <div className="eyebrow mb-4">
                  {q.trim()
                    ? `${results.length} ${results.length === 1 ? "category" : "categories"}`
                    : "Browse categories"}
                </div>

                {results.length === 0 ? (
                  <p className="lede py-10 text-center text-[#61615b]">
                    Nothing matches “{q}”. Try “couch”, “trolley” or “HTM”.
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-3 pb-4 md:grid-cols-4">
                    {results.slice(0, 8).map((p, i) => (
                      <motion.button
                        key={p.slug}
                        type="button"
                        onClick={() => openQuickView(p)}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: EASE }}
                        className="group text-left"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white ring-1 ring-inset ring-[rgba(27,27,24,0.08)]">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            sizes="(max-width: 768px) 45vw, 20vw"
                            className="object-contain p-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                          />
                        </div>
                        <div className="mt-2.5 text-[0.875rem] font-medium leading-snug text-[#1b1b18]">
                          {p.short}
                        </div>
                        <div className="mt-0.5 text-[0.75rem] text-[#61615b]">{p.count}</div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
