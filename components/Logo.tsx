/* The petal fan is the one piece of the existing identity worth keeping.
   Redrawn as vector so it stays crisp, can go monochrome on a dark ground,
   and can optionally bloom in where animation is appropriate.

   The bloom is a plain CSS opacity keyframe on purpose: each petal carries
   a static `transform` attribute for its rotation, and any JS/CSS transform
   animation would replace that attribute rather than compose with it. */

/* Narrow enough that the petals stay visibly separate at 28px tall,
   tapering left-to-right the way the original mark does. Every petal's
   inner tip sits INNER units from the pivot so the fan springs from one
   point instead of drifting. */
const INNER = 18;

const PETALS = [
  { a: -54, rx: 5.6, ry: 18 },
  { a: -31, rx: 5.9, ry: 20 },
  { a: -8, rx: 5.4, ry: 18.5 },
  { a: 15, rx: 4.5, ry: 15 },
  { a: 36, rx: 3.4, ry: 11 },
  { a: 55, rx: 2.4, ry: 7.5 },
].map((p) => ({ ...p, d: INNER + p.ry }));

export function Mark({
  className = "",
  tone = "var(--color-sun)",
  animate = false,
}: {
  className?: string;
  tone?: string;
  animate?: boolean;
}) {
  return (
    /* viewBox is cropped to the measured petal bbox so the mark has no dead space. */
    <svg viewBox="12 8 78 51" className={className} aria-hidden="true">
      <g fill={tone}>
        {PETALS.map((p, i) => (
          <ellipse
            key={i}
            cx={60}
            cy={64 - p.d}
            rx={p.rx}
            ry={p.ry}
            transform={`rotate(${p.a} 60 64)`}
            style={
              animate
                ? {
                    opacity: 0,
                    animation: `petal-bloom 0.7s cubic-bezier(0.16,1,0.3,1) forwards`,
                    animationDelay: `${0.12 + i * 0.075}s`,
                  }
                : undefined
            }
          />
        ))}
      </g>
      {animate && <style>{`@keyframes petal-bloom { to { opacity: 1 } }`}</style>}
    </svg>
  );
}

export default function Logo({
  compact = false,
  tone = "#1b1b18",
  petal = "var(--color-sun)",
  animate = false,
}: {
  compact?: boolean;
  tone?: string;
  petal?: string;
  animate?: boolean;
}) {
  return (
    <div className="inline-flex flex-col">
      <div className="flex items-center gap-2 sm:gap-2.5">
        <Mark className="h-7 w-auto shrink-0 sm:h-8" tone={petal} animate={animate} />
        <div
          className="font-sans text-[1.2rem] font-semibold lowercase leading-none tracking-[-0.045em] sm:text-[1.4rem]"
          style={{ color: tone }}
        >
          sunflower
        </div>
      </div>

      {!compact && (
        <div data-logo-strapline className="mt-1 w-full">
          <span
            className="block h-[1.5px] w-full"
            style={{ backgroundColor: petal }}
            aria-hidden="true"
          />
          <div
            className="flex items-center justify-center gap-1 whitespace-nowrap py-[3px] font-sans text-[clamp(0.34rem,1.7vw,0.5rem)] font-semibold uppercase leading-none tracking-[0.08em] sm:gap-1.5"
            style={{ color: tone }}
          >
            <span>UK Manufacturer</span>
            <span style={{ color: petal }} aria-hidden="true">
              •
            </span>
            <span>Healthcare Furniture</span>
          </div>
          <span
            className="block h-[1.5px] w-full"
            style={{ backgroundColor: petal }}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
}
