"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LogoTicker = () => {
  // Replace these with your actual logo file paths
  const logos = [
    "/logo-1.svg",
    "/logo-2.svg",
    "/logo-3.svg",
    "/logo-4.svg",
    "/logo-5.svg",
  ];

  // We duplicate the array to ensure a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  const rowVariants = {
    animateRight: {
      x: ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
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
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="bg-black pb-30 overflow-hidden">
      

      <div className="flex flex-col gap-12">
        {/* ROW 1: Left to Right */}
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

        {/* ROW 2: Left to Right (Slightly slower for parallax effect) */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            variants={rowVariants}
            animate="animateRight"
            className="flex flex-none gap-24 pr-24"
            style={{ transitionDuration: "30s" }}
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

        {/* ROW 3: Left to Right */}
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