import React from 'react';
import { Heart, Users, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface VolunteerCTAProps {
  onOpenVolunteer: () => void;
}

export const VolunteerCTA: React.FC<VolunteerCTAProps> = ({ onOpenVolunteer }) => {
  return (
    <section id="get-involved" className="py-20 lg:py-28 bg-[#183B2B] text-white relative overflow-hidden">
      {/* Subtle organic light reflections */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full bg-[#E5A93C] blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-[#A3D9C9] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Statement */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A5C7B7] font-semibold mb-4">
              <span>Join The Volunteer Network</span>
              <span aria-hidden="true">·</span>
              <span>Weekends or Flexible Hours</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-[1.1] mb-6 text-balance">
              Your time can become <br />
              <span className="italic font-normal text-[#E8A598]">someone's hope.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#CBDDD4] max-w-2xl leading-relaxed mb-8 font-light">
              You don’t need to change the whole world. Start by changing something within your reach. Whether you can dedicate two hours on a Sunday morning for tree-planting, assist with animal foster logistics, or help coordinate grain distributions, your presence matters.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenVolunteer}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-[#183B2B] bg-[#FAF9F5] hover:bg-white active:scale-[0.98] transition-all cursor-pointer shadow-lg"
              >
                <span>Become a Volunteer</span>
                <ArrowRight className="w-5 h-5 text-[#183B2B]" />
              </button>

              <div className="text-xs sm:text-sm text-[#A8C4B5] pl-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E8A598]" />
                <span>No prior experience needed · Free orientation provided</span>
              </div>
            </div>
          </div>

          {/* Quick Pillars Box */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
            <h3 className="text-xl font-serif font-semibold text-white border-b border-white/10 pb-4">
              Volunteer Roles Available
            </h3>

            <div className="space-y-4 text-sm text-[#D7E6DF]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#E8A598] font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="font-semibold text-white">Animal Rescue Support</h4>
                  <p className="text-xs text-[#A8C4B5] mt-0.5">Assisting with foster handoffs, veterinary runs & emergency food bowls.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#A3D9C9] font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="font-semibold text-white">Weekend Greening Drives</h4>
                  <p className="text-xs text-[#A8C4B5] mt-0.5">Digging pits, planting native species & inspecting urban sapling drip lines.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#F5C26B] font-bold text-xs">
                  03
                </div>
                <div>
                  <h4 className="font-semibold text-white">Community Outreach</h4>
                  <p className="text-xs text-[#A8C4B5] mt-0.5">Leading neighborhood workshops, food distributions & event coordination.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#9BB9AA]">
              <ShieldCheck className="w-4 h-4 text-[#A3D9C9]" />
              <span>Full volunteer liability protection & safety gear included.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
