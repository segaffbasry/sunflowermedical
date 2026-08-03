"use client";

import { Mark } from "./Logo";
import { proof } from "@/lib/content";

/* Slow credential ticker. Pure CSS so it costs nothing on scroll. */

export default function Marquee() {
  const items = [...proof.marks, ...proof.marks];

  return (
    <div className="relative overflow-hidden border-y border-[rgba(27,27,24,0.1)] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#fdfdf7] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#fdfdf7] to-transparent" />

      <div className="flex w-max animate-[slide_38s_linear_infinite] items-center gap-10">
        {items.map((m, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10">
            <span className="whitespace-nowrap text-[0.9375rem] text-[#4a4a44]">{m}</span>
            <Mark className="h-4 w-auto shrink-0 opacity-60" />
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
