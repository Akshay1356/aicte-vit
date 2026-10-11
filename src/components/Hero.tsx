"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, Layers, Cpu, Award, Zap, ShieldCheck, CheckCircle2, MapPin, Clock } from "lucide-react";
import HeroBannerCarousel from "./HeroBannerCarousel";

export default function Hero() {
  const stats = [
    { label: "AICTE Sanctioned Infrastructure", value: "₹1.10 Cr+", icon: Award, detail: "Central funding for advanced machine tools" },
    { label: "Specialized Laboratory Wings", value: "6 Core Wings", icon: Layers, detail: "Mechanical, Electronics, IoT & Optics" },
    { label: "High-Precision Machine Tools", value: "25+ Machines", icon: Cpu, detail: "Industrial 3D printers, CNC & Lasers" },
    { label: "Student & Faculty Prototypes", value: "650+ Projects", icon: Zap, detail: "Validated hardware & patent filings" },
  ];

  return (
    <section id="overview" className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 bg-white border-b border-slate-200">
      
      {/* Edge-to-Edge Full-Screen Hero Banner Carousel */}
      <div className="w-full mb-12 sm:mb-16">
        <HeroBannerCarousel />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
                href="#equipment"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-sm sm:text-base text-white bg-[#003b71] hover:bg-[#002850] active:scale-95 transition-all shadow-sm"
              >
                <span>Explore Lab Machinery</span>
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

          {/* Right: Redesigned Authentic VIT Chennai AICTE Lab Feature Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-300/80 shadow-lg bg-[#002147] flex flex-col">
              
              {/* Upper Portion: Authentic Campus Photograph with Heading & Translucent Panels */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] bg-[#001838] overflow-hidden">
                {/* Genuine VIT Chennai Campus Photograph */}
                <Image
                  src="/vit_chennai_campus.jpg"
                  alt="VIT Chennai Campus Entrance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-center select-none"
                  priority
                />

                {/* Subtle navy gradient on the left so white heading remains legible */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/90 via-[#002147]/45 to-transparent pointer-events-none" />
                
                {/* Bottom subtle gradient for translucent panels */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 via-transparent to-transparent pointer-events-none" />

                {/* Heading Content Overlay */}
                <div className="absolute top-5 left-5 sm:top-6 sm:left-6 right-5 z-10">
                  <span className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-sky-300 drop-shadow-sm">
                    CENTRAL INNOVATION FACILITY
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mt-1 tracking-tight drop-shadow-sm">
                    VIT Chennai
                    <span className="block text-white">AICTE Lab</span>
                  </h3>
                  
                  {/* Small yellow accent line beneath the title */}
                  <div className="w-12 h-1 bg-amber-400 rounded-full mt-2 mb-2" />

                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug drop-shadow-sm max-w-xs">
                    Idea Development, Evaluation &amp; Application
                  </p>
                </div>

                {/* Translucent Information Panels (Location & Operating Hours) */}
                <div className="absolute bottom-4 left-4 right-4 z-10 grid grid-cols-2 gap-2.5 sm:gap-3">
                  {/* Campus Location Panel */}
                  <div className="p-2.5 sm:p-3 rounded-lg bg-[#002147]/75 backdrop-blur-md border border-sky-400/25 text-white shadow-sm flex items-start gap-2 sm:gap-2.5">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="min-w-0">
                      <span className="block text-[10px] sm:text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                        Campus Location
                      </span>
                      <span className="block text-xs sm:text-[13px] font-bold text-white leading-tight truncate">
                        Academic Block 2
                      </span>
                      <span className="block text-[11px] text-slate-300 leading-tight">
                        Ground Floor
                      </span>
                    </div>
                  </div>

                  {/* Operating Hours Panel */}
                  <div className="p-2.5 sm:p-3 rounded-lg bg-[#002147]/75 backdrop-blur-md border border-sky-400/25 text-white shadow-sm flex items-start gap-2 sm:gap-2.5">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="min-w-0">
                      <span className="block text-[10px] sm:text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                        Operating Hours
                      </span>
                      <span className="block text-xs sm:text-[13px] font-bold text-white leading-tight truncate">
                        08:30 AM – 08:00 PM
                      </span>
                      <span className="block text-[11px] text-slate-300 leading-tight truncate">
                        Monday – Saturday
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Portion: Dark Navy Section with KEY FOCUS AREAS (4 Columns) */}
              <div className="p-5 sm:p-6 bg-[#002147] border-t border-sky-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-sky-300">
                    KEY FOCUS AREAS
                  </span>
                  <div className="h-px flex-1 bg-sky-500/20" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                  {/* Column 1 */}
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug">
                      3D Additive Manufacturing
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Prototyping &amp; Design
                    </p>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-1 border-l border-sky-500/15 pl-3 sm:pl-3">
                    <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug">
                      Precision CNC Machining
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Mechanical Fabrication
                    </p>
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-1 sm:border-l sm:border-sky-500/15 sm:pl-3">
                    <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug">
                      Circuit Fabrication
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      PCB Prototyping
                    </p>
                  </div>

                  {/* Column 4 */}
                  <div className="space-y-1 border-l border-sky-500/15 pl-3 sm:pl-3">
                    <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug">
                      Edge AI Prototyping
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Embedded Systems
                    </p>
                  </div>
                </div>
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
