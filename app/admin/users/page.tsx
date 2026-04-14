"use client";

import { useState } from "react";

const MOCK_USERS = [
  { id: "USR-001", name: "John Doe", email: "john@example.com", company: "Tech Corp", orders: 3, spent: 7200, joined: "2026-01-15", status: "active" },
  { id: "USR-002", name: "Jane Smith", email: "jane@example.com", company: "Design Studio", orders: 1, spent: 1500, joined: "2026-02-20", status: "active" },
  { id: "USR-003", name: "Bob Johnson", email: "bob@example.com", company: "StartupXYZ", orders: 2, spent: 5800, joined: "2026-03-05", status: "inactive" },
  { id: "USR-004", name: "Alice Brown", email: "alice@example.com", company: "E-Shop Ltd", orders: 4, spent: 12400, joined: "2025-11-10", status: "active" },
  { id: "USR-005", name: "Charlie Wilson", email: "charlie@example.com", company: "Media Co", orders: 1, spent: 800, joined: "2026-04-01", status: "active" },
];

export default function AdminUsers() {
  const [search, setSearch] = useState("");
  const [users] = useState(MOCK_USERS);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-2">Admin Dashboard</p>
          <h1 className="text-5xl md:text-7xl font-black text-white">Users</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Total Users</p>
            <p className="text-4xl font-black text-white">{users.length}</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Active Users</p>
            <p className="text-4xl font-black text-green-400">{users.filter(u => u.status === "active").length}</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-500 text-sm font-bold uppercase mb-2">Total Spent</p>
            <p className="text-4xl font-black text-yellow-400">${users.reduce((s, u) => s + u.spent, 0).toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-white">All Users</h2>
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-yellow-400 w-64"
            />
          </div>

          <div className="space-y-4">
            {filtered.map((user) => (
              <div key={user.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-black border border-zinc-800 rounded-xl hover:border-yellow-400 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-xl font-black text-black">
                    {user.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-black text-white text-lg">{user.name}</p>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        user.status === "active" ? "bg-green-500/20 text-green-400" : "bg-zinc-700 text-zinc-400"
                      }`}>
                        {user.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm">{user.email} • {user.company}</p>
                    <p className="text-zinc-500 text-xs">Joined {new Date(user.joined).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-white font-black text-xl">{user.orders}</p>
                    <p className="text-zinc-500 text-xs">Orders</p>
                  </div>
                  <div className="text-center">
                    <p className="text-yellow-400 font-black text-xl">${user.spent.toLocaleString()}</p>
                    <p className="text-zinc-500 text-xs">Spent</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-bold hover:bg-yellow-500 transition-all">
                      View
                    </button>
                    <button className="px-4 py-2 bg-zinc-800 text-white rounded-full text-sm font-bold hover:bg-zinc-700 transition-all">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
