"use client";

import { Client } from "@/types";

interface ClientTableProps {
  clients: Client[];
}

function ClientTable({ clients }: ClientTableProps) {
  if (clients.length === 0) {
    return (
      <p className="text-gray-500 italic">
        No hay clientes disponibles para esta empresa.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Nombre
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Correo electrónico
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Teléfono
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                {client.name}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                {client.email}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800">
                {client.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;
