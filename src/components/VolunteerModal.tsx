import React, { useState } from 'react';
import { X, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Indiranagar');
  const [interests, setInterests] = useState<string[]>(['Animal Rescue & Care']);
  const [availability, setAvailability] = useState('Weekend Mornings (Sat/Sun)');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const toggleInterest = (item: string) => {
    if (interests.includes(item)) {
      setInterests(interests.filter((i) => i !== item));
    } else {
      setInterests([...interests, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
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
        aria-labelledby="volunteer-modal-title"
      >
        {/* Header */}
        <div className="p-6 bg-[#183B2B] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Users className="w-4 h-4 text-[#A3D9C9]" />
            </div>
            <div>
              <h3 id="volunteer-modal-title" className="text-lg font-serif font-semibold">
                Join Vetta Club as a Volunteer
              </h3>
              <p className="text-xs text-[#A8C7B8]">Small actions. Real change.</p>
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

        {/* Body */}
        <div className="p-6 sm:p-7 max-h-[78vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#EBF6EE] text-[#183B2B] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-serif font-semibold text-[#183B2B] mb-2">
                Welcome to the Family, {name}!
              </h4>
              <p className="text-sm text-[#46564D] max-w-sm mb-6 leading-relaxed">
                We have added you to our Bangalore volunteer roster. Our community coordinator will invite you to the upcoming Saturday morning orientation and WhatsApp volunteer chapter.
              </p>
              <div className="w-full bg-white p-4 rounded-2xl border border-[#183B2B]/10 text-xs text-left space-y-1.5 mb-6 text-[#4F6156]">
                <div><strong>Selected Focus:</strong> {interests.join(', ') || 'General volunteer'}</div>
                <div><strong>Availability:</strong> {availability}</div>
                <div><strong>Orientation location:</strong> Cubbon Park / Virtual Link</div>
              </div>
              <button
                onClick={handleClose}
                className="py-3 px-8 rounded-xl text-xs font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-[#304137] mb-2">
                  Areas You Would Like to Support
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'Animal Rescue & Care',
                    'Tree Planting & Lakes',
                    'Community Meal Support',
                    'Street Awareness Drives',
                    'Photography & Stories',
                    'Veterinary / Medical Aid'
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleInterest(item)}
                      className={`p-2.5 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                        interests.includes(item)
                          ? 'bg-[#183B2B] text-white border-[#183B2B]'
                          : 'bg-white text-[#2F4136] border-[#183B2B]/15 hover:border-[#183B2B]/40'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-semibold text-[#304137] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aditi Rao"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#183B2B]/20 bg-white text-xs text-[#183B2B] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#304137] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#183B2B]/20 bg-white text-xs text-[#183B2B] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-semibold text-[#304137] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="aditi@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#183B2B]/20 bg-white text-xs text-[#183B2B] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#304137] mb-1">
                    Neighborhood / Ward
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Indiranagar, HSR, Koramangala"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#183B2B]/20 bg-white text-xs text-[#183B2B] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#304137] mb-1">
                  Availability
                </label>
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#183B2B]/20 bg-white text-xs text-[#183B2B] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30"
                >
                  <option value="Weekend Mornings (Sat/Sun)">Weekend Mornings (Sat / Sun · 7:30 AM – 11:00 AM)</option>
                  <option value="Weekday Evenings">Weekday Evenings (5:30 PM – 7:30 PM)</option>
                  <option value="On-Call Emergency Squad">On-Call Emergency Transport Squad</option>
                  <option value="Flexible Remote (Content/Design)">Flexible Remote (Documentation / Design / Social)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#304137] mb-1">
                  Any skills, vehicle access, or personal message? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. I have a two-wheeler and can help with feeding rounds..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#183B2B]/20 bg-white text-xs text-[#183B2B] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <span>Submit Volunteer Application</span>
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
