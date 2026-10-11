"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  CalendarCheck,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection using intersection offsets
      const sections = [
        "overview",
        "facilities",
        "equipment",
        "projects",
        "mentorship",
        "safety",
      ];
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Overview", href: "#overview", id: "overview" },
    { name: "Innovation Wings", href: "#facilities", id: "facilities" },
    { name: "Machinery", href: "#equipment", id: "equipment" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Mentorship", href: "#mentorship", id: "mentorship" },
    { name: "Safety & SOP", href: "#safety", id: "safety" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 1. Top Institutional Utility Bar (Official VIT Dark Navy #002147) */}
      <div className="bg-[#002147] text-white text-[11px] sm:text-[12px] border-b border-[#003B71]/40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            {/* Left Institutional Portal Links */}
            <div className="flex items-center space-x-4 text-slate-300">
              <a
                href="https://chennai.vit.ac.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 font-medium"
              >
                <span>VIT Chennai Portal</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <span className="text-white/20 select-none">|</span>
              <a
                href="https://vit.ac.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 font-medium"
              >
                <span>VIT Vellore</span>
              </a>
              <span className="text-white/20 select-none">|</span>
              <a
                href="https://vtopcc.vit.ac.in/vtop/open/page"
                target="_blank"
                rel="noreferrer"
                className="text-amber-300 hover:text-amber-200 font-semibold transition-colors flex items-center gap-1"
              >
                <span>VTOP Login</span>
                <ExternalLink className="w-3 h-3 text-amber-300/80" />
              </a>
              <span className="text-white/20 select-none">|</span>
              <a
                href="https://www.aicte-india.org/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors font-medium"
              >
                AICTE Official
              </a>
            </div>

            {/* Right Contact Details & Operating Hours */}
            <div className="flex items-center space-x-4 text-slate-300">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Mon–Sat: 8:30 AM – 8:00 PM</span>
              </span>
              <span className="text-white/20 select-none">|</span>
              <a
                href="tel:+914439931555"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="Call VIT Chennai IDEA Lab"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>+91 44 3993 1555</span>
              </a>
              <span className="text-white/20 select-none">|</span>
              <a
                href="mailto:idealab@vit.ac.in"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="Email VIT Chennai IDEA Lab"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>idealab@vit.ac.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Institutional Navigation Header */}
      <div
        className={`transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-white border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            
            {/* Left: Institutional Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-3.5 group select-none shrink-0"
              aria-label="AICTE and VIT Chennai IDEA Lab Home"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src="/logos/aicte-logo.png"
                  alt="AICTE Official Insignia"
                  width={56}
                  height={56}
                  className="w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 object-contain shrink-0 drop-shadow-xs"
                  priority
                />
                <Image
                  src="/logos/vit-chennai-logo.jpg"
                  alt="VIT Chennai University Emblem"
                  width={140}
                  height={56}
                  className="h-11 sm:h-12 lg:h-13 w-auto object-contain shrink-0 mix-blend-multiply drop-shadow-xs"
                  priority
                />
              </div>

              <div className="h-9 sm:h-10 w-[1.5px] bg-slate-200 hidden sm:block mx-0.5" />

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#003B71]">
                    AICTE × VITC
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/80">
                    IDEA LAB
                  </span>
                </div>
                <span className="text-[10.5px] text-slate-500 hidden xl:block font-normal tracking-tight">
                  Idea Development, Evaluation & Application Lab • VIT Chennai
                </span>
              </div>
            </Link>

            {/* Center-Right: Desktop Primary Navigation */}
            <nav
              className="hidden lg:flex items-center gap-0.5 xl:gap-1.5"
              aria-label="Primary Navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative text-[13px] xl:text-[13.5px] font-semibold whitespace-nowrap px-2.5 xl:px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "text-[#003B71]"
                        : "text-slate-700 hover:text-[#003B71] hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {/* Restrained active indicator underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-[#003B71] rounded-full transition-all" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Accessible Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#safety"
                className="hidden sm:inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md text-[13px] font-bold text-white bg-[#003B71] hover:bg-[#002147] active:scale-95 transition-all shadow-xs border border-transparent hover:border-[#002147] whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#003B71] focus:ring-offset-2"
              >
                <span>Lab Safety SOP</span>
              </a>

              {/* Accessible Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-[#003B71] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#003B71] transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Accessible Mobile Drawer Menu & Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="lg:hidden fixed inset-x-0 top-[116px] md:top-[125px] bottom-0 bg-black/40 backdrop-blur-xs z-50 flex flex-col justify-start"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-b border-slate-200 px-5 pt-4 pb-6 space-y-1 shadow-xl max-h-[calc(100vh-130px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Laboratory Navigation
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                AICTE × VITC
              </span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-sm font-semibold px-3 py-2.5 rounded-md transition-colors ${
                    isActive
                      ? "bg-blue-50 text-[#003B71]"
                      : "text-slate-800 hover:text-[#003B71] hover:bg-slate-50"
                  }`}
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  <ChevronRight
                    className={`w-4 h-4 ${
                      isActive ? "text-[#003B71]" : "text-slate-400"
                    }`}
                  />
                </a>
              );
            })}

            {/* Mobile Lab Info */}
            <div className="pt-4 border-t border-slate-100 mt-3 space-y-3">
              <a
                href="#safety"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 h-10 rounded-md text-sm font-bold text-white bg-[#003B71] hover:bg-[#002147] transition-colors shadow-xs"
              >
                <span>Lab Safety SOP</span>
              </a>

              <div className="flex flex-col gap-2 text-xs text-slate-600 px-2 pt-1 border-t border-slate-100">
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Mon–Sat: 8:30 AM – 8:00 PM</span>
                </span>
                <a
                  href="tel:+914439931555"
                  className="flex items-center gap-2 hover:text-[#003B71]"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>+91 44 3993 1555</span>
                </a>
                <a
                  href="mailto:idealab@vit.ac.in"
                  className="flex items-center gap-2 hover:text-[#003B71]"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>idealab@vit.ac.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

