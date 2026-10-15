import { useState } from 'react';
import { TrendingUp, Shield, HeartPulse, BriefcaseBusiness, ArrowUpRight, Check, Minus, Plus } from 'lucide-react';
import { SERVICES_LIST } from '../data/content';

const summaries = [
  { title: 'Grow your wealth', text: 'Give your savings a purpose, from your first home to the retirement you imagine.', detail: 'TFSA, RRSP, RESP & FHSA', icon: TrendingUp },
  { title: 'Protect your family', text: 'Help the people you love stay financially secure, whatever life brings.', detail: 'Life insurance & estate planning', icon: Shield },
  { title: 'Protect your income', text: 'Create a safety net so you can focus on recovery when your health changes.', detail: 'Critical illness & disability', icon: HeartPulse },
  { title: 'Build your business', text: 'Look after the business you’ve built and the people who help it grow.', detail: 'Corporate planning & benefits', icon: BriefcaseBusiness },
];

export function ServicesSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  return <section id="services" className="section services-section"><div className="site-container">
    <div className="section-heading split-heading"><div><p className="section-label">How I can help</p><h2>A plan for your life.<br />Not just your money.</h2></div><p>Big milestones. Everyday peace of mind. Get thoughtful guidance that connects your financial decisions to what matters to you.</p></div>
    <div className="services-grid">{summaries.map((service, index) => <article className={`service-card ${selected === index ? 'is-selected' : ''}`} key={service.title}>
      <service.icon className="service-icon" size={30} strokeWidth={1.35} /><h3>{service.title}</h3><p>{service.text}</p><span className="service-detail">{service.detail}</span>
      <button aria-expanded={selected === index} aria-controls={`service-detail-${index}`} onClick={() => setSelected(selected === index ? null : index)}>Explore options {selected === index ? <Minus size={18} /> : <Plus size={18} />}</button>
    </article>)}</div>
    {SERVICES_LIST.map((service, index) => <div key={service.id} id={`service-detail-${index}`} hidden={selected !== index} className="service-expanded"><div><h3>{service.title}</h3><p>{service.description}</p><button className="text-link" onClick={onOpenBooking}>Let’s explore your options <ArrowUpRight size={17} /></button></div><ul>{service.features.map(feature => <li key={feature}><Check size={17} /><span>{feature}</span></li>)}</ul></div>)}
    <div className="services-footnote"><span>Not sure where to begin? That’s what the first conversation is for.</span><button className="text-link" onClick={onOpenBooking}>Let’s find your starting point <ArrowUpRight size={16} /></button></div>
  </div></section>;
}

