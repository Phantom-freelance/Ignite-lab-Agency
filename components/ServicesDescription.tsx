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
      <div className="block">
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
                  Our Expertise
                </h3>
                <h2 
                  className="text-5xl md:text-8xl font-bold mb-6 text-transparent leading-[1.1]"
                  style={{ 
                    WebkitTextStroke: "1.5px black", 
                    color: "transparent" 
                  }}
                >
                  Work Only with Specialists
                </h2>
              </motion.div>

              
            </div>
          </div>
        </div>

        {/* BLACK BOTTOM SECTION */}
        <div className="relative bg-black text-white bg-black bg-radius1">
          {/* THE LARGE LEFT SCOOP CURVE - STATIC IMAGE */}
          

          

          <div className="mx-auto px-6 pb-24 relative z-20 ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-20">
              {/* TEXT CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="pt-20 "
              >
                <div className="space-y-6 text-base md:text-lg text-zinc-100 leading-relaxed">
                  <p className="text-xl">
                    We work with specialists who understand the details, not just the surface. From website design and development to advanced custom solutions, every service we offer is built with purpose and precision.

Our approach combines strong design, smart development, and clear strategy to create websites that don’t just look good but perform. Whether it’s eCommerce, CMS platforms, or custom web applications, we focus on delivering solutions that scale with your business.
                    <br/><br/>
                    We also help optimise and refine through CRO strategies, analytics, and user journey insights. So your digital presence keeps improving over time. From API integrations to consultancy, everything we do is aimed at making your systems smarter, faster, and more effective.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        
      </div>

      {/* =========================================================================
                                MOBILE / SMALL SCREEN
          ========================================================================= */}
      
    </section>
  )
}