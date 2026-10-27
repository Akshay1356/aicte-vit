"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface BannerSlide {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const slides: BannerSlide[] = [
  {
    id: "slide-1",
    src: "/hero-slides/wide_cinematic_composite_collage_scene_of_a_modern.png",
    alt: "VIT Chennai campus blended with an AICTE engineering lab",
    title: "AICTE × VITC IDEA Lab",
    subtitle: "State-of-the-Art Multidisciplinary Engineering Innovation Sanctuary",
  },
  {
    id: "slide-2",
    src: "/hero-slides/wide_panoramic_collage_banner_style_image_of_a_mod.png",
    alt: "Futuristic AICTE engineering lab collage",
    title: "Where Student Concepts Become Reality",
    subtitle: "Advanced 3D Additive Printing, 4-Axis CNC Machining, and Edge AI Prototyping",
  },
];

const AUTOPLAY_INTERVAL = 5500; // 5.5 seconds

export default function HeroBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Autoplay management: advances every 5.5s, pauses on hover, respects reduced motion
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (!isHovered && !prefersReducedMotion) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, AUTOPLAY_INTERVAL);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, prefersReducedMotion, handleNext]);

  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-[#051336] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003b71]"
      role="region"
      aria-roledescription="carousel"
      aria-label="VIT Chennai & AICTE IDEA Lab Featured Banner"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Full screen viewport height (starting from top:0 under the transparent navbar) */}
      <div className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-screen min-h-[460px] max-h-[920px] bg-[#051336] overflow-hidden">
        {/* Top subtle vignette so the transparent floating navbar stays readable on all slides */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none z-10" />

        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.title}`}
            >
              <div
                className={`w-full h-full transform transition-transform duration-1000 ease-out ${
                  isActive && !prefersReducedMotion ? "scale-100" : "scale-[1.03]"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center select-none"
                  priority={index === 0}
                  quality={90}
                />
              </div>

              {/* Subtle gradient vignette at bottom to guarantee readability of indicators */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrow: Previous */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#051336]/65 hover:bg-[#071b4a]/90 text-white border border-white/20 hover:border-sky-400/80 backdrop-blur-sm flex items-center justify-center transition-all shadow-lg hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Navigation Arrow: Next */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#051336]/65 hover:bg-[#071b4a]/90 text-white border border-white/20 hover:border-sky-400/80 backdrop-blur-sm flex items-center justify-center transition-all shadow-lg hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Indicators Capsule */}
      <div
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#051336]/75 border border-sky-400/30 backdrop-blur-md shadow-md"
        role="tablist"
        aria-label="Banner slideshow controls"
      >
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                isActive
                  ? "w-7 sm:w-8 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
