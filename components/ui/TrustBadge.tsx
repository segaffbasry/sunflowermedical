export default function TrustBadge() {
  return (
    <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-[rgba(27,27,24,0.045)] px-4 py-2.5 ring-1 ring-inset ring-[rgba(27,27,24,0.06)]">
      <span className="sr-only">5 out of 5 stars. </span>
      <span className="flex shrink-0 items-center gap-0.5 text-[#e8ae14]" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <svg key={index} width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path
              d="m8 1.7 1.88 3.8 4.2.61-3.04 2.96.72 4.18L8 11.28l-3.76 1.97.72-4.18L1.92 6.1l4.2-.61L8 1.7Z"
              fill="currentColor"
            />
          </svg>
        ))}
      </span>
      <span className="h-4 w-px shrink-0 bg-[rgba(27,27,24,0.14)]" aria-hidden="true" />
      <span className="text-[0.75rem] font-medium tracking-[-0.012em] text-[#4a4a44] sm:text-[0.8125rem]">
        Trusted by <strong className="font-semibold text-[#1b1b18]">1,000+ businesses</strong>
      </span>
    </div>
  );
}
