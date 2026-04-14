"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CATEGORIES = ["All", "Templates", "Guides", "Tools", "Ebooks"];

const RESOURCES = [
  {
    id: 1,
    title: "Website Launch Checklist",
    category: "Guides",
    description: "Complete 50-point checklist before going live with your website.",
    format: "PDF",
    size: "2.5 MB",
    downloads: "1.2k",
    icon: "📋",
  },
  {
    id: 2,
    title: "Landing Page Template",
    category: "Templates",
    description: "High-converting landing page template built with Next.js and Tailwind.",
    format: "ZIP",
    size: "5.8 MB",
    downloads: "3.4k",
    icon: "🎨",
  },
  {
    id: 3,
    title: "SEO Optimization Guide",
    category: "Ebooks",
    description: "Master on-page and off-page SEO to rank higher on Google.",
    format: "PDF",
    size: "8.3 MB",
    downloads: "2.1k",
    icon: "📚",
  },
  {
    id: 4,
    title: "Brand Identity Toolkit",
    category: "Tools",
    description: "Color palette generator, logo templates, and brand guidelines.",
    format: "ZIP",
    size: "12 MB",
    downloads: "890",
    icon: "✨",
  },
  {
    id: 5,
    title: "Social Media Content Calendar",
    category: "Templates",
    description: "Plan 30 days of content across all platforms in one spreadsheet.",
    format: "XLSX",
    size: "1.2 MB",
    downloads: "4.5k",
    icon: "📅",
  },
  {
    id: 6,
    title: "Web Design Trends 2026",
    category: "Ebooks",
    description: "Stay ahead with the latest design trends, patterns, and best practices.",
    format: "PDF",
    size: "6.7 MB",
    downloads: "1.8k",
    icon: "🚀",
  },
];

export default function Resources() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? RESOURCES
      : RESOURCES.filter((r) => r.category === category);

  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
              Free Downloads
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Resources & Downloads
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Free templates, guides, and tools to help you build better digital products.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  category === cat
                    ? "bg-yellow-400 text-black"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-yellow-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((resource) => (
              <div
                key={resource.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {resource.icon}
                  </div>
                  <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-bold">
                    {resource.category}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-zinc-400 mb-6 text-sm">
                  {resource.description}
                </p>

                <div className="flex items-center gap-4 mb-6 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    📄 {resource.format}
                  </span>
                  <span className="flex items-center gap-1">
                    💾 {resource.size}
                  </span>
                  <span className="flex items-center gap-1">
                    ⬇️ {resource.downloads}
                  </span>
                </div>

                <button className="w-full bg-yellow-400 text-black py-3 rounded-full font-bold hover:bg-yellow-500 transition-all group-hover:scale-105">
                  Download Free →
                </button>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black text-black mb-4">
              Get New Resources Weekly
            </h2>
            <p className="text-black/80 text-lg mb-8">
              Subscribe to our newsletter for exclusive downloads and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-black bg-white/90 focus:outline-none focus:bg-white"
              />
              <button className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-zinc-900 transition-all whitespace-nowrap">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
