"use client";

import { useState } from "react";

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    company: "Tech Corp",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, San Francisco, CA 94102",
    avatar: "👤",
  });

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-12">
          <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
            Account Management
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white">
            Your Profile
          </h1>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-yellow-400 flex items-center justify-center text-5xl">
                {profile.avatar}
              </div>
              <div>
                <h2 className="text-3xl font-black text-white mb-2">{profile.name}</h2>
                <p className="text-zinc-400">{profile.email}</p>
              </div>
            </div>
            
            {!editing && (
              <button
                onClick={() => setEditing(true)}
                className="px-6 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all"
              >
                Edit Profile
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-zinc-500 text-sm font-bold uppercase mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                disabled={!editing}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 text-white disabled:opacity-50"
              />
            </div>

            <div>
              <label className="text-zinc-500 text-sm font-bold uppercase mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                disabled={!editing}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 text-white disabled:opacity-50"
              />
            </div>

            <div>
              <label className="text-zinc-500 text-sm font-bold uppercase mb-2 block">
                Company
              </label>
              <input
                type="text"
                value={profile.company}
                onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                disabled={!editing}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 text-white disabled:opacity-50"
              />
            </div>

            <div>
              <label className="text-zinc-500 text-sm font-bold uppercase mb-2 block">
                Phone Number
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                disabled={!editing}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 text-white disabled:opacity-50"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-zinc-500 text-sm font-bold uppercase mb-2 block">
                Address
              </label>
              <input
                type="text"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                disabled={!editing}
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 text-white disabled:opacity-50"
              />
            </div>
          </div>

          {editing && (
            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSave}
                className="flex-1 px-6 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditing(false)}
                className="flex-1 px-6 py-3 bg-zinc-800 text-white rounded-full font-bold hover:bg-zinc-700 transition-all"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-xl font-black text-white mb-4">Change Password</h3>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 text-white"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 text-white"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:outline-none focus:border-yellow-400 text-white"
              />
              <button className="w-full px-6 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all">
                Update Password
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-xl font-black text-white mb-4">Danger Zone</h3>
            <p className="text-zinc-400 mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button className="w-full px-6 py-3 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full font-bold hover:bg-red-500/30 transition-all">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
