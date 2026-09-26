import React from 'react';
import { Heart, ShieldCheck, FileCheck, CheckCircle } from 'lucide-react';

interface DonationCTAProps {
  onOpenDonate: (frequency?: 'once' | 'monthly') => void;
}

export const DonationCTA: React.FC<DonationCTAProps> = ({ onOpenDonate }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3EFE6] rounded-3xl sm:rounded-[2.5rem] border border-[#183B2B]/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle warm backdrop */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E8DCC8] rounded-full blur-3xl pointer-events-none -z-0 opacity-60" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#B8583B] font-semibold block mb-3">
              Direct Social Investment
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#183B2B] leading-tight mb-6 text-balance">
              Help us turn compassion into action.
            </h2>

            <p className="text-base sm:text-lg text-[#3B4A41] leading-relaxed mb-8 font-normal">
              Every single rupee contributed goes directly to medical surgeries, sterilization medicines, sapling tree guards, and neighborhood food grains. Because our operational expenses are underwritten by founding trustees, 100% of your public support reaches the field.
            </p>

            {/* Impact calculation breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#183B2B]/10">
                <div className="text-lg font-serif font-bold text-[#183B2B] mb-1">₹500</div>
                <div className="text-xs text-[#52645A]">Supplies nutritious food for 3 street animals for a week.</div>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#183B2B]/10">
                <div className="text-lg font-serif font-bold text-[#183B2B] mb-1">₹1,500</div>
                <div className="text-xs text-[#52645A]">Plants and protects 5 native shade saplings with drip lines.</div>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#183B2B]/10">
                <div className="text-lg font-serif font-bold text-[#183B2B] mb-1">₹3,500</div>
                <div className="text-xs text-[#52645A]">Funds emergency trauma surgery and foster care for an injured animal.</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenDonate('once')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                <Heart className="w-4 h-4 fill-current text-[#E8A598]" />
                <span>Support Us</span>
              </button>

              <button
                onClick={() => onOpenDonate('monthly')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#183B2B] bg-white hover:bg-[#F9F8F5] active:scale-[0.98] transition-all cursor-pointer border border-[#183B2B]/20 shadow-xs"
              >
                <span>Become a Monthly Supporter</span>
              </button>
            </div>

            {/* Legal / Tax Trust Notes */}
            <div className="mt-8 pt-6 border-t border-[#183B2B]/10 flex flex-wrap items-center gap-6 text-xs text-[#586A60]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#183B2B]" />
                <span>Registered Public Charitable Trust</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#183B2B]" />
                <span>Section 80G Tax Exemption Eligible</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#183B2B]" />
                <span>Instant Digital Tax Receipt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
