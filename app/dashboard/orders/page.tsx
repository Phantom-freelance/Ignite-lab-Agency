"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const FILTERS = ["all", "active", "completed", "pending"];

export default function Orders() {
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/signin");
      return;
    }

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

  const filteredOrders =
    filter === "all"
      ? orders
      : orders.filter((o) => o.status === filter);

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
              className={`px-6 py-3 rounded-full font-bold transition-all capitalize ${
                filter === f
                  ? "bg-yellow-400 text-black"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-yellow-400"
              }`}
            >
              {f}
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
          <p className="text-zinc-400 text-xl mb-2">No {filter !== "all" ? filter : ""} orders found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-zinc-900 border border-zinc-800 hover:border-yellow-400 rounded-2xl p-6 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">
                    {order.service_name || "Service"}
                  </h3>
                  <p className="text-zinc-500">Order ID: {order.id}</p>
                  <p className="text-zinc-500 text-sm mt-1">
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                  {order.notes && (
                    <p className="text-zinc-400 text-sm mt-2">{order.notes}</p>
                  )}
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
