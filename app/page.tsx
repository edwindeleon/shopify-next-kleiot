// app/page.tsx
import CompanyDropdown from "@/components/CompanyDropdown";
import ClientTable from "@/components/ClientTable";
import { Company } from "@/types";

async function getCompanies(): Promise<Company[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/companies`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al cargar las empresas");
  }

  return res.json();
}

export default async function HomePage() {
  const companies = await getCompanies();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Clientes</h1>
      <CompanyDropdown companies={companies} />
    </main>
  );
}
