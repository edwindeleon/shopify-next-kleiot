"use client";

import { useState } from "react";
import CompanyDropdown from "@/components/CompanyDropdown";
import ClientTable from "@/components/ClientTable";
import { mockCompanies } from "@/lib/simulatedData";
import { Client } from "@/types";

function HomePage() {
  const [selectedCompanyId, setSelectedCompanyId] = useState("");

  const handleSelectCompany = (companyId: string) => {
    setSelectedCompanyId(companyId);
  };

  const selectedCompany = mockCompanies.find(
    (company) => company.id === selectedCompanyId
  );

  const filteredClients: Client[] = selectedCompany?.clients ?? [];

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Clientes</h1>

      <CompanyDropdown
        companies={mockCompanies}
        selectedCompanyId={selectedCompanyId}
        onSelectCompany={handleSelectCompany}
      />

      <ClientTable clients={filteredClients} />
    </main>
  );
}

export default HomePage;
