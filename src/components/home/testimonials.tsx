"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { useCallback } from "react";
import { testimonials } from "@/content/site-content";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say about our team"
          />
          <div className="flex gap-2">
            <Button variant="outline" onClick={scrollPrev} aria-label="Previous testimonial">
              Prev
            </Button>
            <Button variant="outline" onClick={scrollNext} aria-label="Next testimonial">
              Next
            </Button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((item) => (
              <article
                key={item.quote}
                className="min-w-0 flex-[0_0_100%] pr-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="h-full border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/5">
                  <div className="flex gap-1 text-brand-red" aria-label="5 star rating">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 font-display text-xl leading-snug text-brand-navy dark:text-white">
                    “{item.quote}”
                  </p>
                  <p className="mt-6 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {item.author}
                  </p>
                  <p className="text-xs text-slate-500">{item.company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
