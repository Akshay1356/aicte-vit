"use client";

import React from "react";
import { UserCheck, BookOpen, MapPin, Mail, Clock, ShieldCheck, Users } from "lucide-react";

export default function MentorshipSection() {
  const mentors = [
    {
      name: "Dr. R. Kannan",
      role: "Chief Coordinator, AICTE IDEA Lab",
      school: "School of Mechanical Engineering (SMEC)",
      office: "Academic Block 2, Room 014",
      specialization: "Additive Manufacturing, Rapid Tooling, CAD/CAM Analysis, Structural Integrity",
      hours: "Mon & Thu: 2:00 PM – 5:00 PM",
      email: "kannan.r@vit.ac.in",
      designation: "Professor & Lab Lead"
    },
    {
      name: "Dr. S. Meenakshi",
      role: "Co-Coordinator, Electronics & IoT Wing",
      school: "School of Electronics Engineering (SENSE)",
      office: "Academic Block 2, Room 018",
      specialization: "Embedded Systems, Edge AI Architectures, High-Speed PCB Design, RF Telemetry",
      hours: "Tue & Fri: 2:30 PM – 5:00 PM",
      email: "meenakshi.s@vit.ac.in",
      designation: "Associate Professor & Co-Lead"
    },
    {
      name: "Er. K. Vigneshwaran",
      role: "Senior Laboratory Superintendent & Safety Officer",
      school: "Central Engineering Prototyping Facility",
      office: "IDEA Lab Machine Bay (AB2-GF)",
      specialization: "4-Axis CNC Machining, Laser Cutting Alignment, SMT Assembly, Industrial Safety",
      hours: "Mon–Sat: 9:00 AM – 6:00 PM",
      email: "idealab.technical@vit.ac.in",
      designation: "Certified Senior Machinist"
    },
  ];

  return (
    <section id="mentorship" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 text-[#003b71] text-xs font-bold uppercase tracking-wider mb-2.5">
            Academic Governance
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#002147] tracking-tight">
            Faculty Leadership & Technical Mentors
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Dedicated research faculty and certified technical staff supervising machinery operations, reviewing CAD models, and guiding student capstones.
          </p>
        </div>

        {/* Faculty & Staff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-10">
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-xl bg-[#f8fafc] border border-slate-200 hover:border-[#003b71]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Role Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#003b71] flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                    {m.designation}
                  </span>
                </div>

                {/* Name & Academic Role */}
                <h3 className="text-lg font-bold text-[#002147] mb-1">
                  {m.name}
                </h3>
                <p className="text-xs font-bold text-[#003b71] tracking-wide mb-1">
                  {m.role}
                </p>
                <p className="text-xs text-slate-500 font-medium mb-4">
                  {m.school}
                </p>

                {/* Technical Focus */}
                <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 mb-4 space-y-1">
                  <div className="font-bold text-slate-900">Expertise:</div>
                  <p className="text-slate-600 leading-relaxed">{m.specialization}</p>
                </div>
              </div>

              {/* Contact & Hours Details */}
              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#003b71] shrink-0" />
                  <span className="font-medium">{m.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#003b71] shrink-0" />
                  <span>{m.office}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#003b71] shrink-0" />
                  <a href={`mailto:${m.email}`} className="text-[#003b71] font-semibold hover:underline">
                    {m.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Student Peer Mentors Banner */}
        <div className="p-5 sm:p-6 rounded-xl bg-blue-50/60 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#003b71] text-white flex items-center justify-center font-bold shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#002147]">
                Student Peer Mentors & CAD Slicer Helpdesk
              </h4>
              <p className="text-xs text-slate-600">
                Trained senior student coordinators are available daily from 4:00 PM – 8:00 PM in the IDEA Lab for mesh repairs, G-code slicing, and soldering support.
              </p>
            </div>
          </div>
          <a
            href="#booking"
            className="px-4 py-2 rounded-md bg-[#003b71] hover:bg-[#002850] text-white text-xs font-bold shrink-0 transition-colors shadow-sm"
          >
            Connect With Lab Staff
          </a>
        </div>

      </div>
    </section>
  );
}
