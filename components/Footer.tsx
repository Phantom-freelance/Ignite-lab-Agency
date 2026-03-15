"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {
  // Animation Variants for content entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <footer className="relative bg-black pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* 1. THE WAVY RIPPLE EFFECT */}
      {/* This container stays fixed, only the internal scaling/skewing creates the "warp" */}
        {/* 1. THE FAST WAVY RIPPLE EFFECT */}
<div className="absolute inset-0 w-full h-full pointer-events-none z-0">
  <motion.div 
    className="relative w-full h-full"
    animate={{
      // Increased skew for more visible "warping"
      skewY: [0, 2, 0, -2, 0], 
      skewX: [0, -1.5, 0, 1.5, 0],
      scale: [1, 1.04, 1],
    }}
    transition={{
      duration: 3, // Shorter duration = Faster movement
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Image 
      src="/value_bg.svg" 
      alt="" 
      fill 
      className="object-cover" 
      priority
    />
  </motion.div>
</div>

      {/* 2. Halftone Dot Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-40 z-0 -translate-x-1/4 -translate-y-1/4">
        <Image src="/dot-bg.png" alt="" fill className="object-contain" />
      </div>

      {/* 3. Giant Background Text "AGENCY" */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0 translate-y-1/4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.12 }}
          transition={{ duration: 1.5 }}
          className="text-[25vw] font-black text-transparent leading-none text-center select-none tracking-tighter"
          style={{ WebkitTextStroke: '2px #FFC700' }}
        >
          AGENCY
        </motion.h2>
      </div>

      {/* 4. MAIN CONTENT */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24"
      >
        <motion.div variants={itemVariants} className="space-y-8">
          <h3 className="text-4xl font-black text-white">
            BBR <span className="text-[#FFC700]">Agency</span>
          </h3>
          <div className="text-zinc-400 space-y-4 text-lg font-medium leading-relaxed">
            <p>2728 Hickory Street<br />Salt Lake City, UT 84104</p>
            <p className="flex items-center gap-3 mt-6 text-white font-bold">
              <span className="text-[#FFC700] text-xl">📞</span> +1 206-214-2298
            </p>
            <p className="flex items-center gap-3 text-white font-bold">
              <span className="text-[#FFC700] text-xl">✉️</span> support@bbragency.com
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-white font-black text-xl mb-10 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Listings', 'Services', 'Blogs', 'Become a Agent'].map((item) => (
              <li key={item}>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 10, color: '#FFC700' }}
                  className="text-zinc-400 hover:text-[#FFC700] transition-colors text-lg font-bold"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-white font-black text-xl mb-10 uppercase tracking-widest">Discovery</h4>
          <ul className="space-y-4">
            {['Canada', 'United States', 'Germany', 'Africa', 'India'].map((item) => (
              <li key={item}>
                <motion.a 
                  href="#" 
                  whileHover={{ x: 10, color: '#FFC700' }}
                  className="text-zinc-400 hover:text-[#FFC700] transition-colors text-lg font-bold"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <h4 className="text-white font-black text-xl uppercase tracking-widest">Subscribe to our Newsletter!</h4>
          <div className="relative group max-w-sm">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white rounded-full py-5 px-8 text-black text-base font-bold outline-none focus:ring-4 focus:ring-[#FFC700]/30 transition-all"
            />
            <button className="absolute right-2 top-2 bg-[#FFC700] hover:bg-black group w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="group-hover:stroke-[#FFC700] transition-colors">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="pt-6">
            <p className="text-zinc-500 text-sm font-black uppercase tracking-[0.3em] mb-6">Follow Us on</p>
            <div className="flex gap-5">
              {['linkedin', 'facebook', 'instagram'].map((name) => (
                <motion.a 
                  key={name}
                  href="#" 
                  whileHover={{ scale: 1.1, backgroundColor: '#FFC700', color: '#000' }}
                  className="w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
                >
                  <span className="capitalize text-[10px]">{name[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 5. Copyright Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 pt-16 flex justify-center items-center"
      >
        <p className="text-[#FFC700] text-lg md:text-xl font-black uppercase tracking-[0.5em] text-center">
          &copy; BBRagency — All rights reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;