"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

const PortfolioSection = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const tabs = ['All', 'Web Development', 'Apps Design'];

  const portfolioItems = [
    { id: 1, category: 'Web Development', title: 'Saas Web Development', conversion: '42% conversion rate', image: '/p-1.svg' },
    { id: 2, category: 'Web Development', title: 'Frontend - Development', conversion: '92% Accuracy rate', image: '/p-2.svg', isYellow: true },
    { id: 3, category: 'Apps Design', title: 'Figma to Web Flow', conversion: '99% UX implementation', image: '/p-3.svg' },
    { id: 4, category: 'Web Development', title: 'Project Template', conversion: '90% conversion rate', image: '/p-4.svg' },
    { id: 5, category: 'Apps Design', title: 'Saas Web Development', conversion: '75% conversion rate', image: '/p-5.svg' },
  ];

  // COMBINED VARIANTS: This one contains both your logic and the correct Typescript "Variants" type
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    },
    // Adding these back in case you use them for other states
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const filteredItems = selectedTab === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedTab);

  return (
    <section className="relative min-h-screen bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
        <Image src="/dot-bg.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold uppercase tracking-tight mb-4">Selected Work</h4>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-transparent"
                style={{ WebkitTextStroke: '1.5px #FFD700' }}>
              Portfolio /<br />Case Studies
            </h2>
          </motion.div>

          <div className="flex bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`relative px-6 py-3 rounded-full lg:text-lg sm:text-sm font-regular transition-all duration-300 z-10 ${
                  selectedTab === tab ? "text-black" : "text-white hover:text-white/70"
                }`}
              >
                {selectedTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#FFD700] rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 gap-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const isSecondRow = index >= 3;
              const colSpan = isSecondRow ? 'md:col-span-3' : 'md:col-span-2';

              return (
                <motion.div
                  key={item.id}
                  layout
                  variants={cardVariants}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  whileHover="hover"
                  className={`relative aspect-[4/3] rounded-[40px] overflow-hidden cursor-pointer group ${colSpan}`}
                >
                  <motion.div 
                    className="absolute inset-0"
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className={`object-cover transition-colors duration-500 ${item.isYellow ? 'bg-[#FFC700]' : 'bg-zinc-800'}`} 
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent flex flex-col justify-end p-10">
                    <motion.div
                      variants={{ hover: { y: -5 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-black text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm font-bold text-[#FFD700] mt-2 uppercase tracking-widest opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {item.conversion}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Animated Center Decoration */}
        <div className="flex items-center justify-center gap-1 w-full mt-24 relative">
          <motion.div 
            initial={{ scaleX: 0, originX: 1 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-yellow-500/40 to-yellow-500/70"
          />

          <div className="relative flex items-center justify-center flex-shrink-0 mx-4">
            <div className="absolute w-8 h-8 bg-yellow-500/20 blur-lg rounded-full" />
            <motion.div 
              animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-4 h-4 border border-[#FFD700] rounded-full z-0"
            />
            <motion.div 
              animate={{ scale: [1, 3], opacity: [0.8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              className="absolute w-4 h-4 bg-[#FFD700]/30 rounded-full z-0"
            />
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-4 h-4 bg-[#FFD700] rounded-full z-10 shadow-[0_0_15px_rgba(255,215,0,0.6)]"
            />
          </div>

          <motion.div 
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full h-[1.5px] bg-gradient-to-l from-transparent via-yellow-500/40 to-yellow-500/70"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;