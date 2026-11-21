import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import CtaBanner from './components/CtaBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [prefillProduct, setPrefillProduct] = useState(null);
  const [prefillService, setPrefillService] = useState(null);

  // Monitor visible section for active navbar link
  useEffect(() => {
    const sectionIds = ['home', 'about', 'products', 'services', 'gallery', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProductSelect = (product) => {
    setPrefillProduct(product);
    setPrefillService(null);
    scrollToSection('contact');
  };

  const handleServiceSelect = (serviceTitle) => {
    setPrefillService(serviceTitle);
    setPrefillProduct(null);
    scrollToSection('contact');
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />

      {/* Hero Section */}
      <Hero 
        onExploreWork={() => scrollToSection('products')} 
        onContactUs={() => scrollToSection('contact')} 
      />

      {/* Trust & Facility Highlights Banner */}
      <TrustBanner />

      {/* About Company & Facility */}
      <AboutSection />

      {/* Product Catalogue (Provisional Categories) */}
      <ProductsSection onSelectProduct={handleProductSelect} />

      {/* Fabrication Services */}
      <ServicesSection onContactForService={handleServiceSelect} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Workshop & Project Gallery (With Lightbox) */}
      <GallerySection />

      {/* Call to Action Banner */}
      <CtaBanner onContactClick={() => scrollToSection('contact')} />

      {/* Contact Section with Directions, Verification & Validated Form */}
      <ContactSection 
        prefillProduct={prefillProduct} 
        prefillService={prefillService} 
      />

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating WhatsApp and Back to Top */}
      <FloatingActions />
    </div>
  );
}
