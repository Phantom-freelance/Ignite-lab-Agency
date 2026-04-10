"use client"
import React from 'react';
import Link from 'next/link';

const PortfolioHero = () => {
  return (
    <section 
      className="relative w-full bg-black pt-32 pb-16 px-6 md:px-12 lg:px-6 overflow-hidden" 
      style={{
        backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <h4 className="text-zinc-300 text-lg md:text-2xl font-medium mb-12 tracking-wide">
        Our Work
      </h4>

      <div className="flex flex-wrap gap-6 mb-16 relative z-10">
        <Link href="/contact">
          <button className="cursor-pointer px-10 py-4 rounded-full border-2 border-yellow-400 text-yellow-400 font-medium text-base md:text-lg transition-all duration-300 hover:bg-white hover:text-black active:scale-95">
            Start your project
          </button>
        </Link>
        <Link href="/auth/signup">
          <button className="cursor-pointer px-10 py-4 rounded-full bg-yellow-400 text-black font-medium text-base md:text-lg transition-all duration-300 hover:bg-white active:scale-95">
            Apply as a freelancer
          </button>
        </Link>
      </div>

      <div className="w-full">
        <h1 className="text-6xl sm:text-7xl md:text-[140px] lg:text-[200px] xl:text-[240px] font-black leading-[0.8] uppercase text-[#FFC700] tracking-tighter">
          Portfolio
        </h1>
      </div>

      <div className="absolute top-20 right-10 hidden md:flex gap-3 pointer-events-none">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-70" />
        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-6 opacity-40" />
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-80" />
      </div>
    </section>
  );
};

export default PortfolioHero;
