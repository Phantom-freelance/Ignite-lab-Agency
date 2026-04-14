"use client";

import { use } from "react";
import Link from "next/link";

const MOCK_ORDER = {
  id: "ORD-12345",
  client: { name: "John Doe", email: "john@example.com", phone: "+1 (555) 123-4567", company: "Tech Corp" },
  service: "Custom Website Development",
  status: "in_progress",
  amount: 3500,
  paid: 1750,
  date: "2026-04-10",
  deadline: "2026-05-15",
  progress: 65,
  notes: "Client wants dark mode first, mobile-first approach.",
  timeline: [
    { date: "2026-04-10", title: "Order Placed", status: "completed" },
    { date: "2026-04-12", title: "Design Started", status: "completed" },
    { date: "2026-04-15", title: "Development", status: "in_progress" },
    { date: "2026-04-25", title: "Review & Testing", status: "pending" },
    { date: "2026-05-15", title: "Delivery", status: "pending" },
  ],
};

const STATUS_OPTIONS = ["pending", "in_progress", "completed", "cancelled"];

export default function AdminOrderDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <Link href="/admin/orders" className="text-yellow-400 font-bold hover:text-yellow-500 mb-4 inline-block">
            ← Back to Orders
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-2">Admin View • {id}</p>
              <h1 className="text-4xl md:text-6xl font-black text-white">{MOCK_ORDER.service}</h1>
            </div>
            <select className="px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white font-bold focus:outline-none focus:border-yellow-400">
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s} selected={s === MOCK_ORDER.status}>
                  {s.replace("_", " ").toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-6">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Timeline</h2>
              {MOCK_ORDER.timeline.map((item, i) => (
                <div key={i} className="flex gap-4 mb-6 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      item.status === "completed" ? "bg-green-500 text-white" :
                      item.status === "in_progress" ? "bg-blue-500 text-white" :
                      "bg-zinc-700 text-zinc-400"
                    }`}>
                      {item.status === "completed" ? "✓" : i + 1}
                    </div>
                    {i < MOCK_ORDER.timeline.length - 1 && (
                      <div className="w-0.5 h-10 bg-zinc-800 my-1"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex justify-between">
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-zinc-500 text-sm">{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-4">Internal Notes</h2>
              <textarea
                defaultValue={MOCK_ORDER.notes}
                rows={4}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-yellow-400 resize-none"
              />
              <button className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all">
                Save Notes
              </button>
            </div>
          </div>

          <div className="space-y-6">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-black text-white mb-4">Client</h3>
              <div className="space-y-3">
                <div><p className="text-zinc-500 text-sm">Name</p><p className="text-white font-bold">{MOCK_ORDER.client.name}</p></div>
                <div><p className="text-zinc-500 text-sm">Email</p><p className="text-white font-bold">{MOCK_ORDER.client.email}</p></div>
                <div><p className="text-zinc-500 text-sm">Phone</p><p className="text-white font-bold">{MOCK_ORDER.client.phone}</p></div>
                <div><p className="text-zinc-500 text-sm">Company</p><p className="text-white font-bold">{MOCK_ORDER.client.company}</p></div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-black text-white mb-4">Financials</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><p className="text-zinc-400">Total</p><p className="text-yellow-400 font-black">${MOCK_ORDER.amount}</p></div>
                <div className="flex justify-between"><p className="text-zinc-400">Paid</p><p className="text-green-400 font-black">${MOCK_ORDER.paid}</p></div>
                <div className="h-px bg-zinc-800"></div>
                <div className="flex justify-between"><p className="text-zinc-400">Balance</p><p className="text-red-400 font-black">${MOCK_ORDER.amount - MOCK_ORDER.paid}</p></div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-black text-white mb-4">Progress</h3>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-1 h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-400" style={{ width: `${MOCK_ORDER.progress}%` }}></div>
                </div>
                <span className="text-white font-black">{MOCK_ORDER.progress}%</span>
              </div>
              <p className="text-zinc-500 text-sm">Deadline: {new Date(MOCK_ORDER.deadline).toLocaleDateString()}</p>
            </div>

            <div className="space-y-3">
              <button className="w-full py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all">
                Send Update to Client
              </button>
              <button className="w-full py-3 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold hover:border-yellow-400 transition-all">
                Generate Invoice
              </button>
              <button className="w-full py-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full font-bold hover:bg-red-500/20 transition-all">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
