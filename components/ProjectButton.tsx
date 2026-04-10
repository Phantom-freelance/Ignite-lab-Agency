"use client"
import Link from 'next/link';

export default function ProjectButton({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) {
  if (variant === 'secondary') {
    return (
      <Link href="/contact">
        <button className="cursor-pointer px-10 py-4 rounded-full border-2 border-yellow-400 text-yellow-400 font-medium text-base md:text-lg transition-all duration-300 hover:bg-white hover:text-black active:scale-95">
          Start your project
        </button>
      </Link>
    );
  }
  
  return (
    <Link href="/contact">
      <button className="cursor-pointer px-10 py-4 rounded-full bg-yellow-400 text-black font-medium text-base md:text-lg transition-all duration-300 hover:bg-white active:scale-95">
        Start your project
      </button>
    </Link>
  );
}
