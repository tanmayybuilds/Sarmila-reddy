import { ArrowUpRight } from 'lucide-react';
import { WORK_PROCESS } from '../data/content';

export function ProcessSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  return <section id="process" className="section process-section"><div className="site-container"><div className="section-heading centered-heading"><p className="section-label">A simple way forward</p><h2>From “where do I start?”<br />to “I have a plan.”</h2><p>We take it one step at a time, together.</p></div><ol className="process-grid">{WORK_PROCESS.map(step => <li key={step.step}><span className="step-number">{step.step}</span><span className="step-time">{step.time}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol><div className="centered-action"><button className="button button-primary" onClick={onOpenBooking}>Start with a conversation <ArrowUpRight size={17} /></button></div></div></section>;
}

