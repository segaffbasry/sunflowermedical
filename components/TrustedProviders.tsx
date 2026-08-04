"use client";

import Image from "next/image";
import Button from "./ui/Button";
import Reveal, { RevealWords } from "./ui/Reveal";

const providers = [
  {
    name: "Nuffield Health",
    image: "/client-logos/nuffield-health.svg",
    width: 1020,
    height: 338,
  },
  {
    name: "Royal Air Force",
    image: "/client-logos/royal-air-force.png",
    width: 1024,
    height: 450,
  },
  {
    name: "British Red Cross",
    image: "/client-logos/british-red-cross.svg",
    width: 1024,
    height: 450,
  },
  {
    name: "St John Ambulance",
    image: "/client-logos/st-john-ambulance.svg",
    width: 1024,
    height: 450,
  },
  {
    name: "Heathrow",
    image: "/client-logos/heathrow.svg",
    width: 1024,
    height: 450,
  },
  {
    name: "Vets4Pets",
    image: "/client-logos/vets4pets.svg",
    width: 1022,
    height: 171,
  },
];

export default function TrustedProviders() {
  return (
    <section className="relative bg-[#f5f5f0] py-24 sm:py-32" aria-labelledby="trusted-heading">
      <div className="shell">
        <div className="overflow-hidden rounded-[28px] bg-[#fdfdf7] ring-1 ring-inset ring-[rgba(27,27,24,0.08)] lg:grid lg:grid-cols-[0.78fr_1.22fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-16">
            <Reveal>
              <div className="eyebrow mb-5">Who we supply</div>
            </Reveal>

            <h2 id="trusted-heading" className="display display-md max-w-xl">
              <RevealWords text="Trusted by Britain’s leading healthcare and private companies." />
            </h2>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[0.9375rem] leading-relaxed text-[#61615b]">
                We’re proud to provide furniture and medical solutions for some of Britain’s leading
                healthcare providers and major companies in the UK and abroad.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary" size="sm" arrow>
                  Contact our team
                </Button>
                <Button href="#customer-reviews" variant="secondary" size="sm">
                  Customer reviews
                </Button>
              </div>
            </Reveal>
          </div>

          <ul
            className="grid grid-cols-2 gap-px border-t border-[rgba(27,27,24,0.08)] bg-[rgba(27,27,24,0.08)] lg:border-l lg:border-t-0"
            aria-label="Organisations supplied by Sunflower Medical"
          >
            {providers.map((provider, index) => (
              <li
                key={provider.name}
                className="flex min-h-32 items-center justify-center bg-[#eff0ec] p-5 sm:min-h-40 sm:p-8 lg:min-h-44"
              >
                <Reveal delay={0.05 + index * 0.05} y={14} className="flex w-full justify-center">
                  <Image
                    src={provider.image}
                    alt={provider.name}
                    width={provider.width}
                    height={provider.height}
                    sizes="(max-width: 1023px) 42vw, 18vw"
                    className="h-auto max-h-16 w-auto max-w-[8.25rem] object-contain grayscale opacity-55 sm:max-h-20 sm:max-w-[11rem]"
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
