import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);
  NextResponse.redirect(new URL("/", request.url));
  if (pathname === "/logout") {
    const response = NextResponse.redirect(new URL("/asd", request.url));
    response.cookies.delete("auth_token");
    return response;
  }
}

export const config = {
  matcher: ["/logout"],
};
