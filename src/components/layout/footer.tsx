import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/content/site-content";
import { siteConfig } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { BrandLogo } from "@/components/shared/brand-logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#07152f] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="inline-flex rounded-md bg-white px-3 py-2">
            <BrandLogo className="h-11" />
          </div>
          <p className="sr-only">Safety Sphere Solution</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            {siteConfig.tagline}. Empowering industries with safer, smarter and
            sustainable workplaces across India.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a
              href={formatPhoneHref(siteConfig.phone)}
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4 text-brand-red" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-4 w-4 text-brand-red" />
              {siteConfig.email}
            </a>
            {siteConfig.locations.map((loc) => (
              <p key={loc.short} className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-red" />
                {loc.short}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["About", "/about"],
              ["Industries", "/industries"],
              ["Careers", "/careers"],
              ["Blog", "/blog"],
              ["FAQ", "/faq"],
              ["Downloads", "/downloads"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Newsletter
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Get safety insights, compliance updates, and digital EHS trends.
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Fire Safety Consultant India · EHS · ESG · Digital Safety</p>
        </div>
      </div>
    </footer>
  );
}
