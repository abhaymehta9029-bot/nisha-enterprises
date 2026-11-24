import React from 'react';

/**
 * Reusable Brand Logo Component for Nisha Enterprises
 * Incorporates an engineered steel tank silhouette, precision geometric structural frame,
 * and high-impact industrial typography in Dark Navy & Industrial Orange.
 */
export default function Logo({ 
  variant = 'light', // 'light' (for dark navy/charcoal background) or 'dark' (for white/light background)
  size = 'md',       // 'sm', 'md', 'lg'
  showSubtitle = true,
  className = '' 
}) {
  const isLight = variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#101D2C';
  const subtextColor = isLight ? '#8E9BAE' : '#5A697A';
  const iconStroke = isLight ? '#FFFFFF' : '#101D2C';
  const tankFill = isLight ? '#202A35' : '#E2E8F0';

  const scaleMap = {
    sm: { icon: 34, title: '1.05rem', sub: '0.62rem', gap: '0.6rem' },
    md: { icon: 44, title: '1.28rem', sub: '0.68rem', gap: '0.75rem' },
    lg: { icon: 54, title: '1.55rem', sub: '0.78rem', gap: '0.9rem' }
  };

  const currentScale = scaleMap[size] || scaleMap.md;

  return (
    <div 
      className={`logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: currentScale.gap,
        textDecoration: 'none',
        userSelect: 'none'
      }}
    >
      {/* Industrial Engineering Mark / SVG Icon */}
      <svg
        width={currentScale.icon}
        height={currentScale.icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, transition: 'transform 0.25s ease' }}
        className="brand-logo-icon"
      >
        {/* Engineering Hexagonal Framework */}
        <polygon 
          points="32,6 56,19 56,45 32,58 8,45 8,19" 
          stroke="#F28C28" 
          strokeWidth="3.2" 
          strokeLinejoin="round" 
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />

        {/* Structural I-beam Support Base */}
        <path 
          d="M17 48 L47 48" 
          stroke="#F28C28" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
        />
        <path 
          d="M23 48 L23 53 M41 48 L41 53" 
          stroke="#F28C28" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />

        {/* Precision Industrial Storage Tank Shell */}
        <path 
          d="M20 22 C20 16 44 16 44 22 L44 42 C44 45 20 45 20 42 Z" 
          fill={tankFill} 
          stroke={iconStroke} 
          strokeWidth="2.4" 
        />

        {/* Top Torispherical Dished End */}
        <ellipse 
          cx="32" 
          cy="22" 
          rx="12" 
          ry="4" 
          fill={isLight ? '#324357' : '#CBD5E1'} 
          stroke={iconStroke} 
          strokeWidth="2" 
        />

        {/* Center Agitator Axis / Seam Line */}
        <line 
          x1="32" 
          y1="13" 
          x2="32" 
          y2="42" 
          stroke="#F28C28" 
          strokeWidth="2.2" 
          strokeDasharray="2.5 2.5" 
        />

        {/* Engineering Center Cross Joint */}
        <circle cx="32" cy="32" r="3.2" fill="#F28C28" />
        <line x1="22" y1="32" x2="42" y2="32" stroke="#F28C28" strokeWidth="2" />
        
        {/* Precision Flange Accents */}
        <circle cx="20" cy="32" r="1.5" fill="#F28C28" />
        <circle cx="44" cy="32" r="1.5" fill="#F28C28" />
      </svg>

      {/* Typography */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: currentScale.title,
          fontWeight: 800,
          letterSpacing: '0.04em',
          lineHeight: 1.05,
          color: textColor,
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.25rem'
        }}>
          <span>NISHA</span>
          <span style={{ color: '#F28C28' }}>ENTERPRISES</span>
        </div>

        {showSubtitle && (
          <div style={{
            fontSize: currentScale.sub,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: subtextColor,
            marginTop: '0.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}>
            <span>FABRICATION</span>
            <span style={{ color: '#F28C28' }}>•</span>
            <span>DOMBIVLI EAST</span>
          </div>
        )}
      </div>
    </div>
  );
}
