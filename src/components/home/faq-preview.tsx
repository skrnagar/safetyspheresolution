import Link from "next/link";
import { faqs } from "@/content/site-content";
import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { GsapReveal } from "@/components/shared/gsap-reveal";

export function FaqPreview() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-[#09182f] md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers to common safety consulting questions"
            className="mb-10"
          />
        </AnimateIn>
        <GsapReveal className="space-y-3">
          {faqs.slice(0, 4).map((faq) => (
            <details
              key={faq.question}
              data-reveal
              className="group border border-slate-200 bg-white open:shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-brand-navy marker:content-none dark:text-white">
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
        </GsapReveal>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/faq">View all FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
