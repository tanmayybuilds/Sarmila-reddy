import { ArrowUpRight, Check } from 'lucide-react';
import { ADVISOR_PROFILE } from '../data/content';

export function AboutSarmila({ onOpenBooking }: { onOpenBooking: () => void }) {
  return <section id="about" className="section about-section"><div className="site-container about-grid">
    <div className="about-visual"><img src={ADVISOR_PROFILE.images.workingDesk} alt="Sarmila at work, ready for a conversation" loading="lazy" width="1024" height="1024" /><div className="about-image-caption">A real person in your corner.</div></div>
    <div className="about-copy"><p className="section-label">Hello, I’m Sarmila</p><h2>Good advice starts<br />with listening.</h2><p>I’m a financial advisor and entrepreneur who believes you deserve to understand your money, feel heard, and move forward with confidence.</p><p>Whether you’re building a new life in Canada, raising a family, or growing a business, I take the time to understand your story before we talk about solutions.</p><ul className="simple-checks"><li><Check /> Plain language, without the jargon</li><li><Check /> A plan shaped around your priorities</li><li><Check /> A relationship that grows with you</li></ul><button className="text-link" onClick={onOpenBooking}>Get to know each other <ArrowUpRight size={17} /></button><div className="advisor-signature">Sarmila Reddy<span>Licensed financial advisor · Canada</span></div></div>
  </div></section>;
}

