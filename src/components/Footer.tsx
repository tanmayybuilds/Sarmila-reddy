import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ADVISOR_PROFILE } from '../data/content';
import { Mail, MapPin, Instagram, Calendar, X } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // Keyboard accessibility for legal modals
  useEffect(() => {
    if (!activeLegalModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveLegalModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLegalModal]);

  return (
    <>
      <footer
        className="border-t transition-colors duration-500 text-stone-700 bg-white"
        style={{ borderColor: activeTheme.border }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 pb-20 sm:pb-10">
          {/* Main 4 Equal Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start text-left">
            {/* Col 1: Brand & Identity */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden p-0.5 bg-stone-50 border border-stone-200 shrink-0 flex items-center justify-center">
                  <img
                    src={ADVISOR_PROFILE.images.logo}
                    alt="Sarmila Reddy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold leading-tight" style={{ color: activeTheme.textDark }}>
                    Sarmila Reddy
                  </h3>
                  <p className="text-[11px] text-stone-500 font-medium">
                    Financial Advisory • Canada
                  </p>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Empowering Canadian families, professionals, and newcomers with fiduciary-first financial strategies.
              </p>

              <div className="flex items-center gap-2 pt-0.5">
                <a
                  href={`https://instagram.com/${ADVISOR_PROFILE.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:border-stone-400 hover:bg-stone-50 transition-colors"
                  title="Follow Sarmila on Instagram"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://${ADVISOR_PROFILE.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-7 px-2 rounded-full border border-stone-200 flex items-center justify-center text-[10px] font-mono font-semibold text-stone-600 hover:text-stone-900 hover:border-stone-400 hover:bg-stone-50 transition-colors"
                  title="Official Website"
                  aria-label="Official Website"
                >
                  .CA
                </a>
                <a
                  href={ADVISOR_PROFILE.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:border-stone-400 hover:bg-stone-50 transition-colors"
                  title="Calendly Booking"
                  aria-label="Calendly"
                >
                  <Calendar className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`mailto:${ADVISOR_PROFILE.email}`}
                  className="w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:border-stone-400 hover:bg-stone-50 transition-colors"
                  title="Email Sarmila"
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Navigation
              </h3>
              <ul className="space-y-1.5 text-xs text-stone-600">
                <li><a href="#services" className="hover:underline">Advisory Services</a></li>
                <li><a href="#who-i-help" className="hover:underline">Who I Help in Canada</a></li>
                <li><a href="#calculator" className="hover:underline">Wealth Calculator</a></li>
                <li><a href="#accounts" className="hover:underline">TFSA & RRSP Guide</a></li>
                <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
                <li>
                  <button
                    onClick={onOpenBooking}
                    className="hover:underline cursor-pointer font-semibold flex items-center gap-1 text-xs"
                    style={{ color: activeTheme.primary }}
                  >
                    <span>Book 1-on-1 Session</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Key Solutions */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Solutions
              </h3>
              <ul className="space-y-1.5 text-xs text-stone-600">
                <li><a href="#services" className="hover:underline">TFSA, RRSP & FHSA</a></li>
                <li><a href="#services" className="hover:underline">Life Insurance (Term & Whole)</a></li>
                <li><a href="#services" className="hover:underline">Critical Illness & Disability</a></li>
                <li><a href="#services" className="hover:underline">RESP Education Planning</a></li>
                <li><a href="#services" className="hover:underline">New Immigrant Financial Setup</a></li>
                <li><a href="#services" className="hover:underline">Corporate & Business Wealth</a></li>
              </ul>
            </div>

            {/* Col 4: Direct Contact & Office */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Direct Contact
              </h3>
              <div className="space-y-2 text-xs text-stone-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                  <span>British Columbia & Canada-Wide (Virtual)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <a href={`mailto:${ADVISOR_PROFILE.email}`} className="hover:underline">
                    {ADVISOR_PROFILE.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <a href={ADVISOR_PROFILE.calendlyUrl} target="_blank" rel="noreferrer" className="hover:underline">
                    calendly.com/{ADVISOR_PROFILE.calendlyHandle}
                  </a>
                </div>
              </div>

              <div className="pt-1 text-[11px]">
                <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>100% Free Consultations</span>
                </span>
              </div>
            </div>
          </div>

          {/* Regulatory & Compliance Disclaimers */}
          <div className="mt-7 pt-5 border-t space-y-2 text-left" style={{ borderColor: activeTheme.border }}>
            <p className="text-[11px] text-stone-500 leading-relaxed max-w-4xl">
              <strong className="text-stone-700 font-semibold">Regulatory Notice: </strong>
              Sarmila Reddy is an independent licensed financial advisor and Life License Qualification Program (LLQP) certified professional in Canada. All initial strategy sessions are 100% complimentary with no direct client payments accepted through this website. Financial applications, insurance underwriting, and registered investments are executed through licensed Canadian carriers and institutions under compliance oversight. Calculations provide hypothetical modeling only and do not constitute formal legal, tax, or binding investment advice.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-stone-500 text-left border-t border-stone-100">
              <p>© {new Date().getFullYear()} Sarmila Reddy. All rights reserved.</p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveLegalModal('privacy')}
                  className="hover:underline cursor-pointer"
                >
                  Privacy Policy (PIPEDA)
                </button>
                <span>•</span>
                <button
                  onClick={() => setActiveLegalModal('terms')}
                  className="hover:underline cursor-pointer"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {activeLegalModal === 'privacy' && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border text-left relative">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-400 cursor-pointer"
              aria-label="Close Privacy Policy"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 id="privacy-modal-title" className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Privacy Policy (PIPEDA Compliance)
            </h3>
            <p className="text-xs text-stone-500 mb-4">Last Updated: Canadian Regulatory Revision 2026</p>
            <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
              <p>
                Sarmila Reddy respects your privacy and is committed to safeguarding personal information under Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy laws.
              </p>
              <h4 className="font-bold text-stone-800">1. Information We Collect</h4>
              <p>
                Contact information (name, email, telephone number, province) submitted voluntarily via Calendly or our consultation inquiry form to schedule meetings and provide financial evaluations.
              </p>
              <h4 className="font-bold text-stone-800">2. How Information is Used</h4>
              <p>
                To confirm appointments, understand your financial objectives, and discuss appropriate Canadian insurance and wealth strategies. We do NOT sell, rent, or trade your personal information to third-party marketers.
              </p>
              <h4 className="font-bold text-stone-800">3. CASL Compliance</h4>
              <p>
                Under Canada's Anti-Spam Legislation (CASL), we only send electronic communications with your express consent, and every email includes an instant unsubscribe mechanism.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-stone-900 cursor-pointer hover:bg-stone-800"
              >
                Close Privacy Policy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {activeLegalModal === 'terms' && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="terms-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border text-left relative">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-400 cursor-pointer"
              aria-label="Close Terms of Service"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 id="terms-modal-title" className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Terms of Service & Advisory Scope
            </h3>
            <p className="text-xs text-stone-500 mb-4">Effective: 2026</p>
            <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
              <h4 className="font-bold text-stone-800">1. Advisory Scope</h4>
              <p>
                Sarmila Reddy operates as an independent licensed financial professional in Canada. All consultations promoted on this website are 100% complimentary. No payment processing, fee collection, or direct e-commerce occurs on this site.
              </p>
              <h4 className="font-bold text-stone-800">2. No Guaranteed Investment Outcomes</h4>
              <p>
                All calculators and content provide educational modeling only. Mutual funds, segregated funds, and market investments are subject to market volatility. Past performance does not guarantee future results.
              </p>
              <h4 className="font-bold text-stone-800">3. Appointments & Scheduling</h4>
              <p>
                Consultation bookings via Calendly can be rescheduled or cancelled at any time with 24 hours notice.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-stone-900 cursor-pointer hover:bg-stone-800"
              >
                Close Terms
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
