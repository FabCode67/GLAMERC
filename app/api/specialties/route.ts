import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

// Create a specialty
export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    const specialty = await prisma.specialty.create({
      data: { name },
    });

    return NextResponse.json(specialty, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Specialty creation failed" }, { status: 500 });
  }
}

// Get all specialties
export async function GET() {
  try {
    const specialties = await prisma.specialty.findMany();
    return NextResponse.json(specialties);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch specialties" }, { status: 500 });
  }
}
