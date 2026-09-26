import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WORK_DOMAINS } from '../data/mockData';
import { WorkDomain } from '../types';
import { ArtImage } from './ArtImage';

interface OurWorkProps {
  onSelectDomain: (domain: WorkDomain) => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onSelectDomain }) => {
  return (
    <section id="our-work" className="py-20 lg:py-28 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#507564] font-semibold block mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#183B2B] leading-tight">
              Four pillars of grassroots intervention.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4D5D54] max-w-md leading-relaxed">
            We target root causes rather than temporary symptoms. Every initiative combines immediate relief with sustainable, community-owned practices.
          </p>
        </div>

        {/* 4 Large Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {WORK_DOMAINS.map((domain) => (
            <div
              key={domain.id}
              className="bg-[#FFFFFF] rounded-3xl border border-[#183B2B]/10 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Large Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EFECE4]">
                <ArtImage
                  type={domain.imageType}
                  className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  alt={`Vetta Club ${domain.title} initiative`}
                />
                {/* Metric pill replacement: clean unboxed metadata in top corner */}
                <div className="absolute top-4 left-4 bg-[#FAF9F5]/95 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-[#183B2B]/10 text-xs font-medium text-[#183B2B] shadow-xs">
                  {domain.metrics}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-[#183B2B] mb-3 group-hover:text-[#112B1F] transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#46564D] leading-relaxed mb-6">
                    {domain.shortDesc}
                  </p>

                  {/* Highlights preview */}
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#55695E]">
                    {domain.keyInitiatives.slice(0, 2).map((initiative, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#507564] shrink-0" />
                        <span className="truncate">{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#183B2B]/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectDomain(domain)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#183B2B] group-hover:text-[#112B1F] transition-colors cursor-pointer"
                  >
                    <span>Learn More About {domain.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-xs text-[#7B8F84]">Detailed Scope</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
