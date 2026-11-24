import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function CtaBanner({ onContactClick }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Nisha Enterprises, I would like to request an industrial manufacturing quote for our factory requirements.'
  )}`;

  return (
    <section 
      style={{
        backgroundColor: 'var(--color-navy)',
        color: 'var(--color-white)',
        position: 'relative',
        padding: '5rem 0',
        overflow: 'hidden'
      }}
      className="cta-section"
    >
      {/* Background Graphic Lines */}
      <div 
        style={{
          position: 'absolute',
          right: '-10%',
          top: '-30%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '1px solid rgba(242, 140, 40, 0.15)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          right: '-5%',
          top: '-20%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px dashed rgba(242, 140, 40, 0.2)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div 
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <span className="section-eyebrow">Ready to Fabricate?</span>
          <h2 
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--color-white)',
              marginBottom: '1.25rem',
              lineHeight: 1.2
            }}
          >
            Bring Your Industrial Fabrication Drawings to Reality
          </h2>

          <p 
            style={{
              fontSize: '1.1rem',
              color: '#CBD5E1',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              maxWidth: '680px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Whether you require an individual carbon filter vessel or complete structural skids for your processing plant, our Dombivli East workshop delivers precision engineering and reliable delivery schedules.
          </p>

          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.25rem',
              alignItems: 'center'
            }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-whatsapp"
            >
              <MessageSquare size={20} />
              <span>Discuss on WhatsApp</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onContactClick) onContactClick();
                else document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-lg btn-primary"
            >
              <span>Get Quotation</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={COMPANY_INFO.contact.phoneHref}
              className="btn btn-lg btn-secondary"
            >
              <Phone size={18} />
              <span>Call: {COMPANY_INFO.contact.displayPhone}</span>
            </a>
          </div>

          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--color-slate-grey)' }}>
            📍 Gala No. 5, Bhalla Compound, Near Lalit Weigh Bridge, Dombivli East
          </div>
        </div>
      </div>
    </section>
  );
}
