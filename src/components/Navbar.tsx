import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'Campaigns', href: '#campaigns' },
    { label: 'Stories', href: '#stories' },
    { label: 'Get Involved', href: '#get-involved' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md shadow-xs border-b border-[#183B2B]/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text wordmark in display face */}
          <a
            href="#home"
            className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#183B2B] hover:opacity-90 transition-opacity"
            aria-label="Vetta Club Homepage"
          >
            VETTA CLUB
          </a>

          {/* Zone 2: 4-7 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#2C3E35]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#183B2B] relative transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#183B2B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDonate}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] active:scale-[0.98] transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#183B2B]/40 focus:ring-offset-2"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-[#E8A598]" />
              <span className="whitespace-nowrap">Support Our Mission</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#183B2B] hover:bg-[#183B2B]/5 focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#183B2B]/10 bg-[#FAF9F5] rounded-2xl shadow-lg px-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2.5 px-3 rounded-lg text-sm font-medium text-[#2C3E35] hover:bg-[#183B2B]/5 hover:text-[#183B2B] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#183B2B]/10 flex flex-col gap-2 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteer();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#183B2B] border border-[#183B2B]/30 hover:bg-[#183B2B]/5 text-center"
              >
                Volunteer With Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
