import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ADVISOR_PROFILE } from '../data/content';
import { 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Coins, 
  HeartPulse, 
  TrendingUp, 
  Briefcase, 
  Mail,
  Phone,
  Instagram,
  Linkedin
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();

  return (
    <section id="home" className="relative overflow-x-hidden bg-[#0A111E] text-white">
      {/* =========================================================================
          1. MOBILE VIEW (Screen width < 1024px / lg:hidden)
          Matches the reference image exactly:
          - Deep sovereign navy / obsidian background (#0A111E)
          - Portrait of Sarmila in night penthouse with warm city bokeh
          - Deep dark gradient overlay for optimal legibility
          - Gold horizontal accent line above headline
          - High-contrast Cormorant Garamond serif display headline
          - Clean DM Sans subtitle
          - Warm gold pill CTA button ("Book a Complimentary Call ->") with dark navy text
          - Underlined secondary link ("Explore my services ->") in white
          - 4 Gold circular outline icon feature pillars on deep navy
          - Curved gold hairline arc divider at the base
          ========================================================================= */}
      <div className="block lg:hidden relative bg-[#0A111E] text-white">
        {/* Full-bleed Background Portrait */}
        <div className="relative w-full min-h-[860px] sm:min-h-[940px] flex flex-col justify-end overflow-hidden">
          <img
            src={ADVISOR_PROFILE.images.heroMobile || ADVISOR_PROFILE.images.hero}
            alt="Sarmila Reddy - Licensed Financial Advisor Canada"
            className="absolute inset-0 w-full h-full object-cover object-[center_top]"
            loading="eager"
          />

          {/* Minimal Top Shade for Status Bar Only */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-10" />
          
          {/* Bottom Dark Gradient: ONLY covers lower portion where headline and buttons sit */}
          <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#0A111E] via-[#0A111E]/90 via-35% to-transparent pointer-events-none z-10" />

          {/* Hero Mobile Content Container */}
          <div className="relative z-20 px-5 sm:px-8 pb-8 pt-10 max-w-lg mx-auto w-full text-left">
            {/* Top Verification Micro-Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium bg-black/50 backdrop-blur-md border border-white/15 text-amber-200/90 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LLQP Licensed • Serving Canada Coast-to-Coast</span>
            </motion.div>

            {/* Advisor Name & Title Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-2.5 mb-2.5"
            >
              <span className="font-cormorant text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Sarmila Reddy
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span
                className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase"
                style={{ color: activeTheme.accent || '#D4A359' }}
              >
                Financial Advisor
              </span>
            </motion.div>

            {/* Gold Horizontal Accent Line */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 44 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[3px] rounded-full mb-3.5 shadow-sm"
              style={{ backgroundColor: activeTheme.accent || '#D4A359' }}
            />

            {/* Main Headline in Editorial Cormorant Serif */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-cormorant text-[2.5rem] sm:text-5xl font-bold tracking-[-0.01em] leading-[1.14] text-white"
            >
              Guiding you today{' '}
              <span
                className="font-cormorant font-semibold block"
                style={{ color: activeTheme.accent || '#E0BA70' }}
              >
                for a stronger tomorrow.
              </span>
            </motion.h1>

            {/* Subtitle in Clean DM Sans */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 space-y-1 text-stone-200 text-[0.95rem] sm:text-base font-light tracking-wide leading-relaxed"
            >
              <p>Personalised financial guidance.</p>
              <p>Protection for every chapter.</p>
            </motion.div>

            {/* CTAs matching the reference image */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 sm:mt-7 space-y-3.5"
            >
              {/* Primary Gold Pill Button with Dark Text */}
              <button
                id="hero-mobile-book-call-btn"
                onClick={onOpenBooking}
                className="w-full min-h-[50px] sm:min-h-[54px] px-6 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-97 shadow-lg cursor-pointer hover:brightness-105"
                style={{
                  backgroundColor: activeTheme.accent || '#D4A359',
                  color: '#0A111E',
                }}
              >
                <Calendar className="w-4 h-4 text-[#0A111E] shrink-0" />
                <span className="text-[0.95rem] sm:text-base font-semibold tracking-tight">
                  Book a Complimentary Call
                </span>
                <ArrowRight className="w-4 h-4 text-[#0A111E] shrink-0 ml-0.5" />
              </button>

              {/* Secondary Underlined Link */}
              <div className="pt-1">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-amber-200 transition-colors text-sm font-medium group"
                >
                  <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-amber-300">
                    Explore my services
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom 4 Feature Pillars Strip on Dark Navy (#0A111E) */}
        <div className="relative z-20 bg-[#0A111E] pt-2 pb-6 px-4 sm:px-6">
          {/* Row 1: 3 Equal Columns with Thin Dividers */}
          <div className="grid grid-cols-3 divide-x divide-white/10 max-w-lg mx-auto">
            {/* Pillar 1: Life & Living Benefits */}
            <div className="px-2 sm:px-3 text-center flex flex-col items-center">
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center shrink-0 mb-2 transition-transform duration-300 hover:scale-105 bg-white/5"
                style={{ borderColor: `${activeTheme.accent || '#D4A359'}80` }}
              >
                <ShieldCheck
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  style={{ color: activeTheme.accent || '#D4A359' }}
                />
              </div>
              <h3 className="text-white font-semibold text-[11px] sm:text-xs leading-snug">
                Life & Living Benefits Protection
              </h3>
              <p
                className="uppercase tracking-wider text-[8.5px] sm:text-[9px] font-bold mt-1"
                style={{ color: activeTheme.accent || '#D4A359' }}
              >
                Licensed Representative
              </p>
            </div>

            {/* Pillar 2: TFSA, RRSP, RESP, FHSA */}
            <div className="px-2 sm:px-3 text-center flex flex-col items-center">
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center shrink-0 mb-2 transition-transform duration-300 hover:scale-105 bg-white/5"
                style={{ borderColor: `${activeTheme.accent || '#D4A359'}80` }}
              >
                <Coins
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  style={{ color: activeTheme.accent || '#D4A359' }}
                />
              </div>
              <h3 className="text-white font-semibold text-[11px] sm:text-xs leading-snug">
                TFSA • RRSP • RESP • FHSA
              </h3>
              <p
                className="uppercase tracking-wider text-[8.5px] sm:text-[9px] font-bold mt-1"
                style={{ color: activeTheme.accent || '#D4A359' }}
              >
                Build Your Future
              </p>
            </div>

            {/* Pillar 3: Life, Critical Illness & Disability */}
            <div className="px-2 sm:px-3 text-center flex flex-col items-center">
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center shrink-0 mb-2 transition-transform duration-300 hover:scale-105 bg-white/5"
                style={{ borderColor: `${activeTheme.accent || '#D4A359'}80` }}
              >
                <HeartPulse
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  style={{ color: activeTheme.accent || '#D4A359' }}
                />
              </div>
              <h3 className="text-white font-semibold text-[11px] sm:text-xs leading-snug">
                Life, Critical Illness & Disability Protection
              </h3>
              <p
                className="uppercase tracking-wider text-[8.5px] sm:text-[9px] font-bold mt-1"
                style={{ color: activeTheme.accent || '#D4A359' }}
              >
                Peace of Mind
              </p>
            </div>
          </div>

          {/* Row 2: Centered 4th Pillar (Canadian Newcomers) */}
          <div className="mt-5 pt-4 border-t border-white/5 flex flex-col items-center text-center max-w-xs mx-auto">
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center shrink-0 mb-2 transition-transform duration-300 hover:scale-105 bg-white/5"
              style={{ borderColor: `${activeTheme.accent || '#D4A359'}80` }}
            >
              {/* Crisp Canadian Maple Leaf SVG Icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
                style={{ color: activeTheme.accent || '#D4A359' }}
              >
                <path d="M12 2l1.6 3.2 2.8-.7-.9 3.2 3.3.4-1.9 2.5 2.7 1.9-3.2 1.2.6 3.2-3-1.6L13 22h-2l-.9-6.7-3 1.6.6-3.2-3.2-1.2 2.7-1.9-1.9-2.5 3.3-.4-.9-3.2 2.8.7L12 2z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-[11px] sm:text-xs leading-snug">
              Guidance for Canadian Newcomers
            </h3>
            <p
              className="uppercase tracking-wider text-[8.5px] sm:text-[9px] font-bold mt-1"
              style={{ color: activeTheme.accent || '#D4A359' }}
            >
              Settle • Plan • Thrive
            </p>
          </div>

          {/* Curved Golden Divider Arc at the base */}
          <div className="w-full overflow-hidden leading-none pt-4 max-w-md mx-auto">
            <svg
              viewBox="0 0 400 24"
              className="w-full h-4 sm:h-5 text-amber-500/50"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 0,22 Q 200,2 400,22"
                stroke={activeTheme.accent || '#D4A359'}
                strokeWidth="1.25"
                strokeOpacity="0.65"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. LAPTOP & DESKTOP VIEW (Screen width >= 1024px / hidden lg:block)
          Matches the sovereign dark navy & warm gold palette for the Home section:
          - Deep sovereign navy backdrop (#0A111E / #080D17)
          - White & warm gold typography
          - Warm gold rounded pill CTA button ("Get a Free Consultation")
          - The signature diagonal cut slash image composition featuring Sarmila's night portrait
          - Floating 3-Card Deck in luxury dark glass (#0E1B2D with gold icons and borders)
          - Sub-strip with Canadian license disclosures & social links
          ========================================================================= */}
      <div className="hidden lg:block relative pt-6 pb-28 xl:pb-32 bg-[#0A111E]">
        {/* Soft Ambient Background Glows */}
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ backgroundColor: activeTheme.accent || '#D4A359' }}
        />
        <div
          className="absolute top-1/4 left-10 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundColor: activeTheme.primaryLight }}
        />

        <div className="max-w-7xl mx-auto px-6 xl:px-8 relative z-10">
          {/* Main Hero Split Grid */}
          <div className="grid grid-cols-12 gap-8 xl:gap-12 items-center min-h-[500px] xl:min-h-[540px]">
            {/* Left Column: Bold Headline, Narrative, and Pill CTA */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="col-span-6 xl:col-span-5 space-y-6 text-left pr-2"
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-white/15 bg-white/10 text-stone-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Licensed Life & Living Benefits Representative • Canada</span>
              </div>

              {/* Headline using Modern Corporate Plus Jakarta Sans with Gold Highlight */}
              <h1 className="font-jakarta text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-[1.14]">
                Securing Your Future,{' '}
                <span
                  className="font-jakarta inline-block font-extrabold"
                  style={{ color: activeTheme.accent || '#D4A359' }}
                >
                  Together.
                </span>
              </h1>

              {/* Subheading Narrative */}
              <p className="text-stone-300 text-base xl:text-lg leading-relaxed font-normal max-w-lg">
                Trusted, client-first financial and insurance protection guidance for every chapter of your journey in Canada. From maximizing your first tax-advantaged accounts (TFSA, RRSP, FHSA) to safeguarding family income with living benefits—we replace financial overwhelm with enduring clarity.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  id="hero-desktop-consultation-btn"
                  onClick={onOpenBooking}
                  className="whitespace-nowrap px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer shadow-lg inline-flex items-center gap-2"
                  style={{
                    backgroundColor: activeTheme.accent || '#D4A359',
                    color: '#0A111E',
                  }}
                >
                  <Calendar className="w-4 h-4 text-[#0A111E]" />
                  <span>Get a Free Consultation</span>
                </button>

                <a
                  href="#calculator"
                  className="whitespace-nowrap px-6 py-3.5 rounded-full text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Interactive Calculator</span>
                  <ArrowRight className="w-4 h-4 text-amber-200" />
                </a>
              </div>

              {/* Guarantees Line */}
              <p className="text-xs text-stone-400 font-medium flex items-center gap-2 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Client Best-Interest Standard • 100% Confidential • Zero Pressure</span>
              </p>
            </motion.div>

            {/* Right Column: The Architectural Diagonal Cut Slash Composition with Sarmila's Night Portrait */}
            <motion.div
              initial={{ opacity: 0, x: 25, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="col-span-6 xl:col-span-7 relative flex items-center justify-end"
            >
              {/* Outer Decorative Wrapper */}
              <div className="relative w-full max-w-2xl h-[480px] xl:h-[540px]">
                {/* Subtle Luxury Gold Ambient Glow behind Card */}
                <div 
                  className="absolute -inset-1 rounded-3xl opacity-25 blur-xl pointer-events-none"
                  style={{ backgroundColor: activeTheme.accent || '#D4A359' }}
                />

                {/* Main Clean Executive Photo Frame - Fully showing her head and pose without harsh clipping */}
                <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-3xl border border-white/15 bg-[#080D17]">
                  <img
                    src={ADVISOR_PROFILE.images.heroDesktop || ADVISOR_PROFILE.images.hero}
                    alt="Sarmila Reddy - Canadian Financial Advisor"
                    className="w-full h-full object-cover object-[center_top]"
                    loading="eager"
                  />

                  {/* Subtle Vignette for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Advisor Identity Ribbon on Image */}
                  <div className="absolute bottom-5 right-5 px-5 py-2.5 rounded-2xl bg-[#0A111E]/90 backdrop-blur-md border border-white/15 shadow-xl text-left pointer-events-none">
                    <p className="font-jakarta text-sm xl:text-base font-bold text-white tracking-wide">
                      Sarmila Reddy
                    </p>
                    <p className="text-xs font-medium text-stone-300 mt-0.5">
                      Licensed Life & Living Benefits Advisor • Canada
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =========================================================================
            3. FLOATING 3-CARD DECK (Luxury Dark Navy & Gold)
            Floats horizontally overlapping the bottom of the hero section
            ========================================================================= */}
        <div className="relative z-30 max-w-7xl mx-auto px-6 xl:px-8 -mb-20 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-[#0E1B2D] rounded-3xl p-8 xl:p-10 shadow-2xl border border-white/10 grid grid-cols-3 gap-8 divide-x divide-white/10 text-white"
          >
            {/* Card 1: Investment Planning */}
            <div className="space-y-4 text-left pr-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/5"
                style={{
                  color: activeTheme.accent || '#D4A359',
                }}
              >
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="font-jakarta text-xl font-bold text-white tracking-tight">
                Investment Planning
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed font-normal">
                Maximize Canadian tax incentives through structured account allocation in TFSA, RRSP, FHSA, and RESP to compound long-term wealth tax-sheltered.
              </p>
              <div>
                <a
                  href="#accounts"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-stone-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
                </a>
              </div>
            </div>

            {/* Card 2: Retirement Solutions */}
            <div className="space-y-4 text-left px-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/5"
                style={{
                  color: activeTheme.accent || '#D4A359',
                }}
              >
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="font-jakarta text-xl font-bold text-white tracking-tight">
                Retirement Solutions
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed font-normal">
                Protect your family’s standard of living with individually-owned Term, Whole Life, and Living Benefits (Critical Illness & Disability) income replacement.
              </p>
              <div>
                <a
                  href="#solutions"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-stone-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
                </a>
              </div>
            </div>

            {/* Card 3: Estate & Wealth Management */}
            <div className="space-y-4 text-left pl-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/5"
                style={{
                  color: activeTheme.accent || '#D4A359',
                }}
              >
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="font-jakarta text-xl font-bold text-white tracking-tight">
                Estate Management
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed font-normal">
                Preserve capital with tax-efficient corporate retained earnings extraction, buy-sell agreement funding, and smooth Canadian wealth succession.
              </p>
              <div>
                <a
                  href="#solutions"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-stone-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Sub-strip directly below cards */}
          <div className="pt-6 flex items-center justify-between text-xs text-stone-400 font-medium px-2">
            <div>
              <span>Licensed Life & Living Benefits Representative • Canada • LLQP Certified</span>
            </div>
            <div>
              <span>Serving British Columbia, Alberta, Ontario & Across Canada</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${ADVISOR_PROFILE.email}`}
                className="hover:text-white transition-colors"
                title="Email Sarmila"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${ADVISOR_PROFILE.phone}`}
                className="hover:text-white transition-colors"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
