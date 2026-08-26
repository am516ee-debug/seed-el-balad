import React, { useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import '../../css/privacy.css';

interface PrivacyPolicyPageProps {
  onNavigate?: (view: 'home' | 'collection' | 'story' | 'locations' | 'why-us' | 'contact' | 'privacy-policy', sectionId?: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const { language } = useTranslation();
  const isAr = language === 'ar';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  const handleInternalNav = (view: 'home' | 'collection' | 'story' | 'locations' | 'why-us' | 'contact' | 'privacy-policy', sectionId?: string) => {
    if (onNavigate) {
      onNavigate(view, sectionId);
    } else {
      window.location.href = view === 'home' ? '/' : `/${view}`;
    }
  };

  return (
    <div className="privacy-page-view">
      {/* 1. Header / Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <div className="privacy-breadcrumbs">
            <a href="/" onClick={(e) => { e.preventDefault(); handleInternalNav('home'); }}>
              {isAr ? 'الرئيسية' : 'Home'}
            </a>
            <span>/</span>
            <span>{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</span>
          </div>

          <div className="privacy-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>{isAr ? 'حماية وأمان البيانات' : 'Data Protection & Security'}</span>
          </div>

          <h1 className="privacy-title">
            {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>

          <div className="privacy-updated-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>
              {isAr ? 'آخر تحديث: 05 أغسطس 2026' : 'Last Updated: August 5, 2026'}
            </span>
          </div>

          <p className="privacy-intro-text">
            {isAr ? (
              <>
                ترحب بكم <strong>Seed El Balad (سيد البلد)</strong>، العلامة التجارية التابعة لشركة <strong>Gold Foods</strong>. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات التي يتم جمعها عند زيارة موقعنا الإلكتروني أو التواصل معنا. باستخدام هذا الموقع، فإنك توافق على سياسة الخصوصية الموضحة في هذه الصفحة.
              </>
            ) : (
              <>
                Welcome to <strong>Seed El-balad</strong>, a premium seafood brand of <strong>Gold Foods</strong>. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or communicate with us. By using this website, you agree to the privacy practices outlined on this page.
              </>
            )}
          </p>
        </div>
      </section>

      <div className="container">
        {/* 2. Quick Table of Contents */}
        <nav className="privacy-toc-container" aria-label="Table of Contents">
          <div className="privacy-toc-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6"/>
              <line x1="8" y1="12" x2="21" y2="12"/>
              <line x1="8" y1="18" x2="21" y2="18"/>
              <line x1="3" y1="6" x2="3.01" y2="6"/>
              <line x1="3" y1="12" x2="3.01" y2="12"/>
              <line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
            <span>{isAr ? 'فهرس بنود الخصوصية السريع' : 'Quick Navigation Index'}</span>
          </div>
          <div className="privacy-toc-grid">
            <a href="#about-us" className="privacy-toc-link">
              <span>{isAr ? '١. من نحن' : '1. About Us'}</span>
            </a>
            <a href="#data-collection" className="privacy-toc-link">
              <span>{isAr ? '٢. جمع المعلومات' : '2. Data Collection'}</span>
            </a>
            <a href="#data-usage" className="privacy-toc-link">
              <span>{isAr ? '٣. استخدام المعلومات' : '3. How We Use Data'}</span>
            </a>
            <a href="#cookies" className="privacy-toc-link">
              <span>{isAr ? '٤. ملفات الكوكيز' : '4. Cookies Policy'}</span>
            </a>
            <a href="#analytics-pixel" className="privacy-toc-link">
              <span>{isAr ? '٥. التحليلات وMeta Pixel' : '5. Analytics & Pixel'}</span>
            </a>
            <a href="#security" className="privacy-toc-link">
              <span>{isAr ? '٦. حماية البيانات' : '6. Data Security'}</span>
            </a>
            <a href="#sharing" className="privacy-toc-link">
              <span>{isAr ? '٧. مشاركة البيانات' : '7. Data Sharing'}</span>
            </a>
            <a href="#rights" className="privacy-toc-link">
              <span>{isAr ? '٨. حقوق المستخدم' : '8. User Rights'}</span>
            </a>
            <a href="#children" className="privacy-toc-link">
              <span>{isAr ? '٩. حماية الأطفال' : '9. Children\'s Privacy'}</span>
            </a>
            <a href="#contact-requests" className="privacy-toc-link">
              <span>{isAr ? '١٠. طلبات الخصوصية' : '10. Contact Us'}</span>
            </a>
          </div>
        </nav>

        {/* 3. Main Grid Layout */}
        <div className="privacy-content-grid">
          {/* Main Policy Content Articles */}
          <main className="privacy-main-column">
            
            {/* Section 1: About Us */}
            <article id="about-us" className="privacy-section-card">
              <div className="privacy-section-header">
                <div className="privacy-section-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21h18M3 7v14M21 7v14M6 11h2M6 15h2M16 11h2M16 15h2M10 21V3h4v18"/>
                  </svg>
                </div>
                <h2 className="privacy-section-title">
                  {isAr ? '١. من نحن (Gold Foods)' : '1. About Us (Gold Foods)'}
                </h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  {isAr ? (
                    <>
                      علامة <strong>Seed El Balad (سيد البلد)</strong> هي علامة تجارية مسجلة ومملوكة بالكامل لشركة <strong>Gold Foods</strong> للصناعات الغذائية والتصنيع الغذائي السمكي في جمهورية مصر العربية.
                    </>
                  ) : (
                    <>
                      <strong>Seed El-balad</strong> is a registered brand fully owned and operated by <strong>Gold Foods</strong> food manufacturing in the Arab Republic of Egypt.
                    </>
                  )}
                </p>
                <ul className="privacy-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span><strong>{isAr ? 'الكيان القانوني:' : 'Legal Entity:'}</strong> Gold Foods</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span><strong>{isAr ? 'المكتب الرئيسي والإداري:' : 'Headquarters:'}</strong> {isAr ? '39 المنطقة الأكثر تميزًا، جولد تاور، مدينة 15 مايو، القاهرة، جمهورية مصر العربية.' : '39 Most Distinguished Area, Gold Tower, 15th of May City, Cairo, Egypt.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span><strong>{isAr ? 'البريد الإلكتروني المعتمد:' : 'Official Email:'}</strong> <a href="mailto:CEO@gf-egypt.com" style={{ color: 'var(--color-primary)' }}>CEO@gf-egypt.com</a></span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span><strong>{isAr ? 'خدمة العملاء والتواصل:' : 'Phone & WhatsApp:'}</strong> <a href="https://wa.me/201032033302" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>+20 1032033302</a></span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Section 2: Information We Collect */}
            <article id="data-collection" className="privacy-section-card">
              <div className="privacy-section-header">
                <div className="privacy-section-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <h2 className="privacy-section-title">
                  {isAr ? '٢. المعلومات التي نقوم بجمعها' : '2. Information We Collect'}
                </h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  {isAr
                    ? 'قد نقوم بجمع المعلومات والبيانات التالية عند تفاعلك مع موقعنا الإلكتروني أو تقديم طلب استفسار أو توزيع:'
                    : 'We may collect the following personal and professional details when you interact with our website or submit an inquiry:'}
                </p>
                <ul className="privacy-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'الاسم الكامل أو اسم المسؤول.' : 'Full name or representative name.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'عنوان البريد الإلكتروني.' : 'Email address.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'رقم الهاتف أو رقم الواتساب للتواصل المباشر.' : 'Phone or WhatsApp contact number.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'اسم الشركة أو النشاط التجاري (لتجار الجملة والموزعين والمطاعم).' : 'Company or business name (for wholesale, distributors, and HoReCa).'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'الدولة والمدينة.' : 'Country and city.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'الرسائل أو الاستفسارات وملاحظات المنتجات التي ترسلها إلينا.' : 'Messages, inquiries, and specific product requests you submit.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'أي معلومات تقدمها طواعية من خلال نماذج التواصل أو قنوات المحادثة.' : 'Any details provided voluntarily via contact forms or direct chat channels.'}</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Section 3: How We Use Information */}
            <article id="data-usage" className="privacy-section-card">
              <div className="privacy-section-header">
                <div className="privacy-section-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <h2 className="privacy-section-title">
                  {isAr ? '٣. كيف نستخدم المعلومات؟' : '3. How We Use Your Information'}
                </h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  {isAr
                    ? 'تستخدم البيانات والمعلومات التي نجمعها للأغراض المشروعة التالية فقط:'
                    : 'We use the collected information exclusively for the following operational purposes:'}
                </p>
                <ul className="privacy-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'الرد السريع على الاستفسارات الفنية وتقديم عروض الأسعار.' : 'Promptly responding to product inquiries and price quotes.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'التواصل المباشر مع العملاء وتنسيق المبيعات والتسليم.' : 'Direct customer communication, order coordination, and logistics.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'معالجة ودراسة طلبات التوزيع المعتمد والوكالات التجارية.' : 'Processing and reviewing authorized distributor applications.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'تحسين خدماتنا وتطوير جودة تجربة المستهلك.' : 'Improving customer service and continuous product enhancement.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'تحسين سرعة وأداء الموقع وتسهيل تصفحه.' : 'Optimizing website performance and user experience.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'الامتثال للأنظمة والمعايير والمتطلبات القانونية والتنظيمية.' : 'Complying with applicable legal, fiscal, and regulatory frameworks.'}</span>
                  </li>
                </ul>

                <div className="privacy-alert-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <span>
                    {isAr
                      ? 'تعهد صارم: لن نقوم ببيع أو تأجير أو المتاجرة ببياناتك الشخصية لأي طرف ثالث تحت أي ظرف من الظروف.'
                      : 'Strict Guarantee: We do not sell, rent, or trade your personal information to third parties under any circumstances.'}
                  </span>
                </div>
              </div>
            </article>

            {/* Section 4: Cookies */}
            <article id="cookies" className="privacy-section-card">
              <div className="privacy-section-header">
                <div className="privacy-section-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="8" cy="9" r="1.5"/>
                    <circle cx="15" cy="8" r="1"/>
                    <circle cx="10" cy="15" r="1"/>
                    <circle cx="16" cy="14" r="1.5"/>
                  </svg>
                </div>
                <h2 className="privacy-section-title">
                  {isAr ? '٤. ملفات تعريف الارتباط (Cookies)' : '4. Cookies Policy'}
                </h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  {isAr
                    ? 'قد يستخدم الموقع ملفات تعريف الارتباط (Cookies) لتحسين وتخصيص تجربة التصفح للمستخدم.'
                    : 'Our website may utilize cookies and similar local technologies to enhance your browsing experience.'}
                </p>
                <p>{isAr ? 'تساعد ملفات تعريف الارتباط في:' : 'Cookies help accomplish the following:'}</p>
                <ul className="privacy-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'تذكر تفضيلات المستخدم (مثل اللغة المختارة: العربية أو الإنجليزية).' : 'Remembering user preferences (e.g. Arabic or English language preference).'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'تحسين كفاءة وسرعة تحميل صفحات الموقع.' : 'Enhancing site caching and page load performance.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'تحليل أنماط استخدام وتفاعل الزوار مع المنتجات.' : 'Analyzing visitor engagement patterns across product categories.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'قياس فعالية الحملات الترويجية والتسويقية.' : 'Evaluating the effectiveness of promotional and marketing campaigns.'}</span>
                  </li>
                </ul>
                <p style={{ marginTop: '10px', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  {isAr
                    ? '💡 يمكنك تعطيل ملفات تعريف الارتباط في أي وقت من خلال إعدادات متصفح الإنترنت لديك، مع ملاحظة أن بعض وظائف الموقع قد لا تعمل بأفضل كفاءة ممكنة.'
                    : '💡 You may disable cookies through your browser settings at any time; however, some interactive features may experience reduced functionality.'}
                </p>
              </div>
            </article>

            {/* Section 5: Google Analytics & Meta Pixel */}
            <article id="analytics-pixel" className="privacy-section-card">
              <div className="privacy-section-header">
                <div className="privacy-section-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <h2 className="privacy-section-title">
                  {isAr ? '٥. تحليلات جوجل وبيكسل ميتا (Google Analytics & Meta Pixel)' : '5. Google Analytics & Meta Pixel'}
                </h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  <strong>Google Analytics:</strong>{' '}
                  {isAr
                    ? 'قد يستخدم الموقع Google Analytics لفهم كيفية استخدام الزوار للموقع وتحديد الصفحات الأكثر زيارة، مما يساعدنا على تحسين المحتوى وتجربة المستخدم. تجمع هذه الخدمة بيانات إحصائية مجهولة المصدر ولا تُستخدم للتعرف على هوية المستخدم بشكل مباشر.'
                    : 'We may utilize Google Analytics to aggregate anonymous metrics regarding website traffic and user journeys, helping us refine product information and interface design without identifying individuals directly.'}
                </p>
                <p style={{ marginTop: '10px' }}>
                  <strong>Meta Pixel:</strong>{' '}
                  {isAr
                    ? 'قد يستخدم الموقع Meta Pixel لقياس أداء الحملات الإعلانية على منصات التواصل الاجتماعي (Facebook & Instagram)، وتحسين تجربة المستخدم وعرض الإعلانات المناسبة لاهتمامات العملاء بالمنتجات البحرية.'
                    : 'We may utilize Meta Pixel to measure the performance of our advertising campaigns on Facebook & Instagram and optimize relevant seafood product recommendations.'}
                </p>
              </div>
            </article>

            {/* Section 6: Data Security */}
            <article id="security" className="privacy-section-card">
              <div className="privacy-section-header">
                <div className="privacy-section-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h2 className="privacy-section-title">
                  {isAr ? '٦. حماية وأمان البيانات' : '6. Data Security'}
                </h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  {isAr
                    ? 'تلتزم شركة Gold Foods باتخاذ كافة الإجراءات الفنية والإدارية والبرمجية الصارمة لحماية البيانات الشخصية من الوصول غير المصرح به أو الفقدان أو التعديل أو الإفصاح، بما في ذلك التشفير وتأمين الاتصال SSL/TLS.'
                    : 'Gold Foods implements robust technical, organizational, and cryptographic measures (including SSL/TLS encryption) to protect your personal information against unauthorized access, loss, modification, or disclosure.'}
                </p>
              </div>
            </article>

            {/* Section 7: Data Sharing */}
            <article id="sharing" className="privacy-section-card">
              <div className="privacy-section-header">
                <div className="privacy-section-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                </div>
                <h2 className="privacy-section-title">
                  {isAr ? '٧. مشاركة البيانات' : '7. Data Sharing'}
                </h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  {isAr
                    ? 'نحن لا نبيع أو نؤجر البيانات الشخصية. قد تتم مشاركة المعلومات المحدودة فقط في الحالات الاستثنائية التالية:'
                    : 'We do not sell or monetize personal data. Information may only be disclosed under the following strictly defined conditions:'}
                </p>
                <ul className="privacy-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'إذا كان ذلك مطلوباً بموجب القانون أو أوامر قضائية ملزمة.' : 'When required by law, regulation, or mandatory judicial order.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'لحماية الحقوق القانونية لشركة Gold Foods وسلامة المنظومة.' : 'To safeguard the legitimate rights and security of Gold Foods.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'مع مزودي الخدمات الفنية المعتمدين لتشغيل الخوادم، مع التزامهم التعاقدي بالسرية التامة.' : 'With verified cloud and technical infrastructure partners bound by non-disclosure agreements.'}</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Section 8: External Links */}
            <article id="external-links" className="privacy-section-card">
              <div className="privacy-section-header">
                <div className="privacy-section-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </div>
                <h2 className="privacy-section-title">
                  {isAr ? '٨. الروابط الخارجية' : '8. External Links'}
                </h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  {isAr
                    ? 'قد يحتوي الموقع على روابط تؤدي إلى مواقع خارجية (مثل صفحاتنا على Facebook أو Instagram أو خرائط Google). لا تتحمل Gold Foods مسؤولية سياسات الخصوصية أو الممارسات الخاصة بتلك المواقع الخارجية، وننصح بمراجعة سياساتها المستقلة.'
                    : 'Our website may feature links to external third-party services (e.g. social channels or Google Maps). Gold Foods is not responsible for the privacy practices of external platforms.'}
                </p>
              </div>
            </article>

            {/* Section 9: User Rights */}
            <article id="rights" className="privacy-section-card">
              <div className="privacy-section-header">
                <div className="privacy-section-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <line x1="20" y1="8" x2="20" y2="14"/>
                    <line x1="23" y1="11" x2="17" y2="11"/>
                  </svg>
                </div>
                <h2 className="privacy-section-title">
                  {isAr ? '٩. حقوق المستخدم وإدارة البيانات' : '9. User Rights'}
                </h2>
              </div>
              <div className="privacy-section-body">
                <p>{isAr ? 'يحق لك في أي وقت ممارسة حقوقك التالية:' : 'You hold the following rights regarding your personal records:'}</p>
                <ul className="privacy-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'طلب معرفة والاطلاع على البيانات التي نحتفظ بها عنك.' : 'Requesting access to the personal information we hold about you.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'طلب تعديل أو تصحيح أي بيانات غير دقيقة.' : 'Requesting rectification of inaccurate or outdated information.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'طلب مسح أو حذف بياناتك، ما لم تكن هناك ضرورة قانونية أو محاسبية للاحتفاظ بها.' : 'Requesting data erasure, subject to mandatory legal retention obligations.'}</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{isAr ? 'سحب موافقتك على استخدام البيانات الموجهة لأغراض التواصل الترويجي.' : 'Withdrawing prior consent for marketing and operational outreach.'}</span>
                  </li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  {isAr
                    ? 'لممارسة أي من هذه الحقوق، يرجى إرسال طلبك عبر البريد الإلكتروني إلى: '
                    : 'To exercise any of these rights, please email your request to: '}
                  <a href="mailto:CEO@gf-egypt.com" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>CEO@gf-egypt.com</a>
                </p>
              </div>
            </article>

            {/* Section 10: Children's Privacy & Updates */}
            <article id="children" className="privacy-section-card">
              <div className="privacy-section-header">
                <div className="privacy-section-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                  </svg>
                </div>
                <h2 className="privacy-section-title">
                  {isAr ? '١٠. حماية الأطفال وتحديثات السياسة' : '10. Children\'s Privacy & Policy Updates'}
                </h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  <strong>{isAr ? 'حماية الأطفال:' : 'Children\'s Privacy:'}</strong>{' '}
                  {isAr
                    ? 'هذا الموقع غير مخصص للأطفال دون سن 13 عاماً، ولا نقوم بجمع أي بيانات شخصية من القاصرين عن قصد.'
                    : 'Our website is not directed to individuals under 13 years of age, and we do not knowingly collect personal information from children.'}
                </p>
                <p style={{ marginTop: '12px' }}>
                  <strong>{isAr ? 'تحديث سياسة الخصوصية:' : 'Policy Updates:'}</strong>{' '}
                  {isAr
                    ? 'قد نقوم بتحديث ومراجعة بنود هذه السياسة دورياً لمواكبة التطورات الفنية والتشريعية. وسيتم نشر أي تعديلات مباشرة على هذه الصفحة مع تحديث تاريخ "آخر تعديل".'
                    : 'We may update this Privacy Policy periodically to reflect technological or regulatory changes. Any modifications will be posted here alongside an updated revision date.'}
                </p>
              </div>
            </article>

          </main>

          {/* Sidebar Area */}
          <aside className="privacy-sidebar">
            {/* Direct Contact Card */}
            <div id="contact-requests" className="privacy-info-card">
              <h4>{isAr ? 'مسؤول الخصوصية والبيانات' : 'Privacy Requests Contact'}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '14px', lineHeight: '1.6' }}>
                {isAr
                  ? 'إذا كانت لديك أي استفسارات أو طلبات تتعلق بحماية بياناتك، يمكنك التواصل معنا مباشرة:'
                  : 'If you have any questions or requests regarding data privacy, please contact us:'}
              </p>
              
              <div className="privacy-contact-list">
                <div className="privacy-contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Email</div>
                    <a href="mailto:CEO@gf-egypt.com">CEO@gf-egypt.com</a>
                  </div>
                </div>

                <div className="privacy-contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Phone / WhatsApp</div>
                    <a href="https://wa.me/201032033302" target="_blank" rel="noopener noreferrer">+20 1032033302</a>
                  </div>
                </div>

                <div className="privacy-contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{isAr ? 'المقر الرئيسي' : 'HQ Address'}</div>
                    <span style={{ fontSize: '0.8rem', lineHeight: '1.4', display: 'block' }}>
                      {isAr ? 'جولد تاور، مدينة 15 مايو، القاهرة، مصر' : 'Gold Tower, 15th of May City, Cairo, Egypt'}
                    </span>
                  </div>
                </div>
              </div>

              <button 
                type="button" 
                className="btn-primary" 
                style={{ width: '100%', marginTop: '16px' }}
                onClick={() => handleInternalNav('contact')}
              >
                {isAr ? 'تواصل مع الإدارة' : 'Contact Administration'}
              </button>
            </div>

            {/* Quality & Certifications Assurance */}
            <div className="privacy-info-card" style={{ border: '1px solid var(--color-border-divider)' }}>
              <h4>{isAr ? 'معايير الجودة المعتمدة' : 'Certified Standards'}</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '10px' }}>
                {isAr 
                  ? 'تطبق شركة Gold Foods أعلى بروتوكولات الأمان والسلامة الغذائية ISO 22000 وHACCP لضمان جودة استثنائية.' 
                  : 'Gold Foods enforces highest ISO 22000 and HACCP food safety and quality management certifications.'}
              </p>
              <div className="iso-badges-container" style={{ justifyContent: 'flex-start' }}>
                <span className="iso-badge">ISO 22000</span>
                <span className="iso-badge">HACCP</span>
                <span className="iso-badge">ISO 9001</span>
              </div>
            </div>
          </aside>
        </div>

        {/* 4. Internal Linking Section (الربط الداخلي الموصى به لـ SEO) */}
        <section className="privacy-internal-links-section">
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
            {isAr ? 'روابط هامة ذات صلة' : 'Related Important Links'}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            {isAr ? 'استكشف صفحات ومزايا دار سيد البلد وجولد فودز عبر الروابط المباشرة التالية:' : 'Explore Seed El-balad & Gold Foods key destinations:'}
          </p>

          <div className="privacy-internal-grid">
            <div 
              className="privacy-internal-card" 
              onClick={() => handleInternalNav('contact')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleInternalNav('contact')}
            >
              <div>
                <h5>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  {isAr ? 'تواصل معنا' : 'Contact Us'}
                </h5>
                <p>{isAr ? 'فريق خدمة العملاء ومبيعات التوريد جاهز لخدمتك.' : 'Customer care and wholesale sales teams at your service.'}</p>
              </div>
              <div className="card-arrow">
                <span>{isAr ? 'الانتقال للصفحة' : 'Go to Page'}</span>
                <span>{isAr ? '←' : '→'}</span>
              </div>
            </div>

            <div 
              className="privacy-internal-card" 
              onClick={() => handleInternalNav('why-us')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleInternalNav('why-us')}
            >
              <div>
                <h5>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  {isAr ? 'الجودة وسلامة الغذاء' : 'Quality & Food Safety'}
                </h5>
                <p>{isAr ? 'معايير التدخين بخشب الزان والشهادات الدولية ISO.' : 'Natural beechwood smoking and ISO international certificates.'}</p>
              </div>
              <div className="card-arrow">
                <span>{isAr ? 'عرض الشهادات' : 'View Certs'}</span>
                <span>{isAr ? '←' : '→'}</span>
              </div>
            </div>

            <div 
              className="privacy-internal-card" 
              onClick={() => handleInternalNav('collection')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleInternalNav('collection')}
            >
              <div>
                <h5>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                  {isAr ? 'تشكيلة المنتجات' : 'Our Collection'}
                </h5>
                <p>{isAr ? 'رنجة هولندي، نرويجي، فسيخ بلدي، وبطارخ خرز.' : 'Dutch & Norwegian herring, mullet feseekh, caviar roe.'}</p>
              </div>
              <div className="card-arrow">
                <span>{isAr ? 'استكشف المنتجات' : 'Explore Collection'}</span>
                <span>{isAr ? '←' : '→'}</span>
              </div>
            </div>

            <div 
              className="privacy-internal-card" 
              onClick={() => handleInternalNav('story')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleInternalNav('story')}
            >
              <div>
                <h5>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  {isAr ? 'قصتنا وعراقتنا' : 'Our Story & Legacy'}
                </h5>
                <p>{isAr ? 'رحلة الاستيراد والتصنيع من بحر الشمال إلى بلبيس.' : 'Journey from North Sea to our Bilbeis modern factory.'}</p>
              </div>
              <div className="card-arrow">
                <span>{isAr ? 'قراءة القصة' : 'Read Story'}</span>
                <span>{isAr ? '←' : '→'}</span>
              </div>
            </div>

            <div 
              className="privacy-internal-card" 
              onClick={() => handleInternalNav('locations')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleInternalNav('locations')}
            >
              <div>
                <h5>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {isAr ? 'طلب موزع وتغطيتنا' : 'Distributors & Coverage'}
                </h5>
                <p>{isAr ? 'شبكة التوزيع والمنافذ المعتمدة في كافة المحافظات.' : 'Nationwide distribution network and factory location.'}</p>
              </div>
              <div className="card-arrow">
                <span>{isAr ? 'عرض المواقع' : 'View Locations'}</span>
                <span>{isAr ? '←' : '→'}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
