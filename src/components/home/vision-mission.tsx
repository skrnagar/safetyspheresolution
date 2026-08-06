import { mission, vision } from "@/content/site-content";
import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function VisionMission() {
  return (
    <section id="vision" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="Purpose"
            title="Vision & Mission"
            description="A clear commitment to safer operations and sustainable industrial growth."
          />
        </AnimateIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <AnimateIn>
            <article className="h-full border border-slate-200 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                Vision
              </p>
              <p className="mt-4 font-display text-2xl leading-snug text-brand-navy">
                {vision}
              </p>
            </article>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <article className="h-full border border-slate-200 bg-brand-navy p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                Mission
              </p>
              <p className="mt-4 font-display text-2xl leading-snug">{mission}</p>
            </article>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
