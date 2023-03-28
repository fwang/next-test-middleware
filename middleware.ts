import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/rewrite")) {
    return Math.random() > 0.5
      ? NextResponse.rewrite(new URL("/rewrite1", request.url))
      : NextResponse.rewrite(new URL("/rewrite2", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/redirect")) {
    return Math.random() > 0.5
      ? NextResponse.redirect(new URL("/redirect1", request.url))
      : NextResponse.redirect(new URL("/redirect2", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/rewrite", "/redirect"],
};
