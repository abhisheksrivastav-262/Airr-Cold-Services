import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const [
      totalBookings,
      pendingBookings,
      pendingPayments,
      completedBookings,
      totalEnquiries,
      recentBookings,
    ] = await Promise.all([
      prisma.booking.count(),
      prisma.booking.count({ where: { status: "PENDING" } }),
      prisma.booking.count({ where: { paymentStatus: "PENDING_VERIFICATION" } }),
      prisma.booking.count({ where: { status: "COMPLETED" } }),
      prisma.contactEnquiry.count({ where: { status: "NEW" } }),
      prisma.booking.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { customer: true },
      }),
    ]);

    return NextResponse.json({
      stats: {
        totalBookings,
        pendingBookings,
        pendingPayments,
        completedBookings,
        newEnquiries: totalEnquiries,
      },
      recentBookings,
      user: {
        name: session.name,
        email: session.email,
        role: session.role,
      },
    });
  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
