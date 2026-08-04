"use client";

import Reveal, { RevealWords } from "./ui/Reveal";

const reviews = [
  {
    name: "Andy Mayo",
    initials: "AM",
    age: "7 years ago",
    quote:
      "Fantastic customer service provided, I dealt with Jackie who was absolutely brilliant in updating me regarding my order of a podiatry chair. Great service will be back. Thanks Andy",
  },
  {
    name: "malonerosie drake",
    initials: "MD",
    age: "8 years ago",
    quote:
      "Great refurbishment at our GP surgery work carried out efficiently with minimum disruption highly recommend",
  },
  {
    name: "ATJ Hopkins",
    initials: "AH",
    age: "8 years ago",
    quote:
      "We regularly purchase medical furniture from Sunflower Medical UK and the service is excellent.",
  },
  {
    name: "Max Henderson",
    initials: "MH",
    age: "8 years ago",
    quote: "Good personal service provided and exceeded delivery expectations.",
  },
  {
    name: "Dale Henderson",
    initials: "DH",
    age: "2 years ago",
    quote: "Excellent place with friendly staff",
  },
] as const;

const cardLayouts = [
  "md:col-span-2 lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-6",
  "lg:col-span-6",
] as const;

function Stars({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="text-[0.9rem] tracking-[0.14em] text-[#f2b900]"
        aria-hidden="true"
      >
        ★★★★★
      </span>
      <span className={inverse ? "text-[#b8b8b1]" : "text-[#73736d]"}>
        <span className="sr-only">5 out of 5 stars, </span>
        <span aria-hidden="true" className="text-[0.6875rem] font-semibold uppercase tracking-[0.11em]">
          5-star review
        </span>
      </span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="customer-reviews"
      aria-labelledby="customer-reviews-heading"
      className="relative bg-[#f2f2ed] py-24 sm:py-32"
    >
      <div className="shell">
        <div className="mb-10 grid gap-5 border-t border-[rgba(27,27,24,0.1)] pt-8 lg:grid-cols-[0.72fr_1.5fr] lg:gap-20">
          <Reveal>
            <div className="eyebrow">Customer reviews</div>
          </Reveal>

          <div>
            <h2 id="customer-reviews-heading" className="display display-md max-w-3xl">
              <RevealWords text="Service people come back for." />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-[#61615b]">
                Five-star feedback from customers who trust our team to deliver with care,
                clarity and minimal disruption.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid auto-rows-fr gap-3 md:grid-cols-2 lg:grid-cols-12">
          {reviews.map((review, index) => {
            const featured = index === 0;

            return (
              <Reveal
                key={review.name}
                delay={index * 0.06}
                className={`${cardLayouts[index]} h-full`}
              >
                <article
                  className={`flex h-full min-h-64 flex-col rounded-[22px] p-6 ring-1 ring-inset sm:p-7 ${
                    featured
                      ? "bg-[#1b1b18] text-[#fdfdf7] ring-white/10 lg:min-h-[25rem] lg:p-9"
                      : "bg-[#fdfdf7] text-[#1b1b18] ring-[rgba(27,27,24,0.08)]"
                  }`}
                >
                  <Stars inverse={featured} />

                  <blockquote className="flex flex-1 items-center py-9">
                    <p
                      className={`font-medium leading-[1.42] tracking-[-0.025em] ${
                        featured
                          ? "text-[clamp(1.35rem,2.2vw,2.2rem)]"
                          : "text-[clamp(1.08rem,1.35vw,1.35rem)]"
                      }`}
                    >
                      “{review.quote}”
                    </p>
                  </blockquote>

                  <footer
                    className={`flex items-center gap-3 border-t pt-5 ${
                      featured ? "border-white/12" : "border-[rgba(27,27,24,0.09)]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[0.75rem] font-semibold tracking-[-0.02em] ${
                        featured ? "bg-[#ffc937] text-[#1b1b18]" : "bg-[#e8e8e2] text-[#4a4a44]"
                      }`}
                    >
                      {review.initials}
                    </span>
                    <span className="min-w-0">
                      <cite className="block truncate text-[0.875rem] font-semibold not-italic">
                        {review.name}
                      </cite>
                      <span
                        className={`mt-0.5 block text-[0.75rem] ${
                          featured ? "text-[#b8b8b1]" : "text-[#73736d]"
                        }`}
                      >
                        Google review · {review.age}
                      </span>
                    </span>
                  </footer>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
