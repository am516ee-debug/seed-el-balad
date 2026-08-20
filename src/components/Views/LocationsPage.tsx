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

      {/* 3. Direct Client Assistance Section */}
      <section className="locations-assistance-section reveal active">
        <div className="container">
          <div className="locations-assistance-header">
            <span className="loc-eyebrow">
              {language === 'ar' ? 'قنوات المساعدة والتواصل المباشر' : 'DIRECT CLIENT ASSISTANCE'}
            </span>
            <h2>
              {language === 'ar' 
                ? 'نحن هنا لخدمتكم والإجابة عن استفساراتكم' 
                : 'We Are Here to Assist & Connect With You'}
            </h2>
            <p>
              {language === 'ar'
                ? 'سواء كنت تبحث عن أقرب نقطة بيع معتمدة، ترغب في تنسيق زيارة لمصنع بلبيس، أو تود الاستفسار عن منتجاتنا، فريقنا جاهز للتواصل الفوري معكم.'
                : 'Whether you are looking for the nearest certified retail partner, coordinating a visit to our Belbeis facility, or inquiring about our products, our team is at your disposal.'}
            </p>
          </div>

          <div className="locations-assistance-grid">
            {/* Card 1: Phone call */}
            <div className="loc-assist-card">
              <div className="loc-assist-top">
                <span className="loc-assist-tag">
                  {language === 'ar' ? 'المبيعات والمستهلكين' : 'SALES & SUPPORT'}
                </span>
                <div className="loc-assist-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </div>
              <h3 className="loc-assist-title">{language === 'ar' ? 'الهاتف المباشر' : 'Direct Line'}</h3>
              <p className="loc-assist-desc">{language === 'ar' ? 'خدمة العملاء وتلقي الطلبات' : 'Customer Service & Orders'}</p>
              <a href="tel:+201032033302" className="loc-assist-action">
                <span>+20 103 203 3302</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Card 2: WhatsApp Chat */}
            <div className="loc-assist-card" onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}>
              <div className="loc-assist-top">
                <span className="loc-assist-tag">
                  {language === 'ar' ? 'استجابة سريعة' : 'INSTANT CHAT'}
                </span>
                <div className="loc-assist-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
              </div>
              <h3 className="loc-assist-title">{language === 'ar' ? 'واتساب المبيعات' : 'WhatsApp Support'}</h3>
              <p className="loc-assist-desc">{language === 'ar' ? 'متاحون للاستفسارات على مدار الساعة' : 'Available 24/7 for Direct Inquiries'}</p>
              <span className="loc-assist-action">
                <span>{language === 'ar' ? 'محادثة فورية عبر واتساب' : 'Chat via WhatsApp'}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>

            {/* Card 3: Email */}
            <div className="loc-assist-card">
              <div className="loc-assist-top">
                <span className="loc-assist-tag">
                  {language === 'ar' ? 'المراسلات الرسمية' : 'OFFICIAL INQUIRIES'}
                </span>
                <div className="loc-assist-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
              </div>
              <h3 className="loc-assist-title">{language === 'ar' ? 'البريد الإلكتروني' : 'Official Email'}</h3>
              <p className="loc-assist-desc">{language === 'ar' ? 'للتعاقدات والإدارة والشركاء' : 'Corporate & Partnership Requests'}</p>
              <a href="mailto:info@goldfoods.co" className="loc-assist-action">
                <span>info@goldfoods.co</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Card 4: Working Hours */}
            <div className="loc-assist-card">
              <div className="loc-assist-top">
                <span className="loc-assist-tag">
                  {language === 'ar' ? 'المقر والمصنع' : 'HEADQUARTERS'}
                </span>
                <div className="loc-assist-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
              </div>
              <h3 className="loc-assist-title">{language === 'ar' ? 'مواعيد العمل' : 'Working Hours'}</h3>
              <p className="loc-assist-desc">
                {language === 'ar' 
                  ? 'الأحد - الخميس: 9:00 ص - 5:00 م' 
                  : 'Sun - Thu: 9:00 AM - 5:00 PM'}
              </p>
              <span className="loc-assist-footnote">
                {language === 'ar' ? 'مجمع بلبيس الصناعي، الشرقية' : 'Belbeis Industrial Complex, Egypt'}
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LocationsPage;
