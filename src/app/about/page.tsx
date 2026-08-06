import { About } from "@/components/home/about";
import { Experts } from "@/components/home/experts";
import { Values } from "@/components/home/values";
import { VisionMission } from "@/components/home/vision-mission";
import { PageHero } from "@/components/shared/page-hero";
import { JsonLd, breadcrumbSchema } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us — Industrial Fire & EHS Consulting Company",
  description:
    "Learn about Safety Sphere Solution — trusted Fire Safety, EHS, ESG, and Digital Safety consultants serving industries across India from Nagpur and Raipur.",
  path: "/about",
  keywords: [
    "About Safety Sphere Solution",
    "Fire Safety Company India",
    "EHS Consulting Firm Nagpur",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        id="about-breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="Innovation-led industrial safety consulting"
        description="Delivering integrated Fire, Environment, Health & Safety, ESG, and Digital solutions for safer workplaces."
      />
      <About />
      <VisionMission />
      <Values />
      <Experts />
    </>
  );
}
