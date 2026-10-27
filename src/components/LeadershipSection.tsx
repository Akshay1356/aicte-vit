"use client";

import React from "react";
import Image from "next/image";

export default function LeadershipSection() {
  const chiefMentors = [
    {
      title: "Chief Mentor",
      name: "Dr. Kanchana Bhaaskaran VS",
      designation: "Vice Chancellor",
      institution: "VIT Chennai",
      image: "/source_assets/a-BxalDSft.png",
    },
    {
      title: "Co-Chief Mentor",
      name: "Dr. Thyagarajan T",
      designation: "Pro Vice Chancellor",
      institution: "VIT Chennai",
      image: "/source_assets/b-DuouRp0h.png",
    },
  ];

  const coordinators = [
    {
      title: "Coordinator",
      name: "Dr. Sivakumar R",
      designation: "Professor / SMEC",
      email: "sivakumar.r@vit.ac.in",
      phone: "+91 44 3993 1387",
      image: "/source_assets/c-8a50upZS.png",
    },
    {
      title: "Co-Coordinator",
      name: "Dr. Sakthivel G",
      designation: "Professor / SMEC",
      email: "sakthivel.g@vit.ac.in",
      phone: "+91 44 3993 1196",
      image: "/source_assets/d-BE2s_ikA.png",
    },
  ];

  const techGurus = [
    {
      name: "Dr. Raghukiran N",
      school: "SMEC",
      image: "/source_assets/e-hHJfDbk9.png",
    },
    {
      name: "Dr. Moganapriya C",
      school: "SMEC",
      image: "/source_assets/f-BOhkmTzJ.png",
    },
    {
      name: "Dr. Abdul Quadir",
      school: "SCOPE",
      image: "/source_assets/g-BBsKIsYD.png",
    },
    {
      name: "Dr. Abirami S",
      school: "SCOPE",
      image: "/source_assets/h-CWHm3gNK.png",
    },
    {
      name: "Dr. Swetha R Kumar",
      school: "SELECT",
      image: "/source_assets/i-DkRb-9m5.png",
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002147] tracking-tight leading-tight">
            Leadership &amp;{" "}
            <span className="text-[#003B71] underline decoration-amber-400 decoration-4 underline-offset-4">
              Team
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Meet the visionary minds and dedicated mentors who form the backbone of our innovation ecosystem, guiding and inspiring the next generation of changemakers.
          </p>
        </div>

        {/* 1. Chief Mentors Tier */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-10 max-w-3xl mx-auto">
            {chiefMentors.map((mentor) => (
              <div key={mentor.name} className="flex-1 flex flex-col items-center">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#002147] mb-4 text-center">
                  {mentor.title}
                </h3>
                <div className="w-full max-w-[320px] rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#003B71]/40 transition-all flex flex-col items-center text-center">
                  {/* Large, High-Clarity Portrait Photo */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-slate-200/90 shadow-xs bg-slate-50 mb-5">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover object-[center_20%]"
                      quality={95}
                      priority
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#002147] leading-snug">
                    {mentor.name}
                  </h4>
                  <p className="text-sm font-semibold text-slate-600 mt-1">
                    {mentor.designation}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {mentor.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Coordinators Tier */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-10 max-w-3xl mx-auto">
            {coordinators.map((coord) => (
              <div key={coord.name} className="flex-1 flex flex-col items-center">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#002147] mb-4 text-center">
                  {coord.title}
                </h3>
                <div className="w-full max-w-[320px] rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#003B71]/40 transition-all flex flex-col items-center text-center">
                  {/* Large, High-Clarity Portrait Photo */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-slate-200/90 shadow-xs bg-slate-50 mb-5">
                    <Image
                      src={coord.image}
                      alt={coord.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover object-[center_20%]"
                      quality={95}
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#002147] leading-snug">
                    {coord.name}
                  </h4>
                  <p className="text-sm font-semibold text-slate-600 mt-1">
                    {coord.designation}
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col items-center text-xs text-slate-500">
                    <a
                      href={`mailto:${coord.email}`}
                      className="text-[#003B71] hover:underline font-medium"
                    >
                      {coord.email}
                    </a>
                    <span className="text-[11px] text-slate-400 mt-0.5">
                      {coord.phone}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Faculty (Tech-Gurus) Tier */}
        <div>
          <div className="text-center mb-8">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#002147]">
              Faculty (Tech-Gurus)
            </h3>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Top row: 3 faculty */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center mb-6 sm:mb-8">
              {techGurus.slice(0, 3).map((guru) => (
                <div
                  key={guru.name}
                  className="w-full max-w-[300px] rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#003B71]/40 transition-all flex flex-col items-center text-center"
                >
                  {/* Large, High-Clarity Portrait Photo */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-slate-200/90 shadow-xs bg-slate-50 mb-5">
                    <Image
                      src={guru.image}
                      alt={guru.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover object-[center_20%]"
                      quality={95}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-[#002147] leading-snug">
                    {guru.name}
                  </h4>
                  <p className="text-sm font-semibold text-[#003B71] mt-1.5 uppercase tracking-wider">
                    {guru.school}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom row: 2 faculty centered */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 items-center">
              {techGurus.slice(3, 5).map((guru) => (
                <div
                  key={guru.name}
                  className="w-full max-w-[300px] rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#003B71]/40 transition-all flex flex-col items-center text-center"
                >
                  {/* Large, High-Clarity Portrait Photo */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-slate-200/90 shadow-xs bg-slate-50 mb-5">
                    <Image
                      src={guru.image}
                      alt={guru.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover object-[center_20%]"
                      quality={95}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-[#002147] leading-snug">
                    {guru.name}
                  </h4>
                  <p className="text-sm font-semibold text-[#003B71] mt-1.5 uppercase tracking-wider">
                    {guru.school}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
