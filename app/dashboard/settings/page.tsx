"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    orders: true,
    marketing: false,
    reports: true,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/signin");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile({
          name: data.name || "",
          email: data.email || "",
          company: data.company || "",
          phone: data.phone || "",
        });
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("token");
        router.push("/auth/signin");
      });
  }, [router]);

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: profile.name,
          company: profile.company,
          phone: profile.phone,
        }),
      });

      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
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

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-zinc-800 border-t-yellow-400 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-12">
          <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
            Account Settings ⚙️
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white">
            Settings
          </h1>
        </div>

        {saved && (
          <div className="bg-green-500/20 border border-green-500 text-green-400 px-6 py-4 rounded-xl mb-8 font-bold">
            ✓ Settings saved successfully!
          </div>
        )}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-6">Profile Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-zinc-500 text-sm font-bold uppercase mb-2 block">Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-zinc-500 text-sm font-bold uppercase mb-2 block">Email</label>
              <input
                type="email"
                value={profile.email}
                disabled
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white opacity-50"
              />
            </div>
            <div>
              <label className="text-zinc-500 text-sm font-bold uppercase mb-2 block">Company</label>
              <input
                type="text"
                value={profile.company}
                onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-zinc-500 text-sm font-bold uppercase mb-2 block">Phone</label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white focus:border-yellow-400 focus:outline-none"
              />
            </div>
          </div>

          <button
            onClick={handleSave}
            className="mt-6 px-8 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all"
          >
            Save Changes
          </button>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-white mb-6">Notifications</h2>
          <div className="space-y-4">
            {notifItems.map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between p-4 bg-black border border-zinc-800 rounded-xl"
              >
                <div>
                  <p className="font-bold text-white">{item.label}</p>
                  <p className="text-zinc-500 text-sm">{item.desc}</p>
                </div>
                <button
                  onClick={() => toggleNotif(item.key)}
                  className={`w-14 h-8 rounded-full transition-all ${
                    notifications[item.key as keyof typeof notifications]
                      ? "bg-yellow-400"
                      : "bg-zinc-700"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-black transition-transform ${
                      notifications[item.key as keyof typeof notifications]
                        ? "translate-x-7"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
