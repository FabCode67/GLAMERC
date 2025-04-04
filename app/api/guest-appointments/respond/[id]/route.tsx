import { NextResponse,NextRequest } from "next/server";
import prisma from "@/prisma/client";

export async function PUT(req:NextRequest) {
  try {
    const comminsionId = req.url.split("respond/")[1];
    const appointment = await prisma.guestAppointment.update({
      where: {
        id:comminsionId,
      },
      data: {
        status: "responded",
      },
    });

    return NextResponse.json({
      appointment,
      message: "The appointment is maraked as responded",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to responded", status: 500 });
  }
}
