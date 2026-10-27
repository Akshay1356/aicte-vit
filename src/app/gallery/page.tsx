"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Camera, ArrowLeft, Layers, CheckCircle2, X } from "lucide-react";

export default function GalleryPage() {
  const [activePhoto, setActivePhoto] = useState<{ title: string; subtitle: string; image: string } | null>(null);

  const galleryItems = [
    {
      title: "Prototyping Wing",
      subtitle: "3D printing, laser cutting, and precision mechanical assembly",
      image: "/source_assets/Prototyping-wing-BkU62cu1.jpg",
      tag: "Prototyping",
    },
    {
      title: "Manufacturing Wing",
      subtitle: "Industrial robotic arms, drones, motion capture, and automation",
      image: "/source_assets/manufacturing-wing-DbxI0JB6.jpg",
      tag: "Manufacturing & Robotics",
    },
    {
      title: "Electronics and System Design Wing",
      subtitle: "Oscilloscopes, spectrum analyzers, and circuit testing benches",
      image: "/source_assets/Electronics-wing--jbZBJaS.png",
      tag: "Electronics",
    },
    {
      title: "PCB Design and Fabrication Wing",
      subtitle: "Etching, drilling machines, and SMD soldering stations",
      image: "/source_assets/3dprintingwing-BBHOnx64.jpg",
      tag: "PCB Fabrication",
    },
    {
      title: "Central Innovation Facility",
      subtitle: "State-of-the-art multidisciplinary collaborative workspace",
      image: "/source_assets/hero-innovation-Do5wzUXY.png",
      tag: "Innovation Hub",
    },
    {
      title: "VIT Chennai Campus",
      subtitle: "Academic Block 2 - Home of the central AICTE IDEA Lab",
      image: "/vit_chennai_campus.jpg",
      tag: "Campus Infrastructure",
    },
  ];

  const comingSoonTracks = [
    "Project Showcases & Hardware Demos",
    "Lab Virtual 360° Tours",
    "Event & Hackathon Photography",
    "Patent & Innovation Highlights",
    "Student Projects Gallery & Video Logs",
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-[#003B71] flex items-center justify-center mx-auto shadow-xs">
              <Camera className="w-8 h-8" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#002147] tracking-tight">
              IDEA Lab{" "}
              <span className="text-[#003B71] underline decoration-amber-400 decoration-4 underline-offset-4">
                Gallery
              </span>
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              Explore our collection of innovation facilities, lab wings, advanced equipment, and campus prototyping infrastructure.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                onClick={() => setActivePhoto(item)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#003B71]/40 transition-all flex flex-col"
              >
                <div className="relative h-60 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-white/20 backdrop-blur-md text-white border border-white/20">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-base font-bold text-[#002147] group-hover:text-[#003B71] transition-colors mb-1">
                      {item.title}
                    </h2>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Tracks Panel */}
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center mb-12">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#003B71] flex items-center justify-center mx-auto mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#002147] mb-2">
              Expanding Media Collection
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-lg mx-auto">
              Our digital media repository is continuously updated with project demonstrations, research documentation, and hackathon highlights.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left text-xs font-semibold text-slate-700 max-w-lg mx-auto">
              {comingSoonTracks.map((trk) => (
                <li key={trk} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{trk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Home Button */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Photo Modal */}
          {activePhoto && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
              onClick={() => setActivePhoto(null)}
            >
              <div
                className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-96 w-full bg-slate-900">
                  <Image
                    src={activePhoto.image}
                    alt={activePhoto.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#002147] mb-1">
                    {activePhoto.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {activePhoto.subtitle}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
