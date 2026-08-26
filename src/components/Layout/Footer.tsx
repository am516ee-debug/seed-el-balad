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
