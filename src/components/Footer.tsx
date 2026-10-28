"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Facilities", href: "/#facilities" },
    { name: "Tech Guru", href: "/#tech-gurus" },
    { name: "Research", href: "/#research" },
  ];

  const exploreLinks = [
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Submit Your Ideas", href: "https://forms.gle/AGdph5794pXzrbbz8", external: true },
    { name: "VIT Chennai Portal", href: "https://chennai.vit.ac.in", external: true },
  ];

  return (
    <footer className="bg-[#002147] text-slate-300 pt-16 pb-10 border-t border-[#003B71]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Partner Branding Bar */}
        <div className="pb-10 mb-10 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200 shadow-xs">
              <Image
                src="/logos/aicte-logo.png"
                alt="AICTE Logo"
                width={60}
                height={60}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
            </div>
            <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200 shadow-xs">
              <Image
                src="/logos/vit-chennai-logo.jpg"
                alt="VIT Chennai Logo"
                width={140}
                height={60}
                className="h-12 sm:h-14 w-auto object-contain mix-blend-multiply"
              />
            </div>
            <div className="hidden sm:block pl-3 border-l border-white/20">
              <p className="text-white font-extrabold text-base tracking-wide">
                VIT- AICTE IDEA LAB
              </p>
              <p className="text-xs text-slate-300">
                Innovation &amp; Research Hub • VIT Chennai Campus
              </p>
            </div>
          </div>

          <div>
            <a
              href="https://forms.gle/AGdph5794pXzrbbz8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-[#002147] font-bold text-xs sm:text-sm transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit Your Ideas</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4-Column University Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: About Initiative */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              About Innovation Hub
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Empowering the next generation of innovators by providing access to world-class research facilities, prototyping infrastructure, and expert mentorship at VIT Chennai.
            </p>
            <div className="pt-2 text-xs text-slate-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Mon–Sat: 08:30 AM – 08:00 PM</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Explore */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 text-sky-400" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Academic Block 2, Ground Floor, VIT Chennai Campus, Vandalur-Kelambakkam Road, Chennai – 600127.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+914439931196" className="hover:text-white">
                  +91 44 3993 1196
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+914439931387" className="hover:text-white">
                  +91 44 3993 1387
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:sakthivel.g@vit.ac.in" className="hover:text-white">
                  sakthivel.g@vit.ac.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:sivakumar.r@vit.ac.in" className="hover:text-white">
                  sivakumar.r@vit.ac.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Compliance Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            © 2026 VIT Chennai Innovation Hub. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="https://chennai.vit.ac.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a href="https://chennai.vit.ac.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span className="text-white/20">|</span>
            <a href="https://www.aicte-india.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              AICTE India
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
