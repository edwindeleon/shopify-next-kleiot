// app/page.tsx
import CompanyDropdown from "@/components/CompanyDropdown";
import ClientTable from "@/components/ClientTable";

export default async function HomePage() {
  

  return (
    <>
      <main className="mt-6">
        <h1 className="text-2xl font-bold mb-4">Gestión de Clientes</h1>

        <CompanyDropdown />

        <div className="mt-8">
          <ClientTable />
        </div>
      </main>
    </>
  );
}
