import React, { useEffect } from 'react';
import Hero from '../Sections/Hero';
import CollectionPedestal from '../Sections/CollectionPedestal';
import EditorialBand from '../Sections/EditorialBand';
import StatsSection from '../Sections/StatsSection';
import QualitySection from '../Sections/QualitySection';
import { useTranslation } from '../../hooks/useTranslation';

import '../../css/home.css';
import '../../css/story.css'; // Share the gorgeous timeline classes

interface HomeProps {
  onViewPdf: (url: string, title: string) => void;
  onSelectCategory: (categoryId: string) => void;
  onNavigate: (view: 'home' | 'collection' | 'story' | 'locations' | 'why-us' | 'contact', sectionId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onViewPdf, onSelectCategory, onNavigate }) => {
  const { t, language } = useTranslation();

  useEffect(() => {
    // Premium Scroll Reveal Animation logic
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Reveal only once for smooth performance
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));

    // Staggered Timeline rows scroll reveal
    const timelineRows = document.querySelectorAll('.timeline-row');
    const rowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-row');
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -40px 0px' }
    );

    timelineRows.forEach((row) => rowObserver.observe(row));

    return () => {
      reveals.forEach(el => observer.unobserve(el));
      rowObserver.disconnect();
    };
  }, []);

  return (
    <div className="home-view">
      <Hero />
      <CollectionPedestal onSelectCategory={onSelectCategory} />
      <EditorialBand />
      <StatsSection />
      
      {/* Visual Quality & Certifications Section */}
      <QualitySection onViewPdf={onViewPdf} />
      
      {/* 1. Full-Width Sourcing & Countries Section */}
      <section className="homepage-sourcing-section" id="about-section" style={{ padding: '100px 8% 80px', backgroundColor: 'var(--color-bg-cream)', borderBottom: '1px solid var(--color-border-divider)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span className="collection-kick">{t('sourcing.eyebrow')}</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', color: 'var(--color-text-ink)', marginTop: '12px', lineHeight: '1.2' }}>
            {t('sourcing.title')}
          </h2>
          <p style={{ opacity: 0.85, fontSize: '1rem', lineHeight: '1.7', marginTop: '20px', maxWidth: '800px', marginInline: 'auto' }}>
            {t('sourcing.desc')}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '30px', justifyContent: 'center' }}>
            <span className="iso-badge" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border-divider)' }}>{language === 'ar' ? '🇳🇱 هولندا' : '🇳🇱 Netherlands'}</span>
            <span className="iso-badge" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border-divider)' }}>{language === 'ar' ? '🇳🇴 النرويج' : '🇳🇴 Norway'}</span>
            <span className="iso-badge" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border-divider)' }}>{language === 'ar' ? '🇮🇸 أيسلندا' : '🇮🇸 Iceland'}</span>
            <span className="iso-badge" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border-divider)' }}>{language === 'ar' ? '🇫🇴 جزر فارو' : '🇫🇴 Faroe Islands'}</span>
            <span className="iso-badge" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border-divider)' }}>{language === 'ar' ? '🏴󠁧󠁢󠁳 كوتلندا' : '🏴󠁧󠁢󠁳 Scotland'}</span>
          </div>
          <div style={{ marginTop: '35px' }}>
            <a 
              href="#story" 
              className="cs-all" 
              style={{ marginInline: 'auto' }}
              onClick={(e) => { 
                e.preventDefault(); 
                onNavigate('story'); 
              }}
            >
              {language === 'ar' ? 'اكتشف كامل قصتنا' : 'Explore Our Full Story'}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Redesigned Full-Width Timeline Section (Centred Gold Axis) */}
      <section className="story-timeline-sec reveal" style={{ padding: '100px 8% 120px', backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-border-divider)' }}>
        <div className="container">
          <div className="timeline-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="collection-kick">{language === 'ar' ? 'مسيرتنا التاريخية' : 'THE LEGACY TIMELINE'}</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-text-ink)', marginTop: '8px' }}>
              {language === 'ar' ? 'مسيرة العراقة والجودة' : 'A Chronicle of Legacy & Quality'}
            </h2>
          </div>

          <div className="timeline-axis-wrapper">
            {/* Row 1 - 2019 */}
            <div className="timeline-row">
              <div className="timeline-card">
                <span className="timeline-year-badge">2019</span>
                <h4>{language === 'ar' ? 'بداية الرحلة في مصر' : 'The Inception'}</h4>
                <p>
                  {language === 'ar' 
                    ? 'تأسيس جولدن فودز وبدء توريد أرقى المأكولات البحرية الهولندية للسوق المصري.' 
                    : 'Establishing Gold Foods to import premium Dutch herring under strict quality controls.'}
                </p>
              </div>
            </div>

            {/* Row 2 - 2021 */}
            <div className="timeline-row right-aligned">
              <div className="timeline-card">
                <span className="timeline-year-badge">2021</span>
                <h4>{language === 'ar' ? 'الاستيراد المباشر والمصادر' : 'Global Sourcing'}</h4>
                <p>
                  {language === 'ar' 
                    ? 'بناء شراكات مباشرة واستيراد حصري من النرويج وأيسلندا وجزر فارو لضمان أفضل مصيد.' 
                    : 'Setting up exclusive direct raw material imports from Norway, Iceland, and Ireland.'}
                </p>
              </div>
            </div>

            {/* Row 3 - 2023 */}
            <div className="timeline-row">
              <div className="timeline-card">
                <span className="timeline-year-badge">2023</span>
                <h4>{language === 'ar' ? 'شهادات الأمان الغذائي العالمية' : 'Global Safety Certification'}</h4>
                <p>
                  {language === 'ar' 
                    ? 'اعتماد المصنع والإنتاج بالكامل بمواصفات الأمان العالمية ISO 22000 و HACCP.' 
                    : 'Full certification of our Belbeis facility under international ISO 22000 & HACCP standards.'}
                </p>
              </div>
            </div>

            {/* Row 4 - 2026 */}
            <div className="timeline-row right-aligned">
              <div className="timeline-card">
                <span className="timeline-year-badge">2026</span>
                <h4>{language === 'ar' ? 'الريادة وعلامة سيد البلد' : 'Market Leadership'}</h4>
                <p>
                  {language === 'ar' 
                    ? 'إطلاق العلامة التجارية "سيد البلد" لتصبح الاسم الأبرز والأكثر ثقة للجودة الفائقة للأسماك المدخنة وبطارخ الرنجة في مصر.' 
                    : 'Becoming the leading quality benchmark for premium smoked fish and herring roe in Egypt.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
