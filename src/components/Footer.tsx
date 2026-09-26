import React from 'react';
import { ArrowUp, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenDonate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'Campaigns', href: '#campaigns' },
    { label: 'Stories', href: '#stories' },
    { label: 'Get Involved', href: '#get-involved' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#10241A] text-[#FAF9F5] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="text-2xl font-serif font-bold tracking-tight text-white block mb-4"
            >
              VETTA CLUB
            </a>
            <p className="text-xs uppercase tracking-widest text-[#93B8A4] font-medium mb-3">
              "Small actions. Real change."
            </p>
            <p className="text-sm text-[#A9C4B5] leading-relaxed mb-6 font-light max-w-sm">
              A community-driven organization working toward animal welfare, environmental awareness, community support and meaningful social impact.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#8BA496]">
              <ShieldCheck className="w-4 h-4 text-[#A3D9C9]" />
              <span>Regd. Public Trust No. BLR-TRUST-2024-88A</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#93B8A4] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CBDDD4]">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#93B8A4] font-semibold mb-4">
              Impact Areas
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CBDDD4]">
              <li>Animal Rescue</li>
              <li>Afforestation</li>
              <li>Ward Cleanliness</li>
              <li>Civic Education</li>
              <li>Community Meals</li>
            </ul>
          </div>

          {/* Connect & Mission CTA */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#93B8A4] font-semibold mb-4">
                Connect & Support
              </h4>
              <p className="text-xs text-[#A9C4B5] mb-4">
                Follow our weekly field updates and weekend drives:
              </p>
              <div className="flex items-center gap-3 mb-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF9F5] flex items-center justify-center text-xs font-semibold transition-colors"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF9F5] flex items-center justify-center text-xs font-semibold transition-colors"
                  aria-label="X Twitter"
                >
                  X
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF9F5] flex items-center justify-center text-xs font-semibold transition-colors"
                  aria-label="LinkedIn"
                >
                  IN
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF9F5] flex items-center justify-center text-xs font-semibold transition-colors"
                  aria-label="YouTube"
                >
                  YT
                </a>
              </div>
            </div>

            <button
              onClick={onOpenDonate}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#183B2B] bg-[#FAF9F5] hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 text-[#B8583B] fill-current" />
              <span>Contribute to Vetta Club</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8BA496]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Vetta Club Foundation. vettaclub.in. All rights reserved.</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer underline-offset-2 hover:underline"
            >
              Terms of Service
            </button>
            <span aria-hidden="true">·</span>
            <span>Section 80G Certified</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#A9C4B5] hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
