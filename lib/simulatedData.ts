// lib/simulatedData.ts
// Data simulada para avanzar mientras tanto sin la API real.

import { Company } from "@/types";

export const mockCompanies: Company[] = [
  {
    id: "company-1",
    name: "Sirena Market",
    clients: [
      { id: "client-1", name: "Ana López", email: "ana@gmail.com" },
      { id: "client-2", name: "Luis Pérez", email: "luis@gmail.com" },
      { id: "client-3", name: "Carlos Ruiz", email: "carlos@gmail.com" },
      { id: "client-4", name: "Julia Méndez", email: "julia@gmail.com" },
      { id: "client-5", name: "Diego Castro", email: "diego@gmail.com" },
    ],
  },
  {
    id: "company-2",
    name: "Plaza Lama",
    clients: [
      { id: "client-6", name: "Sofía Vargas", email: "sofia@gmail.com" },
      { id: "client-7", name: "Mario Gómez", email: "mario@gmail.com" },
      { id: "client-8", name: "Elena Torres", email: "elena@gmail.com" },
      { id: "client-9", name: "David Ortiz", email: "david@gmail.com" },
      { id: "client-10", name: "Andrea Mora", email: "andrea@gmail.com" },
    ],
  },
  {
    id: "company-3",
    name: "Jumbo Express",
    clients: [
      { id: "client-11", name: "Roberto Díaz", email: "roberto@gmail.com" },
      { id: "client-12", name: "Laura Jiménez", email: "laura@gmail.com" },
      { id: "client-13", name: "Tomás Blanco", email: "tomas@gmail.com" },
      { id: "client-14", name: "Daniela Cruz", email: "daniela@gmail.com" },
      { id: "client-15", name: "Pedro Herrera", email: "pedro@gmail.com" },
    ],
  },
];
