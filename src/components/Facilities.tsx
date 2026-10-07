"use client";

import React from "react";
import { Printer, Cpu, Compass, Layers, Zap, Radio, Check } from "lucide-react";

export default function Facilities() {
  const domains = [
    {
      icon: Printer,
      title: "Additive Manufacturing & 3D Prototyping",
      description:
        "High-precision industrial SLA, SLS, and dual-extrusion FDM printers capable of engineering composite filaments and functional resin polymers.",
      highlights: ["Multi-material FDM Printing", "Industrial SLA Resin Systems", "Carbon Fiber Reinforced Printing", "0.05mm Layer Resolution"],
    },
    {
      icon: Compass,
      title: "CNC Machining & Subtractive Fabrication",
      description:
        "Heavy-duty 3-axis CNC vertical milling stations and precision routers for machining aluminum, copper, machinable plastics, and custom enclosures.",
      highlights: ["3-Axis Precision CNC Mill", "Collet Tooling & Fixtures", "Aluminum 6061 Prototyping", "Custom Enclosure Machining"],
    },
    {
      icon: Zap,
      title: "Laser Cutting & Fiber Engraving",
      description:
        "100W CO2 Laser Cutters and High-Speed Fiber Laser systems for rapid 2D profile cutting, acrylic fabrication, and metal marking.",
      highlights: ["100W CO2 Laser Cutter", "Fiber Laser Metal Marker", "Pass-Through Bed Design", "Optical Auto-Focus"],
    },
    {
      icon: Cpu,
      title: "PCB Prototyping & SMD Assembly",
      description:
        "In-house double-sided PCB routing, chemical-free PCB engraving, SMD reflow oven, and hot-air digital rework stations.",
      highlights: ["Direct Circuit Routing", "SMD Pick & Place Assist", "Digital Reflow Soldering", "Stereo Inspection Microscope"],
    },
    {
      icon: Radio,
      title: "Embedded Systems, IoT & Edge AI",
      description:
        "Dedicated testbenches equipped with Mixed Signal Oscilloscopes, RF spectrum analyzers, FPGA evaluation boards, and NVIDIA Jetson kits.",
      highlights: ["NVIDIA Jetson Edge AI Kits", "100MHz 4-CH MSO Benches", "Wireless RF Analyzers", "Programmable DC Power Supplies"],
    },
    {
      icon: Layers,
      title: "Robotics & Spatial Computing",
      description:
        "6-DOF robotic manipulator arms, mobile AGV development platforms, LiDAR units, and spatial XR headsets for robotics and computer vision.",
      highlights: ["6-DOF Collaborative Arms", "2D/3D LiDAR Scanners", "ROS2 / Gazebo Simulation", "Depth Vision Cameras"],
    },
  ];

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-700 mb-2">
            Infrastructure & Laboratories
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Six Specialized Innovation Wings
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Engineered to AICTE national benchmark standards, providing students with industrial-grade prototyping tools under one roof.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Capability List */}
                <div className="border-t border-slate-100 pt-4 space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
