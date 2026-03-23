"use client"

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import ServicesDescription from '@/components/ServicesDescription';
import ServicesListing from '@/components/ServicesListing';
import FAQ from '@/components/Faqs'; 
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonial from '@/components/Testimonial';
import RequestForm from '@/components/RequestForm';

export default function AboutUs() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      
      {/* 1. Navbar (Full Width) */}
      <Navbar />

      {/* 2. Main Content Area */}
      <div className="flex-1 w-full">
        <ServicesHero/>
        <ServicesDescription/>
        <ServicesListing/>
        <FAQ />
        <WhyChooseUs/>
        <Testimonial/>
        <RequestForm/>
      </div>

      {/* 3. Footer (Full Width) */}
      
      <Footer />
    </main>
  );
}