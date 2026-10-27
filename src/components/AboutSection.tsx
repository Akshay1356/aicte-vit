"use client";

import React from "react";
import Image from "next/image";
import { Eye, Target } from "lucide-react";

export default function AboutSection() {
  const visionTags = ["Research", "Innovation", "Collaboration", "Excellence"];
  const missionTags = ["Empowerment", "Research", "Solutions", "Entrepreneurship"];

  return (
    <section id="about" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Visual */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 mb-16">
          <div className="w-full lg:w-1/2 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#003B71] text-xs font-bold tracking-wide">
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002147] tracking-tight leading-tight">
              Empowering the Next Generation of{" "}
              <span className="text-[#003B71] underline decoration-amber-400 decoration-4 underline-offset-4">
                Innovators
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              The <strong>VIT Chennai Innovation &amp; Research Hub</strong> is a state-of-the-art ecosystem designed to nurture creativity, foster research, and transform groundbreaking ideas into real-world solutions that make a difference.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Interdisciplinary Research
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Industry Grade Hardware
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Faculty Mentorship
              </span>
            </div>
          </div>

          {/* Right Visual Image from Source */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <Image
                src="/source_assets/man101-CB030BJV.jpg"
                alt="Empowering Innovators - Man with lightbulb idea"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#003B71]/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#003B71]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#002147] tracking-tight">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To be a globally recognized innovation hub that bridges the gap between academic research and industry needs, creating a sustainable ecosystem for technological advancement and entrepreneurship.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {visionTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#003B71] border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#003B71]/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-0 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#002147] tracking-tight">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To cultivate a dynamic environment that empowers students and faculty to engage in cutting-edge research, develop innovative solutions, and foster entrepreneurial ventures that address societal needs and contribute to economic growth.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {missionTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
