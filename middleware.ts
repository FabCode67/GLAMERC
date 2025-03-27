import { NextResponse } from "next/server";
import * as jose from "jose";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest): Promise<NextResponse> {
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
  if (!authHeader) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  const token = authHeader.split(" ")[1];
  const isValidToken = await verifyToken(token);
  if (req.nextUrl.pathname.startsWith("/admin") && isValidToken) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (
    req.nextUrl.pathname.startsWith("/doctor") &&
    isValidToken
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
