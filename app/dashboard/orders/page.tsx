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

  const filteredOrders =
    filter === "all"
      ? orders
      : orders.filter((o: any) => o.status === filter);

  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="mb-12">
        <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
          Your Orders 📦
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
          Order History
        </h1>

        <div className="flex gap-3 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                filter === f
                  ? "bg-yellow-400 text-black"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-yellow-400"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-12 h-12 border-4 border-zinc-800 border-t-yellow-400 rounded-full animate-spin" />
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="text-center py-20 bg-zinc-900 border border-zinc-800 rounded-2xl">
          <p className="text-6xl mb-6">📭</p>
          <p className="text-zinc-400 text-xl mb-8">
            No {filter !== "all" ? filter : ""} orders found
          </p>
          <Link
            href="/services"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all"
          >
            Browse Services
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {(filteredOrders as any[]).map((order) => (
            <div
              key={order.id}
              className="bg-zinc-900 border border-zinc-800 hover:border-yellow-400 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-3xl">
                    📦
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white mb-2">
                      {order.serviceName}
                    </p>
                    <p className="text-zinc-500 mb-2">Order #{order.id}</p>
                    <p className="text-zinc-400 text-sm">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-zinc-500 text-sm mb-1">Amount</p>
                    <p className="text-4xl font-black text-yellow-400">
                      ${order.amount}
                    </p>
                  </div>
                  <span
                    className={`px-6 py-3 rounded-full text-sm font-bold uppercase ${
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

              {order.notes && (
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <p className="text-zinc-400">{order.notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
