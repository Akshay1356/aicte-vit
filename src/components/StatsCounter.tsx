"use client";

import React, { useState, useEffect, useRef } from "react";

interface MetricItem {
  numericValue?: number;
  prefix?: string;
  displayValue?: string;
  suffix?: string;
  label: string;
}

function AnimatedMetric({
  item,
  inView,
  duration = 1800,
}: {
  item: MetricItem;
  inView: boolean;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || item.numericValue === undefined) return;

    let startTime: number | null = null;
    let animationFrameId: number;
    const target = item.numericValue;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // easeOutExpo deceleration curve
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, item.numericValue, duration]);

  const hasNumber = item.numericValue !== undefined;

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-8 sm:py-10 group transition-all">
      <div
        className={`text-3xl sm:text-4xl lg:text-[44px] font-black text-[#002147] tracking-tight font-sans mb-2.5 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {item.prefix && <span>{item.prefix}</span>}
        {hasNumber ? (
          <span>{count}</span>
        ) : (
          <span>{item.displayValue}</span>
        )}
        {item.suffix && <span className="font-extrabold text-[#003B71]">{item.suffix}</span>}
      </div>

      <div className="text-xs sm:text-[13.5px] font-semibold text-slate-500 tracking-normal leading-snug">
        {item.label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Using the laboratory's actual metrics from the site
  const metrics: MetricItem[] = [
    {
      numericValue: 4,
      suffix: " Wings",
      label: "Specialized Lab Wings",
    },
    {
      numericValue: 3,
      suffix: " Pillars",
      label: "Core Innovation Pillars",
    },
    {
      displayValue: "Tech-Gurus",
      label: "Multidisciplinary Faculty",
    },
    {
      displayValue: "AICTE Sanctioned",
      label: "Central Infrastructure",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="mt-14 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        {metrics.map((item, idx) => (
          <div key={item.label} className="flex-1">
            <AnimatedMetric
              item={item}
              inView={inView}
              duration={1600 + idx * 150}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
