import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        backgroundColor: 'var(--color-navy-dark)',
        color: 'var(--color-white)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem'
      }}
      className="footer-section"
    >
      <div className="container">
        
        {/* Top Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Brand & Business Identity Column */}
          <div style={{ maxWidth: '340px' }}>
            <Logo variant="light" size="lg" className="footer-logo" />
            
            <p style={{ color: 'var(--color-slate-grey)', fontSize: '0.9rem', lineHeight: 1.6, marginTop: '1.25rem', marginBottom: '1.5rem' }}>
              Industrial engineering, heavy metal fabrication, and process tank manufacturing based in Dombivli East, Maharashtra. Delivering high-pressure vessels, filter systems, and custom steel structures.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: '#94A3B8' }}>
              <div><strong>GSTIN:</strong> {COMPANY_INFO.businessDetails.gstin}</div>
              <div><strong>Proprietor:</strong> {COMPANY_INFO.businessDetails.proprietor}</div>
              <div><strong>Established:</strong> {COMPANY_INFO.businessDetails.establishmentYear}</div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--color-white)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} style={{ color: 'var(--color-slate-grey)', fontSize: '0.9rem' }} className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} style={{ color: 'var(--color-slate-grey)', fontSize: '0.9rem' }} className="footer-link">
                  About Us & Facility
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} style={{ color: 'var(--color-slate-grey)', fontSize: '0.9rem' }} className="footer-link">
                  Product Catalogue
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} style={{ color: 'var(--color-slate-grey)', fontSize: '0.9rem' }} className="footer-link">
                  Fabrication Services
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, 'gallery')} style={{ color: 'var(--color-slate-grey)', fontSize: '0.9rem' }} className="footer-link">
                  Workshop Gallery
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} style={{ color: 'var(--color-slate-grey)', fontSize: '0.9rem' }} className="footer-link">
                  Contact & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Products Catalogue List */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--color-white)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Manufacturing Portfolio
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--color-slate-grey)' }}>
              <li>Sand & Carbon Filter Tanks</li>
              <li>SS Industrial Stirrer Mixing Vessels</li>
              <li>MS ETP & STP Treatment Tanks</li>
              <li>Industrial Liquid Storage Tanks</li>
              <li>Fabricated Steel Structures & Skids</li>
              <li>Custom Plate Rolling & Reducer Cones</li>
            </ul>
          </div>

          {/* Dombivli Workshop Location & Contact */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--color-white)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Dombivli Facility
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.88rem', color: 'var(--color-slate-grey)' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="#F28C28" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>
                  Ground Floor, Gala No. 5, Bhalla Compound, Near Lalit Weigh Bridge, Sonar Pada, Dombivli East, Maharashtra 421203
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={16} color="#F28C28" style={{ flexShrink: 0 }} />
                <a href={COMPANY_INFO.contact.phoneHref} style={{ color: 'var(--color-white)', fontWeight: 600 }}>
                  {COMPANY_INFO.contact.displayPhone}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Mail size={16} color="#F28C28" style={{ flexShrink: 0 }} />
                <span>{COMPANY_INFO.contact.displayEmail}</span>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <a
                href={COMPANY_INFO.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--color-orange)',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}
              >
                <span>Open Google Maps Directions</span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)', marginBottom: '2rem' }} />

        {/* Bottom Legal, Disclaimer & Back to Top */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--color-slate-grey)'
          }}
        >
          <div>
            © {currentYear} <strong>Comp_name Enterprises</strong>. All rights reserved. Registered Industrial Manufacturing Unit in Dombivli East, Maharashtra.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontSize: '0.78rem' }}>
              ISO/Engineering Design Reference • IS 2062 & ASTM Compliance
            </span>

            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--color-white)',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
