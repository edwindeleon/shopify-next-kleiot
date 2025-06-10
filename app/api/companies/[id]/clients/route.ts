// app/api/companies/[id]/clients/route.ts
// Endpoint para devolver los clientes de una compañía específica

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { mockCompanies } from "@/lib/simulatedData";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const company = mockCompanies.find((c) => c.id === params.id);

  if (!company) {
    return NextResponse.json({ error: "Company not found" }, { status: 404 });
  }

  return NextResponse.json(company.clients);
}
