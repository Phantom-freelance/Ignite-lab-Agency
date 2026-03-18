"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/logo-1.svg", alt: "Client 1" },
  { src: "/logo-2.svg", alt: "Client 2" },
  { src: "/logo-3.svg", alt: "Client 3" },
  { src: "/logo-4.svg", alt: "Client 4" },
  { src: "/logo-5.svg", alt: "Client 5" },
];

// Increase duplication to ensure no gaps on large screens
const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

const MarqueeRow = ({ direction = "left", duration = 20, speed = 1 }) => {
  // speed 1 is normal, lower is faster, higher is slower
  const moveDirection = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <motion.div
        animate={{ x: moveDirection }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration / speed, // Dynamic speed
            ease: "linear",
          },
        }}
        className="flex flex-none gap-10 md:gap-16 pr-10 md:pr-16 py-4"
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-none flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={60}
              className="h-8 md:h-12 w-auto opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const LogoTicker = () => {
  return (
    <section className="bg-black py-20 overflow-hidden">

      <div className="flex flex-col gap-8 md:gap-12">
        {/* ROW 1: Moves Left, Fast */}
        <MarqueeRow direction="left" speed={1.2} duration={25} />

        {/* ROW 2: Moves Right, Medium */}
        <MarqueeRow direction="right" speed={1} duration={30} />

        {/* ROW 3: Moves Left, Slowest/Smoothest */}
        <MarqueeRow direction="left" speed={0.8} duration={35} />
      </div>
    </section>
  );
};

export default LogoTicker;