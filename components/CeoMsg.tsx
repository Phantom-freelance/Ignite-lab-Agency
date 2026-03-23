"use client"

// FIXED: Removed AnimatePresence as it's no longer needed for a modal
import { motion } from "framer-motion"

export default function CompanySection() {
  // FIXED: Removed the 'open' state as we are not opening a video modal anymore

  return (
    <section className="relative w-full bg-b-y overflow-hidden">
      {/* =========================================================================
                                DESKTOP / LARGE SCREEN
          ========================================================================= */}
      <div className="hidden lg:block">
        {/* YELLOW TOP SECTION */}
        <div className="relative bg-[#FFC700] pt-16 pb-20 md:pt-24 md:pb-20">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

          <div className="mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-8xl"
              >
                <h3 className="text-lg md:text-5xl font-bold text-black tracking-tighter mb-2">
                  From the
                </h3>
                <h2 
                  className="text-5xl md:text-8xl font-bold mb-6 text-transparent leading-[1.1]"
                  style={{ 
                    WebkitTextStroke: "1.5px black", 
                    color: "transparent" 
                  }}
                >
                  Founder’s Perspective
                </h2>
              </motion.div>

              <div className="flex gap-4 pt-4">
                <button className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base border border-white cursor-pointer hover:bg-black hover:text-white active:scale-95 active:opacity-90 transition-all duration-300">
                  Start your project
                </button>
                <button className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base border border-white/20 cursor-pointer hover:bg-white hover:text-black active:scale-95 transition-all duration-300">
                  Apply as a freelancer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BLACK BOTTOM SECTION */}
        <div className="relative bg-black text-white bg-black bg-radius">
          {/* THE LARGE LEFT SCOOP CURVE - STATIC IMAGE */}
          <div className="absolute xs:hidden flex-shrink-0 left-15">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              // FIXED: Changed relative to static, removed group hover for play button
              className="max-w-full md:max-w-[24rem] md:max-h-[24rem] rounded-full border-[10px] md:border-[15px] border-zinc-300 overflow-hidden static"
            >
              <img
                src="/person-1.png" 
                alt="Team member"
                className="w-full h-full object-cover"
              />
              
              {/* FIXED: Play Button HTML Removed here */}
            </motion.div>
          </div>

          <div className="static lg:hidden md:hidden xl:hidden sm:hidden flex-shrink-0 left-15">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              // FIXED: Changed relative to static
              className="w-64 h-64 md:w-[480px] md:h-[480px] rounded-full border-[10px] md:border-[15px] border-zinc-300 overflow-hidden static"
            >
              <img
                src="/person-1.png" 
                alt="Team member"
                className="w-full h-full object-cover"
              />
              
              {/* FIXED: Play Button HTML Removed here */}
            </motion.div>
          </div>

          <div className="mx-auto px-6 pb-24 relative z-20 ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-20">
              {/* TEXT CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:pt-20 pad-l18 "
              >
                <div className="space-y-6 text-base md:text-lg text-zinc-100 leading-relaxed">
                  <p className="text-3xl sm:text-2xl">
                    As we grow, our commitment to doing things the right way stays the same. Integrity is at the heart of every decision we make, guiding how we work with clients and each other.
We strongly believe that real success comes from collaboration, where ideas are shared openly, and every voice adds value. It’s this teamwork that allows us to create solutions that truly make a difference.
                    <br/><br/>
                  Curiosity drives us forward. We’re always learning, exploring, and challenging ourselves to improve with every project we take on.

Our goal isn’t just to deliver services, but to build long-term relationships based on trust, quality, and continuous growth. 
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative Animated Line - Centered */}
        <div className="flex items-center justify-center gap-1 w-full mt-24 relative bg-black pb-10">
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

        {/* FIXED: Removed Desktop Video Modal HTML block entirely */}
      </div>

      {/* =========================================================================
                                MOBILE / SMALL SCREEN
          ========================================================================= */}
      <div className="block lg:hidden">
        {/* YELLOW TOP SECTION */}
        <div className="relative bg-[#FFC700] pt-16 pb-32">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

          <div className="mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h3 className="text-xl font-bold text-black tracking-tight mb-1">
                Be seen as the
              </h3>
              <h2 
                className="text-5xl font-black uppercase leading-[1]"
                style={{ 
                  WebkitTextStroke: "1px black", 
                  color: "transparent" 
                }}
              >
                Obvious <br/> 1st Choice
              </h2>
            </motion.div>

            <div className="flex flex-col gap-4 max-w-xs mx-auto">
              <button className="bg-white text-black px-8 py-4 rounded-full font-extrabold text-sm shadow-lg active:scale-95 transition-transform">
                Start your project
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-full font-extrabold text-sm active:scale-95 transition-transform">
                Apply as a freelancer
              </button>
            </div>
          </div>
        </div>

        {/* BLACK BOTTOM SECTION */}
        <div className="relative bg-black text-white px-6 pt-30">
          {/* THE CIRCLE IMAGE - Static, No Play Button */}
          <div className="relative flex justify-center -mt-24 mb-12 z-20">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              // FIXED: Changed relative to static
              className="w-64 h-64 rounded-full border-8 border-black overflow-hidden static shadow-2xl"
            >
              <img
                src="/person-1.png" 
                alt="Team member"
                className="w-full h-full object-cover"
              />
              
              {/* FIXED: Play Button HTML Removed here for Mobile */}
            </motion.div>
          </div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <div className="space-y-8 text-[16px] text-zinc-100 leading-relaxed font-medium">
              <p>
                Web design is more than just looking good! We create highly engaging custom websites that make your phone ring. After all, your website is your ultimate sales tool & best credibility check for confidence. Flexing our 3 key muscles of web design, web development and conversion experience, our Melbourne UI/UX specialists blend human behaviour “pre-suasion” psychology with technology to visually communicate your true value.
                <br/><br/>
                With a dedicated team of 15+ full-time experts, a strong Melbourne presence and 15+ years of insights, we’re honoured to have received 151+ 5 star Google reviews and 80+ awards & recognitions since 2009. This gives our clients specialist digital knowledge and a conversion framework that significantly reduces their marketing wastage and maximises their online web design & development engagement results.
              </p>
            </div>
          </motion.div>

          {/* Decorative Animated Line */}
          <div className="flex items-center justify-center gap-1 w-full mt-20 relative opacity-40 pb-10">
              <motion.div 
                  initial={{ scaleX: 0, originX: 1 }}
                  whileInView={{ scaleX: 1 }}
                  className="w-full h-[1px] bg-yellow-500"
              />
              <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 mx-2" />
              <motion.div 
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  className="w-full h-[1px] bg-yellow-500"
              />
          </div>
        </div>

        {/* FIXED: Removed Mobile Video Modal HTML block entirely */}
      </div>
    </section>
  )
}
