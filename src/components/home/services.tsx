import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site-content";
import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="Our Services"
            title="Integrated Fire, EHS, Training & Digital Safety"
            description="A complete service ecosystem designed for high-risk industrial environments."
            className="mb-12"
          />
        </AnimateIn>
        <div className="grid gap-6 lg:grid-cols-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const wide = i < 2;
            return (
              <AnimateIn
                key={service.slug}
                delay={i * 0.05}
                className={wide ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block h-full overflow-hidden border border-slate-200 bg-white transition hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width:768px) 100vw, 40vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold text-brand-navy">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="mt-1 h-4 w-4 text-brand-red transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {service.short}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.items.slice(0, 4).map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600"
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
