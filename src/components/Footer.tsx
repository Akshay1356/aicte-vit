"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Shield,
  Award,
  Globe,
  FileText,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#002147] text-slate-300 pt-16 pb-12 border-t border-[#003B71]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Partner Branding Bar */}
        <div className="pb-12 mb-12 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg border border-slate-200">
              <Image
                src="/logos/aicte-logo.png"
                alt="AICTE Logo"
                width={56}
                height={56}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="bg-white p-2 rounded-lg border border-slate-200">
              <Image
                src="/logos/vit-chennai-logo.jpg"
                alt="VIT Chennai Logo"
                width={120}
                height={56}
                className="h-12 w-auto object-contain mix-blend-multiply"
              />
            </div>
            <div className="hidden sm:block pl-2 border-l border-white/15">
              <p className="text-white font-bold text-sm tracking-wide">
                AICTE × VITC IDEA LAB
              </p>
              <p className="text-xs text-slate-400">
                Scheme for Transformative Hands-on Engineering Education
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10">
              <Award className="w-3.5 h-3.5 text-sky-400" />
              <span>Sanction Ref: 1-931/AICTE/IDEA/2022</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>NAAC A++ Accredited Institution</span>
            </span>
          </div>
        </div>

        {/* 4-Column University Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: About Initiative */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              About the IDEA Lab
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The AICTE-sanctioned IDEA (Idea Development, Evaluation & Application) Lab at VIT Chennai is a ₹1.10 Crore+ multidisciplinary prototyping facility nurturing STEM conceptualization, 3D printing, advanced CNC fabrication, and IoT edge intelligence.
            </p>
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Operating Hours: 08:30 – 20:00 (Mon–Sat)</span>
            </div>
          </div>

          {/* Col 2: Institutional Portals */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Institutional Portals
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a
                  href="https://chennai.vit.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>VIT Chennai Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://vit.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>VIT Vellore Main Campus</span>
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://vtop.vit.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>VTOP Student & Faculty Login</span>
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://idealab.aicte-india.org"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>AICTE IDEA Lab Mission Portal</span>
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://chennai.vit.ac.in/research/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Deanery of Sponsored Research (VITC)</span>
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Safety */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Lab Navigation & SOP
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Overview & Grant Mandate
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Innovation Wings & Fabrication Bays
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition-colors">
                  Machinery Inventory & Tech Specs
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Student Prototypes & Patents
                </a>
              </li>
              <li>
                <a href="#mentorship" className="hover:text-white transition-colors">
                  Academic Mentors & Office Hours
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-white transition-colors">
                  Laboratory Safety Rules & PPE
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Equipment Requisition Form
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Address & Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Campus Location
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Academic Block 2, Ground Floor,
                  <br />
                  VIT Chennai Campus,
                  <br />
                  Vandalur-Kelambakkam Road,
                  <br />
                  Chennai – 600 127, Tamil Nadu, India.
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:idealab@vit.ac.in" className="hover:text-white transition-colors">
                  idealab@vit.ac.in
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+91 44 3993 1555 / Ext. 2108</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} AICTE × VITC IDEA Lab • Vellore Institute of Technology Chennai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#safety" className="hover:text-white transition-colors">
              Safety Regulations
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://chennai.vit.ac.in/privacy-policy/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Institutional Privacy Policy
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://idealab.aicte-india.org"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              AICTE Scheme
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

