"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MOCK_PORTFOLIO = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: "🛍️",
    tech: ["Next.js", "Stripe", "Tailwind"],
    completed: "2026-03-15",
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    image: "💪",
    tech: ["React Native", "Firebase"],
    completed: "2026-02-20",
  },
];

const MOCK_TESTIMONIALS = [
  {
    id: 1,
    client: "John Smith",
    company: "Tech Startup Inc",
    rating: 5,
    text: "Outstanding work! Delivered ahead of schedule and exceeded expectations.",
    date: "2026-03-20",
  },
  {
    id: 2,
    client: "Sarah Johnson",
    company: "Digital Agency",
    rating: 5,
    text: "Professional, creative, and easy to work with. Highly recommend!",
    date: "2026-02-15",
  },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("portfolio");

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
            
            {/* Profile Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 mb-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-32 h-32 rounded-2xl bg-yellow-400 flex items-center justify-center text-6xl">
                  👤
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-black text-white mb-2">John Doe</h1>
                  <p className="text-yellow-400 font-bold mb-4">@johndoe</p>
                  <p className="text-zinc-400 mb-6">
                    Full-stack developer passionate about building amazing web experiences. 
                    Specializing in Next.js, React, and modern web technologies.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-bold">
                      Web Development
                    </span>
                    <span className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-bold">
                      UI/UX Design
                    </span>
                    <span className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-bold">
                      Mobile Apps
                    </span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Projects", value: "12" },
                { label: "Reviews", value: "8" },
                { label: "Rating", value: "5.0" },
                { label: "Member Since", value: "2025" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-yellow-400 transition-all"
                >
                  <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                  <p className="text-zinc-500 text-sm font-bold uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-zinc-800">
            {["portfolio", "testimonials"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-bold capitalize transition-all ${
                  activeTab === tab
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Portfolio Tab */}
          {activeTab === "portfolio" && (
            <div className="grid md:grid-cols-2 gap-8">
              {MOCK_PORTFOLIO.map((project) => (
                <div
                  key={project.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300 group"
                >
                  <div className="w-full h-48 rounded-xl bg-yellow-400 flex items-center justify-center text-6xl mb-6 group-hover:scale-105 transition-transform">
                    {project.image}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-black border border-zinc-800 text-zinc-400 rounded-full text-xs font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-zinc-500 text-sm">
                    Completed: {new Date(project.completed).toLocaleDateString()}
                  </p>
                </div>
              ))}
              
              {/* Add Project */}
              <button className="bg-zinc-900 border-2 border-dashed border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-all min-h-[300px] flex flex-col items-center justify-center group">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  +
                </div>
                <p className="text-zinc-500 font-bold group-hover:text-yellow-400 transition-colors">
                  Add New Project
                </p>
              </button>
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === "testimonials" && (
            <div className="space-y-6">
              {MOCK_TESTIMONIALS.map((review) => (
                <div
                  key={review.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-black text-white text-lg">{review.client}</p>
                      <p className="text-zinc-500 text-sm">{review.company}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-zinc-300 mb-4">{review.text}</p>
                  <p className="text-zinc-600 text-xs">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
