"use client";

import React from "react";
import { ArrowRight, Layers, Box, Award, Zap, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "AICTE Sanctioned Grant", value: "₹1.10 Cr+", icon: Award },
    { label: "Specialized Labs & Wings", value: "6 Core Wings", icon: Layers },
    { label: "Rapid Fabrication Equipment", value: "25+ Machines", icon: Box },
    { label: "Student Prototypes Developed", value: "650+ Projects", icon: Zap },
  ];

  return (
    <section id="overview" className="relative pt-32 pb-16 sm:pt-36 sm:pb-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-700 mb-4">
            AICTE IDEA Lab • Vellore Institute of Technology Chennai
          </p>

          {/* Main Hero Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Where Engineering Ideas <br className="hidden sm:inline" />
            Transform Into <span className="text-blue-700">Practical Reality</span>
          </h1>

          {/* Subheading / Mission */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl font-normal leading-relaxed">
            The <strong>AICTE–VITC IDEA Lab</strong> is a central innovation facility at VIT Chennai empowering students, faculty, and research scholars to conceptualize, design, prototype, and validate multidisciplinary engineering solutions.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#facilities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm"
            >
              <span>Explore Facilities & Machinery</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-colors"
            >
              <span>Submit Project Proposal</span>
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-blue-700" />
            <span>Open to all VIT Chennai schools, multidisciplinary research groups & student clubs</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 transition-colors hover:border-blue-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
