import React from 'react';
import { PawPrint, Users, TreePine, ArrowRight } from 'lucide-react';
import { ArtImage } from './ArtImage';

interface AboutProps {
  onLearnDomain: (domainId: string) => void;
}

export const About: React.FC<AboutProps> = ({ onLearnDomain }) => {
  const pillars = [
    {
      id: 'animal-welfare',
      icon: PawPrint,
      title: 'Animal Welfare',
      desc: 'Grassroots emergency medical rescue, street feeding circuits, and loving foster-to-adopt transitions for vulnerable community animals.',
      accent: 'border-l-[#B8583B]'
    },
    {
      id: 'community-development',
      icon: Users,
      title: 'Community Support',
      desc: 'Collaborative nutritional grain drives, seasonal survival kits, and creating safe, welcoming public hubs for elder residents and families.',
      accent: 'border-l-[#D9822B]'
    },
    {
      id: 'environmental-action',
      icon: TreePine,
      title: 'Environmental Action',
      desc: 'Planting resilient native urban micro-forests, rejuvenating polluted ward drainage points, and establishing zero-waste neighborhood composting.',
      accent: 'border-l-[#183B2B]'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F2EA] border-t border-b border-[#183B2B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-[#507564] font-semibold mb-3">
            Our Purpose & Ethos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#183B2B] leading-tight mb-6">
            Change begins with someone who cares.
          </h2>
          <p className="text-base sm:text-lg text-[#3B4A41] leading-relaxed">
            Vetta Club was born from a simple observation: the biggest obstacles in our neighborhoods aren’t solved by waiting for distant institutions. They shift when ordinary neighbors step forward together. We bridge the gap through direct community participation, practical awareness campaigns, and hands-on weekend volunteering.
          </p>
        </div>

        {/* 2-Column Content Grid: Large visual beside text & 3 impact cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Large editorial photograph frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#183B2B]/10 aspect-[4/3] bg-white group">
              <ArtImage
                type="about"
                className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                alt="Community hands planting a young native sapling together into rich dark soil"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                <span className="text-xs tracking-wider uppercase text-[#EAD0B3] block mb-1">Grassroots in Motion</span>
                <p className="text-sm font-serif italic text-white/95">
                  "Every seed sown and every paw bandaged is a quiet promise of a kinder city."
                </p>
              </div>
            </div>
            {/* Editorial Caption below */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#5C6E64] px-1">
              <span>Community Sapling Drive · Malleshwaram</span>
              <span>88% sapling survival rate</span>
            </div>
          </div>

          {/* Right: 3 Impact Cards */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className={`bg-[#FAF9F5] p-6 sm:p-7 rounded-2xl border border-[#183B2B]/10 hover:border-[#183B2B]/30 transition-all duration-200 shadow-xs hover:shadow-md border-l-4 ${pillar.accent} group cursor-pointer`}
                  onClick={() => onLearnDomain(pillar.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F0EBE1] text-[#183B2B] flex items-center justify-center shrink-0 group-hover:bg-[#183B2B] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#183B2B] group-hover:text-[#112B1F] transition-colors">
                          {pillar.title}
                        </h3>
                        <span className="text-xs font-medium text-[#507564] group-hover:text-[#183B2B] inline-flex items-center gap-1 transition-colors">
                          <span>Explore Domain</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-[#46564D] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
