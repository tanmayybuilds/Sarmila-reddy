import { ArrowDown, ArrowUpRight, Check, ShieldCheck, Sprout, MessageCircle } from 'lucide-react';
import { ADVISOR_PROFILE } from '../data/content';

export function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section id="home" className="hero">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="hero-intro"><span /> Financial guidance, with you at the centre.</p>
          <h1>A little clarity.<br />A more confident<br />tomorrow.</h1>
          <p className="hero-description">Your life is more than a set of numbers. Let’s build a financial plan that protects what matters and makes room for what’s next.</p>
          <div className="hero-actions">
            <button id="hero-book-consultation-btn" className="button button-primary" onClick={onOpenBooking}>Let’s talk about your future <ArrowUpRight size={18} /></button>
            <span className="consultation-note"><Check size={14} /> Complimentary, 30 minutes</span>
          </div>
          <a className="explore-link" href="#services"><span><ArrowDown size={16} /></span> Find the right support for you</a>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame"><img src={ADVISOR_PROFILE.images.hero} alt="Sarmila Reddy sitting at her office desk" fetchPriority="high" width="1024" height="938" /></div>
          <div className="portrait-caption"><div><strong>Sarmila Reddy</strong><span>Financial advisor & entrepreneur</span></div><ShieldCheck size={27} strokeWidth={1.3} /></div>
          <div className="portrait-note"><Sprout size={24} strokeWidth={1.4} /><span>Rooted in trust.<br /><strong>Built around you.</strong></span></div>
        </div>
      </div>
      <div className="site-container reassurance-strip">
        <div><ShieldCheck /><span>Licensed in Canada</span></div>
        <div><MessageCircle /><span>Real conversations. Clear answers.</span></div>
        <div><Sprout /><span>Support for every life stage</span></div>
      </div>
    </section>
  );
}

