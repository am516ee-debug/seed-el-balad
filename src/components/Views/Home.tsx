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
      
      {/* 1. Luxury Sourcing & Countries Section */}
      <section className="homepage-sourcing-section reveal" id="about-section">
        <div className="container">
          <div className="sourcing-header reveal">
            <span className="collection-kick">{t('sourcing.eyebrow')}</span>
            <div className="divider-ornament" aria-hidden="true" style={{ margin: '14px auto 18px' }}>
              <span className="line-left" />
              <span className="diamond" />
              <span className="line-right" />
            </div>
            <h2>{language === 'ar' ? 'نسافر لنختار الأفضل بأنفسنا' : 'We Travel to Source the Best Ourselves'}</h2>
            <p className="sourcing-lead">
              {language === 'ar'
                ? 'يسافر فريق الإدارة ومسؤولو الجودة إلى أشهر وأرقى مناطق صيد الهارينج في شمال الأطلسي لاختيار أفضل الخامات مباشرة من المصدر، وفحص كل شحنة للتأكد من مطابقتها لأعلى معايير الجودة الصارمة.'
                : 'Our management and quality assurance teams travel directly to the world’s leading cold-water herring zones to select premium raw materials at source and verify every shipment meets our strict standards.'}
            </p>
          </div>

          {/* 5 Sourcing Hub Cards */}
          <div className="sourcing-grid">
            {[
              {
                code: 'NL',
                name: language === 'ar' ? 'هولندا' : 'Netherlands',
                tag: language === 'ar' ? 'هارينج الماتيس الفاخر' : 'MAATJES HERRING',
                desc: language === 'ar' ? 'المصدر التاريخي والأساسي لأجود خامات أسماك الهارينج النقية.' : 'Primary herring raw material supplier with historic processing heritage.'
              },
              {
                code: 'NO',
                name: language === 'ar' ? 'النرويج' : 'Norway',
                tag: language === 'ar' ? 'هارينج الأطلسي الشتوي' : 'WINTER ATLANTIC HERRING',
                desc: language === 'ar' ? 'صيد شتوي فائق النقاء غني بالزيوت الطبيعية والأوميجا 3.' : 'High-fat winter season catch from pure, deep arctic waters.'
              },
              {
                code: 'IS',
                name: language === 'ar' ? 'أيسلندا' : 'Iceland',
                tag: language === 'ar' ? 'مياه القطب الشمالي الباردة' : 'COLD-WATER HERRING',
                desc: language === 'ar' ? 'مياه متجمدة بكر ومصايد برية تخضع لأعلى معايير الاستدامة.' : 'Pure arctic waters with strictly regulated sustainable wild fishing.'
              },
              {
                code: 'FO',
                name: language === 'ar' ? 'جزر فارو' : 'Faroe Islands',
                tag: language === 'ar' ? 'صيد بري طبيعي مستدام' : 'WILD-CAUGHT SUSTAINABLE',
                desc: language === 'ar' ? 'صيد بري 100% بدون أي استزراع، ذو قوام لحمي متماسك.' : 'Fully wild oceanic catch with firm texture, no aquaculture.'
              },
              {
                code: 'UK',
                name: language === 'ar' ? 'اسكتلندا' : 'Scotland',
                tag: language === 'ar' ? 'صيد خريفي عالي الجودة' : 'AUTUMN HIGH-GRADE HERRING',
                desc: language === 'ar' ? 'أعلى نسبة دهون طبيعية وقوام زبدي لمنتجات الفيليه الممتازة.' : 'Highest natural fat content selected for our flagship premium products.'
              }
            ].map((hub, idx) => (
              <div className="sourcing-card reveal" key={idx}>
                <span className="sourcing-code">{hub.code}</span>
                <h3 className="sourcing-country">{hub.name}</h3>
                <span className="sourcing-tag">{hub.tag}</span>
                <p className="sourcing-desc">{hub.desc}</p>
              </div>
            ))}
          </div>

          {/* Criteria Banner Box */}
          <div className="sourcing-criteria-box reveal">
            <h4 className="sourcing-criteria-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <span>{language === 'ar' ? 'معايير فحص وتقييم الشحنات المستوردة:' : 'Shipment Evaluation Criteria:'}</span>
            </h4>
            <div className="sourcing-criteria-grid">
              <div className="sourcing-criterion">
                <span className="sourcing-check" aria-hidden="true">✓</span>
                <span>{language === 'ar' ? 'جودة موسم الصيد وخصائص المصيد الطبيعية والبيئية.' : 'Catch quality & fishing season characteristics.'}</span>
              </div>
              <div className="sourcing-criterion">
                <span className="sourcing-check" aria-hidden="true">✓</span>
                <span>{language === 'ar' ? 'نسبة الدهون الطبيعية المتوازنة والقوام الزبدي.' : 'Natural balanced fat content & buttery meat profile.'}</span>
              </div>
              <div className="sourcing-criterion">
                <span className="sourcing-check" aria-hidden="true">✓</span>
                <span>{language === 'ar' ? 'تجانس حجم الأسماك وتوحيد درجات الفرز لكل دفعة.' : 'Fish size consistency & uniform batch grading.'}</span>
              </div>
              <div className="sourcing-criterion">
                <span className="sourcing-check" aria-hidden="true">✓</span>
                <span>{language === 'ar' ? 'سلامة سلسلة التبريد الدقيقة وطرق التجميد الفوري في عرض البحر.' : 'Cold chain integrity & onboard flash-freezing methods.'}</span>
              </div>
            </div>
          </div>

          <div className="sourcing-cta-wrap reveal">
            <a 
              href="#story" 
              className="cs-all" 
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
