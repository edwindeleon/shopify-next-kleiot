// app/api/login/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { serialize } from "cookie";

const ADMIN_EMAIL = process.env.NEXT_ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.NEXT_ADMIN_PASSWORD;

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Credenciales incorrectas." },
      { status: 401 }
    );
  }

  const cookie = serialize("auth", "true", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 día
    secure: false, // Usa true solo en producción con HTTPS
    sameSite: "lax",
  });

  const response = NextResponse.json({ message: "Inicio de sesión exitoso" });
  response.headers.set("Set-Cookie", cookie);
  return response;
}