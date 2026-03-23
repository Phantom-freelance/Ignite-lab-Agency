"use client"

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioHero from '@/components/PortfolioHero';
import RequestForm from '@/components/RequestForm';
import SelectedWork from '@/components/SelectedWork';
import TopSelections from '@/components/TopSelections';
import Portfolio from '@/components/Portfolio';

export default function AboutUs() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      
      {/* 1. Navbar (Full Width) */}
      <Navbar />

      {/* 2. Main Content Area */}
      <div className="flex-1 w-full">
        <PortfolioHero/>
        <SelectedWork/>
        <TopSelections/>
        <Portfolio/>
        <RequestForm/>
        
       
        
        
        

      </div>

      {/* 3. Footer (Full Width) */}
      
      <Footer />
    </main>
  );
}