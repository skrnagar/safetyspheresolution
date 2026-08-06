"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Select a service interest"),
  message: z.string().min(10, "Tell us a bit more about your requirement"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "Fire Safety Engineering",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="name">
            Full Name
          </label>
          <Input id="name" {...register("name")} />
          {errors.name ? (
            <p className="mt-1 text-xs text-brand-red">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="email">
            Work Email
          </label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email ? (
            <p className="mt-1 text-xs text-brand-red">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="phone">
            Phone
          </label>
          <Input id="phone" {...register("phone")} />
          {errors.phone ? (
            <p className="mt-1 text-xs text-brand-red">{errors.phone.message}</p>
          ) : null}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="company">
            Company
          </label>
          <Input id="company" {...register("company")} />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="service">
          Service Interest
        </label>
        <select
          id="service"
          className="flex h-11 w-full rounded-md border border-slate-200 bg-white px-3.5 text-sm"
          {...register("service")}
        >
          <option>Fire Safety Engineering</option>
          <option>EHS Engineering & Consulting</option>
          <option>Professional EHS Training</option>
          <option>Digital Automation & AI</option>
          <option>Safety Consultancy & Audits</option>
          <option>General Consultation</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="message">
          Message
        </label>
        <Textarea id="message" {...register("message")} />
        {errors.message ? (
          <p className="mt-1 text-xs text-brand-red">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>

      {status === "ok" ? (
        <p className="text-sm text-emerald-600">
          Thank you. Your enquiry has been received.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-brand-red">
          Unable to send right now. Please email {`safetyspheresolution@gmail.com`}.
        </p>
      ) : null}
    </form>
  );
}
