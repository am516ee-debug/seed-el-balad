import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import '../../css/home.css';

export const ContactSection: React.FC = () => {
  const { t, language } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Automatically trigger reveal transitions on mount
    const elements = document.querySelectorAll('.contact-section .reveal');
    elements.forEach(el => el.classList.add('active'));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = language === 'ar'
      ? `💬 رسالة جديدة من موقع سيد البلد:\n\n👤 الاسم: ${name}\n📧 البريد: ${email}\n📞 الهاتف: ${phone}\n✉️ الرسالة:\n${message}`
      : `💬 New Message from Seed El-balad website:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone}\n✉️ Message:\n${message}`;

    const encodedText = encodeURIComponent(formattedText);
    window.open(`https://wa.me/201032033302?text=${encodedText}`, '_blank');
  };



  return (
    <section className="contact-section" id="contact-section">
      <div className="container">
        <h2 className="reveal" style={{ textAlign: 'center', marginBottom: '16px' }}>{t('contact.title')}</h2>
        
        <div className="divider-ornament reveal" aria-hidden="true">
          <span className="line-left"></span>
          <span className="diamond"></span>
          <span className="line-right"></span>
        </div>

        <p className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto var(--spacing-lg)', opacity: 0.85 }}>
          {t('contact.sub')}
        </p>

        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info-panel reveal">
            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
              </div>
              <div>
                <h5>{t('contact.email')}</h5>
                <a href="mailto:CEO@gf-egypt.com">CEO@gf-egypt.com</a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <div>
                <h5>{t('contact.phone')}</h5>
                <a href="https://wa.me/201032033302" target="_blank" rel="noopener noreferrer">+20 1032033302</a>
              </div>
            </div>

            {/* Address Card */}
            <a 
              href="https://maps.app.goo.gl/4XrjBhoWF4qXuxzGA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h5>{t('contact.address')}</h5>
                <p>{t('contact.addressVal')}</p>
              </div>
            </a>


          </div>

          {/* Form Side */}
          <div className="contact-form-panel reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name-input">{t('contact.formName')}</label>
                <input 
                  type="text" 
                  id="name-input" 
                  className="form-control" 
                  required 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email-input">{t('contact.formEmail')}</label>
                <input 
                  type="email" 
                  id="email-input" 
                  className="form-control" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone-input">{t('contact.formPhone')}</label>
                <input 
                  type="tel" 
                  id="phone-input" 
                  className="form-control" 
                  required 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message-input">{t('contact.formMsg')}</label>
                <textarea 
                  id="message-input" 
                  className="form-control" 
                  required 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                {t('contact.formSubmit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
