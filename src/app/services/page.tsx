import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/site-content";
import { PageHero } from "@/components/shared/page-hero";
import { AnimateIn } from "@/components/shared/animate-in";
import { Cta } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Services | Fire Safety, EHS, Training & Digital Safety",
  description:
    "Explore Fire Safety Engineering, EHS consulting, professional training, AI safety monitoring, and audit services from Safety Sphere Solution.",
};

export default function ServicesPage() {
  return (
    <>
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
                  className="grid overflow-hidden border border-slate-200 bg-white transition hover:shadow-lg dark:border-white/10 dark:bg-white/5 md:grid-cols-[280px_1fr]"
                >
                  <div className="relative min-h-[200px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="280px"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-brand-navy dark:text-white">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {service.short}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-brand-red">
                      View details →
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
