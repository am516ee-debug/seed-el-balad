import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

// Import cinematic visual assets for timeline cards
import imgCraftsmanship from '../../assets/images/seed-el-balad/why_hero_s_page_1.jpeg';
import imgIntro from '../../assets/images/seed-el-balad/section_3.jpeg';
import imgFactory from '../../assets/images/seed-el-balad/img_22.jpeg';
import imgProduct1 from '../../assets/images/seed-el-balad/product_1.jpeg';
import imgTable from '../../assets/images/seed-el-balad/img_4.jpeg';

import '../../css/story.css';

interface OurStoryPageProps {
  onViewPdf?: (url: string, title: string) => void;
}

export const OurStoryPage: React.FC<OurStoryPageProps> = ({ onViewPdf }) => {
  const { language } = useTranslation();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const certificates = [
    {
      badge: 'ISO 22000',
      name: language === 'ar' ? 'نظام إدارة سلامة الغذاء' : 'Food Safety Management System',
      pdfFile: '/certificates/FP-004-13 Perfect Cert(Gold Foods (Seed El Balad))- ISO 22000 ..pdf',
      imgFile: '/certificates/FP-004-13 Perfect Cert(Gold Foods (Seed El Balad))- ISO 22000 ..png'
    },
    {
      badge: 'ISO 9001',
      name: language === 'ar' ? 'نظام إدارة الجودة' : 'Quality Management System',
      pdfFile: '/certificates/FP-004-13 Perfect Cert( Gold Foods (Seed El Balad)) - ISO 9001.pdf',
      imgFile: '/certificates/FP-004-13 Perfect Cert( Gold Foods (Seed El Balad)) - ISO 9001.png'
    },
    {
      badge: 'ISO 14001',
      name: language === 'ar' ? 'نظام الإدارة البيئية' : 'Environmental Management System',
      pdfFile: '/certificates/FP-004-13 Perfect Cert - (Gold Foods )ISO 14001.pdf',
      imgFile: '/certificates/FP-004-13 Perfect Cert - (Gold Foods )ISO 14001.png'
    },
    {
      badge: 'ISO 45001',
      name: language === 'ar' ? 'السلامة والصحة المهنية' : 'Occupational Health & Safety',
      pdfFile: '/certificates/FP-004-13 Perfect Cert ( Gold Foods (Seed El Balad))- ISO 45001.pdf',
      imgFile: '/certificates/FP-004-13 Perfect Cert ( Gold Foods (Seed El Balad))- ISO 45001.png'
    },
    {
      badge: 'HACCP',
      name: language === 'ar' ? 'تحليل المخاطر والتحكم الحرجي' : 'Hazard Analysis Critical Control Point',
      pdfFile: '/certificates/Perfect_Cert_-HACCP 01- Gold Food .pdf',
      imgFile: '/certificates/Perfect_Cert_-HACCP 01- Gold Food .png'
    }
  ];

  // Auto-scroll loop interval with hover pause
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % certificates.length);
    }, 1600); // Autoplay loops every 1.6s (pauses for 1s, scrolls for 0.52s)
    return () => clearInterval(timer);
  }, [isHovered, certificates.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % certificates.length);
  };

  const handleCardClick = (idx: number, cert: typeof certificates[0]) => {
    if (idx === activeIdx) {
      onViewPdf && onViewPdf(cert.imgFile, cert.name);
    } else {
      setActiveIdx(idx);
    }
  };

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' as any });

    // Scroll Reveal Observers
    const revealSections = document.querySelectorAll(
      '.story-manifesto-sec, .story-values-sec, .story-timeline-sec'
    );
    const timelineRows = document.querySelectorAll('.timeline-row');

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active-reveal');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

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

    revealSections.forEach((sec) => sectionObserver.observe(sec));
    timelineRows.forEach((row) => rowObserver.observe(row));

    return () => {
      sectionObserver.disconnect();
      rowObserver.disconnect();
    };
  }, []);

  return (
    <div className="story-page-view" style={{ paddingTop: '0' }}>
      
      {/* 1. IMMERSIVE HERO HEADER */}
      <section 
        className="subpage-hero reveal active"
        style={{ backgroundImage: `url(${imgCraftsmanship})` }}
        role="img"
        aria-label={language === 'ar' ? 'مصنع جولد فودز لإنتاج وتدخين الأسماك' : 'Gold Foods premium smoked fish production facility'}
      >
        <div className="subpage-hero-content">
          <span className="eyebrow">
            {language === 'ar' ? 'قصتنا وعراقتنا' : 'OUR HERITAGE'}
          </span>
          <h1>
            {language === 'ar' ? 'أصل الحكاية والعراقة' : 'Our Story & Legacy'}
          </h1>
          <p>
            {language === 'ar' 
              ? 'رحلة التميز التي بدأت بشغف صيد وتصنيع الأسماك البحرية وفق أعلى معايير الجودة الأوروبية، لنصل بمنتجاتنا الفاخرة إلى كل مائدة مصرية.'
              : 'A journey of culinary excellence that began with a passion for premium seafood processing under European standards, feeding families across Egypt.'}
          </p>
        </div>
      </section>

      {/* 2. THE FOUNDERS MANIFESTO SECTION */}
      <section className="story-manifesto-sec reveal" style={{ backgroundColor: 'var(--color-bg-cream)' }}>
        <div className="container">
          <div className="manifesto-frame">
            <div className="gold-corner-acc top-left"></div>
            <div className="gold-corner-acc top-right"></div>
            <div className="gold-corner-acc bottom-left"></div>
            <div className="gold-corner-acc bottom-right"></div>
            
            <div className="manifesto-content">
              <span className="manifesto-badge">
                {language === 'ar' ? 'منيفستو التأسيس' : 'FOUNDERS MANIFESTO'}
              </span>
              <h3>
                {language === 'ar' 
                  ? 'جودتنا... ميثاق شرف نحمله بكل حب وعطاء' 
                  : 'Quality is Our Silent Promise & Shared Pride'}
              </h3>
              <p>
                {language === 'ar'
                  ? 'في سيد البلد، لا نصنع مجرد رنجة مدخنة، بل ننقل أمانة غذائية نلتزم فيها بأرقى شروط الصنع والتعقيم. مسيرتنا بدأت عام 2019 واعتمدت بالكامل على التطوير التكنولوجي ونقل الخبرات الأوروبية لبلدنا مصر لتشعر عائلتك بالأمان والمذاق الذهبي الأصيل.'
                  : 'At Seed El-blad, we do not merely process smoked fish; we deliver a culinary legacy. Since our inception in 2019, our administrative and processing teams have been dedicated to raising local production benchmarks, dry curing with low-sodium sea salt, and vacuum sealing under certified conditions.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED VALUE PILLARS SHIELDS */}
      <section className="story-values-sec reveal" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="timeline-header" style={{ marginBottom: '60px' }}>
            <span className="collection-kick">{language === 'ar' ? 'ركائز العهد' : 'OUR PILLARS'}</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-text-ink)', marginTop: '8px' }}>
              {language === 'ar' ? 'القيم التي نزرعها في كل غلاف' : 'Core Values Driven by Trust'}
            </h2>
          </div>
          
          <div className="values-grid">
            {/* Pillar 1 */}
            <div className="value-card">
              <span className="value-num">01</span>
              <h4>{language === 'ar' ? 'الالتزام والشفافية' : 'Unyielding Integrity'}</h4>
              <p>
                {language === 'ar' 
                  ? 'من البحر إلى المائدة، نتبع أعلى درجات الأمان والالتزام بالاشتراطات الصحية وفحص عينات الشحنات.' 
                  : 'Maintain complete transparency from raw material catching coordinates to final packaging inspection checks.'}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="value-card">
              <span className="value-num">02</span>
              <h4>{language === 'ar' ? 'التكنولوجيا والتميز' : 'European Kiln Tech'}</h4>
              <p>
                {language === 'ar' 
                  ? 'استعمال أفران التدخين الأوتوماتيكية المغلقة بالكامل بخشب الزان الطبيعي لثبات الطعم الممتاز.' 
                  : 'Deploying closed, automated smoking chambers fueled by natural beechwood to secure pristine consistency.'}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="value-card">
              <span className="value-num">03</span>
              <h4>{language === 'ar' ? 'إسعاد المستهلك' : 'Customer Centricity'}</h4>
              <p>
                {language === 'ar' 
                  ? 'تقديم رنجة مدخنة قليلة الملح بملمس متماسك ولذيذ، خالية من التزريع والعيوب الفنية.' 
                  : 'Delivering low-sodium products processed to delight the senses and guarantee consumer health and satisfaction.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHRONOLOGICAL LEGACY TIMELINE (CENTRED AXIS) */}
      <section className="story-timeline-sec reveal">
        <div className="container">
          <div className="timeline-header" style={{ marginBottom: '60px' }}>
            <span className="collection-kick">{language === 'ar' ? 'حكاية الزمن' : 'THE LEGACY TIMELINE'}</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-text-ink)', marginTop: '8px' }}>
              {language === 'ar' ? 'رحلة البناء والانتشار' : 'A Chronical of Craft'}
            </h2>
          </div>

          <div className="timeline-axis-wrapper">
            {/* Row 1 - 2019 */}
            <div className="timeline-row">
              <div className="timeline-card">
                <div 
                  className="timeline-card-image" 
                  style={{ backgroundImage: `url(${imgIntro})` }} 
                  role="img"
                  aria-label={language === 'ar' ? 'صيد أسماك الهارينج المستوردة من أيرلندا والنرويج' : 'Sourcing imported cold-water Atlantic herring'}
                />
                <span className="timeline-year-badge">2019</span>
                <h4>{language === 'ar' ? 'التأسيس ونقل الخبرة الأوروبية' : 'The Inception & Tech Transfer'}</h4>
                <p>
                  {language === 'ar'
                    ? 'بدأت مسيرة جولدن فودز في السوق المصري بعد نقل خبرات عملية واسعة من أسواق ألمانيا وإسبانيا والدنمارك، بهدف تطبيق أرقى معايير تصنيع الأسماك المدخنة محلياً.'
                    : 'The journey began by transferring deep manufacturing and quality control expertise from Spain, Germany, and Denmark to establish a premium local processing standard.'}
                </p>
              </div>
            </div>

            {/* Row 2 - 2021 */}
            <div className="timeline-row right-aligned">
              <div className="timeline-card">
                <div 
                  className="timeline-card-image" 
                  style={{ backgroundImage: `url(${imgFactory})` }} 
                  role="img"
                  aria-label={language === 'ar' ? 'صالة أفران التدخين الرقمية المغلقة بمصنع بلبيس' : 'Modern digital smoking kilns room in Belbeis'}
                />
                <span className="timeline-year-badge">2021</span>
                <h4>{language === 'ar' ? 'تأسيس قلعة بلبيس المتطورة' : 'The Belbeis Production Fortress'}</h4>
                <p>
                  {language === 'ar'
                    ? 'افتتاح وتطوير مصنعنا الرئيسي بمدينة بلبيس بالشرقية، وتجهيزه بأحدث أفران التدخين الرقمية المغلقة بالكامل لضمان الامتثال لشهادات سلامة الغذاء العالمية.'
                    : 'Opening of our specialized Belbeis processing facility, equipped with sealed computer-monitored smoking chambers to meet rigid global ISO criteria.'}
                </p>
              </div>
            </div>

            {/* Row 3 - 2023 */}
            <div className="timeline-row">
              <div className="timeline-card">
                <div 
                  className="timeline-card-image" 
                  style={{ backgroundImage: `url(${imgProduct1})` }} 
                  role="img"
                  aria-label={language === 'ar' ? 'غلاف رنجة سيد البلد الفاخرة' : 'Seed El-blad premium gold sealed herring product packaging'}
                />
                <span className="timeline-year-badge">2023</span>
                <h4>{language === 'ar' ? 'إطلاق علامة "سيد البلد"' : 'Launching "Seed El-blad"'}</h4>
                <p>
                  {language === 'ar'
                    ? 'إطلاق العلامة التجارية لتمثل معيار الذهب للرنجة المدخنة وبطروخ الرنجة الشامبين الفاخر، وتوسيع شراكتنا مع كبرى سلاسل السوبرماركت والفنادق في مصر.'
                    : 'Official introduction of the consumer brand to represent the gold standard of Slow-Smoked Herring and premium caviar roe for luxury retail markets.'}
                </p>
              </div>
            </div>

            {/* Row 4 - 2026 */}
            <div className="timeline-row right-aligned">
              <div className="timeline-card">
                <div 
                  className="timeline-card-image" 
                  style={{ backgroundImage: `url(${imgTable})` }} 
                  role="img"
                  aria-label={language === 'ar' ? 'سفرة ولمة العائلة المصرية مع رنجة سيد البلد' : 'Traditional Egyptian family dinner featuring premium smoked herring'}
                />
                <span className="timeline-year-badge">2026</span>
                <h4>{language === 'ar' ? 'ريادة التوزيع والانتشار الإقليمي' : 'Market Leadership & Beyond'}</h4>
                <p>
                  {language === 'ar'
                    ? 'تغطية واسعة لكافة المحافظات المصرية عبر أسطول توزيع مبرد متطور، وتقديم تشكيلاتنا المبتكرة والظروف المغلقة كعلامة الجودة الأولى في السوق.'
                    : 'Expanding our cold-chain logistical fleet to five major governorates, solidifying our brand as the ultimate choice for premium seafood lovers.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUALITY CERTIFICATIONS SHOWCASE */}
      <section className="story-certs-sec reveal active" style={{ padding: '80px 8% 120px', backgroundColor: 'var(--color-bg-cream)' }}>
        <div className="container">
          
          {/* Unified Premium Section Header */}
          <div className="reveal active" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="collection-kick">{language === 'ar' ? 'اعتماداتنا الموثقة' : 'OUR CERTIFICATIONS'}</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-text-ink)', marginTop: '12px' }}>
              {language === 'ar' ? 'شهادات الجودة والرقابة الصحية' : 'Certified Quality & Food Safety'}
            </h2>
            
            <div className="divider-ornament" style={{ margin: '18px auto' }} aria-hidden="true">
              <span className="line-left"></span>
              <span className="diamond"></span>
              <span className="line-right"></span>
            </div>

            <p style={{ maxWidth: '750px', margin: '0 auto', opacity: 0.85, fontSize: '0.98rem', lineHeight: '1.6' }}>
              {language === 'ar'
                ? 'نلتزم بتطبيق المعايير والاشتراطات الصحية العالمية في كافة مراحل فحص الشحنات ورقابة جودة الإنتاج بموجب الاعتمادات الرسمية:'
                : 'We adhere to strict international food safety, quality control, and environmental standards certified under official global bodies:'}
            </p>
          </div>

          {/* 3D Center-Focus Loop Carousel Viewport */}
          <div 
            className="carousel-viewport"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Side arrow controls */}
            <button 
              type="button" 
              className="carousel-arrow prev" 
              onClick={handlePrev}
              aria-label="Previous Certificate"
            >
              ‹
            </button>
            
            <button 
              type="button" 
              className="carousel-arrow next" 
              onClick={handleNext}
              aria-label="Next Certificate"
            >
              ›
            </button>

            {/* Interactive track containing 3D shifted cards */}
            <div className="carousel-track">
              {certificates.map((cert, idx) => {
                // Calculate circular offset
                let offset = idx - activeIdx;
                if (offset < -2) offset += certificates.length;
                if (offset > 2) offset -= certificates.length;

                return (
                  <div 
                    key={idx} 
                    className={`carousel-card ${idx === activeIdx ? 'active' : ''}`}
                    data-offset={offset}
                    onClick={() => handleCardClick(idx, cert)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { handleCardClick(idx, cert); } }}
                  >
                    {/* A4 Document Frame with Gold Corner Accents */}
                    <div className="cert-image-frame">
                      <div className="cert-corner top-left"></div>
                      <div className="cert-corner top-right"></div>
                      <div className="cert-corner bottom-left"></div>
                      <div className="cert-corner bottom-right"></div>
                      
                      <img src={cert.imgFile} alt={cert.name} loading="lazy" />
                      
                      {/* Sleek Zoom Hover Overlay */}
                      <div className="cert-hover-overlay">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                        <span>
                          {idx === activeIdx 
                            ? (language === 'ar' ? 'انقر لتكبير' : 'Click to Zoom')
                            : (language === 'ar' ? 'انقر لتوسيط المستند' : 'Click to Focus')}
                        </span>
                      </div>
                    </div>

                    {/* Minimalist Label Metadata */}
                    <div className="cert-meta-info">
                      <span className="cert-meta-code">{cert.badge}</span>
                      <h3 className="cert-meta-title">{cert.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Dot Indicators */}
            <div className="carousel-dots">
              {certificates.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`carousel-dot ${idx === activeIdx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Go to certificate ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurStoryPage;
