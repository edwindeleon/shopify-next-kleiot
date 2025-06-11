// lib/shopify.ts
const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;

if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_ACCESS_TOKEN) {
  throw new Error("Faltan las variables de entorno de Shopify");
}

const API_VERSION = "2025-04";

export async function fetchCustomers() {
  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/admin/api/${API_VERSION}/customers.json`;

  const response = await fetch(endpoint, {
    headers: {
      "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN as string,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("Error obteniendo datos de clientes desde Shopify", await response.text());
    throw new Error("Error al obtener los datos de clientes desde Shopify");
  }

  const data = await response.json();
  return data.customers;
}
