import { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { FAQS, ADVISOR_PROFILE } from '../data/content';

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return <section id="faq" className="section faq-section"><div className="site-container faq-grid"><div className="section-heading"><p className="section-label">Let’s clear things up</p><h2>Good questions.<br />Straight answers.</h2><p>Have something else on your mind?</p><a className="text-link" href={`mailto:${ADVISOR_PROFILE.email}`}>Ask Sarmila <ArrowUpRight size={16} /></a></div><div>{FAQS.map((faq, index) => <div className="faq-item" key={faq.question}><h3><button id={`faq-toggle-${index}`} aria-expanded={open === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpen(open === index ? null : index)}>{faq.question}{open === index ? <Minus size={18} /> : <Plus size={18} />}</button></h3><div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-toggle-${index}`} hidden={open !== index}><p>{faq.answer}</p></div></div>)}</div></div></section>;
}

