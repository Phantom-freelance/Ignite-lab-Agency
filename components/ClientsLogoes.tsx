"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const LogoTicker = () => {
  const logos = [
    "/logo-1.svg",
    "/logo-2.svg",
    "/logo-3.svg",
    "/logo-4.svg",
    "/logo-5.svg",
  ];

  // 1. Keep this version (The one with Variants and as const)
  const rowVariants: Variants = { 
    animateRight: {
      x: ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 20,
          ease: "linear",
        },
      },
    },
    animateLeft: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  // NOTE: I DELETED THE SECOND "const rowVariants" THAT WAS HERE

  return (
    <section className="bg-black pb-30 overflow-hidden">
      <div className="flex flex-col gap-12">
        {/* ROW 1 */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            variants={rowVariants}
            animate="animateRight"
            className="flex flex-none gap-20 pr-20"
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={`row1-${index}`} className="flex-none">
                <Image
                  src={logo}
                  alt="Client Logo"
                  width={180}
                  height={50}
                  className="h-10 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2 */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            variants={rowVariants}
            animate="animateRight"
            className="flex flex-none gap-24 pr-24"
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={`row2-${index}`} className="flex-none">
                <Image
                  src={logo}
                  alt="Client Logo"
                  width={180}
                  height={50}
                  className="h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 3 */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            variants={rowVariants}
            animate="animateRight"
            className="flex flex-none gap-20 pr-20"
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={`row3-${index}`} className="flex-none">
                <Image
                  src={logo}
                  alt="Client Logo"
                  width={180}
                  height={50}
                  className="h-9 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;