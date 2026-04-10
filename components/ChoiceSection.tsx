"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ChoiceSection = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
          Your Choice, Our Excellence
        </h2>
        
        <div className="flex flex-wrap gap-6 justify-center mt-12">
          <Link href="/contact">
            <button className="cursor-pointer px-10 py-4 rounded-full border-2 border-yellow-400 text-yellow-400 font-medium text-lg hover:bg-yellow-400 hover:text-black transition-all active:scale-95">
              Start your project
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="cursor-pointer px-10 py-4 rounded-full bg-yellow-400 text-black font-medium text-lg hover:bg-white transition-all active:scale-95">
              Apply as a freelancer
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ChoiceSection;
