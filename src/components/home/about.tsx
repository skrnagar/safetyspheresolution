import Image from "next/image";
import {
  aboutIntro,
  aboutPoints,
  industriesServed,
} from "@/content/site-content";
import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,31,69,0.06),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80"
              alt="Engineers reviewing industrial safety systems on site"
              width={1400}
              height={980}
              className="h-full min-h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-display text-2xl text-white">
              Innovation-led integrated industrial safety
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.08}>
          <SectionHeading
            eyebrow="About Us"
            title="Trusted partner for Fire, EHS, ESG & Digital Safety"
            description={aboutIntro}
          />
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutPoints.map((point) => (
              <div
                key={point}
                className="border-l-2 border-brand-red/80 pl-3 text-sm font-medium text-brand-navy dark:text-white"
              >
                {point}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Industries served include{" "}
            {industriesServed.slice(0, 12).join(", ")}, and more.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
