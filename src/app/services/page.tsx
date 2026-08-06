import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site-content";
import { PageHero } from "@/components/shared/page-hero";
import { AnimateIn } from "@/components/shared/animate-in";
import { Cta } from "@/components/home/cta";
import { JsonLd, breadcrumbSchema } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services — Fire Safety, EHS, Training & Digital Safety",
  description:
    "Explore Fire Safety Engineering, EHS consulting, professional training, AI safety monitoring, and audit services from Safety Sphere Solution across India.",
  path: "/services",
  keywords: [
    "Fire Safety Services India",
    "EHS Consulting Services",
    "Industrial Safety Training Services",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        id="services-breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="Complete Fire, EHS & Digital Safety ecosystem"
        description="From fire protection systems and compliance consulting to AI monitoring and workforce training."
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:px-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateIn key={service.slug} delay={i * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand-navy/15 hover:shadow-xl md:grid-cols-[300px_1fr]"
                >
                  <div className="relative min-h-[220px]">
                    <Image
                      src={service.image}
                      alt={`${service.title} — Safety Sphere Solution`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent md:bg-gradient-to-r" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="font-display text-2xl font-semibold text-brand-navy md:text-3xl">
                        {service.title}
                      </h2>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-brand-red transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                      {service.short}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.items.slice(0, 6).map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {item}
                        </li>
                      ))}
                      {service.items.length > 6 ? (
                        <li className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold text-brand-red">
                          +{service.items.length - 6} more
                        </li>
                      ) : null}
                    </ul>
                    <p className="mt-6 text-sm font-semibold text-brand-red">
                      View full service details →
                    </p>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </section>
      <Cta />
    </>
  );
}
