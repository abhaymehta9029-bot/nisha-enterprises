import React, { useState } from 'react';
import { Layers, ArrowRight, Check, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { COMPANY_INFO } from '../data/companyInfo';
import { getIndustrialFallback } from '../utils/imageFallback';

export default function ProductsSection({ onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleEnquiry = (product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getWhatsAppProductUrl = (product) => {
    const text = `Hello Comp_name Enterprises, I am inquiring about *${product.name}* (Ref: Dombivli East Workshop). Please share technical specifications, pricing, and manufacturing lead time.`;
    return `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="products" className="section products-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Product Catalogue</span>
          <h2 className="section-title">Engineered Tanks & Fabricated Systems</h2>
          <p className="section-subtitle">
            Explore our industrial manufacturing catalogue. All products are manufactured in compliance with standard engineering practices and pressure vessel safety norms.
          </p>

          {/* Provisional Disclaimer Banner as Requested */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(242, 140, 40, 0.08)',
              border: '1px solid rgba(242, 140, 40, 0.25)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              marginTop: '1.25rem',
              fontSize: '0.82rem',
              color: 'var(--color-navy)',
              textAlign: 'left'
            }}
          >
            <Info size={16} color="#F28C28" style={{ flexShrink: 0 }} />
            <span>
              <strong>Note:</strong> Product classifications and dimensions are provisional categories subject to final customization and verification per project specifications.
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
          className="category-tabs"
        >
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '0.65rem 1.25rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: selectedCategory === cat.id ? 'var(--color-navy)' : 'var(--color-border)',
                backgroundColor: selectedCategory === cat.id ? 'var(--color-navy)' : 'var(--color-white)',
                color: selectedCategory === cat.id ? 'var(--color-white)' : 'var(--color-text-muted)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
              className="cat-filter-btn"
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
              }}
              className="product-card"
            >
              {/* Product Image Header with Provisional Badge */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden', backgroundColor: 'var(--color-navy)' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getIndustrialFallback(product.name);
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-slow)'
                  }}
                  className="product-img"
                  loading="lazy"
                />

                <div 
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    display: 'flex',
                    gap: '0.4rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <span className="badge-provisional">
                    Provisional Category
                  </span>
                </div>

                <div 
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    right: '0.75rem',
                    backgroundColor: 'rgba(16, 29, 44, 0.85)',
                    color: 'var(--color-white)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  {product.categoryName}
                </div>
              </div>

              {/* Product Content */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  {product.name}
                </h3>
                
                <p style={{ fontSize: '0.88rem', color: 'var(--color-orange)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {product.tagline}
                </p>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {product.description}
                </p>

                {/* Key Specifications Preview */}
                <div 
                  style={{
                    backgroundColor: 'var(--color-light-grey)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem 1rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem'
                  }}
                >
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', fontWeight: 700 }}>
                    Technical Specifications
                  </span>
                  {product.specifications.slice(0, 3).map((spec, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', borderBottom: i < 2 ? '1px dashed #E2E8F0' : 'none', paddingBottom: i < 2 ? '0.3rem' : '0' }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>{spec.label}:</span>
                      <span style={{ fontWeight: 600, color: 'var(--color-navy)', textAlign: 'right' }}>{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Card Actions */}
                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="btn btn-sm btn-outline-navy"
                    style={{ flex: 1 }}
                  >
                    <span>Full Specs</span>
                    <Info size={14} />
                  </button>

                  <a
                    href={getWhatsAppProductUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                    style={{ flex: 1 }}
                  >
                    <span>Enquire</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Product Specifications Modal */}
      {activeModalProduct && (
        <div 
          className="modal-backdrop"
          onClick={() => setActiveModalProduct(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(16, 29, 44, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 1100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative'
            }}
          >
            {/* Modal Header */}
            <div style={{ padding: '1.75rem 2rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span className="badge-provisional" style={{ marginBottom: '0.5rem' }}>Provisional Specifications</span>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--color-navy)' }}>{activeModalProduct.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-orange)', fontWeight: 600 }}>{activeModalProduct.tagline}</p>
              </div>
              <button 
                onClick={() => setActiveModalProduct(null)}
                style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--color-text-muted)' }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem' }}>
              <div style={{ height: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem', backgroundColor: 'var(--color-navy)' }}>
                <img 
                  src={activeModalProduct.image} 
                  alt={activeModalProduct.name} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getIndustrialFallback(activeModalProduct.name);
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {activeModalProduct.description}
              </p>

              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                Engineering & Material Specifications
              </h4>

              <div style={{ backgroundColor: 'var(--color-light-grey)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1.5rem' }}>
                {activeModalProduct.specifications.map((spec, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: idx < activeModalProduct.specifications.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>{spec.label}</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-navy)', fontWeight: 700, textAlign: 'right' }}>{spec.value}</span>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                Common Industrial Applications
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {activeModalProduct.applications.map((app, i) => (
                  <span key={i} style={{ backgroundColor: 'rgba(16, 29, 44, 0.06)', color: 'var(--color-navy)', fontSize: '0.82rem', fontWeight: 600, padding: '0.35rem 0.85rem', borderRadius: '9999px' }}>
                    • {app}
                  </span>
                ))}
              </div>

              {/* Action in Modal */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={getWhatsAppProductUrl(activeModalProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <span>Enquire via WhatsApp</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  onClick={() => {
                    setActiveModalProduct(null);
                    handleEnquiry(activeModalProduct);
                  }}
                  className="btn btn-outline-navy"
                  style={{ flex: 1 }}
                >
                  <span>Fill Enquiry Form</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
