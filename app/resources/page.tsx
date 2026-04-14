"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const RESOURCES = [
  {
    category: "Guides & Tutorials",
    icon: "📚",
    items: [
      { title: "Getting Started with Web Development", type: "PDF", size: "2.4 MB" },
      { title: "SEO Best Practices 2026", type: "PDF", size: "1.8 MB" },
      { title: "UI/UX Design Principles", type: "PDF", size: "3.2 MB" },
      { title: "Social Media Marketing Guide", type: "PDF", size: "2.1 MB" },
    ]
  },
  {
    category: "Templates & Tools",
    icon: "🛠️",
    items: [
      { title: "Project Brief Template", type: "DOCX", size: "156 KB" },
      { title: "Brand Guidelines Template", type: "PDF", size: "890 KB" },
      { title: "Content Calendar Template", type: "XLSX", size: "245 KB" },
      { title: "Wireframe Kit", type: "Figma", size: "N/A" },
    ]
  },
  {
    category: "Case Studies",
    icon: "📊",
    items: [
      { title: "E-commerce Success Story", type: "PDF", size: "4.5 MB" },
      { title: "SaaS Platform Redesign", type: "PDF", size: "3.8 MB" },
      { title: "Mobile App Launch Strategy", type: "PDF", size: "2.9 MB" },
      { title: "Brand Transformation Journey", type: "PDF", size: "5.1 MB" },
    ]
  },
  {
    category: "Industry Reports",
    icon: "📈",
    items: [
      { title: "Digital Trends 2026", type: "PDF", size: "6.2 MB" },
      { title: "Mobile-First Design Report", type: "PDF", size: "4.7 MB" },
      { title: "AI in Web Development", type: "PDF", size: "3.5 MB" },
      { title: "Future of E-commerce", type: "PDF", size: "5.8 MB" },
    ]
  },
];

export default function Resources() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="mb-16 text-center">
            <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
              Knowledge Base
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Free Resources
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Download guides, templates, and tools to supercharge your digital projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {RESOURCES.map((section, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-3xl">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-black text-white">
                    {section.category}
                  </h2>
                </div>

                <div className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center justify-between p-4 bg-black border border-zinc-800 rounded-xl hover:border-yellow-400 transition-all group"
                    >
                      <div>
                        <p className="font-bold text-white mb-1">{item.title}</p>
                        <p className="text-zinc-500 text-sm">
                          {item.type} • {item.size}
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-bold hover:bg-yellow-500 transition-all opacity-0 group-hover:opacity-100">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black text-white mb-4">
              Need Something Specific?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Can't find the resource you're looking for? Let us know and we'll create it for you.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-500 transition-all"
            >
              Request a Resource →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
