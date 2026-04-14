"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const stats = [
    {
      label: "Active Orders",
      value: orders.filter((o: any) => o.status === "active").length,
      icon: "🚀",
      gradient: "from-violet-500 to-indigo-500",
      glow: "shadow-violet-500/30",
    },
    {
      label: "Completed",
      value: orders.filter((o: any) => o.status === "completed").length,
      icon: "✨",
      gradient: "from-fuchsia-500 to-pink-500",
      glow: "shadow-fuchsia-500/30",
    },
    {
      label: "Total Spent",
      value: `$${orders.reduce((sum: number, o: any) => sum + (o.amount || 0), 0).toFixed(2)}`,
      icon: "💎",
      gradient: "from-pink-500 to-rose-500",
      glow: "shadow-pink-500/30",
    },
  ];

  return (
    <div className="min-h-screen bg-[#060609] text-white relative overflow-hidden">
      {/* Background FX */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-[30%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-fuchsia-600/15 rounded-full blur-[100px]" />
        <div className="absolute top-[60%] left-[-5%] w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div>
            <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-2">
              Welcome back 👋
            </p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
          </div>
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 font-bold text-lg shadow-xl shadow-violet-500/30 hover:scale-105 hover:shadow-violet-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Browse Services</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`group relative bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl ${stat.glow} transition-all duration-300 overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-[0.07] rounded-3xl transition-opacity duration-300`} />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{stat.icon}</span>
                  <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${stat.gradient} animate-pulse`} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
                  <p className="text-4xl font-black text-white">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-10 mb-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Recent Orders
            </h2>
            <Link
              href="/dashboard/orders"
              className="text-sm text-violet-400 hover:text-fuchsia-400 font-semibold transition-colors"
            >
              View all →
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center py-14">
              <div className="w-10 h-10 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-14">
              <p className="text-5xl mb-4">📭</p>
              <p className="text-gray-400 text-lg mb-6">No orders yet — let's fix that.</p>
              <Link
                href="/services"
                className="inline-block px-7 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-violet-500/30"
              >
                Explore Services
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {(orders as any[]).slice(0, 5).map((order, i) => (
                <div
                  key={order.id}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.07] hover:border-violet-500/40 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-xl shrink-0">
                      📦
                    </div>
                    <div>
                      <p className="font-bold text-lg group-hover:text-violet-300 transition-colors">
                        {order.serviceName}
                      </p>
                      <p className="text-gray-500 text-sm">#{order.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                    <p className="text-2xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                      ${order.amount}
                    </p>
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
                        order.status === "completed"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/25"
                          : order.status === "active"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/25"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/25"
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
          {[
            {
              href: "/dashboard/orders",
              icon: "📦",
              title: "All Orders",
              desc: "View and manage every order",
              gradient: "from-violet-600/20 to-indigo-600/20",
              border: "border-violet-500/20 hover:border-violet-500/50",
              glow: "hover:shadow-violet-500/20",
            },
            {
              href: "/dashboard/settings",
              icon: "⚙️",
              title: "Settings",
              desc: "Manage your account preferences",
              gradient: "from-fuchsia-600/20 to-pink-600/20",
              border: "border-fuchsia-500/20 hover:border-fuchsia-500/50",
              glow: "hover:shadow-fuchsia-500/20",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`group relative bg-gradient-to-br ${card.gradient} border ${card.border} rounded-3xl p-10 hover:scale-[1.02] hover:shadow-2xl ${card.glow} transition-all duration-300 overflow-hidden`}
            >
              <p className="text-5xl mb-4">{card.icon}</p>
              <h3 className="text-2xl font-black mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
              <span className="absolute bottom-8 right-8 text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}