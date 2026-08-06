"use client";

import { MessageSquareText, Send, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LiveChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-40">
      {open ? (
        <div className="mb-3 w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-brand-navy px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Live Chat</p>
              <p className="text-xs text-white/70">Usually replies within minutes</p>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="rounded-md p-1 hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-3 p-4 text-sm">
            <div className="rounded-lg bg-slate-100 px-3 py-2 text-slate-700">
              Hi! How can Safety Sphere Solution help you today?
            </div>
            {sent ? (
              <div className="rounded-lg bg-brand-red/10 px-3 py-2 text-brand-navy">
                Thanks — our team will follow up shortly. For urgent help, call
                or WhatsApp us.
              </div>
            ) : null}
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (!message.trim()) return;
                setSent(true);
                setMessage("");
              }}
            >
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                aria-label="Chat message"
              />
              <Button type="submit" size="icon" aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      ) : null}

      <Button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="h-12 rounded-full px-4 shadow-lg"
        aria-expanded={open}
      >
        <MessageSquareText className="h-4 w-4" />
        Chat with us
      </Button>
    </div>
  );
}
