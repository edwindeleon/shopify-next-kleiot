// components/CompanyDropdown.tsx
// Componente para el dropdown de las compañias

"use client";

import { Company } from "@/types";

interface CompanyDropdownProps {
  companies: Company[];
  selectedCompanyId: string;
  onSelectCompany: (companyId: string) => void;
}

function CompanyDropdown({
  companies,
  selectedCompanyId,
  onSelectCompany,
}: CompanyDropdownProps) {
  return (
    <div className="mb-4">
      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
        Seleccione una Empresa
      </label>
      <select
        id="company"
        value={selectedCompanyId}
        onChange={(e) => onSelectCompany(e.target.value)}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        <option value="">-- Seleccione --</option>
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CompanyDropdown;
