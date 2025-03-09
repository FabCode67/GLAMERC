import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

// Create a guest appointment
export async function POST(req: Request) {
  try {
    const { name, email, phone, clinicianId, date } = await req.json();

    const appointment = await prisma.guestAppointment.create({
      data: { name, email, phone, clinicianId, date },
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Guest appointment creation failed" }, { status: 500 });
  }
}

// Get all guest appointments
export async function GET() {
  try {
    const appointments = await prisma.guestAppointment.findMany({
      include: { clinician: true },
    });

    return NextResponse.json(appointments);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch guest appointments" }, { status: 500 });
  }
}
