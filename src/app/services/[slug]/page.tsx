import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { services } from "@/content/site-content";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Cta } from "@/components/home/cta";
import { AnimateIn } from "@/components/shared/animate-in";
import {
  JsonLd,
  breadcrumbSchema,
  serviceSchema,
} from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} Consultant India`,
    description: `${service.short} Trusted ${service.title.toLowerCase()} by Safety Sphere Solution — Nagpur & Raipur, pan-India delivery.`,
    path: `/services/${service.slug}`,
    keywords: [service.title, ...service.items.slice(0, 8)],
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        id="service-breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd id="service-schema" data={serviceSchema(service)} />
      <PageHero
        eyebrow="Services"
        title={service.title}
        description={service.short}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:px-8">
          <AnimateIn>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-lg shadow-brand-navy/20">
              <Icon className="h-7 w-7" />
            </div>
            <h2 className="font-display text-3xl font-semibold text-brand-navy md:text-4xl">
              What’s included
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Delivered by certified consultants with end-to-end support—from
              assessment and design through implementation, training, and
              ongoing compliance.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Request Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">All Services</Link>
              </Button>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <div className="sticky top-28 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <div className="relative h-72 md:h-[420px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 font-display text-2xl text-white">
                  {service.title}
                </p>
              </div>
              <div className="space-y-3 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">
                  Why this service
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  {service.short} Our team aligns solutions to NBC, IS, NFPA,
                  and applicable national/international standards for your
                  sector and site conditions.
                </p>
                <Button asChild className="w-full">
                  <a href="tel:+917763806992">Call +91 77638 06992</a>
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl font-semibold text-brand-navy md:text-3xl">
            Explore related services
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((item) => {
              const RelatedIcon = item.icon;
              return (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-lg"
                >
                  <RelatedIcon className="h-6 w-6 text-brand-red" />
                  <h4 className="mt-4 font-display text-xl font-semibold text-brand-navy">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                    View service
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
