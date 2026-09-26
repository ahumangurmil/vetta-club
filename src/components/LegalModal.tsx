import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FAF9F5] w-full max-w-xl rounded-3xl border border-[#183B2B]/20 shadow-2xl overflow-hidden my-8 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        <div className="p-6 bg-[#183B2B] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#A3D9C9]" />
            <h3 id="legal-modal-title" className="text-lg font-serif font-semibold">
              {type === 'privacy' ? 'Donor Privacy Policy' : 'Terms of Engagement'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto text-sm text-[#3C4D43] space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Vetta Club Foundation</strong> respects the privacy of our community supporters, volunteers, and donors. This policy outlines our ethical commitments regarding personal information:
              </p>
              <h4 className="font-semibold text-[#183B2B] text-base pt-2">1. Data Minimization</h4>
              <p>
                We only collect information strictly required to issue Section 80G tax receipts and coordinate emergency field volunteering (Name, Email, Phone, and PAN when provided).
              </p>
              <h4 className="font-semibold text-[#183B2B] text-base pt-2">2. No Commercial Monetization</h4>
              <p>
                We will never sell, rent, lease, or barter donor or volunteer databases to third parties, political organizations, or commercial marketers.
              </p>
              <h4 className="font-semibold text-[#183B2B] text-base pt-2">3. Transparency & Records</h4>
              <p>
                Donors may request an inspection of their cumulative contribution history or ask to be unsubscribed from field newsletters at any time by contacting hello@vettaclub.in.
              </p>
            </>
          ) : (
            <>
              <p>
                By engaging with <strong>Vetta Club</strong> (vettaclub.in), volunteers and supporters agree to uphold non-violence, community respect, and environmental stewardship:
              </p>
              <h4 className="font-semibold text-[#183B2B] text-base pt-2">1. Volunteer Safety & Care</h4>
              <p>
                All on-ground animal rescue and tree plantation activities are conducted in pairs with supervised safety protocols. Volunteers agree to follow guidance provided by licensed veterinarians and chapter leads.
              </p>
              <h4 className="font-semibold text-[#183B2B] text-base pt-2">2. Use of Contributions</h4>
              <p>
                Public donations are pooled directly into designated non-profit trust accounts audited annually by independent certified accountants in accordance with Indian trust legislation.
              </p>
              <h4 className="font-semibold text-[#183B2B] text-base pt-2">3. Community Code of Conduct</h4>
              <p>
                We foster an inclusive space welcoming all backgrounds without discrimination based on caste, creed, religion, or gender.
              </p>
            </>
          )}

          <div className="pt-6 border-t border-[#183B2B]/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl text-xs font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] transition-colors cursor-pointer"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
