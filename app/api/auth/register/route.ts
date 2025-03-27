import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { hashPassword } from "@/app/utils/hash";

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      gender,
      password,
      confirmPassword,
      insurance,
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

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await prisma.user.create({
      data: {
        name: `${firstName} ${lastName}`, // Combine first and last name
        email,
        phone,
        password: hashedPassword,
        role: 'USER', // Default role
        // Optional fields
        ...(dateOfBirth && { dateOfBirth: new Date(dateOfBirth) }),
        ...(gender && { gender }),
        ...(insurance && { insurance })
      }
    });

    // Remove sensitive information before sending response
    const { password: _, ...userResponse } = user;

    return NextResponse.json(userResponse, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ 
      error: "Registration failed", 
      details: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}