"use client";

import { useState } from "react";
import Link from "next/link";

const MOCK_ORDERS = [
  {
    id: "ORD-12345",
    client: "John Doe",
    service: "Website Development",
    amount: 3500,
    status: "in_progress",
    date: "2026-04-10",
    deadline: "2026-05-15",
  },
  {
    id: "ORD-12344",
    client: "Jane Smith",
    service: "UI/UX Design",
    amount: 1500,
    status: "completed",
    date: "2026-04-08",
    deadline: "2026-04-20",
  },
  {
    id: "ORD-12343",
    client: "Tech Corp",
    service: "SEO Optimization",
    amount: 800,
    status: "pending",
    date: "2026-04-12",
    deadline: "2026-05-01",
  },
  {
    id: "ORD-12342",
    client: "StartupXYZ",
    service: "Mobile App",
    amount: 5000,
    status: "in_progress",
    date: "2026-04-05",
    deadline: "2026-06-01",
  },
];

export default function AdminOrders() {
  const [orders] = useState(MOCK_ORDERS);
  const [filter, setFilter] = useState("all");

  const filteredOrders = filter === "all" 
    ? orders 
    : orders.filter(o => o.status === filter);

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === "pending").length,
    in_progress: orders.filter(o => o.status === "in_progress").length,
    completed: orders.filter(o => o.status === "completed").length,
    revenue: orders.reduce((sum, o) => sum + o.amount, 0),
  };

  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-2">
                Admin Dashboard
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-white">
                Orders Management
              </h1>
            </div>
            <Link
              href="/admin"
              className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold hover:border-yellow-400 transition-all"
            >
              ← Back to Admin
            </Link>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition-all">
              <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Total Orders</p>
              <p className="text-4xl font-black text-white">{stats.total}</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-400 transition-all">
              <p className="text-zinc-500 text-sm font-bold uppercase mb-2">In Progress</p>
              <p className="text-4xl font-black text-blue-400">{stats.in_progress}</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-400 transition-all">
              <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Pending</p>
              <p className="text-4xl font-black text-orange-400">{stats.pending}</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-400 transition-all">
              <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Completed</p>
              <p className="text-4xl font-black text-green-400">{stats.completed}</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition-all">
              <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Revenue</p>
              <p className="text-4xl font-black text-yellow-400">${stats.revenue.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-white">All Orders</h2>
            
            <div className="flex gap-2">
              {["all", "pending", "in_progress", "completed"].map(status => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
                    filter === status
                      ? "bg-yellow-400 text-black"
                      : "bg-black border border-zinc-800 text-zinc-400 hover:border-yellow-400"
                  }`}
                >
                  {status === "all" ? "All" : status.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredOrders.map(order => (
              <div
                key={order.id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-black border border-zinc-800 rounded-xl hover:border-yellow-400 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                    order.status === "completed" ? "bg-green-500/20" :
                    order.status === "in_progress" ? "bg-blue-500/20" :
                    "bg-orange-500/20"
                  }`}>
                    {order.status === "completed" ? "✅" :
                     order.status === "in_progress" ? "⟳" : "⏳"}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-black text-white text-lg">{order.id}</p>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        order.status === "completed" ? "bg-green-500/20 text-green-400" :
                        order.status === "in_progress" ? "bg-blue-500/20 text-blue-400" :
                        "bg-orange-500/20 text-orange-400"
                      }`}>
                        {order.status.replace("_", " ").toUpperCase()}
                      </span>
                    </div>
                    <p className="text-zinc-400 mb-1">
                      <span className="text-white font-bold">{order.client}</span> • {order.service}
                    </p>
                    <p className="text-zinc-500 text-sm">
                      Placed: {new Date(order.date).toLocaleDateString()} • 
                      Deadline: {new Date(order.deadline).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-3xl font-black text-yellow-400">${order.amount}</p>
                  </div>
                  <Link
                    href={`/admin/orders/${order.id}`}
                    className="px-6 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all whitespace-nowrap"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
