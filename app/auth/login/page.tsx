// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "Error desconocido");
      return;
    }

    router.push("/");
  } catch (error) {
    setError("Error al iniciar sesión.");
  }
};


  return (
    <>
    <header className="w-full bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-4xl font-bold text-indigo-600">
          GD <span className="text-sm text-gray-600">Grupo Duarte</span>
        </div>
      
      </div>
    </header>
    
    <main className="flex justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <div className="mb-6 text-center">
          <div className="text-2xl font-bold text-blue-900">
            <span className="text-4xl font-extrabold text-indigo-600"><h2 className="mb-4 text-2xl font-semibold">Iniciar Sesión</h2></span><br />
            
          </div>
        </div>
        
        {error && (
          <p className="mb-4 rounded bg-red-100 px-4 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <form onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }} 
              className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
          >
            Ingresar
          </button>
        </form>
      </div>
    </main>
    </>
  );
}
