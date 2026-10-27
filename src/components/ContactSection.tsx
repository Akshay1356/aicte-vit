"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink, Sparkles } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#003B71] text-xs font-bold tracking-wide">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002147] tracking-tight leading-tight">
            Contact{" "}
            <span className="text-[#003B71] underline decoration-amber-400 decoration-4 underline-offset-4">
              IDEA Lab
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out to our leadership and coordinators or visit the innovation facility on campus.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Campus Address */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#003B71] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#002147]">
                Campus Location
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Academic Block 2, Ground Floor</strong>
                <br />
                VIT Chennai Campus
                <br />
                Vandalur-Kelambakkam Road, Chennai – 600127, Tamil Nadu, India.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Mon–Sat: 8:30 AM – 8:00 PM</span>
            </div>
          </div>

          {/* Card 2: Phone Support */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#002147]">
                Direct Contacts
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Coordinator Desk
                  </span>
                  <a
                    href="tel:+914439931387"
                    className="font-semibold text-slate-800 hover:text-[#003B71] transition-colors"
                  >
                    +91 44 3993 1387
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Co-Coordinator Desk
                  </span>
                  <a
                    href="tel:+914439931196"
                    className="font-semibold text-slate-800 hover:text-[#003B71] transition-colors"
                  >
                    +91 44 3993 1196
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-100 text-xs text-slate-500">
              Assistance available during university hours.
            </div>
          </div>

          {/* Card 3: Email Inquiries */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#002147]">
                Official Email
              </h3>
              <div className="space-y-2.5 text-sm">
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Dr. Sivakumar R
                  </span>
                  <a
                    href="mailto:sivakumar.r@vit.ac.in"
                    className="font-semibold text-[#003B71] hover:underline"
                  >
                    sivakumar.r@vit.ac.in
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Dr. Sakthivel G
                  </span>
                  <a
                    href="mailto:sakthivel.g@vit.ac.in"
                    className="font-semibold text-[#003B71] hover:underline"
                  >
                    sakthivel.g@vit.ac.in
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-100 text-xs text-slate-500">
              For research proposals, industry partnerships &amp; inquiries.
            </div>
          </div>

        </div>

        {/* Submit Idea Banner Card */}
        <div className="rounded-2xl p-8 sm:p-10 bg-[#002147] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-sky-500/20">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Have an Innovative Concept?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Submit Your Project Proposal
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Turn your hardware, robotics, IoT, or AI vision into a validated prototype with direct access to IDEA Lab facilities and faculty mentoring.
            </p>
          </div>

          <a
            href="https://forms.gle/AGdph5794pXzrbbz8"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#002147] font-bold text-sm sm:text-base shrink-0 shadow-md transition-all active:scale-95"
          >
            <span>Submit Your Ideas</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
