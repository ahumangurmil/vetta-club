import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Send, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate real frontend response latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      topic: 'General Inquiry',
      message: ''
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Organization Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#507564] font-semibold block mb-3">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#183B2B] leading-tight mb-6">
                Start a conversation with Vetta Club.
              </h2>
              <p className="text-base text-[#46564D] leading-relaxed mb-8">
                Whether you want to report an injured street animal in your ward, propose a tree-planting drive in your neighborhood, or explore corporate volunteering partnerships, our core team is here to listen.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6 mb-8 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0ECE1] text-[#183B2B] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#667A70] block">Official Email</span>
                    <a
                      href="mailto:hello@vettaclub.in"
                      className="font-medium text-[#183B2B] hover:underline"
                    >
                      hello@vettaclub.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0ECE1] text-[#183B2B] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#667A70] block">Helpline & WhatsApp Coordination</span>
                    <a
                      href="tel:+919845021940"
                      className="font-medium text-[#183B2B] hover:underline"
                    >
                      +91 98450 21940
                    </a>
                    <span className="text-xs text-[#819489] block mt-0.5">Mon–Sun · 8:00 AM – 8:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0ECE1] text-[#183B2B] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#667A70] block">Registered Address</span>
                    <p className="font-medium text-[#183B2B]">
                      Vetta Club Foundation, #42/1, 2nd Main, Indiranagar, Bangalore 560038, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Hotline Banner */}
            <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#183B2B]/10 text-xs text-[#4F6156]">
              <span className="font-semibold text-[#183B2B] block mb-1">For Urgent Wildlife / Animal Trauma:</span>
              Please include location landmarks, photos, and current condition when messaging our volunteer helpline for rapid triage.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#183B2B]/10 p-8 sm:p-10 shadow-xs">
              {isSuccess ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#EAF5EF] text-[#183B2B] flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[#183B2B] mb-2">
                    Message Received With Gratitude
                  </h3>
                  <p className="text-sm text-[#46564D] max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-[#183B2B]">{formData.name}</strong>. A Vetta Club volunteer coordinator will review your note and get back to you at <strong className="text-[#183B2B]">{formData.email}</strong> within 24–48 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-[#183B2B] bg-[#EFECE3] hover:bg-[#E5DFD4] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-serif font-semibold text-[#183B2B] mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#63776C] mb-6">
                    Fill in your details below and we will route your inquiry to the relevant team.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#304137] mb-2" htmlFor="name">
                        Your Full Name <span className="text-[#B8583B]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Meera Raman"
                        className="w-full px-4 py-3 rounded-xl border border-[#183B2B]/20 bg-[#FAF9F5] text-sm text-[#183B2B] placeholder:text-[#94A59C] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30 focus:border-[#183B2B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#304137] mb-2" htmlFor="email">
                        Email Address <span className="text-[#B8583B]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. meera@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#183B2B]/20 bg-[#FAF9F5] text-sm text-[#183B2B] placeholder:text-[#94A59C] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30 focus:border-[#183B2B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#304137] mb-2" htmlFor="topic">
                      Inquiry Topic
                    </label>
                    <select
                      id="topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#183B2B]/20 bg-[#FAF9F5] text-sm text-[#183B2B] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30 focus:border-[#183B2B]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Animal Medical Support">Report Injured Street Animal</option>
                      <option value="Volunteering">Volunteering Opportunity</option>
                      <option value="Community Greening Drive">Propose Ward Greening Drive</option>
                      <option value="Corporate CSR">Corporate CSR Partnership</option>
                      <option value="Donation / 80G Receipt">Donation or 80G Tax Receipt</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#304137] mb-2" htmlFor="message">
                      Message <span className="text-[#B8583B]">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details, location landmarks, or specific questions..."
                      className="w-full px-4 py-3 rounded-xl border border-[#183B2B]/20 bg-[#FAF9F5] text-sm text-[#183B2B] placeholder:text-[#94A59C] focus:outline-none focus:ring-2 focus:ring-[#183B2B]/30 focus:border-[#183B2B]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-[#183B2B] hover:bg-[#112B1F] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
