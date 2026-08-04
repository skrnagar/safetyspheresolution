import type { Metadata } from "next";
import { ContactPreview } from "@/components/home/contact-preview";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Contact | Free Fire & EHS Consultation",
  description:
    "Contact Safety Sphere Solution in Nagpur and Raipur. Call +91 77638 06992 or email safetyspheresolution@gmail.com for a free consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to our consultants"
        description="Schedule a free consultation for fire safety, EHS, ESG, training, or digital safety projects."
      />
      <ContactPreview />
    </>
  );
}
