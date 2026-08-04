import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/content/site-content";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Cta } from "@/components/home/cta";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Safety Sphere Solution`,
    description: service.short,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.short} />
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="font-display text-3xl font-semibold text-brand-navy dark:text-white">
              What’s included
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-brand-red pl-3 text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Request Consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">All Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
