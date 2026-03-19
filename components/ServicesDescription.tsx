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
                className="lg:pt-20 "
              >
                <div className="space-y-6 text-base md:text-lg text-zinc-100 leading-relaxed">
                  <p className="text-3xl sm:text-2xl">
                    Web design is more than just looking good! We create highly engaging custom websites that make your phone ring. After all, your website is your ultimate sales tool & best credibility check for confidence. Flexing our 3 key muscles of web design, web development and conversion experience, our Melbourne UI/UX specialists blend human behaviour “pre-suasion” psychology with technology to visually communicate your true value.
                    <br/><br/>
                    With a dedicated team of 15+ full-time experts, a strong Melbourne presence and 15+ years of insights, we’re honoured to have received 151+ 5 star Google reviews and 80+ awards & recognitions since 2009. This gives our clients specialist digital knowledge and a conversion framework that significantly reduces their marketing wastage and maximises their online web design & development engagement results.
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