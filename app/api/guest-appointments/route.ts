import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(req: Request) {
  try {
    const { name, email, phone, clinicianId,gender,appoint_date,appoint_time,reason} = await req.json();
    const appointment = await prisma.guestAppointment.create({
      data: { name, email, phone, clinicianId,gender, appoint_date,appoint_time,reason },
    });

    return NextResponse.json( { status: 201,message:"Appointment is placed successfully",appointment });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Guest appointment creation failed" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const appointments = await prisma.guestAppointment.findMany({
      include: { clinician: true },
    });

    return NextResponse.json({appointments});
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch guest appointments" }, { status: 500 });
  }
}
