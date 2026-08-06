import { coreValues } from "@/content/site-content";
import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function Values() {
  return (
    <section id="values" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="Core Values"
            title="Principles that guide every engagement"
            description="Modern enterprise delivery grounded in integrity, innovation, and measurable excellence."
            align="center"
            className="mb-12"
          />
        </AnimateIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value, i) => {
            const Icon = value.icon;
            return (
              <AnimateIn key={value.title} delay={i * 0.04}>
                <article className="group h-full border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-lg">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy transition group-hover:bg-brand-red group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-brand-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {value.description}
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
