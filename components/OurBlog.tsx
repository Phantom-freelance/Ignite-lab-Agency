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
  }
];

const BlogSection = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      
      {/* Background Shape Image at the bottom */}
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
              className="text-8xl md:text-7xl font-black tracking-tighter text-transparent leading-none"
              style={{ WebkitTextStroke: '1.5px #FFC700' }}
            >
              Latest insights  & inspiration
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#FFC700", color: "#000" }}
            className="border border-white text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            View All
          </motion.button>
        </div>

        {/* TWO-ROW GRID SYSTEM */}
        <div className="flex flex-col gap-20">
          
          {/* ROW 1: Two Large Posts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
                <div className="relative w-full md:w-1/3 min-h-[250px] overflow-hidden">
                  <Image src={post.image} alt="Blog" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROW 2: Two Posts + Subscribe Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {blogPosts.slice(2, 4).map((post, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="group cursor-pointer bg-[#0A0A0A] border border-zinc-800 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={post.image} alt="Blog" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <span className="text-[#FFC700] text-xs font-bold tracking-widest">{post.category}</span>
                  <h3 className="text-white text-xl font-bold mt-4 mb-3 group-hover:text-[#FFC700] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-4">
                    <span>{post.author}</span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Subscribe Card with Added Shadow for Visibility */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#FFC700] rounded-[2.5rem] p-8 flex flex-col justify-center text-black shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-black/5"
            >
              <div className="bg-black w-10 h-10 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-5 h-5 text-[#FFC700]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase leading-tight">Subscribe to our blog</h3>
              <p className="text-black/70 text-sm font-medium mb-6">Get the latest posts in your email</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white rounded-full px-6 py-3.5 outline-none placeholder:text-zinc-400 text-sm shadow-inner"
                />
                <button className="w-full bg-black text-[#FFC700] rounded-full py-3.5 font-black uppercase tracking-widest text-xs hover:bg-zinc-900 transition-all active:scale-95 shadow-lg">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-20 relative z-20">
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl border border-transparent hover:border-black/10 transition-all"
          >
            Start your project
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl transition-all"
          >
            Apply as a freelancer
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;