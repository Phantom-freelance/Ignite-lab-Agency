"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MOCK_PAYMENTS = [
  {
    id: "INV-001",
    date: "2026-04-01",
    service: "Website Development",
    amount: 3500,
    status: "paid",
    method: "Credit Card",
  },
  {
    id: "INV-002",
    date: "2026-03-15",
    service: "UI/UX Design",
    amount: 1500,
    status: "paid",
    method: "PayPal",
  },
  {
    id: "INV-003",
    date: "2026-02-28",
    service: "SEO Optimization",
    amount: 800,
    status: "paid",
    method: "Credit Card",
  },
];

export default function Billing() {
  const [payments, setPayments] = useState(MOCK_PAYMENTS);
  const [addingCard, setAddingCard] = useState(false);

  const totalSpent = payments.reduce((sum, p) => sum + p.amount, 0);

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
              Payments & Invoices
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white">
              Billing
            </h1>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-all">
              <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Total Spent</p>
              <p className="text-4xl font-black text-yellow-400">${totalSpent.toLocaleString()}</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-all">
              <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Paid Invoices</p>
              <p className="text-4xl font-black text-white">{payments.length}</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-all">
              <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Next Payment</p>
              <p className="text-4xl font-black text-zinc-600">None</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Payment History */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-2xl font-black text-white mb-6">Payment History</h2>
                
                <div className="space-y-4">
                  {payments.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-black border border-zinc-800 rounded-xl hover:border-yellow-400 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-2xl">
                          💳
                        </div>
                        <div>
                          <p className="font-bold text-white mb-1">{payment.service}</p>
                          <p className="text-zinc-500 text-sm">
                            {payment.id} • {new Date(payment.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-2xl font-black text-yellow-400">${payment.amount}</p>
                          <p className="text-zinc-500 text-xs">{payment.method}</p>
                        </div>
                        <button className="px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-full text-sm font-bold hover:border-yellow-400 transition-all whitespace-nowrap">
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="lg:col-span-1 space-y-6">
              
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-black text-white mb-4">Payment Methods</h3>
                
                {/* Saved Card */}
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-6 mb-4 text-black">
                  <p className="text-xs font-bold uppercase mb-2">Credit Card</p>
                  <p className="text-2xl font-black mb-8">•••• 4242</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs">Expires</p>
                      <p className="font-bold">12/28</p>
                    </div>
                    <p className="text-2xl">💳</p>
                  </div>
                </div>

                {addingCard ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Card number"
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 text-white"
                    />
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="flex-1 px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 text-white"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="flex-1 px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 text-white"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setAddingCard(false)}
                        className="flex-1 px-4 py-3 bg-yellow-400 text-black rounded-xl font-bold hover:bg-yellow-500"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setAddingCard(false)}
                        className="flex-1 px-4 py-3 bg-zinc-800 text-white rounded-xl font-bold hover:bg-zinc-700"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setAddingCard(true)}
                    className="w-full py-3 bg-black border-2 border-dashed border-zinc-700 rounded-xl text-zinc-500 font-bold hover:border-yellow-400 hover:text-yellow-400 transition-all"
                  >
                    + Add New Card
                  </button>
                )}
              </div>

              {/* Quick Actions */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-black text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all">
                    Download All Invoices
                  </button>
                  <button className="w-full py-3 bg-black border border-zinc-700 text-white rounded-full font-bold hover:border-yellow-400 transition-all">
                    Payment Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
