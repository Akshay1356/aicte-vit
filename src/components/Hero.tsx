"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, Layers, Cpu, Award, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import HeroBannerCarousel from "./HeroBannerCarousel";

export default function Hero() {
  const stats = [
    { label: "AICTE Sanctioned Infrastructure", value: "₹1.10 Cr+", icon: Award, detail: "Central funding for advanced machine tools" },
    { label: "Specialized Laboratory Wings", value: "6 Core Wings", icon: Layers, detail: "Mechanical, Electronics, IoT & Optics" },
    { label: "High-Precision Machine Tools", value: "25+ Machines", icon: Cpu, detail: "Industrial 3D printers, CNC & Lasers" },
    { label: "Student & Faculty Prototypes", value: "650+ Projects", icon: Zap, detail: "Validated hardware & patent filings" },
  ];

  return (
    <section id="overview" className="relative pt-32 sm:pt-36 lg:pt-38 pb-16 sm:pb-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width Panoramic 2-Slide Hero Banner Carousel right at the top */}
        <div className="mb-12 sm:mb-16">
          <HeroBannerCarousel />
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Prominent Partner Badges & Accreditation */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-fit">
              <div className="flex items-center gap-3">
                <Image
                  src="/logos/aicte-logo.png"
                  alt="AICTE Official Insignia"
                  width={56}
                  height={56}
                  className="w-11 h-11 sm:w-13 sm:h-13 object-contain"
                />
                <Image
                  src="/logos/vit-chennai-logo.jpg"
                  alt="VIT Chennai Insignia"
                  width={140}
                  height={56}
                  className="h-11 sm:h-13 w-auto object-contain mix-blend-multiply"
                />
              </div>
              <div className="h-9 w-[1.5px] bg-slate-200 hidden sm:block" />
              <div className="text-[11px] sm:text-xs text-slate-700 font-semibold leading-tight">
                <span className="block text-[#003b71] font-bold">Government of India & VIT Chennai Joint Initiative</span>
                <span>AICTE Sanction Ref: 1-931/AICTE/IDEA/2022</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#002147] tracking-tight leading-[1.18]">
              Where Student Engineering Concepts Become{" "}
              <span className="text-[#003b71] underline decoration-amber-400 decoration-4 underline-offset-4">
                Working Reality
              </span>
            </h1>

            {/* Clear Statement of Purpose */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              The <strong>AICTE–VITC IDEA Lab</strong> (Idea Development, Evaluation & Application) is a central 24/7 innovation facility at VIT Chennai. It equips students, research scholars, and faculty from all engineering branches with industrial-grade tools for 3D additive printing, precision CNC machining, circuit fabrication, and edge AI prototyping.
            </p>

            {/* Bulleted Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Open to all multidisciplinary VIT branches</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified lab technicians on standby</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24/7 access for sanctioned hackathon teams</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct mentoring from senior research faculty</span>
              </div>
            </div>

            {/* Clear Primary and Secondary Calls to Action */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-sm sm:text-base text-white bg-[#003b71] hover:bg-[#002850] active:scale-95 transition-all shadow-sm"
              >
                <span>Book Equipment Slot</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#facilities"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md font-semibold text-sm sm:text-base text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-colors"
              >
                <span>Explore 6 Innovation Wings</span>
              </a>

              <a
                href="#safety"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#003b71] hover:underline px-2 py-1"
              >
                <BookOpen className="w-4 h-4" />
                <span>View Lab SOP & Safety Rules</span>
              </a>
            </div>

          </div>

          {/* Right Hero Institutional Graphic / Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#f3f6fa] border border-slate-300 rounded-xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Central Innovation Facility
                  </span>
                  <h3 className="text-lg font-bold text-[#002147]">
                    VIT Chennai IDEA Lab Specs
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Active Lab
                </span>
              </div>

              {/* Realistic Facility Breakdown */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-600 font-medium">Campus Location</span>
                  <span className="font-bold text-slate-900">Academic Block 2, Ground Floor</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-600 font-medium">Operating Hours</span>
                  <span className="font-bold text-slate-900">08:30 AM – 08:00 PM (Mon–Sat)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-600 font-medium">Primary Focus</span>
                  <span className="font-bold text-slate-900">Hardware & Embedded Prototyping</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-600 font-medium">Pre-requisite</span>
                  <span className="font-bold text-slate-900">Lab Safety Induction Passed</span>
                </div>
              </div>

              {/* Verified Institutional Note */}
              <div className="mt-5 p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-slate-700 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#003b71] shrink-0 mt-0.5" />
                <span>
                  Administered jointly under AICTE MODROBS & IDEA Lab Guidelines and the Office of Research, VIT Chennai.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Verified Stats Strip */}
        <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-lg bg-[#f8fafc] border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded bg-blue-100 text-[#003b71] flex items-center justify-center font-bold">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#002147] tracking-tight">
                    {item.value}
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
