"use client"
import { motion, Variants } from 'framer-motion';
import Image from "next/image"

export default function ValueProposition() {
  const steps = [
    { title: "Escrow", subtitle: "Secured" },
    { title: "Verified", subtitle: "Freelancers" },
    { title: "Fast", subtitle: "Turnaround" },
    { title: "Transparent", subtitle: "Workflow" },
  ]

  // 1. Unified and Typed Variants
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  }

  const textItemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  }

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center font-sans">
      
      {/* ================= BACKGROUND WAVE ================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0 pointer-events-none bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/value_bg.svg')`, 
          backgroundSize: '100% auto' 
        }} 
      />

      {/* ================= LEFT SIDE: ARC IMAGE ================= */}
      <div className="absolute left-[15%] md:left-[18%] lg:left-[23%] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[320px] h-[520px] md:w-[480px] md:h-[780px] lg:w-[550px] lg:h-[850px]"
        >
          <Image
            style={{ top: `40px`, left: '-50px'}} 
            src="/valuePropoition.svg" 
            alt="Value Proposition Arc"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* ================= CENTER: UPLOADED CIRCLE ================= */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.7, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]"
        >
          <Image
            src="/value-circle.svg"
            alt="Center Circle"
            fill
            className="object-contain opacity-60"
          />
          
          <motion.div 
            animate={{ scale: [1, 1.1], opacity: [0.3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border border-yellow-500/20"
          />
        </motion.div>
      </div>

      {/* ================= RIGHT SIDE: ANIMATED TEXT ================= */}
      <motion.div 
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute left-[56%] md:left-[59%] lg:left-[63%] top-1/2 -translate-y-1/2 space-y-12 md:space-y-16 z-30"
      >
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            variants={textItemVariants}
            className="flex flex-col items-start group cursor-default"
          >
            <span className="text-yellow-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-2 opacity-60 group-hover:opacity-100 transition-all duration-300">
              {step.title}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase leading-none tracking-tighter transition-all duration-500 group-hover:translate-x-4 group-hover:text-yellow-500/20">
              {step.subtitle}
            </h2>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}