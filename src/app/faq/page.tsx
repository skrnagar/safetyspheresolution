import type { Metadata } from "next";
import { faqs } from "@/content/site-content";
import { PageHero } from "@/components/shared/page-hero";
import { Cta } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "FAQ | Fire NOC, Safety Audits & EHS Consulting",
  description:
    "Frequently asked questions about Fire NOC, fire protection systems, industrial training, and digital safety solutions.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Quick answers about our consulting, systems, training, and digital services."
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-3 px-4 sm:px-6 lg:px-8">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-slate-200 bg-white open:shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-brand-navy dark:text-white">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-brand-red transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600 dark:border-white/10 dark:text-slate-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
