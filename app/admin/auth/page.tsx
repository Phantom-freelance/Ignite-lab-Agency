"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (credentials.email === "admin@bbragency.com" && credentials.password === "admin123") {
        localStorage.setItem("adminToken", "authenticated");
        router.push("/admin");
      } else {
        setError("Invalid email or password.");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-yellow-400 mb-2">BBR AGENCY</h1>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Admin Access</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-white mb-6">Sign In</h2>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 font-bold text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="text-zinc-500 text-sm font-bold uppercase mb-2 block">Email</label>
              <input
                type="email"
                placeholder="admin@bbragency.com"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label className="text-zinc-500 text-sm font-bold uppercase mb-2 block">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-yellow-400"
              />
            </div>
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full py-4 bg-yellow-400 text-black rounded-full font-black text-lg hover:bg-yellow-500 transition-all disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </div>

          <p className="text-zinc-600 text-xs text-center mt-6">
            Restricted area. Authorized personnel only.
          </p>
        </div>
      </div>
    </div>
  );
}
