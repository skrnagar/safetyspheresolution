"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { projects } from "@/content/site-content";
import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), 2800);
    return () => window.clearInterval(id);
  }, [emblaApi]);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="Project Highlights"
            title="Trusted by leading industrial organizations"
            description="Representative engagements across manufacturing, automotive, and industrial operations."
            className="mb-10"
          />
        </AnimateIn>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {[...projects, ...projects].map((project, i) => (
              <div
                key={`${project.name}-${i}`}
                className="min-w-[220px] flex-[0_0_auto] border border-slate-200 bg-white p-6"
              >
                <p className="font-display text-2xl font-semibold text-brand-navy">
                  {project.name}
                </p>
                <p className="mt-2 text-sm text-slate-500">{project.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
