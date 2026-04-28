"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
  const [user, setUser] = useState({ name: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/signin");
      return;
    }

    // Fetch user profile
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => {});

    // Fetch orders
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        // Backend returns array directly
        setOrders(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Orders fetch error:", err);
        setLoading(false);
      });
  }, [router]);

  const stats = [
    {
      label: "Active Orders",
      value: orders.filter((o) => o.status === "active").length,
      icon: "🚀",
    },
    {
      label: "Completed",
      value: orders.filter((o) => o.status === "completed").length,
      icon: "✨",
    },
    {
      label: "Total Spent",
      value: `$${orders.reduce((sum, o) => sum + (parseFloat(o.amount) || 0), 0).toFixed(2)}`,
      icon: "💎",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black p-8">
      {/* Header */}
      <div className="mb-16">
        <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
          Welcome Back 👋
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
          {user.name ? `${user.name}'s Dashboard` : "Your Dashboard"}
        </h1>
        <Link
          href="/services"
          className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all active:scale-95"
        >
          Browse Services →
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-5xl">{stat.icon}</span>
              <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
            </div>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-2">
              {stat.label}
            </p>
            <p className="text-4xl font-black text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 mb-12">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black text-white">Recent Orders</h2>
          <Link
            href="/dashboard/orders"
            className="text-yellow-400 hover:text-yellow-500 font-bold transition-colors"
          >
            View All →
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-zinc-800 border-t-yellow-400 rounded-full animate-spin" />
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-6xl mb-6">📭</p>
            <p className="text-zinc-400 text-xl mb-8">No orders yet</p>
            <Link
              href="/services"
              className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all"
            >
              Browse Services
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.slice(0, 5).map((order) => (
              <div
                key={order.id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-black border border-zinc-800 hover:border-yellow-400 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-2xl">
                    📦
                  </div>
                  <div>
                    <p className="font-bold text-lg text-white">
                      {order.service_name || "Service"}
                    </p>
                    <p className="text-zinc-500 text-sm">Order #{order.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-3xl font-black text-yellow-400">
                    ${order.amount}
                  </p>
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase ${
                      order.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : order.status === "active"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-orange-500/20 text-orange-400"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/dashboard/orders"
          className="group bg-zinc-900 border border-zinc-800 hover:border-yellow-400 rounded-2xl p-10 transition-all duration-300"
        >
          <p className="text-5xl mb-6">📦</p>
          <h3 className="text-2xl font-black text-white mb-2">All Orders</h3>
          <p className="text-zinc-400 mb-4">View and manage your orders</p>
          <span className="text-yellow-400 font-bold group-hover:translate-x-2 inline-block transition-transform">
            →
          </span>
        </Link>

        <Link
          href="/dashboard/profile"
          className="group bg-zinc-900 border border-zinc-800 hover:border-yellow-400 rounded-2xl p-10 transition-all duration-300"
        >
          <p className="text-5xl mb-6">👤</p>
          <h3 className="text-2xl font-black text-white mb-2">Profile</h3>
          <p className="text-zinc-400 mb-4">Manage your account</p>
          <span className="text-yellow-400 font-bold group-hover:translate-x-2 inline-block transition-transform">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
