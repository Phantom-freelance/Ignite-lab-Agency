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

  return (
    <section className="relative bg-[#FFD700] py-24 px-6 md:px-20 overflow-hidden text-black font-sans">
      
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-15 pointer-events-none">
        <Image src="/dot-bg.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto ">
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
            style={{ WebkitTextStroke: '1.5px black' }}
          >
            Work Only with Specialists
          </h2>
          <p className="text-2xl md:text-3xl font-regular leading-tight max-w-5xl">
            You would never go to your GP for heart surgery. We've handpicked our team to be top-notch web designers and true web purists.
          </p>
        </motion.div>

        {/* 6 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {expertise.map((item, index) => (
            <div key={index} className="group h-[600px] [perspective:1200px]">
              
              {/* THE FLIPPING CORE */}
              <motion.div 
                className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
              >
                
                {/* FRONT SIDE (Gradient Wrapper) */}
                <div className="absolute inset-0 w-full h-full p-[2px] rounded-[32px] bg-gradient-to-br from-black/20 via-black/5 to-white/30 [backface-visibility:hidden]">
                    {/* Inner Content Container */}
                    <div className="w-full h-full bg-[#FFD700] rounded-[30px] p-8 flex flex-col shadow-sm">
                        <div className="mb-10 mt-2 text-black">
                            {item.icon}
                        </div>
                        <h3 className="text-3xl font-bold leading-tight mb-8">
                            {item.title}
                        </h3>
                        <ul className="space-y-4">
                            {item.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-4 text-sm lg:text-lg font-medium text-black/90">
                                <Check size={20} className="mt-1 shrink-0" strokeWidth={3} />
                                <span>{feature}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BACK SIDE (Gradient Wrapper) */}
                <div className="absolute inset-0 w-full h-full p-[2px] rounded-[32px] bg-gradient-to-br from-[#FFD700] via-white/40 to-[#FFD700] [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl">
                    {/* Inner Content Container */}
                    <div className="w-full h-full bg-black rounded-[30px] p-8 flex flex-col">
                        <div className="mb-10 mt-2 text-[#FFD700]">
                            {item.icon}
                        </div>
                        <h3 className="text-3xl font-bold leading-tight mb-8 text-white">
                            {item.title}
                        </h3>
                        <ul className="space-y-4">
                            {item.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-4  text-sm lg:text-lg font-medium text-white/80">
                                <Check size={20} className="mt-1 shrink-0 text-[#FFD700]" strokeWidth={3} />
                                <span>{feature}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;