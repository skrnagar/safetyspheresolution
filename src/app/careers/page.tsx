import Link from "next/link";
import { careers } from "@/content/site-content";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { JsonLd, breadcrumbSchema } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers — Join Safety Sphere Solution",
  description:
    "Explore career opportunities in fire engineering, EHS consulting, and digital safety with Safety Sphere Solution in Nagpur, Raipur, and project sites across India.",
  path: "/careers",
  keywords: ["Fire Safety Jobs", "EHS Consultant Careers", "Safety Engineer Jobs India"],
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        id="careers-breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />
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
              className="border border-slate-200 bg-white p-6 md:p-8"
              itemScope
              itemType="https://schema.org/JobPosting"
            >
              <meta itemProp="hiringOrganization" content="Safety Sphere Solution" />
              <meta itemProp="employmentType" content={role.type} />
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2
                    className="font-display text-2xl font-semibold text-brand-navy"
                    itemProp="title"
                  >
                    {role.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500" itemProp="jobLocation">
                    {role.location} · {role.type}
                  </p>
                  <p
                    className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600"
                    itemProp="description"
                  >
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
