"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/content/site-content";
import { SectionHeading } from "@/components/shared/section-heading";

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(230,57,70,0.22),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A one-stop industrial safety partner"
          description="Certified expertise, customized engineering, and digital innovation—delivered with disciplined project support."
          light
          className="mb-12"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <Icon className="h-6 w-6 text-brand-red" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
