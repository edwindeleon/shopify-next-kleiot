// app/api/logout/route.ts
import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  const cookie = serialize("auth", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0), // Expira inmediatamente
    sameSite: "lax",
  });

  const response = NextResponse.json({ message: "Sesión cerrada" });
  response.headers.set("Set-Cookie", cookie);
  return response;
}
