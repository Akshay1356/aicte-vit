"use client";

import React, { useState } from "react";
import { Send, CheckCircle, ShieldAlert, FileText, Clock } from "lucide-react";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    regNumber: "",
    email: "",
    department: "",
    equipment: "Markforged Onyx Pro Carbon 3D",
    date: "",
    timeSlot: "Morning (09:00 - 13:00)",
    projectSummary: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Guidelines & Protocols */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-700 mb-2">
                Lab Access & Booking
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Reserve Equipment & Prototyping Benches
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              All registered VIT Chennai undergraduate, postgraduate, and research scholars can request machine time. Please ensure you follow lab safety protocols.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <ShieldAlert className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Safety Induction Protocol</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Safety goggles, closed-toe footwear, and ESD wrist straps are required in CNC and PCB fabrication zones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <FileText className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">CAD / STL Pre-Screening</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Upload your .STEP or .STL models at least 24 hours prior to your scheduled slot for toolpath verification.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Clock className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Operating Hours</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Monday to Saturday: 8:30 AM – 8:00 PM (Special 24/7 access granted for sanctioned hackathon teams).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-9 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Slot Request Received</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name || "Student"}</strong>. Your booking request for <strong>{formData.equipment}</strong> has been logged. An email confirmation has been sent to your student ID.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-5 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Equipment Booking Application</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 23BCE1234"
                      value={formData.regNumber}
                      onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      VIT Student Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@vitstudent.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Target Equipment
                    </label>
                    <select
                      value={formData.equipment}
                      onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    >
                      <option>Markforged Onyx Pro Carbon 3D</option>
                      <option>Formlabs Form 3+ SLA Printer</option>
                      <option>Roland 4-Axis CNC Milling Station</option>
                      <option>Epilog Fusion Pro 36 Laser Cutter (100W)</option>
                      <option>Voltera V-One PCB Printer</option>
                      <option>Keysight MSO Electronics Bench</option>
                      <option>NVIDIA Jetson Edge AI Station</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Desired Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    >
                      <option>Morning (09:00 - 13:00)</option>
                      <option>Afternoon (14:00 - 18:00)</option>
                      <option>Evening Extended (18:00 - 21:00)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Project Summary / Material Requirements
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly describe your project prototype, raw materials, and CAD files..."
                    value={formData.projectSummary}
                    onChange={(e) => setFormData({ ...formData, projectSummary: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 px-6 rounded-lg font-semibold text-sm text-white bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Lab Slot Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
