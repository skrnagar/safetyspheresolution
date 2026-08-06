import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site-content";
import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function Services() {
  return (
    <section id="services" className="py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="Our Services"
            title="Fire, Electrical, EHS, Construction HSE & Digital Safety"
            description="A complete service ecosystem covering compliance audits, engineered systems, training, and technology-led risk control."
            className="mb-8 sm:mb-12"
          />
        </AnimateIn>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateIn key={service.slug} delay={i * 0.03}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} — Safety Sphere Solution`}
                      fill
                      sizes="(max-width:768px) 100vw, 25vw"
                      quality={65}
                      loading="lazy"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-navy">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold leading-snug text-brand-navy">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-brand-red transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.short}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {service.items.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
