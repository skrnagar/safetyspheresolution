import { processSteps } from "@/content/site-content";
import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function Process() {
  return (
    <section id="process" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="How We Work"
            title="From risk discovery to sustained compliance"
            description="A structured delivery model inspired by leading audit and HSE practices—adapted for industrial operations in India."
            className="mb-12"
          />
        </AnimateIn>
        <div className="grid gap-4 md:grid-cols-5">
          {processSteps.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimateIn key={item.step} delay={i * 0.05}>
                <article className="h-full border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold tracking-[0.2em] text-brand-red">
                    {item.step}
                  </p>
                  <div className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
