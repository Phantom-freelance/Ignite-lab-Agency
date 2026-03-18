"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SaaS Web Development",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/figma-to-webflow.png",
    color: "bg-white",
  },
  {
    title: "Frontend Development",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/frontend.png",
    color: "bg-[#FFC700]",
  },
  {
    title: "Figma to Webflow",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/figma-stack.png",
    color: "bg-white",
  },
  {
    title: "Project Templates",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/portfolio.png",
    color: "bg-[#0F3D3E]",
  },
  {
    title: "Web API Integration",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/api.png",
    color: "bg-white",
  },
  {
    title: "Digital Agency",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/agency.png",
    color: "bg-[#0F3D3E]",
  },
];

export default function ExactPortfolioTimeline() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-[1400px] mx-auto relative px-6">

        {/* VERTICAL CENTER LINE */}
        <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 hidden md:block">
          <div className="h-full border-l-2 border-dashed border-[#FFC700]/40"></div>
        </div>

        <div className="space-y-36 relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center justify-between"
            >

              {/* CENTER DOT + CONNECTOR LINES */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center w-full">

                {/* LEFT LINE */}
                <div className="flex-1 border-t-2 border-dashed border-[#FFC700]/30 mr-6 ml-[8%]" />

                {/* DOT */}
                <div className="w-6 h-6 bg-[#FFC700] rounded-full border-4 border-black shadow-[0_0_15px_rgba(255,199,0,0.6)] z-10" />

                {/* RIGHT LINE */}
                <div className="flex-1 border-t-2 border-dashed border-[#FFC700]/30 ml-6 mr-[8%]" />

              </div>

              {/* LEFT TEXT */}
              <div className="w-full md:w-[45%] text-center md:text-right z-10">
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-zinc-400 text-lg max-w-[500px] md:ml-auto">
                    {project.description}
                  </p>
                </motion.div>
              </div>

              {/* RIGHT IMAGE CARD */}
              <div className="w-full md:w-[45%] mt-10 md:mt-0 z-10">
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`${project.color} p-8 rounded-[60px] shadow-[0_30px_80px_rgba(0,0,0,0.8)]`}
                >
                  <div className="overflow-hidden rounded-[40px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}