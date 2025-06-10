// app/api/companies/route.ts
// Endpoint para devolver el listado de compañías y sus clientes

import type { NextRequest } from 'next/server';
import { NextResponse } from "next/server";
import { mockCompanies } from "@/lib/simulatedData";

export async function GET(request: NextRequest) {
  return NextResponse.json(mockCompanies);
}
