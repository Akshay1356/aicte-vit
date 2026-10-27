"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Lightbulb,
  GraduationCap,
  Code,
  ShieldCheck,
  Users,
  Briefcase,
  Share2,
  Rocket,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function ResearchSection() {
  const [activeTab, setActiveTab] = useState<string>("research-development");

  const pillars = [
    {
      id: "research-development",
      title: "Research & Development",
      shortTitle: "R&D",
      icon: Lightbulb,
      tagline: "Advancing Fundamental & Applied Technological Frontiers",
      description:
        "Driving multidisciplinary innovation through cutting-edge research, hardware engineering, and intellectual property development, empowering researchers to push the boundaries of technology.",
      items: [
        {
          name: "Training",
          icon: GraduationCap,
          longDescription:
            "Comprehensive, structured technical training programs across mechanical design, embedded systems, and additive manufacturing incorporating the latest industry standards.",
        },
        {
          name: "Development",
          icon: Code,
          longDescription:
            "Full-lifecycle hardware and software development services to engineer robust, scalable solutions using advanced tools, agile workflows, and validated testing protocols.",
        },
        {
          name: "Intellectual Property (IPR)",
          icon: ShieldCheck,
          longDescription:
            "Comprehensive Intellectual Property Rights assistance to protect innovations, including patent search, prior-art analysis, patent drafting, and copyright guidance.",
        },
      ],
    },
    {
      id: "collaborative-learning",
      title: "Collaborative Learning",
      shortTitle: "Collaboration",
      icon: Users,
      tagline: "Connecting Students, Scholars & Industry Leaders",
      description:
        "Fostering a vibrant community of shared knowledge, experiential learning, and cross-disciplinary synergy to bridge academic excellence with real-world engineering challenges.",
      items: [
        {
          name: "Mentoring",
          icon: Users,
          longDescription:
            "One-on-one technical guidance and personalized research roadmaps provided by senior faculty Tech-Gurus across SMEC, SCOPE, and SELECT schools.",
        },
        {
          name: "Internship",
          icon: Briefcase,
          longDescription:
            "Hands-on project immersion and practical prototyping opportunities for aspiring engineers, connecting coursework theories to real-world industrial systems.",
        },
        {
          name: "Networking",
          icon: Share2,
          longDescription:
            "Curated linkages with industry leaders, alumni innovators, and institutional research consortia to cultivate cross-pollination and career growth.",
        },
      ],
    },
    {
      id: "innovation-hub",
      title: "Innovation Hub",
      shortTitle: "Incubation",
      icon: Rocket,
      tagline: "Transforming Lab Prototypes into Commercial Ventures",
      description:
        "Nurturing groundbreaking engineering concepts through structured pre-incubation, seed-stage validation, and strategic industry translation for sustainable societal impact.",
      items: [
        {
          name: "Incubation",
          icon: Rocket,
          longDescription:
            "End-to-end incubation support including dedicated workspace, advanced tool access, design validation, seed mentoring, and investor pitch preparation.",
        },
        {
          name: "Commercialization",
          icon: TrendingUp,
          longDescription:
            "Strategic advisory and go-to-market roadmaps to transition lab-validated prototypes into deployable, market-ready products with sustainable growth models.",
        },
      ],
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const CurrentIcon = currentPillar.icon;

  return (
    <section id="research" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002147] tracking-tight leading-tight">
            IDEA{" "}
            <span className="text-[#003B71] underline decoration-amber-400 decoration-4 underline-offset-4">
              LABS
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-semibold tracking-wide">
            Ideation • Development • Evaluation • Application
          </p>

          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A comprehensive innovation matrix designed to take concepts from initial napkin sketch through precision fabrication, IP protection, and final market translation.
          </p>
        </div>

        {/* Central Architecture Flow Diagram */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-3xl aspect-[16/9] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-50">
            <Image
              src="/source_assets/ideaa-CWojqCRk.jpg"
              alt="IDEA Labs Architecture Framework"
              fill
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-contain p-3"
            />
          </div>
        </div>

        {/* Segmented Pillar Navigator */}
        <div className="max-w-5xl mx-auto">
          
          {/* Top Tabs */}
          <div className="p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-1.5 mb-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activeTab === pillar.id;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveTab(pillar.id)}
                  className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#002147] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-slate-500"}`} />
                  <span className="truncate">{pillar.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Executive Briefing Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden transition-all">
            
            {/* Header: Title & Overview */}
            <div className="border-l-4 border-[#003B71] pl-5 sm:pl-6 space-y-2 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  {currentPillar.tagline}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002147] tracking-tight">
                {currentPillar.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl pt-1">
                {currentPillar.description}
              </p>
            </div>

            {/* Sub-Items Grid */}
            <div
              className={`grid grid-cols-1 ${
                currentPillar.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
              } gap-6 pt-2`}
            >
              {currentPillar.items.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="p-6 rounded-xl bg-slate-50/70 border border-slate-200/90 flex flex-col justify-between hover:bg-white hover:border-[#003B71]/40 hover:shadow-sm transition-all group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#003B71] flex items-center justify-center mb-4 group-hover:bg-[#003B71] group-hover:text-white transition-colors">
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-[#002147] mb-2">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.longDescription}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#003B71]">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Lab Program Track</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
