import React from 'react';
import { X, Calendar, MapPin, User, Quote, Share2 } from 'lucide-react';
import { Story } from '../types';
import { ArtImage } from './ArtImage';

interface StoryModalProps {
  story: Story | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  if (!story) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${story.title} - Read more on vettaclub.in`);
      alert('Story link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FAF9F5] w-full max-w-2xl rounded-3xl border border-[#183B2B]/20 shadow-2xl overflow-hidden my-8 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="story-modal-title"
      >
        {/* Header with image */}
        <div className="relative aspect-[16/9] w-full bg-[#E5DFD2] overflow-hidden">
          <ArtImage type={story.imageType} className="w-full h-full" alt={story.title} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors cursor-pointer"
            aria-label="Close story"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-xs font-semibold bg-[#183B2B] text-white px-3 py-1 rounded-md shadow-xs">
              {story.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#507564] mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{story.date}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{story.location}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>{story.author}</span>
            </span>
          </div>

          <h3 id="story-modal-title" className="text-2xl sm:text-3xl font-serif font-medium text-[#183B2B] mb-6 leading-tight">
            {story.title}
          </h3>

          {/* Pull quote */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F0ECE1] border-l-4 border-[#183B2B] mb-8">
            <Quote className="w-5 h-5 text-[#183B2B]/40 mb-2" />
            <p className="text-sm sm:text-base font-serif italic text-[#253A2E] leading-relaxed">
              {story.quote}
            </p>
          </div>

          {/* Narrative paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#3A4B42] leading-relaxed font-normal">
            {story.fullStory.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="mt-8 pt-6 border-t border-[#183B2B]/10 flex items-center justify-between">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#183B2B] hover:text-[#112B1F] cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share This Story</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] transition-colors cursor-pointer"
            >
              Back to Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
