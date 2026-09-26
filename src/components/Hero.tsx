import React from 'react';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { ArtImage } from './ArtImage';

interface HeroProps {
  onOpenVolunteer: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVolunteer, onExploreWork }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-[#FAF9F5]">
      {/* Subtle organic ambient background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#E8E1CE] rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E2EDE6] rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start z-10">
            {/* Mission Kicker - clean unboxed typography per zero-pill rule */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#507564] font-semibold mb-4">
              <span>Non-Profit Community Initiative</span>
              <span aria-hidden="true">·</span>
              <span>Bangalore, India</span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-serif font-medium tracking-tight text-[#183B2B] leading-[1.08] mb-6 text-balance">
              Small actions.
              <br />
              <span className="italic font-normal text-[#2D5A42]">Real change.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#3C4A42] leading-relaxed mb-8 max-w-xl font-normal">
              Vetta Club brings people together to create meaningful change for animals, communities and the environment. Through grassroots volunteering, emergency rescue, and civic greening, we turn shared compassion into lasting neighborhood impact.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreWork}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVolunteer}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#183B2B] bg-[#EFECE4] hover:bg-[#E5E0D5] active:scale-[0.98] transition-all cursor-pointer border border-[#DCD5C6]"
              >
                <span>Get Involved</span>
              </button>
            </div>

            {/* Quiet trust indicator */}
            <div className="mt-10 pt-6 border-t border-[#183B2B]/10 flex items-center gap-4 text-xs text-[#5C6E64]">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B8583B]" />
                <span>100% Direct Field Allocation</span>
              </div>
              <span aria-hidden="true">·</span>
              <span>120+ Active Volunteers</span>
              <span aria-hidden="true">·</span>
              <span>80G Tax Exemption</span>
            </div>
          </div>

          {/* Right Cinematic Hero Visual Frame */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#183B2B]/10 aspect-[16/10] sm:aspect-[16/9] w-full group">
              <ArtImage
                type="hero"
                className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                alt="Vetta Club volunteers providing gentle care to a rescued street dog in a warm community setting"
              />

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A12]/80 via-transparent to-black/10 pointer-events-none" />

              {/* Subtle caption overlaid on photograph */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2 pointer-events-none">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#E8D2BD] font-medium">On-Ground Emergency Response</p>
                  <p className="text-sm font-serif italic text-white/90">Volunteer rescue squad tending to injured street animals in Indiranagar</p>
                </div>
                <div className="text-xs text-white/70 whitespace-nowrap">
                  Photo: Vetta Field Archive · 2026
                </div>
              </div>
            </div>

            {/* Decorative accent element behind image */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#EADCC8] rounded-2xl -z-10 hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="w-full flex justify-center pt-6">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs text-[#507564] hover:text-[#183B2B] transition-colors group cursor-pointer focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <span className="tracking-widest uppercase text-[10px] font-medium">Discover More</span>
          <div className="w-5 h-8 rounded-full border border-[#183B2B]/30 flex items-start justify-center p-1 group-hover:border-[#183B2B] transition-colors">
            <div className="w-1 h-2 bg-[#183B2B] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
