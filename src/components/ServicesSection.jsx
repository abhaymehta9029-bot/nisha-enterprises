import React from 'react';
import { Layers, Flame, Wrench, Shield, FileText, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { COMPANY_INFO } from '../data/companyInfo';

export default function ServicesSection({ onContactForService }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return <Layers size={28} />;
      case 'Flame': return <Flame size={28} />;
      case 'Wrench': return <Wrench size={28} />;
      case 'Shield': return <Shield size={28} />;
      case 'FileText': return <FileText size={28} />;
      default: return <Wrench size={28} />;
    }
  };

  const handleServiceInquiry = (serviceTitle) => {
    if (onContactForService) {
      onContactForService(serviceTitle);
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section section-dark services-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Manufacturing Capabilities</span>
          <h2 className="section-title">Industrial Fabrication & Engineering Services</h2>
          <p className="section-subtitle">
            Equipped with plate bending, welding bays, and mechanical assembly tools, our Dombivli workshop delivers robust, high-precision industrial metal solutions.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              style={{
                backgroundColor: 'var(--color-charcoal)',
                borderRadius: 'var(--radius-md)',
                padding: '2.25rem',
                border: '1px solid var(--color-border-dark)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal)'
              }}
              className="service-card"
            >
              {/* Header with Icon & Confirmation Status */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div 
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(242, 140, 40, 0.15)',
                    color: 'var(--color-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(242, 140, 40, 0.3)'
                  }}
                >
                  {getIcon(service.icon)}
                </div>

                {service.subjectToConfirmation ? (
                  <span className="badge-provisional" style={{ fontSize: '0.7rem' }}>
                    Subject to Confirmation
                  </span>
                ) : (
                  <span className="badge-verified" style={{ fontSize: '0.7rem' }}>
                    Core Capability
                  </span>
                )}
              </div>

              {/* Service Title & Description */}
              <h3 style={{ fontSize: '1.45rem', color: 'var(--color-white)', marginBottom: '0.75rem' }}>
                {service.title}
              </h3>

              <p style={{ color: 'var(--color-slate-grey)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {service.details}
              </p>

              {/* Specific Capabilities Checklist */}
              <div style={{ marginTop: 'auto', marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-orange)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Execution Scope
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {service.capabilities.map((cap, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem', color: '#CBD5E1' }}>
                      <CheckCircle size={15} color="#F28C28" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <button
                  onClick={() => handleServiceInquiry(service.title)}
                  className="btn btn-sm btn-secondary"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>Request Fabrication Quote</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Industrial Standards Notice Bar */}
        <div 
          style={{
            marginTop: '3.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-md)',
            padding: '1.75rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.25rem' }}>
              Have custom dimensional drawings or specific plate requirements?
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--color-slate-grey)' }}>
              We review customer drawings and propose optimum material layouts for minimum scrap and maximum strength.
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent('Hello Comp_name Enterprises, I want to send an engineering drawing for quotation.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>Share Drawing on WhatsApp</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
