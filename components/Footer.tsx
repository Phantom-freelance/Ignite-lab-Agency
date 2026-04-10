"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    console.log('Subscribed:', email);
    
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-black border-t border-zinc-800 pt-20 pb-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-yellow-400 text-4xl font-black mb-6">PFC</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Phantom Freelance Collective - Uniting top freelancers under one roof.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-black text-xl uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-zinc-400 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-zinc-400 hover:text-yellow-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-zinc-400 hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-zinc-400 hover:text-yellow-400 transition-colors">Portfolio</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-black text-xl uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/pricing" className="text-zinc-400 hover:text-yellow-400 transition-colors">Pricing</Link></li>
              <li><Link href="/blogs" className="text-zinc-400 hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-yellow-400 transition-colors">Contact</Link></li>
              <li><Link href="/auth/signup" className="text-zinc-400 hover:text-yellow-400 transition-colors">Get Started</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-black text-xl uppercase tracking-widest mb-6">Subscribe!</h4>
            <form onSubmit={handleSubscribe} className="relative group max-w-sm mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="w-full bg-white rounded-full py-4 px-8 text-black text-base font-bold outline-none pr-16"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-yellow-400 hover:bg-black group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="group-hover:stroke-yellow-400">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
            
            {isSubscribed && (
              <p className="text-green-400 text-sm font-bold mb-4">✓ Subscribed!</p>
            )}

            <div className="pt-6">
              <p className="text-zinc-500 text-sm font-black uppercase tracking-[0.3em] mb-6">Follow Us</p>
              <div className="flex gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <span className="text-white text-sm font-bold">T</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <span className="text-white text-sm font-bold">L</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <span className="text-white text-sm font-bold">I</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-zinc-500 text-sm">© 2025 Phantom Freelance Collective. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-zinc-500 hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-zinc-500 hover:text-yellow-400 transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
