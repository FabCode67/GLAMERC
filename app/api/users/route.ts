import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import bcrypt from "bcryptjs";
export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      password,
      specialist = "",
      dateOfBirth,
      insurance = "",
      gender = "",
      role
    } = await req.json();
    const hashpassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        role,
        phone,
        password:hashpassword,
        specialist,
        dateOfBirth,
        insurance,
        gender,
      },
    });

    return NextResponse.json({
      status: 201,
      message: "Account is created successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Account creation failed" },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const users = await prisma.user.findMany({where:{role:"USER"}});
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
