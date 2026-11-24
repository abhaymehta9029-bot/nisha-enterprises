import React from 'react';
import { CheckCircle2, ShieldAlert, Award, Compass, Cpu, Wrench, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { getIndustrialFallback } from '../utils/imageFallback';

export default function AboutSection() {
  const capabilities = [
    {
      title: "Plate Forming & Rolling",
      desc: "Heavy plate bending roller equipment capable of shaping large cylindrical shells for process and storage vessels."
    },
    {
      title: "Certified Industrial Welding",
      desc: "High-grade SMAW, MIG, and TIG welding processes executed for pressure containment and critical structural joints."
    },
    {
      title: "Vessel Assembly & Manifolds",
      desc: "Precision fitment of dished ends, flanged inlet/outlet nozzles, sample valves, and external pipe manifolds."
    },
    {
      title: "Rigorous QA & Pressure Testing",
      desc: "100% hydrostatic hold testing and dye penetrant weld inspection ensuring zero leakage before factory dispatch."
    }
  ];

  const values = [
    {
      title: "Structural Integrity",
      desc: "We never compromise on material plate thickness, weld throat thickness, or structural support frames."
    },
    {
      title: "Fit-for-Purpose Engineering",
      desc: "Every vessel and fabricated piece is tailored to operational chemical conditions, temperature, and space limits."
    },
    {
      title: "Transparent Specifications",
      desc: "Detailed dimensional verification, test certificates, and clear material grades (IS 2062, SS 304, SS 316)."
    },
    {
      title: "Local Dombivli Manufacturing",
      desc: "Direct access to our Dombivli workshop for mid-fabrication inspections, dimensional checks, and immediate dispatch."
    }
  ];

  return (
    <section id="about" className="section section-light about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">About Nisha Enterprises</span>
          <h2 className="section-title">Engineered Reliability for Heavy Industry</h2>
          <p className="section-subtitle">
            Established in 2019 in Dombivli East, Maharashtra, Nisha Enterprises operates as a dedicated industrial engineering and metal fabrication facility catering to chemical, water treatment, and manufacturing facilities across the Thane-Kalyan industrial belt.
          </p>
        </div>

        {/* 2-Column Overview with Real Workshop Context */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '4.5rem'
          }}
        >
          {/* Left Column: Visual & Facility Details */}
          <div>
            <div 
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                backgroundColor: 'var(--color-navy)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80" 
                alt="Industrial Metal Fabrication at Nisha Enterprises Workshop"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = getIndustrialFallback('Dombivli Fabrication Bay');
                }}
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />

              {/* Floating Verified Facility Card */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  backgroundColor: 'rgba(16, 29, 44, 0.94)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  color: 'var(--color-white)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="badge-verified">Verified Industrial Unit</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-slate-grey)' }}>Est. {COMPANY_INFO.businessDetails.establishmentYear}</span>
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-white)' }}>
                  Gala No. 5, Bhalla Compound, Dombivli East
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-slate-grey)', marginTop: '0.2rem' }}>
                  Near Lalit Weigh Bridge (Lalit Kata), Kalyan-Shilphata Corridor
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Approach & Core Focus */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-orange)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              <Compass size={18} />
              <span>Our Engineering Approach</span>
            </div>

            <h3 style={{ fontSize: '1.95rem', marginBottom: '1.25rem', color: 'var(--color-navy)' }}>
              Precision Metal Fabrication with Rigorous Standards
            </h3>

            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              Industrial manufacturing requires uncompromising structural integrity. At Nisha Enterprises, our fabrication workflow begins with thorough plate inspection, accurate beveling, and controlled plate rolling to achieve precise cylindrical profiles without stress fractures.
            </p>

            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Whether manufacturing heavy mild steel sand and carbon filter tanks for effluent treatment plants, or crafting stainless steel mixing vessels for chemical blending, we adhere to strict welding procedures and continuous testing.
            </p>

            {/* Quick Feature Points */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={20} color="#F28C28" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--color-navy)' }}>Certified Steel Grades</strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>IS 2062 Gr B, SS 304 & SS 316 plates</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={20} color="#F28C28" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--color-navy)' }}>Hydrostatic Leak Testing</strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Pressure-held inspection on tank seams</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={20} color="#F28C28" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--color-navy)' }}>Custom Port Orientations</strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Built to match customer pipe routings</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={20} color="#F28C28" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--color-navy)' }}>Direct Workshop Access</strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Client inspection at Bhalla Compound</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Manufacturing Capabilities & Workshop Values */}
        <div style={{ marginTop: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              Workshop Standards
            </span>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--color-navy)', marginTop: '0.5rem' }}>
              Core Manufacturing Capabilities & Principles
            </h3>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {capabilities.map((cap, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--color-white)',
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
                }}
                className="about-cap-card"
              >
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(242, 140, 40, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-orange)',
                    marginBottom: '1rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)'
                  }}
                >
                  0{idx + 1}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  {cap.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
