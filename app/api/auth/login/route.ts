import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { comparePassword } from "@/app/utils/hash";
import { generateToken } from "@/app/utils/jwt";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const token = generateToken({ id: user.id, email: user.email, role: user.role });

    return NextResponse.json({ token, user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
