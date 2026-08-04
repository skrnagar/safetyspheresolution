import { siteConfig } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: "IN",
    address: siteConfig.locations.map((loc) => ({
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressRegion: loc.state,
      addressCountry: "IN",
    })),
    sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter],
    knowsAbout: siteConfig.keywords,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
