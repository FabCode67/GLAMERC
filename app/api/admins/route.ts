import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

// Create an admin
export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const admin = await prisma.admin.create({
      data: { name, email, password },
    });

    return NextResponse.json(admin, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Admin creation failed" }, { status: 500 });
  }
}

// Get all admins
export async function GET() {
  try {
    const admins = await prisma.admin.findMany();
    return NextResponse.json(admins);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch admins" }, { status: 500 });
  }
}
