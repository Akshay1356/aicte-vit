"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Facilities", href: "#facilities" },
    { name: "Equipment", href: "#equipment" },
    { name: "Projects", href: "#projects" },
    { name: "Mentorship", href: "#mentorship" },
    { name: "Book Lab", href: "#booking" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Badges */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logos/aicte-logo.png"
                alt="AICTE Logo"
                width={40}
                height={40}
                className="w-9 h-9 object-contain"
              />
              <Image
                src="/logos/vit-chennai-logo.jpg"
                alt="VIT Chennai Logo"
                width={85}
                height={40}
                className="h-8 w-auto object-contain mix-blend-multiply"
              />
            </div>
            <div className="h-7 w-[1px] bg-slate-200 hidden sm:block mx-0.5" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">
                  IDEA <span className="text-blue-700">LAB</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  AICTE
                </span>
              </div>
              <span className="text-[11px] text-slate-500 hidden sm:block tracking-wide">
                VIT Chennai Center
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-700 px-3.5 py-2 rounded-md hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm"
            >
              Book Equipment
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-medium text-slate-700 hover:text-blue-700 px-3 py-2.5 rounded-lg hover:bg-slate-50"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-lg text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800"
            >
              Book Equipment Slot
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
