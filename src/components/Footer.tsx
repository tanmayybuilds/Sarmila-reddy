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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 pb-28 sm:pb-12">
          {/* Main 4 Equal Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start text-left">
            {/* Col 1: Brand & Identity */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-2.5">
<div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl p-1 bg-white border-2 shadow-xs shrink-0 flex items-center justify-center ring-1 ring-black/5"
                  style={{ borderColor: activeTheme.accent }}
                >
                  <img
                    src={ADVISOR_PROFILE.images.logoEmblem || ADVISOR_PROFILE.images.logo}
                    alt="Sarmila Reddy - Financial Advisor Canada"
                    className="w-full h-full object-contain filter drop-shadow-xs"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold leading-tight" style={{ color: activeTheme.textDark }}>
                    Sarmila Reddy
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold tracking-normal mt-0.5" style={{ color: activeTheme.accent }}>
                    Financial Advisor • Canada
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                Empowering Canadian families, professionals, and newcomers with client-first financial and insurance strategies.
              </p>

              <div className="flex items-center gap-1.5 sm:gap-2 pt-0.5">
                <a
                  href={`https://instagram.com/${ADVISOR_PROFILE.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:border-stone-400 hover:bg-stone-50 transition-colors"
                  title="Follow Sarmila on Instagram"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </a>
                <a
                  href={`https://${ADVISOR_PROFILE.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-6 px-1.5 sm:h-7 sm:px-2 rounded-full border border-stone-200 flex items-center justify-center text-[9px] sm:text-[10px] font-mono font-semibold text-stone-600 hover:text-stone-900 hover:border-stone-400 hover:bg-stone-50 transition-colors"
                  title="Official Website"
                  aria-label="Official Website"
                >
                  .CA
                </a>
                <a
                  href={ADVISOR_PROFILE.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:border-stone-400 hover:bg-stone-50 transition-colors"
                  title="Calendly Booking"
                  aria-label="Calendly"
                >
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </a>
                <a
                  href={`mailto:${ADVISOR_PROFILE.email}`}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:border-stone-400 hover:bg-stone-50 transition-colors"
                  title="Email Sarmila"
                  aria-label="Email"
                >
                  <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900">
                Navigation
              </h3>
              <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-stone-600">
                <li><a href="#services" className="hover:underline">Advisory Services</a></li>
                <li><a href="#who-i-help" className="hover:underline">Who I Help in Canada</a></li>
                <li><a href="#calculator" className="hover:underline">Wealth Calculator</a></li>
                <li><a href="#accounts" className="hover:underline">TFSA & RRSP Guide</a></li>
                <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
                <li>
                  <button
                    onClick={onOpenBooking}
                    className="hover:underline cursor-pointer font-semibold flex items-center gap-1 text-xs sm:text-sm"
                    style={{ color: activeTheme.primary }}
                  >
                    <span>Book 1-on-1 Session</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Key Solutions */}
            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900">
                Solutions
              </h3>
              <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-stone-600">
                <li><a href="#services" className="hover:underline">TFSA, RRSP & FHSA</a></li>
                <li><a href="#services" className="hover:underline">Life Insurance (Term & Whole)</a></li>
                <li><a href="#services" className="hover:underline">Critical Illness & Disability</a></li>
                <li><a href="#services" className="hover:underline">RESP Education Planning</a></li>
                <li><a href="#services" className="hover:underline">New Immigrant Financial Setup</a></li>
                <li><a href="#services" className="hover:underline">Corporate & Business Wealth</a></li>
              </ul>
            </div>

            {/* Col 4: Direct Contact & Office */}
            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900">
                Direct Contact
              </h3>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-1.5 sm:gap-2">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-400 shrink-0 mt-0.5" />
                  <span>British Columbia & Canada-Wide (Virtual)</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-400 shrink-0" />
                  <a href={`mailto:${ADVISOR_PROFILE.email}`} className="hover:underline">
                    {ADVISOR_PROFILE.email}
                  </a>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-400 shrink-0" />
                  <a href={ADVISOR_PROFILE.calendlyUrl} target="_blank" rel="noreferrer" className="hover:underline">
                    calendly.com/{ADVISOR_PROFILE.calendlyHandle}
                  </a>
                </div>
              </div>

              <div className="pt-0.5 sm:pt-1 text-xs">
                <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Complimentary Consultations</span>
                </span>
              </div>
            </div>
          </div>

          {/* Regulatory & Compliance Disclaimers */}
          <div className="mt-5 sm:mt-7 pt-4 sm:pt-5 border-t space-y-2 text-left" style={{ borderColor: activeTheme.border }}>
            <p className="text-xs text-stone-500 leading-relaxed max-w-5xl">
              <strong className="text-stone-700 font-semibold">Regulatory Notice & Licensing Disclosure: </strong>
              Sarmila Reddy is a Life License Qualification Program (LLQP) certified professional and Licensed Life & Living Benefits Representative authorized in British Columbia (BC), Alberta (AB), and Ontario (ON). All introductory sessions are complimentary discovery discussions; no direct consumer payments or portfolio transactions are conducted directly through this website. Life insurance, critical illness, disability, and living benefits policies are underwritten and issued by authorized Canadian life insurance companies. Registered wealth accounts (TFSA, RRSP, FHSA, RESP) and mutual fund solutions are facilitated through authorized Canadian financial institutions and partner dealers in accordance with applicable provincial and CIRO regulatory standards.
            </p>
            <p className="text-xs text-stone-500 leading-relaxed max-w-5xl">
              Website content and calculator simulations are provided solely for general educational and informational modeling purposes. They do not constitute personalized Know-Your-Client (KYC) investment advice, tax opinions, or legal counsel. Investment returns are not guaranteed; market values, yields, and unit prices fluctuate with market conditions.
            </p>

            <div className="pt-1.5 sm:pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-xs text-stone-500 text-left border-t border-stone-100">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border text-left relative">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-4 right-4 p-1.5 sm:p-2 rounded-full hover:bg-stone-100 text-stone-400 cursor-pointer"
              aria-label="Close Privacy Policy"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 id="privacy-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-1.5 sm:mb-2 pr-8">
              Privacy Policy (PIPEDA Compliance)
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mb-3 sm:mb-4">Last Updated: Canadian Regulatory Revision 2026</p>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
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
            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold text-white bg-stone-900 cursor-pointer hover:bg-stone-800"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border text-left relative">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-4 right-4 p-1.5 sm:p-2 rounded-full hover:bg-stone-100 text-stone-400 cursor-pointer"
              aria-label="Close Terms of Service"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 id="terms-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-1.5 sm:mb-2 pr-8">
              Terms of Service & Advisory Scope
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mb-3 sm:mb-4">Effective: 2026</p>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
              <h4 className="font-bold text-stone-800">1. Advisory Scope & Registration</h4>
              <p>
                Sarmila Reddy is a Life License Qualification Program (LLQP) certified professional and licensed life and living benefits representative authorized in British Columbia (BC), Alberta (AB), and Ontario (ON). All introductory strategy sessions promoted on this website are complimentary discovery discussions. No direct retail payments, transactions, or fee processing occur on this website.
              </p>
              <h4 className="font-bold text-stone-800">2. No Guaranteed Investment Outcomes</h4>
              <p>
                All calculators, simulators, and guides provide educational modeling only. Investments, mutual funds, and equities are subject to market volatility. Past performance does not guarantee future results.
              </p>
              <h4 className="font-bold text-stone-800">3. Suitability & Know-Your-Client (KYC)</h4>
              <p>
                Website browsing or submitting an inquiry does not constitute a formal advisory relationship. Tailored recommendations are only provided following a personalized discovery process and formal application through authorized Canadian carriers and institutions.
              </p>
              <h4 className="font-bold text-stone-800">4. Appointments & Scheduling</h4>
              <p>
                Consultation bookings via Calendly can be rescheduled or cancelled at any time with 24 hours notice.
              </p>
            </div>
            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold text-white bg-stone-900 cursor-pointer hover:bg-stone-800"
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
