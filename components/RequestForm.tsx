"use client";

import React from 'react';
import { motion } from 'framer-motion';

const RequestForm = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-black py-24 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Header Section */}
{/* Header Section */}
<div className="text-center mb-12 relative w-full py-10">
  {/* The Giant Background Title with Stroke */}
  <motion.h2 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 0.2, scale: 1 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 text-7xl md:text-9xl lg:text-[13rem] font-black uppercase flex items-center justify-center pointer-events-none tracking-tighter text-transparent"
    style={{ 
      WebkitTextStroke: '1px #FFC700', // Yellow stroke added here
      lineHeight: '1'
    }}
  >
    CONTACT US
  </motion.h2>
  
  {/* The Foreground Content */}
  <div className="relative z-10">
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-[#FFC700] font-bold uppercase tracking-[0.4em] mb-4 text-sm md:text-base"
    >
      Fill The Form
    </motion.p>
    <motion.h3 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent leading-none"
      style={{ WebkitTextStroke: '1.5px #FFC700' }}
    >
      Request A Quick Quote!
    </motion.h3>
  </div>
</div>

      {/* Form Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl bg-[#FFC700] rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_80px_rgba(255,199,0,0.2)]"
      >
        <form className="flex flex-col gap-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Field */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-black font-black uppercase text-xs tracking-widest ml-4">
                Name <span className="text-red-600">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full bg-white rounded-full px-8 py-5 text-black placeholder:text-zinc-400 outline-none focus:ring-4 focus:ring-black/5 transition-all shadow-inner"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-black font-black uppercase text-xs tracking-widest ml-4">
                Email <span className="text-red-600">*</span>
              </label>
              <input 
                type="email" 
                placeholder="Enter your Email"
                className="w-full bg-white rounded-full px-8 py-5 text-black placeholder:text-zinc-400 outline-none focus:ring-4 focus:ring-black/5 transition-all shadow-inner"
              />
            </motion.div>
          </div>

          {/* Message Field */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label className="text-black font-black uppercase text-xs tracking-widest ml-4">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea 
              rows={4}
              placeholder="Your Message"
              className="w-full bg-white rounded-[2rem] px-8 py-6 text-black placeholder:text-zinc-400 outline-none focus:ring-4 focus:ring-black/5 transition-all shadow-inner resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} className="flex justify-center mt-4">
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#000",
                color: "#fff",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-[#FFC700] font-black uppercase tracking-widest px-16 py-6 rounded-full text-lg transition-all border-2 border-black"
            >
              Send Now
            </motion.button>
          </motion.div>
        </form>
      </motion.div>

      <div className="flex items-center justify-center gap-1 w-full mt-24 relative">
              
              {/* Left Line - Animates from Right to Left */}
              <motion.div 
                initial={{ scaleX: 0, originX: 1 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-yellow-500/40 to-yellow-500/70"
              />
            
              {/* Center Unit - Increased Size */}
              <div className="relative flex items-center justify-center flex-shrink-0 mx-4">
                
                {/* 1. Static Shadow/Glow behind the dot */}
                <div className="absolute w-8 h-8 bg-yellow-500/20 blur-lg rounded-full" />
            
                {/* 2. Outer Pulse Ring (Repeating) */}
                <motion.div 
                  animate={{ 
                    scale: [1, 2.2, 1],
                    opacity: [0.6, 0, 0.6] 
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute w-4 h-4 border border-[#FFD700] rounded-full z-0"
                />
            
                {/* 3. The "Ping" Effect (Single expanding wave) */}
                <motion.div 
                  animate={{ 
                    scale: [1, 3],
                    opacity: [0.8, 0] 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeOut",
                    delay: 0.5
                  }}
                  className="absolute w-4 h-4 bg-[#FFD700]/30 rounded-full z-0"
                />
            
                {/* 4. MAIN CENTER DOT (Increased to w-4 h-4) */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-4 h-4 bg-[#FFD700] rounded-full z-10 shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                />
              </div>
            
              {/* Right Line - Animates from Left to Right */}
              <motion.div 
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full h-[1.5px] bg-gradient-to-l from-transparent via-yellow-500/40 to-yellow-500/70"
              />
            </div>
    </section>
  );
};

export default RequestForm;