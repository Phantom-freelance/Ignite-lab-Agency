"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Website Design & Development",
    points: [
      "Information / eCommerce websites",
      "Conversion Focused Web Design",
      "Local & Custom UI / UX Design",
      "CMS Development",
      "QA Testing & Integrations",
    ],
    image: "/Service1.svg",
  },
  {
    title: "Web Conversion & CRO Strategies",
    points: [
      "Conversion Insights & Audit",
      "Value Messaging Creation & Review",
      "Google Analytics Review",
      "User Journey Analysis for ROI",
      "Visual Hierarchy & Conversion Priority",
      "Web Optimisation Strategy & Testing",
    ],
    image: "/Service2.svg",
  },
  {
    title: "Advanced Custom Web Solutions",
    points: [
      "Headless CMS Solutions",
      "Advanced Filters & Instant Search",
      "Integration with Existing Systems",
      "Secure Ecommerce & Logins",
      "Localisation & Accessibility",
      "Web3 Development*",
    ],
    image: "/Service3.svg",
  },
  {
    title: "Web Portals & Web Applications",
    points: [
      "Concept Validation & Technical Analysis",
      "Dashboards, Customer & Trade Portals",
      "Advanced Onsite Search & Autocomplete",
      "B2B eCommerce with ERP Integration",
    ],
    image: "/Service4.svg",
  },
  {
    title: "Web API Integration Solutions",
    points: [
      "Operational Efficiency Audit",
      "API Integration Analysis & Development",
      "Dashboard Design & Development",
      "Reliability & Performance Analysis",
      "Technical Liaison with API Providers",
    ],
    image: "/Service5.svg",
  },
  {
    title: "Digital Consultancy & Agency Strategies",
    points: [
      "BA & Project Management",
      "Marketing & Search Audit",
      "1 to 1 | Workshops & Focus Groups",
      "Analytics Planning & Conversion Tracking",
      "Technical & Product Support",
    ],
    image: "/Service6.svg",
  },
];

export default function ExactPortfolioTimeline() {
  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative">
        
        {/* MAIN VERTICAL LINE */}
        <div className="absolute left-6 md:left-6 top-0 bottom-0 w-[2px] bg-zinc-800">
          <div className="absolute -top-2 -left-[5px] w-3 h-3 bg-[#FFC700] rounded-full shadow-[0_0_10px_#FFC700]" />
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative group">
                {/* CONNECTOR LINE */}
                <div className="absolute -left-8 md:-left-16 top-1/2 w-8 md:w-16 h-[2px] bg-zinc-800" />

                <motion.div
                  className={`relative w-full ml-8 md:ml-16 p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-12 cursor-pointer transition-colors duration-500 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ backgroundColor: "rgba(10, 10, 10, 1)" }}
                  whileHover={{ 
                    backgroundColor: "#FFC700",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* TEXT CONTENT */}
                  <div className="flex-1 space-y-6">
                    <motion.h2 
                      className="text-3xl md:text-4xl font-bold leading-tight"
                      variants={{ hover: { color: "#000000" } }}
                      whileHover="hover"
                    >
                      <motion.span 
                        className="transition-colors duration-400 group-hover:text-black"
                      >
                        {project.title}
                      </motion.span>
                    </motion.h2>

                    <ul className="space-y-3">
                      {project.points.map((point, i) => (
                        <li 
                          key={i} 
                          className=" text-sm md:text-base font-regular tracking-wide transition-colors duration-400 group-hover:text-black/80"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>

                    <motion.div 
                      className="mt-8 px-8 py-3 bg-[#FFC700] text-black group-hover:bg-black group-hover:text-white rounded-full inline-block font-bold transition-colors duration-400"
                    >
                      Learn More
                    </motion.div>
                  </div>

                  {/* IMAGE */}
                  <div className="flex-1 w-full">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] ">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full  group-hover:grayscale-0 transition-all duration-500" 
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}