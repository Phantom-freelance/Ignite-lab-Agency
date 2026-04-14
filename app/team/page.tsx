"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TEAM = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "10+ years building digital products. Former tech lead at Google.",
    image: "👩‍💼",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    bio: "Award-winning designer. Crafted experiences for Fortune 500 companies.",
    image: "👨‍🎨",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Developer",
    bio: "Full-stack wizard. Built 100+ production apps across 5 continents.",
    image: "👩‍💻",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "David Park",
    role: "Marketing Director",
    bio: "Growth hacker. Scaled startups from 0 to 1M users.",
    image: "👨‍💼",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Lisa Anderson",
    role: "Project Manager",
    bio: "Operations ninja. Delivered 200+ projects on time, on budget.",
    image: "👩‍💼",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "James Wilson",
    role: "Senior Developer",
    bio: "Code architect. Loves solving complex problems with elegant solutions.",
    image: "👨‍💻",
    social: { twitter: "#", linkedin: "#" },
  },
];

export default function Team() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
              Meet The Team
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              The People Behind The Magic
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              A diverse team of creators, builders, and innovators dedicated to bringing your vision to life.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {TEAM.map((member, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300 group"
              >
                <div className="w-24 h-24 rounded-2xl bg-yellow-400 flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {member.image}
                </div>
                <h3 className="text-2xl font-black text-white mb-1">{member.name}</h3>
                <p className="text-yellow-400 font-bold text-sm mb-4">{member.role}</p>
                <p className="text-zinc-400 mb-6">{member.bio}</p>
                <div className="flex gap-4">
                  
                    href={member.social.twitter}
                    className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-yellow-400 flex items-center justify-center transition-all group"
                  >
                    <span className="group-hover:scale-110 transition-transform">🐦</span>
                  </a>
                  
                    href={member.social.linkedin}
                    className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-yellow-400 flex items-center justify-center transition-all group"
                  >
                    <span className="group-hover:scale-110 transition-transform">💼</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Join CTA */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-black text-white mb-4">Want to Join Us?</h2>
            <p className="text-zinc-400 text-lg mb-8">
              We're always looking for talented individuals to join our growing team.
            </p>
            
              href="/careers"
              className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all"
            >
              View Open Positions →
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
