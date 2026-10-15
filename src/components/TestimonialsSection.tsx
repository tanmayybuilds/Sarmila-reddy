import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];
  return <section id="testimonials" className="section testimonials-section"><div className="site-container testimonial-layout"><div><p className="section-label">In their words</p><h2>Clarity makes<br />a difference.</h2><div className="quote-controls"><button aria-label="Previous client story" onClick={() => setIndex((index + TESTIMONIALS.length - 1) % TESTIMONIALS.length)}><ArrowLeft size={19} /></button><span>{index + 1} / {TESTIMONIALS.length}</span><button aria-label="Next client story" onClick={() => setIndex((index + 1) % TESTIMONIALS.length)}><ArrowRight size={19} /></button></div></div><div className="testimonial-content" aria-live="polite" aria-atomic="true"><Quote size={35} strokeWidth={1} /><blockquote>“{testimonial.quote}”</blockquote><div className="testimonial-author"><span className="client-initial">{testimonial.clientName[0]}</span><div><strong>{testimonial.clientName}</strong><span>{testimonial.category} · {testimonial.location}</span></div></div></div></div></section>;
}

