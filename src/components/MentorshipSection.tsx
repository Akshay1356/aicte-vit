"use client";

import React from "react";
import { UserCheck, BookOpen } from "lucide-react";

export default function MentorshipSection() {
  const mentors = [
    {
      name: "Dr. R. Kannan",
      role: "Chief Coordinator, AICTE IDEA Lab",
      dept: "School of Mechanical Engineering",
      focus: "Additive Manufacturing, Rapid Prototyping & CAD/CAM Systems",
    },
    {
      name: "Dr. S. Meenakshi",
      role: "Co-Coordinator & Electronics Lead",
      dept: "School of Electronics Engineering (SENSE)",
      focus: "Embedded Systems, Edge AI, PCB Design & IoT Architectures",
    },
    {
      name: "Er. Vigneshwaran K.",
      role: "Senior Lab Technologist & Machine Specialist",
      dept: "Central Innovation & Fabrication Facility",
      focus: "CNC Machining, Laser Fabrication & Industrial Safety",
    },
  ];

  return (
    <section id="mentorship" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-700 mb-2">
            Academic Mentorship
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Guided by Seasoned Innovators
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Dedicated research faculty and certified technical staff available to supervise machinery operations, review CAD designs, and mentor capstones.
          </p>
        </div>

        {/* Mentors Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="p-7 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mb-5">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{m.name}</h3>
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                  {m.role}
                </p>
                <p className="text-xs text-slate-500 font-medium mb-4">{m.dept}</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Specialization:</strong> {m.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-700" />
                  <span>Office Hours: 2 PM – 5 PM</span>
                </span>
                <span className="text-blue-700 font-semibold hover:underline cursor-pointer">Inquire</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
