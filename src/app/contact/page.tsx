import { ContactPreview } from "@/components/home/contact-preview";
import { PageHero } from "@/components/shared/page-hero";
import { JsonLd, breadcrumbSchema } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact — Free Fire & EHS Consultation",
  description: `Contact Safety Sphere Solution in Nagpur and Raipur. Call ${siteConfig.phone} or email ${siteConfig.email} for a free fire safety, EHS, ESG, or digital safety consultation.`,
  path: "/contact",
  keywords: [
    "Contact Fire Safety Consultant",
    "EHS Consultant Nagpur",
    "Fire NOC Consultant Raipur",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        id="contact-breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd
        id="contact-page"
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Safety Sphere Solution",
          url: "https://safetyspheresolution.vercel.app/contact",
          mainEntity: {
            "@type": "Organization",
            name: siteConfig.name,
            telephone: siteConfig.phone,
            email: siteConfig.email,
          },
        }}
      />
      <PageHero
        eyebrow="Contact"
        title="Talk to our consultants"
        description="Schedule a free consultation for fire safety, EHS, ESG, training, or digital safety projects."
      />
      <ContactPreview />
    </>
  );
}
