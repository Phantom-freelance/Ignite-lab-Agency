"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JOBS = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build cutting-edge web applications for our clients using Next.js, React, and Node.js.",
    requirements: ["5+ years experience", "Next.js/React expert", "Node.js backend", "Portfolio required"],
    icon: "💻",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create stunning, user-friendly interfaces that wow clients and drive conversions.",
    requirements: ["3+ years experience", "Figma mastery", "Portfolio required", "Client communication"],
    icon: "🎨",
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Hybrid",
    type: "Full-time",
    description: "Drive growth through SEO, social media, and content marketing strategies.",
    requirements: ["2+ years experience", "SEO expert", "Social media marketing", "Analytics driven"],
    icon: "📈",
  },
  {
    id: 4,
    title: "Project Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description: "Lead client projects from kickoff to delivery, ensuring quality and timely completion.",
    requirements: ["4+ years PM experience", "Agile/Scrum certified", "Client management", "Team leadership"],
    icon: "📊",
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
              Join Our Team
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Build The Future With Us
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              We're looking for talented individuals who are passionate about creating exceptional digital experiences.
            </p>
          </div>

          {/* Why Join Us Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: "🚀", title: "Growth", desc: "Level up your skills with challenging projects" },
              { icon: "💰", title: "Competitive Pay", desc: "Industry-leading salaries and benefits" },
              { icon: "🌍", title: "Remote First", desc: "Work from anywhere in the world" },
            ].map((perk, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center hover:border-yellow-400 transition-all duration-300"
              >
                <p className="text-5xl mb-4">{perk.icon}</p>
                <h3 className="text-xl font-black text-white mb-2">{perk.title}</h3>
                <p className="text-zinc-500">{perk.desc}</p>
              </div>
            ))}
          </div>

          {/* Job Listings */}
          <div className="mb-12">
            <h2 className="text-3xl font-black text-white mb-8">Open Positions</h2>
            <div className="space-y-6">
              {JOBS.map((job) => (
                <div
                  key={job.id}
                  className="bg-zinc-900 border border-zinc-800 hover:border-yellow-400 rounded-2xl p-8 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-3xl flex-shrink-0">
                        {job.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <span className="px-4 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-bold">
                            {job.department}
                          </span>
                          <span className="px-4 py-1 bg-zinc-800 text-zinc-400 rounded-full text-xs font-bold">
                            📍 {job.location}
                          </span>
                          <span className="px-4 py-1 bg-zinc-800 text-zinc-400 rounded-full text-xs font-bold">
                            ⏰ {job.type}
                          </span>
                        </div>
                        <p className="text-zinc-400 mb-4">{job.description}</p>
                        
                        {selectedJob === job.id && (
                          <div className="mt-4 p-4 bg-black rounded-xl border border-zinc-800">
                            <p className="text-zinc-500 text-sm font-bold uppercase mb-3">Requirements:</p>
                            <ul className="space-y-2">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="text-zinc-300 flex items-center gap-2">
                                  <span className="text-yellow-400">✓</span> {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="px-6 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-all"
                    >
                      {selectedJob === job.id ? "Hide Details" : "View Details"}
                    </button>
                    <button className="px-6 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-full font-bold hover:border-yellow-400 transition-all">
                      Apply Now →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black text-black mb-4">Don't See Your Role?</h2>
            <p className="text-black/80 text-lg mb-8">
              We're always looking for talented people. Send us your resume!
            </p>
            <button className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-900 transition-all">
              Send Resume →
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
