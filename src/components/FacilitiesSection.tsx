"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, X, ArrowUpRight } from "lucide-react";

interface Facility {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
}

export default function FacilitiesSection() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const facilities: Facility[] = [
    {
      id: 1,
      title: "Prototyping Wing",
      description: "State-of-the-art prototyping facilities with advanced machinery for rapid product development.",
      fullDescription: "Our Prototyping Lab is equipped with the latest tools and machinery to help you bring your ideas to life. From concept sketches to working prototypes, our lab provides everything you need including 3D printers, laser cutters, CNC machines, and a comprehensive toolkit for mechanical and electronic prototyping.",
      image: "/source_assets/Prototyping-wing-BkU62cu1.jpg",
      features: ["3D Printers", "Laser Cutters", "CNC Machines", "Hand Tools"],
    },
    {
      id: 2,
      title: "Manufacturing Wing",
      description: "Advanced robotics workspace with industrial-grade equipment for automation projects.",
      fullDescription: "The Robotics & Automation Lab features industrial robotic arms, drones, autonomous vehicles, and advanced control systems. Students can work on cutting-edge projects in areas like swarm robotics, human-robot interaction, and automated manufacturing systems.",
      image: "/source_assets/manufacturing-wing-DbxI0JB6.jpg",
      features: ["Robotic Arms", "Drones", "Motion Capture", "PLC Systems"],
    },
    {
      id: 3,
      title: "Electronics and System Design Wing",
      description: "Complete electronics development environment with professional testing equipment.",
      fullDescription: "Our Electronics Lab provides a complete environment for circuit design, PCB fabrication, and electronic testing. Equipped with oscilloscopes, function generators, spectrum analyzers, and a dedicated PCB manufacturing unit, students can develop professional-grade electronic projects.",
      image: "/source_assets/Electronics-wing--jbZBJaS.png",
      features: ["Oscilloscopes", "PCB Fabrication", "SMD Soldering", "Testing Equipment"],
    },
    {
      id: 4,
      title: "PCB design and fabrication Wing",
      description: "Dedicated facility for designing and fabricating Printed Circuit Boards.",
      fullDescription: "Our PCB Design and Fabrication Wing provides a comprehensive environment for creating custom Printed Circuit Boards. Equipped with advanced design software, prototyping tools, and fabrication machinery, students can bring their electronic circuit ideas to reality, from schematic capture to final board production.",
      image: "/source_assets/3dprintingwing-BBHOnx64.jpg",
      features: ["PCB Design Software", "Prototyping Equipment", "Etching Machines", "Drilling Machines", "Soldering Stations"],
    },
  ];

  return (
    <section id="facilities" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002147] tracking-tight leading-tight">
            World-Class{" "}
            <span className="text-[#003B71] underline decoration-amber-400 decoration-4 underline-offset-4">
              Labs
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Access cutting-edge equipment and workspaces designed to bring your innovations to life.
          </p>
        </div>

        {/* 4 Wings Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              onClick={() => setSelectedFacility(fac)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#003B71]/40 transition-all flex flex-col"
            >
              {/* Facility Image with Hover Zoom */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/20 backdrop-blur-md">
                    Lab Wing 0{fac.id}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#003B71] transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Facility Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#002147] group-hover:text-[#003B71] transition-colors mb-2">
                    {fac.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {fac.description}
                  </p>
                </div>

                {/* Features Pills */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {fac.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700"
                    >
                      <Check className="w-3 h-3 text-emerald-600" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Facility Details */}
        {selectedFacility && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedFacility(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image in Modal */}
              <div className="relative h-60 w-full rounded-xl overflow-hidden mb-6 bg-slate-900">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold text-[#003B71] uppercase tracking-wider">
                  Wing Details
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002147]">
                  {selectedFacility.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedFacility.fullDescription}
                </p>

                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Equipment &amp; Facilities Available
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {selectedFacility.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700"
                      >
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedFacility(null)}
                    className="px-5 py-2.5 rounded-lg bg-[#003B71] text-white font-semibold text-sm hover:bg-[#002147] transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
