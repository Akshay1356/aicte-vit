"use client";

import React from "react";
import Image from "next/image";
import { Users, GraduationCap, Award } from "lucide-react";

export default function LeadershipSection() {
  const leadership = [
    {
      role: "Chief Mentor",
      name: "Dr. Kanchana Bhaaskaran VS",
      designation: "Vice Chancellor",
      institution: "VIT Chennai",
      image: "/source_assets/a-BxalDSft.png",
    },
    {
      role: "Co-Chief Mentor",
      name: "Dr. Thyagarajan T",
      designation: "Pro Vice Chancellor",
      institution: "VIT Chennai",
      image: "/source_assets/b-DuouRp0h.png",
    },
  ];

  const coordinators = [
    {
      role: "Coordinator",
      name: "Dr. Sivakumar R",
      designation: "Professor",
      department: "School of Mechanical Engineering (SMEC)",
      image: "/source_assets/c-8a50upZS.png",
      email: "sivakumar.r@vit.ac.in",
      phone: "+91 44 3993 1387",
    },
    {
      role: "Co-Coordinator",
      name: "Dr. Sakthivel G",
      designation: "Professor",
      department: "School of Mechanical Engineering (SMEC)",
      image: "/source_assets/d-BE2s_ikA.png",
      email: "sakthivel.g@vit.ac.in",
      phone: "+91 44 3993 1196",
    },
  ];

  const techGurus = [
    {
      name: "Dr. Raghukiran N",
      school: "SMEC",
      department: "Mechanical Engineering",
      image: "/source_assets/e-hHJfDbk9.png",
    },
    {
      name: "Dr. Moganapriya C",
      school: "SMEC",
      department: "Mechanical Engineering",
      image: "/source_assets/f-BOhkmTzJ.png",
    },
    {
      name: "Dr. Abdul Quadir",
      school: "SCOPE",
      department: "Computer Science & Engineering",
      image: "/source_assets/g-BBsKIsYD.png",
    },
    {
      name: "Dr. Abirami S",
      school: "SCOPE",
      department: "Computer Science & Engineering",
      image: "/source_assets/h-CWHm3gNK.png",
    },
    {
      name: "Dr. Swetha R Kumar",
      school: "SELECT",
      department: "Electrical & Electronics Engineering",
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
        <div className="mb-14">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Award className="w-4 h-4 text-amber-500" />
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-500">
              Institutional Mentorship
            </h3>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="flex-1 p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col items-center text-center group hover:border-[#003B71]/40 transition-all"
              >
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 bg-slate-200">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-100 text-[#003B71] mb-2">
                  {person.role}
                </span>
                <h4 className="text-lg font-bold text-[#002147]">
                  {person.name}
                </h4>
                <p className="text-sm font-semibold text-slate-600">
                  {person.designation}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {person.institution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Coordinators Tier */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <GraduationCap className="w-4 h-4 text-[#003B71]" />
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-500">
              Lab Coordinators
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coordinators.map((coord) => (
              <div
                key={coord.name}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-5 group hover:border-[#003B71]/40 transition-all"
              >
                <div className="relative w-28 h-28 rounded-xl overflow-hidden border-2 border-slate-100 shadow-sm shrink-0 bg-slate-100">
                  <Image
                    src={coord.image}
                    alt={coord.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-center sm:text-left space-y-1 min-w-0">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200/60">
                    {coord.role}
                  </span>
                  <h4 className="text-lg font-bold text-[#002147] truncate">
                    {coord.name}
                  </h4>
                  <p className="text-xs font-semibold text-slate-700">
                    {coord.designation}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {coord.department}
                  </p>
                  <div className="pt-2 text-xs text-slate-600 flex flex-col gap-0.5">
                    <a
                      href={`mailto:${coord.email}`}
                      className="text-[#003B71] hover:underline font-medium truncate"
                    >
                      {coord.email}
                    </a>
                    <span className="text-slate-500 text-[11px]">
                      Ph: {coord.phone}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Faculty (Tech-Gurus) Tier */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="w-4 h-4 text-emerald-600" />
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-500">
              Faculty Tech-Gurus
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {techGurus.map((guru) => (
              <div
                key={guru.name}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center group hover:bg-white hover:border-[#003B71]/40 transition-all"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-xs mb-3 bg-slate-200">
                  <Image
                    src={guru.image}
                    alt={guru.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h5 className="text-xs sm:text-sm font-bold text-[#002147] leading-snug">
                  {guru.name}
                </h5>
                <span className="mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-[#003B71]">
                  {guru.school}
                </span>
                <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">
                  {guru.department}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
