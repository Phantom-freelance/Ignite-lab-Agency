"use client"
import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
  ];
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-6 text-white">
        
        <Link href="/">
          <h1 className="text-xl md:text-2xl font-black cursor-pointer tracking-tight">
            job<span className="text-yellow-400">nme</span>
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={
                  isActive
                    ? "bg-yellow-400 text-black px-5 py-2 rounded-full transition-all hover:bg-yellow-500"
                    : "hover:text-yellow-400 transition-colors"
                }
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Link href="/auth/signup">
          <button className="hidden md:block bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-base hover:bg-yellow-500 transition-transform active:scale-95">
            Get Started
          </button>
        </Link>
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 top-[72px] w-full bg-black/98 z-[90] md:hidden animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col p-8 gap-8 text-lg font-medium bg-black">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    isActive 
                      ? "text-yellow-400 font-bold" 
                      : "text-white hover:text-yellow-400 transition-colors"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
            <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
              <button className="bg-yellow-400 text-black px-6 py-4 rounded-full font-bold text-base w-full mt-4 hover:bg-black hover:text-white">
                Get Started
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
