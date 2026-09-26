import React from 'react';
import { X, Heart, MapPin, Users, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Campaign } from '../types';
import { ArtImage } from './ArtImage';

interface CampaignModalProps {
  campaign: Campaign | null;
  onClose: () => void;
  onDonate: (campaign: Campaign) => void;
}

export const CampaignModal: React.FC<CampaignModalProps> = ({ campaign, onClose, onDonate }) => {
  if (!campaign) return null;

  const percentRaised = Math.min(
    100,
    Math.round((campaign.raisedAmount / campaign.targetAmount) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FAF9F5] w-full max-w-2xl rounded-3xl border border-[#183B2B]/20 shadow-2xl overflow-hidden my-8 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="campaign-modal-title"
      >
        {/* Header Image */}
        <div className="relative aspect-[16/9] w-full bg-[#E5DFD2] overflow-hidden">
          <ArtImage type={campaign.imageType} className="w-full h-full" alt={campaign.title} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors cursor-pointer"
            aria-label="Close campaign details"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-semibold bg-[#183B2B] text-white px-3 py-1 rounded-md shadow-xs">
              {campaign.category}
            </span>
            <span className="text-xs text-white bg-black/60 px-2.5 py-1 rounded-md flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{campaign.location}</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto">
          <h3 id="campaign-modal-title" className="text-2xl sm:text-3xl font-serif font-medium text-[#183B2B] mb-4 leading-tight">
            {campaign.title}
          </h3>

          {/* Progress Box */}
          <div className="bg-[#F0ECE1] p-5 rounded-2xl mb-6 space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-2xl font-serif font-bold text-[#183B2B] tabular-nums">
                  ₹{campaign.raisedAmount.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#52655A]"> raised of ₹{campaign.targetAmount.toLocaleString('en-IN')} goal</span>
              </div>
              <span className="text-sm font-semibold text-[#183B2B] tabular-nums">
                {percentRaised}% Funded
              </span>
            </div>

            <div className="w-full bg-[#DCD4C4] rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-[#183B2B] h-full rounded-full transition-all duration-700"
                style={{ width: `${percentRaised}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-[#52655A] pt-1">
              <div className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#183B2B]" />
                <span>{campaign.donorsCount} Supporters</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#B8583B]" />
                <span>{campaign.daysLeft} days remaining</span>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#507564] mb-2">
              About This Initiative
            </h4>
            <p className="text-sm sm:text-base text-[#3A4B42] leading-relaxed">
              {campaign.fullDesc}
            </p>
          </div>

          {/* Milestones */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#507564] mb-3">
              Implementation Milestones
            </h4>
            <div className="space-y-2.5">
              {campaign.milestones.map((milestone, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46564D]">
                  <CheckCircle2 className="w-4 h-4 text-[#183B2B] shrink-0 mt-0.5" />
                  <span>{milestone}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Footnote & Action */}
          <div className="pt-6 border-t border-[#183B2B]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#5C6E64]">
              <ShieldCheck className="w-4 h-4 text-[#183B2B]" />
              <span>Direct field tracking · 80G tax receipt issued</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onDonate(campaign);
              }}
              className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            >
              <Heart className="w-4 h-4 fill-current text-[#E8A598]" />
              <span>Contribute to this Campaign</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
