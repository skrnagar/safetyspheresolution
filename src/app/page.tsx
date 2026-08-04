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

export default function HomePage() {
  return (
    <>
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
