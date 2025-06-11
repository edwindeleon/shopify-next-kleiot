import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CompanyProvider } from "@/context/CompanyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopify Next Kleiot",
  description: "Manejo de múltiples empresas y sus clientes con el API de Shopify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`bg-[#f5faff] text-gray-800 ${inter.className}`}>
        <CompanyProvider>
          <header className="w-full border-b bg-white px-6 py-4 shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-extrabold text-gray-900 tracking-tight">GD</span>
                <span className="text-sm font-medium text-gray-500">Grupo Duarte</span>
              </div>
            </div>
          </header>
          <div className="max-w-6xl mx-auto px-4 py-6">
            
            {children}
          </div>
        </CompanyProvider>
      </body>
    </html>
  );
}
