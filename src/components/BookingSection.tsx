import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ADVISOR_PROFILE } from '../data/content';
import { Calendar, Clock, Video, CheckCircle2, Shield, ExternalLink, Send, Sparkles, Check } from 'lucide-react';
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
    { id: 'TFSA / RRSP / FHSA Accounts', label: 'TFSA & RRSP Wealth' },
    { id: 'Life Insurance (Term or Whole)', label: 'Life Insurance' },
    { id: 'Critical Illness & Disability', label: 'Living Benefits' },
    { id: 'RESP (Children’s Education)', label: 'RESP Education' },
    { id: 'New Immigrant Financial Setup', label: 'Newcomer Setup' },
    { id: 'Business / Corporate Solutions', label: 'Corporate & Business' },
  ];

  const handleTopicToggle = (topicId: string) => {
    setFormData(prev => ({
      ...prev,
      topics: prev.topics.includes(topicId)
        ? prev.topics.filter(t => t !== topicId)
        : [...prev.topics, topicId],
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
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold"
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

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
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
            className="lg:col-span-5 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border space-y-5 sm:space-y-6 text-left relative overflow-hidden"
            style={{
              backgroundColor: activeTheme.bgLight,
              borderColor: activeTheme.border,
            }}
          >
            {/* Visual Working Session Photo */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
              <img
                src={ADVISOR_PROFILE.images.workingDesk}
                alt="1-on-1 Strategy Session with Sarmila Reddy"
                className="w-full h-full object-cover object-[center_25%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                <span className="text-xs font-medium bg-black/60 px-3 py-1 rounded-full text-white">
                  Virtual & In-Person Sessions
                </span>
                <span className="text-xs font-semibold text-emerald-300">
                  100% Free
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Instant Online Booking
              </span>
              <h3 className="font-serif text-2xl font-bold" style={{ color: activeTheme.textDark }}>
                Book on Sarmila’s Calendar
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Direct integration with Calendly. Pick an open slot that fits your schedule, and receive an instant Zoom meeting link.
              </p>
            </div>

            {/* Calendly Details with Clean Divider */}
            <div className="space-y-3 py-3 border-y border-stone-200/80">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                <span>30 Minutes • Confidential Strategy Call</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                <Video className="w-4 h-4 text-stone-400 shrink-0" />
                <span>Web conferencing details provided upon confirmation</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
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
                className="w-full min-h-[48px] py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: activeTheme.primary }}
              >
                <span>Open calendly.com/{ADVISOR_PROFILE.calendlyHandle}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-center text-xs text-stone-500">
                Direct calendar link for verified booking.
              </p>
            </div>

            <div className="pt-4 border-t text-xs sm:text-sm text-stone-600 space-y-1" style={{ borderColor: activeTheme.border }}>
              <p className="font-semibold text-stone-800">Questions before booking?</p>
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
            className="lg:col-span-7 p-5 sm:p-7 rounded-2xl sm:rounded-3xl border bg-white space-y-4 text-left shadow-xs"
            style={{ borderColor: activeTheme.border }}
          >
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                  style={{ backgroundColor: activeTheme.primaryLight, color: activeTheme.primary }}
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold" style={{ color: activeTheme.textDark }}>
                  Thank You, {formData.fullName || 'Valued Client'}!
                </h3>
                <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
                  Your strategy inquiry details have been prepared for Sarmila Reddy. To guarantee immediate delivery or instantly secure your time slot, you can choose below:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`mailto:${ADVISOR_PROFILE.email}?subject=${encodeURIComponent(`Strategy Session Inquiry - ${formData.fullName}`)}&body=${encodeURIComponent(`Name: ${formData.fullName}\nMobile: ${formData.phone}\nEmail: ${formData.email.trim() || 'Callback Requested via Phone/SMS'}\nProvince: ${formData.province}\nTopics: ${formData.topics.join(', ') || 'General'}\nNotes: ${formData.notes || 'N/A'}`)}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white transition-all hover:brightness-110"
                    style={{ backgroundColor: activeTheme.primary }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </a>
                  <a
                    href={ADVISOR_PROFILE.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold border text-stone-700 bg-stone-50 hover:bg-stone-100 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Pick Time on Calendly</span>
                  </a>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold underline cursor-pointer"
                    style={{ color: activeTheme.primary }}
                  >
                    Edit details or submit another question
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight" style={{ color: activeTheme.textDark }}>
                      Send an Inquiry or Quote Request
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                      Fast 20-second form • Sarmila connects within 24 hours.
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold shrink-0"
                    style={{ backgroundColor: activeTheme.primaryLight, color: activeTheme.primary }}
                  >
                    <Clock className="w-3 h-3" />
                    <span>Quick 20s Form</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="booking-full-name" className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="booking-full-name"
                      name="name"
                      autoComplete="name"
                      type="text"
                      required
                      placeholder="e.g. Jessica Chen"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2"
                      style={{ borderColor: activeTheme.border }}
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-phone-number" className="block text-xs font-semibold text-stone-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      id="booking-phone-number"
                      name="tel"
                      autoComplete="tel"
                      type="tel"
                      required
                      placeholder="(604) 555-0199"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2"
                      style={{ borderColor: activeTheme.border }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="booking-email-address" className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address <span className="font-normal text-stone-400">(Optional)</span>
                    </label>
                    <input
                      id="booking-email-address"
                      name="email"
                      autoComplete="email"
                      type="email"
                      placeholder="jessica@example.ca"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2"
                      style={{ borderColor: activeTheme.border }}
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-province" className="block text-xs font-semibold text-stone-700 mb-1">
                      Province / Territory
                    </label>
                    <select
                      id="booking-province"
                      value={formData.province}
                      onChange={e => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2 bg-white"
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

                {/* Topics of Interest (Compact Horizontal Pills) */}
                <div>
                  <span id="booking-topics-group-label" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Focus Areas (tap to select):
                  </span>
                  <div className="flex flex-wrap gap-1.5" role="group" aria-labelledby="booking-topics-group-label">
                    {financialTopics.map(topic => {
                      const isSelected = formData.topics.includes(topic.id);
                      return (
                        <button
                          key={topic.id}
                          type="button"
                          role="checkbox"
                          aria-checked={isSelected}
                          aria-label={topic.id}
                          onClick={() => handleTopicToggle(topic.id)}
                          className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
                            isSelected
                              ? 'font-semibold text-white'
                              : 'bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium'
                          }`}
                          style={{
                            backgroundColor: isSelected ? activeTheme.primary : undefined,
                          }}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[2.5]" />}
                          <span>{topic.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Compact Note Input */}
                <div>
                  <label htmlFor="booking-notes" className="block text-xs font-semibold text-stone-700 mb-1">
                    Optional Note or Questions
                  </label>
                  <input
                    id="booking-notes"
                    type="text"
                    placeholder="e.g. Best time to call or specific goals..."
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2"
                    style={{ borderColor: activeTheme.border }}
                  />
                </div>

                <button
                  type="submit"
                  id="submit-inquiry-form-btn"
                  className="w-full min-h-[46px] py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  style={{ backgroundColor: activeTheme.primary }}
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quick Request — 100% Free</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-stone-500">
                  <span>🔒 Strictly Confidential</span>
                  <span>•</span>
                  <span>⚡ 24h Response</span>
                  <span>•</span>
                  <span>No obligations</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
