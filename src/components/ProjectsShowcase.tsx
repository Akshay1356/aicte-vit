"use client";

import React, { useState } from "react";
import { Trophy, Users, Cpu, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Biomedical", "Robotics & AI", "IoT & Smart Campus"];

  const projects = [
    {
      id: "biogrip",
      title: "BioGrip: Modular 3D-Printed Myoelectric Prosthesis",
      category: "Biomedical",
      department: "School of Mechanical Engineering (SMEC) & Biomedical Research Group",
      description:
        "An affordable, lightweight EMG-controlled bionic arm designed for upper-limb amputees. Fabricated with continuous carbon-fiber reinforced onyx filament and custom PCB signal-conditioning circuitry with sub-50ms latency.",
      technologies: ["Markforged Onyx 3D", "Surface EMG Filters", "ESP32-S3", "Custom PCB Routing", "PID Closed-Loop Servo"],
      outcomes: [
        "Patent Published (Indian Patent Office App. 202441012891)",
        "AICTE IDEA Lab Student Grant Recipient",
        "1st Place, National Biomedical Design Conclave 2025"
      ],
      wingsUsed: ["Additive Manufacturing", "PCB Prototyping"]
    },
    {
      id: "agrosense",
      title: "AgroSense: Autonomous Solar Weed Eradication Rover",
      category: "Robotics & AI",
      department: "School of Mechanical Engineering & School of Computer Science (SCOPE)",
      description:
        "All-terrain autonomous field rover using dual Intel RealSense depth cameras and tensor neural networks on NVIDIA Jetson to detect agricultural weeds and execute micro-targeted mechanical eradication without chemicals.",
      technologies: ["NVIDIA Jetson Orin Nano", "ROS2 Humble", "CNC Aluminum 6061 Chassis", "Dual Depth Cameras", "Laser-Cut Acrylic Enclosures"],
      outcomes: [
        "Field-tested at VIT Agricultural Testbeds (Vandalur)",
        "Smart India Hackathon Finalist Hardware Edition",
        "Research Paper in IEEE Access on Edge Robotics"
      ],
      wingsUsed: ["CNC Machining", "Laser Cutting", "Embedded Edge AI"]
    },
    {
      id: "hypernode",
      title: "HyperNode: LoRaWAN Urban Environmental Telemetry Mesh",
      category: "IoT & Smart Campus",
      department: "School of Electronics Engineering (SENSE) & IoT Innovation Cluster",
      description:
        "Solar-harvesting ultra-low-power environmental sensor nodes measuring ambient PM2.5, NO2, ozone, and meteorological parameters. Deployed campus-wide transmitting real-time microclimate metrics up to 8 km line-of-sight.",
      technologies: ["Voltera Printed Circuit", "LoRa RFM95W Transceiver", "STM32 Ultra-Low Power", "Solar MPPT Charger", "Sensirion Environmental Sensors"],
      outcomes: [
        "12 Operational Nodes Deployed across 190-acre VIT Chennai Campus",
        "Integrated into VIT Smart Campus Analytics Dashboard",
        "IEEE Sensors Letters Peer-Reviewed Publication"
      ],
      wingsUsed: ["PCB Prototyping", "Embedded Systems & Testbenches"]
    },
    {
      id: "subaqua-auv",
      title: "SubAqua: Pressure-Rated Autonomous Underwater Vehicle",
      category: "Robotics & AI",
      department: "Multidisciplinary Student Robotics Research Team",
      description:
        "Lightweight deep-submersible autonomous vehicle hull engineered with SLA resin pressure caps, CNC-milled acrylic ballast bulkheads, and custom brushless thruster cowlings tested to 20 meters hydrostatic depth.",
      technologies: ["Formlabs SLA Tough 2000", "4-Axis CNC Milling", "Keysight MSO Signal Verification", "IMU Inertial Navigation", "Acoustic Pinger"],
      outcomes: [
        "SAUVC (Singapore AUV Challenge) Entry Qualification",
        "Hydrostatic pressure certified up to 2.5 bar",
        "Featured in VIT University Technology Expo"
      ],
      wingsUsed: ["Additive Manufacturing", "CNC Machining", "Electronics Bench"]
    }
  ];

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#f3f6fa] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 text-[#003b71] text-xs font-bold uppercase tracking-wider mb-2.5">
              Verified Student & Faculty Research
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#002147] tracking-tight">
              Flagship Lab Innovations & Prototypes
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Physical engineering solutions and patent-backed hardware conceived, engineered, and validated within the VITC IDEA Lab wings.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-[#003b71] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#003b71]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Category and Wings */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 text-[#003b71] border border-blue-200">
                    {proj.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                    <span>Wings:</span>
                    <span className="text-slate-800 font-semibold">{proj.wingsUsed.join(" • ")}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#002147] mb-2 leading-snug">
                  {proj.title}
                </h3>

                {/* Affiliated School / Group */}
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium mb-4">
                  <Users className="w-3.5 h-3.5 text-[#003b71] shrink-0" />
                  <span>{proj.department}</span>
                </div>

                {/* Detailed Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Technologies Used Pills */}
                <div className="mb-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Technologies & Tools:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-[#f8fafc] border border-slate-200 text-slate-700 text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Verified Outcomes */}
                <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-2">
                    <Trophy className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Verified Project Outcomes:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-emerald-950 font-medium">
                    {proj.outcomes.map((out, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Prototyped in VITC IDEA Lab</span>
                <a
                  href="#booking"
                  className="font-bold text-[#003b71] hover:underline inline-flex items-center gap-1"
                >
                  <span>Build your project here</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
