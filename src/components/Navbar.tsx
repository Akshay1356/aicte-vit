"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      if (isHomePage) {
        const sections = ["home", "about", "facilities", "research", "team", "contact"];
        const scrollPos = window.scrollY + 180;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Lock body scroll when mobile menu is open
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

  // Primary links before divider
  const primaryLinks = [
    { name: "Home", href: isHomePage ? "#home" : "/#home", id: "home" },
    { name: "About", href: isHomePage ? "#about" : "/#about", id: "about" },
    { name: "Facilities", href: isHomePage ? "#facilities" : "/#facilities", id: "facilities" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact", id: "contact" },
  ];

  // Secondary links after divider
  const secondaryLinks = [
    { name: "Gallery", href: "/gallery", id: "gallery" },
    { name: "Events", href: "/events", id: "events" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled || !isHomePage
            ? "bg-[#002147]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
            : "bg-transparent border-b border-white/10 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Left: IDEA Lab Logo & Brand Title */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0 select-none"
              aria-label="VIT- AICTE IDEA LAB Home"
            >
              <div className="relative h-12 w-8 sm:h-14 sm:w-9 shrink-0">
                <Image
                  src="/source_assets/1-2VLvQWmc.png"
                  alt="AICTE IDEA Lab Insignia"
                  fill
                  sizes="40px"
                  className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
                  priority
                />
              </div>

              <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-white whitespace-nowrap font-sans">
                VIT- AICTE IDEA LAB
              </span>
            </Link>

            {/* Center: Clean Navigation Links with Divider */}
            <nav
              className="hidden lg:flex items-center gap-7 xl:gap-9 text-[14.5px]"
              aria-label="Main Navigation"
            >
              {/* Primary Links */}
              {primaryLinks.map((link) => {
                const isActive = isHomePage && activeSection === link.id;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative py-1.5 transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-cyan-400 font-semibold"
                        : "text-white/90 hover:text-cyan-300 font-medium"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                    )}
                  </Link>
                );
              })}

              {/* Vertical Divider */}
              <span className="text-white/30 font-light select-none text-base">|</span>

              {/* Secondary Links */}
              {secondaryLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative py-1.5 transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-cyan-400 font-semibold"
                        : "text-white/90 hover:text-cyan-300 font-medium"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: AICTE & VIT Chennai Partner Logos */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <div className="hidden sm:flex items-center gap-3">
                {/* AICTE Gear Emblem */}
                <div className="relative h-11 w-11 lg:h-12 lg:w-12 shrink-0">
                  <Image
                    src="/source_assets/2-ClQqbaG7.png"
                    alt="AICTE Insignia"
                    fill
                    sizes="48px"
                    className="object-contain drop-shadow-sm"
                    priority
                  />
                </div>

                {/* VIT Chennai University Logo in White Card */}
                <div className="bg-white px-2.5 py-1 rounded-md border border-white/20 shadow-sm flex items-center h-10 lg:h-11">
                  <Image
                    src="/logos/vit-chennai-logo.jpg"
                    alt="VIT Chennai Emblem"
                    width={110}
                    height={34}
                    className="h-8 lg:h-9 w-auto object-contain mix-blend-multiply"
                    priority
                  />
                </div>
              </div>

              {/* Mobile Menu Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-300 hover:bg-white/10 transition-colors focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-black/60 backdrop-blur-sm z-50 flex flex-col justify-start"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#050b14]/95 border-b border-white/10 px-5 pt-4 pb-6 space-y-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
                Navigation
              </span>
              <span className="text-xs font-bold text-cyan-400">
                VIT- AICTE IDEA LAB
              </span>
            </div>

            {/* Primary Links */}
            {primaryLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between text-sm font-semibold px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-400"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}

            <div className="my-2 border-t border-white/10" />

            {/* Secondary Links */}
            {secondaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between text-sm font-semibold px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-400"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}

            {/* Mobile Partner Logos */}
            <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-center gap-4">
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src="/source_assets/2-ClQqbaG7.png"
                  alt="AICTE Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-white px-2.5 py-1 rounded-md border border-white/20 flex items-center h-9">
                <Image
                  src="/logos/vit-chennai-logo.jpg"
                  alt="VIT Chennai Logo"
                  width={90}
                  height={28}
                  className="h-7 w-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
