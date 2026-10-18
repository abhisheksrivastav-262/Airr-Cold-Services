import { NextRequest, NextResponse } from "next/server";
import { signToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check if user exists in database
    let admin = await prisma.adminUser.findUnique({
      where: { email: email.toLowerCase() },
    });

    // Default emergency fallback credentials if no seed has run yet
    const fallbackEmail = process.env.ADMIN_DEFAULT_EMAIL || "admin@airrcold.com";
    const fallbackPassword = process.env.ADMIN_DEFAULT_PASSWORD || "Admin@AirrCold2025";

    if (!admin && email.toLowerCase() === fallbackEmail.toLowerCase() && password === fallbackPassword) {
      const token = await signToken({
        id: "default-admin",
        email: fallbackEmail,
        name: "Iqbal Sanghe (Admin)",
        role: "SUPER_ADMIN",
      });

      const res = NextResponse.json({ success: true, user: { name: "Iqbal Sanghe", email: fallbackEmail, role: "SUPER_ADMIN" } });
      res.cookies.set("admin_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 8, // 8 hours
      });
      return res;
    }

    if (!admin) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, admin.passwordHash);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    if (!admin.isActive) {
      return NextResponse.json({ error: "Account is disabled" }, { status: 403 });
    }

    const token = await signToken({
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    });

    await prisma.adminUser.update({
      where: { id: admin.id },
      data: { lastLoginAt: new Date() },
    });

    const res = NextResponse.json({
      success: true,
      user: { name: admin.name, email: admin.email, role: admin.role },
    });

    res.cookies.set("admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours
    });

    return res;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
