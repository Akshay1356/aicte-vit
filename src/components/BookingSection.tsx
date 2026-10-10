"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  ShieldCheck,
  FileCheck2,
  Clock,
  AlertTriangle,
  FileText,
  Calendar,
  User,
  Hash,
  Mail,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [safetyAgreed, setSafetyAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    regNumber: "",
    email: "",
    department: "SMEC (Mechanical)",
    equipment: "Markforged Onyx Pro Carbon 3D",
    date: "",
    timeSlot: "Morning (09:00 - 13:00)",
    projectSummary: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!safetyAgreed) {
      alert("Please review and accept the IDEA Lab Safety & SOP Agreement.");
      return;
    }
    // Generate deterministic institutional reference ID
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const generatedId = `VITC-IDEA-${new Date().getFullYear()}-${randomHex}`;
    setReferenceId(generatedId);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded text-xs font-semibold uppercase tracking-wider text-[#003B71] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#003B71]"></span>
            Lab Requisition & SOP
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002147] tracking-tight">
            Equipment Requisition & Facility Access
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Registered students, research scholars, and faculty members across VIT Chennai schools may requisition bench time and specialized fabrication machines through the institutional booking protocol.
          </p>
        </div>

        {/* Safety & Protocol Rules Banner (Anchor #safety) */}
        <div id="safety" className="mb-12 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
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
                  Safety spectacles, closed-toe leather/canvas shoes, and ESD wrist straps are required inside CNC and PCB soldering bays. Loose clothing must be secured.
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
                  All 3D `.STL` or CNC `.STEP`/G-code files must be uploaded and vetted by lab technicians at least 24 hours prior to scheduled operational slots.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#003B71] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">3. Slot Discipline</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Regular slot hours are Monday–Saturday: 08:30 to 20:00. Overnight 24/7 access is restricted to sanctioned hackathon teams with prior Dean approval.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form & Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Guidelines & Lab Administration */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#003B71] mb-3">
                Requisition Guidelines
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003B71] mt-2 shrink-0"></span>
                  <span><strong>Eligibility:</strong> Open to all active students (B.Tech, M.Tech, Ph.D.) with valid VIT registration numbers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003B71] mt-2 shrink-0"></span>
                  <span><strong>Consumables:</strong> Basic PLA, resin, standard FR4 boards, and acrylic stocks are subsidized; specialty composites require department sign-off.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003B71] mt-2 shrink-0"></span>
                  <span><strong>Supervision:</strong> First-time users on CNC mills or 100W laser systems must operate under the direct oversight of lab technicians.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003B71] mt-2 shrink-0"></span>
                  <span><strong>Requisition Tracking:</strong> Booking notifications are transmitted directly to your official <code>@vitstudent.ac.in</code> inbox.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#002147] text-white rounded-xl p-6 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1">
                Help Desk & Verification
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Need Guidance on Material Feasibility?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Consult with our resident technical superintendent at Academic Block 2 (Ground Floor) or email the lab coordinators directly.
              </p>
              <div className="pt-3 border-t border-white/10 text-xs text-slate-300 space-y-1">
                <div><strong>Inquiries:</strong> idealab@vit.ac.in</div>
                <div><strong>Direct Extension:</strong> +91 44 3993 1555 / Ext. 2108</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Requisition Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-6 space-y-6">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <div className="text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 inline-block px-3 py-1 rounded">
                    Requisition Submitted Successfully
                  </div>
                  <h3 className="text-2xl font-bold text-[#002147] mt-3">
                    Booking Request Confirmed
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto">
                    Your lab slot requisition has been recorded in the central AICTE × VITC IDEA Lab reservation register. An automated confirmation receipt has been generated.
                  </p>
                </div>

                {/* Receipt Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 font-mono text-xs text-slate-800 space-y-2.5">
                  <div className="flex justify-between items-center pb-2.5 border-b border-slate-200">
                    <span className="text-slate-500 font-sans font-semibold">Reference ID:</span>
                    <span className="font-bold text-[#003B71]">{referenceId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-sans">Applicant Name:</span>
                    <span className="font-semibold">{formData.name || "Student Applicant"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-sans">Registration No:</span>
                    <span className="font-semibold">{formData.regNumber || "N/A"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-sans">Student Email:</span>
                    <span className="font-semibold">{formData.email || "N/A"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-sans">School / Dept:</span>
                    <span className="font-semibold">{formData.department}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-sans">Requisitioned Machine:</span>
                    <span className="font-semibold text-slate-900">{formData.equipment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-sans">Requested Slot:</span>
                    <span className="font-semibold">{formData.date || "Scheduled Date"} ({formData.timeSlot})</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
                  <strong>Next Step:</strong> Please bring your physical VIT Student ID card and safety glasses when presenting at Academic Block 2 for your slot induction.
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSafetyAgreed(false);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                  >
                    <span>Submit Another Requisition</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-[#002147]">
                      Equipment Requisition Form
                    </h3>
                    <p className="text-xs text-slate-500">
                      All fields are mandatory for lab log recording.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">Step 1 of 1</span>
                </div>

                {/* Name & Reg Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#003B71] focus:ring-1 focus:ring-[#003B71] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Hash className="w-3.5 h-3.5 text-slate-500" />
                      Registration Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 22BCE1420"
                      value={formData.regNumber}
                      onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#003B71] focus:ring-1 focus:ring-[#003B71] transition-colors"
                    />
                  </div>
                </div>

                {/* Email & School */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      VIT Student Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul.s2022@vitstudent.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#003B71] focus:ring-1 focus:ring-[#003B71] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-slate-500" />
                      School / Department
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#003B71] focus:ring-1 focus:ring-[#003B71] transition-colors"
                    >
                      <option>SMEC (School of Mechanical Engineering)</option>
                      <option>SENSE (School of Electronics Engineering)</option>
                      <option>SCOPE (School of Computer Science & Engg)</option>
                      <option>SELECT (School of Electrical Engineering)</option>
                      <option>SAS (School of Advanced Sciences)</option>
                      <option>VITBS / Interdisciplinary Center</option>
                    </select>
                  </div>
                </div>

                {/* Target Equipment */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-slate-500" />
                    Target Machinery
                  </label>
                  <select
                    id="equipment-select"
                    value={formData.equipment}
                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#003B71] focus:ring-1 focus:ring-[#003B71] transition-colors"
                  >
                    <option>Markforged Onyx Pro Carbon 3D</option>
                    <option>Formlabs Form 3+ SLA Resin Printer</option>
                    <option>Roland MDX-540 4-Axis Precision CNC</option>
                    <option>Epilog Fusion Pro 36 Laser Cutter (100W)</option>
                    <option>Voltera V-One PCB Multi-Layer Printer</option>
                    <option>Keysight MSO Electronics Diagnostics Bench</option>
                    <option>NVIDIA Jetson AGX Orin Edge AI Station</option>
                    <option>DOBOT Magician Educational Robotic Arm</option>
                  </select>
                </div>

                {/* Date & Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      Desired Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#003B71] focus:ring-1 focus:ring-[#003B71] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#003B71] focus:ring-1 focus:ring-[#003B71] transition-colors"
                    >
                      <option>Morning (09:00 - 13:00)</option>
                      <option>Afternoon (14:00 - 18:00)</option>
                      <option>Evening Extended (18:00 - 20:30)</option>
                    </select>
                  </div>
                </div>

                {/* Project Summary */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    Project Scope & Raw Material Requisition
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly state your design objectives, material requirements (e.g. Onyx/carbon fiber, aluminum 6061, cast acrylic), and CAD file format..."
                    value={formData.projectSummary}
                    onChange={(e) => setFormData({ ...formData, projectSummary: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#003B71] focus:ring-1 focus:ring-[#003B71] transition-colors"
                  ></textarea>
                </div>

                {/* Safety Agreement Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={safetyAgreed}
                      onChange={(e) => setSafetyAgreed(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#003B71] focus:ring-[#003B71]"
                      required
                    />
                    <span className="text-xs text-slate-600 leading-snug">
                      I have read and agree to strictly abide by the <strong>AICTE × VITC IDEA Lab Safety SOP</strong>, wear mandated personal protective gear, and submit fabrication designs for pre-screening.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-3 py-3 px-6 rounded-lg font-bold text-xs sm:text-sm text-white bg-[#003B71] hover:bg-[#002147] transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Machine Requisition</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

