"use client";

import React from "react";
import { Printer, Compass, Zap, Cpu, Radio, Layers, Check, ArrowRight } from "lucide-react";

export default function Facilities() {
  const domains = [
    {
      id: "3d-printing",
      icon: Printer,
      title: "Additive Manufacturing & 3D Prototyping",
      category: "3D Printing",
      description:
        "High-precision industrial SLA resin and continuous composite FDM printers for functional mechanical enclosures, tooling fixtures, and aerospace-grade prototypes.",
      materials: "Onyx (Carbon fiber filled nylon), PLA, ABS, TPU, Dental & Engineering Resins",
      leadMachine: "Markforged Onyx Pro & Formlabs Form 3+",
      highlights: [
        "Continuous carbon fiber filament reinforcement",
        "25 µm optical SLA layer resolution",
        "Dual-extrusion water-soluble PVA support",
        "Full-enclosure temperature-controlled bed"
      ],
    },
    {
      id: "cnc",
      icon: Compass,
      title: "CNC Machining & Subtractive Fabrication",
      category: "CNC & Machining",
      description:
        "Heavy-duty 4-axis and 3-axis CNC vertical milling stations and precision engraving routers for non-ferrous metals, engineering plastics, and tooling dies.",
      materials: "Aluminum 6061, Brass, Delrin, Machinable Wax, Acrylic",
      leadMachine: "Roland MDX-540 4-Axis CNC Milling",
      highlights: [
        "12,000 RPM high-speed rotary spindle",
        "Rotary 4th axis indexing attachment",
        "Integrated flood coolant and chip collector",
        "Precision collet tooling library"
      ],
    },
    {
      id: "laser",
      icon: Zap,
      title: "Laser Cutting & Optical Engraving",
      category: "Laser & Optics",
      description:
        "Industrial 100W CO2 Laser Cutters and High-Speed Fiber Laser systems for rapid 2D planar profile cutting, acrylic enclosures, and permanent metal serial marking.",
      materials: "Acrylic sheets, MDF, Plywood, Delrin, Anodized Aluminum, Stainless Steel",
      leadMachine: "Epilog Fusion Pro 36 (100W CO2 Laser)",
      highlights: [
        "914 × 610 mm large-format pass-through bed",
        "Dual IRIS camera overhead workpiece positioning",
        "165 IPS vector engraving and contour cutting",
        "Dedicated fume extractor and active air assist"
      ],
    },
    {
      id: "pcb",
      icon: Cpu,
      title: "PCB Prototyping & SMT Assembly",
      category: "Electronics & IoT",
      description:
        "In-house chemical-free double-sided PCB routing, conductive trace printing, automated solder paste dispensing, and digital SMD reflow stations.",
      materials: "FR4 double-sided copper-clad, flexible polyimide, solder paste, SMD passives",
      leadMachine: "Voltera V-One PCB Printer & Dispenser",
      highlights: [
        "Chemical-free mechanical track isolation",
        "Direct conductive ink trace dispensing",
        "Digital SMD solder paste stencil dispensing",
        "Stereoscopic microscope inspection bench"
      ],
    },
    {
      id: "iot",
      icon: Radio,
      title: "Embedded Systems, IoT & Edge AI",
      category: "Electronics & IoT",
      description:
        "Dedicated RF and digital testbenches with Mixed Signal Oscilloscopes, spectrum analyzers, programmable DC loads, and high-performance NVIDIA Jetson edge kits.",
      materials: "NVIDIA Jetson Orin Nano, STM32, ESP32-S3, Raspberry Pi 5, LoRa transceivers",
      leadMachine: "Keysight InfiniiVision 4-CH MSO Bench",
      highlights: [
        "200 MHz 5 GSa/s 4-channel mixed signal scope",
        "16-channel digital logic analyzer probe",
        "LoRaWAN & BLE 5.2 protocol validation benches",
        "Edge tensor computing stations for onboard inference"
      ],
    },
    {
      id: "robotics",
      icon: Layers,
      title: "Robotics & Autonomous Systems",
      category: "Robotics",
      description:
        "Collaborative robotic manipulator arms, mobile Autonomous Guided Vehicle (AGV) platforms, 2D/3D LiDAR sensors, and ROS2 simulation workstations.",
      materials: "6-DOF robotic arms, LiDAR scanners, depth stereocameras, brushless ESCs",
      leadMachine: "6-DOF Collaborative Robotic Manipulator",
      highlights: [
        "Payload capacity up to 3kg with 0.05mm repeatability",
        "360° 2D LiDAR and Intel RealSense D435i depth cameras",
        "ROS2 Humble and Gazebo simulation integration",
        "Autonomous obstacle avoidance navigation test track"
      ],
    },
  ];

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-[#f3f6fa] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 text-[#003b71] text-xs font-bold uppercase tracking-wider mb-2.5">
            Core Facilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#002147] tracking-tight">
            Six Specialized Innovation Wings
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Purpose-built engineering infrastructure adhering to national AICTE standards and VIT Chennai academic research requirements.
          </p>
        </div>

        {/* Visual Grid: 3x2 on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {domains.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#003b71]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Wing Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#003b71] border border-blue-100 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                      Wing
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#002147] mb-2.5 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Key Specifications Strip */}
                  <div className="space-y-2 mb-5 p-3 rounded-lg bg-[#f8fafc] border border-slate-200 text-xs text-slate-700">
                    <div>
                      <strong className="text-slate-900 font-semibold">Lead Machinery:</strong>{" "}
                      <span className="text-slate-700">{item.leadMachine}</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 font-semibold">Materials:</strong>{" "}
                      <span className="text-slate-600">{item.materials}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-6">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#003b71] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="#equipment"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003b71] hover:text-[#002147] hover:underline"
                  >
                    <span>View Equipment in this Wing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
