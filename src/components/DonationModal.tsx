import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, Download, ArrowRight } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFrequency?: 'once' | 'monthly';
  initialCause?: string;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  initialFrequency = 'once',
  initialCause = 'General Mission & Emergency Fund'
}) => {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>(initialFrequency);
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [cause, setCause] = useState<string>(initialCause);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [pan, setPan] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentAmount = selectedAmount === 'custom' ? Number(customAmount) || 0 : selectedAmount;

  const getImpactDescription = (amt: number) => {
    if (amt >= 5000) return 'Provides full surgical rehabilitation & 2-month post-op care for multiple rescued animals.';
    if (amt >= 2500) return 'Funds emergency veterinary trauma care, anti-rabies vaccines, and foster nutrition.';
    if (amt >= 1000) return 'Plants and safeguards 3 native shade saplings with individual protective guards.';
    if (amt >= 500) return 'Supplies nutritious fresh meals and clean hydration bowls for 5 street dogs for a week.';
    return 'Directly supports volunteer medical supplies and rescue transport.';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmount <= 0 || !name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleDownloadReceipt = () => {
    const receiptContent = `
========================================
       VETTA CLUB FOUNDATION
  Registered Public Charitable Trust
   Sec 80G Approval: AAATV1234F20241
========================================

Receipt No: VETTA-2026-${Math.floor(100000 + Math.random() * 900000)}
Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}

Donor Name: ${name}
Donor Email: ${email}
PAN: ${pan || 'Not Provided (Exemption Under Form 10BE)'}

Contribution Amount: INR ₹${currentAmount.toLocaleString('en-IN')}
Frequency: ${frequency === 'monthly' ? 'Monthly Supporter' : 'One-Time Contribution'}
Cause Allocated: ${cause}

Status: Verified & Acknowledged
Thank you for supporting small actions that create real change.
========================================
Website: vettaclub.in | Contact: hello@vettaclub.in
`;

    const blob = new Blob([receiptContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `VettaClub_Donation_Receipt_${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FAF9F5] w-full max-w-lg rounded-3xl border border-[#183B2B]/20 shadow-2xl overflow-hidden my-8 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="donation-modal-title"
      >
        {/* Modal Header */}
        <div className="p-6 bg-[#183B2B] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Heart className="w-4 h-4 text-[#E8A598] fill-current" />
            </div>
            <div>
              <h3 id="donation-modal-title" className="text-lg font-serif font-semibold">
                Support Vetta Club
              </h3>
              <p className="text-xs text-[#A8C7B8]">100% directly allocated to field operations</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[78vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#EBF6EE] text-[#183B2B] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-serif font-semibold text-[#183B2B] mb-2">
                Thank You, {name}!
              </h4>
              <p className="text-sm text-[#46564D] max-w-sm mb-6 leading-relaxed">
                Your generous pledge of <strong className="text-[#183B2B]">₹{currentAmount.toLocaleString('en-IN')}</strong> will turn immediately into medicine, food, and protective care on the ground.
              </p>

              <div className="w-full bg-white p-4 rounded-2xl border border-[#183B2B]/10 text-left text-xs space-y-2 mb-6 text-[#4F6156]">
                <div className="flex justify-between">
                  <span>Frequency:</span>
                  <strong className="text-[#183B2B]">{frequency === 'monthly' ? 'Monthly Supporter' : 'One-Time'}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Allocated Initiative:</span>
                  <strong className="text-[#183B2B] truncate max-w-[200px]">{cause}</strong>
                </div>
                <div className="flex justify-between">
                  <span>80G Tax Exemption:</span>
                  <strong className="text-[#183B2B]">Eligible (50% Deduction)</strong>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={handleDownloadReceipt}
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download 80G Receipt</span>
                </button>
                <button
                  onClick={handleClose}
                  className="py-3 px-5 rounded-xl text-xs font-semibold text-[#183B2B] bg-[#EFECE3] hover:bg-[#E5DFD4] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Frequency Selector */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#EAE5DA] rounded-xl border border-[#183B2B]/10">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    frequency === 'once'
                      ? 'bg-white text-[#183B2B] shadow-xs'
                      : 'text-[#4A5D52] hover:text-[#183B2B]'
                  }`}
                >
                  One-Time Contribution
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    frequency === 'monthly'
                      ? 'bg-white text-[#183B2B] shadow-xs'
                      : 'text-[#4A5D52] hover:text-[#183B2B]'
                  }`}
                >
                  Become a Monthly Supporter
                </button>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#304137] mb-2.5">
                  Select Amount (INR)
                </label>
                <div className="grid grid-cols-4 gap-2.5 mb-3">
                  {[500, 1000, 2500, 5000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount('');
                      }}
                      className={`py-2.5 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                        selectedAmount === amt
                          ? 'bg-[#183B2B] text-white border-[#183B2B] shadow-xs'
                          : 'bg-white text-[#183B2B] border-[#183B2B]/15 hover:border-[#183B2B]/40'
                      }`}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[#6B7D72] font-semibold">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="100"
                    placeholder="Or enter custom amount in INR"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount('custom');
                    }}
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-[#183B2B]/20 bg-white text-xs text-[#183B2B] placeholder:text-[#8D9F94] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30"
                  />
                </div>

                {/* Live Impact Preview */}
                {currentAmount > 0 && (
                  <div className="mt-2.5 p-3 rounded-xl bg-[#EAF2ED] border border-[#183B2B]/10 text-xs text-[#204A36]">
                    <span className="font-semibold block mb-0.5">Your Impact:</span>
                    {getImpactDescription(currentAmount)}
                  </div>
                )}
              </div>

              {/* Cause Allocation */}
              <div>
                <label className="block text-xs font-semibold text-[#304137] mb-2" htmlFor="donation-cause">
                  Allocate Your Support
                </label>
                <select
                  id="donation-cause"
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#183B2B]/20 bg-white text-xs text-[#183B2B] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30"
                >
                  <option value="General Mission & Emergency Fund">General Mission & Emergency Fund (Where Most Needed)</option>
                  <option value="Animal Rescue & Trauma Care">Animal Rescue & Emergency Veterinary Care</option>
                  <option value="Urban Greening & Tree Plantation">Urban Greening & Native Afforestation</option>
                  <option value="Neighborhood Sanitation & Cleanup">Clean Streets & Civic Infrastructure</option>
                  <option value="Community Food Security">Community Nutrition & Seasonal Aid</option>
                </select>
              </div>

              {/* Donor Contact Details */}
              <div className="space-y-3 pt-2 border-t border-[#183B2B]/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#304137] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#183B2B]/20 bg-white text-xs text-[#183B2B] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#304137] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#183B2B]/20 bg-white text-xs text-[#183B2B] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#304137] mb-1">
                    PAN Card (Optional, for 80G Tax Exemption Certificate)
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    placeholder="ABCDE1234F"
                    value={pan}
                    onChange={(e) => setPan(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 rounded-lg border border-[#183B2B]/20 bg-white text-xs text-[#183B2B] uppercase placeholder:normal-case focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#63776C]">
                <ShieldCheck className="w-4 h-4 text-[#183B2B] shrink-0" />
                <span>Simulated Secure Payment Flow (Frontend Prototype). No card details required.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || currentAmount <= 0}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Processing Contribution...</span>
                ) : (
                  <>
                    <span>Confirm ₹{currentAmount.toLocaleString('en-IN')} Support</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
