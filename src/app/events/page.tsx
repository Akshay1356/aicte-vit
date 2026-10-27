"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Sparkles, ArrowLeft, Tag } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      title: "Skilling program for students/Internships",
      date: "Coming Soon",
      location: "VIT Chennai Campus",
      type: "Program",
      description: "Hands-on immersion and skill enhancement in advanced fabrication, 3D additive printing, and embedded systems.",
    },
    {
      title: "School teacher awareness program",
      date: "Coming Soon",
      location: "VIT Chennai Campus",
      type: "Program",
      description: "Empowering educators with modern STEM tools, design thinking frameworks, and lab prototyping exposure.",
    },
    {
      title: "Open day for school students",
      date: "Coming Soon",
      location: "VIT Chennai Campus",
      type: "Event",
      description: "Interactive lab tours, live hardware demonstrations, and direct interactions with university innovators.",
    },
    {
      title: "Ideation workshop for students",
      date: "Coming Soon",
      location: "VIT Chennai Campus",
      type: "Workshop",
      description: "Guided conceptualization sessions turning raw ideas into tangible prototypes with faculty mentorship.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-[#003B71] flex items-center justify-center mx-auto shadow-xs">
              <Calendar className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#003B71] text-xs font-bold tracking-wide">
              <span>Programs &amp; Workshops</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#002147] tracking-tight">
              IDEA Lab{" "}
              <span className="text-[#003B71] underline decoration-amber-400 decoration-4 underline-offset-4">
                Events
              </span>
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              Stay tuned for upcoming hackathons, workshops, skilling programs, and innovation events at VIT Chennai.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {events.map((ev) => (
              <div
                key={ev.title}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#003B71]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#003B71] border border-blue-100">
                      <Tag className="w-3 h-3" />
                      {ev.type}
                    </span>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/60">
                      {ev.date}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#002147] mb-2 leading-snug">
                    {ev.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {ev.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                    <span className="font-medium text-slate-700">{ev.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Registration Soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submission and Navigation CTA */}
          <div className="p-8 rounded-2xl bg-[#002147] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg mb-10">
            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-lg font-bold">Have an idea to pitch?</h3>
              <p className="text-xs text-slate-300">
                You do not have to wait for an event. Submit your project concept directly to IDEA Lab.
              </p>
            </div>
            <a
              href="https://forms.gle/AGdph5794pXzrbbz8"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-[#002147] font-bold text-xs sm:text-sm shrink-0 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit Your Ideas</span>
            </a>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
