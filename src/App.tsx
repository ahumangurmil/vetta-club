/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ImpactStats } from './components/ImpactStats';
import { OurWork } from './components/OurWork';
import { Campaigns } from './components/Campaigns';
import { Stories } from './components/Stories';
import { VolunteerCTA } from './components/VolunteerCTA';
import { DonationCTA } from './components/DonationCTA';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { DonationModal } from './components/DonationModal';
import { VolunteerModal } from './components/VolunteerModal';
import { StoryModal } from './components/StoryModal';
import { CampaignModal } from './components/CampaignModal';
import { WorkDomainModal } from './components/WorkDomainModal';
import { LegalModal } from './components/LegalModal';

import { Campaign, Story, WorkDomain } from './types';
import { WORK_DOMAINS } from './data/mockData';

export default function App() {
  // Modal states
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [donationFrequency, setDonationFrequency] = useState<'once' | 'monthly'>('once');
  const [donationCause, setDonationCause] = useState<string>('General Mission & Emergency Fund');

  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<WorkDomain | null>(null);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  // Floating back to top state
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenDonate = (frequency: 'once' | 'monthly' = 'once', cause?: string) => {
    setDonationFrequency(frequency);
    if (cause) setDonationCause(cause);
    setIsDonationOpen(true);
  };

  const handleExploreWork = () => {
    const target = document.querySelector('#our-work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnDomainById = (domainId: string) => {
    const found = WORK_DOMAINS.find((d) => d.id === domainId);
    if (found) {
      setSelectedDomain(found);
    }
  };

  const handleDonateToCampaign = (campaign: Campaign) => {
    handleOpenDonate('once', `Campaign: ${campaign.title}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1E2522] selection:bg-[#183B2B] selection:text-white flex flex-col font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenDonate={() => handleOpenDonate('once')}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenVolunteer={() => setIsVolunteerOpen(true)}
          onExploreWork={handleExploreWork}
        />

        {/* About Section */}
        <About
          onLearnDomain={handleLearnDomainById}
        />

        {/* Impact Statistics Section */}
        <ImpactStats />

        {/* Our Work Section */}
        <OurWork
          onSelectDomain={(domain) => setSelectedDomain(domain)}
        />

        {/* Active Campaigns Section */}
        <Campaigns
          onSelectCampaign={(campaign) => setSelectedCampaign(campaign)}
          onDonateToCampaign={handleDonateToCampaign}
        />

        {/* Stories Section */}
        <Stories
          onSelectStory={(story) => setSelectedStory(story)}
        />

        {/* Volunteer CTA */}
        <VolunteerCTA
          onOpenVolunteer={() => setIsVolunteerOpen(true)}
        />

        {/* Donation CTA */}
        <DonationCTA
          onOpenDonate={(freq) => handleOpenDonate(freq || 'once')}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact & Inquiry Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalType('privacy')}
        onOpenTerms={() => setLegalType('terms')}
        onOpenDonate={() => handleOpenDonate('once')}
      />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#183B2B] text-white hover:bg-[#112B1F] shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#183B2B]/40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Interactive Modals */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
        initialFrequency={donationFrequency}
        initialCause={donationCause}
      />

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />

      <StoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />

      <CampaignModal
        campaign={selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
        onDonate={handleDonateToCampaign}
      />

      <WorkDomainModal
        domain={selectedDomain}
        onClose={() => setSelectedDomain(null)}
        onVolunteer={() => setIsVolunteerOpen(true)}
        onDonate={(cause) => handleOpenDonate('once', `Pillar: ${cause}`)}
      />

      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />
    </div>
  );
}
