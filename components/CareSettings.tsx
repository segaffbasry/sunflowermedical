"use client";

import Image from "next/image";
import Button from "./ui/Button";
import Reveal, { RevealWords } from "./ui/Reveal";

const settings = {
  featured: {
    image: "/photography/waiting-area-teal.png",
    alt: "Teal modular seating in a bright healthcare waiting area",
    label: "Shared waiting areas",
    position: "50% 64%",
  },
  wide: {
    image: "/photography/waiting-area-yellow.png",
    alt: "Blue and yellow seating in a hospital waiting area",
    label: "High-traffic spaces",
    position: "50% 58%",
  },
  quiet: {
    image: "/photography/consultation-waiting-room.png",
    alt: "Upholstered armchairs around a low table in a wood-panelled waiting room",
    label: "Private waiting rooms",
    position: "50% 58%",
  },
  corridor: {
    image: "/photography/clinical-corridor.jpeg",
    alt: "Blue-lit clinic corridor with frosted glass treatment-room walls",
    label: "Clinical circulation",
    position: "50% 48%",
  },
} as const;

function PhotoCard({
  scene,
  sizes,
  className,
}: {
  scene: (typeof settings)[keyof typeof settings];
  sizes: string;
  className: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-[22px] bg-[#e9eae6] ring-1 ring-inset ring-[rgba(27,27,24,0.08)] ${className}`}
    >
      <Image
        src={scene.image}
        alt={scene.alt}
        fill
        sizes={sizes}
        loading="lazy"
        style={{ objectPosition: scene.position }}
        className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
      />
      <figcaption className="absolute bottom-3 left-3 rounded-full bg-[rgba(253,253,247,0.94)] px-3.5 py-2 text-[0.75rem] font-medium text-[#1b1b18] shadow-[0_8px_24px_-18px_rgba(27,27,24,0.7)] sm:bottom-4 sm:left-4">
        {scene.label}
      </figcaption>
    </figure>
  );
}

export default function CareSettings() {
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="care-settings-heading">
      <div className="shell">
        <div className="grid gap-6 border-t border-[rgba(27,27,24,0.1)] pt-8 lg:grid-cols-[0.72fr_1.5fr] lg:gap-20">
          <Reveal>
            <div className="eyebrow">Healthcare environments</div>
          </Reveal>

          <div>
            <h2 id="care-settings-heading" className="display display-md max-w-3xl">
              <RevealWords text="Furniture that feels right in the room." />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-[#61615b]">
                From the first welcome to the treatment room, every piece should support a calmer,
                more durable and easier-to-use healthcare environment.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Button href="/customisation" variant="secondary" size="sm" arrow className="mt-7">
                Plan your space
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-3 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">
          <Reveal>
            <PhotoCard
              scene={settings.featured}
              sizes="(max-width: 1023px) 92vw, 42vw"
              className="aspect-[4/5]"
            />
          </Reveal>

          <div className="grid gap-3 lg:gap-4">
            <Reveal delay={0.08}>
              <PhotoCard
                scene={settings.wide}
                sizes="(max-width: 1023px) 92vw, 51vw"
                className="aspect-[16/9]"
              />
            </Reveal>

            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <Reveal delay={0.14}>
                <PhotoCard
                  scene={settings.quiet}
                  sizes="(max-width: 1023px) 45vw, 25vw"
                  className="aspect-[3/4]"
                />
              </Reveal>
              <Reveal delay={0.2}>
                <PhotoCard
                  scene={settings.corridor}
                  sizes="(max-width: 1023px) 45vw, 25vw"
                  className="aspect-[3/4]"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
