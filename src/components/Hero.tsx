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

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Flex Layout: ~46% Left, ~54% Right on Desktop */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between">
          
          {/* Left Hero Narrative: ~46% width on desktop */}
          <div className="w-full lg:w-[46%] space-y-6">
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[50px] font-extrabold text-[#002147] tracking-tight leading-[1.15]">
              Where Student Engineering Concepts Become{" "}
              <span className="text-[#003b71] underline decoration-amber-400 decoration-4 underline-offset-4">
                Working Reality
              </span>
              .
            </h1>

            {/* Clear Statement of Purpose */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              The <strong>AICTE–VITC IDEA Lab</strong> (Idea Development, Evaluation &amp; Application) is a central 24/7 innovation facility at VIT Chennai. It equips students, research scholars, and faculty from all engineering branches with industrial-grade tools for 3D additive printing, precision CNC machining, circuit fabrication, and edge AI prototyping.
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
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
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
                <span>View Lab SOP &amp; Safety Rules</span>
              </a>
            </div>

          </div>

          {/* Right: Spacious VIT Chennai AICTE Lab Feature Card: ~54% width on desktop */}
          <div className="w-full lg:w-[54%]">
            <div className="rounded-2xl overflow-hidden border border-slate-300/80 shadow-xl bg-[#002147] flex flex-col">
              
              {/* Upper Portion: Authentic Campus Photograph (roughly 60% of card) */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/9.5] bg-[#001838] overflow-hidden">
                {/* Genuine VIT Chennai Campus Photograph */}
                <Image
                  src="/vit_chennai_campus.jpg"
                  alt="VIT Chennai Campus Entrance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover object-[center_35%] select-none brightness-[1.05] contrast-[1.03]"
                  priority
                />

                {/* Subtle left-to-right navy gradient ONLY on the left for heading readability without darkening the whole image */}
                <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#002147]/85 via-[#002147]/40 to-transparent pointer-events-none" />
                
                {/* Subtle bottom vignette for the overlay panels */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#002147]/75 to-transparent pointer-events-none" />

                {/* Heading Content Overlay: Upper-Left */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-6 z-10">
                  <span className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-amber-300 drop-shadow-sm">
                    CENTRAL INNOVATION FACILITY
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white leading-tight mt-0.5 tracking-tight drop-shadow-sm">
                    VIT Chennai
                    <span className="block text-white">AICTE Lab</span>
                  </h3>
                  
                  {/* Small yellow accent line beneath the title */}
                  <div className="w-10 h-0.5 bg-amber-400 rounded-full mt-1.5 mb-1.5" />

                  <p className="text-[11px] sm:text-xs text-slate-200 font-medium leading-snug drop-shadow-sm">
                    Idea Development, Evaluation &amp; Application
                  </p>
                </div>

                {/* Compact Translucent Information Panels (Location & Operating Hours) */}
                <div className="absolute bottom-3 left-4 right-4 z-10 grid grid-cols-2 gap-2.5 sm:gap-3">
                  {/* Campus Location Panel */}
                  <div className="py-2 px-3 rounded-lg bg-[#002147]/70 backdrop-blur-md border border-sky-400/25 text-white shadow-sm flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-sky-400" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[9px] sm:text-[10px] font-bold text-sky-300 uppercase tracking-wider">
                        Campus Location
                      </span>
                      <span className="block text-xs font-bold text-white leading-tight truncate">
                        Academic Block 2
                      </span>
                      <span className="block text-[10px] text-slate-300 leading-tight">
                        Ground Floor
                      </span>
                    </div>
                  </div>

                  {/* Operating Hours Panel */}
                  <div className="py-2 px-3 rounded-lg bg-[#002147]/70 backdrop-blur-md border border-sky-400/25 text-white shadow-sm flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-sky-400" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[9px] sm:text-[10px] font-bold text-sky-300 uppercase tracking-wider">
                        Operating Hours
                      </span>
                      <span className="block text-xs font-bold text-white leading-tight truncate">
                        08:30 AM – 08:00 PM
                      </span>
                      <span className="block text-[10px] text-slate-300 leading-tight truncate">
                        Monday – Saturday
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Portion: Dark Navy Section with KEY FOCUS AREAS (4 Spacious Equal Columns) */}
              <div className="py-4 px-4 sm:px-6 bg-[#001c3d] border-t border-sky-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-sky-400">
                    KEY FOCUS AREAS
                  </span>
                  <div className="h-px flex-1 bg-sky-500/25" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
                  {/* Column 1 */}
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug">
                      3D Additive Manufacturing
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Prototyping &amp; Design
                    </p>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-0.5 sm:border-l sm:border-sky-500/25 sm:pl-3">
                    <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug">
                      Precision CNC Machining
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Mechanical Fabrication
                    </p>
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-0.5 lg:border-l lg:border-sky-500/25 lg:pl-3">
                    <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug">
                      Circuit Fabrication
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      PCB Prototyping
                    </p>
                  </div>

                  {/* Column 4 */}
                  <div className="space-y-0.5 sm:border-l sm:border-sky-500/25 sm:pl-3">
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
