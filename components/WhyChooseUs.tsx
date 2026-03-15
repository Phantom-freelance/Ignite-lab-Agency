"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const stats = [
    { number: '50+', label: 'Expert Freelancers', width: 'w-full md:w-[60%]' },
    { number: '200+', label: 'Projects Delivered', width: 'w-full md:w-[75%]' },
    { number: '98%', label: 'Client Satisfaction', width: 'w-full md:w-[90%]' },
  ];

  const linePath = useTransform(scrollYProgress, [0.1, 0.45], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-black text-white pt-24 pb-40 overflow-hidden">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image src="/value_bg.svg" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10 mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-[#FFD700] uppercase tracking-[0.4em] text-xs font-bold mb-4">Secure Process</p>
          <h2 
            className="text-6xl md:text-8xl font-black tracking-tighter text-transparent leading-[0.8]"
            style={{ WebkitTextStroke: '1.5px #FFD700' }}
          >
            Why Choose Us?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-end">
          {/* LEFT SIDE: Stepped Stats with Hover Effects */}
          <div className="w-full lg:w-1/2 flex flex-col items-start -space-y-[1px]">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -8, 0] 
                }}
                // Hover trigger: Scales up slightly and brightens the border
                whileHover={{ 
                  scale: 1.02, 
                  borderColor: "#FFD700",
                  backgroundColor: "rgba(20, 20, 20, 0.8)"
                }}
                transition={{ 
                  x: { duration: 0.8, delay: index * 0.1 },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.5 },
                  scale: { type: "spring", stiffness: 400, damping: 10 }
                }}
                viewport={{ once: true }}
                className={`${stat.width} cursor-default bg-black/60 backdrop-blur-md border-t border-r border-[#FFD700]/40 rounded-tr-[60px] p-10 md:p-14 flex items-center gap-10 relative group transition-colors duration-300`}
              >
                {/* Glossy hover scan animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                {/* Text content with hover slide */}
                <motion.div 
                  className="flex items-center gap-10"
                  whileHover={{ x: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-6xl md:text-8xl font-black text-white italic transition-all duration-300 group-hover:text-[#FFD700] group-hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    {stat.number}
                  </h3>
                  <p className="text-[#FFD700] font-bold text-sm md:text-lg uppercase tracking-widest leading-tight transition-colors duration-300 group-hover:text-white">
                    {stat.label}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE: Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[500px] md:h-[700px] w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
             <Image 
                src="/whychooseUs.png" 
                alt="Expert" 
                fill 
                className="object-contain object-bottom z-10"
             />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM ARROW LINE */}
      <div className="absolute left-0 w-full z-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto md:max-w-[85%] ml-0 relative h-[3px] bg-zinc-900">
          <motion.div 
            style={{ width: linePath }}
            className="absolute top-0 left-0 h-full bg-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.6)]"
          />
          <motion.div 
            style={{ left: linePath }}
            className="absolute top-1/2 -translate-y-1/2 -ml-2 text-[#FFD700]"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;