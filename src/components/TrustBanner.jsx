import React from 'react';
import { ShieldCheck, MapPin, Gauge, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function TrustBanner() {
  const highlights = [
    {
      icon: <MapPin size={20} color="#F28C28" />,
      title: "Dombivli East Workshop",
      sub: "Bhalla Compound, near Lalit Weigh Bridge"
    },
    {
      icon: <ShieldCheck size={20} color="#F28C28" />,
      title: "Verified Entity & GSTIN",
      sub: COMPANY_INFO.businessDetails.gstin
    },
    {
      icon: <Gauge size={20} color="#F28C28" />,
      title: "100% Hydro Pressure Tested",
      sub: "Weld & Seam Leak Integrity"
    },
    {
      icon: <Award size={20} color="#F28C28" />,
      title: "Custom Industrial Fabrication",
      sub: "IS 2062 Mild Steel & SS 304/316"
    }
  ];

  return (
    <div 
      style={{
        backgroundColor: 'var(--color-charcoal)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        color: 'var(--color-white)',
        padding: '1.25rem 0'
      }}
      className="trust-strip"
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}
        >
          {highlights.map((item, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}
            >
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(242, 140, 40, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-white)' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-slate-grey)' }}>
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
