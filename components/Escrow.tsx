"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Check, ArrowRight, UserPlus, ShieldCheck, Truck } from 'lucide-react';

const cardVariants: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { 
    scaleY: 1, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const EscrowProcess = () => {
  const steps = [
    {
      label: "Client Start",
      title: "Projects",
      icon: <UserPlus className="w-8 h-8 md:w-10 md:h-10" />,
      height: "h-48 md:h-[40%]", // Increased slightly to prevent squishing
    },
    {
      label: "Funds Secured",
      title: "Escrow",
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />,
      height: "h-56 md:h-[60%]",
    },
    {
      label: "Freelancer",
      title: "Delivers",
      icon: <Truck className="w-8 h-8 md:w-10 md:h-10" />,
      height: "h-64 md:h-[80%]",
    },
    {
      label: "Approval &",
      title: "Release",
      icon: <Check className="w-10 h-10 md:w-12 md:h-12" />,
      height: "h-72 md:h-[100%]",
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col bg-[#0a0a0a] overflow-hidden "> 
      
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Image src="/escrow.svg" alt="" fill className="object-cover object-left" />
      </div>

      {/* Header */}
      <div className="relative z-10 mx-auto w-full pt-20 md:pt-32 px-6 md:px-12">
        <div className="max-w-6xl">
          <h4 className="text-sm md:text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">Secure Process</h4>
          <h2 className="text-5xl md:text-8xl font-black mb-6 text-transparent leading-none"
              style={{ WebkitTextStroke: '1.5px #FFD700' }}>
            How Escrow Works
          </h2>
          <p className="text-zinc-400 max-w-3xl text-lg md:text-2xl">
            Our multi-stage security process ensures that funds are only released when milestones are met.
          </p>
        </div>
      </div>

      {/* The Grid - Added mt-20 to make room for icons and h-[600px] for safety */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-end mt-32 px-6 md:px-0 h-auto lg:h-[600px]"
      >
        {/* Arrow Spacer */}
        <div className="hidden lg:flex items-end justify-center h-full pb-12">
          <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowRight className="text-white w-12 h-12 opacity-50" />
          </motion.div>
        </div>

        {steps.map((step, index) => (
          <div key={index} className={`relative flex flex-col justify-end group ${step.height}`}>
            <motion.div 
              variants={cardVariants}
              className="w-full origin-bottom h-full relative"
            >
              <motion.div 
                whileHover={{ backgroundColor: "#FFD700" }}
                className="w-full h-full p-8 md:p-10 flex flex-col justify-start rounded-t-[30px] lg:rounded-tr-none lg:rounded-tl-[50px] border-t-[1.5px] border-l-[1.5px] border-[#FFD700]/30 transition-all duration-300"
              >
                {/* Fixed the Icon position to ensure it doesn't get cut */}
                <div className="static lg:absolute lg:-top-12 lg:left-10 z-30 mb-6 lg:mb-0">
                  <div className="text-[#FFD700] lg:text-white group-hover:text-black transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                <div className="mt-2">
                  <span className="text-[10px] md:text-xs font-bold uppercase mb-2 block text-[#FFD700] group-hover:text-black/60">
                    {step.label}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-none text-white group-hover:text-black">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default EscrowProcess;