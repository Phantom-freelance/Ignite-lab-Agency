"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CompanySection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative w-full bg-b-y overflow-hidden">
      
      {/* ================= YELLOW TOP SECTION ================= */}
      <div className="relative bg-[#FFC700] pt-16 pb-20 md:pt-24 md:pb-20">
        {/* Dotted background overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

        <div className="mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-8xl"
            >
              <h3 className="text-lg md:text-5xl font-bold text-black tracking-tighter mb-2">
                Be seen as the
              </h3>
              <h2 
                className="text-5xl md:text-8xl font-bold mb-6 text-transparent leading-[1.1]"
                style={{ 
                  WebkitTextStroke: "1.5px black", 
                  color: "transparent" 
                }}
              >
                Obvious 1st Choice
              </h2>
            </motion.div>

            <div className="flex gap-4 pt-4">
              <button className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base shadow-sm">
                Start your project
              </button>
              <button className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base">
                Apply as a freelancer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BLACK BOTTOM SECTION ================= */}
      <div className="relative bg-black text-white bg-black bg-radius">
        
        {/* THE LARGE LEFT SCOOP CURVE */}
        <div className="absolute xs:hidden flex-shrink-0 left-15">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="w-64 h-64 md:w-[480px] md:h-[480px] rounded-full border-[10px] md:border-[15px] border-zinc-300 overflow-hidden relative"
              >
                <img
                  src="/person-1.png" 
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button */}
                <button
                  onClick={() => setOpen(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="bg-[#FFC700] w-16 h-16 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                    <div className="w-0 h-0 border-t-[10px] md:border-t-[15px] border-t-transparent border-l-[18px] md:border-l-[28px] border-l-black border-b-[10px] md:border-b-[15px] border-b-transparent ml-2" />
                  </div>
                </button>
              </motion.div>
            </div>

            <div className="static lg:hidden md:hidden xl:hidden sm:hidden flex-shrink-0 left-15">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="w-64 h-64 md:w-[480px] md:h-[480px] rounded-full border-[10px] md:border-[15px] border-zinc-300 overflow-hidden relative"
              >
                <img
                  src="/person-1.png" 
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button */}
                <button
                  onClick={() => setOpen(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="bg-[#FFC700] w-16 h-16 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                    <div className="w-0 h-0 border-t-[10px] md:border-t-[15px] border-t-transparent border-l-[18px] md:border-l-[28px] border-l-black border-b-[10px] md:border-b-[15px] border-b-transparent ml-2" />
                  </div>
                </button>
              </motion.div>
            </div>

            




        <div className="mx-auto px-6 pb-24 relative z-20 ">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-20">
            
            {/* VIDEO CIRCLE - Positioned to overlap the curve perfectly */}
            

            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:pt-20 pad-l18 "
            >
              <div className="space-y-6 text-base md:text-lg text-zinc-100 leading-relaxed">
                <p className="text-3xl sm:text-2xl">
                  Web design is more than just looking good! We create highly engaging custom websites that make your phone ring. After all, your website is your ultimate sales tool & best credibility check for confidence. Flexing our 3 key muscles of web design, web development and conversion experience, our Melbourne UI/UX specialists blend human behaviour “pre-suasion” psychology with technology to visually communicate your true value.
<br/><br/>
With a dedicated team of 15+ full-time experts, a strong Melbourne presence and 15+ years of insights, we’re honoured to have received 151+ 5 star Google reviews and 80+ awards & recognitions since 2009. This gives our clients specialist digital knowledge and a conversion framework that significantly reduces their marketing wastage and maximises their online web design & development engagement results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        
         </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-4"
          >
            <div className="w-full max-w-4xl aspect-video bg-zinc-900 rounded-2xl overflow-hidden">
              <video controls autoPlay className="w-full h-full">
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Decorative Pagination / Scroll progress bar dot with High Visibility Animations */}
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
    
  )
}