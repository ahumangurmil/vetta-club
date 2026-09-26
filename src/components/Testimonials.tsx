import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F2EA] border-t border-b border-[#183B2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-[#507564] font-semibold block mb-3">
            Community Reflections
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#183B2B] leading-tight mb-4">
            Words from the people walking beside us.
          </h2>
          <p className="text-base sm:text-lg text-[#46564D] leading-relaxed">
            Our credibility is grounded in the lived experiences of neighborhood volunteers, local resident leaders, and healthcare partners who see our actions unfold week after week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF9F5] p-7 sm:p-8 rounded-3xl border border-[#183B2B]/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#183B2B]/20 mb-4" />
                <p className="text-sm sm:text-base text-[#34443B] leading-relaxed italic font-serif mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#183B2B]/10 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#183B2B] text-[#FAF9F5] font-serif font-semibold text-xs flex items-center justify-center shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#183B2B]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#5C6E64]">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-[#7E9186]">
                    {t.location} · {t.yearsWithUs}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
