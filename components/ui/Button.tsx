"use client";

import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "sun" | "inverse";
type Size = "sm" | "md";

const base =
  "cta-button group relative inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-[-0.015em] " +
  "transition-[background-color,border-color,box-shadow,color,transform] duration-200 ease-out whitespace-nowrap " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1b18] focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-[#fdfdf7] disabled:opacity-40";

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[0.875rem]",
  md: "h-[3.25rem] px-7 text-[0.9375rem]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[#2463eb] text-white shadow-[0_6px_14px_-4px_rgba(36,99,235,0.52)] hover:-translate-y-0.5 hover:bg-[#1d54cf] hover:shadow-[0_12px_24px_-8px_rgba(36,99,235,0.62)]",
  secondary:
    "bg-transparent text-[#1b1b18] ring-1 ring-inset ring-[rgba(27,27,24,0.18)] hover:bg-[rgba(27,27,24,0.055)] hover:ring-[rgba(27,27,24,0.3)]",
  ghost: "bg-[rgba(27,27,24,0.05)] text-[#1b1b18] hover:bg-[rgba(27,27,24,0.09)]",
  sun: "bg-[#ffc937] text-[#1b1b18] shadow-[0_6px_14px_-5px_rgba(232,174,20,0.6)] hover:-translate-y-0.5 hover:bg-[#f5bd21] hover:shadow-[0_12px_24px_-8px_rgba(232,174,20,0.72)]",
  inverse:
    "bg-[rgba(253,253,247,0.06)] text-[#fdfdf7] ring-1 ring-inset ring-[rgba(253,253,247,0.24)] hover:bg-[rgba(253,253,247,0.12)] hover:ring-[rgba(253,253,247,0.42)]",
};

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="transition-transform duration-200 ease-out group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M2.6 7h8.8M7.7 3.3 11.4 7l-3.7 3.7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
  target?: "_blank";
  rel?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  ariaLabel,
  target,
  rel,
}: Props) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <Arrow />}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        aria-label={ariaLabel}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
