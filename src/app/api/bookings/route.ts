import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { generateBookingRef } from "@/lib/utils";

const schema = z.object({
  category: z.enum(["AC", "RO"]),
  fullName: z.string().min(2),
  phone: z.string().regex(/^\+?[\d\s-]{10,14}$/),
  email: z.string().email().optional().or(z.literal("")),
  fullAddress: z.string().min(5),
  pinCode: z.string().regex(/^\d{6}$/, "PIN code must be 6 digits"),
  serviceType: z.string().min(2),
  acType: z.string().optional(),
  acBrand: z.string().optional(),
  roBrand: z.string().optional(),
  roType: z.string().optional(),
  problemDesc: z.string().min(5),
  preferredDate: z.string().min(1),
  preferredSlot: z.string().optional(),
  transactionId: z.string().optional(),
});

const rateMap = new Map<string, { count: number; ts: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > 60_000) {
    rateMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many submissions. Please wait." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0]?.message || "Validation failed." },
      { status: 422 }
    );
  }

  const d = result.data;

  try {
    // Upsert customer (look up by phone first)
    let customer = await prisma.customer.findFirst({ where: { phone: d.phone } });
    if (!customer) {
      customer = await prisma.customer.create({
        data: { name: d.fullName, phone: d.phone, email: d.email || null },
      });
    }

    const preferredDate = new Date(d.preferredDate);
    if (isNaN(preferredDate.getTime())) {
      return NextResponse.json({ error: "Invalid preferred date." }, { status: 422 });
    }

    const booking = await prisma.booking.create({
      data: {
        referenceNumber: generateBookingRef(),
        category: d.category,
        customerId: customer.id,
        serviceType: d.serviceType,
        acType: d.acType || null,
        acBrand: d.acBrand || null,
        roBrand: d.roBrand || null,
        roType: d.roType || null,
        problemDesc: d.problemDesc,
        fullAddress: d.fullAddress,
        pinCode: d.pinCode,
        preferredDate,
        preferredSlot: d.preferredSlot || null,
        status: "PENDING",
        paymentStatus: d.transactionId ? "PENDING_VERIFICATION" : "PENDING_VERIFICATION",
        transactionId: d.transactionId || null,
        bookingFee: 199,
      },
    });

    // Record payment entry
    await prisma.paymentRecord.create({
      data: {
        bookingId: booking.id,
        transactionId: d.transactionId || null,
        amount: 199,
        status: "PENDING_VERIFICATION",
      },
    });

    return NextResponse.json({
      success: true,
      referenceNumber: booking.referenceNumber,
      bookingId: booking.id,
      message: "Booking submitted successfully! We'll confirm your appointment shortly.",
    });
  } catch (err) {
    console.error("[booking] DB error:", err);
    return NextResponse.json(
      { error: "Unable to save booking. Please call us directly." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const ref = searchParams.get("ref");
  if (!ref) return NextResponse.json({ error: "Missing reference." }, { status: 400 });

  const booking = await prisma.booking.findUnique({
    where: { referenceNumber: ref },
    select: {
      referenceNumber: true,
      status: true,
      paymentStatus: true,
      serviceType: true,
      category: true,
      preferredDate: true,
      preferredSlot: true,
      createdAt: true,
      customer: { select: { name: true, phone: true } },
    },
  });

  if (!booking) return NextResponse.json({ error: "Booking not found." }, { status: 404 });
  return NextResponse.json(booking);
}
