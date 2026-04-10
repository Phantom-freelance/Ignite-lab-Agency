"use client"
import React from 'react';
import Link from 'next/link';

const FreelancerButton = () => {
  return (
    <Link href="/auth/signup">
      <button className="cursor-pointer px-10 py-4 rounded-full bg-yellow-400 text-black font-bold text-lg hover:bg-white transition-all active:scale-95 shadow-lg">
        Apply as a freelancer
      </button>
    </Link>
  );
};

export default FreelancerButton;
