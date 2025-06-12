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
      <body className={inter.className}>
        <CompanyProvider>
          <div>
            {children}
          </div>
        </CompanyProvider>
      </body>
    </html>
  );
}
