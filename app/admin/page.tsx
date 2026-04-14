"use client";

import Link from "next/link";

const STATS = [
  { label: "Total Revenue", value: "$24,500", change: "+12%", color: "text-yellow-400", icon: "💰" },
  { label: "Active Orders", value: "8", change: "+3", color: "text-blue-400", icon: "📦" },
  { label: "Total Clients", value: "34", change: "+5", color: "text-green-400", icon: "👥" },
  { label: "Pending Orders", value: "3", change: "-1", color: "text-orange-400", icon: "⏳" },
];

const RECENT_ORDERS = [
  { id: "ORD-12345", client: "John Doe", service: "Website Development", amount: 3500, status: "in_progress" },
  { id: "ORD-12344", client: "Jane Smith", service: "UI/UX Design", amount: 1500, status: "completed" },
  { id: "ORD-12343", client: "Tech Corp", service: "SEO Optimization", amount: 800, status: "pending" },
  { id: "ORD-12342", client: "StartupXYZ", service: "Mobile App", amount: 5000, status: "in_progress" },
];

const QUICK_LINKS = [
  { label: "Manage Orders", href: "/admin/orders", icon: "📦", desc: "View and update all orders" },
  { label: "Manage Users", href: "/admin/users", icon: "👥", desc: "View and manage clients" },
  { label: "Analytics", href: "/admin/analytics", icon: "📈", desc: "Revenue and traffic reports" },
  { label: "Settings", href: "/admin/settings", icon: "⚙️", desc: "Site and account settings" },
];

export default function AdminDashboard() {
  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-2">
            Welcome back
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white">
            Admin Dashboard
          </h1>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-green-400 text-sm font-bold">{stat.change}</span>
              </div>
              <p className={`text-4xl font-black mb-1 ${stat.color}`}>{stat.value}</p>
              <p className="text-zinc-500 text-sm font-bold uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {QUICK_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-yellow-400 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <p className="text-white font-black text-lg mb-1">{link.label}</p>
              <p className="text-zinc-500 text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-white">Recent Orders</h2>
            <Link href="/admin/orders" className="text-yellow-400 font-bold hover:text-yellow-500">
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {RECENT_ORDERS.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-black border border-zinc-800 rounded-xl hover:border-yellow-400 transition-all">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                    order.status === "completed" ? "bg-green-500/20" :
                    order.status === "in_progress" ? "bg-blue-500/20" :
                    "bg-orange-500/20"
                  }`}>
                    {order.status === "completed" ? "✅" : order.status === "in_progress" ? "⟳" : "⏳"}
                  </div>
                  <div>
                    <p className="font-bold text-white">{order.client} <span className="text-zinc-500 font-normal text-sm">• {order.service}</span></p>
                    <p className="text-zinc-500 text-sm">{order.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-yellow-400 font-black text-xl">${order.amount}</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    order.status === "completed" ? "bg-green-500/20 text-green-400" :
                    order.status === "in_progress" ? "bg-blue-500/20 text-blue-400" :
                    "bg-orange-500/20 text-orange-400"
                  }`}>
                    {order.status.replace("_", " ").toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
