"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const OurBlog = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-yellow-400 text-sm font-bold tracking-widest mb-4">INSIGHTS</p>
            <h2 className="text-5xl md:text-7xl font-black text-white">Latest From Our Blog</h2>
          </div>
          <div className="hidden md:flex gap-4">
            <Link href="/contact">
              <button className="cursor-pointer px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-black transition-all active:scale-95">
                Start your project
              </button>
            </Link>
            <Link href="/auth/signup">
              <button className="cursor-pointer px-8 py-3 rounded-full bg-yellow-400 text-black font-medium hover:bg-white transition-all active:scale-95">
                Apply as a freelancer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
