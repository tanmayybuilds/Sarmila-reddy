import { ArrowUpRight, Clock, Video, Check } from 'lucide-react';
import { ADVISOR_PROFILE } from '../data/content';
import { ConsultationForm } from './ConsultationForm';

export function BookingSection() {
  return <section id="book-consultation" className="section booking-section"><div className="site-container booking-grid"><div className="booking-copy"><p className="section-label">Your next step starts here</p><h2>Let’s make your<br />future feel a<br />little clearer.</h2><p>Bring your questions, your goals, or simply yourself. We’ll figure out where to start.</p><ul><li><Clock size={18} /> 30 minutes, just for you</li><li><Video size={18} /> Meet by video or phone</li><li><Check size={18} /> Complimentary, with no obligation</li></ul><a className="button button-light" href={ADVISOR_PROFILE.calendlyUrl} target="_blank" rel="noopener noreferrer">Choose a time on Calendly <ArrowUpRight size={17} /></a><span className="booking-email">Or email <a href={`mailto:${ADVISOR_PROFILE.email}`}>{ADVISOR_PROFILE.email}</a></span></div><div className="booking-form-panel"><h3>Prefer to reach out first?</h3><p>Share a little about yourself.</p><ConsultationForm /></div></div></section>;
}

