// components/CompanyDropdown.tsx
// Componente para el dropdown de las compañias

"use client";
import { useEffect, useState } from "react";
import { useCompanyContext } from "@/context/CompanyContext";


export default function CompanyDropdown() {
  const { selectedCompanyId, setSelectedCompanyId } = useCompanyContext();
  const [companies, setCompanies] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/companies", { cache: "no-store" });
      if (!response.ok) throw new Error("Error al cargar las compañías");

      const data: { companies: string[] } = await response.json();
      setCompanies(data.companies);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  
  return (
      <div className="mb-4">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Seleccione una Empresa
        </label>
        <div className="relative w-1/2">
          <select
            id="company"
            value={selectedCompanyId}
            onChange={(e) => setSelectedCompanyId(e.target.value)}
            disabled={loading}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm appearance-none"
          >
            <option value="">-- Seleccionar --</option>
            {companies.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
  );
}

