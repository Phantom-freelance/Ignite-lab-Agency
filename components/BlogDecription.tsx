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
          
          <div className="mx-auto px-6 relative z-20 ">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-20">
            
            {/* VIDEO CIRCLE - Positioned to overlap the curve perfectly */}
            

            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className=""
            >
              <div className="space-y-6 text-base md:text-lg text-zinc-100 leading-relaxed">
                <p className="text-xl text-black">
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

