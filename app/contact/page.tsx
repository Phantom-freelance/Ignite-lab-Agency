"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import RequestForm from '@/components/RequestForm';

export default function Contact() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="flex-1 w-full">
        <ContactHero/>
        <RequestForm/>
      </div>
      <Footer />
    </main>
  );
}
