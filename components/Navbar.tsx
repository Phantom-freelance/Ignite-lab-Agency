"use client"

import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Adds a background color/blur after scrolling 20px
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Services", href: "#" },
    { name: "Blogs", href: "#" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className=" mx-auto flex items-center justify-between px-6 text-white">
        
        {/* Logo - Min 16px (text-xl is ~20px) */}
        <h1 className="text-xl md:text-2xl font-bold">
          BBR <span className="text-yellow-400">Agency</span>
        </h1>

        {/* Desktop Navigation - Min 16px (text-base) */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                link.active
                  ? "bg-yellow-400 text-black px-5 py-2 rounded-full transition-all hover:bg-yellow-500"
                  : "hover:text-yellow-400 transition-colors"
              }
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button - Min 16px */}
        <button className="hidden md:block bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-base hover:bg-yellow-500 transition-transform active:scale-95">
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] w-full bg-black/98 z-[90] md:hidden animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col p-8 gap-8 text-lg font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={
                  link.active 
                    ? "text-yellow-400" 
                    : "text-white hover:text-yellow-400 transition-colors"
                }
              >
                {link.name}
              </a>
            ))}
            <button className="bg-yellow-400 text-black px-6 py-4 rounded-full font-bold text-base w-full mt-4">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}