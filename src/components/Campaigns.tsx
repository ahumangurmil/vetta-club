import React, { useState } from 'react';
import { ArrowRight, Clock, MapPin, Users, Heart } from 'lucide-react';
import { CAMPAIGNS } from '../data/mockData';
import { Campaign } from '../types';
import { ArtImage } from './ArtImage';

interface CampaignsProps {
  onSelectCampaign: (campaign: Campaign) => void;
  onDonateToCampaign: (campaign: Campaign) => void;
}

export const Campaigns: React.FC<CampaignsProps> = ({ onSelectCampaign, onDonateToCampaign }) => {
  const [filter, setFilter] = useState<'all' | 'animal' | 'civic' | 'environment'>('all');

  const filteredCampaigns = CAMPAIGNS.filter((c) => {
    if (filter === 'animal') return c.category.toLowerCase().includes('animal');
    if (filter === 'civic') return c.category.toLowerCase().includes('civic');
    if (filter === 'environment') return c.category.toLowerCase().includes('environment');
    return true;
  });

  return (
    <section id="campaigns" className="py-20 lg:py-28 bg-[#F5F2EA] border-t border-b border-[#183B2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#507564] font-semibold block mb-3">
              Active Campaigns
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#183B2B]">
              Direct support for urgent priorities.
            </h2>
          </div>

          {/* Interactive filter tabs per zero-pill rules */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#EAE5D9] rounded-xl self-start md:self-auto border border-[#183B2B]/10">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-[#183B2B] shadow-xs'
                  : 'text-[#4A5D52] hover:text-[#183B2B]'
              }`}
            >
              All Campaigns
            </button>
            <button
              onClick={() => setFilter('animal')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'animal'
                  ? 'bg-white text-[#183B2B] shadow-xs'
                  : 'text-[#4A5D52] hover:text-[#183B2B]'
              }`}
            >
              Animal Welfare
            </button>
            <button
              onClick={() => setFilter('civic')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'civic'
                  ? 'bg-white text-[#183B2B] shadow-xs'
                  : 'text-[#4A5D52] hover:text-[#183B2B]'
              }`}
            >
              Clean Streets
            </button>
            <button
              onClick={() => setFilter('environment')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'environment'
                  ? 'bg-white text-[#183B2B] shadow-xs'
                  : 'text-[#4A5D52] hover:text-[#183B2B]'
              }`}
            >
              Reforestation
            </button>
          </div>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCampaigns.map((campaign) => {
            const percentRaised = Math.min(
              100,
              Math.round((campaign.raisedAmount / campaign.targetAmount) * 100)
            );

            return (
              <div
                key={campaign.id}
                className="bg-[#FAF9F5] rounded-3xl border border-[#183B2B]/10 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Visual Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E2DCCE]">
                  <ArtImage
                    type={campaign.imageType}
                    className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                    alt={campaign.title}
                  />
                  {/* Clean unboxed category & location indicator */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="text-xs font-semibold bg-[#FAF9F5]/90 backdrop-blur-xs text-[#183B2B] px-3 py-1 rounded-md border border-[#183B2B]/10 shadow-xs">
                      {campaign.category}
                    </span>
                    <span className="text-xs text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate max-w-[120px]">{campaign.location}</span>
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[#183B2B] mb-2.5 group-hover:text-[#112B1F] transition-colors leading-snug">
                      {campaign.title}
                    </h3>
                    <p className="text-sm text-[#46564D] leading-relaxed mb-6 line-clamp-3">
                      {campaign.shortDesc}
                    </p>

                    {/* Progress Bar Container */}
                    <div className="space-y-2 mb-6">
                      <div className="w-full bg-[#E5DFD0] rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-[#183B2B] h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${percentRaised}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div>
                          <span className="font-semibold text-[#183B2B] tabular-nums">
                            ₹{campaign.raisedAmount.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[#687C72]"> raised of ₹{campaign.targetAmount.toLocaleString('en-IN')}</span>
                        </div>
                        <span className="font-semibold text-[#183B2B] tabular-nums">
                          {percentRaised}%
                        </span>
                      </div>
                    </div>

                    {/* Meta stats */}
                    <div className="flex items-center justify-between text-xs text-[#5C6E64] pb-6 mb-6 border-b border-[#183B2B]/10">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#507564]" />
                        <span>{campaign.donorsCount} Supporters</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#B8583B]" />
                        <span>{campaign.daysLeft} days remaining</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => onSelectCampaign(campaign)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-[#183B2B] bg-[#EFEBE0] hover:bg-[#E4DED1] transition-colors cursor-pointer text-center"
                    >
                      Learn More
                    </button>
                    <button
                      onClick={() => onDonateToCampaign(campaign)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Heart className="w-3.5 h-3.5 text-[#E8A598]" />
                      <span>Back This</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
