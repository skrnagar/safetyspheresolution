import { experts } from "@/content/site-content";
import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function Experts() {
  return (
    <section id="experts" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="Our Experts"
            title="Subject-matter specialists across Fire, EHS & Digital"
            description="Multidisciplinary consultants with certifications and field experience in high-risk industries."
            className="mb-12"
          />
        </AnimateIn>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert, i) => (
            <AnimateIn key={expert.role} delay={i * 0.05}>
              <article className="h-full border border-slate-200 bg-white p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-navy to-[#16386f] font-display text-lg font-semibold text-white">
                  {expert.role
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <h3 className="text-lg font-semibold text-brand-navy">
                  {expert.role}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {expert.focus}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {expert.certifications.map((cert) => (
                    <li
                      key={cert}
                      className="text-xs font-medium uppercase tracking-wide text-brand-red"
                    >
                      {cert}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
