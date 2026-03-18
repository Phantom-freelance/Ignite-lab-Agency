"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CompanySection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative w-full bg-b-y overflow-hidden" style={{ borderBottomRightRadius: "150px" }}>
      <div className=" lg:block">
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
                Selected Work!
              </h3>
              <h2 
                className="text-5xl md:text-8xl font-bold mb-6 text-transparent leading-[1.1]"
                style={{ 
                  WebkitTextStroke: "1.5px black", 
                  color: "transparent" 
                }}
              >
                Portfolio / Case Studies
              </h2>
            </motion.div>

            <div className="flex gap-4 pt-4">
  {/* WHITE BUTTON -> Turns Black on Hover */}
  <button className="
    bg-white text-black 
    px-6 py-3 md:px-8 md:py-4 
    rounded-full font-bold text-sm md:text-base 
    border border-white cursor-pointer
    /* HOVER: Turn Black with White Text */
    hover:bg-black hover:text-white 
    /* ACTIVE: Shrink and slightly dim */
    active:scale-95 active:opacity-90 
    /* Transition makes the color swap smooth */
    transition-all duration-300"
  >
    Start your project
  </button>

  {/* BLACK BUTTON -> Turns White on Hover */}
  <button className="
    bg-black text-white 
    px-6 py-3 md:px-8 md:py-4 
    rounded-full font-bold text-sm md:text-base
    border border-white/20 cursor-pointer
    /* HOVER: Turn White with Black Text */
    hover:bg-white hover:text-black 
    /* ACTIVE: Shrink */
    active:scale-95 
    transition-all duration-300"
  >
    Apply as a freelancer
  </button>
</div>
                
                

          </div>
          <div className="mx-auto px-6 pb-24 relative z-20 ">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-20">
            
            {/* VIDEO CIRCLE - Positioned to overlap the curve perfectly */}
            

            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:pt-20 "
            >
              <div className="space-y-6 text-base md:text-lg text-zinc-100 leading-relaxed">
                <p className="text-3xl sm:text-2xl text-black">
                  Web design is more than just looking good! We create highly engaging custom websites that make your phone ring. After all, your website is your ultimate sales tool & best credibility check for confidence. Flexing our 3 key muscles of web design, web development and conversion experience, our Melbourne UI/UX specialists blend human behaviour “pre-suasion” psychology with technology to visually communicate your true value.

                </p>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </div>

      
            




        

        
         </div>

      


   
    </section>
    
  )
}

