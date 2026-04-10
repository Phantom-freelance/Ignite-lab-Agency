"use client"
import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center px-6 md:px-12 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <h3 className="text-lg md:text-2xl text-zinc-400 mb-8 font-light">
          We unite top freelancers under one roof — flexible, fast, escrow-protected.
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <Link href="/contact">
            <button className="border-2 border-yellow-400 cursor-pointer text-yellow-400 px-8 py-4 rounded-full text-[20px] font-medium hover:bg-yellow-400 hover:text-black transition-all active:scale-95">
              Start your project
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="bg-yellow-400 cursor-pointer text-black px-8 py-4 rounded-full text-[20px] font-medium hover:bg-white transition-all active:scale-95">
              Apply as a freelancer
            </button>
          </Link>
        </div>
        
        <div className="mt-16">
          <h2 className="text-[24px] md:text-[50px] lg:text-[50px] tracking-[0.2em] text-white font-medium uppercase">
            Phantom Freelance
          </h2>
          <h1 className="text-6xl sm:text-7xl md:text-[140px] lg:text-[200px] xl:text-[240px] font-black leading-[0.8] uppercase text-[#FFC700] tracking-tighter">
            Collective
          </h1>
        </div>
      </div>
    </section>
  );
}
