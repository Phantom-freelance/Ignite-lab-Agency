"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TermsHero from '@/components/TermsHero';
import TermsContent from '@/components/TermsContent';
import RequestForm from '@/components/RequestForm';

export default function Terms() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="flex-1 w-full">
        <TermsHero />
        <TermsContent />
        <RequestForm />
      </div>
      <Footer />
    </main>
  );
}
