// app/api/companies/[id]/clients/route.ts
// Endpoint para devolver los clientes de una compañía específica

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { mockCompanies } from "@/lib/simulatedData";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const companyId = params.id;
  const company = mockCompanies.find((c) => c.id === companyId);

  if (!company) {
    return NextResponse.json(
      { error: "Compañía no encontrada" },
      { status: 404 }
    );
  }

  return NextResponse.json(company.clients);
}
