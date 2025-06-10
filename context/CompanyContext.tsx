// context/CompanyContext.tsx
// Este es un contexto global para mantener la persistencia de los datos asociados a una compañia entre componeentes
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CompanyContextType = {
  selectedCompanyId: string;
  setSelectedCompanyId: (id: string) => void;
};

export const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export function useCompanyContext() {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompanyContext must be used within a CompanyProvider");
  }
  return context;
}

export function CompanyProvider({ children }: { children: ReactNode }) {
  const [selectedCompanyId, setSelectedCompanyId] = useState("");

  return (
    <CompanyContext.Provider value={{ selectedCompanyId, setSelectedCompanyId }}>
      {children}
    </CompanyContext.Provider>
  );
}
