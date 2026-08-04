"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <div className="flex gap-2">
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Work email"
          aria-label="Newsletter email"
          className="border-white/15 bg-white/5 text-white placeholder:text-slate-500"
        />
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "..." : "Join"}
        </Button>
      </div>
      {status === "ok" ? (
        <p className="text-xs text-emerald-400">Subscribed successfully.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-xs text-red-300">Something went wrong. Try again.</p>
      ) : null}
    </form>
  );
}
