import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Comp_name Enterprises, I am interested in your industrial fabrication and tank manufacturing services. Please share details.'
  )}`;

  return (
    <>
      <header
        className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(16, 29, 44, 0.96)' : 'rgba(16, 29, 44, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          transition: 'all 0.3s ease',
          height: 'var(--nav-height)'
        }}
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo Link */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Logo variant="light" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '2rem' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1.75rem', margin: 0, padding: 0 }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      style={{
                        color: isActive ? 'var(--color-orange)' : 'var(--color-white)',
                        fontWeight: 600,
                        fontSize: '0.92rem',
                        letterSpacing: '0.01em',
                        padding: '0.4rem 0',
                        position: 'relative',
                        transition: 'color 0.2s ease'
                      }}
                      className="nav-link-item"
                    >
                      {link.label}
                      {isActive && (
                        <span
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: 'var(--color-orange)',
                            borderRadius: '2px'
                          }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Quick Contact & Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-whatsapp"
                title="Chat on WhatsApp"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="btn btn-sm btn-primary"
              >
                <span>Request Quote</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="mobile-toggle" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-whatsapp"
              style={{ padding: '0.45rem 0.75rem', fontSize: '0.8rem' }}
              title="Chat on WhatsApp"
            >
              <MessageSquare size={15} />
              <span className="mobile-wa-text">Chat</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--color-white)',
                padding: '0.5rem',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 20, 30, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 999
          }}
        >
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: 'var(--nav-height)',
              right: 0,
              bottom: 0,
              width: '85%',
              maxWidth: '340px',
              backgroundColor: 'var(--color-navy)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto'
            }}
          >
            <div>
              <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                  Navigation Menu
                </span>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      style={{
                        display: 'block',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: activeSection === link.href.replace('#', '') ? 'var(--color-orange)' : 'var(--color-white)',
                        padding: '0.3rem 0'
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
              <a
                href={COMPANY_INFO.contact.phoneHref}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--color-white)',
                  fontSize: '0.95rem',
                  fontWeight: 600
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'rgba(242, 140, 40, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-orange)' }}>
                  <Phone size={18} />
                </div>
                <span>{COMPANY_INFO.contact.primaryPhone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>Request Quote</span>
                <ArrowUpRight size={18} />
              </a>

              <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-grey)', textAlign: 'center', marginTop: '0.5rem' }}>
                Lalit Kata, Sonar Pada, Dombivli East
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
