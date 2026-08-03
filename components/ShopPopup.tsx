"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useUI } from "./UIProvider";
import { Mark } from "./Logo";
import Button from "./ui/Button";
import { useDialogFocus } from "./ui/useDialogFocus";
import { shop } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/* The Saniswiss "SHOP" pattern: the button doesn't navigate, it opens a
   routing panel. Sunflower's three routes to purchase are direct,
   distributor, and the trade portal. */

export default function ShopPopup() {
  const { overlay, closeOverlay } = useUI();
  const open = overlay === "shop";
  const dialogRef = useRef<HTMLDivElement>(null);
  useDialogFocus(dialogRef, open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[70] overflow-y-auto overscroll-contain" initial="hidden" animate="show" exit="hidden">
          <motion.div
            className="absolute inset-0 bg-[rgba(27,27,24,0.4)] backdrop-blur-[4px]"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 0.45 }}
            onClick={closeOverlay}
          />

          <div className="relative flex min-h-full items-start justify-center p-4 sm:items-center sm:py-8">
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="shop-dialog-title"
              tabIndex={-1}
              className="relative w-full max-w-4xl overflow-hidden rounded-[28px] bg-[#fdfdf7] shadow-[0_40px_100px_-30px_rgba(27,27,24,0.5)]"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.97 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="relative p-7 sm:p-11">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Mark className="h-7 w-auto" />
                    <h2 id="shop-dialog-title" className="display text-[1.9rem] leading-none">{shop.heading}</h2>
                  </div>
                  <button
                    type="button"
                    onClick={closeOverlay}
                    aria-label="Close"
                    className="flex h-11 w-11 items-center justify-center rounded-full text-[#61615b] ring-1 ring-inset ring-[rgba(27,27,24,0.14)] transition-colors hover:bg-[rgba(27,27,24,0.05)] hover:text-[#1b1b18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18]"
                  >
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                      <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <div className="mt-9 grid gap-px overflow-hidden rounded-2xl bg-[rgba(27,27,24,0.09)] sm:grid-cols-3">
                  {shop.blocks.map((b, i) => (
                    <motion.div
                      key={b.title.join(" ")}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: EASE }}
                      className="group flex flex-col justify-between bg-[#fdfdf7] p-6 transition-colors duration-300 hover:bg-[#f7f6ef]"
                    >
                      <div>
                        <h3 className="display text-[1.5rem] leading-[1.1]">
                          {b.title[0]}
                          <br />
                          <span className="text-[#61615b] transition-colors duration-300 group-hover:text-[#1b1b18]">
                            {b.title[1]}
                          </span>
                        </h3>
                        <p className="mt-3 text-[0.875rem] leading-relaxed text-[#61615b]">{b.text}</p>
                      </div>
                      <div className="mt-7">
                        <Button
                          variant={b.kind === "shop" ? "primary" : "secondary"}
                          size="sm"
                          arrow
                          href={b.href}
                          target={b.external ? "_blank" : undefined}
                          rel={b.external ? "noreferrer" : undefined}
                          onClick={closeOverlay}
                        >
                          {b.action}
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="mt-6 text-center text-[0.8125rem] text-[#73736d]">
                  Trade customer? Portal access includes live stock and co-branded artwork.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
