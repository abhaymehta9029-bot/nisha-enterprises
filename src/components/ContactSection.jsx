import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, AlertTriangle, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function ContactSection({ prefillProduct, prefillService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: prefillProduct ? `Enquiry for ${prefillProduct.name}` : prefillService ? `Fabrication Enquiry: ${prefillService}` : '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submissionState, setSubmissionState] = useState(null); // null | 'validated'

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name (minimum 2 characters)';
    }

    const phoneRegex = /^[+]?[0-9\s\-]{10,14}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit contact number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify the subject or equipment type';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide details of your requirement (min 10 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Per specification: Do not claim enquiry was stored in a backend since no backend is connected.
      // Instead, we validate and offer direct dispatch via WhatsApp / Mailto.
      setSubmissionState('validated');
    }
  };

  const buildWhatsAppText = () => {
    return encodeURIComponent(
      `*New Business Enquiry for Comp_name Enterprises*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Requirement:* ${formData.message}\n\n` +
      `_Sent via Website Enquiry Portal_`
    );
  };

  const buildMailtoHref = () => {
    return `mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
  };

  const whatsappDirectUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Comp_name Enterprises, I am contacting you from your Dombivli East industrial website regarding an engineering fabrication requirement.'
  )}`;

  return (
    <section id="contact" className="section section-light contact-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Connect With Us</span>
          <h2 className="section-title">Visit Our Workshop or Request a Quote</h2>
          <p className="section-subtitle">
            Discuss your tank fabrication, steel structure, or custom machinery project with our engineering team in Dombivli East.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Real Address & Contact Verification */}
          <div>
            <div 
              style={{
                backgroundColor: 'var(--color-navy)',
                color: 'var(--color-white)',
                padding: '2.5rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle background industrial pattern */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  border: '2px dashed rgba(242, 140, 40, 0.25)',
                  pointerEvents: 'none'
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span className="badge-verified">Verified Business Entity</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-slate-grey)' }}>GST: {COMPANY_INFO.businessDetails.gstin}</span>
              </div>

              <h3 style={{ fontSize: '1.75rem', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                Comp_name Enterprises
              </h3>

              {/* Contact Details List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.25rem' }}>
                
                {/* Physical Address */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '8px', backgroundColor: 'rgba(242, 140, 40, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-orange)', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-white)', marginBottom: '0.2rem' }}>
                      Workshop & Office Address
                    </strong>
                    <div style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                      {COMPANY_INFO.address.street},<br />
                      {COMPANY_INFO.address.landmark},<br />
                      {COMPANY_INFO.address.area},<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} – {COMPANY_INFO.address.pincode}
                    </div>
                  </div>
                </div>

                {/* Verified Phone */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '8px', backgroundColor: 'rgba(242, 140, 40, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-orange)', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--color-white)' }}>
                        Verified Phone Contact
                      </strong>
                      <span className="badge-verified" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>Verified</span>
                    </div>
                    <a 
                      href={COMPANY_INFO.contact.phoneHref}
                      style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-orange)', letterSpacing: '0.02em' }}
                    >
                      {COMPANY_INFO.contact.displayPhone}
                    </a>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-slate-grey)', marginTop: '0.15rem' }}>
                      Mon – Sat: 9:00 AM to 7:30 PM IST
                    </div>
                  </div>
                </div>

                {/* Email Enquiries */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '8px', backgroundColor: 'rgba(242, 140, 40, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-orange)', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-white)', marginBottom: '0.2rem' }}>
                      Enquiry Email
                    </strong>
                    <a 
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      style={{ fontSize: '0.92rem', color: '#CBD5E1' }}
                    >
                      {COMPANY_INFO.contact.displayEmail}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '8px', backgroundColor: 'rgba(242, 140, 40, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-orange)', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-white)', marginBottom: '0.2rem' }}>
                      Operating Schedule
                    </strong>
                    <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
                      {COMPANY_INFO.hours.weekdays}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-slate-grey)' }}>
                      {COMPANY_INFO.hours.sunday}
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons: WhatsApp & Google Maps Link */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <MessageSquare size={18} />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={COMPANY_INFO.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  <MapPin size={18} />
                  <span>Google Maps Directions</span>
                  <ExternalLink size={14} />
                </a>
              </div>

            </div>

            {/* Embedded Interactive Map Preview */}
            <div 
              style={{
                marginTop: '1.5rem',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                height: '220px',
                backgroundColor: '#E2E8F0',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <iframe
                title="Comp_name Enterprises Dombivli East Location Map"
                src={COMPANY_INFO.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '0.4rem' }}>
              📍 Lalit Kata, Sonar Pada, Kalyan-Shilphata Road, Dombivli East
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form with Validation */}
          <div 
            style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                Request a Fabrication Quote
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Fill in your project requirements below. Provide tank dimensions, plate thickness, or equipment specifications.
              </p>
            </div>

            {/* Form Validation Success & Dispatch Notification */}
            {submissionState === 'validated' && (
              <div 
                style={{
                  backgroundColor: 'rgba(37, 211, 102, 0.1)',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#16A34A', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                  <CheckCircle2 size={22} />
                  <span>Enquiry Form Validated!</span>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dark)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Notice: No external backend database is currently connected to store form data. You can directly send your enquiry to Comp_name Enterprises with one click:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${buildWhatsAppText()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%' }}
                  >
                    <MessageSquare size={18} />
                    <span>Send Enquiry via WhatsApp</span>
                  </a>

                  <a
                    href={buildMailtoHref()}
                    className="btn btn-outline-navy"
                    style={{ width: '100%' }}
                  >
                    <Mail size={18} />
                    <span>Send via Email Client</span>
                  </a>

                  <button
                    onClick={() => setSubmissionState(null)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-text-muted)',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      marginTop: '0.25rem'
                    }}
                  >
                    Edit Form Data
                  </button>
                </div>
              </div>
            )}

            {/* Form Inputs */}
            <form onSubmit={handleSubmit} noValidate>
              
              {/* Full Name */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                  Full Name <span style={{ color: 'var(--color-orange)' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rajesh Patil / ABC Chemicals Ltd"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid',
                    borderColor: errors.name ? '#EF4444' : 'var(--color-border)',
                    outline: 'none',
                    backgroundColor: 'var(--color-light-grey)',
                    fontSize: '0.92rem'
                  }}
                />
                {errors.name && (
                  <div style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <AlertTriangle size={13} />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Phone & Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                    Phone Number <span style={{ color: 'var(--color-orange)' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98200 12345"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid',
                      borderColor: errors.phone ? '#EF4444' : 'var(--color-border)',
                      outline: 'none',
                      backgroundColor: 'var(--color-light-grey)',
                      fontSize: '0.92rem'
                    }}
                  />
                  {errors.phone && (
                    <div style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <AlertTriangle size={13} />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                    Email Address <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. procurement@company.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid',
                      borderColor: errors.email ? '#EF4444' : 'var(--color-border)',
                      outline: 'none',
                      backgroundColor: 'var(--color-light-grey)',
                      fontSize: '0.92rem'
                    }}
                  />
                  {errors.email && (
                    <div style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <AlertTriangle size={13} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                  Requirement / Subject <span style={{ color: 'var(--color-orange)' }}>*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Quotation for 5000L Sand Filter Tank"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid',
                    borderColor: errors.subject ? '#EF4444' : 'var(--color-border)',
                    outline: 'none',
                    backgroundColor: 'var(--color-light-grey)',
                    fontSize: '0.92rem'
                  }}
                />
                {errors.subject && (
                  <div style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <AlertTriangle size={13} />
                    <span>{errors.subject}</span>
                  </div>
                )}
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                  Project Specifications & Message <span style={{ color: 'var(--color-orange)' }}>*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please specify material (MS / SS 304 / SS 316), dimensions, capacity, working pressure, or delivery timeline..."
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid',
                    borderColor: errors.message ? '#EF4444' : 'var(--color-border)',
                    outline: 'none',
                    backgroundColor: 'var(--color-light-grey)',
                    fontSize: '0.92rem',
                    resize: 'vertical'
                  }}
                />
                {errors.message && (
                  <div style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <AlertTriangle size={13} />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
              >
                <Send size={18} />
                <span>Submit Quotation Enquiry</span>
              </button>

              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '0.85rem' }}>
                🔒 Your details are handled with complete commercial confidentiality.
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
