import { Industries } from "@/components/home/industries";
import { PageHero } from "@/components/shared/page-hero";
import { Cta } from "@/components/home/cta";
import { JsonLd, breadcrumbSchema } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo";
import { industriesServed } from "@/content/site-content";

export const metadata = buildMetadata({
  title: "Industries — Power, Oil & Gas, Metro, Pharma & More",
  description:
    "Safety Sphere Solution serves manufacturing, oil & gas, power, metro, rail, pharma, healthcare, mining, cement, steel, and infrastructure with integrated fire, EHS, and digital safety programs.",
  path: "/industries",
  keywords: [
    "Industrial Safety for Oil and Gas",
    "Power Plant Fire Safety",
    "Metro Railway Safety Consulting",
  ],
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        id="industries-breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <JsonLd
        id="industries-list"
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Industries Served by Safety Sphere Solution",
          itemListElement: industriesServed.map((industry, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: industry,
          })),
        }}
      />
      <PageHero
        eyebrow="Industries"
        title="Built for complex industrial environments"
        description="Sector-focused fire protection, EHS consulting, training, and digital safety programs."
      />
      <Industries />
      <Cta />
    </>
  );
}
