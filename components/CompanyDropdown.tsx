// components/CompanyDropdown.tsx
// Componente para el dropdown de las compañias

"use client";
import { Company } from "@/types";
import { useCompanyContext } from "@/context/CompanyContext";

type CompanyDropdownProps = {
  companies: Company[];
};

export default function CompanyDropdown({ companies }: CompanyDropdownProps) {
  const { selectedCompanyId, setSelectedCompanyId } = useCompanyContext();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCompanyId(event.target.value);
  }
  return (
      <div className="mb-4">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Seleccione una Empresa
        </label>
        <select
          id="company-select"
          value={selectedCompanyId}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">-- Seleccionar --</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>
  );
}

