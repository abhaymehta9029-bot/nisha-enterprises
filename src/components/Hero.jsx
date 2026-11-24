import React from 'react';
import { ShieldCheck, ArrowRight, PhoneCall, MapPin, Wrench, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Hero({ onExploreWork, onContactUs }) {
  return (
    <section 
      id="home" 
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
        paddingBottom: '4rem',
        backgroundColor: 'var(--color-navy)',
        color: 'var(--color-white)',
        overflow: 'hidden'
      }}
    >
      
      {/* Background Industrial Overlay with High-Resolution Image */}
      <div 
        className="hero-bg-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(135deg, rgba(16, 29, 44, 0.94) 0%, rgba(16, 29, 44, 0.85) 55%, rgba(32, 42, 53, 0.92) 100%), url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1920&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />

      {/* Subtle Engineering Grid Line Accent */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(242, 140, 40, 0.08) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div style={{ maxWidth: '860px' }}>
          
          {/* Location & Industry Tag */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--color-slate-grey)',
              marginBottom: '1.75rem',
              backdropFilter: 'blur(6px)'
            }}
          >
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-orange)' }} />
            <span style={{ color: 'var(--color-white)' }}>Industrial Fabrication Workshop</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={14} color="#F28C28" />
              <span>Dombivli East, Maharashtra</span>
            </span>
          </div>
                
          {/* Main Hero Headline */}
          <h1 
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--color-white)',
              marginBottom: '1.5rem'
            }}
          >
            Engineering Strength. <br />
            <span style={{ color: 'var(--color-orange)', position: 'relative' }}>
              Manufacturing Excellence.
            </span>
          </h1>

          {/* Supporting Text */}
          <p 
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: '#CBD5E1',
              lineHeight: 1.65,
              maxWidth: '720px',
              marginBottom: '2.5rem'
            }}
          >
            Nisha Enterprises is a specialized industrial metal fabrication and engineering manufacturing facility in Dombivli East. We build robust mild steel & stainless steel storage tanks, sand & carbon filter vessels, mixing machinery, and custom-fabricated structures engineered for demanding plant conditions.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', marginBottom: '3.5rem' }}>
            <a 
              href="#products" 
              onClick={(e) => {
                e.preventDefault();
                if (onExploreWork) onExploreWork();
                else document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-lg btn-primary"
            >
              <span>Explore Our Work</span>
              <ArrowRight size={18} />
            </a>

            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                if (onContactUs) onContactUs();
                else document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-lg btn-secondary"
            >
              <PhoneCall size={18} />
              <span>Contact Us</span>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-slate-grey)', fontSize: '0.85rem' }}>
              <ShieldCheck size={18} color="#F28C28" />
              <span>GST Registered • Quality Inspected</span>
            </div>
          </div>

          {/* Quick Metrics / Stats Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)'
            }}
          >
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-card">
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.85rem',
                  fontWeight: 800,
                  color: 'var(--color-white)',
                  lineHeight: 1.1
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-orange)', marginTop: '0.25rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-slate-grey)', marginTop: '0.15rem' }}>
                  {stat.note}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a 
        href="#about"
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: 'rgba(255, 255, 255, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
        className="scroll-indicator"
      >
        <span>Scroll</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
