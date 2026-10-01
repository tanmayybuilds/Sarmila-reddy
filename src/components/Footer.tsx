import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ADVISOR_PROFILE } from '../data/content';
import { Shield, Mail, Phone, MapPin, Instagram, Linkedin, Calendar, X, FileText } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer
      className="border-t transition-colors duration-500 text-stone-700"
      style={{
        backgroundColor: '#FFFFFF',
        borderColor: activeTheme.border,
      }}
    >
      {/* Top Advisory Banner */}
      <div
        className="py-12 px-4 sm:px-6 lg:px-8 border-b"
        style={{
          backgroundColor: activeTheme.primaryLight,
          borderColor: activeTheme.border,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold" style={{ color: activeTheme.textDark }}>
              Ready to take control of your financial tomorrow?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light">
              Complimentary 30-minute discovery sessions available this week for Canadian individuals & families.
            </p>
          </div>
          <button
            id="footer-book-cta-btn"
            onClick={onOpenBooking}
            className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white shadow-sm transition-all hover:brightness-110 shrink-0 flex items-center gap-2"
            style={{ backgroundColor: activeTheme.primary }}
          >
            <Calendar className="w-4 h-4" />
            <span>Book Free 1-on-1 Session</span>
          </button>
        </div>
      </div>

      {/* Main Footer Links - Add pb-24 for mobile sticky bar clearance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 pb-24 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Monogram (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3.5">
              <div
                className="w-12 h-12 rounded-full overflow-hidden border p-0.5 bg-white shadow-xs shrink-0 flex items-center justify-center"
                style={{ borderColor: activeTheme.accent }}
              >
                <img
                  src={ADVISOR_PROFILE.images.logo}
                  alt="Sarmila Reddy Financial Advisor"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold leading-none" style={{ color: activeTheme.textDark }}>
                  Sarmila Reddy
                </h4>
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-[0.16em] mt-1">
                  Financial Advisory • Canada
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed font-light">
              Guiding Canadian families, young professionals, new immigrants, and entrepreneurs today for a stronger, confident tomorrow.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://instagram.com/${ADVISOR_PROFILE.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors"
                style={{ borderColor: activeTheme.border }}
                title="Follow Sarmila on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://${ADVISOR_PROFILE.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors"
                style={{ borderColor: activeTheme.border }}
                title="Official Website"
              >
                <span className="text-xs font-bold font-mono">.CA</span>
              </a>
              <a
                href={ADVISOR_PROFILE.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors"
                style={{ borderColor: activeTheme.border }}
                title="Direct Calendly"
              >
                <Calendar className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-stone-900">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
              <li><a href="#services" className="hover:underline">Comprehensive Services</a></li>
              <li><a href="#my-why" className="hover:underline">Beyond Numbers (My Why)</a></li>
              <li><a href="#who-i-help" className="hover:underline">Who I Help Across Canada</a></li>
              <li><a href="#calculator" className="hover:underline">Canadian Wealth Calculator</a></li>
              <li><a href="#accounts" className="hover:underline">TFSA & RRSP Guide</a></li>
              <li><a href="#testimonials" className="hover:underline">Client Experiences</a></li>
              <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Core Canadian Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-stone-900">
              Solutions
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
              <li><span>TFSA & RRSP</span></li>
              <li><span>FHSA (Home Buyers)</span></li>
              <li><span>RESP (Child Education)</span></li>
              <li><span>Term & Whole Life</span></li>
              <li><span>Critical Illness</span></li>
              <li><span>Income Disability</span></li>
              <li><span>Business Succession</span></li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-stone-900">
              Get in Touch
            </h5>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                <span>British Columbia & Canada-Wide (Virtual)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <a href={`mailto:${ADVISOR_PROFILE.email}`} className="hover:underline">
                  {ADVISOR_PROFILE.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-stone-400 shrink-0" />
                <a href={ADVISOR_PROFILE.calendlyUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  calendly.com/{ADVISOR_PROFILE.calendlyHandle}
                </a>
              </div>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-stone-600">
              <span className="font-semibold text-emerald-700">● Complimentary Consultations</span>
              <p className="mt-0.5 text-stone-500">Zero consultation or hidden discovery fees.</p>
            </div>
          </div>
        </div>

        {/* Regulatory & Compliance Disclaimers */}
        <div className="mt-12 pt-8 border-t space-y-4 text-left" style={{ borderColor: activeTheme.border }}>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm text-stone-600 leading-relaxed space-y-2">
            <p className="font-semibold text-stone-800">
              Canadian Regulatory & Professional Compliance Notice:
            </p>
            <p>
              Sarmila Reddy is an independent licensed financial advisor and Life License Qualification Program (LLQP) certified professional in Canada. All consultations, educational webinars, and initial financial assessments provided through this website are 100% complimentary. Sarmila does not accept direct client payments or retainers through this website. Financial applications, insurance underwriting, and registered investments are executed through licensed Canadian carriers and financial institutions under strict compliance oversight.
            </p>
            <p>
              Information presented on this website is for informational and educational purposes only and does not constitute formal legal, tax, or binding investment advice. Calculations provided by interactive tools represent hypothetical compound growth estimates. Canadian tax laws and CRA contribution thresholds may vary by personal situation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-500">
            <p>© {new Date().getFullYear()} Sarmila Reddy (sarmilareddy.ca). All rights reserved.</p>

            <div className="flex items-center gap-4">
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

      {/* Privacy Policy Modal */}
      {activeLegalModal === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border text-left shadow-2xl relative">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-400"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
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
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-stone-900"
              >
                Close Privacy Policy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {activeLegalModal === 'terms' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border text-left shadow-2xl relative">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-400"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
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
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-stone-900"
              >
                Close Terms
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
