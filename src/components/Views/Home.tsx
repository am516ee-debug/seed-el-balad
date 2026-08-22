import React, { useEffect } from 'react';
import Hero from '../Sections/Hero';
import CollectionPedestal from '../Sections/CollectionPedestal';
import EditorialBand from '../Sections/EditorialBand';
import StatsSection from '../Sections/StatsSection';
import QualitySection from '../Sections/QualitySection';
import SmokingProcessSection from '../Sections/SmokingProcessSection';
import { useTranslation } from '../../hooks/useTranslation';
import imgFacility from '../../assets/images/seed-el-balad/OUR BELBEIS FACILITY pic.webp';

import '../../css/home.css';
import '../../css/story.css';

interface HomeProps {
  onViewPdf: (url: string, title: string) => void;
  onSelectCategory: (categoryId: string) => void;
  onNavigate: (view: 'home' | 'collection' | 'story' | 'locations' | 'why-us' | 'contact', sectionId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onViewPdf, onSelectCategory, onNavigate }) => {
  const { language } = useTranslation();

  useEffect(() => {
    // Premium Scroll Reveal Animation logic
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));

    return () => {
      reveals.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-view">
      <Hero />
      <CollectionPedestal onSelectCategory={onSelectCategory} />
      <EditorialBand />

      {/* ─── 1. WHY SEED EL-BALAD SHOWCASE SECTION ─── */}
      <section className="home-whyus-section reveal" id="why-us-showcase">
        <div className="container">
          <div className="home-section-header reveal">
            <span className="home-section-eyebrow">
              {language === 'ar' ? 'معايير الريادة والجودة' : 'THE QUALITY BENCHMARK'}
            </span>
            <div className="home-navy-divider" />
            <h2>
              {language === 'ar' ? 'لماذا يختار كبار الشركاء والذواقة "سيد البلد"؟' : 'Why Connoisseurs & Partners Choose Seed El-Balad'}
            </h2>
            <p>
              {language === 'ar'
                ? 'إتقان صناعة المأكولات البحرية والأسماك المدخنة الفاخرة يبدأ من رحلة الصيد في أعماق مياه القطب الشمالي حتى أدق تفاصيل التدخين الطبيعي والفرز اليدوي المخبري.'
                : 'Mastery in smoked seafood starts in the pristine Arctic deep waters down to artisanal natural beechwood smoking and multi-stage laboratory inspection.'}
            </p>
          </div>

          <div className="home-whyus-grid">
            {/* Pillar 1 */}
            <div className="home-whyus-card reveal">
              <div className="home-whyus-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <span className="home-whyus-badge">{language === 'ar' ? 'اعتمادات رسمية' : 'CERTIFIED SAFETY'}</span>
              <h3>{language === 'ar' ? '5 شهادات دولية معتمدة' : '5 Global Certifications'}</h3>
              <p>
                {language === 'ar'
                  ? 'حاصلون على ISO 22000 و HACCP واعتماد الهيئة القومية لسلامة الغذاء (NFSA) وفق أعلى المعايير الصحية.'
                  : 'Certified under ISO 22000, HACCP, and NFSA with uncompromised international safety standards.'}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="home-whyus-card reveal">
              <div className="home-whyus-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="home-whyus-badge">{language === 'ar' ? 'استيراد مباشر' : '100% ARCTIC WILD'}</span>
              <h3>{language === 'ar' ? 'صيد بري نقي 100%' : '100% Pure Wild-Caught'}</h3>
              <p>
                {language === 'ar'
                  ? 'استيراد حصري ومباشر من هولندا والنرويج وأيسلندا وجزر فارو من أفضل مواسم الصيد الشتوية دون وسطاء.'
                  : 'Direct exclusive imports from the Netherlands, Norway, Iceland, and Faroe Islands without intermediaries.'}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="home-whyus-card reveal">
              <div className="home-whyus-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="home-whyus-badge">{language === 'ar' ? 'حرفة أصيلة' : 'ARTISANAL CRAFT'}</span>
              <h3>{language === 'ar' ? 'دورة تصنيع 60 ساعة' : '60-Hour Artisanal Craft'}</h3>
              <p>
                {language === 'ar'
                  ? 'تمليح هادئ متوازن وتدخين طبيعي متدرج بأخشاب الزان الطبيعية بدون أي مواد كيميائية أو نكهات صناعية.'
                  : 'Gradual balanced salting and pure natural beechwood smoking with zero artificial additives or preservatives.'}
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="home-whyus-card reveal">
              <div className="home-whyus-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <span className="home-whyus-badge">{language === 'ar' ? 'فحص مخبري' : '24 CHECKPOINTS'}</span>
              <h3>{language === 'ar' ? '24 نقطة فحص ومطابقة' : '24 Quality Checkpoints'}</h3>
              <p>
                {language === 'ar'
                  ? 'فرز يدوي دقيق وفحص مخبري دوري لنسبة الدهون والقوام الزبدي ونقاء البطارخ قبل طرح أي دفعة.'
                  : 'Meticulous manual sorting and lab inspection for fat ratios, buttery texture, and pristine roe clarity.'}
              </p>
            </div>
          </div>

          <div className="home-whyus-cta reveal">
            <button 
              type="button"
              className="btn-home-cta" 
              onClick={() => onNavigate('why-us')}
            >
              <span>{language === 'ar' ? 'اكتشف كافة معايير الجودة ومصنعنا' : 'Explore Why Seed El-Balad'}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* ─── 2. OUR STORY SHOWCASE SECTION ─── */}
      <section className="home-story-section reveal" id="story-showcase">
        <div className="container">
          <div className="home-story-layout">
            {/* Left/Start Column: Narrative & Highlights */}
            <div className="home-story-content reveal">
              <span className="home-section-eyebrow">
                {language === 'ar' ? 'حكايتنا وتاريخنا' : 'HERITAGE & LEGACY'}
              </span>
              <div className="home-navy-divider home-navy-divider-start" />
              <h2>
                {language === 'ar' 
                  ? 'مسيرة شغف بحري بدأت من هولندا وتوجت بالريادة في مصر' 
                  : 'A Sea-Craft Legacy from the North Sea to Egyptian Leadership'}
              </h2>
              <p className="home-story-lead">
                {language === 'ar'
                  ? 'تأسست شركة جولدن فودز في عام 2019 برؤية طموحة تهدف إلى إرساء معيار غير مسبوق في صناعة الأسماك المدخنة وبطارخ الرنجة الفاخرة، لتصبح علامة "سيد البلد" رمزاً للثقة والمذاق الأصيل.'
                  : 'Founded in 2019, Gold Foods set out to establish an unprecedented benchmark in premium smoked seafood and herring roe, making "Seed El-Balad" Egypt’s most trusted household name.'}
              </p>

              <div className="home-story-milestones">
                <div className="home-milestone-item">
                  <span className="home-milestone-year">2019</span>
                  <div className="home-milestone-info">
                    <h4>{language === 'ar' ? 'بداية الرحلة والتأسيس' : 'The Inception'}</h4>
                    <p>{language === 'ar' ? 'استيراد وتوريد أرقى الأسماك الهولندية.' : 'Importing premium Dutch raw catch.'}</p>
                  </div>
                </div>

                <div className="home-milestone-item">
                  <span className="home-milestone-year">2021</span>
                  <div className="home-milestone-info">
                    <h4>{language === 'ar' ? 'الاستيراد المباشر والشراكات' : 'Global Direct Sourcing'}</h4>
                    <p>{language === 'ar' ? 'شراكات حصرية في النرويج وأيسلندا وجزر فارو.' : 'Direct partnerships in Norway, Iceland, and Faroes.'}</p>
                  </div>
                </div>

                <div className="home-milestone-item">
                  <span className="home-milestone-year">2023</span>
                  <div className="home-milestone-info">
                    <h4>{language === 'ar' ? 'اعتماد المصنع والشهادات' : 'Global Accreditation'}</h4>
                    <p>{language === 'ar' ? 'اعتماد مجمع بلبيس الصناعي بمعايير ISO 22000.' : 'ISO 22000 & HACCP facility certification.'}</p>
                  </div>
                </div>

                <div className="home-milestone-item">
                  <span className="home-milestone-year">2026</span>
                  <div className="home-milestone-info">
                    <h4>{language === 'ar' ? 'الريادة وعلامة سيد البلد' : 'Market Benchmark'}</h4>
                    <p>{language === 'ar' ? 'الاسم الأول للأسماك المدخنة وبطارخ الرنجة.' : 'Egypt’s premier luxury smoked seafood brand.'}</p>
                  </div>
                </div>
              </div>

              <div className="home-story-cta-wrap">
                <button 
                  type="button"
                  className="btn-home-cta" 
                  onClick={() => onNavigate('story')}
                >
                  <span>{language === 'ar' ? 'اقرأ قصتنا الكاملة وتاريخ المصنع' : 'Explore Our Full Story'}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right/End Column: Visual Image & Philosophy Card */}
            <div className="home-story-media reveal">
              <div className="home-story-img-frame">
                <img src={imgFacility} alt="Our Belbeis Facility - Seed El-Balad" className="home-story-img" />
                <div className="home-story-overlay-card">
                  <span className="home-story-est">{language === 'ar' ? 'منذ 2019' : 'EST. 2019'}</span>
                  <blockquote>
                    {language === 'ar'
                      ? '«نحن لا نستورد الأسماك فحسب، بل نسافر لاختيار أجود مواسم الصيد لنصنع منتجاً يفخر به كل بيت مصري.»'
                      : '“We do not merely import fish; we travel to hand-select peak fishing seasons to craft a product of pride.”'}
                  </blockquote>
                  <span className="home-story-author">{language === 'ar' ? 'إدارة جولدن فودز' : 'Gold Foods Management'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ─── 3. INTERACTIVE BEFORE & AFTER SMOKING TRANSFORMATION ─── */}
      <SmokingProcessSection />

      {/* Visual Quality & Certifications Section */}
      <QualitySection onViewPdf={onViewPdf} />
    </div>
  );
};

export default Home;
