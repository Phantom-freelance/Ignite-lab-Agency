"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-black flex">
          <aside className="w-64 bg-zinc-900 border-r border-zinc-800 fixed h-full overflow-y-auto">
            <div className="p-6">
              <Link href="/" className="text-2xl font-black text-yellow-400">BBR Agency</Link>
              <p className="text-zinc-500 text-sm font-bold mb-8">CLIENT PORTAL</p>
              <nav className="space-y-2">
                <Link href="/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold ${pathname === "/dashboard" ? "bg-yellow-400 text-black" : "text-zinc-400 hover:bg-zinc-800"}`}>📊 Dashboard</Link>
                <Link href="/dashboard/orders" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold ${pathname === "/dashboard/orders" ? "bg-yellow-400 text-black" : "text-zinc-400 hover:bg-zinc-800"}`}>📦 Orders</Link>
                <Link href="/dashboard/billing" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold ${pathname === "/dashboard/billing" ? "bg-yellow-400 text-black" : "text-zinc-400 hover:bg-zinc-800"}`}>💳 Billing</Link>
                <Link href="/dashboard/profile" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold ${pathname === "/dashboard/profile" ? "bg-yellow-400 text-black" : "text-zinc-400 hover:bg-zinc-800"}`}>👤 Profile</Link>
                <Link href="/dashboard/settings" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold ${pathname === "/dashboard/settings" ? "bg-yellow-400 text-black" : "text-zinc-400 hover:bg-zinc-800"}`}>⚙️ Settings</Link>
              </nav>
              <div className="mt-8 pt-8 border-t border-zinc-800">
                <Link href="/" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:bg-zinc-800 rounded-xl font-bold">🏠 Back to Site</Link>
                <button onClick={() => { localStorage.removeItem("userToken"); window.location.href = "/"; }} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-zinc-800 rounded-xl font-bold mt-2">🚪 Logout</button>
              </div>
            </div>
          </aside>
          <main className="flex-1 ml-64">{children}</main>
        </div>
      </body>
    </html>
  );
}
