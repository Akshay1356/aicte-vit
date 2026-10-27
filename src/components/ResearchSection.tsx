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
  ChevronDown,
} from "lucide-react";

export default function ResearchSection() {
  const [activeGroup, setActiveGroup] = useState<string>("research-development");

  const pillars = [
    {
      id: "research-development",
      title: "Research & Development",
      icon: Lightbulb,
      description:
        "Driving innovation through cutting-edge research and development initiatives, fostering interdisciplinary collaboration and pushing the boundaries of knowledge.",
      items: [
        {
          name: "Training",
          icon: GraduationCap,
          longDescription:
            "Comprehensive training programs designed to enhance skills and knowledge across various domains, incorporating the latest industry trends and interdisciplinary approaches.",
        },
        {
          name: "Development",
          icon: Code,
          longDescription:
            "Cutting-edge development services to build robust and scalable solutions, leveraging advanced technologies and agile methodologies for optimal performance.",
        },
        {
          name: "IPR",
          icon: ShieldCheck,
          longDescription:
            "Comprehensive Intellectual Property Rights assistance for protecting innovations and creations, including patent filing, copyright registration, and trademark guidance.",
        },
      ],
    },
    {
      id: "collaborative-learning",
      title: "Collaborative Learning",
      icon: Users,
      description:
        "Fostering a vibrant community of shared knowledge, continuous growth, and synergistic learning experiences among diverse groups.",
      items: [
        {
          name: "Mentoring",
          icon: Users,
          longDescription:
            "Expert guidance and personalized support to help individuals achieve their professional goals, fostering growth through one-on-one sessions and tailored advice.",
        },
        {
          name: "Internship",
          icon: Briefcase,
          longDescription:
            "Hands-on experience and immersive learning opportunities for aspiring professionals, bridging the gap between academic knowledge and real-world application.",
        },
        {
          name: "Networking",
          icon: Share2,
          longDescription:
            "Connecting individuals with industry leaders, peers, and potential collaborators, fostering a dynamic ecosystem for professional growth and interdisciplinary collaboration.",
        },
      ],
    },
    {
      id: "innovation-hub",
      title: "Innovation Hub",
      icon: Rocket,
      description:
        "Nurturing groundbreaking ideas from concept to commercialization, providing a dynamic ecosystem for creativity, experimentation, and venture success.",
      items: [
        {
          name: "Incubation",
          icon: Rocket,
          longDescription:
            "Comprehensive support and resources for startups to develop and launch their innovative ideas, including mentorship, funding opportunities, and access to state-of-the-art facilities.",
        },
        {
          name: "Commercialization",
          icon: TrendingUp,
          longDescription:
            "Strategic guidance and assistance to bring innovative products and services to market, ensuring successful adoption and sustainable growth through effective market penetration strategies.",
        },
      ],
    },
  ];

  return (
    <section id="research" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002147] tracking-tight leading-tight">
            IDEA{" "}
            <span className="text-[#003B71] underline decoration-amber-400 decoration-4 underline-offset-4">
              LABS
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            (Ideation, Development, Evaluation, Application)
          </p>

          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            A comprehensive matrix designed to guide ideas from inception through fabrication, IP protection, and final market commercialization.
          </p>
        </div>

        {/* Central Graphic Visual from Source */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-2xl aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
            <Image
              src="/source_assets/ideaa-CWojqCRk.jpg"
              alt="IDEA Labs Architecture and Flowchart"
              fill
              sizes="(max-width: 1024px) 100vw, 750px"
              className="object-contain p-2"
            />
          </div>
        </div>

        {/* 3 Pillars Interactive Accordion / Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {pillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            const isOpen = activeGroup === pillar.id;

            return (
              <div
                key={pillar.id}
                className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => setActiveGroup(isOpen ? "" : pillar.id)}
                  className={`w-full p-6 sm:p-7 flex items-center justify-between text-left transition-colors ${
                    isOpen ? "bg-[#002147] text-white" : "bg-white hover:bg-slate-50 text-slate-900"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isOpen ? "bg-white/10 text-amber-300" : "bg-blue-50 text-[#003B71]"
                      }`}
                    >
                      <PillarIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className={`text-xl sm:text-2xl font-bold tracking-tight ${
                          isOpen ? "text-white" : "text-[#002147]"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm mt-1 max-w-2xl ${
                          isOpen ? "text-slate-200" : "text-slate-600"
                        }`}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? "rotate-180 bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Expanded Sub-items Grid */}
                {isOpen && (
                  <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pillar.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={item.name}
                          className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
                        >
                          <div>
                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#003B71] flex items-center justify-center mb-3">
                              <ItemIcon className="w-5 h-5" />
                            </div>
                            <h4 className="text-base font-bold text-[#002147] mb-2">
                              {item.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {item.longDescription}
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-[#003B71]">
                            <span>Active in Lab Ecosystem</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
