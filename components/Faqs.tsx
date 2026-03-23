"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const faqData = [
  {
    question: "How is Escrow different from other web designers in Melbourne?",
    answer: "Unlike traditional agencies, we focus on sales-driven architecture. We don't just build websites; we build conversion funnels that use 'pre-suasion' psychology."
  },
  {
    question: "What makes Escrow web design sales-driven?",
    answer: "We blend human behavior psychology with modern technology. Every button placement and content block is designed to guide the user toward a specific action."
  },
  {
    question: "Will I be able to edit my website myself?",
    answer: "Yes! We build primarily on user-friendly platforms and provide custom training videos so you can update text and images without needing a developer."
  },
  {
    question: "Can Escrow redesign my existing website instead of starting from scratch?",
    answer: "Absolutely. We can perform a conversion audit on your current site and implement a strategic redesign to improve performance."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#FFC700] py-20 overflow-hidden min-h-screen">
      
      {/* Background Dot Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] z-0" />

      {/* 1. FULL WIDTH TITLE */}
      <div className="relative z-30 w-full px-6 md:px-12 lg:px-24 mb-10">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-black mb-2"
        >
          FAQ&apos;s
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-transparent leading-[0.85] w-full"
          style={{ WebkitTextStroke: '1.5px black' }}
        >
          Frequently Asked Questions
        </motion.h2>
      </div>

      {/* 2. CONTENT AREA */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full items-start">
        
        {/* LEFT: Image Container */}
        <div className="hidden lg:flex flex-[0_0_20%] justify-start items-start pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 160, y: 60 }}
            className="relative w-full aspect-square scale-125"
          >
            <Image 
              src="/questionMark.svg" 
              alt="FAQs"
              fill
              className="object-contain object-left"
              priority
            />
          </motion.div>
        </div>

        {/* RIGHT: Accordion Ticker (80% Width) */}
        <div className="w-full lg:flex-[0_0_80%] px-6 md:px-12 lg:pr-24 lg:pl-0 z-20">
          <div className="flex flex-col gap-5 w-full">
            {faqData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                // UPDATED: Reduced border radius from rounded-full to rounded-2xl
                className="bg-black rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5 w-full"
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between px-8 md:px-12 py-6 md:py-8 text-left group"
                >
                  <span className="text-white font-bold text-sm md:text-xl pr-4 group-hover:text-[#FFC700] transition-colors">
                    {item.question}
                  </span>
                  <motion.div 
                    animate={{ 
                        rotate: activeIndex === index ? 45 : 0,
                        backgroundColor: activeIndex === index ? "#FFC700" : "#1a1a1a",
                        color: activeIndex === index ? "#000" : "#fff"
                    }}
                    className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-2xl transition-all border border-white/10"
                  >
                    +
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 md:px-12 pb-10 text-zinc-400 text-sm md:text-lg max-w-4xl leading-relaxed border-t border-white/5 pt-6">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;