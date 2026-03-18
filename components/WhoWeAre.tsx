"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IdentitySection() {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:py-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* 1. Header Section (Who We Are?) */}
        <div className="relative w-full flex flex-col items-center mb-12 md:mb-16">
          <span className="text-zinc-400 uppercase tracking-[0.3em] text-sm mb-4">
            Identity
          </span>
          
          <div className="relative">
            <h2 
              className="text-6xl md:text-9xl font-bold opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none"
              style={{ 
                WebkitTextStroke: "1px #FFC700", 
                color: "transparent" 
              }}
            >
              Who We Are?
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#FFC700] relative z-10 text-center">
              Who We Are?
            </h3>
          </div>
        </div>

        {/* 2. Centered Content Stack */}
        <div className="flex flex-col items-center w-full space-y-12">
          
          {/* IMAGE (Top - Centered) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <div className="relative w-full max-w-2xl">
              <img 
                src="/whoweare.svg" 
                alt="Who We Are Illustration" 
                className="w-full h-auto object-contain"
              />
              {/* Glow effect */}
              <div className="absolute -inset-10 bg-yellow-500/5 blur-3xl rounded-full -z-10" />
            </div>
          </motion.div>

          {/* TEXT (Bottom - Centered) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-6xl"
          >
            <p className=" text-3xl sm:text-2xl leading-relaxed  font-regular">
              You would never go to your GP for heart surgery. So why would you get your most important online assets, your website, developed by a generalist &quot;full service&quot; marketing, SEO or creative agency?
            </p>
            <p className="text-3xl sm:text-2xl leading-relaxed  mt-6 font-regular">
              We&apos;ve handpicked our web design Melbourne family to be top-notch web designers, web developers, conversion specialists, business analysts, API integrators, project managers and digital strategists – we&apos;re true web purists. Everything from simple websites to full business operational solutions.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}