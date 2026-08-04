import { NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  company: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // Email integration ready: connect Resend/SMTP via env vars.
    // For now we accept and log structured payloads for CMS/ops handoff.
    console.info("[contact]", {
      to: siteConfig.email,
      ...data,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Enquiry received",
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof z.ZodError
            ? "Invalid form data"
            : "Unable to process enquiry",
      },
      { status: 400 }
    );
  }
}
