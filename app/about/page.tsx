"use client"

import React from 'react';
import Navbar from '@/components/Navbar';
import FAQ from '@/components/Faqs'; 
import Footer from '@/components/Footer';
import Escrow from '@/components/Escrow'; 
import AboutUsHero from '@/components/aboutUsHero';
import RequestForm from '@/components/RequestForm';
import CeoMsg from '@/components/CeoMsg';
import WhoWeAre from '@/components/WhoWeAre';


export default function AboutUs() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      
      {/* 1. Navbar (Full Width) */}
      <Navbar />

      {/* 2. Main Content Area */}
      <div className="flex-1 w-full">
        <AboutUsHero/>
        <CeoMsg/>
        <WhoWeAre/>
        <Escrow />
        <FAQ />
        <RequestForm/>
        
       
        
        
        

      </div>

      {/* 3. Footer (Full Width) */}
      
      <Footer />
    </main>
  );
}