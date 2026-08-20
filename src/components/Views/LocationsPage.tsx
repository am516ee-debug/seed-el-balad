import React, { useEffect } from 'react';
import { StoresSection } from '../Sections/StoresSection';
import { useTranslation } from '../../hooks/useTranslation';
import imgHero from '../../assets/images/seed-el-balad/herosection.png';

export const LocationsPage: React.FC = () => {
  const { language } = useTranslation();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201032033302', '_blank');
  };

  return (
    <div className="locations-page-view" style={{ paddingTop: '0', minHeight: '100vh', backgroundColor: 'transparent' }}>
      
      {/* 1. Cinematic Hero Section */}
      <section 
        className="subpage-hero reveal active"
        style={{ backgroundImage: `url(${imgHero})` }}
      >
        <div className="subpage-hero-content">
          <span className="eyebrow">
            {language === 'ar' ? 'أماكننا وتواجدنا' : 'Our Presence'}
          </span>
          <h1>
            {language === 'ar' ? 'فروعنا ومكاتبنا' : 'Locations & Branches'}
          </h1>
          <p>
            {language === 'ar' 
              ? 'تفضل بزيارة مقرات ومصانع "Seed El-blad" لمعاينة أرقى معايير تصنيع الأسماك المدخنة وبطروخ الرنجة في مصر، أو تواصل معنا مباشرة عبر القنوات الرسمية.'
              : 'Visit Seed El-blad’s administrative offices or our modern processing factory to experience the gold standard of smoked fish production in Egypt.'}
          </p>
        </div>
      </section>

      {/* 2. Interactive Map & Store List */}
      <StoresSection />

      {/* 3. Contact Methods Grid */}
      <div className="locations-contact-grid reveal active">
        {/* Card 1: Phone call */}
        <div className="loc-contact-card">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <h4>{language === 'ar' ? 'الهاتف المباشر' : 'Direct Line'}</h4>
          <p>{language === 'ar' ? 'خدمة العملاء والمبيعات' : 'Sales & Support'}</p>
          <a href="tel:+201032033302" style={{ fontWeight: 'bold' }}>+2 Egyptian Line</a>
        </div>

        {/* Card 2: WhatsApp Chat */}
        <div className="loc-contact-card" onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <h4>{language === 'ar' ? 'واتساب المبيعات' : 'WhatsApp Sales'}</h4>
          <p>{language === 'ar' ? 'متاحون للرد على مدار اليوم' : 'Available for inquiries 24/7'}</p>
          <span style={{ fontWeight: 'bold', color: 'var(--color-accent-gold-dark)' }}>
            {language === 'ar' ? 'راسلنا الآن' : 'Chat with Us'}
          </span>
        </div>

        {/* Card 3: Email */}
        <div className="loc-contact-card">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <h4>{language === 'ar' ? 'البريد الإلكتروني' : 'Official Email'}</h4>
          <p>{language === 'ar' ? 'للمراسلات الإدارية والشركاء' : 'For admin & partner queries'}</p>
          <a href="mailto:info@goldfoods.co">info@goldfoods.co</a>
        </div>

        {/* Card 4: Working Hours */}
        <div className="loc-contact-card">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <h4>{language === 'ar' ? 'ساعات العمل' : 'Working Hours'}</h4>
          <p>
            {language === 'ar' 
              ? 'الأحد - الخميس \n 9:00 ص - 5:00 م' 
              : 'Sunday - Thursday \n 9:00 AM - 5:00 PM'}
          </p>
          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
            {language === 'ar' ? 'الجمعة والسبت عطلة' : 'Fri & Sat Weekend'}
          </span>
        </div>
      </div>

    </div>
  );
};

export default LocationsPage;
