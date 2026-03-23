"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Step 1: Update the blog posts to include unique images
const blogPosts = [
  {
    category: "COLOR THEORY",
    title: "Common Web Design Sales Funnel Mistakes (And How to Fix Them)",
    excerpt: "A website isn't just there to look pretty. For most businesses, it's the first proper introduction...",
    author: "Gimi Tyron",
    readTime: "Max 13min read",
    image: "/blog-1.svg", // Replace with your local asset paths
  },
  {
    category: "USER EXPERIENCE",
    title: "The Psychology of Loading States: How to Keep Users Engaged",
    excerpt: "Generic spinners can feel endless. Discover how skeleton screens and micro-interactions change...",
    author: "Sarah Garner",
    readTime: "Max 11min read",
    image: "/blog-2.svg",
  },
  {
    category: "WORKFLOW",
    title: "Chatbots vs. Human Support: Finding the Perfect Balance in 2025",
    excerpt: "Generic websites are dying. Learn how to integrate AI to serve dynamic content that changes...",
    author: "Bilal Tyson",
    readTime: "Max 15min read",
    image: "/blog-3.svg",
  },
  {
    category: "SAAS",
    title: "Optimizing Webflow Sites for Core Web Vitals on Mobile",
    excerpt: "Generic websites are dying. Learn how to integrate AI to serve dynamic content that changes...",
    author: "Gimi Tyron",
    readTime: "Max 12min read",
    image: "/blog-4.svg",
  },
  {
    category: "DEVELOPMENT",
    title: "The Case for Using TypeScript in Modern Web Agency Projects",
    excerpt: "Generic websites are dying. Learn how to integrate AI to serve dynamic content that changes...",
    author: "Bilal Tyson",
    readTime: "Max 10min read",
    image: "/blog-5.svg",
  },
];

// Step 2: Use an extended mapping to repeat the posts for a larger grid
const extendedBlogPosts = Array(15).fill(null).map((_, i) => ({
    ...blogPosts[i % blogPosts.length], // Cycle through the unique posts
    id: i,
    backColor: ["bg-[#FFC700]", "bg-white", "bg-zinc-800"][i % 3],
    backTextColor: (i % 3) === 2 ? "text-white" : "text-black"
}));

const BlogSection = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="relative z-10 px-6 md:px-12 lg:px-16">
        
        {/* GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-10">
          {extendedBlogPosts.map((post, index) => (
            <div key={post.id} className="group h-[600px] [perspective:1000px] cursor-pointer">
              {/* THE FLIPPING INNER CONTAINER */}
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* --- FRONT SIDE --- */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="bg-[#0A0A0A] border border-zinc-800 rounded-[2rem] overflow-hidden flex flex-col h-full shadow-2xl">
                    
                    {/* Image Padding Wrapper */}
                    <div className="p-8 w-full h-72"> 
                      <div className="relative h-full w-full overflow-hidden rounded-[1.2rem]">
                        {/* Step 3: Use the dynamic post.image path */}
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                    </div>

                    <div className="p-8 pt-2 flex flex-col flex-1 justify-between">
                      <div>
                        <span className="text-[#FFC700] text-xs font-bold tracking-widest uppercase">{post.category}</span>
                        <h3 className="text-white text-xl md:text-2xl font-bold mt-4 mb-3 leading-tight transition-colors duration-500 group-hover:text-[#FFC700] line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between text-zinc-500 text-[11px] font-medium border-t border-zinc-900 pt-6">
                        <span className="font-bold text-white">{post.author}</span>
                        <div className="flex items-center gap-2">
                          {/* Clock Icon SVG */}
                          <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- BACK SIDE --- */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className={`${post.backColor} rounded-[2rem] overflow-hidden flex flex-col h-full shadow-2xl`}>
                    
                    {/* Image Padding Wrapper (Back Side) */}
                    <div className="p-8 w-full h-72">
                      <div className="relative h-full w-full overflow-hidden rounded-[1.2rem]">
                        {/* We use the same dynamic post.image path on the back too */}
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                    </div>

                    <div className="p-8 pt-2 flex flex-col flex-1 justify-between">
                      <div>
                        <span className={`${post.backTextColor} opacity-60 text-xs font-bold tracking-widest uppercase`}>{post.category}</span>
                        <h3 className={`${post.backTextColor} text-xl md:text-2xl font-bold mt-4 mb-3 leading-tight line-clamp-2`}>{post.title}</h3>
                        <p className={`${post.backTextColor} opacity-70 text-sm leading-relaxed line-clamp-3`}>{post.excerpt}</p>
                      </div>
                      <div className={`flex items-center justify-between ${post.backTextColor} opacity-60 text-[11px] font-medium border-t border-black/10 pt-6`}>
                        <span className="font-bold">{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-24">
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            className="bg-[#FFC700] text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-xl transition-all cursor-pointer"
          >
            Start your project
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            className="bg-transparent text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm border border-zinc-700 hover:border-[#FFC700] hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            Apply as a freelancer
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;