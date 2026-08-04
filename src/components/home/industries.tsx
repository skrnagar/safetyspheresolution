import { industriesServed } from "@/content/site-content";
import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function Industries() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-[#09182f] md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Sector expertise across India’s industrial landscape"
            description="From process plants to metro infrastructure—tailored safety programs for complex operations."
            className="mb-10"
          />
        </AnimateIn>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {industriesServed.map((industry, i) => (
            <AnimateIn key={industry} delay={i * 0.02}>
              <div className="flex min-h-[88px] items-center justify-center border border-slate-200 bg-white px-3 text-center text-sm font-semibold text-brand-navy transition hover:border-brand-red/40 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-white">
                {industry}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
