// components/Header.tsx

"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });
    router.push("/auth/login");
  };

  return (
    <header className="w-full bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-4xl font-bold text-indigo-600">
          GD <span className="text-sm text-gray-600">Grupo Duarte</span>
        </div>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow"
      >
        Cerrar sesión
      </button>
      </div>
    </header>
  );
}
