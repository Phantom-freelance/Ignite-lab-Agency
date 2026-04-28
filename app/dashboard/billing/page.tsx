"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Billing() {
  const router = useRouter();
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/signin");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/billing/invoices`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setInvoices(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [router]);

  const totalSpent = invoices.reduce((sum: number, inv: any) => sum + (inv.amount || 0), 0);
  const paidCount = invoices.filter((inv: any) => inv.status === "paid").length;

  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12">
          <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
            Payments & Invoices 💳
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white">
            Billing
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Total Spent</p>
            <p className="text-4xl font-black text-yellow-400">${totalSpent.toFixed(2)}</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Paid Invoices</p>
            <p className="text-4xl font-black text-green-400">{paidCount}</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Pending</p>
            <p className="text-4xl font-black text-orange-400">
              {invoices.filter((inv: any) => inv.status === "unpaid").length}
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-white mb-6">Payment History</h2>
          
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-zinc-800 border-t-yellow-400 rounded-full animate-spin" />
            </div>
          ) : invoices.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-6xl mb-6">💳</p>
              <p className="text-zinc-400 text-xl">No invoices yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {(invoices as any[]).map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black border border-zinc-800 rounded-xl p-6"
                >
                  <div>
                    <p className="font-bold text-white text-lg">Invoice #{invoice.id}</p>
                    <p className="text-zinc-500 text-sm">
                      {new Date(invoice.created_at).toLocaleDateString()}
                    </p>
                    {invoice.due_date && (
                      <p className="text-zinc-500 text-sm">
                        Due: {new Date(invoice.due_date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-2xl font-black text-yellow-400">
                      ${invoice.amount}
                    </p>
                    <span
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase ${
                        invoice.status === "paid"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-orange-500/20 text-orange-400"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
