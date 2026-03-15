"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Check, ArrowRight, UserPlus, ShieldCheck, Truck } from 'lucide-react';

// 1. Keep the definition OUTSIDE or ensure it is only defined ONCE with the type
const cardVariants: Variants = {
  hidden: { 
    scaleY: 0, 
    opacity: 0 
  },
  visible: { 
    scaleY: 1, 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.33, 1, 0.68, 1] as const, // This 'as const' is vital for easing arrays
    },
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
      icon: <UserPlus className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300" />,
      height: "h-[30%]",
    },
    {
      label: "Funds Secured in",
      title: "Escrow",
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300" />,
      height: "h-[50%]",
    },
    {
      label: "Freelancer",
      title: "Delivers",
      icon: <Truck className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300" />,
      height: "h-[75%]",
    },
    {
      label: "Approval &",
      title: "Release",
      icon: <Check className="w-10 h-10 md:w-12 md:h-12 transition-colors duration-300" />,
      height: "h-[100%]",
    }
  ];

  // NOTE: I DELETED THE SECOND "const cardVariants" AND "const containerVariants" THAT WERE HERE

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden" 
             style={{ background: 'linear-gradient(270deg, #000000 -4.79%, #171717 61.41%)' }}>
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <Image src="/escrow.svg" alt="" fill className="object-cover object-left" />
      </div>

      <div className="relative z-10 mx-auto w-full pt-24 px-6 md:px-12 flex flex-col">
        <div className="mb-12 md:mb-16 max-w-6xl">
          <h4 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">Secure Process</h4>
          <h2 className="text-5xl md:text-8xl font-bold mb-6 text-transparent leading-[1.1]"
              style={{ WebkitTextStroke: '1.5px #FFD700' }}>
            How Escrow Works
          </h2>
          <p className="text-zinc-400 mb-8 max-w-6xl text-2xl">
            Our multi-stage security process ensures that funds are only released when milestones are met.
          </p>
          <div className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm uppercase inline-block shadow-xl">
            Escrow Protected
          </div>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full grid grid-cols-5 items-end h-[400px] md:h-[500px]"
      >
        <div className="flex items-end justify-center h-full pb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            animate={{ x: [0, 10, 0] }}
            transition={{ x: { repeat: Infinity, duration: 2 } }}
          >
            <ArrowRight className="text-white w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        </div>

        {steps.map((step, index) => (
          <div key={index} className={`relative flex flex-col justify-end group ${step.height}`}>
            <motion.div 
              variants={cardVariants}
              className="w-full origin-bottom h-full relative cursor-pointer"
            >
              <motion.div 
                whileHover={{ backgroundColor: "#FFD700" }}
                className="w-full h-full p-4 md:p-10 flex flex-col justify-start rounded-tl-[30px] md:rounded-tl-[45px] rounded-tr-none border-t-[1.5px] border-l-[1.5px] border-[#FFD700]/40 transition-colors duration-300"
              >
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30">
                  <div className="text-white group-hover:text-black transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                <span className="text-[10px] md:text-xs font-bold uppercase mb-2 text-[#FFD700] group-hover:text-black/60">
                  {step.label}
                </span>
                
                <h3 className="text-xl md:text-5xl font-black tracking-tighter leading-none text-white group-hover:text-black">
                  {step.title}
                </h3>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default EscrowProcess;