"use client";

import React from "react";
import { Cpu, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                VITC <span className="text-blue-400">IDEA LAB</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              An AICTE sanctioned institutional initiative empowering students and researchers with world-class prototyping facilities at Vellore Institute of Technology Chennai.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              AICTE File No: 1-931/AICTE/IDEA/2022
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Innovation Wings
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition-colors">
                  Machinery Directory
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Flagship Prototypes
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Lab Reservation
                </a>
              </li>
            </ul>
          </div>

          {/* Campus Location */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Academic Block 2, Ground Floor,
                  <br />
                  VIT Chennai Campus,
                  <br />
                  Vandalur-Kelambakkam Road,
                  <br />
                  Chennai – 600 127, Tamil Nadu.
                </span>
              </div>
            </div>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:idealab@vit.ac.in" className="hover:text-white transition-colors">
                  idealab@vit.ac.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+91 44 3993 1555</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://chennai.vit.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-400 text-xs hover:underline"
                >
                  <span>Official VIT Chennai Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VITC IDEA Lab • AICTE & VIT Chennai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Safety Guidelines
            </span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              AICTE Scheme Details
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
