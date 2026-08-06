import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";

export function ContactPreview() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <AnimateIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s discuss your fire, EHS or digital safety needs"
            description="Reach our team in Nagpur and Raipur for consultations, audits, training, and system projects."
          />
          <div className="mt-8 space-y-4 text-sm">
            <a
              href={formatPhoneHref(siteConfig.phone)}
              className="flex items-center gap-3 text-brand-navy hover:text-brand-red"
            >
              <Phone className="h-4 w-4 text-brand-red" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-brand-navy hover:text-brand-red"
            >
              <Mail className="h-4 w-4 text-brand-red" />
              {siteConfig.email}
            </a>
            {siteConfig.locations.map((loc) => (
              <p
                key={loc.short}
                className="flex items-center gap-3 text-slate-600"
              >
                <MapPin className="h-4 w-4 text-brand-red" />
                {loc.short}
              </p>
            ))}
          </div>
          <div className="mt-8 overflow-hidden border border-slate-200">
            <iframe
              title="Safety Sphere Solution locations map"
              src="https://www.google.com/maps?q=Nagpur+Maharashtra&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <div className="border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="font-display text-2xl font-semibold text-brand-navy">
              Request a free consultation
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Share your requirement and our consultants will respond promptly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
