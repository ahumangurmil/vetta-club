import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../data/mockData';

export const ImpactStats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic: 1 - Math.pow(1 - progress, 3)
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(
              STATS.map((stat) => Math.floor(easeOut * stat.value))
            );

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCounts(STATS.map((stat) => stat.value));
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#183B2B] text-[#FAF9F5] relative overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#E5A93C] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9DB8A9] font-medium block mb-2">
            Measurable Community Impact
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-white">
            Honest Numbers. Lasting Footprints.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                idx !== 0 ? 'pt-8 sm:pt-0 sm:pl-8' : ''
              }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight mb-2 tabular-nums">
                {counts[idx]}
                <span className="text-[#E8A598] font-normal">{stat.suffix}</span>
              </div>
              <div className="text-base sm:text-lg font-medium text-[#FAF9F5]/90 mb-1">
                {stat.label}
              </div>
              <p className="text-xs sm:text-sm text-[#A5BEB1] max-w-[220px] leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Quiet footnote confirming transparency */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center text-xs text-[#8BA496]">
          All metrics independently compiled from ward activity logs & volunteer rescue records (Updated Sep 2026).
        </div>
      </div>
    </section>
  );
};
