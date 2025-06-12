// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthRoute = pathname.startsWith("/auth/login") || pathname.startsWith("/api/login");

  const authCookie = request.cookies.get("auth");

  // Si el usuario NO está autenticado y no está en la ruta de login, redirige
  if (!authCookie && !isAuthRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Si está en /auth/login y ya está autenticado, redirige al home
  if (authCookie && pathname.startsWith("/auth/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|static).*)"],
};
