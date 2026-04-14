"use client";

import { use } from "react";
import Link from "next/link";

const MOCK_ORDER = {
  id: "ORD-12345",
  date: "2026-04-10",
  service: "Custom Website Development",
  status: "in_progress",
  amount: 3500,
  deadline: "2026-05-15",
  progress: 65,
  client: {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
  },
  timeline: [
    { date: "2026-04-10", title: "Order Placed", status: "completed", description: "Payment received and order confirmed" },
    { date: "2026-04-12", title: "Design Started", status: "completed", description: "Initial mockups created" },
    { date: "2026-04-15", title: "Development", status: "in_progress", description: "Building core features" },
    { date: "2026-04-25", title: "Review & Testing", status: "pending", description: "Quality assurance phase" },
    { date: "2026-05-15", title: "Delivery", status: "pending", description: "Final handover" },
  ],
  files: [
    { name: "Initial_Mockup.pdf", size: "2.4 MB", date: "2026-04-12" },
    { name: "Requirements_Doc.docx", size: "156 KB", date: "2026-04-10" },
  ],
};

export default function OrderDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-8">
          <Link href="/dashboard/orders" className="text-yellow-400 font-bold hover:text-yellow-500 mb-4 inline-block">
            ← Back to Orders
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-2">
                Order #{MOCK_ORDER.id}
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-2">
                {MOCK_ORDER.service}
              </h1>
              <p className="text-zinc-400">
                Placed on {new Date(MOCK_ORDER.date).toLocaleDateString()}
              </p>
            </div>
            <div className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full font-bold text-sm">
              In Progress
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Progress Timeline</h2>
              
              <div className="relative">
                {MOCK_ORDER.timeline.map((item, i) => (
                  <div key={i} className="flex gap-4 mb-8 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.status === 'completed' ? 'bg-green-500' :
                        item.status === 'in_progress' ? 'bg-blue-500' :
                        'bg-zinc-700'
                      }`}>
                        {item.status === 'completed' ? '✓' :
                         item.status === 'in_progress' ? '⟳' : '○'}
                      </div>
                      {i !== MOCK_ORDER.timeline.length - 1 && (
                        <div className="w-0.5 h-16 bg-zinc-800 my-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <span className="text-zinc-500 text-sm">{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <p className="text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Project Files</h2>
              <div className="space-y-3">
                {MOCK_ORDER.files.map((file, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-black border border-zinc-800 rounded-xl hover:border-yellow-400 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-2xl">
                        📄
                      </div>
                      <div>
                        <p className="font-bold text-white">{file.name}</p>
                        <p className="text-zinc-500 text-sm">{file.size} • {new Date(file.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-full text-sm font-bold hover:border-yellow-400 transition-all">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-black text-white mb-4">Order Summary</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Total Amount</p>
                  <p className="text-3xl font-black text-yellow-400">${MOCK_ORDER.amount}</p>
                </div>
                <div className="h-px bg-zinc-800"></div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Deadline</p>
                  <p className="text-white font-bold">{new Date(MOCK_ORDER.deadline).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Progress</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400" style={{ width: `${MOCK_ORDER.progress}%` }}></div>
                    </div>
                    <span className="text-white font-bold text-sm">{MOCK_ORDER.progress}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-black text-white mb-4">Client Info</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-zinc-500 text-sm">Name</p>
                  <p className="text-white font-bold">{MOCK_ORDER.client.name}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Email</p>
                  <p className="text-white font-bold">{MOCK_ORDER.client.email}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Phone</p>
                  <p className="text-white font-bold">{MOCK_ORDER.client.phone}</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-black text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all">
                  Contact Support
                </button>
                <button className="w-full px-4 py-3 bg-black border border-zinc-700 text-white rounded-full font-bold hover:border-yellow-400 transition-all">
                  Request Changes
                </button>
                <button className="w-full px-4 py-3 bg-black border border-zinc-700 text-white rounded-full font-bold hover:border-yellow-400 transition-all">
                  Download Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
