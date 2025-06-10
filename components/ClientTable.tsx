"use client";

import { useEffect, useState } from "react";
import { useCompanyContext } from "@/context/CompanyContext";
import { Client } from "@/types";

function ClientTable() {
  const { selectedCompanyId } = useCompanyContext();
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    if (!selectedCompanyId) {
      setClients([]);
      return;
    }

    const fetchClients = async () => {
      try {
        const res = await fetch(`/api/companies/${selectedCompanyId}/clients`);
        const data = await res.json();
        setClients(data);
      } catch (error) {
        console.error("Error al cargar clientes:", error);
      }
    };

    fetchClients();
  }, [selectedCompanyId]);

  if (!selectedCompanyId) {
    return <p className="text-gray-600">Seleccione una empresa para ver sus clientes.</p>;
  }

  if (clients.length === 0) {
    return <p className="text-gray-600">No hay clientes disponibles para esta empresa.</p>;
  }


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nombre</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Teléfono</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="px-4 py-2">{client.name}</td>
              <td className="px-4 py-2">{client.email}</td>
              <td className="px-4 py-2">{client.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;
