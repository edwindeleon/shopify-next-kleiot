// app/api/companies/route.ts
// Endpoint para devolver el listado de compañías

import { NextResponse } from "next/server";

const query = `
  {
    customers(first: 100) {
      edges {
        node {
          tags
        }
      }
    }
  }
`;

export async function GET() {
  const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
  const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;

  if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_ACCESS_TOKEN) {
    return NextResponse.json(
      { error: "Faltan las variables de entorno de Shopify" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(`https://${SHOPIFY_STORE_DOMAIN}/admin/api/2025-04/graphql.json`, {
      method: "POST",
      headers: {
        "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();

    if (json.errors) {
      return NextResponse.json(
        { error: "Error en la consulta GraphQL", details: json.errors },
        { status: 500 }
      );
    }

    const companyTags = new Set<string>();

    for (const edge of json.data.customers.edges) {
      const tags: string[] = edge.node.tags;
      tags.forEach((tag) => {
        if (tag.startsWith("company:")) {
          companyTags.add(tag.replace("company:", "").trim());
        }
      });
    }

    return NextResponse.json({ companies: Array.from(companyTags) });
  } catch (error) {
    return NextResponse.json(
      { error: "Error inesperado", details: (error as Error).message },
      { status: 500 }
    );
  }
}
