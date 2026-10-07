"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  children: React.ReactNode;
}

export default function IntroAnimation({ children }: IntroAnimationProps) {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
    }

    // Check sessionStorage
    try {
      const hasSeenIntro = sessionStorage.getItem("vitc_idealab_intro_shown");
      if (hasSeenIntro) {
        setShowIntro(false);
        return;
      }
    } catch {
      // Ignore storage access errors
    }

    setShowIntro(true);

    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      handleComplete();
    }, reducedMotion ? 1600 : 3150);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [reducedMotion]);

  const handleComplete = () => {
    try {
      sessionStorage.setItem("vitc_idealab_intro_shown", "true");
    } catch {
      // Ignore storage access errors
    }
    document.body.style.overflow = "";
    setShowIntro(false);
  };

  const aicteLetters = ["A", "I", "C", "T", "E"];
  const vitcLetters = ["V", "I", "T", "C"];

  return (
    <>
      {/* Home page is continuously rendered beneath the overlay */}
      <div
        className={`w-full min-h-screen transition-opacity duration-700 ${
          showIntro ? "opacity-100" : "opacity-100"
        }`}
      >
        {children}
      </div>

      {/* Cinematic Intro Overlay */}
      <AnimatePresence onExitComplete={() => { document.body.style.overflow = ""; }}>
        {showIntro && (
          <motion.div
            key="intro-overlay"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.02,
              filter: "blur(8px)",
              transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
            }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white select-none overflow-hidden px-4 sm:px-6"
            style={{ pointerEvents: showIntro ? "all" : "none" }}
            role="dialog"
            aria-label="Welcome to VITC IDEA Labs"
          >
            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
              
              {/* PRIMARY TYPOGRAPHY: "AICTE × VITC" */}
              <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 md:gap-x-7 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900">
                
                {/* AICTE Word with Staggered Character Reveal */}
                <div className="flex items-center tracking-normal font-sans">
                  {aicteLetters.map((char, index) => (
                    <motion.span
                      key={`aicte-${index}`}
                      initial={
                        reducedMotion
                          ? { opacity: 0 }
                          : {
                              opacity: 0,
                              y: 18,
                              filter: "blur(8px)",
                              letterSpacing: "0.15em"
                            }
                      }
                      animate={
                        reducedMotion
                          ? { opacity: 1 }
                          : {
                              opacity: 1,
                              y: 0,
                              filter: "blur(0px)",
                              letterSpacing: "0.02em"
                            }
                      }
                      transition={{
                        duration: 0.65,
                        delay: reducedMotion ? 0.2 : 0.35 + index * 0.08,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="text-slate-950 inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>

                {/* × Symbol Reveal */}
                <motion.span
                  initial={
                    reducedMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          scale: 0.6,
                          rotate: -20,
                          filter: "blur(6px)"
                        }
                  }
                  animate={
                    reducedMotion
                      ? { opacity: 1 }
                      : {
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                          filter: "blur(0px)"
                        }
                  }
                  transition={{
                    duration: 0.55,
                    delay: reducedMotion ? 0.35 : 0.85,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  className="text-blue-600 font-light select-none text-3xl sm:text-5xl md:text-6xl lg:text-7xl inline-block mx-0.5 sm:mx-1"
                >
                  ×
                </motion.span>

                {/* VITC Word with Staggered Character Reveal */}
                <div className="flex items-center tracking-normal font-sans">
                  {vitcLetters.map((char, index) => (
                    <motion.span
                      key={`vitc-${index}`}
                      initial={
                        reducedMotion
                          ? { opacity: 0 }
                          : {
                              opacity: 0,
                              y: 18,
                              filter: "blur(8px)",
                              letterSpacing: "0.15em"
                            }
                      }
                      animate={
                        reducedMotion
                          ? { opacity: 1 }
                          : {
                              opacity: 1,
                              y: 0,
                              filter: "blur(0px)",
                              letterSpacing: "0.02em"
                            }
                      }
                      transition={{
                        duration: 0.65,
                        delay: reducedMotion ? 0.45 : 1.05 + index * 0.08,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="text-slate-950 inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Animated Divider */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: reducedMotion ? 0.5 : 1.45,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="w-24 sm:w-36 h-[2px] bg-blue-600/30 my-6 sm:my-8"
              />

              {/* TAGLINE: "Where your dream projects turn into reality" */}
              <div className="flex flex-col items-center justify-center space-y-1.5 overflow-hidden">
                {/* Line 1 */}
                <motion.p
                  initial={
                    reducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 14, filter: "blur(4px)" }
                  }
                  animate={
                    reducedMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: 0, filter: "blur(0px)" }
                  }
                  transition={{
                    duration: 0.6,
                    delay: reducedMotion ? 0.6 : 1.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="text-base sm:text-xl md:text-2xl text-slate-700 font-normal tracking-wide font-sans"
                >
                  Where your dream projects
                </motion.p>

                {/* Line 2 */}
                <motion.p
                  initial={
                    reducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 14, filter: "blur(4px)" }
                  }
                  animate={
                    reducedMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: 0, filter: "blur(0px)" }
                  }
                  transition={{
                    duration: 0.6,
                    delay: reducedMotion ? 0.7 : 1.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="text-base sm:text-xl md:text-2xl font-semibold tracking-wide text-blue-700"
                >
                  turn into reality
                </motion.p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
