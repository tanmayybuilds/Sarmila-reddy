import { useMemo, useState } from 'react';
import { ArrowUpRight, Info } from 'lucide-react';

const currency = (value: number) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(value);
const accounts = ['TFSA', 'RRSP', 'FHSA', 'Non-registered'] as const;

export function CanadianWealthCalculator({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [initial, setInitial] = useState(5000);
  const [monthly, setMonthly] = useState(500);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(7);
  const [account, setAccount] = useState<typeof accounts[number]>('TFSA');
  const projection = useMemo(() => {
    const r = rate / 1200;
    return Array.from({ length: years + 1 }, (_, year) => {
      const months = year * 12;
      const factor = Math.pow(1 + r, months);
      return { contributed: initial + monthly * months, total: initial * factor + (r > 0 ? monthly * (factor - 1) / r : monthly * months) };
    });
  }, [initial, monthly, years, rate]);
  const total = projection[years].total;
  const contributed = projection[years].contributed;
  const max = Math.max(total, 1);
  const points = (key: 'total' | 'contributed') => projection.map((point, i) => `${12 + i / years * 476},${185 - point[key] / max * 165}`).join(' ');
  const controls = [
    { id: 'initial', label: 'Starting savings', value: initial, min: 0, max: 50000, step: 1000, set: setInitial, display: currency(initial), ends: ['$0', '$50,000'] },
    { id: 'monthly', label: 'Monthly contribution', value: monthly, min: 50, max: 3000, step: 50, set: setMonthly, display: currency(monthly), ends: ['$50', '$3,000'] },
    { id: 'years', label: 'Time to grow', value: years, min: 3, max: 35, step: 1, set: setYears, display: `${years} years`, ends: ['3 years', '35 years'] },
    { id: 'rate', label: 'Annual return assumption', value: rate, min: 0, max: 11, step: 0.5, set: setRate, display: `${rate}%`, ends: ['0%', '11%'] },
  ];
  return <section id="calculator" className="section calculator-section"><div className="site-container">
    <div className="section-heading split-heading"><div><p className="section-label">Picture the possibilities</p><h2>Small steps today.<br />Room to grow tomorrow.</h2></div><p>Explore how time and regular contributions could shape your savings. Move the sliders and make it your own.</p></div>
    <div className="calculator-shell"><div className="calculator-inputs"><fieldset className="account-selector"><legend>Your account</legend><div>{accounts.map(item => <button type="button" key={item} aria-pressed={account === item} onClick={() => setAccount(item)}>{item}</button>)}</div></fieldset>
      {controls.map(control => <div className="range-control" key={control.id}><div><label htmlFor={`calculator-${control.id}`}>{control.label}</label><output htmlFor={`calculator-${control.id}`}>{control.display}</output></div><input id={`calculator-${control.id}`} type="range" min={control.min} max={control.max} step={control.step} value={control.value} aria-valuetext={control.display} onChange={event => control.set(Number(event.target.value))} /><div className="range-endpoints"><span>{control.ends[0]}</span><span>{control.ends[1]}</span></div>{control.id === 'monthly' && <div className="contribution-presets">{[200, 500, 1000, 1500].map(amount => <button key={amount} aria-pressed={monthly === amount} onClick={() => setMonthly(amount)}>{currency(amount)}</button>)}</div>}</div>)}
    </div><div className="calculator-results"><p>Illustrative value after {years} years</p><output className="projected-total" aria-live="polite">{currency(total)}</output><span className="projection-account">{account} savings scenario · CAD</span>
      <svg viewBox="0 0 500 215" role="img" aria-label={`Illustrative savings growth over ${years} years: ${currency(contributed)} contributed and ${currency(total - contributed)} growth.`} className="growth-chart">
        {[45, 115, 185].map(y => <line key={y} x1="12" y1={y} x2="488" y2={y} stroke="#cfdbd1" strokeDasharray="3 5" />)}
        <polygon points={`12,185 ${points('total')} 488,185`} fill="#dbe8db" />
        <polyline points={points('contributed')} fill="none" stroke="#8c9b8b" strokeWidth="2" strokeDasharray="5 5" />
        <polyline points={points('total')} fill="none" stroke="#234e3d" strokeWidth="3" />
        <text x="12" y="211">Today</text><text x="488" y="211" textAnchor="end">Year {years}</text>
      </svg>
      <dl className="projection-breakdown"><div><dt><span className="legend-dot principal" /> Your contributions</dt><dd>{currency(contributed)}</dd></div><div><dt><span className="legend-dot" /> Potential growth</dt><dd>{currency(total - contributed)}</dd></div></dl>
      <button className="button button-primary" id="calc-book-strategy-btn" onClick={onOpenBooking}>Let’s talk about your savings <ArrowUpRight size={17} /></button>
    </div></div><p className="calculator-disclaimer"><Info size={15} /> Educational illustration, not a guaranteed return. Assumes monthly compounding and contributions at month-end. Taxes, fees, inflation, and account eligibility or contribution limits are not included. Account selection labels your scenario; it does not change the calculation.</p>
  </div></section>;
}

