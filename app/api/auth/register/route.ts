import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { hashPassword } from "@/app/utils/hash";

export async function POST(req: Request) {
  try {
    const { name, email, phone, password, role } = await req.json();

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 });
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: { name, email, phone, password: hashedPassword, role },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
