"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrivacyHero from '@/components/PrivacyHero';
import PrivacyContent from '@/components/PrivacyContent';
import RequestForm from '@/components/RequestForm';

export default function Privacy() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="flex-1 w-full">
        <PrivacyHero />
        <PrivacyContent />
        <RequestForm />
      </div>
      <Footer />
    </main>
  );
}
