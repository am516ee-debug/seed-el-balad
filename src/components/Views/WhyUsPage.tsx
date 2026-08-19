import React, { useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

// Landing page images only
import imgHero from '../../assets/images/seed-el-balad/herosection.png';
import imgProcess1 from '../../assets/images/seed-el-balad/section_3.jpeg';
import imgProcess2 from '../../assets/images/seed-el-balad/img_11.jpeg';
import imgFactory from '../../assets/images/seed-el-balad/img_22.jpeg';
import imgFromTo from '../../assets/images/seed-el-balad/from_to.jpeg';

import '../../css/whyus.css';

interface WhyUsPageProps {
  onViewPdf: (url: string, title: string) => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onViewPdf }) => {
  const { language } = useTranslation();

  const certificates = [
    {
      badge: 'ISO 22000',
      title: language === 'ar' ? 'نظام إدارة سلامة الغذاء' : 'Food Safety Management System',
      desc: language === 'ar'
        ? 'أعلى معايير السلامة الغذائية على مستوى سلسلة الإمداد بالكامل.'
        : 'Highest food safety standards across the entire supply chain.',
      pdfFile: '/certificates/FP-004-13 Perfect Cert(Gold Foods (Seed El Balad))- ISO 22000 ..pdf',
      imgFile: '/certificates/FP-004-13 Perfect Cert(Gold Foods (Seed El Balad))- ISO 22000 ..png',
    },
    {
      badge: 'ISO 9001',
      title: language === 'ar' ? 'نظام إدارة الجودة' : 'Quality Management System',
      desc: language === 'ar'
        ? 'معيار الجودة العالمي لضمان الاتساق والتحسين المستمر في الإنتاج.'
        : 'Global quality standard ensuring consistency and continuous production improvement.',
      pdfFile: '/certificates/FP-004-13 Perfect Cert( Gold Foods (Seed El Balad)) - ISO 9001.pdf',
      imgFile: '/certificates/FP-004-13 Perfect Cert( Gold Foods (Seed El Balad)) - ISO 9001.png',
    },
    {
      badge: 'ISO 14001',
      title: language === 'ar' ? 'نظام الإدارة البيئية' : 'Environmental Management System',
      desc: language === 'ar'
        ? 'التزامنا بالحفاظ على البيئة وتقليل الأثر البيئي لعمليات الإنتاج.'
        : 'Our commitment to environmental preservation and reducing the production footprint.',
      pdfFile: '/certificates/FP-004-13 Perfect Cert - (Gold Foods )ISO 14001.pdf',
      imgFile: '/certificates/FP-004-13 Perfect Cert - (Gold Foods )ISO 14001.png',
    },
    {
      badge: 'ISO 45001',
      title: language === 'ar' ? 'الصحة والسلامة المهنية' : 'Occupational Health & Safety',
      desc: language === 'ar'
        ? 'حماية عمالنا وضمان بيئة عمل آمنة في جميع مراحل الإنتاج.'
        : 'Protecting our workforce and ensuring a safe working environment across all production stages.',
      pdfFile: '/certificates/FP-004-13 Perfect Cert ( Gold Foods (Seed El Balad))- ISO 45001.pdf',
      imgFile: '/certificates/FP-004-13 Perfect Cert ( Gold Foods (Seed El Balad))- ISO 45001.png',
    },
    {
      badge: 'HACCP',
      title: language === 'ar' ? 'تحليل المخاطر ونقاط التحكم الحرجة' : 'Hazard Analysis & Critical Control Points',
      desc: language === 'ar'
        ? 'نظام منهجي لتحديد ومنع مخاطر سلامة الأغذية قبل وصول المنتج إليك.'
        : 'Systematic approach to identifying and preventing food safety hazards before the product reaches you.',
      pdfFile: '/certificates/Perfect_Cert_-HACCP 01- Gold Food .pdf',
      imgFile: '/certificates/Perfect_Cert_-HACCP 01- Gold Food .png',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: language === 'ar' ? 'الاصطياد من المحيط الأطلسي' : 'Atlantic Ocean Sourcing',
      desc: language === 'ar' ? 'أسماك هرنج بنسبة دهون تتجاوز 18٪ من المياه الباردة الشمالية.' : 'Herring with 18%+ fat index from cold northern waters.',
      icon: 'M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9M3 12c0 4.97 4.03 9 9 9M12 21c4.97 0 9-4.03 9-9M7 8.5C8.5 6 10.5 5 12 5M17 15.5C15.5 18 13.5 19 12 19',
    },
    {
      num: '02',
      title: language === 'ar' ? 'تمليح جاف ٤٨ ساعة' : '48-Hour Dry Brining',
      desc: language === 'ar' ? 'بلورات ملح بحري طبيعي بنسب علمية دقيقة — خفيف الملح 100٪.' : 'Natural sea salt crystals in precise ratios — 100% low sodium.',
      icon: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83',
    },
    {
      num: '03',
      title: language === 'ar' ? 'تدخين بطيء بخشب الزان ١٢ ساعة' : '12-Hour Beechwood Slow Smoking',
      desc: language === 'ar' ? 'دخان بارد من خشب الزان المستورد يمنح اللون الذهبي والنكهة العميقة.' : 'Cool beechwood smoke delivers champagne gold color and rich aroma.',
      icon: 'M8 12V7l4-5 4 5v5M5 12H2a10 10 0 0 0 20 0h-3M12 22V12',
    },
    {
      num: '04',
      title: language === 'ar' ? '٢٤ نقطة فحص جودة' : '24 Quality Control Points',
      desc: language === 'ar' ? 'كل سمكة تخضع لـ 24 نقطة تفتيش صارمة وتعقيم آلي كامل.' : 'Every fish undergoes 24 strict inspection points and full automated sterilization.',
      icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
    },
    {
      num: '05',
      title: language === 'ar' ? 'تغليف مفرغ معقم' : 'Sterile Vacuum Packaging',
      desc: language === 'ar' ? 'تغليف مفرغ الهواء وفق أعلى معايير ISO للحفاظ على الطزاجة والأمان.' : 'Vacuum-sealed packaging meeting ISO standards to preserve freshness and safety.',
      icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
    },
  ];

  const reasons = [
    {
      title: language === 'ar' ? 'مصدر أوروبي معتمد' : 'Certified European Source',
      desc: language === 'ar' ? 'أسماكنا من مياه هولندا والنرويج المعتمدة دولياً بموسم الذهب.' : 'Our fish come from internationally certified Dutch and Norwegian golden-season waters.',
      icon: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
    },
    {
      title: language === 'ar' ? 'خالٍ من المواد الحافظة' : 'Preservative-Free',
      desc: language === 'ar' ? 'لا مواد كيميائية حافظة — الطعم الأصيل يحفظ نفسه بنفسه.' : 'Zero chemical preservatives — the authentic flavor preserves itself naturally.',
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    },
    {
      title: language === 'ar' ? 'تدخين طبيعي ١٠٠٪' : '100% Natural Smoking',
      desc: language === 'ar' ? 'خشب الزان المستورد فقط — لا مواد كيميائية لتصنيع اللون أو النكهة.' : 'Imported beechwood only — no artificial colorings or flavor chemicals.',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    },
    {
      title: language === 'ar' ? 'مصنع بلبيس المعقم' : 'Belbeis Sterile Facility',
      desc: language === 'ar' ? 'معملنا في بلبيس مجهز بأعلى تقنيات التعقيم والمراقبة اللحظية.' : 'Our Belbeis facility is equipped with the highest sterilization and real-time monitoring technologies.',
      icon: 'M3 3h18v18H3zM3 9h18M9 21V9',
    },
    {
      title: language === 'ar' ? 'خفيف الملح (Low Sodium)' : 'Low Sodium',
      desc: language === 'ar' ? 'التمليح العلمي الدقيق يضمن نكهة متوازنة خالية من الإفراط في الملوحة.' : 'Precise scientific brining ensures a balanced flavor free of excess sodium.',
      icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3',
    },
    {
      title: language === 'ar' ? 'جاهز للتصدير والجملة' : 'Export & Wholesale Ready',
      desc: language === 'ar' ? 'نصدر لأكثر من 12 دولة بمتطلبات صارمة ومعايير دولية موثقة.' : 'We export to 12+ countries meeting strict international documented standards.',
      icon: 'M12 22V12M5 12H2a10 10 0 0 0 20 0h-3M8 12V7l4-5 4 5v5',
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('qp-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.qp-reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="qp-page">

      {/* ─── 1. HERO ─────────────────────────────────────────── */}
      <section className="qp-hero" style={{ backgroundImage: `url(${imgHero})` }}>
        <div className="qp-hero-overlay" />
        <div className="qp-hero-content">
          <span className="qp-eyebrow">
            {language === 'ar' ? 'الجودة والشهادات' : 'QUALITY & CERTIFICATIONS'}
          </span>
          <h1>
            {language === 'ar'
              ? 'المعيار الذهبي لصناعة المأكولات البحرية'
              : 'The Gold Standard of Seafood Production'}
          </h1>
          <p>
            {language === 'ar'
              ? 'خمس شهادات دولية، 24 نقطة فحص، وصنعة تمتد على مدار 60 ساعة — هذا هو سيد البلد.'
              : 'Five international certifications, 24 inspection points, and a 60-hour artisanal craft — this is Seed El-Balad.'}
          </p>
          <div className="qp-hero-kpis">
            <div className="qp-kpi">
              <strong>5</strong>
              <span>{language === 'ar' ? 'شهادات دولية' : 'ISO Certifications'}</span>
            </div>
            <div className="qp-kpi-divider" />
            <div className="qp-kpi">
              <strong>24</strong>
              <span>{language === 'ar' ? 'نقطة فحص جودة' : 'Quality Checkpoints'}</span>
            </div>
            <div className="qp-kpi-divider" />
            <div className="qp-kpi">
              <strong>60h</strong>
              <span>{language === 'ar' ? 'دورة إنتاج يدوية' : 'Artisanal Cycle'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. TRUST METRICS STRIP ──────────────────────────── */}
      <section className="qp-metrics-strip qp-reveal">
        <div className="qp-metrics-inner">
          {[
            { val: '18%+', label: language === 'ar' ? 'نسبة دهون مثالية' : 'Optimal Fat Index' },
            { val: '48h', label: language === 'ar' ? 'تمليح جاف طبيعي' : 'Natural Dry Brining' },
            { val: '12h', label: language === 'ar' ? 'تدخين خشب الزان' : 'Beechwood Smoking' },
            { val: '12+', label: language === 'ar' ? 'دولة تصدير' : 'Export Countries' },
          ].map((m, i) => (
            <div className="qp-metric" key={i}>
              <strong>{m.val}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. MANUFACTURING TIMELINE ───────────────────────── */}
      <section className="qp-timeline-section">
        <div className="qp-section-header qp-reveal">
          <span className="qp-section-kicker">
            {language === 'ar' ? 'مراحل التصنيع' : 'MANUFACTURING PROCESS'}
          </span>
          <h2>{language === 'ar' ? 'من المحيط إلى مائدتك' : 'From Ocean to Your Table'}</h2>
          <div className="qp-divider" />
        </div>

        <div className="qp-timeline">
          {processSteps.map((step, i) => (
            <div className="qp-step qp-reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="qp-step-top">
                <div className="qp-step-num">{step.num}</div>
                {i < processSteps.length - 1 && <div className="qp-step-connector" />}
              </div>
              <div className="qp-step-card">
                <div className="qp-step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {step.icon.split('M').filter(Boolean).map((d, di) => (
                      <path key={di} d={`M${d}`} />
                    ))}
                  </svg>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="qp-process-image qp-reveal">
          <img src={imgFromTo} alt={language === 'ar' ? 'رحلة المنتج من البحر للمائدة' : 'Sea to table product journey'} />
        </div>
      </section>

      {/* ─── 4. SPLIT IMAGE SECTIONS ─────────────────────────── */}
      <section className="qp-split-section">
        <div className="qp-split-image qp-reveal" style={{ backgroundImage: `url(${imgProcess1})` }} />
        <div className="qp-split-content qp-reveal">
          <span className="qp-section-kicker">
            {language === 'ar' ? 'المصدر والاصطياد' : 'SOURCING & HARVEST'}
          </span>
          <h2>
            {language === 'ar'
              ? 'أعماق الأطلسي البارد، قلب منتجنا'
              : "The Cold Atlantic Depths, Our Product's Heart"}
          </h2>
          <div className="qp-divider qp-divider-start" />
          <p>
            {language === 'ar'
              ? 'نختار أسماك الهرنج فقط في موسم الخريف الذهبي من المياه العميقة لشمال المحيط الأطلسي، حيث تبلغ نسبة الدهون الطبيعية ذروتها. هذا الاختيار الدقيق هو سر الطعم الزبدي الثري الذي لا تجده في أي مكان آخر.'
              : "We select herring exclusively during the golden autumn season from the deep North Atlantic, where natural fat content reaches its peak. This precise selection is the secret behind the rich buttery taste you won't find anywhere else."}
          </p>
        </div>
      </section>

      <section className="qp-split-section qp-split-reverse">
        <div className="qp-split-image qp-reveal" style={{ backgroundImage: `url(${imgProcess2})` }} />
        <div className="qp-split-content qp-reveal">
          <span className="qp-section-kicker">
            {language === 'ar' ? 'التمليح والتدخين' : 'BRINING & SMOKING'}
          </span>
          <h2>
            {language === 'ar'
              ? 'الملح والبخور — صنعة الزمن'
              : 'Salt & Smoke — The Art of Time'}
          </h2>
          <div className="qp-divider qp-divider-start" />
          <p>
            {language === 'ar'
              ? '48 ساعة تمليح جاف بالملح البحري الطبيعي، تعقبها 12 ساعة تدخين هادئ ببخور خشب الزان المستورد. لا تسريع، لا مواد كيميائية — فقط الوقت والصنعة اليدوية الحقيقية التي تتخلل كل شريحة.'
              : '48 hours of natural sea salt dry-brining, followed by 12 hours of gentle imported beechwood smoking. No shortcuts, no chemicals — just time and genuine artisanal craft that permeates every slice.'}
          </p>
        </div>
      </section>

      {/* ─── 5. ISO CERTIFICATIONS GRID ──────────────────────── */}
      <section className="qp-certs-section">
        <div className="qp-section-header qp-reveal">
          <span className="qp-section-kicker">
            {language === 'ar' ? 'اعتماداتنا الدولية' : 'INTERNATIONAL CERTIFICATIONS'}
          </span>
          <h2>{language === 'ar' ? 'شهادات تُثبت التزامنا' : 'Certifications That Prove Our Commitment'}</h2>
          <div className="qp-divider" />
          <p>
            {language === 'ar'
              ? 'حاصلون على أعلى شهادات الجودة والسلامة الغذائية والبيئية على المستوى الدولي.'
              : 'We hold the highest international quality, food safety, and environmental certifications.'}
          </p>
        </div>

        <div className="qp-certs-grid">
          {certificates.map((cert, i) => (
            <article
              className="qp-cert-card qp-reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => onViewPdf(cert.imgFile, cert.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onViewPdf(cert.imgFile, cert.title); }}
            >
              <div className="qp-cert-shield">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div className="qp-cert-badge">{cert.badge}</div>
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
              <div className="qp-cert-view">
                <span>{language === 'ar' ? 'عرض الشهادة' : 'View Certificate'}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points={language === 'ar' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── 6. WHY CHOOSE US GRID ───────────────────────────── */}
      <section className="qp-why-section">
        <div className="qp-section-header qp-reveal">
          <span className="qp-section-kicker">
            {language === 'ar' ? 'لماذا سيد البلد؟' : 'WHY SEED EL-BALAD?'}
          </span>
          <h2>{language === 'ar' ? 'ستة أسباب تجعلنا الفارق' : 'Six Reasons We Stand Apart'}</h2>
          <div className="qp-divider" />
        </div>

        <div className="qp-reasons-grid">
          {reasons.map((r, i) => (
            <div className="qp-reason qp-reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="qp-reason-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {r.icon.split('M').filter(Boolean).map((d, di) => (
                    <path key={di} d={`M${d}`} />
                  ))}
                </svg>
              </div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 7. FACTORY PANORAMIC ────────────────────────────── */}
      <section className="qp-factory-section" style={{ backgroundImage: `url(${imgFactory})` }}>
        <div className="qp-factory-overlay" />
        <div className="qp-factory-content qp-reveal">
          <span className="qp-section-kicker qp-kicker-light">
            {language === 'ar' ? 'مصنعنا في بلبيس' : 'OUR BELBEIS FACILITY'}
          </span>
          <h2>
            {language === 'ar'
              ? 'حيث تلتقي الصنعة بالتكنولوجيا'
              : 'Where Craft Meets Technology'}
          </h2>
          <p>
            {language === 'ar'
              ? 'معمل Gold Foods في بلبيس مزود بأحدث أجهزة التعقيم والمراقبة الآلية، ويعمل وفق أعلى معايير الهيئات الدولية لسلامة الغذاء.'
              : "Gold Foods' Belbeis facility is equipped with state-of-the-art sterilization and automated monitoring, operating under the highest international food safety authority standards."}
          </p>
        </div>
      </section>

    </div>
  );
};

export default WhyUsPage;
