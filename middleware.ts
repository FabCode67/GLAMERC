import { NextResponse } from "next/server";
import * as jose from "jose";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const authHeader = req.headers.get("Authorization");
  if (
    req.nextUrl.pathname.startsWith("/api/appointments") ||
    req.nextUrl.pathname.startsWith("/api/clinicians")
  ) {
    if (!authHeader) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Authentication required",
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  const tokenn = authHeader&&authHeader.split(" ")[1];
  const isValidToken = tokenn&&await verifyToken(tokenn);
  if (req.nextUrl.pathname.startsWith("/admin") && token.name =="ADMIN") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (
    req.nextUrl.pathname.startsWith("/doctor") &&
    token.name =="DOCTOR"
  ) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}
async function verifyToken(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.NEXT_JWT_SECRETE);

    const { payload } = await jose.jwtVerify(token, secret, {
      algorithms: ["HS256"],
    });
    return payload ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export const config = {
  matcher: ["/admin/:path*", "/doctor/:path*","/api/appointments/:path*","/api/clinicians/:path*"],
};
