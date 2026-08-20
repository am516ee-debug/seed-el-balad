import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';
import logoPng from '../../assets/images/seed-el-balad/logo.png';
import '../../css/header.css';

interface HeaderProps {
  currentView: 'home' | 'collection' | 'story' | 'locations' | 'why-us' | 'contact';
  onNavigate: (view: 'home' | 'collection' | 'story' | 'locations' | 'why-us' | 'contact', sectionId?: string) => void;
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onSearch }) => {
  const { toggleLanguage, language } = useLanguage();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const quickTags = [
    { ar: 'رنجة', en: 'Herring' },
    { ar: 'فيليه', en: 'Fillet' },
    { ar: 'بطارخ', en: 'Roe & Caviar' },
    { ar: 'معلبات', en: 'Canned Seafood' },
    { ar: 'برطمان', en: 'Jar' },
    { ar: 'صندوق', en: 'Box' }
  ];

  const handleSearchSubmit = (val: string) => {
    if (!val.trim()) return;
    setIsSearchOpen(false);
    if (onSearch) {
      onSearch(val);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (currentView === 'contact' || currentView === 'collection') {
        setIsScrolled(true);
        return;
      }

      let threshold = 20; // default for views without hero banners
      
      if (currentView === 'home') {
        threshold = window.innerHeight - 80;
      } else if (currentView === 'why-us') {
        threshold = window.innerHeight * 0.90 - 80; // Why Us page hero height
      } else if (currentView === 'locations') {
        threshold = window.innerHeight * 0.65 - 80; // Locations page hero height is 65vh
      } else if (currentView === 'story') {
        threshold = window.innerHeight * 0.60 - 80; // Our Story page hero height is 60vh
      }

      setIsScrolled(window.scrollY >= threshold);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (sectionId === 'products-section') {
      onNavigate('collection');
    } else if (sectionId === 'about-section' || sectionId === 'why-us') {
      onNavigate('why-us');
    } else if (sectionId === 'story-page') {
      onNavigate('story');
    } else if (sectionId === 'stores-section') {
      onNavigate('locations');
    } else if (sectionId === 'contact-section') {
      onNavigate('contact');
    } else {
      onNavigate('home', sectionId);
    }
  };

  const handleWhatsAppCall = () => {
    window.open('https://wa.me/201032033302', '_blank');
  };

  return (
    <>
      <nav id="nav" className={isScrolled ? 'scrolled' : ''}>
        <div className="l">
          <button 
            className="item" 
            id="menuBtn" 
            type="button" 
            aria-expanded={isMenuOpen} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="burger">
              <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none' }}></span>
              <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
              <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }}></span>
            </span> 
            <span className="desktop-only">{t('nav.menu')}</span>
          </button>
          
          <button 
            className="item" 
            id="searchBtn" 
            type="button"
            onClick={() => setIsSearchOpen(true)}
            aria-label={t('nav.search')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7"/>
              <path d="M20 20l-4-4"/>
            </svg> 
            <span className="desktop-only" style={{ marginLeft: '6px', marginRight: '6px' }}>{t('nav.search')}</span>
          </button>
        </div>

        <a href="/" className="wordmark" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
          <span className="navseal">
            <img src={logoPng} alt="Seed El-balad Logo" />
          </span>
          <span className="wmtxt">
            <span className="wm">Seed El-balad</span>
            <span className="ar">سيد البلد</span>
          </span>
        </a>

        <div className="r">
          <button className="item desktop-only" id="callBtn" type="button" onClick={handleWhatsAppCall}>
            {t('nav.callUs')}
          </button>
          
          <button className="item lang-toggle" type="button" onClick={toggleLanguage}>
            {language === 'ar' ? 'EN' : 'عربي'}
          </button>

          {/* Wishlist Icon */}
          <button className="item ic desktop-only" id="wishBtn" type="button" aria-label="Your Wishlist">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
              <path d="M12 20.3C7.1 16.9 3.6 13.7 3.6 9.8 3.6 7.2 5.7 5.1 8.3 5.1c1.7 0 3.1.9 3.7 2.2C12.7 5.9 14 5.1 15.7 5.1c2.6 0 4.7 2.1 4.7 4.7 0 3.9-3.5 7.1-8.4 10.5z"/>
            </svg>
            <span className="n">0</span>
          </button>

          {/* Account Icon */}
          <button className="item ic desktop-only" id="accountBtn" type="button" aria-label="Your Account">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
              <circle cx="12" cy="8" r="3.4"/>
              <path d="M5.5 20c0-3.5 3-6.1 6.5-6.1S18.5 16.5 18.5 20"/>
            </svg>
          </button>

          {/* Cart Icon */}
          <button className="item ic cart" id="cartBtn" type="button" aria-label="Your basket">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
              <path d="M6 8.5h12l-.9 11.5H6.9L6 8.5z"/>
              <path d="M9 8.5V6.5a3 3 0 0 1 6 0v2"/>
            </svg>
            <span className="n">0</span>
          </button>
        </div>
      </nav>

      {/* Drawer Backdrop Overlay */}
      {isMenuOpen && (
        <div className="drawer-backdrop" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Drawer Overlay (Side Drawer) */}
      <div className={`menu-drawer ${isMenuOpen ? 'open' : ''}`}>
        <button 
          type="button" 
          className="drawer-close-btn" 
          onClick={() => setIsMenuOpen(false)} 
          aria-label="Close menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <a 
          href="#hero" 
          className={currentView === 'home' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
        >
          {t('nav.home')}
        </a>
        <a 
          href="#products" 
          className={currentView === 'collection' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleNavClick('products-section'); }}
        >
          {t('nav.products')}
        </a>
        <a 
          href="#why-us" 
          className={currentView === 'why-us' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleNavClick('why-us'); }}
        >
          {t('nav.about')}
        </a>
        <a 
          href="#story" 
          className={currentView === 'story' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleNavClick('story-page'); }}
        >
          {t('nav.story')}
        </a>
        <a 
          href="#stores" 
          className={currentView === 'locations' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleNavClick('stores-section'); }}
        >
          {t('nav.stores')}
        </a>
        <a 
          href="#contact" 
          className={currentView === 'contact' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleNavClick('contact-section'); }}
        >
          {t('nav.contact')}
        </a>
        <button 
          type="button"
          className="drawer-call-cta" 
          onClick={handleWhatsAppCall}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>{t('nav.callUs')}</span>
        </button>
      </div>

      {/* Search Overlay Panel Backdrop */}
      {isSearchOpen && (
        <div 
          className="drawer-backdrop" 
          onClick={() => setIsSearchOpen(false)} 
          style={{ zIndex: 1001 }} 
        />
      )}

      {/* Search Overlay Panel (Slides down from top) */}
      <div className={`search-overlay-panel ${isSearchOpen ? 'open' : ''}`}>
        <div className="search-panel-container">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7"/>
              <path d="M20 20l-4-4"/>
            </svg>
            <input 
              type="text" 
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearchSubmit(searchVal);
                }
              }}
              placeholder={language === 'ar' ? 'ابحث عن الرنجة، الفيليه، أو البطارخ...' : 'Search for herring, fillets, or roe...'}
            />
            <button 
              type="button" 
              className="search-close-btn" 
              onClick={() => setIsSearchOpen(false)} 
              aria-label="Close search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Quick Search Shortcut Tags */}
          <div className="quick-search-tags">
            <span className="tags-label">{language === 'ar' ? 'البحث السريع:' : 'Quick Tags:'}</span>
            <div className="tags-list">
              {quickTags.map((tag) => (
                <button 
                  key={tag.en}
                  type="button" 
                  className="quick-tag-item"
                  onClick={() => {
                    const tagVal = language === 'ar' ? tag.ar : tag.en;
                    setSearchVal(tagVal);
                    handleSearchSubmit(tagVal);
                  }}
                >
                  {language === 'ar' ? tag.ar : tag.en}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
