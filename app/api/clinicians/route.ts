import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

// Create a clinician
export async function POST(req: Request) {
  try {
    const { name, email, phone, specialtyId } = await req.json();

    const clinician = await prisma.clinician.create({
      data: { name, email, phone, specialtyId },
    });

    return NextResponse.json(clinician, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Clinician creation failed" }, { status: 500 });
  }
}

// Get all clinicians
export async function GET() {
  try {
    const clinicians = await prisma.clinician.findMany({ include: { specialty: true } });
    return NextResponse.json(clinicians);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch clinicians" }, { status: 500 });
  }
}
