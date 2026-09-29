import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ADVISOR_PROFILE } from '../data/content';
import { Calendar, Clock, Video, CheckCircle2, Shield, ExternalLink, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';

export const BookingSection: React.FC = () => {
  const { activeTheme } = useTheme();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    province: 'British Columbia',
    topics: [] as string[],
    preferredTime: 'Morning (9am - 12pm)',
    notes: '',
  });

  const availableProvinces = [
    'British Columbia',
    'Ontario',
    'Alberta',
    'Quebec',
    'Manitoba',
    'Saskatchewan',
    'Nova Scotia',
    'New Brunswick',
    'Other / Territory',
  ];

  const financialTopics = [
    'TFSA / RRSP / FHSA Accounts',
    'Life Insurance (Term or Whole)',
    'Critical Illness & Disability',
    'RESP (Children’s Education)',
    'New Immigrant Financial Setup',
    'Business / Corporate Solutions',
  ];

  const handleTopicToggle = (topic: string) => {
    setFormData(prev => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter(t => t !== topic)
        : [...prev.topics, topic],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: [activeTheme.primary, activeTheme.accent, '#10B981'],
    });
  };

  return (
    <section id="book-consultation" className="py-16 sm:py-20 lg:py-28 bg-white transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16"
        >
          <div
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor: activeTheme.badgeBg,
              color: activeTheme.badgeText,
            }}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Direct Calendly & Inquiries</span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: activeTheme.textDark }}
          >
            Schedule Your Free{' '}
            <span className="italic font-serif font-normal" style={{ color: activeTheme.primary }}>
              Strategy Session.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed">
            Select a convenient time directly on Calendly or send an inquiry below. We will discuss your goals, answer your questions in plain English, and map out your next steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Calendly Integration Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border shadow-md space-y-6 text-left relative overflow-hidden"
            style={{
              backgroundColor: activeTheme.bgLight,
              borderColor: activeTheme.border,
            }}
          >
            {/* Visual Working Session Photo */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border shadow-xs" style={{ borderColor: activeTheme.border }}>
              <img
                src={ADVISOR_PROFILE.images.workingDesk}
                alt="1-on-1 Strategy Session with Sarmila Reddy"
                className="w-full h-full object-cover object-[center_25%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                <span className="text-[11px] font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  Virtual & In-Person Sessions
                </span>
                <span className="text-[11px] font-semibold text-emerald-300">
                  100% Free
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Instant Online Booking
              </span>
              <h3 className="font-serif text-2xl font-bold" style={{ color: activeTheme.textDark }}>
                Book on Sarmila’s Calendar
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                Direct integration with Calendly. Pick an open slot that fits your schedule, and receive an instant Zoom meeting link.
              </p>
            </div>

            {/* Calendly Details Box */}
            <div className="space-y-3 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 text-xs text-stone-700">
                <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                <span>30 Minutes • Confidential Strategy Call</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-stone-700">
                <Video className="w-4 h-4 text-stone-400 shrink-0" />
                <span>Web conferencing details provided upon confirmation</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-stone-700">
                <Shield className="w-4 h-4 text-stone-400 shrink-0" />
                <span>100% Free • No out-of-pocket fees or obligation</span>
              </div>
            </div>

            {/* Direct Calendly Link Button */}
            <div className="space-y-3">
              <a
                id="direct-calendly-external-link"
                href={ADVISOR_PROFILE.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-white shadow-md transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: activeTheme.primary }}
              >
                <span>Open calendly.com/{ADVISOR_PROFILE.calendlyHandle}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-center text-[11px] text-stone-500">
                Direct calendar link for verified booking.
              </p>
            </div>

            <div className="pt-4 border-t text-xs text-stone-500 space-y-1" style={{ borderColor: activeTheme.border }}>
              <p className="font-semibold text-stone-700">Questions before booking?</p>
              <p>Email: <a href={`mailto:${ADVISOR_PROFILE.email}`} className="font-medium underline text-stone-800">{ADVISOR_PROFILE.email}</a></p>
              <p>Instagram: <a href={`https://instagram.com/${ADVISOR_PROFILE.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="font-medium underline text-stone-800">{ADVISOR_PROFILE.instagram}</a></p>
            </div>
          </motion.div>

          {/* Right Column: Custom Strategy Request / Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 lg:p-10 rounded-3xl border bg-white shadow-sm space-y-6 text-left"
            style={{ borderColor: activeTheme.border }}
          >
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center shadow-inner"
                  style={{ backgroundColor: activeTheme.primaryLight, color: activeTheme.primary }}
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold" style={{ color: activeTheme.textDark }}>
                  Thank You, {formData.fullName || 'Valued Client'}!
                </h3>
                <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
                  Your strategy request has been sent directly to Sarmila Reddy. She will review your details and reach out within 24 hours to confirm your consultation time.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold underline"
                    style={{ color: activeTheme.primary }}
                  >
                    Submit another question or request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold" style={{ color: activeTheme.textDark }}>
                    Send an Inquiry or Quote Request
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Prefer email or phone? Fill out this quick form and Sarmila will connect with you.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jessica Chen"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm text-stone-800 focus:outline-none focus:ring-2"
                      style={{ borderColor: activeTheme.border }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jessica@example.ca"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm text-stone-800 focus:outline-none focus:ring-2"
                      style={{ borderColor: activeTheme.border }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(604) 555-0199"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm text-stone-800 focus:outline-none focus:ring-2"
                      style={{ borderColor: activeTheme.border }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                      Province / Territory *
                    </label>
                    <select
                      value={formData.province}
                      onChange={e => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm text-stone-800 focus:outline-none focus:ring-2 bg-white"
                      style={{ borderColor: activeTheme.border }}
                    >
                      {availableProvinces.map(prov => (
                        <option key={prov} value={prov}>
                          {prov}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Topics of Interest */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                    What would you like to focus on? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {financialTopics.map(topic => {
                      const isSelected = formData.topics.includes(topic);
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => handleTopicToggle(topic)}
                          className={`p-2 rounded-xl border text-left text-xs transition-all flex items-center gap-2 ${
                            isSelected ? 'font-semibold' : 'text-stone-600 hover:bg-stone-50'
                          }`}
                          style={{
                            borderColor: isSelected ? activeTheme.primary : activeTheme.border,
                            backgroundColor: isSelected ? activeTheme.primaryLight : '#FFFFFF',
                            color: isSelected ? activeTheme.primary : undefined,
                          }}
                        >
                          <div
                            className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-white text-emerald-700' : 'border-stone-300'
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 fill-current" />}
                          </div>
                          <span>{topic}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Optional Notes or Specific Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell me a bit about your family or what you'd like to achieve..."
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border text-sm text-stone-800 focus:outline-none focus:ring-2"
                    style={{ borderColor: activeTheme.border }}
                  />
                </div>

                <button
                  type="submit"
                  id="submit-inquiry-form-btn"
                  className="w-full min-h-[48px] py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-white shadow-md transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ backgroundColor: activeTheme.primary }}
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Consultation Request</span>
                </button>

                <p className="text-[11px] text-stone-400 text-center">
                  🔒 We respect your privacy. Your information is never sold or shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
