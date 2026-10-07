"use client";

import React, { useState } from "react";
import { CheckCircle2, Clock } from "lucide-react";

export default function EquipmentShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "3D Printing", "CNC & Machining", "Laser & Optics", "Electronics & IoT"];

  const equipmentList = [
    {
      name: "Markforged Onyx Pro Carbon 3D",
      category: "3D Printing",
      specs: "Build Volume: 320 × 132 × 154 mm | Carbon Fiber & Kevlar Continuous Reinforcement",
      status: "Available",
      badge: "High Precision",
    },
    {
      name: "Formlabs Form 3+ SLA Printer",
      category: "3D Printing",
      specs: "25µm XY Resolution | 85µm Laser Spot Size | Dental & Engineering Resins",
      status: "Available",
      badge: "SLA Resin",
    },
    {
      name: "Roland MDX-540 4-Axis CNC Milling",
      category: "CNC & Machining",
      specs: "Spindle: 12,000 RPM | Rotary 4th Axis | Non-ferrous metals & engineering plastics",
      status: "Available",
      badge: "Subtractive",
    },
    {
      name: "Epilog Fusion Pro 36 Laser System (100W)",
      category: "Laser & Optics",
      specs: "Bed Size: 914 × 610 mm | 165 IPS engraving speed | Dual IRIS camera positioning",
      status: "In Use (Slot open at 4 PM)",
      badge: "CO2 Laser",
    },
    {
      name: "Voltera V-One PCB Printer & Dispenser",
      category: "Electronics & IoT",
      specs: "Direct Conductive Ink Dispensing | Solder Paste SMT Assembly | 2-Layer Prototyping",
      status: "Available",
      badge: "PCB Prototyping",
    },
    {
      name: "Keysight InfiniiVision 4-Channel MSO",
      category: "Electronics & IoT",
      specs: "200 MHz Bandwidth | 5 GSa/s Sample Rate | 16 Digital Logic Channels",
      status: "Available",
      badge: "Electronics Bench",
    },
  ];

  const filtered =
    activeCategory === "All"
      ? equipmentList
      : equipmentList.filter((item) => item.category === activeCategory);

  return (
    <section id="equipment" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-700 mb-2">
              Machinery Directory
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              State-of-the-Art Equipment
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Reserved for students, capstone teams, startups, and academic researchers with trained lab technicians on standby.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-blue-700 text-white font-semibold shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Equipment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                    {item.badge}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                      item.status.includes("Available")
                        ? "text-emerald-700"
                        : "text-amber-700"
                    }`}
                  >
                    {item.status.includes("Available") ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <Clock className="w-3.5 h-3.5" />
                    )}
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {item.specs}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">{item.category}</span>
                <a
                  href="#booking"
                  className="text-xs font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1"
                >
                  <span>Request Slot</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
