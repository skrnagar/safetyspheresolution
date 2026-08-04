import type { Metadata } from "next";
import { About } from "@/components/home/about";
import { Experts } from "@/components/home/experts";
import { Values } from "@/components/home/values";
import { VisionMission } from "@/components/home/vision-mission";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "About Us | Industrial Fire & EHS Consulting Company",
  description:
    "Learn about Safety Sphere Solution — trusted Fire Safety, EHS, ESG, and Digital Safety consultants serving industries across India.",
};

export default function AboutPage() {
  return (
    <>
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
