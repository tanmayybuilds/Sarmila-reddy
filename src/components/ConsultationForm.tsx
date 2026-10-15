import { useId, useState } from 'react';
import { ArrowUpRight, Mail, Check } from 'lucide-react';
import { ADVISOR_PROFILE } from '../data/content';

const topics = ['Savings & investments', 'Life insurance', 'Living benefits', 'Education savings', 'New to Canada', 'Business planning'];
export function ConsultationForm() {
  const id = useId();
  const [prepared, setPrepared] = useState(false);
  const [data, setData] = useState({ name: '', email: '', phone: '', province: 'British Columbia', notes: '', topics: [] as string[] });
  const emailBody = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nProvince: ${data.province}\nTopics: ${data.topics.join(', ')}\nNotes: ${data.notes}`;
  if (prepared) return <div className="inquiry-ready" role="status"><span className="ready-icon"><Check /></span><h3>Your email draft is ready.</h3><p>Your request hasn’t been sent yet. Open it in your email app, review the details, and send it to Sarmila.</p><a className="button button-primary" href={`mailto:${ADVISOR_PROFILE.email}?subject=${encodeURIComponent('Consultation inquiry from ' + data.name)}&body=${encodeURIComponent(emailBody)}`}>Open email draft <Mail size={17} /></a><button className="text-link" onClick={() => setPrepared(false)}>Edit my details</button></div>;
  return <form className="consultation-form" onSubmit={event => { event.preventDefault(); setPrepared(true); }}>
    <div className="form-row"><div><label htmlFor={id + '-name'}>Your name <span>(required)</span></label><input id={id + '-name'} name="name" autoComplete="name" required value={data.name} placeholder="First and last name" onChange={e => setData({ ...data, name: e.target.value })} /></div><div><label htmlFor={id + '-email'}>Email <span>(required)</span></label><input id={id + '-email'} name="email" autoComplete="email" type="email" required value={data.email} placeholder="you@example.com" onChange={e => setData({ ...data, email: e.target.value })} /></div></div>
    <div className="form-row"><div><label htmlFor={id + '-phone'}>Phone <span>(optional)</span></label><input id={id + '-phone'} name="tel" autoComplete="tel" type="tel" value={data.phone} placeholder="Your phone number" onChange={e => setData({ ...data, phone: e.target.value })} /></div><div><label htmlFor={id + '-province'}>Province or territory</label><select id={id + '-province'} value={data.province} onChange={e => setData({ ...data, province: e.target.value })}>{['British Columbia', 'Alberta', 'Saskatchewan', 'Manitoba', 'Ontario', 'Quebec', 'New Brunswick', 'Nova Scotia', 'Prince Edward Island', 'Newfoundland and Labrador', 'Yukon', 'Northwest Territories', 'Nunavut'].map(province => <option key={province}>{province}</option>)}</select></div></div>
    <fieldset><legend>What’s on your mind?</legend><div className="topic-options">{topics.map(topic => <button type="button" aria-pressed={data.topics.includes(topic)} key={topic} onClick={() => setData({ ...data, topics: data.topics.includes(topic) ? data.topics.filter(t => t !== topic) : [...data.topics, topic] })}>{data.topics.includes(topic) && <Check size={13} />}{topic}</button>)}</div></fieldset>
    <div><label htmlFor={id + '-notes'}>Anything you’d like me to know? <span>(optional)</span></label><textarea id={id + '-notes'} rows={3} value={data.notes} placeholder="Your goals, questions, or a good time to reach you…" onChange={e => setData({ ...data, notes: e.target.value })} /></div>
    <button className="button button-primary" type="submit">Prepare my inquiry <ArrowUpRight size={17} /></button><p className="form-note">This prepares an email for you to review and send from your email app.</p>
  </form>;
}

