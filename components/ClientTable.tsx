"use client";

import { useEffect, useState } from "react";
import { useCompanyContext } from "@/context/CompanyContext";
import { Client } from "@/types";
import {
  TextField,
} from "@mui/material";

function ClientTable() {
  const { selectedCompanyId } = useCompanyContext();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleClientClick = (client: Client) => {
    setSelectedClient(client);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedClient(null);
  };

  const fetchClients = async () => {
    if (!selectedCompanyId) {
      setClients([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/customers?company=${encodeURIComponent(selectedCompanyId)}`, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Error al cargar los clientes");
      }

      const data = await response.json();
      setClients(data.clients);
    } catch (err) {
      setError((err as Error).message);
      setClients([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [selectedCompanyId]);

    const normalize = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const filteredClients = clients.filter((client) =>
    normalize(`${client.name} ${client.email} ${client.phone}`).includes(normalize(searchTerm))
    );

console.log('clients array', filteredClients)
  if (!selectedCompanyId) {
    return <p>Por favor, selecciona una compañía para ver sus clientes.</p>;
  }

  if (loading) return <p>Cargando clientes...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (!clients.length) return <p>No hay clientes para esta compañía.</p>;

  return (
    <>
    <TextField
        label="Buscar cliente"
        variant="outlined"
        fullWidth
        size="small"
        className="mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="min-w-full border border-gray-300 rounded-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b">Nombre</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <tr
              key={client.id}
              className="cursor-pointer hover:bg-gray-200"
              onClick={() => handleClientClick(client)}
            >
              <td className="px-4 py-2 border-b">{client.name}</td>
              <td className="px-4 py-2 border-b">{client.email}</td>
              <td className="px-4 py-2 border-b">{client.phone ?? "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && selectedClient && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Detalles del Cliente</h2>
            <p>
              <strong>Nombre:</strong> {selectedClient.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedClient.email}
            </p>
            <p>
              <strong>Teléfono:</strong> {selectedClient.phone ?? "N/A"}
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ClientTable;
