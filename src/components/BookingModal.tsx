import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ADVISOR_PROFILE } from '../data/content';
import { X, Calendar, Clock, Video, CheckCircle, ExternalLink, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { activeTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'calendly' | 'quickForm'>('calendly');
  const [submitted, setSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('TFSA & RRSP Wealth Plan');

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: [activeTheme.primary, activeTheme.accent, '#10B981'],
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            id="booking-modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl shadow-2xl border bg-white transition-all max-h-[90vh] overflow-y-auto z-10 my-auto"
            style={{ borderColor: activeTheme.border }}
          >
            {/* Close Button */}
            <button
              id="close-booking-modal-btn"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6 text-left pr-8">
          <div className="w-12 h-12 rounded-full overflow-hidden border p-0.5 bg-white shadow-xs shrink-0 flex items-center justify-center"
            style={{ borderColor: activeTheme.accent }}
          >
            <img
              src={ADVISOR_PROFILE.images.logo}
              alt="Sarmila Reddy"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-1">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block"
              style={{
                backgroundColor: activeTheme.badgeBg,
                color: activeTheme.badgeText,
              }}
            >
              Complimentary Consultation
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight" style={{ color: activeTheme.textDark }}>
              Book with Sarmila Reddy
            </h3>
            <p className="text-xs text-stone-500">
              30-Minute 1-on-1 Virtual Strategy Session • Zero Obligation
            </p>
          </div>
        </div>

        {/* Switcher Tabs */}
        <div className="flex border-b mb-6 text-xs font-semibold" style={{ borderColor: activeTheme.border }}>
          <button
            onClick={() => setActiveTab('calendly')}
            className={`pb-2.5 px-4 transition-all border-b-2 ${
              activeTab === 'calendly' ? 'border-amber-600 font-bold' : 'border-transparent text-stone-400'
            }`}
            style={{
              borderColor: activeTab === 'calendly' ? activeTheme.primary : 'transparent',
              color: activeTab === 'calendly' ? activeTheme.primary : undefined,
            }}
          >
            Direct Calendly Booking
          </button>
          <button
            onClick={() => setActiveTab('quickForm')}
            className={`pb-2.5 px-4 transition-all border-b-2 ${
              activeTab === 'quickForm' ? 'border-amber-600 font-bold' : 'border-transparent text-stone-400'
            }`}
            style={{
              borderColor: activeTab === 'quickForm' ? activeTheme.primary : 'transparent',
              color: activeTab === 'quickForm' ? activeTheme.primary : undefined,
            }}
          >
            Quick Request Form
          </button>
        </div>

        {activeTab === 'calendly' ? (
          <div className="space-y-5 text-left">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2 text-xs text-stone-600">
              <div className="flex items-center gap-2 text-stone-800 font-semibold">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>30-Min Strategy Call via Zoom</span>
              </div>
              <p className="leading-relaxed">
                Connect directly to Sarmila's live calendar. You will be able to select your Canadian time zone and pick from upcoming morning, afternoon, or evening availability.
              </p>
            </div>

            <div className="p-6 rounded-2xl border text-center space-y-3" style={{ borderColor: activeTheme.border }}>
              <div
                className="w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white"
                style={{ backgroundColor: activeTheme.primary }}
              >
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold" style={{ color: activeTheme.textDark }}>
                Open Calendly Scheduler
              </h4>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Click below to launch <strong>calendly.com/{ADVISOR_PROFILE.calendlyHandle}</strong> in a secure tab.
              </p>

              <a
                id="modal-calendly-launch-btn"
                href={ADVISOR_PROFILE.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full min-h-[46px] py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-white shadow-md transition-all hover:brightness-110 active:scale-95 cursor-pointer"
                style={{ backgroundColor: activeTheme.primary }}
              >
                <span>Proceed to Calendly.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ) : (
          <div>
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div
                  className="w-14 h-14 rounded-full mx-auto flex items-center justify-center text-emerald-700 bg-emerald-100"
                >
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-xl font-bold" style={{ color: activeTheme.textDark }}>
                  Request Received!
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Sarmila Reddy will review your inquiry and follow up within 24 hours via email at <strong>{clientEmail}</strong>.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 px-6 py-2 rounded-xl text-xs font-semibold border"
                  style={{ borderColor: activeTheme.border }}
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First & Last Name"
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border text-xs text-stone-800 focus:outline-none focus:ring-1"
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
                    placeholder="email@example.ca"
                    value={clientEmail}
                    onChange={e => setClientEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border text-xs text-stone-800 focus:outline-none focus:ring-1"
                    style={{ borderColor: activeTheme.border }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Phone (for appointment SMS reminder) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(604) 555-0100"
                    value={clientPhone}
                    onChange={e => setClientPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border text-xs text-stone-800 focus:outline-none focus:ring-1"
                    style={{ borderColor: activeTheme.border }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                    Primary Area of Interest
                  </label>
                  <select
                    value={selectedTopic}
                    onChange={e => setSelectedTopic(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border text-xs text-stone-800 bg-white"
                    style={{ borderColor: activeTheme.border }}
                  >
                    <option value="TFSA & RRSP Wealth Plan">TFSA & RRSP Wealth Plan</option>
                    <option value="Family Life & Critical Illness Insurance">Family Life & Critical Illness Insurance</option>
                    <option value="First Home Savings Account (FHSA)">First Home Savings Account (FHSA)</option>
                    <option value="RESP (Kids Education Grant)">RESP (Kids Education Grant)</option>
                    <option value="New Immigrant Financial Setup">New Immigrant Financial Setup</option>
                    <option value="Business Owner & Corporate Strategy">Business Owner & Corporate Strategy</option>
                  </select>
                </div>

                <button
                  type="submit"
                  id="modal-submit-request-btn"
                  className="w-full min-h-[46px] py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-white shadow-md transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ backgroundColor: activeTheme.primary }}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Consultation</span>
                </button>
              </form>
            )}
          </div>
        )}
      </motion.div>
    </div>
      )}
    </AnimatePresence>
  );
};
