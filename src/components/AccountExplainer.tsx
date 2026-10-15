import { ArrowUpRight } from 'lucide-react';
import { CANADIAN_ACCOUNTS_GUIDE } from '../data/content';

export function AccountExplainer({ onOpenBooking }: { onOpenBooking: () => void }) {
  return <section id="accounts" className="section accounts-section"><div className="site-container"><div className="section-heading split-heading"><div><p className="section-label">A little knowledge goes a long way</p><h2>Four accounts.<br />Different possibilities.</h2></div><p>Canadian savings accounts can feel like an alphabet soup. Let’s make the essentials a little clearer.</p></div><div className="accounts-grid">{CANADIAN_ACCOUNTS_GUIDE.map(account => <article key={account.code} className="account-card"><h3>{account.code}</h3><p className="account-name">{account.fullName}</p><dl><dt>How it works</dt><dd>{account.taxTreatment}</dd><dt>Consider it for</dt><dd>{account.bestFor}</dd></dl><button className="text-link" onClick={onOpenBooking}>Discuss {account.code} <ArrowUpRight size={16} /></button></article>)}</div></div></section>;
}

