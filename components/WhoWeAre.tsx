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
            <p className=" text-xl leading-relaxed  font-regular">
             We’re a team of passionate web specialists who genuinely care about building things that work, not just look good. Our focus has always been on creating meaningful digital experiences that help businesses grow and connect with their audience.
            </p>
            <p className="text-xl  leading-relaxed  mt-6 font-regular">
              Over time, we’ve evolved into more than just a digital agency. Alongside delivering high-quality web solutions, we’ve built a space where skilled freelancers and businesses can collaborate in a smarter, more focused way.
            </p>
            <p className="text-xl  leading-relaxed  mt-6 font-regular">
            We believe in working with experts, not generalists, and that mindset reflects in everything we do from design to development to strategy. Every project we take on is approached with attention to detail, clear thinking, and a commitment to results.

At our core, we’re problem-solvers who enjoy turning ideas into practical, scalable digital solutions.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
