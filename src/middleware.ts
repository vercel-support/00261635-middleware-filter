import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Paths the middleware should run on
export const config = {
  matcher: [
    '/((?!api|_next|favicon|favicon\.ico)\.*)',
  ],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Log the current path
  console.log(`🚀 Middleware invoked for path: ${pathname}`);

  // Additional detailed logging
  console.log({
    url: request.url,
    method: request.method,
    headers: Object.fromEntries(request.headers),
  });

  // Example of modifying the response
  const response = NextResponse.next();
  response.headers.set("x-middleware-cache", "no-cache");

  return response;
}
