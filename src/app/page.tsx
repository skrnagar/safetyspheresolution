import { About } from "@/components/home/about";
import { Cta } from "@/components/home/cta";
import { Experts } from "@/components/home/experts";
import { Hero } from "@/components/home/hero";
import { Industries } from "@/components/home/industries";
import { Projects } from "@/components/home/projects";
import { Services } from "@/components/home/services";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { Values } from "@/components/home/values";
import { VisionMission } from "@/components/home/vision-mission";
import { WhyChoose } from "@/components/home/why-choose";
import { FaqPreview } from "@/components/home/faq-preview";
import { ContactPreview } from "@/components/home/contact-preview";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  speakableSchema,
} from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} | Fire Safety, EHS & Digital Safety Consultant India`,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "Fire Safety Consultant Nagpur",
    "Fire Safety Consultant Raipur",
    "Industrial EHS Consulting India",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        id="home-breadcrumb"
        data={breadcrumbSchema([{ name: "Home", path: "/" }])}
      />
      <JsonLd id="home-faq" data={faqSchema()} />
      <JsonLd id="home-speakable" data={speakableSchema()} />
      <Hero />
      <Stats />
      <About />
      <VisionMission />
      <Values />
      <WhyChoose />
      <Services />
      <Industries />
      <Projects />
      <Experts />
      <Testimonials />
      <FaqPreview />
      <Cta />
      <ContactPreview />
    </>
  );
}
