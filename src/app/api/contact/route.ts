import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().regex(/^\+?[\d\s-]{10,14}$/, "Enter a valid phone number"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  serviceCategory: z.string().optional(),
  serviceType: z.string().optional(),
  pinCode: z.string().max(10).optional(),
  message: z.string().min(5, "Message is too short"),
});

// Simple rate limiting (in-memory, per process — replace with Redis for production)
const rateMap = new Map<string, { count: number; ts: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > 60_000) {
    rateMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please wait a moment." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0]?.message || "Validation failed." },
      { status: 422 }
    );
  }

  const { fullName, phone, email, serviceCategory, serviceType, pinCode, message } = result.data;

  try {
    await prisma.contactEnquiry.create({
      data: {
        fullName,
        phone,
        email: email || null,
        serviceCategory: serviceCategory || null,
        serviceType: serviceType || null,
        pinCode: pinCode || null,
        message,
        status: "NEW",
      },
    });

    return NextResponse.json({ success: true, message: "Enquiry received. We'll be in touch shortly." });
  } catch (err) {
    console.error("[contact] DB error:", err);
    return NextResponse.json({ error: "Unable to save your enquiry. Please call us directly." }, { status: 500 });
  }
}
