import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Comp_name Enterprises (Dombivli East), I would like to enquire about industrial fabrication / tank manufacturing.'
  )}`;

  return (
    <div 
      className="floating-actions"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 990,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.85rem'
      }}
    >
      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Comp_name Enterprises on WhatsApp"
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 20px rgba(37, 211, 102, 0.45)',
          transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
          cursor: 'pointer',
          position: 'relative'
        }}
        className="floating-wa-btn"
        title="WhatsApp Enquiry - Quick Response"
      >
        <MessageSquare size={28} />
        {/* Pulsing notification dot */}
        <span 
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#FF3B30',
            border: '2px solid #FFF'
          }}
        />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-navy)',
            color: 'var(--color-white)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-md)',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)'
          }}
          className="back-to-top-btn"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
