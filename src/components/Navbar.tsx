import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Boss Timer', href: '#bosstimer' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: '-72px 0px 0px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="text-emerald-400 font-bold text-sm tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
            MY GUILD HUB
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${activeSection === l.href.slice(1) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#planos" className="cta-btn cta-btn-sm" onClick={(e) => handleNavClick(e, '#planos')}>
            COMEÇAR AGORA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-400 p-2 transition-colors hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu — slide animado via CSS */}
      <div
        className={`navbar-mobile-menu md:hidden ${open ? 'open' : ''}`}
        style={{ background: 'rgba(3,7,18,0.97)', backdropFilter: 'blur(20px)', borderTop: open ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
      >
        <div className="px-6 py-6 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`block py-3 text-base font-medium border-b border-white/5 transition-colors ${
                activeSection === l.href.slice(1) ? 'text-emerald-400' : 'text-gray-300 hover:text-white'
              }`}
              onClick={(e) => handleNavClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#planos"
              className="cta-btn cta-btn-sm"
              style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
              onClick={(e) => handleNavClick(e, '#planos')}
            >
              COMEÇAR AGORA
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
