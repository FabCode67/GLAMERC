import { NextResponse } from "next/server";
import { verifyToken } from "./utils/jwt";

export async function middleware(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const token = authHeader.split(" ")[1];
    verifyToken(token);
    return NextResponse.next();
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}

export const config = {
  matcher: "/api/protected/:path*",
};
