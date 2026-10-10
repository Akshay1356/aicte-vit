"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, Phone, Mail, Clock, ExternalLink, ShieldCheck } from "lucide-react";

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
    { name: "Innovation Wings", href: "#facilities" },
    { name: "Machinery", href: "#equipment" },
    { name: "Projects", href: "#projects" },
    { name: "Mentorship", href: "#mentorship" },
    { name: "Safety & SOP", href: "#safety" },
    { name: "Lab Booking", href: "#booking" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Institutional Bar (Official VIT Standard) */}
      <div className="bg-[#002147] text-white text-[11px] sm:text-xs border-b border-blue-950/60 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            {/* Left Institutional Links */}
            <div className="flex items-center space-x-5 text-slate-300">
              <a
                href="https://chennai.vit.ac.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 font-medium"
              >
                <span>VIT Chennai Portal</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="https://vit.ac.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>VIT Vellore</span>
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="https://vtopcc.vit.ac.in/vtop/open/page"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 font-semibold text-amber-300 transition-colors"
              >
                VTOP Login
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="https://www.aicte-india.org/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                AICTE Official
              </a>
            </div>

            {/* Right Contact & Hours */}
            <div className="flex items-center space-x-5 text-slate-300">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>Mon–Sat: 8:30 AM – 8:00 PM</span>
              </span>
              <span className="text-slate-600">|</span>
              <a
                href="tel:+914439931555"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-slate-400" />
                <span>+91 44 3993 1555</span>
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="mailto:idealab@vit.ac.in"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3 h-3 text-slate-400" />
                <span>idealab@vit.ac.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div
        className={`transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-white border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Institutional Brand Identity */}
            <Link href="/" className="flex items-center gap-3 sm:gap-4 group select-none">
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <Image
                  src="/logos/aicte-logo.png"
                  alt="AICTE Official Logo"
                  width={72}
                  height={72}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain drop-shadow-xs"
                  priority
                />
                <Image
                  src="/logos/vit-chennai-logo.jpg"
                  alt="VIT Chennai Logo"
                  width={180}
                  height={75}
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain mix-blend-multiply drop-shadow-xs"
                  priority
                />
              </div>

              <div className="h-10 sm:h-12 w-[1.5px] bg-slate-300 hidden sm:block mx-1" />

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-[#003b71]">
                    AICTE × VITC
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/80">
                    IDEA LAB
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-500 hidden sm:block font-normal tracking-wide">
                  Idea Development, Evaluation & Application Lab • VIT Chennai
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-semibold text-slate-700 hover:text-[#003b71] px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Call to Action Button */}
            <div className="flex items-center gap-3">
              <a
                href="#booking"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold text-white bg-[#003b71] hover:bg-[#002850] active:scale-95 transition-all shadow-sm"
              >
                Book Lab Slot
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-slate-700 hover:text-[#003b71] hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 pb-2 pt-1">
            Navigation Menu
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-medium text-slate-800 hover:text-[#003b71] px-3 py-2.5 rounded-md hover:bg-slate-50"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}

          <div className="pt-4 border-t border-slate-100 mt-2 space-y-2">
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-2.5 rounded-md text-sm font-semibold text-white bg-[#003b71] hover:bg-[#002850]"
            >
              Book Equipment Slot
            </a>
            <div className="flex flex-col gap-1.5 text-xs text-slate-600 px-3 pt-2">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Mon–Sat: 8:30 AM – 8:00 PM</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>+91 44 3993 1555</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
