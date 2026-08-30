import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import logoPng from '../../assets/images/seed-el-balad/logo.webp';
import '../../css/footer.css';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onNavigate: (view: 'home' | 'collection' | 'story' | 'locations' | 'why-us' | 'contact' | 'privacy-policy', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t, language } = useTranslation();

  const handleScrollToSection = (id: string) => {
    if (id === 'products-section') {
      onNavigate('collection');
    } else if (id === 'why-us' || id === 'about-section') {
      onNavigate('why-us');
    } else if (id === 'story-page') {
      onNavigate('story');
    } else if (id === 'stores-section') {
      onNavigate('locations');
    } else if (id === 'contact-section') {
      onNavigate('contact');
    } else {
      onNavigate('home', id);
    }
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col footer-brand">
            <div 
              className="footer-logo" 
              onClick={() => onNavigate('home', 'hero')}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onNavigate('home', 'hero');
                }
              }}
            >
              <img src={logoPng} alt="Seed El-balad" />
              <div className="brand-txt">
                <span className="logo-wm">Seed El-balad</span>
                <span className="logo-ar">سيد البلد</span>
              </div>
            </div>
            <p>{t('contact.sub')}</p>
            
            {/* Social Media Links */}
            <div className="footer-social-links" aria-label="Social Media">
              <a 
                href="https://www.facebook.com/share/1CssPVwxt6/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn facebook" 
                aria-label="Facebook"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/seed.elbalad.egypt?igsh=MTZkZGh5czk0aGN3Yw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn instagram" 
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@seed_el_balad?_r=1&_t=ZS-98r0RmY0IOQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn tiktok" 
                aria-label="TikTok"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.81 4.47A6.29 6.29 0 0 0 15.82 15V8.84a8.34 8.34 0 0 0 5-1.63l-1.23-2.52z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/201032033302" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn whatsapp" 
                aria-label="WhatsApp"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col">
            <h4>{t('nav.menu')}</h4>
            <ul>
              <li>
                <a href="#hero" onClick={(e) => { e.preventDefault(); handleScrollToSection('hero'); }}>
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => { e.preventDefault(); handleScrollToSection('products-section'); }}>
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => { e.preventDefault(); handleScrollToSection('why-us'); }}>
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#story" onClick={(e) => { e.preventDefault(); handleScrollToSection('story-page'); }}>
                  {t('nav.story')}
                </a>
              </li>
              <li>
                <a href="#stores" onClick={(e) => { e.preventDefault(); handleScrollToSection('stores-section'); }}>
                  {t('nav.stores')}
                </a>
              </li>
              <li>
                <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate('privacy-policy'); }}>
                  {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollToSection('contact-section'); }}>
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4>{t('nav.contact')}</h4>
            <div className="footer-contact-info">
              <a href="mailto:Ceo@gf-egypt.com">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
                Ceo@gf-egypt.com
              </a>
              <a href="https://wa.me/201032033302" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                +20 1032033302
              </a>
              <a href="https://maps.app.goo.gl/4XrjBhoWF4qXuxzGA" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ fontSize: '0.8rem', display: 'inline-block', maxWidth: '240px', verticalAlign: 'middle' }}>
                  {t('contact.addressVal')}
                </span>
              </a>
            </div>
          </div>

          {/* Quality Standards ISO Badges */}
          <div className="footer-col">
            <h4>{t('nav.quality')}</h4>
            <p style={{ fontSize: '0.8rem', opacity: 0.75 }}>{t('quality.title')}</p>
            <div className="iso-badges-container">
              <span className="iso-badge">ISO 22000</span>
              <span className="iso-badge">ISO 9001</span>
              <span className="iso-badge">ISO 14001</span>
              <span className="iso-badge">ISO 45001</span>
              <span className="iso-badge">HACCP</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Gold Foods. All rights reserved. Brand: Seed El-balad.
          </div>
          <div className="footer-legal-links">
            <a 
              href="/privacy-policy" 
              onClick={(e) => { 
                e.preventDefault(); 
                onNavigate('privacy-policy'); 
              }}
              style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', fontSize: '0.85rem' }}
            >
              {t('cookies.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
