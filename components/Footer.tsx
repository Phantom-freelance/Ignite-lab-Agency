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
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
            <h3 className="text-yellow-400 text-4xl font-black mb-6 tracking-tight">
              JOB-<span className="text-white">N</span>-ME
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Job-N-Me — Uniting top freelancers with clients worldwide. Fast, flexible, escrow-protected.
            </p>
            <p className="text-zinc-500 text-sm mt-4">
              Need help? <a href="mailto:support@job-n-me.com" className="text-yellow-400 hover:underline">support@job-n-me.com</a>
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-black text-xl uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-zinc-400 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-zinc-400 hover:text-yellow-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-zinc-400 hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-zinc-400 hover:text-yellow-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/careers" className="text-zinc-400 hover:text-yellow-400 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-black text-xl uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/pricing" className="text-zinc-400 hover:text-yellow-400 transition-colors">Pricing</Link></li>
              <li><Link href="/blogs" className="text-zinc-400 hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-zinc-400 hover:text-yellow-400 transition-colors">FAQ</Link></li>
              <li><Link href="/resources" className="text-zinc-400 hover:text-yellow-400 transition-colors">Resources</Link></li>
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
                <a href="https://www.x.com/job-n-me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors" aria-label="X (Twitter)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/phantom-collective-ab528a404/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="white"/></svg>
                </a>
                <a href="https://www.instagram.com/job-n-me1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-zinc-500 text-sm">© 2026 Job-N-Me. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/privacy" className="text-zinc-500 hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-zinc-500 hover:text-yellow-400 transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="text-zinc-500 hover:text-yellow-400 transition-colors">Disclaimer</Link>
            <Link href="/refund-policy" className="text-zinc-500 hover:text-yellow-400 transition-colors">Refund Policy</Link>
            <Link href="/cookie-policy" className="text-zinc-500 hover:text-yellow-400 transition-colors">Cookie Policy</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
