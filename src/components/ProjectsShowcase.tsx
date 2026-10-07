"use client";

import React from "react";
import { ArrowUpRight, Trophy, Users } from "lucide-react";

export default function ProjectsShowcase() {
  const projects = [
    {
      title: "BioGrip: Modular 3D-Printed Myoelectric Prosthesis",
      category: "Biomedical & 3D Additive",
      description:
        "An affordable, lightweight EMG-controlled bionic arm with tactile sensory feedback and sub-50ms response latency engineered for amputees.",
      funding: "Funded by AICTE Grant",
      team: "Dept. of Mechanical & Biomedical Engg",
      tag: "National Winner",
    },
    {
      title: "AgroSense: Autonomous Weed Exterminating Robot",
      category: "Robotics & Edge AI",
      description:
        "Solar-powered field rover utilizing stereo vision and TensorRT deep neural networks for precision micro-herbicide spraying with 94% weed detection accuracy.",
      funding: "VIT Innovators Incubation",
      team: "Dept. of Mechatronics & AI/ML",
      tag: "Patent Filed",
    },
    {
      title: "HyperNode: LoRaWAN Urban Air Quality Telemetry",
      category: "IoT & Embedded Networks",
      description:
        "Solar-harvesting low-power sensor nodes measuring PM2.5, NO2, and VOC concentrations across the 190-acre VIT Chennai smart campus.",
      funding: "Campus Smart City Initiative",
      team: "Dept. of ECE & IoT Research Group",
      tag: "Deployed Live",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-700 mb-2">
              Research & Prototypes
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Flagship Lab Innovations
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Discover real products, patents, and multi-disciplinary breakthroughs conceived and prototyped at VITC IDEA Lab.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white border border-slate-200 px-4 py-2.5 rounded-lg shadow-sm">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>42+ National Conclave Awards in 2025–26</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-7 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-colors shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                    {proj.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{proj.category}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-700 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {proj.description}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>{proj.team}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span className="text-blue-700 font-semibold">{proj.funding}</span>
                  <span className="text-slate-400 group-hover:text-blue-700 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
