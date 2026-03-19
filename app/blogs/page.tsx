"use client"

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BolgHero from '@/components/BolgHero';
import BlogDecription from '@/components/BlogDecription';
import OurBlogList from '@/components/OurBlogList';
import RequestForm from '@/components/RequestForm';

export default function AboutUs() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      
      {/* 1. Navbar (Full Width) */}
      <Navbar />

      {/* 2. Main Content Area */}
      <div className="flex-1 w-full">
        {/* 2. FIX: Component name MUST start with a Capital letter */}
        <BolgHero/>
        <BlogDecription/>
        <OurBlogList/>
        <RequestForm/>
      </div>

      {/* 3. Footer (Full Width) */}
      <Footer />
    </main>
  );
}