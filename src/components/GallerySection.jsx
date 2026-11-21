import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { getIndustrialFallback } from '../utils/imageFallback';

export default function GallerySection() {
  const [selectedTag, setSelectedTag] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const tags = [
    { id: 'all', label: 'All Photos' },
    { id: 'tanks', label: 'Filter & Storage Tanks' },
    { id: 'welding', label: 'Industrial Welding' },
    { id: 'workshop', label: 'Workshop Operations' },
    { id: 'equipment', label: 'Mixing & Equipment' },
    { id: 'structures', label: 'Structures & Skids' }
  ];

  const filteredItems = selectedTag === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedTag);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Visual Tour</span>
          <h2 className="section-title">Workshop & Fabrication Gallery</h2>
          <p className="section-subtitle">
            A window into our manufacturing operations, plate rolling machines, pressure testing bays, and completed custom steel assemblies in Dombivli East.
          </p>

          <div style={{ marginTop: '0.85rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            (Sample representative industrial workshop photographs referenced from manufacturing records. High-resolution company photos can be updated as projects conclude.)
          </div>
        </div>

        {/* Filter Tags */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              style={{
                padding: '0.5rem 1.1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: selectedTag === tag.id ? 'var(--color-orange)' : 'var(--color-border)',
                backgroundColor: selectedTag === tag.id ? 'var(--color-orange)' : 'var(--color-white)',
                color: selectedTag === tag.id ? 'var(--color-white)' : 'var(--color-text-muted)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              style={{
                position: 'relative',
                height: '260px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: 'var(--color-navy)',
                boxShadow: 'var(--shadow-sm)'
              }}
              className="gallery-card"
            >
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = getIndustrialFallback(item.title);
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform var(--transition-slow), filter var(--transition-slow)'
                }}
                className="gallery-img"
                loading="lazy"
              />

              {/* Hover Dark Gradient Overlay */}
              <div 
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(16, 29, 44, 0.9) 0%, rgba(16, 29, 44, 0.2) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem',
                  color: 'var(--color-white)',
                  transition: 'opacity var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-orange)', fontWeight: 700 }}>
                    {item.categoryLabel}
                  </span>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Maximize2 size={14} color="#FFF" />
                  </div>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-white)', lineHeight: 1.25 }}>
                  {item.title}
                </h4>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: '#CBD5E1', marginTop: '0.35rem' }}>
                  <MapPin size={12} color="#F28C28" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          className="lightbox-overlay"
          onClick={() => setLightboxIndex(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 20, 30, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 1200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.12)',
              border: 'none',
              color: 'var(--color-white)',
              width: 44,
              height: 44,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1210
            }}
            aria-label="Close Lightbox"
          >
            <X size={22} />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.12)',
              border: 'none',
              color: 'var(--color-white)',
              width: 48,
              height: 48,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1210
            }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.12)',
              border: 'none',
              color: 'var(--color-white)',
              width: 48,
              height: 48,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1210
            }}
            aria-label="Next Image"
          >
            <ChevronRight size={26} />
          </button>

          {/* Lightbox Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '960px',
              width: '100%',
              backgroundColor: 'var(--color-navy)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{ maxHeight: '68vh', overflow: 'hidden', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = getIndustrialFallback(filteredItems[lightboxIndex].title);
                }}
                style={{
                  maxWidth: '100%',
                  maxHeight: '68vh',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            <div style={{ padding: '1.5rem 2rem', color: 'var(--color-white)', backgroundColor: 'var(--color-charcoal)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-orange)', fontWeight: 700 }}>
                  {filteredItems[lightboxIndex].categoryLabel} • {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-slate-grey)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={13} color="#F28C28" />
                  {filteredItems[lightboxIndex].location}
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                {filteredItems[lightboxIndex].title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>

        </div>
      )}
    </section>
  );
}
