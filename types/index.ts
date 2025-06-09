// types/index.ts
// Creamos los tipos globales para representar compañías y clientes.

export type Client = {
  id: string;
  name: string;
  email: string;
  phone?: string;
};

export type Company = {
  id: string;
  name: string;
  clients: Client[];
};
