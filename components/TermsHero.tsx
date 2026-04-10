"use client"
import React from 'react';

const TermsHero = () => {
  return (
    <section 
      className="relative w-full bg-black pt-32 pb-16 px-6 md:px-12 lg:px-6 overflow-hidden" 
      style={{
        backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <h4 className="text-zinc-300 text-lg md:text-2xl font-medium mb-12 tracking-wide">
        Legal
      </h4>
      <div className="w-full mb-8">
        <h1 className="text-6xl sm:text-7xl md:text-[140px] lg:text-[200px] xl:text-[240px] font-black leading-[0.8] uppercase text-[#FFC700] tracking-tighter">
          Terms
        </h1>
      </div>
      <p className="text-zinc-400 text-lg md:text-xl max-w-3xl">
        Last updated: <span className="text-yellow-400 font-semibold">April 10, 2026</span>
      </p>
      <div className="absolute top-20 right-10 hidden md:flex gap-3 pointer-events-none">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-70" />
        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-6 opacity-40" />
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-80" />
      </div>
    </section>
  );
};

export default TermsHero;
