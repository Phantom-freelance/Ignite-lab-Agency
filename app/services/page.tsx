"use client"

import React from 'react';

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h1 
          className="text-6xl md:text-8xl font-black text-white uppercase mb-6" 
          style={{ 
            // Fix: React requires the 'W' to be capitalized for vendor prefixes
            WebkitTextStroke: '1.5px #FFC700' 
          }}
        >
          Architecture <span className="text-[#FFC700]">In Progress</span>
        </h1>
        
        <p className="text-zinc-500 text-lg md:text-xl leading-relaxed">
          We are currently engineering a high-performance digital experience for this section. 
          Our team is finalizing the service frameworks to ensure they align with the 
          BBR Agency standard of excellence.
        </p>
        
        <div className="mt-10 h-1 w-20 bg-[#FFC700] mx-auto" />
      </div>
    </main>
  );
}