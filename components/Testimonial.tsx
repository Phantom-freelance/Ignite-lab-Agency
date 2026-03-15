"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    title: "7X faster & we closed more sales!",
    content: "Our page speeds are also 7X faster, which helps our SEO. What we're also seeing now is higher-quality leads. We've also improved our recruitment as the website better represents who we truly are.",
    author: "Luke, Tyler, Ashley & Steve",
    company: "Share Hire",
    videoUrl: "https://www.youtube.com/embed/k5AdKjdT0Pc?si=lOHvkI6DW5D1SgX5"
  },
  {
    title: "someone that understands design AND business",
    content: "I now know it 100% works because of the feedback we've received from clients and the industry. As business owners, we're always conscious of what things cost. The question I asked myself was, what's the true cost of not improving my website?",
    author: "Robert Krastich",
    company: "Sharper",
    videoUrl: "https://www.youtube.com/embed/k5AdKjdT0Pc?si=lOHvkI6DW5D1SgX5"
  },
  {
    title: "Our traffic increased by 300%",
    content: "Our website is our greatest marketing asset. It was important that we had a trusted partner like BBR to assist us in delivering a growth strategy. We can certainly say hand on heart that our new website with Chromatix was pivotal to our recent growth!",
    author: "Emma Truong",
    company: "Rylock Windows & Doors",
    videoUrl: "https://www.youtube.com/embed/k5AdKjdT0Pc?si=lOHvkI6DW5D1SgX5"
  },
  {
    title: "No one's ever understood us this well!",
    content: "You were able to tell us multiple ideas straight away that helped us go from good to great and you worked seamlessly with our team. BBR really understood our customers and our brand. Working with you was brilliant!",
    author: "Client Name",
    company: "Company Name",
    videoUrl: "https://www.youtube.com/embed/k5AdKjdT0Pc?si=lOHvkI6DW5D1SgX5"
  },
  {
    title: "You didn't just change our website – you revolutionised our business",
    content: "It's been the perfect synergy of BBR understanding our complex needs and delivering with absolute perfection and professionalism!",
    author: "Client Name",
    company: "Company Name",
    videoUrl: "https://www.youtube.com/embed/k5AdKjdT0Pc?si=lOHvkI6DW5D1SgX5"
  },
  {
    title: "We instantly saved money and got more calls and enquiries",
    content: "BBR saved us $15,000-$20,000 a year on wasted marketing spend & we also had an increase in the number of calls and enquires just from the launch of the new website.",
    author: "Client Name",
    company: "Company Name",
    videoUrl: "https://www.youtube.com/embed/k5AdKjdT0Pc?si=lOHvkI6DW5D1SgX5"
  }
];

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="bg-black py-24 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="mb-16">
        <p className="text-white text-sm font-bold uppercase tracking-widest mb-4">Testimonials</p>
        <h2 
          className="text-5xl md:text-7xl font-black tracking-tighter text-transparent leading-none"
          style={{ WebkitTextStroke: '1px #FFC700' }}
        >
          Look What Our Customer Say!
        </h2>
      </div>

      {/* Grid Layout (2 rows of 3 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {testimonials.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.03,
              borderColor: "#FFC700",
              boxShadow: "0px 10px 30px rgba(255, 199, 0, 0.1)"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
            className="group relative bg-[#0A0A0A] border border-zinc-800 rounded-3xl p-8 pt-16 flex flex-col h-full cursor-pointer transition-colors duration-300"
          >
            {/* Play Button Icon */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(item.videoUrl);
              }}
              className="absolute -top-6 left-8 w-16 h-16 bg-[#FFC700] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg z-10"
            >
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-black border-b-[10px] border-b-transparent ml-1" />
            </button>

            {/* Content */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#FFC700] text-sm mr-1">★</span>
              ))}
            </div>

            <h3 className="text-white text-2xl font-bold mb-4 leading-tight group-hover:text-[#FFC700] transition-colors">
              {item.title}
            </h3>

            <p className="text-zinc-400 text-base leading-relaxed mb-8 flex-grow">
              {item.content}
            </p>

            <div>
              <p className="text-[#FFC700] font-bold">{item.author}</p>
              <p className="text-zinc-600 text-sm uppercase tracking-wider">{item.company}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,199,0,0.2)] z-10"
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 text-white bg-black/40 hover:bg-[#FFC700] hover:text-black w-12 h-12 rounded-full flex items-center justify-center transition-all z-20"
              >
                ✕
              </button>
              <iframe 
                src={`${selectedVideo}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/*Horizontal Line */}
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

export default Testimonials;