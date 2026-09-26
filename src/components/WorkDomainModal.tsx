import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { WorkDomain } from '../types';
import { ArtImage } from './ArtImage';

interface WorkDomainModalProps {
  domain: WorkDomain | null;
  onClose: () => void;
  onVolunteer: () => void;
  onDonate: (causeName: string) => void;
}

export const WorkDomainModal: React.FC<WorkDomainModalProps> = ({
  domain,
  onClose,
  onVolunteer,
  onDonate
}) => {
  if (!domain) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FAF9F5] w-full max-w-2xl rounded-3xl border border-[#183B2B]/20 shadow-2xl overflow-hidden my-8 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="domain-modal-title"
      >
        <div className="relative aspect-[16/9] w-full bg-[#E5DFD2] overflow-hidden">
          <ArtImage type={domain.imageType} className="w-full h-full" alt={domain.title} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors cursor-pointer"
            aria-label="Close domain details"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-semibold bg-[#183B2B] text-white px-3 py-1 rounded-md shadow-xs">
              {domain.metrics}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto">
          <h3 id="domain-modal-title" className="text-2xl sm:text-3xl font-serif font-medium text-[#183B2B] mb-4">
            {domain.title}
          </h3>

          <p className="text-sm sm:text-base text-[#3A4B42] leading-relaxed mb-6 font-normal">
            {domain.fullDesc}
          </p>

          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#507564] mb-3">
            Core Initiatives Under This Pillar
          </h4>
          <div className="space-y-2.5 mb-8">
            {domain.keyInitiatives.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46564D]">
                <CheckCircle2 className="w-4 h-4 text-[#183B2B] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#183B2B]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                onVolunteer();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-[#183B2B] bg-[#EFEBE0] hover:bg-[#E4DED1] transition-colors cursor-pointer text-center"
            >
              Volunteer in this Domain
            </button>
            <button
              onClick={() => {
                onClose();
                onDonate(domain.title);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Support This Pillar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
