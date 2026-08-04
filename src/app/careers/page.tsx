import type { Metadata } from "next";
import Link from "next/link";
import { careers } from "@/content/site-content";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers | Join Safety Sphere Solution",
  description:
    "Explore career opportunities in fire engineering, EHS consulting, and digital safety with Safety Sphere Solution.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build safer workplaces with us"
        description="Join a team of fire, EHS, ESG, and digital safety professionals serving industries across India."
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl space-y-4 px-4 sm:px-6 lg:px-8">
          {careers.map((role) => (
            <article
              key={role.title}
              className="border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-brand-navy dark:text-white">
                    {role.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    {role.location} · {role.type}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {role.summary}
                  </p>
                </div>
                <Button asChild>
                  <Link
                    href={`mailto:safetyspheresolution@gmail.com?subject=${encodeURIComponent(
                      `Application: ${role.title}`
                    )}`}
                  >
                    Apply Now
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
