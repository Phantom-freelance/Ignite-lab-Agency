"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    company: "Acme Inc",
    phone: "+1 234 567 8900",
  });
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    orders: true,
    marketing: false,
    reports: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const toggleNotif = (key: string) =>
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));

  const notifItems = [
    { key: "email", label: "Email Notifications", desc: "Receipts, updates & alerts" },
    { key: "orders", label: "Order Updates", desc: "Status changes on active orders" },
    { key: "marketing", label: "Marketing Emails", desc: "Promos & new services" },
    { key: "reports", label: "Weekly Reports", desc: "Account activity summaries" },
  ];

  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-yellow-400 transition-colors text-sm mb-8 font-bold"
            >
              ← Back to Dashboard
            </Link>
            <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
              Your Account
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white">
              Settings
            </h1>
          </div>

          {/* Profile Section */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 mb-8 hover:border-yellow-400 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-3xl">
                👤
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">Profile</h2>
                <p className="text-zinc-500 text-sm">Your personal information</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", key: "name", type: "text" },
                { label: "Email Address", key: "email", type: "email" },
                { label: "Company", key: "company", type: "text" },
                { label: "Phone", key: "phone", type: "tel" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-zinc-500 text-sm font-bold uppercase tracking-wider mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={profile[field.key as keyof typeof profile]}
                    onChange={(e) =>
                      setProfile({ ...profile, [field.key]: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 transition-all text-white"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Notifications Section */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 mb-8 hover:border-yellow-400 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-3xl">
                🔔
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">Notifications</h2>
                <p className="text-zinc-500 text-sm">Control what you hear from us</p>
              </div>
            </div>

            <div className="space-y-4">
              {notifItems.map((item) => (
                <div
                  key={item.key}
                  onClick={() => toggleNotif(item.key)}
                  className="flex items-center justify-between cursor-pointer p-5 rounded-xl hover:bg-black transition-all duration-200"
                >
                  <div>
                    <p className="font-bold text-white mb-1">{item.label}</p>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                  <div
                    className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                      notifications[item.key as keyof typeof notifications]
                        ? "bg-yellow-400"
                        : "bg-zinc-800"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 bg-black rounded-full transition-all duration-300 ${
                        notifications[item.key as keyof typeof notifications]
                          ? "translate-x-7"
                          : "translate-x-1"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Security Section */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 mb-10 hover:border-yellow-400 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-3xl">
                🔒
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">Security</h2>
                <p className="text-zinc-500 text-sm">Protect your account</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Change Password", desc: "Update login credentials" },
                { label: "Two-Factor Auth", desc: "Extra layer of protection" },
                { label: "Active Sessions", desc: "Review logged devices" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center justify-between p-5 bg-black border border-zinc-800 hover:border-yellow-400 rounded-xl text-left group transition-all duration-300"
                >
                  <div>
                    <p className="font-bold text-white mb-1">{item.label}</p>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                  <span className="text-zinc-500 group-hover:text-yellow-400 group-hover:translate-x-2 transition-all duration-300 text-xl">
                    →
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full py-5 rounded-full bg-yellow-400 text-black text-xl font-black hover:bg-yellow-500 transition-all active:scale-95"
          >
            {saved ? "✓ Saved!" : "Save Changes"}
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}