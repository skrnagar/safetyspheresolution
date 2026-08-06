import dynamic from "next/dynamic";
import { About } from "@/components/home/about";
import { Cta } from "@/components/home/cta";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { Services } from "@/components/home/services";
import { Stats } from "@/components/home/stats";
import { Values } from "@/components/home/values";
import { VisionMission } from "@/components/home/vision-mission";
import { FaqPreview } from "@/components/home/faq-preview";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  speakableSchema,
} from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const WhyChoose = dynamic(() =>
  import("@/components/home/why-choose").then((m) => m.WhyChoose)
);
const Industries = dynamic(() =>
  import("@/components/home/industries").then((m) => m.Industries)
);
const Projects = dynamic(() =>
  import("@/components/home/projects").then((m) => m.Projects)
);
const Experts = dynamic(() =>
  import("@/components/home/experts").then((m) => m.Experts)
);
const Testimonials = dynamic(() =>
  import("@/components/home/testimonials").then((m) => m.Testimonials)
);
const ContactPreview = dynamic(() =>
  import("@/components/home/contact-preview").then((m) => m.ContactPreview)
);

export const metadata = buildMetadata({
  title: `${siteConfig.name} | Fire Safety Compliance Audit & EHS Consultant India`,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "Fire Safety Compliance Audit",
    "Electrical Safety Audit India",
    "Construction HSE Management",
    "Fire Safety Consultant Nagpur",
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
      <Process />
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
