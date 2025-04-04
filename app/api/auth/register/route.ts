import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(req: Request) {
  try {
    const {
      email,
      password,
      confirmPassword,
      termsAccepted
    } = await req.json();

    // Validation checks
    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
    }

    if (!termsAccepted) {
      return NextResponse.json({ error: "Terms and conditions must be accepted" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 });
    }

    return 
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ 
      error: "Registration failed", 
      details: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}