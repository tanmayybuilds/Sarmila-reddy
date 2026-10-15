import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Clock, Video, X } from 'lucide-react';
import { ADVISOR_PROFILE } from '../data/content';
import { ConsultationForm } from './ConsultationForm';

export function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    const element = dialog.current;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { element?.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, [isOpen]);
  if (!isOpen) return null;
  return <dialog ref={dialog} className="booking-dialog" aria-labelledby="booking-modal-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="booking-dialog-content"><button className="dialog-close" aria-label="Close booking modal" onClick={onClose} autoFocus><X size={21} /></button><p className="section-label">A conversation is a good start</p><h2 id="booking-modal-title">Let’s talk about you.</h2><p>Take the first step with a complimentary, no-pressure conversation with Sarmila.</p><div className="meeting-details"><span><Clock size={16} /> 30 minutes</span><span><Video size={16} /> Video or phone</span></div>
    <div className="booking-choice"><button aria-pressed={!showForm} onClick={() => setShowForm(false)}>Choose a time</button><button aria-pressed={showForm} onClick={() => setShowForm(true)}>Send an inquiry</button></div>
    {showForm ? <ConsultationForm /> : <div className="scheduler-panel"><p>Find a time that works for you on Sarmila’s calendar. You can choose your time zone before booking.</p><a id="modal-calendly-launch-btn" className="button button-primary" href={ADVISOR_PROFILE.calendlyUrl} target="_blank" rel="noopener noreferrer">Open Calendly <ArrowUpRight size={17} /></a><small>Opens in a new tab</small></div>}
    </div>
  </dialog>;
}

