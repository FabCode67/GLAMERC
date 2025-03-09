import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

// Create a new user
export async function POST(req: Request) {
  try {
    const { name, email, phone, password } = await req.json();

    const user = await prisma.user.create({
      data: { name, email, phone, password },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "User creation failed" }, { status: 500 });
  }
}

// Get all users
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
