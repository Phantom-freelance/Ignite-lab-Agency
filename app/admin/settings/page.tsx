"use client";

import { useState } from "react";

export default function AdminSettings() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    siteName: "BBR Agency",
    siteEmail: "hello@job-n-me.com",
    supportEmail: "support@job-n-me.com",
    phone: "+1 (555) 000-0000",
    address: "123 Agency St, San Francisco, CA",
    maintenanceMode: false,
    emailNotifications: true,
    newOrderAlerts: true,
    weeklyReports: false,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">

        <div className="mb-12">
          <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-2">Admin Dashboard</p>
          <h1 className="text-5xl md:text-7xl font-black text-white">Settings</h1>
        </div>

        <div className="space-y-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Site Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Site Name", key: "siteName", type: "text" },
                { label: "Main Email", key: "siteEmail", type: "email" },
                { label: "Support Email", key: "supportEmail", type: "email" },
                { label: "Phone", key: "phone", type: "tel" },
                { label: "Address", key: "address", type: "text" },
              ].map((field) => (
                <div key={field.key} className={field.key === "address" ? "md:col-span-2" : ""}>
                  <label className="text-zinc-500 text-sm font-bold uppercase mb-2 block">{field.label}</label>
                  <input
                    type={field.type}
                    value={settings[field.key as keyof typeof settings] as string}
                    onChange={(e) => setSettings({ ...settings, [field.key]: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-yellow-400"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Notifications</h2>
            <div className="space-y-4">
              {[
                { label: "Email Notifications", sub: "Receive general email alerts", key: "emailNotifications" },
                { label: "New Order Alerts", sub: "Get notified when new orders come in", key: "newOrderAlerts" },
                { label: "Weekly Reports", sub: "Receive weekly summary reports", key: "weeklyReports" },
              ].map((toggle) => (
                <div key={toggle.key} className="flex items-center justify-between p-4 bg-black border border-zinc-800 rounded-xl">
                  <div>
                    <p className="font-bold text-white">{toggle.label}</p>
                    <p className="text-zinc-500 text-sm">{toggle.sub}</p>
                  </div>
                  <button
                    onClick={() => setSettings({ ...settings, [toggle.key]: !settings[toggle.key as keyof typeof settings] })}
                    className={`w-14 h-7 rounded-full transition-all relative ${
                      settings[toggle.key as keyof typeof settings] ? "bg-yellow-400" : "bg-zinc-700"
                    }`}
                  >
                    <span className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                      settings[toggle.key as keyof typeof settings] ? "left-8" : "left-1"
                    }`}></span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-2">Maintenance Mode</h2>
            <p className="text-zinc-400 mb-6">When enabled, the site will show a maintenance page to all visitors.</p>
            <div className="flex items-center justify-between p-4 bg-black border border-zinc-800 rounded-xl">
              <div>
                <p className="font-bold text-white">Maintenance Mode</p>
                <p className="text-zinc-500 text-sm">
                  Currently: <span className={settings.maintenanceMode ? "text-red-400" : "text-green-400"}>
                    {settings.maintenanceMode ? "ON — Site is offline" : "OFF — Site is live"}
                  </span>
                </p>
              </div>
              <button
                onClick={() => setSettings({ ...settings, maintenanceMode: !settings.maintenanceMode })}
                className={`w-14 h-7 rounded-full transition-all relative ${
                  settings.maintenanceMode ? "bg-red-500" : "bg-zinc-700"
                }`}
              >
                <span className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${
                  settings.maintenanceMode ? "left-8" : "left-1"
                }`}></span>
              </button>
            </div>
          </div>

          <button
            onClick={handleSave}
            className={`w-full py-4 rounded-full font-black text-lg transition-all ${
              saved ? "bg-green-500 text-white" : "bg-yellow-400 text-black hover:bg-yellow-500"
            }`}
          >
            {saved ? "✅ Settings Saved!" : "Save All Settings"}
          </button>
        </div>
      </div>
    </div>
  );
}
