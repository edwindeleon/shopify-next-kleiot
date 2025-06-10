// components/CompanyDropdown.tsx
// Componente para el dropdown de las compañias

"use client";

import { Company } from "@/types";
import { useState } from "react";
import ClientTable from "./ClientTable";

type Props = {
  companies: Company[];
};

export default function CompanyDropdown({ companies }: Props) {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Seleccione una Empresa
        </label>
        <select
          id="company"
          onChange={(e) => {
            const selected = companies.find((c) => c.id === e.target.value) || null;
            setSelectedCompany(selected);
          }}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">-- Seleccionar --</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCompany && (
        <ClientTable clients={selectedCompany.clients} />
      )}
    </div>
  );
}
