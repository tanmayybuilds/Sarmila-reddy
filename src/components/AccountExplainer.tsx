import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { CANADIAN_ACCOUNTS_GUIDE, TFSA_VS_FHSA_COMPARISON } from '../data/content';
import {
  Lightbulb,
  ArrowUpRight,
  Sparkles,
  DollarSign,
  Receipt,
  TrendingUp,
  ArrowDownToLine,
  Target,
  ShieldCheck,
  Check,
  X,
  Layers,
  ArrowRight,
  Building2,
  CheckCircle2,
  CalendarCheck,
  Scale
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AccountExplainerProps {
  onOpenBooking: () => void;
}

type ViewMode = 'matchup' | 'allAccounts' | 'stacking';
type MobileFocus = 'both' | 'tfsa' | 'fhsa';

export const AccountExplainer: React.FC<AccountExplainerProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();
  const [activeView, setActiveView] = useState<ViewMode>('matchup');
  const [mobileFocus, setMobileFocus] = useState<MobileFocus>('both');

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'DollarSign':
        return <DollarSign className="w-4 h-4" />;
      case 'Receipt':
        return <Receipt className="w-4 h-4" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4" />;
      case 'ArrowDownToLine':
        return <ArrowDownToLine className="w-4 h-4" />;
      case 'Target':
        return <Target className="w-4 h-4" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="accounts"
      className="py-8 sm:py-14 lg:py-16 transition-colors duration-500 overflow-hidden"
      style={{ backgroundColor: activeTheme.bgLight }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-6 sm:mb-8"
        >
          {/* Eyebrow with active CRA pulse */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold"
            style={{
              backgroundColor: activeTheme.badgeBg,
              color: activeTheme.badgeText,
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>CRA Registered Vehicles • 2026 Guidelines</span>
          </div>

          <h2
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: activeTheme.textDark }}
          >
            Canadian Accounts{' '}
            <span className="italic font-serif font-normal" style={{ color: activeTheme.primary }}>
              Decoded & Demystified.
            </span>
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            The Canadian tax code offers unmatched shelters for building wealth and buying a home.
            Compare TFSA vs. FHSA head-to-head or explore how to stack them strategically.
          </p>

          {/* Interactive Navigation Switcher Pill Bar (Inspired by vipinchoudhary.com) */}
          <div className="pt-2 sm:pt-4 flex items-center justify-center">
            <div
              className="inline-flex p-1 rounded-full border bg-white shadow-xs max-w-full overflow-x-auto"
              style={{ borderColor: activeTheme.border }}
              role="tablist"
              aria-label="Account Guide View Switcher"
            >
              {[
                { id: 'matchup', label: 'TFSA vs. FHSA Matchup', icon: Scale },
                { id: 'allAccounts', label: 'All 4 Registered Accounts', icon: Layers },
                { id: 'stacking', label: 'Smart Tax Stacking Strategy', icon: Sparkles },
              ].map(tab => {
                const isActive = activeView === tab.id;
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveView(tab.id as ViewMode)}
                    className={`relative flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap z-10 ${
                      isActive ? 'text-white' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeAccountTabPill"
                        className="absolute inset-0 rounded-full shadow-xs -z-10"
                        style={{ backgroundColor: activeTheme.primary }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Dynamic Content Views */}
        <AnimatePresence mode="wait">
          {/* VIEW 1: TFSA vs FHSA Head-to-Head Comparison (User's Exact Request) */}
          {activeView === 'matchup' && (
            <motion.div
              key="matchup-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Mobile View Toggle: Both Side-by-Side vs Single Account Focus */}
              <div className="md:hidden flex items-center justify-between bg-white p-2 rounded-xl border border-stone-200/90 shadow-xs">
                <span className="text-[11px] font-semibold text-stone-600 pl-1">Mobile View:</span>
                <div className="flex items-center gap-1">
                  {[
                    { id: 'both', label: 'Side-by-Side' },
                    { id: 'tfsa', label: 'TFSA' },
                    { id: 'fhsa', label: 'FHSA' },
                  ].map(mode => (
                    <button
                      key={mode.id}
                      onClick={() => setMobileFocus(mode.id as MobileFocus)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        mobileFocus === mode.id
                          ? 'bg-stone-900 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Container Card */}
              <div
                className="rounded-2xl sm:rounded-3xl border bg-white p-3.5 sm:p-8 lg:p-10 shadow-xs"
                style={{ borderColor: activeTheme.border }}
              >
                {/* Top Comparison Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b gap-3" style={{ borderColor: activeTheme.border }}>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-xl sm:text-3xl font-bold" style={{ color: activeTheme.textDark }}>
                        TFSA vs. FHSA at a Glance
                      </span>
                      <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Official CRA Rules
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-500 font-light mt-0.5">
                      Understanding when to prioritize flexibility vs. first-time homebuyer tax deductions.
                    </p>
                  </div>

                  {/* Summary Quick Stats Pill Bar */}
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <div className="px-3 py-1.5 rounded-xl border bg-stone-50 text-left" style={{ borderColor: activeTheme.border }}>
                      <div className="text-[10px] uppercase font-semibold tracking-wider text-stone-500">TFSA 2026</div>
                      <div className="font-bold text-sm sm:text-base text-stone-900">$7,000 / yr</div>
                    </div>
                    <div className="px-3 py-1.5 rounded-xl border text-left" style={{ backgroundColor: activeTheme.primaryLight, borderColor: activeTheme.accent }}>
                      <div className="text-[10px] uppercase font-semibold tracking-wider" style={{ color: activeTheme.primary }}>FHSA 2026</div>
                      <div className="font-bold text-sm sm:text-base" style={{ color: activeTheme.primary }}>$8,000 / yr</div>
                    </div>
                  </div>
                </div>

                {/* Desktop Editorial Table View (Hidden on mobile) */}
                <div className="hidden md:block overflow-x-auto pt-4">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b" style={{ borderColor: activeTheme.border }}>
                        <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-stone-500 w-2/5">
                          Feature
                        </th>
                        <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-stone-900 w-[30%]">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                            <span>TFSA (Tax-Free Savings)</span>
                          </div>
                        </th>
                        <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider w-[30%]" style={{ color: activeTheme.primary }}>
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeTheme.primary }} />
                            <span>FHSA (First Home Savings)</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-sm">
                      {TFSA_VS_FHSA_COMPARISON.map((row, idx) => (
                        <motion.tr
                          key={row.feature}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: idx * 0.04 }}
                          className="hover:bg-stone-50/70 transition-colors group"
                        >
                          {/* Feature Name & Icon */}
                          <td className="py-4 px-4 align-top">
                            <div className="flex items-start gap-2.5">
                              <div
                                className="p-1.5 rounded-lg shrink-0 mt-0.5 text-stone-700 bg-stone-100 group-hover:bg-white group-hover:shadow-xs transition-all"
                              >
                                {getFeatureIcon(row.iconName)}
                              </div>
                              <div>
                                <span className="font-semibold text-stone-900 text-sm block">
                                  {row.feature}
                                </span>
                                <span className="text-xs text-stone-500 font-light">
                                  {row.category === 'limits' && 'CRA cumulative rules'}
                                  {row.category === 'tax' && 'Federal & provincial tax impact'}
                                  {row.category === 'growth' && 'Compound capital preservation'}
                                  {row.category === 'withdrawals' && 'Liquidity & redemption conditions'}
                                  {row.category === 'rules' && 'Long-term flexibility & rollover'}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* TFSA Column */}
                          <td className="py-4 px-4 align-top">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-stone-900">
                                  {row.tfsa.highlight}
                                </span>
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                  row.tfsa.isPositive
                                    ? 'bg-stone-100 text-stone-700'
                                    : 'bg-stone-100 text-stone-500'
                                }`}>
                                  {row.tfsa.badge}
                                </span>
                              </div>
                              <p className="text-xs text-stone-600 font-light leading-relaxed">
                                {row.tfsa.subtext}
                              </p>
                            </div>
                          </td>

                          {/* FHSA Column */}
                          <td
                            className="py-4 px-4 align-top rounded-r-xl"
                            style={{
                              backgroundColor: row.fhsa.isPositive ? `${activeTheme.primaryLight}30` : undefined,
                            }}
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-bold" style={{ color: activeTheme.primary }}>
                                  {row.fhsa.highlight}
                                </span>
                                <span
                                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                  style={{
                                    backgroundColor: activeTheme.badgeBg,
                                    color: activeTheme.badgeText,
                                  }}
                                >
                                  {row.fhsa.badge}
                                </span>
                              </div>
                              <p className="text-xs text-stone-600 font-light leading-relaxed">
                                {row.fhsa.subtext}
                              </p>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Animated Card Experience (Fixes cramped screenshot!) */}
                <div className="md:hidden space-y-3 pt-3">
                  {TFSA_VS_FHSA_COMPARISON.map((row, idx) => (
                    <motion.div
                      key={row.feature}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="p-3.5 rounded-xl border border-stone-200/90 bg-stone-50/50 space-y-2.5 text-left"
                    >
                      {/* Feature Title Row */}
                      <div className="flex items-center justify-between border-b border-stone-200/70 pb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded-md bg-stone-200/70 text-stone-800">
                            {getFeatureIcon(row.iconName)}
                          </div>
                          <span className="font-serif font-bold text-xs text-stone-900">
                            {row.feature}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-stone-400">0{idx + 1}</span>
                      </div>

                      {/* Content Blocks: Side-by-Side vs Focused */}
                      {mobileFocus === 'both' ? (
                        <div className="grid grid-cols-2 gap-2">
                          {/* TFSA Column Side */}
                          <div className="p-2.5 rounded-lg bg-white border border-stone-200 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-stone-500 uppercase">TFSA</span>
                              {row.tfsa.isPositive ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <X className="w-3.5 h-3.5 text-stone-400" />
                              )}
                            </div>
                            <div className="font-bold text-xs text-stone-900 leading-tight">
                              {row.tfsa.highlight}
                            </div>
                            <span className="inline-block text-[9px] font-semibold px-1.5 py-0.5 rounded-sm bg-stone-100 text-stone-700">
                              {row.tfsa.badge}
                            </span>
                            <p className="text-[10px] text-stone-500 leading-tight pt-0.5">
                              {row.tfsa.subtext}
                            </p>
                          </div>

                          {/* FHSA Column Side */}
                          <div
                            className="p-2.5 rounded-lg border space-y-1"
                            style={{
                              backgroundColor: activeTheme.primaryLight,
                              borderColor: activeTheme.accent,
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold uppercase" style={{ color: activeTheme.primary }}>
                                FHSA
                              </span>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            </div>
                            <div className="font-bold text-xs leading-tight" style={{ color: activeTheme.primary }}>
                              {row.fhsa.highlight}
                            </div>
                            <span
                              className="inline-block text-[9px] font-semibold px-1.5 py-0.5 rounded-sm"
                              style={{
                                backgroundColor: activeTheme.badgeBg,
                                color: activeTheme.badgeText,
                              }}
                            >
                              {row.fhsa.badge}
                            </span>
                            <p className="text-[10px] text-stone-600 leading-tight pt-0.5">
                              {row.fhsa.subtext}
                            </p>
                          </div>
                        </div>
                      ) : mobileFocus === 'tfsa' ? (
                        /* Single TFSA Spotlight Card */
                        <div className="p-3 rounded-lg bg-white border border-stone-200 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-stone-900">Tax-Free Savings Account</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-semibold">
                              {row.tfsa.badge}
                            </span>
                          </div>
                          <div className="text-sm font-bold text-stone-900">
                            {row.tfsa.highlight}
                          </div>
                          <p className="text-xs text-stone-600 leading-relaxed font-light">
                            {row.tfsa.subtext}
                          </p>
                        </div>
                      ) : (
                        /* Single FHSA Spotlight Card */
                        <div
                          className="p-3 rounded-lg border space-y-1"
                          style={{
                            backgroundColor: activeTheme.primaryLight,
                            borderColor: activeTheme.accent,
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold" style={{ color: activeTheme.primary }}>
                              First Home Savings Account
                            </span>
                            <span
                              className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                              style={{
                                backgroundColor: activeTheme.badgeBg,
                                color: activeTheme.badgeText,
                              }}
                            >
                              {row.fhsa.badge}
                            </span>
                          </div>
                          <div className="text-sm font-bold" style={{ color: activeTheme.primary }}>
                            {row.fhsa.highlight}
                          </div>
                          <p className="text-xs text-stone-600 leading-relaxed font-light">
                            {row.fhsa.subtext}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Stacking Strategy Callout Box (Inspired by vipinchoudhary.com) */}
                <div
                  className="mt-6 sm:mt-8 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 shadow-xs"
                  style={{
                    backgroundColor: activeTheme.accentLight,
                    borderColor: activeTheme.border,
                  }}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 shrink-0" style={{ color: activeTheme.accent }} />
                      <span className="font-serif font-bold text-sm sm:text-base text-stone-900">
                        Sarmila’s Golden Rule: Stack Both Accounts!
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                      If eligible for first-time home buying, contribute to your <strong>FHSA first</strong> to trigger a tax deduction.
                      Then take your <strong>CRA tax refund</strong> in April and deposit it straight into your <strong>TFSA</strong>.
                      This generates double-compounding wealth with zero extra out-of-pocket savings.
                    </p>
                  </div>

                  <button
                    id="matchup-book-strategy-btn"
                    onClick={onOpenBooking}
                    className="shrink-0 min-h-[40px] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold text-white transition-all hover:brightness-110 active:scale-95 flex items-center gap-2 cursor-pointer shadow-xs"
                    style={{ backgroundColor: activeTheme.primary }}
                  >
                    <span>Build Your Account Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW 2: All 4 Registered Canadian Accounts (Full Grid) */}
          {activeView === 'allAccounts' && (
            <motion.div
              key="all-accounts-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-8"
            >
              {CANADIAN_ACCOUNTS_GUIDE.map((acc, idx) => (
                <motion.div
                  key={acc.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-4 sm:p-8 rounded-xl sm:rounded-3xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xs bg-white text-left"
                  style={{
                    borderColor: activeTheme.border,
                  }}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span
                          className="font-serif text-xl sm:text-3xl font-bold tracking-tight"
                          style={{ color: activeTheme.primary }}
                        >
                          {acc.code}
                        </span>
                        <p className="text-[11px] sm:text-xs font-semibold text-stone-700">{acc.fullName}</p>
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-stone-100 text-stone-700">
                        {acc.annualLimit}
                      </span>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2 text-xs sm:text-sm text-stone-600">
                      <div>
                        <span className="font-semibold text-stone-800 text-[11px] sm:text-xs block mb-0.5">
                          Tax Advantage:
                        </span>
                        <p className="leading-snug font-light">{acc.taxTreatment}</p>
                      </div>

                      <div>
                        <span className="font-semibold text-stone-800 text-[11px] sm:text-xs block mb-0.5">
                          Best Suited For:
                        </span>
                        <p className="leading-snug font-light">{acc.bestFor}</p>
                      </div>
                    </div>

                    {/* Pro-Tip with Clean Divider */}
                    <div className="pt-2.5 sm:pt-3 border-t border-stone-200/70 text-[11px] sm:text-xs flex items-start gap-2">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-stone-600 leading-relaxed font-light">
                        <strong className="text-stone-800 font-semibold">Sarmila's Pro-Tip:</strong> {acc.proTip}
                      </p>
                    </div>
                  </div>

                  <div
                    className="pt-3.5 sm:pt-6 border-t mt-3.5 sm:mt-6 flex items-center justify-between"
                    style={{ borderColor: activeTheme.border }}
                  >
                    <span className="text-[11px] sm:text-xs text-stone-500 font-medium">Ready to open or optimize?</span>
                    <button
                      id={`explainer-open-${acc.code}-btn`}
                      onClick={onOpenBooking}
                      className="text-xs font-bold flex items-center gap-1 hover:underline transition-all cursor-pointer py-1"
                      style={{ color: activeTheme.primary }}
                    >
                      <span>Discuss {acc.code} Strategy</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* VIEW 3: Smart Tax Stacking Strategy (Roadmap & Execution Steps) */}
          {activeView === 'stacking' && (
            <motion.div
              key="stacking-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="rounded-2xl sm:rounded-3xl border bg-white p-4 sm:p-8 lg:p-10 shadow-xs text-left"
              style={{ borderColor: activeTheme.border }}
            >
              <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
                <div className="text-center space-y-2">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block"
                    style={{ backgroundColor: activeTheme.badgeBg, color: activeTheme.badgeText }}
                  >
                    Tax Efficiency Roadmap
                  </span>
                  <h3 className="font-serif text-xl sm:text-3xl font-bold" style={{ color: activeTheme.textDark }}>
                    How Smart Canadians Stack Registered Accounts
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light max-w-xl mx-auto">
                    Instead of treating your accounts in isolation, a synchronized approach maximizes government grants, tax deductions, and lifetime liquidity.
                  </p>
                </div>

                {/* 4 Step Sequential Process Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      step: '01',
                      title: 'Prioritize FHSA (First Home)',
                      desc: 'Contribute up to $8,000/yr. You get immediate tax deductions like an RRSP, and tax-free withdrawals when buying your qualifying home.',
                      badge: 'Deduction + Growth',
                    },
                    {
                      step: '02',
                      title: 'Capture 20% Matching RESP Grants',
                      desc: 'For children, deposit $2,500/yr to capture the maximum $500 free annual Canada Education Savings Grant (CESG) match from the CRA.',
                      badge: '20% Guaranteed Match',
                    },
                    {
                      step: '03',
                      title: 'Fill Your Flexible TFSA',
                      desc: 'Funnel excess savings into your TFSA ($7,000 in 2026). Unused room carries forward forever and withdrawals can be taken anytime with zero tax.',
                      badge: '100% Tax-Free',
                    },
                    {
                      step: '04',
                      title: 'Balance High-Income with RRSP',
                      desc: 'If in a high tax bracket (above ~$110k), use RRSP deductions to drop down brackets. Reinvest tax refunds to compound savings.',
                      badge: 'Bracket Optimization',
                    },
                  ].map((item, idx) => (
                    <div
                      key={item.step}
                      className="p-4 rounded-xl sm:rounded-2xl border bg-stone-50/50 space-y-2 hover:bg-stone-50 transition-colors"
                      style={{ borderColor: activeTheme.border }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-stone-200 text-stone-800">
                          {item.step}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white border border-stone-200 text-stone-700">
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-stone-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Strip */}
                <div className="pt-2 sm:pt-4 text-center">
                  <button
                    id="stacking-discuss-strategy-btn"
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95 cursor-pointer shadow-xs"
                    style={{ backgroundColor: activeTheme.primary }}
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Review Your Account Contribution Room with Sarmila</span>
                  </button>
                  <p className="text-[11px] text-stone-500 mt-2 font-light">
                    Complimentary 30-min discovery session • Verified CRA room check guidance
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
