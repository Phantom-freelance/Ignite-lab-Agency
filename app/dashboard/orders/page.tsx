"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const FILTERS = ["all", "active", "completed", "pending"];

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");
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

  const filtered =
    filter === "all" ? orders : (orders as any[]).filter((o) => o.status === filter);

  return (
    <div className="min-h-screen bg-[#060609] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-[30%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-fuchsia-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="mb-12">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-gray-500 hover:text-violet-400 transition-colors text-sm mb-6 font-medium">
            ← Back to Dashboard
          </Link>
          <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-2">
            Order History
          </p>
          <h1 className="text-5xl md:text-6xl font-black">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              My Orders
            </span>
          </h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-6 py-3 rounded-xl font-semibold capitalize transition-all duration-300 overflow-hidden ${
                filter === f
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30 scale-105"
                  : "bg-white/[0.05] text-gray-400 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white hover:border-violet-500/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex flex-col items-center gap-4 py-24">
            <div className="w-12 h-12 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
            <p className="text-gray-500">Loading orders...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-16 text-center">
            <p className="text-6xl mb-5">🔍</p>
            <p className="text-2xl font-bold mb-2">No {filter} orders</p>
            <p className="text-gray-500 mb-8">Time to place some new ones.</p>
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-violet-500/30"
            >
              Browse Services
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {(filtered as any[]).map((order, i) => (
              <div
                key={order.id}
                className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-violet-500/40 rounded-3xl p-8 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-2xl shrink-0 shadow-lg shadow-violet-500/20">
                      📦
                    </div>
                    <div>
                      <h2 className="text-xl font-black group-hover:text-violet-300 transition-colors">
                        {order.serviceName}
                      </h2>
                      <p className="text-gray-500 text-sm mt-0.5">Order #{order.id}</p>
                      <p className="text-gray-600 text-xs mt-0.5">
                        {new Date(order.createdAt).toLocaleDateString("en-US", {
                          year: "numeric", month: "long", day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <p className="text-3xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                      ${order.amount}
                    </p>
                    <span
                      className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
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

                {order.status === "active" && (
                  <div className="mb-6">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-500 font-medium">Progress</span>
                      <span className="text-violet-400 font-bold">{order.progress || 0}%</span>
                    </div>
                    <div className="w-full bg-white/[0.06] rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 rounded-full transition-all duration-700"
                        style={{ width: `${order.progress || 0}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <button className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform shadow-md shadow-violet-500/20">
                    View Details
                  </button>
                  {order.status === "completed" && (
                    <button className="px-5 py-2.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm font-bold hover:bg-white/[0.1] transition-colors">
                      Download Invoice
                    </button>
                  )}
                  <button className="px-5 py-2.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm font-bold hover:bg-white/[0.1] transition-colors">
                    Support
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}