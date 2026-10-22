import React, { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Calculator, Sparkles, TrendingUp, PiggyBank, DollarSign, ShieldAlert, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';

interface CalculatorProps {
  onOpenBooking: () => void;
}

export const CanadianWealthCalculator: React.FC<CalculatorProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();

  const [initialDeposit, setInitialDeposit] = useState<number>(5000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [years, setYears] = useState<number>(20);
  const [rateOfReturn, setRateOfReturn] = useState<number>(7);
  const [accountType, setAccountType] = useState<'TFSA' | 'RRSP' | 'FHSA' | 'NON_REG'>('TFSA');

  // Compound interest calculation
  const calculations = useMemo(() => {
    const r = rateOfReturn / 100 / 12;
    const n = years * 12;

    // FV of lump sum: P * (1 + r)^n
    const fvInitial = initialDeposit * Math.pow(1 + r, n);

    // FV of monthly series: PMT * ((1 + r)^n - 1) / r
    const fvMonthly = r > 0 ? monthlyContribution * ((Math.pow(1 + r, n) - 1) / r) : monthlyContribution * n;

    const totalPortfolio = Math.round(fvInitial + fvMonthly);
    const totalContributed = Math.round(initialDeposit + (monthlyContribution * n));
    const compoundGrowth = Math.max(0, totalPortfolio - totalContributed);

    // Estimated Canadian tax savings estimate
    let taxSaved = 0;
    if (accountType === 'TFSA') {
      taxSaved = Math.round(compoundGrowth * 0.15);
    } else if (accountType === 'RRSP') {
      taxSaved = Math.round(totalContributed * 0.30);
    } else if (accountType === 'FHSA') {
      taxSaved = Math.round((Math.min(totalContributed, 40000) * 0.30) + (compoundGrowth * 0.15));
    } else {
      taxSaved = 0;
    }

    return {
      totalPortfolio,
      totalContributed,
      compoundGrowth,
      taxSaved,
    };
  }, [initialDeposit, monthlyContribution, years, rateOfReturn, accountType]);

  const triggerCelebration = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: [activeTheme.primary, activeTheme.accent, '#10B981'],
    });
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-8 sm:py-14 lg:py-16 transition-colors duration-500 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-5 sm:mb-8"
        >
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
            style={{
              backgroundColor: activeTheme.badgeBg,
              color: activeTheme.badgeText,
            }}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Canadian Wealth Simulator</span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: activeTheme.textDark }}
          >
            Calculate Your{' '}
            <span className="italic font-serif font-normal" style={{ color: activeTheme.primary }}>
              Compound Growth in Canada.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            See the mathematical impact of time, steady monthly contributions, and Canadian registered tax shelters on your family's future net worth.
          </p>
        </motion.div>

        {/* Calculator Main Shell */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl sm:rounded-3xl border bg-white p-3.5 sm:p-8 lg:p-10 shadow-xs"
          style={{ borderColor: activeTheme.border }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              {/* Account Type Selector */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                  Select Canadian Account Vehicle
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                  {[
                    { id: 'TFSA', label: 'TFSA', desc: 'Tax-Free Growth' },
                    { id: 'RRSP', label: 'RRSP', desc: 'Tax Deductible' },
                    { id: 'FHSA', label: 'FHSA', desc: 'First Home' },
                    { id: 'NON_REG', label: 'Taxable', desc: 'Standard' },
                  ].map(acc => {
                    const isSelected = accountType === acc.id;
                    return (
                      <button
                        key={acc.id}
                        type="button"
                        onClick={() => setAccountType(acc.id as any)}
                        className={`p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border text-center transition-all cursor-pointer min-h-[38px] sm:min-h-[44px] ${
                          isSelected ? 'font-bold border-2 shadow-xs' : 'text-stone-600 hover:bg-stone-50'
                        }`}
                        style={{
                          backgroundColor: isSelected ? activeTheme.primaryLight : '#FFFFFF',
                          borderColor: isSelected ? activeTheme.primary : activeTheme.border,
                          color: isSelected ? activeTheme.primary : undefined,
                        }}
                      >
                        <div className="text-xs sm:text-sm font-bold">{acc.label}</div>
                        <div className="text-[10px] sm:text-xs text-stone-500">{acc.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-3 sm:space-y-5">
                {/* Initial Balance */}
                <div>
                  <div className="flex justify-between items-center text-[11px] sm:text-sm mb-1 sm:mb-1.5">
                    <span className="font-semibold text-stone-700">Initial Savings / Balance</span>
                    <span className="font-bold text-stone-900 text-xs sm:text-base">{formatCurrency(initialDeposit)}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={50000}
                    step={1000}
                    value={initialDeposit}
                    aria-label="Initial Savings or Balance"
                    onChange={e => setInitialDeposit(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-stone-200"
                    style={{ accentColor: activeTheme.primary }}
                  />
                  <div className="flex justify-between text-[10px] sm:text-xs text-stone-500 mt-0.5 sm:mt-1">
                    <span>$0</span>
                    <span>$25,000</span>
                    <span>$50,000+</span>
                  </div>
                </div>

                {/* Monthly Contribution with Mobile Quick Presets */}
                <div>
                  <div className="flex justify-between items-center text-[11px] sm:text-sm mb-1 sm:mb-1.5">
                    <span className="font-semibold text-stone-700">Monthly Contribution</span>
                    <span className="font-bold text-stone-900 text-xs sm:text-base">{formatCurrency(monthlyContribution)} / mo</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={3000}
                    step={50}
                    value={monthlyContribution}
                    aria-label="Monthly Contribution"
                    onChange={e => setMonthlyContribution(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-stone-200"
                    style={{ accentColor: activeTheme.primary }}
                  />
                  <div className="flex justify-between text-[10px] sm:text-xs text-stone-500 mt-0.5 sm:mt-1">
                    <span>$50/mo</span>
                    <span>$1,500/mo</span>
                    <span>$3,000/mo</span>
                  </div>

                  {/* Quick-tap presets for fast mobile interaction */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-2 pt-0.5">
                    <span className="text-[11px] sm:text-xs text-stone-600 font-semibold mr-0.5 sm:mr-1">Quick:</span>
                    {[200, 500, 1000, 1500].map(amount => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setMonthlyContribution(amount)}
                        className={`text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-full border transition-colors cursor-pointer min-h-[32px] sm:min-h-[44px] flex items-center justify-center ${
                          monthlyContribution === amount ? 'font-bold bg-stone-900 text-white border-stone-900' : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200 active:bg-stone-200'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Years */}
                <div>
                  <div className="flex justify-between items-center text-[11px] sm:text-sm mb-1 sm:mb-1.5">
                    <span className="font-semibold text-stone-700">Investment Horizon</span>
                    <span className="font-bold text-stone-900 text-xs sm:text-base">{years} Years</span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={35}
                    step={1}
                    value={years}
                    aria-label="Investment Horizon in Years"
                    onChange={e => setYears(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-stone-200"
                    style={{ accentColor: activeTheme.primary }}
                  />
                  <div className="flex justify-between text-[10px] sm:text-xs text-stone-500 mt-0.5 sm:mt-1">
                    <span>3 yrs</span>
                    <span>20 yrs</span>
                    <span>35 yrs</span>
                  </div>
                </div>

                {/* Expected Return */}
                <div>
                  <div className="flex justify-between items-center text-[11px] sm:text-sm mb-1 sm:mb-1.5">
                    <span className="font-semibold text-stone-700">Estimated Annual Return</span>
                    <span className="font-bold text-stone-900 text-xs sm:text-base">{rateOfReturn}%</span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={11}
                    step={0.5}
                    value={rateOfReturn}
                    aria-label="Estimated Annual Return Rate"
                    onChange={e => setRateOfReturn(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-stone-200"
                    style={{ accentColor: activeTheme.primary }}
                  />
                  <div className="flex justify-between text-[10px] sm:text-xs text-stone-500 mt-0.5 sm:mt-1">
                    <span>3% (Conservative)</span>
                    <span>7% (Balanced)</span>
                    <span>11% (Aggressive)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Output Panel with Editorial Vertical Divider */}
            <div
              className="lg:col-span-5 pt-4 lg:pt-0 lg:pl-8 lg:border-l space-y-4 sm:space-y-6 text-left"
              style={{
                borderColor: activeTheme.border,
              }}
            >
              <div>
                <span className="text-xs sm:text-sm font-semibold text-stone-600">
                  Projected Future Wealth ({years} Years)
                </span>
                <motion.div
                  key={calculations.totalPortfolio}
                  initial={{ scale: 0.98, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="font-serif text-2xl sm:text-4xl font-bold tracking-tight mt-0.5 sm:mt-1"
                  style={{ color: activeTheme.primary }}
                >
                  {formatCurrency(calculations.totalPortfolio)}
                </motion.div>
              </div>

              {/* Progress Bar Visualization */}
              <div className="space-y-1 sm:space-y-1.5">
                <div className="w-full h-2 sm:h-3 rounded-full overflow-hidden bg-stone-200 flex">
                  <div
                    className="h-full bg-stone-400 transition-all duration-300"
                    style={{
                      width: `${Math.round((calculations.totalContributed / calculations.totalPortfolio) * 100)}%`,
                    }}
                    title="Your Contributed Principal"
                  />
                  <div
                    className="h-full transition-all duration-300"
                    style={{
                      backgroundColor: activeTheme.primary,
                      width: `${Math.round((calculations.compoundGrowth / calculations.totalPortfolio) * 100)}%`,
                    }}
                    title="Compound Growth"
                  />
                </div>
                <div className="flex justify-between text-[11px] sm:text-sm text-stone-600 flex-wrap gap-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-stone-400" /> Contributed: {formatCurrency(calculations.totalContributed)}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold" style={{ color: activeTheme.primary }}>
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: activeTheme.primary }} />
                    Growth: {formatCurrency(calculations.compoundGrowth)}
                  </span>
                </div>
              </div>

              {/* Estimated Canadian Tax Shelter Savings */}
              <div className="py-2.5 sm:py-3 border-y border-stone-200/80 space-y-0.5 sm:space-y-1">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-semibold text-stone-700">Estimated Canadian Tax Advantage:</span>
                  <span className="font-bold text-emerald-700">+{formatCurrency(calculations.taxSaved)}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                  Taxes sheltered through registered Canadian accounts vs. paying regular capital gains or income tax.
                </p>
              </div>

              {/* CTA */}
              <div className="space-y-1.5 sm:space-y-2 pt-0.5 sm:pt-1">
                <button
                  id="calc-book-strategy-btn"
                  onClick={() => {
                    triggerCelebration();
                    onOpenBooking();
                  }}
                  className="w-full min-h-[42px] sm:min-h-[48px] py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  style={{ backgroundColor: activeTheme.primary }}
                >
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Explore Your Custom Strategy</span>
                </button>
                <p className="text-center text-[10px] sm:text-[11px] text-stone-500 leading-relaxed pt-1">
                  * Hypothetical calculator modeling is for illustrative and educational purposes only. Assumed compound growth rates are hypothetical and do not represent past or future performance. Actual returns vary with market fluctuations and fees.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

