"use client";

import React from "react";
import {
  ShieldCheck,
  FileCheck2,
  Clock,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

export default function SafetySection() {
  return (
    <section id="safety" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded text-xs font-semibold uppercase tracking-wider text-[#003B71] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#003B71]"></span>
            Laboratory Compliance & Safety
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002147] tracking-tight">
            Institutional Standard Operating Procedures (SOP)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            All students, research scholars, and faculty operating machinery within the AICTE–VITC IDEA Lab must strictly adhere to the safety guidelines and institutional protocols.
          </p>
        </div>

        {/* Safety & Protocol Rules Banner */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Institutional Standard Operating Procedures (SOP)
              </div>
              <h3 className="text-lg font-bold text-[#002147] mt-1">
                Mandatory Laboratory Protocols & Safety Regulations
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono bg-slate-50 px-3 py-1.5 rounded border border-slate-200">
              Ref: SOP-IDEA-2024/V2
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#003B71] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">1. PPE Compliance</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Safety spectacles, closed-toe leather/canvas shoes, and ESD wrist straps are required inside CNC and PCB soldering bays. Loose clothing and accessories must be secured before entering.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#003B71] shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">2. CAD & Toolpath Clearance</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  All 3D <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px]">.STL</code> or CNC <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px]">.STEP</code>/G-code files must be inspected and vetted by lab technicians prior to operational execution on high-precision tooling.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#003B71] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">3. Operational Discipline</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Regular lab hours are Monday–Saturday: 08:30 AM to 08:00 PM. Overnight 24/7 access is strictly restricted to sanctioned hackathon teams with prior faculty and Dean authorization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Guidelines & Help Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#003B71] mb-3">
              Laboratory General Guidelines
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003B71] mt-2 shrink-0"></span>
                <span><strong>Access Eligibility:</strong> Open to all active students (B.Tech, M.Tech, Ph.D.) and faculty researchers across all engineering schools at VIT Chennai.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003B71] mt-2 shrink-0"></span>
                <span><strong>Consumables Policy:</strong> Standard PLA filament, resin, standard FR4 copper-clad boards, and acrylic stocks are subsidized; specialized composites require departmental sign-off.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003B71] mt-2 shrink-0"></span>
                <span><strong>Supervised Operation:</strong> First-time operators on 4-axis CNC milling centers or 100W laser cutters must work under direct oversight of certified laboratory technicians.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003B71] mt-2 shrink-0"></span>
                <span><strong>Housekeeping & Safety:</strong> Workbenches must be cleaned and waste materials disposed of in designated recycling bins after every fabrication run.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-[#002147] text-white rounded-xl p-6 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1">
              Safety Support & Assistance
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Questions Regarding Safety Protocols?
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-5">
              Contact the Lab Safety Coordinator or visit the IDEA Lab Helpdesk in Academic Block 2, Ground Floor for guidance on material safety data sheets (MSDS) and hazardous protocol vetting.
            </p>
            <div className="flex flex-col gap-2.5 text-xs text-slate-200 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Lab In-Charge:</span>
                <span>idealab@vit.ac.in</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Emergency Desk:</span>
                <span>+91 44 3993 1555</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
