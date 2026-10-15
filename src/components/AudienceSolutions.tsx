import { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { TARGET_AUDIENCES } from '../data/content';

export function AudienceSolutions({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [active, setActive] = useState(0);
  const titles = ['Starting a new life in Canada', 'Finding your feet as a professional', 'Growing a family', 'Building a business'];
  return <section id="who-i-help" className="section audience-section"><div className="site-container audience-grid"><div className="section-heading"><p className="section-label">Wherever you are in life</p><h2>Your next chapter.<br />Your kind of plan.</h2><p>You don’t need to have it all figured out. We’ll start where you are and work towards where you want to be.</p></div><div className="audience-list">{TARGET_AUDIENCES.map((audience, index) => <div className="audience-item" key={audience.id}><h3><button aria-expanded={active === index} aria-controls={`audience-${audience.id}`} onClick={() => setActive(active === index ? -1 : index)}>{titles[index]}{active === index ? <Minus size={20} /> : <Plus size={20} />}</button></h3><div id={`audience-${audience.id}`} hidden={active !== index}><p>{audience.description}</p><ul>{audience.bulletPoints.map(point => <li key={point}>{point}</li>)}</ul><button className="text-link" onClick={onOpenBooking}>Talk about your goals <ArrowUpRight size={16} /></button></div></div>)}</div></div></section>;
}

