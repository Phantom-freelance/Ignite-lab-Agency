"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES = [
  { id: "web", name: "Website Development", basePrice: 2000, icon: "🌐" },
  { id: "mobile", name: "Mobile App", basePrice: 5000, icon: "📱" },
  { id: "design", name: "UI/UX Design", basePrice: 1500, icon: "🎨" },
  { id: "branding", name: "Branding", basePrice: 1000, icon: "✨" },
  { id: "seo", name: "SEO Optimization", basePrice: 800, icon: "📈" },
  { id: "marketing", name: "Digital Marketing", basePrice: 1200, icon: "📢" },
];

const COMPLEXITY = [
  { id: "basic", name: "Basic", multiplier: 1, desc: "Simple & straightforward" },
  { id: "standard", name: "Standard", multiplier: 1.5, desc: "Most popular choice" },
  { id: "advanced", name: "Advanced", multiplier: 2.5, desc: "Complex & custom" },
];

const TIMELINE = [
  { id: "urgent", name: "Rush (1-2 weeks)", multiplier: 1.5 },
  { id: "standard", name: "Standard (3-4 weeks)", multiplier: 1 },
  { id: "flexible", name: "Flexible (5+ weeks)", multiplier: 0.9 },
];

export default function PricingCalculator() {
  const [selected, setSelected] = useState<string[]>([]);
  const [complexity, setComplexity] = useState("standard");
  const [timeline, setTimeline] = useState("standard");

  const toggleService = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    const servicesTotal = selected.reduce((sum, id) => {
      const service = SERVICES.find((s) => s.id === id);
      return sum + (service?.basePrice || 0);
    }, 0);

    const complexityMult = COMPLEXITY.find((c) => c.id === complexity)?.multiplier || 1;
    const timelineMult = TIMELINE.find((t) => t.id === timeline)?.multiplier || 1;

    return Math.round(servicesTotal * complexityMult * timelineMult);
  };

  const total = calculateTotal();

  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4">
              Interactive Tool
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Pricing Calculator
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Get an instant estimate for your project. Mix and match services to see pricing.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Options */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Services */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-2xl font-black text-white mb-6">Select Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        selected.includes(service.id)
                          ? "bg-yellow-400 border-yellow-400 text-black"
                          : "bg-black border-zinc-800 hover:border-yellow-400 text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{service.icon}</span>
                        <div className="flex-1">
                          <p className={`font-bold ${selected.includes(service.id) ? "text-black" : "text-white"}`}>
                            {service.name}
                          </p>
                          <p className={`text-sm ${selected.includes(service.id) ? "text-black/70" : "text-zinc-500"}`}>
                            ${service.basePrice}+
                          </p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selected.includes(service.id) ? "border-black bg-black" : "border-zinc-700"
                        }`}>
                          {selected.includes(service.id) && <span className="text-yellow-400">✓</span>}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Complexity */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-2xl font-black text-white mb-6">Complexity Level</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {COMPLEXITY.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setComplexity(level.id)}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        complexity === level.id
                          ? "bg-yellow-400 border-yellow-400 text-black"
                          : "bg-black border-zinc-800 hover:border-yellow-400 text-white"
                      }`}
                    >
                      <p className={`font-bold mb-1 ${complexity === level.id ? "text-black" : "text-white"}`}>
                        {level.name}
                      </p>
                      <p className={`text-xs ${complexity === level.id ? "text-black/70" : "text-zinc-500"}`}>
                        {level.desc}
                      </p>
                      <p className={`text-sm font-bold mt-2 ${complexity === level.id ? "text-black" : "text-yellow-400"}`}>
                        ×{level.multiplier}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-2xl font-black text-white mb-6">Timeline</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {TIMELINE.map((time) => (
                    <button
                      key={time.id}
                      onClick={() => setTimeline(time.id)}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        timeline === time.id
                          ? "bg-yellow-400 border-yellow-400 text-black"
                          : "bg-black border-zinc-800 hover:border-yellow-400 text-white"
                      }`}
                    >
                      <p className={`font-bold mb-1 ${timeline === time.id ? "text-black" : "text-white"}`}>
                        {time.name}
                      </p>
                      <p className={`text-sm font-bold mt-2 ${timeline === time.id ? "text-black" : "text-yellow-400"}`}>
                        ×{time.multiplier}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sticky top-32">
                <h2 className="text-2xl font-black text-white mb-6">Estimate</h2>
                
                {selected.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-6xl mb-4">🎯</p>
                    <p className="text-zinc-500">Select services to see estimate</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {selected.map((id) => {
                        const service = SERVICES.find((s) => s.id === id);
                        return (
                          <div key={id} className="flex justify-between items-center">
                            <span className="text-zinc-400">{service?.name}</span>
                            <span className="text-white font-bold">${service?.basePrice}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="border-t border-zinc-800 pt-4 mb-6 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-500">Complexity</span>
                        <span className="text-yellow-400 font-bold">
                          ×{COMPLEXITY.find((c) => c.id === complexity)?.multiplier}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-500">Timeline</span>
                        <span className="text-yellow-400 font-bold">
                          ×{TIMELINE.find((t) => t.id === timeline)?.multiplier}
                        </span>
                      </div>
                    </div>

                    <div className="bg-yellow-400 rounded-xl p-6 mb-6">
                      <p className="text-black text-sm font-bold uppercase mb-2">Total Estimate</p>
                      <p className="text-black text-4xl font-black">${total.toLocaleString()}</p>
                    </div>

                    <button className="w-full bg-black text-yellow-400 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all">
                      Get Exact Quote →
                    </button>

                    <p className="text-zinc-500 text-xs text-center mt-4">
                      *Final price may vary based on specific requirements
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
