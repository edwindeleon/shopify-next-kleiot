// lib/simulatedData.ts
// Data simulada para avanzar mientras tanto sin la API real.

import { Company } from "@/types";

export const mockCompanies: Company[] = [
  {
    id: "company-1",
    name: "Sirena Market",
    clients: [
      { id: "client-1", name: "Ana López", email: "ana@gmail.com", phone: "809-834-3847" },
      { id: "client-2", name: "Luis Pérez", email: "luis@gmail.com", phone: "829-745-2198" },
      { id: "client-3", name: "Carlos Ruiz", email: "carlos@gmail.com", phone: "849-673-5621" },
      { id: "client-4", name: "Julia Méndez", email: "julia@gmail.com", phone: "809-983-1245" },
      { id: "client-5", name: "Diego Castro", email: "diego@gmail.com", phone: "829-521-6783" },
    ],
  },
  {
    id: "company-2",
    name: "Plaza Lama",
    clients: [
      { id: "client-6", name: "Sofía Vargas", email: "sofia@gmail.com", phone: "849-456-7890" },
      { id: "client-7", name: "Mario Gómez", email: "mario@gmail.com", phone: "809-312-8765" },
      { id: "client-8", name: "Elena Torres", email: "elena@gmail.com", phone: "829-564-1234" },
      { id: "client-9", name: "David Ortiz", email: "david@gmail.com", phone: "849-675-4321" },
      { id: "client-10", name: "Andrea Mora", email: "andrea@gmail.com", phone: "809-783-2456" },
    ],
  },
  {
    id: "company-3",
    name: "Jumbo Express",
    clients: [
      { id: "client-11", name: "Roberto Díaz", email: "roberto@gmail.com", phone: "829-431-9876" },
      { id: "client-12", name: "Laura Jiménez", email: "laura@gmail.com", phone: "809-246-8753" },
      { id: "client-13", name: "Tomás Blanco", email: "tomas@gmail.com", phone: "849-573-2198" },
      { id: "client-14", name: "Daniela Cruz", email: "daniela@gmail.com", phone: "829-875-6342" },
      { id: "client-15", name: "Pedro Herrera", email: "pedro@gmail.com", phone: "809-659-7831" },
    ],
  },
];
