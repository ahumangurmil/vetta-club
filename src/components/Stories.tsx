import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { STORIES } from '../data/mockData';
import { Story } from '../types';
import { ArtImage } from './ArtImage';

interface StoriesProps {
  onSelectStory: (story: Story) => void;
}

export const Stories: React.FC<StoriesProps> = ({ onSelectStory }) => {
  return (
    <section id="stories" className="py-20 lg:py-28 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-[#507564] font-semibold block mb-3">
            Voices & Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#183B2B] leading-tight mb-4">
            Stories That Matter
          </h2>
          <p className="text-base sm:text-lg text-[#46564D] leading-relaxed">
            Behind every number lies a life touched, a garden planted, or a quiet victory of community perseverance. Here is how small acts add up on the ground.
          </p>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {STORIES.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-3xl border border-[#183B2B]/10 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => onSelectStory(story)}
            >
              {/* Visual Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE5D9]">
                <ArtImage
                  type={story.imageType}
                  className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  alt={story.title}
                />
              </div>

              {/* Story Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Zero-Pill Metadata Discipline */}
                  <div className="flex items-center gap-2 text-xs text-[#507564] font-medium mb-3">
                    <span>{story.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{story.date}</span>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-[#183B2B] mb-3 group-hover:text-[#112B1F] transition-colors leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-sm text-[#46564D] leading-relaxed mb-6 line-clamp-3">
                    {story.summary}
                  </p>

                  {/* Pull Quote snippet */}
                  <blockquote className="border-l-2 border-[#183B2B]/20 pl-3 py-1 mb-6 text-xs italic font-serif text-[#394B42] leading-relaxed bg-[#FAF9F5] rounded-r-md">
                    {story.quote}
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#183B2B]/10 flex items-center justify-between text-xs text-[#183B2B] font-semibold group-hover:text-[#112B1F]">
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#507564]" />
                    <span>Read Full Story</span>
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
