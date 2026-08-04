import type { Metadata } from "next";
import { FileDown } from "lucide-react";
import { downloads } from "@/content/site-content";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Downloads | Company Profile & Brochure",
  description:
    "Download the Safety Sphere Solution company profile and service brochure.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Company profile & service brochure"
        description="Share these resources with stakeholders evaluating fire, EHS, and digital safety partners."
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {downloads.map((item) => (
            <article
              key={item.title}
              className="border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5"
            >
              <FileDown className="h-6 w-6 text-brand-red" />
              <h2 className="mt-4 font-display text-2xl font-semibold text-brand-navy dark:text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
              <Button asChild className="mt-6">
                <a href={item.file} download>
                  Download PDF
                </a>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
