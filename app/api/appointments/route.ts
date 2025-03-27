import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { z } from "zod";

const appointmentSchema = z.object({
  date: z.string(),
  clinicianId: z.string(),
  userId: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
});

// Create appointment
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = appointmentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const session = await getServerSession(authOptions);

    if (session) {
      const userId = session.user.id;
      const appointment = await prisma.appointment.create({
        data: {
          date: new Date(body.date),
          clinicianId: body.clinicianId,
          userId: userId,
        },
      });
      return NextResponse.json({ message: "Appointment created", appointment }, { status: 201 });
    } else {
      if (!body.name || !body.email) {
        return NextResponse.json({ error: "Name and email are required for guest appointments" }, { status: 400 });
      }

      const guestAppointment = await prisma.guestAppointment.create({
        data: {
          date: new Date(body.date),
          clinicianId: body.clinicianId,
          name: body.name,
          email: body.email,
          phone: body.phone,
        },
      });

      return NextResponse.json({ message: "Guest appointment created", guestAppointment }, { status: 201 });
    }
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// Get appointments based on user role
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { role, id } = session.user;

    if (role === "ADMIN") {
      // Admin: Get all appointments
      const appointments = await prisma.appointment.findMany({
        include: { user: true, clinician: true },
      });
      return NextResponse.json({ appointments }, { status: 200 });
    }

    if (role === "CLINICIAN") {
      // Clinician: Get only appointments assigned to them
      const appointments = await prisma.appointment.findMany({
        where: { clinicianId: id },
        include: { user: true },
      });
      return NextResponse.json({ appointments }, { status: 200 });
    }

    if (role === "USER") {
      // Patient: Get only their own appointments
      const appointments = await prisma.appointment.findMany({
        where: { userId: id },
        include: { clinician: true },
      });
      return NextResponse.json({ appointments }, { status: 200 });
    }

    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
