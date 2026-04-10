"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingHero from '@/components/PricingHero';
import PricingPlans from '@/components/PricingPlans';
import FAQ from '@/components/Faqs';
import RequestForm from '@/components/RequestForm';

export default function Pricing() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="flex-1 w-full">
        <PricingHero/>
        <PricingPlans/>
        <FAQ />
        <RequestForm/>
      </div>
      <Footer />
    </main>
  );
}
