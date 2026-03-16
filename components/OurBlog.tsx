"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const blogPosts = [
  {
    category: "WORKFLOW",
    title: "Chatbots vs. Human Support: Which Works Best for Online Stores in 2025?",
    excerpt: "Running an online store in 2025 is a balancing act. Stock levels, payments, ads, shipping headaches... and then customer support on top of it all.",
    author: "Doris Swan",
    readTime: "10min read",
    image: "/blog-1.svg", 
  },
  {
    category: "PRODUCTIVITY",
    title: "Why a Website Redesign Is Crucial for Keeping Your Site Competitive",
    excerpt: "A website is the first stop for most customers. That first click, that first scroll—it sets the tone. People don't wait around either.",
    author: "Sarah Garner",
    readTime: "12min read",
    image: "/blog-2.svg"
  },
  {
    category: "USER EXPERIENCE",
    title: "Psychology of Web Design: How Design Choices Influence Buyer Decisions",
    excerpt: "People don't give websites much time. By the time a page loads, the decision's basically made. Google research says it takes 0.05 seconds.",
    author: "Ray Taylor",
    readTime: "15min read",
    image: "/blog-3.svg"
  },
  {
    category: "COLOR THEORY",
    title: "Common Web Design Sales Funnel Mistakes (And How to Fix Them)",
    excerpt: "A website isn't just there to look pretty. For most businesses, it's the first proper introduction to a customer.",
    author: "Bilal Tyson",
    readTime: "13min read",
    image: "/blog-4.svg"
  },
  {
    category: "AI & AUTOMATION",
    title: "How to Use AI to Personalize Your Customer's Web Journey",
    excerpt: "Generic websites are dying. Learn how to integrate AI to serve dynamic content that changes based on who is clicking.",
    author: "Bilal Tyson",
    readTime: "11min read",
    image: "/blog-5.svg"
  }
];

const BlogSection = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      
      {/* Background Shape Image */}
      <div className="absolute left-0 bottom-0 w-full h-[40%] pointer-events-none z-0">
        <Image 
          src="/blog-bg.png" 
          alt="" 
          fill
          className="object-cover object-bottom opacity-100"
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="text-white text-sm font-bold uppercase tracking-widest mb-4">Our Blog</p>
            <h2 
              className="text-6xl md:text-7xl font-black tracking-tighter text-transparent leading-none"
              style={{ WebkitTextStroke: '1.5px #FFC700' }}
            >
              Latest insights & inspiration
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#FFC700", color: "#000" }}
            className="border border-white text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            View All
          </motion.button>
        </div>

        {/* GRID SYSTEM */}
        <div className="flex flex-col gap-10 md:gap-20">
          
          {/* ROW 1: The first 2 items (Large Horizontal Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
            {blogPosts.slice(0, 2).map((post, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer bg-[#0A0A0A] border border-zinc-800 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row h-full shadow-2xl"
              >
                <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[#FFC700] text-xs font-bold tracking-widest">{post.category}</span>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mt-4 mb-4 group-hover:text-[#FFC700] transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="mt-6 text-zinc-500 text-xs uppercase font-bold tracking-widest">
                    {post.author} • {post.readTime}
                  </div>
                </div>
                <div className="relative w-full md:w-1/3 min-h-[200px] md:min-h-full overflow-hidden">
                  <Image src={post.image} alt="Blog" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROW 2: The remaining 3 items (Vertical Cards in a 3-column row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
            {blogPosts.slice(2, 5).map((post, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="group cursor-pointer bg-[#0A0A0A] border border-zinc-800 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl h-full"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={post.image} alt="Blog" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[#FFC700] text-xs font-bold tracking-widest">{post.category}</span>
                    <h3 className="text-white text-xl font-bold mt-4 mb-3 group-hover:text-[#FFC700] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-zinc-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-auto">
                    <span>{post.author}</span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-20 relative z-20">
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl border border-transparent hover:border-black/10 transition-all w-full sm:w-auto text-center"
          >
            Start your project
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl transition-all border border-zinc-800 w-full sm:w-auto text-center"
          >
            Apply as a freelancer
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;