import React from 'react';
import { ShieldCheck, Gauge, Truck, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck size={28} color="#F28C28" />,
      title: "Certified Raw Materials",
      description: "We procure prime-quality structural steel plates, seamless pipes, and stainless steel sheets compliant with IS, ASTM, and ASME standards."
    },
    {
      icon: <Gauge size={28} color="#F28C28" />,
      title: "100% Pressure Hold Testing",
      description: "Every filter tank and pressure vessel undergoes hydrostatic pressure testing to guarantee zero leaks, pinholes, or weld defects before delivery."
    },
    {
      icon: <Sliders size={28} color="#F28C28" />,
      title: "Customized Port Orientations",
      description: "Nozzles, manways, lifting lugs, and pipe connections are arranged specifically to meet your plant layout and inlet/outlet elevations."
    },
    {
      icon: <Truck size={28} color="#F28C28" />,
      title: "Kalyan-Shilphata Logistics Access",
      description: "Strategically located at Sonar Pada near Lalit Weigh Bridge, allowing wide trailers and heavy logistics for smooth transport across Maharashtra."
    },
    {
      icon: <Sparkles size={28} color="#F28C28" />,
      title: "Skilled Welders & Fitters",
      description: "Experienced artisans with extensive hands-on expertise in MIG, TIG, and arc welding on both carbon steel and stainless steel alloys."
    },
    {
      icon: <CheckCircle2 size={28} color="#F28C28" />,
      title: "Direct Workshop Transparency",
      description: "Clients are invited to visit Gala No. 5 at Bhalla Compound to inspect work in progress, review shell thickness, and witness testing."
    }
  ];

  return (
    <section className="section section-light why-choose-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">The NishaAdvantage</span>
          <h2 className="section-title">Why Heavy Industries Trust Our Work</h2>
          <p className="section-subtitle">
            From single custom tanks to integrated effluent treatment vessels, our manufacturing process prioritizes long service life, safety margins, and structural endurance.
          </p>
        </div>

        {/* Reasons Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {reasons.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-white)',
                padding: '2.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-normal)'
              }}
              className="why-card"
            >
              <div 
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(242, 140, 40, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.65rem' }}>
                {item.title}
              </h3>

              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
