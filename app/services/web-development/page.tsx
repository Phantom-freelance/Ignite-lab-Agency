"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';

export default function WebDevelopment() {
  const features = [
    "Custom Website Development",
    "Responsive Design",
    "SEO Optimization",
    "Performance Optimization",
    "Content Management System",
    "E-commerce Integration",
    "API Development",
    "Maintenance & Support"
  ];

  return (
    <main className="bg-black min-h-screen pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <Link href="/services" className="inline-flex items-center gap-2 text-yellow-400 hover:text-white transition-colors mb-8">
          <ArrowLeft size={20} />
          Back to Services
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-6xl mb-6">🌐</div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">Web Development</h1>
          <p className="text-2xl text-zinc-400 mb-12">
            Build powerful, scalable web applications that drive your business forward
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What We Offer</h2>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <Check className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3>
              <p className="text-zinc-400 mb-6">
                Let's discuss your project and build something amazing together.
              </p>
              <Link href="/contact">
                <button className="w-full bg-yellow-400 text-black py-4 rounded-full font-bold text-lg hover:bg-white transition-all active:scale-95">
                  Get a Quote
                </button>
              </Link>
              <Link href="/auth/signup">
                <button className="w-full mt-4 border-2 border-yellow-400 text-yellow-400 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all active:scale-95">
                  Join as Freelancer
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
