"use client";

import { useState } from "react";
import Link from "next/link";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    company: "Acme Inc",
    phone: "+1 234 567 8900",
  });
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true, orders: true, marketing: false, reports: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const toggleNotif = (key: string) =>
    setNotifications((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));

  const notifItems = [
    { key: "email", label: "Email Notifications", desc: "Order receipts, updates & alerts" },
    { key: "orders", label: "Order Updates", desc: "Status changes on active orders" },
    { key: "marketing", label: "Marketing Emails", desc: "Promos, offers and new services" },
    { key: "reports", label: "Weekly Reports", desc: "Weekly summary of account activity" },
  ];

  return (
    <div className="min-h-screen bg-[#060609] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-[30%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-fuchsia-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="mb-12">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-gray-500 hover:text-violet-400 transition-colors text-sm mb-6 font-medium">
            ← Back to Dashboard
          </Link>
          <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-2">
            Your Account
          </p>
          <h1 className="text-5xl md:text-6xl font-black">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Settings
            </span>
          </h1>
        </div>

        {/* Profile */}
        <section className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-10 mb-6 hover:border-violet-500/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-2xl shadow-lg shadow-violet-500/20">
              👤
            </div>
            <div>
              <h2 className="text-2xl font-black">Profile</h2>
              <p className="text-gray-500 text-sm">Your personal information</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { label: "Full Name", key: "name", type: "text" },
              { label: "Email Address", key: "email", type: "email" },
              { label: "Company", key: "company", type: "text" },
              { label: "Phone", key: "phone", type: "tel" },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-gray-500 text-sm font-medium mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={profile[field.key as keyof typeof profile]}
                  onChange={(e) => setProfile({ ...profile, [field.key]: e.target.value })}
                  className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/[0.1] rounded-xl focus:outline-none focus:border-violet-500 focus:bg-white/[0.08] transition-all text-white placeholder-gray-600"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-10 mb-6 hover:border-fuchsia-500/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-pink-600 flex items-center justify-center text-2xl shadow-lg shadow-fuchsia-500/20">
              🔔
            </div>
            <div>
              <h2 className="text-2xl font-black">Notifications</h2>
              <p className="text-gray-500 text-sm">Control what you hear from us</p>
            </div>
          </div>

          <div className="space-y-3">
            {notifItems.map((item) => (
              <div
                key={item.key}
                onClick={() => toggleNotif(item.key)}
                className="flex items-center justify-between cursor-pointer group p-4 rounded-2xl hover:bg-white/[0.04] transition-all duration-200"
              >
                <div>
                  <p className="font-semibold group-hover:text-violet-300 transition-colors">
                    {item.label}
                  </p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
                <div className={`relative w-12 h-6 rounded-full transition-all duration-300 border ${
                  notifications[item.key as keyof typeof notifications]
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 border-transparent"
                    : "bg-white/[0.06] border-white/[0.1]"
                }`}>
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 ${
                    notifications[item.key as keyof typeof notifications] ? "translate-x-6" : "translate-x-0.5"
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security */}
        <section className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-10 mb-8 hover:border-indigo-500/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/20">
              🔒
            </div>
            <div>
              <h2 className="text-2xl font-black">Security</h2>
              <p className="text-gray-500 text-sm">Protect your account</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: "Change Password", desc: "Update your login credentials" },
              { label: "Two-Factor Authentication", desc: "Add an extra layer of protection" },
              { label: "Active Sessions", desc: "Review devices logged into your account" },
            ].map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center justify-between p-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-violet-500/30 rounded-2xl text-left group transition-all duration-300"
              >
                <div>
                  <p className="font-semibold group-hover:text-violet-300 transition-colors">
                    {item.label}
                  </p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
                <span className="text-gray-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Save */}
        <button
          onClick={handleSave}
          className="group relative w-full py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-xl font-black shadow-2xl shadow-violet-500/30 hover:scale-[1.02] hover:shadow-violet-500/50 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10">
            {saved ? "✓ Saved!" : "Save Changes"}
          </span>
        </button>
      </div>
    </div>
  );
}