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
      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-grid">
            <div><a className="brand" href="#home"><span className="brand-monogram" aria-hidden="true">sr<span>.</span></span><span className="brand-name">Sarmila Reddy<small>Financial advisor</small></span></a><p className="footer-description">Thoughtful guidance.<br />A future that feels like yours.</p><a className="footer-social" href={`https://instagram.com/${ADVISOR_PROFILE.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer"><Instagram size={17} /> Follow along on Instagram</a></div>
            <div className="footer-links"><h3>Explore</h3><a href="#about">About Sarmila</a><a href="#services">How I can help</a><a href="#who-i-help">Who I work with</a><a href="#testimonials">Client stories</a></div>
            <div className="footer-links"><h3>A little clarity</h3><a href="#calculator">Wealth calculator</a><a href="#accounts">Canadian account guide</a><a href="#process">How it works</a><a href="#faq">Common questions</a></div>
            <div className="footer-links"><h3>Let’s connect</h3><a href={`mailto:${ADVISOR_PROFILE.email}`}>{ADVISOR_PROFILE.email}</a><span>British Columbia, Canada</span><button className="text-link" onClick={onOpenBooking}>Book a conversation <Calendar size={14} /></button></div>
          </div>
          <p className="footer-disclaimer">Sarmila Reddy is an independent licensed financial advisor and Life License Qualification Program (LLQP) certified professional in Canada. Financial applications, insurance underwriting, and registered investments are executed through licensed Canadian carriers and institutions under compliance oversight. Calculations provide hypothetical modeling only and do not constitute formal legal, tax, or binding investment advice.</p>
          <div className="footer-bottom"><p>© {new Date().getFullYear()} Sarmila Reddy. All rights reserved.</p><div><button onClick={() => setActiveLegalModal('privacy')}>Privacy policy</button><button onClick={() => setActiveLegalModal('terms')}>Terms of service</button><a href="#home">Back to top ↑</a></div></div>
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

