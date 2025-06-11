// app/page.tsx
import CompanyDropdown from "@/components/CompanyDropdown";
import ClientTable from "@/components/ClientTable";

export default async function HomePage() {
  

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Clientes</h1>
      <CompanyDropdown />
      <div className="mt-6">
        <ClientTable />
      </div>
    </main>
  );
}
