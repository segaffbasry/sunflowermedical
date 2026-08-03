/* The petal fan is the one piece of the existing identity worth keeping.
   Redrawn as vector so it stays crisp, can go monochrome on a dark ground,
   and blooms in on load.

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
      <style>{`@keyframes petal-bloom { to { opacity: 1 } }`}</style>
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
    <div className="flex items-center gap-2.5">
      <Mark className="h-8 w-auto shrink-0" tone={petal} animate={animate} />
      <div className="leading-none">
        <div
          className="font-sans text-[1.4rem] font-semibold lowercase tracking-[-0.045em]"
          style={{ color: tone }}
        >
          sunflower
        </div>
        {!compact && (
          <div
            className="mt-[3px] text-[0.5rem] font-medium uppercase tracking-[0.18em]"
            style={{ color: tone, opacity: 0.5 }}
          >
            Medical
          </div>
        )}
      </div>
    </div>
  );
}
