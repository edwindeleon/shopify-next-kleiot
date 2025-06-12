// app/page.tsx
import CompanyDropdown from "@/components/CompanyDropdown";
import ClientTable from "@/components/ClientTable";
import Header from "@/components/Header";
export default async function HomePage() {
  

  return (
    <>
    <Header />
    <div className="max-w-6xl mx-auto px-4 py-6">
      <main className="mt-6">
        <h1 className="text-2xl font-bold mb-4">Gestión de Clientes</h1>

        <CompanyDropdown />

        <div className="mt-8">
          <ClientTable />
        </div>
      </main>
      </div>
    </>
  );
}
