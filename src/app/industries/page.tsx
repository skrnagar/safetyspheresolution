import type { Metadata } from "next";
import { Industries } from "@/components/home/industries";
import { PageHero } from "@/components/shared/page-hero";
import { Cta } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Industries | Power, Oil & Gas, Metro, Pharma & More",
  description:
    "Safety Sphere Solution serves manufacturing, oil & gas, power, metro, rail, pharma, healthcare, mining, cement, steel, and infrastructure sectors.",
};

export default function IndustriesPage() {
  return (
    <>
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
