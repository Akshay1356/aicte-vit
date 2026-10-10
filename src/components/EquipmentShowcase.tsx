"use client";

import React, { useState } from "react";
import { Search, CheckCircle2, Clock, AlertCircle, Wrench, Shield, ArrowRight, X } from "lucide-react";

export default function EquipmentShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "3D Printing", "CNC & Machining", "Laser & Optics", "Electronics & IoT", "Robotics"];

  const equipmentList = [
    {
      id: "markforged-onyx-pro",
      name: "Markforged Onyx Pro (Continuous Fiber 3D)",
      category: "3D Printing",
      specs: [
        "Build Envelope: 320 × 132 × 154 mm",
        "Materials: Onyx (Micro-carbon filled nylon) & Continuous Fiberglass",
        "Layer Height: 100 µm – 200 µm",
        "Input Formats: .STL, .STEP via Eiger cloud slicer"
      ],
      safetyLevel: "Level 1: General PPE & Lab Briefing",
      status: "Available",
      statusNote: "Walk-in & scheduled slots open",
      location: "Bay A - Additive Wing"
    },
    {
      id: "formlabs-form-3-plus",
      name: "Formlabs Form 3+ Industrial SLA 3D Printer",
      category: "3D Printing",
      specs: [
        "Build Envelope: 145 × 145 × 185 mm",
        "Laser Spot Size: 85 µm (250mW 405nm violet laser)",
        "Resins: Grey Pro, Tough 2000, Flexible 80A, Clear",
        "Post-Processing: Form Wash & Form Cure stations"
      ],
      safetyLevel: "Level 2: Nitrile Gloves & Solvent Hood",
      status: "Available",
      statusNote: "Resin vat pre-calibrated",
      location: "Bay A - Additive Wing"
    },
    {
      id: "roland-mdx-540",
      name: "Roland MDX-540 4-Axis Precision CNC Mill",
      category: "CNC & Machining",
      specs: [
        "Work Area: 500 × 400 × 155 mm",
        "Spindle Speed: 400 to 12,000 RPM (Brushless DC)",
        "Materials: Aluminum 6061, Brass, Delrin, Machinable Wax",
        "Tool Holding: Collet chuck with Z-axis sensor"
      ],
      safetyLevel: "Level 2: Eye Protection & Technician Supervision",
      status: "Available",
      statusNote: "Toolpaths must be screened 24h prior",
      location: "Bay B - Subtractive Wing"
    },
    {
      id: "epilog-fusion-pro-36",
      name: "Epilog Fusion Pro 36 (100W CO2 Laser System)",
      category: "Laser & Optics",
      specs: [
        "Engraving Table: 914 × 610 mm (Pass-through door)",
        "Laser Tube: 100W Waveguide RF-excited CO2",
        "Speed / Acceleration: 165 IPS with 5G acceleration",
        "Positioning: Dual IRIS overhead visual registration"
      ],
      safetyLevel: "Level 2: Active Exhaust & Flame Guard",
      status: "In Use (Slot open at 4:30 PM)",
      statusNote: "Next open window: Afternoon slot",
      location: "Bay C - Laser Optics Wing"
    },
    {
      id: "voltera-v-one",
      name: "Voltera V-One PCB Dispenser & Reflow Platform",
      category: "Electronics & IoT",
      specs: [
        "Print Area: 128 × 116 mm (2-layer FR4 capable)",
        "Min Trace / Pitch: 0.2 mm (8 mil) conductive ink",
        "Features: Solder paste dispensing & 240°C reflow bed",
        "File Formats: Standard Gerber RS-274X export"
      ],
      safetyLevel: "Level 1: ESD Mat & Wristband",
      status: "Available",
      statusNote: "Consumable cartridges in stock",
      location: "Bay D - Circuit Lab"
    },
    {
      id: "keysight-mso-bench",
      name: "Keysight InfiniiVision 4-CH MSO Testbench",
      category: "Electronics & IoT",
      specs: [
        "Bandwidth: 200 MHz, 5 GSa/s maximum sample rate",
        "Channels: 4 analog + 16 digital logic timing channels",
        "Protocols: I2C, SPI, UART/RS-232, CAN bus decoding",
        "Includes: Keysight 20 MHz arbitrary waveform generator"
      ],
      safetyLevel: "Level 1: General Electronics Bench",
      status: "Available",
      statusNote: "All probes and ground leads verified",
      location: "Bay E - Embedded Testbench"
    },
    {
      id: "robotics-manipulator-arm",
      name: "6-DOF Collaborative Robotic Manipulator",
      category: "Robotics",
      specs: [
        "Payload: 3.0 kg with 700 mm working reach",
        "Repeatability: ±0.05 mm across all 6 axes",
        "Vision System: Intel RealSense D435i RGB-D sensor",
        "Software: ROS2 Humble, MoveIt 2 motion planning"
      ],
      safetyLevel: "Level 2: Collaborative Zone Boundary",
      status: "Available",
      statusNote: "ROS2 workstation workstation available",
      location: "Bay F - Autonomous Systems Track"
    }
  ];

  // Filtering logic
  const filtered = equipmentList.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      query === "" ||
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.specs.some((spec) => spec.toLowerCase().includes(query)) ||
      item.location.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  const handleSelectEquipment = (equipName: string) => {
    // Scroll to booking form and prefill if possible
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
      const selectElement = document.getElementById("equipment-select") as HTMLSelectElement | null;
      if (selectElement) {
        // Find matching option
        for (let i = 0; i < selectElement.options.length; i++) {
          if (selectElement.options[i].text.includes(equipName.split(" ")[0])) {
            selectElement.selectedIndex = i;
            selectElement.dispatchEvent(new Event("change", { bubbles: true }));
            break;
          }
        }
      }
    }
  };

  return (
    <section id="equipment" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 text-[#003b71] text-xs font-bold uppercase tracking-wider mb-2.5">
              Live Machinery Directory
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#002147] tracking-tight">
              State-of-the-Art Equipment & Instruments
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Calibrated machinery maintained for sanctioned student capstones, hackathon teams, and sponsored faculty research.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{filtered.length}</strong> of{" "}
            <strong>{equipmentList.length}</strong> equipment units
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-4 sm:p-5 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by equipment name, specification (e.g. 100W, SLA, ROS2, Onyx)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#003b71] focus:ring-1 focus:ring-[#003b71]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Clear All Filter Button */}
            {(searchQuery || activeCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="px-3.5 py-2 rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 text-xs font-semibold self-start sm:self-auto transition-colors"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-500 mr-1 hidden sm:inline">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#003b71] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Empty Search Result State */}
        {filtered.length === 0 && (
          <div className="text-center py-12 px-4 rounded-xl bg-slate-50 border border-slate-200">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h4 className="text-base font-bold text-slate-800">No matching machines found</h4>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search terms or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 px-4 py-1.5 rounded-md text-xs font-bold text-white bg-[#003b71] hover:bg-[#002850]"
            >
              Show All Equipment
            </button>
          </div>
        )}

        {/* Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Category & Live Status */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#f1f5f9] text-[#003b71] border border-slate-200">
                    {item.category}
                  </span>

                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-2 py-0.5 rounded ${
                      item.status.includes("Available")
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-amber-50 text-amber-800 border border-amber-200"
                    }`}
                  >
                    {item.status.includes("Available") ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                    )}
                    <span>{item.status}</span>
                  </span>
                </div>

                {/* Machine Name & Location */}
                <h3 className="text-base font-bold text-[#002147] mb-1 leading-snug">
                  {item.name}
                </h3>
                <p className="text-[11px] font-semibold text-slate-500 mb-3.5">
                  📍 {item.location}
                </p>

                {/* Technical Specifications */}
                <div className="space-y-1.5 pt-2 pb-4 border-t border-slate-100 text-xs text-slate-600">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-[#003b71] font-bold">•</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety & Action Footer */}
              <div className="pt-3 border-t border-slate-100 mt-2 space-y-3">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  <Shield className="w-3.5 h-3.5 text-[#003b71]" />
                  <span>{item.safetyLevel}</span>
                </div>

                <button
                  onClick={() => handleSelectEquipment(item.name)}
                  className="w-full py-2.5 px-3 rounded-md text-xs font-bold text-white bg-[#003b71] hover:bg-[#002850] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Reserve This Machine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
