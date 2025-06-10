// app/api/companies/route.ts
// Endpoint para devolver el listado de compañías y sus clientes
import { NextResponse } from "next/server";
import { mockCompanies } from "@/lib/simulatedData";

export async function GET() {
  try {
    return NextResponse.json(mockCompanies);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener los datos de las compañías." },
      { status: 500 }
    );
  }
}
