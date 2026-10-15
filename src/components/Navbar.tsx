import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X, Leaf } from 'lucide-react';

const links = [['About Sarmila', '#about'], ['How I can help', '#services'], ['Wealth calculator', '#calculator'], ['FAQs', '#faq']];

export function Navbar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return <>
    <div className="announcement"><Leaf size={13} /><span>Personal financial guidance for your life in Canada</span></div>
    <header className="site-header">
      <nav className="site-container navigation" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Sarmila Reddy home"><span className="brand-monogram" aria-hidden="true">sr<span>.</span></span><span className="brand-name">Sarmila Reddy<small>Financial advisor</small></span></a>
        <div className="desktop-links">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        <button className="button button-primary nav-book" id="nav-book-consultation-btn" onClick={onOpenBooking}>Book a conversation <ArrowUpRight size={16} /></button>
        <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={17} /></a>)}<button className="button button-primary" onClick={() => { setOpen(false); onOpenBooking(); }}>Book a conversation <ArrowUpRight size={16} /></button></nav>}
    </header>
  </>;
}

