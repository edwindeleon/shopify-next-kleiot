// app/api/customers/route.ts

import { shouldSkipGeneratingVar } from "@mui/material";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
  const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;
  const searchParams = req.nextUrl.searchParams;
  const company = searchParams.get("company");

  if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_ACCESS_TOKEN) {
    return NextResponse.json(
      { error: "Faltan las variables de entorno de Shopify" },
      { status: 500 }
    );
  }

  try {
        const query = `
        {
        customers(first: 100, query: "tag:\'company:${company}\'") {
            edges {
            node {
                id
                displayName
                email
                phone
                defaultAddress {
                phone
                }
            }
            }
        }
        }
        `;

        const response = await fetch(
            `https://${SHOPIFY_STORE_DOMAIN}/admin/api/2025-04/graphql.json`,
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
            },
            body: JSON.stringify({ query }),
            }
        );

        if (!response.ok) {
            const text = await response.text();
            return NextResponse.json(
            { error: "Error al traer los clientes", detalles: text },
            { status: response.status }
            );
        }

        const result = await response.json();
        const clients = result.data.customers.edges.map((edge: any) => ({
            id: edge.node.id,
            name: edge.node.displayName,
            email: edge.node.email,
            phone: edge.node.phone ||
            edge.node.defaultAddress?.phone ||
            "",
        }));

        return NextResponse.json({ clients });
  } catch (error) {
    return NextResponse.json(
      { error: "Error inesperado", details: (error as Error).message },
      { status: 500 }
    );
  }
}
