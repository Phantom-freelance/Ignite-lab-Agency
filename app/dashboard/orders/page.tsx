"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-yellow-400 transition-colors text-sm mb-8 font-bold"
            >
              ← Back to Dashboard
            </Link>
            <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
              Order History
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white">
              My Orders
            </h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-3 rounded-full font-bold capitalize transition-all ${
                  filter === f
                    ? "bg-yellow-400 text-black"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-yellow-400 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Orders List */}
          {loading ? (
            <div className="flex flex-col items-center gap-4 py-24">
              <div className="w-14 h-14 border-4 border-zinc-800 border-t-yellow-400 rounded-full animate-spin" />
              <p className="text-zinc-500 font-bold">Loading orders...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-20 text-center">
              <p className="text-7xl mb-8">🔍</p>
              <p className="text-3xl font-black text-white mb-4">
                No {filter} orders
              </p>
              <p className="text-zinc-500 mb-10">Time to create something amazing.</p>
              <Link
                href="/services"
                className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all"
              >
                Browse Services
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {(filtered as any[]).map((order) => (
                <div
                  key={order.id}
                  className="bg-zinc-900 border border-zinc-800 hover:border-yellow-400 rounded-2xl p-8 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-3xl">
                        📦
                      </div>
                      <div>
                        <h2 className="text-2xl font-black text-white mb-1">
                          {order.serviceName}
                        </h2>
                        <p className="text-zinc-500 text-sm">Order #{order.id}</p>
                        <p className="text-zinc-600 text-xs mt-1">
                          {new Date(order.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <p className="text-4xl font-black text-yellow-400">
                        ${order.amount}
                      </p>
                      <span
                        className={`px-5 py-2 rounded-full text-xs font-bold uppercase ${
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

                  {order.status === "active" && (
                    <div className="mb-6">
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-zinc-500 font-bold uppercase">Progress</span>
                        <span className="text-yellow-400 font-black">{order.progress || 0}%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="h-full bg-yellow-400 rounded-full transition-all duration-700"
                          style={{ width: `${order.progress || 0}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-yellow-400 text-black rounded-full text-sm font-bold hover:bg-yellow-500 transition-all">
                      View Details
                    </button>
                    {order.status === "completed" && (
                      <button className="px-6 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-full text-sm font-bold hover:border-yellow-400 transition-all">
                        Download Invoice
                      </button>
                    )}
                    <button className="px-6 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-full text-sm font-bold hover:border-yellow-400 transition-all">
                      Support
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}