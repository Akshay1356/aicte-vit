"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Layers, Cpu, Award, Users, CheckCircle2, MapPin, Clock } from "lucide-react";
import HeroBannerCarousel from "./HeroBannerCarousel";

export default function Hero() {
  const stats = [
    {
      metric: "04",
      unit: "Wings",
      title: "Specialized Lab Wings",
      detail: "Prototyping, Manufacturing, Electronics & PCB",
      icon: Layers,
    },
    {
      metric: "03",
      unit: "Pillars",
      title: "Core Ecosystem Pillars",
      detail: "R&D, Collaborative Learning, Innovation Hub",
      icon: Award,
    },
    {
      metric: "09+",
      unit: "Tech-Gurus",
      title: "Multidisciplinary Faculty",
      detail: "Senior mentors across SMEC, SCOPE, SELECT",
      icon: Users,
    },
    {
      metric: "Central",
      unit: "Facility",
      title: "AICTE Sanctioned Hub",
      detail: "Academic Block 2, Ground Floor",
      icon: Cpu,
    },
  ];

  return (
    <section id="home" className="relative pt-0 pb-16 sm:pb-20 bg-white border-b border-slate-200">
      
      {/* Edge-to-Edge Full-Screen Hero Banner Carousel starting flush at top */}
      <div className="w-full mb-12 sm:mb-16">
        <HeroBannerCarousel />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Flex Layout: ~46% Left, ~54% Right on Desktop */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between">
          
          {/* Left Hero Narrative: ~46% width on desktop */}
          <div className="w-full lg:w-[46%] space-y-6">
            
            {/* Headline matching source */}
            <h1 className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[50px] font-extrabold text-[#002147] tracking-tight leading-[1.15]">
              Where Ideas{" "}
              <span className="text-[#003b71] underline decoration-amber-400 decoration-4 underline-offset-4">
                Evolve
              </span>{" "}
              Into <span className="text-[#003b71]">Impact</span>.
            </h1>

            {/* Clear Statement of Purpose from source */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <strong>IDEA LAB</strong> accelerates innovation and technological excellence. Through advanced infrastructure, expert mentorship, and collaborative ecosystems, we empower students and faculty to build scalable, industry-ready solutions.
            </p>

            {/* Verified Capabilities from source */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Comprehensive training programs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>End-to-end prototyping &amp; development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Expert mentoring by senior faculty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Incubation &amp; commercialization support</span>
              </div>
            </div>

            {/* Clear Primary and Secondary Calls to Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#facilities"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-semibold text-sm sm:text-base text-white bg-[#003b71] hover:bg-[#002850] active:scale-95 transition-all shadow-sm"
              >
                <span>Explore Our Facilities</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://forms.gle/AGdph5794pXzrbbz8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md font-semibold text-sm sm:text-base text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Submit Your Ideas</span>
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

        {/* Institutional Metrics Banner */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 flex flex-col justify-between hover:bg-slate-50/60 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-extrabold text-[#002147] tracking-tight font-sans">
                          {item.metric}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-[#003B71] uppercase tracking-wider">
                          {item.unit}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#003B71] flex items-center justify-center group-hover:bg-[#003B71] group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-800 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
