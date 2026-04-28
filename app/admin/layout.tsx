"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const isAuthPage = pathname === "/admin/auth";

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token && !isAuthPage) {
      router.push("/admin/auth");
    } else {
      setAuthorized(true);
    }
  }, [pathname]);

  if (!authorized) return null;
  if (isAuthPage) return <>{children}</>;

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: "📊" },
    { name: "Orders", href: "/admin/orders", icon: "📦" },
    { name: "Users", href: "/admin/users", icon: "👥" },
    { name: "Analytics", href: "/admin/analytics", icon: "📈" },
    { name: "Settings", href: "/admin/settings", icon: "⚙️" },
  ];

  return (
    <div className="min-h-screen bg-black flex">
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 fixed h-full z-50">
        <div className="p-6">
          <Link href="/" className="text-2xl font-black text-yellow-400 mb-1 block">JOB-N-ME</Link>
          <p className="text-zinc-500 text-sm font-bold mb-8">ADMIN PANEL</p>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                  pathname === item.href
                    ? "bg-yellow-400 text-black"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <Link href="/" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-xl font-bold transition-all">
              <span className="text-xl">🏠</span>
              Back to Site
            </Link>
            <button
              onClick={() => { localStorage.removeItem("adminToken"); router.push("/admin/auth"); }}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-zinc-800 rounded-xl font-bold transition-all mt-2"
            >
              <span className="text-xl">🚪</span>
              Logout
            </button>
          </div>
        </div>
      </aside>
      <main className="flex-1 ml-64">{children}</main>
    </div>
  );
}
