"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const OurBlogList = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end gap-4 mb-8">
          <Link href="/contact">
            <button className="cursor-pointer px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-black transition-all active:scale-95">
              Start your project
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="cursor-pointer px-8 py-3 rounded-full bg-yellow-400 text-black font-medium hover:bg-white transition-all active:scale-95">
              Apply as a freelancer
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurBlogList;
