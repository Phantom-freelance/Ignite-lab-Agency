"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
// Added MessageCircle (WhatsApp) and Ghost (Snapchat)
import { 
  Linkedin, Facebook, Instagram, Phone, Mail, 
  Youtube, Twitter, Music2, MessageCircle, Ghost 
} from 'lucide-react';

const MotionLink = motion(Link);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const Footer = () => {
  const socials = [
    { name: 'linkedin', icon: <Linkedin size={18} />, href: '#' },
    { name: 'facebook', icon: <Facebook size={18} />, href: '#' },
    { name: 'instagram', icon: <Instagram size={18} />, href: '#' },
    { name: 'youtube', icon: <Youtube size={18} />, href: '#' },
    { name: 'twitter', icon: <Twitter size={18} />, href: '#' },
    { name: 'tiktok', icon: <Music2 size={18} />, href: '#' },
    { name: 'whatsapp', icon: <MessageCircle size={18} />, href: '#' },
    { name: 'snapchat', icon: <Ghost size={18} />, href: '#' },
  ];

  return (
    <footer className="relative bg-black pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <motion.div 
          className="relative w-full h-full"
          animate={{ skewY: [0, 2, 0, -2, 0], skewX: [0, -1.5, 0, 1.5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/value_bg.svg" alt="" fill className="object-cover" priority />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0 translate-y-1/4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.12 }}
          className="text-[25vw] font-black text-transparent leading-none text-center select-none tracking-tighter"
          style={{ WebkitTextStroke: '2px #FFC700' }}
        >
          AGENCY
        </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24"
      >
        {/* Column 1: Info */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h3 className="text-4xl font-black text-white">
            BBR <span className="text-[#FFC700]">Agency</span>
          </h3>
          <div className="text-zinc-400 space-y-4 text-lg font-medium leading-relaxed">
            
            <p className="flex items-center gap-3 mt-6 text-white font-bold">
              <b className="text-[#FFC700] text-xl">Head office: </b> Australia
            </p>
            <p className="flex items-center gap-3 text-white font-bold group">
              <Phone size={22} className="text-[#FFC700] shrink-0 transition-transform group-hover:scale-110" />
              <span>+1 206-214-2298</span>
            </p>
            <p className="flex items-center gap-3 text-white font-bold group">
              <Mail size={22} className="text-[#FFC700] shrink-0 transition-transform group-hover:scale-110" />
              <span>support@bbragency.com</span>
            </p>
          </div>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-black text-xl mb-10 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-4">
            {[ { name: 'About', path: '/about' }, { name: 'Portfolio', path: '/portfolio' }, { name: 'Services', path: '/services' }, { name: 'Blogs', path: '/blogs' }].map((link) => (
              <li key={link.name}>
                <MotionLink 
                  href={link.path}
                  whileHover={{ x: 10, color: '#FFC700' }}
                  className="text-zinc-400 hover:text-[#FFC700] transition-colors text-lg font-bold inline-block cursor-pointer"
                >
                  {link.name}
                </MotionLink>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3: Associated Offices */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-black text-xl mb-10 uppercase tracking-widest">Services</h4>
          <ul className="space-y-4">
            {['Website Design', 'CRO Strategies', 'Digital Consultancy', 'API Integration'].map((item) => (
              <li key={item}>
                <motion.a href="#" whileHover={{ x: 10, color: '#FFC700' }} className="text-zinc-400 hover:text-[#FFC700] transition-colors text-lg font-bold inline-block">
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 4: Newsletter & Socials */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h4 className="text-white font-black text-xl uppercase tracking-widest">Subscribe!</h4>
          <div className="relative group max-w-sm">
            <input type="email" placeholder="Email Address" className="w-full bg-white rounded-full py-4 px-8 text-black text-base font-bold outline-none" />
            <button className="absolute right-2 top-2 bg-[#FFC700] hover:bg-black group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="group-hover:stroke-[#FFC700]">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="pt-6">
            <p className="text-zinc-500 text-sm font-black uppercase tracking-[0.3em] mb-6">Follow Us</p>
            {/* Added flex-wrap and max-w-xs to manage 8 icons on mobile */}
            <div className="flex flex-wrap gap-3 max-w-xs">
              {socials.map((social) => (
                <motion.a 
                  key={social.name}
                  href={social.href} 
                  whileHover={{ scale: 1.1, backgroundColor: '#FFC700', color: '#000' }}
                  className="w-11 h-11 border border-zinc-800 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 pt-16 flex justify-center items-center"
      >
        <p className="text-[#FFC700] text-sm md:text-base font-light tracking-[0.5em] text-center">
          &copy; BBRagency — All rights reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;