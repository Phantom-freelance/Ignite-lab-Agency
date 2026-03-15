"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Check, 
  Monitor, 
  Globe, 
  Settings, 
  Layout, 
  Cloud, 
  Target 
} from 'lucide-react';

const SpecialistsSection = () => {
  const expertise = [
    {
      title: "Website Design & Development",
      icon: <Monitor size={56} strokeWidth={2.5} />, 
      features: ["Information / eCommerce websites", "Conversion Focused Web Design", "Local & Custom UI / UX Design", "CMS Development", "QA Testing & Integrations"]
    },
    {
      title: "Web Conversion & CRO Strategies",
      icon: <Globe size={56} strokeWidth={2.5} />,
      features: ["Conversion Insights & Audit", "Value Messaging Creation & Review", "Google Analytics Review", "User Journey Analysis for ROI", "Visual Hierarchy & Conversion Priority", "Web Optimisation Strategy & Testing"]
    },
    {
      title: "Advanced Custom Web Solutions",
      icon: <Settings size={56} strokeWidth={2.5} />,
      features: ["Headless CMS Solutions", "Advanced Filters & Instant Search", "Integration with Existing Systems", "Secure Ecommerce & Logins", "Localisation & Accessibility", "Web3 Development*"]
    },
    {
      title: "Web Portals & Web Applications",
      icon: <Layout size={56} strokeWidth={2.5} />,
      features: ["Concept Validation & Technical Analysis", "Dashboards, Customer & Trade Portals", "Advanced Onsite Search & Autocomplete", "B2B eCommerce with ERP Integration"]
    },
    {
      title: "Web API Integration Solutions",
      icon: <Cloud size={56} strokeWidth={2.5} />,
      features: ["Operational Efficiency Audit", "API Integration Analysis & Development", "Dashboard Design & Development", "Reliability & Performance Analysis", "Technical Liaison with API Providers"]
    },
    {
      title: "Digital Consultancy & Agency Strategies",
      icon: <Target size={56} strokeWidth={2.5} />,
      features: ["BA & Project Management", "Marketing & Search Audit", "1 to 1 Workshops & Focus Groups", "Analytics Planning & Conversion Tracking", "Technical & Product Support"]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: 0.12,
        delayChildren: 0.2
      } 
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative bg-[#FFD700] py-24 px-6 md:px-20 overflow-hidden text-black font-sans">
      
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-15 pointer-events-none">
        <Image src="/dot-bg.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h4 className="text-xl font-bold uppercase tracking-tight mb-4">Our Expertise</h4>
          <h2 
            className="text-6xl md:text-8xl font-black mb-12 leading-[0.85] tracking-tighter text-transparent"
            style={{ WebkitTextStroke: '2.5px black' }}
          >
            Work Only with Specialists
          </h2>
          <p className="text-2xl md:text-3xl font-regular leading-tight ">
            You would never go to your GP for heart surgery. So why would you get your most important online assets, your website, developed by a generalist "full service" marketing, SEO or creative agency? We've handpicked our web design Melbourne family to be top-notch web designers, web developers, conversion specialists, business analysts, API integrators, project managers and digital strategists - we're true web purists. Everything from simple websites to full business operational solutions.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
          {expertise.map((item, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hoverState" // Trigger internal hover animations
              viewport={{ once: true, amount: 0.1 }}
              className="relative flex flex-col pt-4 pl-14 pb-8 pr-4"
            >
              {/* Left Border SVG */}
              <div className="absolute left-0 top-0 bottom-0 w-10 pointer-events-none">
                <Image 
                  src="/left_boder.svg" 
                  alt="" 
                  fill 
                  className="object-contain object-left-top" 
                />
              </div>

              {/* Icon Area with Zoom Animation */}
              <motion.div variants={contentVariants} className="relative mb-10 mt-2">
                {/* Background Pulse Circle */}
                <motion.div 
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -left-5 w-24 h-24 bg-black/10 rounded-full" 
                />
                
                {/* Main Icon with Hover Zoom */}
                <motion.div 
                  variants={{
                    hoverState: { scale: 1.25, rotate: 5 }
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-24 h-24 flex items-center justify-center text-black"
                >
                  {item.icon}
                </motion.div>
              </motion.div>

              {/* Title */}
              <motion.h3 variants={contentVariants} className="text-3xl font-bold  leading-tight text-black min-h-[80px]">
                {item.title}
              </motion.h3>

              {/* Features List */}
              <ul className="space-y-5">
                {item.features.map((feature, fIndex) => (
                  <motion.li 
                    key={fIndex} 
                    variants={contentVariants}
                    className="flex items-start gap-4 text-lg md:text-xl font-regular text-black/90 tracking-tight"
                  >
                    <Check size={22} className="mt-1 flex-shrink-0 text-black" strokeWidth={3.5} />
                    <span className="leading-[1.2]">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;