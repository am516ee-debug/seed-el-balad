import React, { useState, useRef, useCallback } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import imgBefore from '../../assets/images/seed-el-balad/Before smoking.webp';
import imgAfter from '../../assets/images/seed-el-balad/After smoking.webp';
import '../../css/smoking-process.css';

interface SmokingProcessSectionProps {
  id?: string;
  className?: string;
}

export const SmokingProcessSection: React.FC<SmokingProcessSectionProps> = ({
  id = 'smoking-process-section',
  className = '',
}) => {
  const { language } = useTranslation();
  const ar = language === 'ar';

  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'slider' | 'side-by-side'>('slider');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX);
  };

  const clipBefore = ar
    ? `inset(0 0 0 ${100 - sliderPosition}%)`
    : `inset(0 ${100 - sliderPosition}% 0 0)`;

  const clipAfter = ar
    ? `inset(0 ${sliderPosition}% 0 0)`
    : `inset(0 0 0 ${sliderPosition}%)`;

  return (
    <section className={`smoking-process-sec ${className}`} id={id}>
      <div className="container">
        
        {/* Section Header */}
        <div className="sp-header-wrap">
          <span className="sp-eyebrow">
            {ar ? 'أسرار الصنعة الحرفية بمصنعنا' : 'FACTORY ARTISANAL CRAFT'}
          </span>
          <div className="sp-blue-accent-line" />
          <h2 className="sp-main-title">
            {ar ? 'رحلة الصنعة والتدخين: قبل وبعد' : 'Artisanal Transformation: Before & After Smoking'}
          </h2>
          <p className="sp-lead-text">
            {ar
              ? 'شاهد بالصور الحقيقية من داخل عنابر مصنعنا ببلبيس، الفارق الواضح بين سمك الرنجة الفضي الطازج بعد التمليح والتجهيز، والتحول بعد 12 ساعة من التدخين البطيء بنشارة خشب الزان الطبيعي.'
              : 'Witness authentic photography from our Belbeis facility — the distinct contrast between raw ocean-silver cured fish and the rich texture achieved after 12 hours of slow cold smoking with natural beechwood.'}
          </p>

          {/* View Mode Switcher */}
          <div className="sp-switch-container">
            <button
              type="button"
              className={`sp-switch-btn ${activeTab === 'slider' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('slider')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="18" rx="2" />
                <line x1="12" y1="3" x2="12" y2="21" />
                <path d="M8 12l-3-3 3-3M16 12l3 3-3 3" />
              </svg>
              <span>{ar ? 'سلايدر المقارنة التفاعلي' : 'Interactive Split Slider'}</span>
            </button>
            <button
              type="button"
              className={`sp-switch-btn ${activeTab === 'side-by-side' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('side-by-side')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="8" height="18" rx="1" />
                <rect x="13" y="3" width="8" height="18" rx="1" />
              </svg>
              <span>{ar ? 'عرض الصورتين جنباً إلى جنب' : 'Side-by-Side Comparison'}</span>
            </button>
          </div>
        </div>

        {/* ─── TAB 1: INTERACTIVE COMPARISON SLIDER ───────────────────────── */}
        {activeTab === 'slider' && (
          <div className="sp-slider-stage">
            <div
              className="sp-slider-canvas"
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onClick={handleSliderClick}
            >
              {/* After Smoking Layer */}
              <div
                className="sp-layer sp-layer-after"
                style={{ clipPath: clipAfter }}
              >
                <img
                  src={imgAfter}
                  alt={ar ? 'الأسماك بعد التدخين' : 'Fish after beechwood smoking'}
                  draggable={false}
                />
                <div className="sp-tag-pill sp-tag-after">
                  <span className="sp-tag-dot dot-primary" />
                  <span>{ar ? 'بعد التدخين — رنجة مدخنة فاخرة' : 'AFTER SMOKING — PREMIUM SMOKED'}</span>
                </div>
              </div>

              {/* Before Smoking Layer */}
              <div
                className="sp-layer sp-layer-before"
                style={{ clipPath: clipBefore }}
              >
                <img
                  src={imgBefore}
                  alt={ar ? 'الأسماك قبل التدخين بعد التمليح' : 'Fish before smoking after curing'}
                  draggable={false}
                />
                <div className="sp-tag-pill sp-tag-before">
                  <span className="sp-tag-dot dot-silver" />
                  <span>{ar ? 'قبل التدخين — تمليح بحري طازج' : 'BEFORE SMOKING — FRESH CURED'}</span>
                </div>
              </div>

              {/* Slider Splitter Line & Drag Handle */}
              <div
                className="sp-splitter-bar"
                style={{
                  [ar ? 'right' : 'left']: `${sliderPosition}%`,
                }}
              >
                <div className="sp-splitter-line" />
                <div className="sp-splitter-knob">
                  <span className="sp-knob-arrows">⇄</span>
                </div>
                <div className="sp-splitter-line" />
              </div>
            </div>

            {/* Quick Helper Tip */}
            <div className="sp-instruction-pill">
              <span className="sp-pulse-icon">👆</span>
              <span>
                {ar
                  ? 'اسحب المقبض يميناً ويساراً لمشاهدة الفارق في اللون والقوام'
                  : 'Drag or click the slider handle left and right to reveal the full transformation'}
              </span>
            </div>
          </div>
        )}

        {/* ─── TAB 2: SIDE-BY-SIDE DUAL SHOWCASE ─────────────────────────── */}
        {activeTab === 'side-by-side' && (
          <div className="sp-dual-showcase">
            {/* Card 1: Before */}
            <div className="sp-dual-card sp-card-raw">
              <div className="sp-dual-photo-wrap">
                <img src={imgBefore} alt={ar ? 'الرنجة قبل التدخين' : 'Herring before smoking'} />
                <div className="sp-stage-badge-top silver">
                  {ar ? 'المرحلة 1: التمليح والتجهيز' : 'STAGE 1: RAW BRINED'}
                </div>
              </div>
              <div className="sp-dual-details">
                <div className="sp-card-heading">
                  <span className="sp-status-dot silver" />
                  <h3>{ar ? 'قبل التدخين (الخام الفضي)' : 'Before Smoking (Raw Fresh)'}</h3>
                </div>
                <div className="sp-detail-grid">
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">{ar ? 'المظهر الخارجي:' : 'Appearance:'}</span>
                    <span className="sp-detail-val">{ar ? 'فضي ناصع طبيعي متجانس' : 'Pure ocean silver luster'}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">{ar ? 'المعالجة:' : 'Preparation:'}</span>
                    <span className="sp-detail-val">{ar ? 'تمليح جاف خفيف بملح بحري نقي' : 'Gentle sea-salt dry curing'}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">{ar ? 'قوام اللحم:' : 'Texture:'}</span>
                    <span className="sp-detail-val">{ar ? 'طازج غض غني بزيوت الأوميجا 3' : 'Supple, moist and rich in omega-3'}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">{ar ? 'عنابر الإعداد:' : 'Facility Area:'}</span>
                    <span className="sp-detail-val">{ar ? 'عنابر معقمة بنظام تروللي ستانلس ستيل' : 'Sterile stainless steel racks'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: After */}
            <div className="sp-dual-card sp-card-smoked">
              <div className="sp-dual-photo-wrap">
                <img src={imgAfter} alt={ar ? 'الرنجة بعد التدخين' : 'Herring after smoking'} />
                <div className="sp-stage-badge-top primary">
                  {ar ? 'المرحلة 2: اكتمال التدخين' : 'STAGE 2: SLOW SMOKED'}
                </div>
              </div>
              <div className="sp-dual-details">
                <div className="sp-card-heading">
                  <span className="sp-status-dot primary" />
                  <h3>{ar ? 'بعد التدخين (الرنجة المدخنة)' : 'After Smoking (Smoked Herring)'}</h3>
                </div>
                <div className="sp-detail-grid">
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">{ar ? 'المظهر الخارجي:' : 'Appearance:'}</span>
                    <span className="sp-detail-val">{ar ? 'لون كهرماني طبيعي غني ومتجانس' : 'Rich natural amber-smoked finish'}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">{ar ? 'نوع الخشب:' : 'Wood Type:'}</span>
                    <span className="sp-detail-val">{ar ? 'نشارة خشب الزان الطبيعي الخالص' : '100% natural beechwood sawdust'}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">{ar ? 'زمن التدخين:' : 'Smoking Time:'}</span>
                    <span className="sp-detail-val">{ar ? '12 ساعة تدخين بطيء على البارد' : '12 hours of slow cold smoking'}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">{ar ? 'قوام ومذاق اللحم:' : 'Taste & Texture:'}</span>
                    <span className="sp-detail-val">{ar ? 'زبدي متماسك يذوب مع نكهة تدخين راقية' : 'Velvety buttery melt-in-mouth finish'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── 4-STAGE CRAFT JOURNEY TIMELINE ─────────────────────────────── */}
        <div className="sp-steps-section-header">
          <span className="sp-steps-kicker">{ar ? 'دقة متناهية في كل مرحلة' : 'PRECISION AT EVERY STEP'}</span>
          <h3 className="sp-steps-title">{ar ? 'المراحل الأربعة للصنعة والإنتاج' : 'Four Pillars of Artisanal Mastery'}</h3>
        </div>

        <div className="sp-steps-row">
          {/* Step 1 */}
          <div className="sp-step-card">
            <div className="sp-step-card-top">
              <div className="sp-step-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20a6 6 0 0 0 10 0 6 6 0 0 0 10 0" />
                  <path d="M12 4v10" />
                  <path d="M18 9l-6-6-6 6" />
                  <circle cx="12" cy="14" r="2" />
                </svg>
              </div>
              <span className="sp-step-badge">01</span>
            </div>
            <div className="sp-step-card-content">
              <span className="sp-step-tag">{ar ? 'استيراد قطبي مباشر' : 'Arctic Deep Catch'}</span>
              <h4>{ar ? 'الصيد والاستيراد المباشر' : 'Sourcing & Harvesting'}</h4>
              <p>{ar ? 'صيد بري من أعماق بحر الشمال وهولندا وجزر فارو في مواسم الذروة لضمان أعلى نسبة دهون صحية ونضارة.' : 'Direct wild catch from North Sea and Dutch winter waters ensuring optimal natural oils and ocean freshness.'}</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="sp-step-card">
            <div className="sp-step-card-top">
              <div className="sp-step-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  <path d="M12 12a3 3 0 0 0 3-3" />
                </svg>
              </div>
              <span className="sp-step-badge">02</span>
            </div>
            <div className="sp-step-card-content">
              <span className="sp-step-tag">{ar ? 'ملح بحري طبيعي' : 'Pure Sea Salt Cure'}</span>
              <h4>{ar ? 'التمليح البحري الهادئ' : 'Natural Sea Cure'}</h4>
              <p>{ar ? '48 ساعة تمليح جاف خفيف بملح بحري نقي لضبط ملوحة متوازنة ومحببة مع الحفاظ على تماسك القوام وطراوة اللحم.' : '48h low-sodium natural sea-salt curing achieving a delicate, pleasant taste while retaining juicy texture.'}</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="sp-step-card">
            <div className="sp-step-card-top">
              <div className="sp-step-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
              <span className="sp-step-badge">03</span>
            </div>
            <div className="sp-step-card-content">
              <span className="sp-step-tag">{ar ? 'خشب زان طبيعي 100%' : '100% Beechwood'}</span>
              <h4>{ar ? 'التدخين بخشب الزان' : 'Beechwood Smoke'}</h4>
              <p>{ar ? '12 ساعة تدخين بطيء على البارد داخل أفران رقمية معقمة بنشارة خشب الزان لمنح السمك لونه الكهرماني وطعمه الفاخر.' : '12h slow cold smoking inside digital climate-controlled smokehouses delivering amber luster and aromatic depth.'}</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="sp-step-card">
            <div className="sp-step-card-top">
              <div className="sp-step-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="13" rx="2" />
                  <path d="M8 8V5a4 4 0 0 1 8 0v3" />
                  <line x1="12" y1="13" x2="12" y2="17" />
                </svg>
              </div>
              <span className="sp-step-badge">04</span>
            </div>
            <div className="sp-step-card-content">
              <span className="sp-step-tag">{ar ? 'معقم وخالي من الروائح' : 'Airtight Vacuum Lock'}</span>
              <h4>{ar ? 'التغليف الفاكيوم المعقم' : 'Vacuum Packaging'}</h4>
              <p>{ar ? 'سحب كامل للأكسجين وتغليف حراري عالي الكثافة لحفظ الطراوة والنكهة ومنع أي نفاذ للروائح حتى فتح العبوة.' : 'Total oxygen extraction in multi-layer thermal vacuum packaging preserving peak moisture and zero aroma leaks.'}</p>
            </div>
          </div>
        </div>

        {/* ─── DISTINCT QUALITY & SAFETY BENCHMARK PODIUM ─────────────────── */}
        <div className="sp-podium-wrapper">
          {/* Podium Header */}
          <div className="sp-podium-header">
            <div className="sp-podium-header-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>{ar ? 'معايير الجودة والاعتمادات القياسية' : 'CERTIFIED QUALITY & SAFETY BENCHMARKS'}</span>
            </div>
            <h3 className="sp-podium-title">
              {ar ? 'أرقام حقيقية تعكس التزامنا بالصدارة' : 'Empirical Benchmarks of Factory Excellence'}
            </h3>
          </div>

          {/* Integrated Benchmark Podium Pod */}
          <div className="sp-podium-pod">
            {/* Column 1 */}
            <div className="sp-podium-col">
              <div className="sp-podium-emblem" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="sp-podium-number">100%</div>
              <span className="sp-podium-pill">{ar ? 'نقاء طبيعي خالص' : '100% Pure Organic'}</span>
              <h4 className="sp-podium-name">{ar ? 'خشب زان ألماني طبيعي' : 'Natural German Beechwood'}</h4>
              <p className="sp-podium-desc">{ar ? 'نشارة خشب زان بيور بدون أي إضافات كيميائية أو ملونات.' : 'Zero artificial flavor enhancers, coloring agents or chemical smoke.'}</p>
            </div>

            {/* Column 2 */}
            <div className="sp-podium-col">
              <div className="sp-podium-emblem" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="sp-podium-number">12h</div>
              <span className="sp-podium-pill">{ar ? 'تدخين بارد هادئ' : 'Cold Slow Smoked'}</span>
              <h4 className="sp-podium-name">{ar ? 'تدخين بطيء على البارد' : 'Continuous Cold Smoke'}</h4>
              <p className="sp-podium-desc">{ar ? 'تغلغل عميق ومتدرج للدخان لمنح اللحم نكهة زبدية مخملية.' : 'Gradual smoke saturation yielding exquisite buttery melt-in-mouth.'}</p>
            </div>

            {/* Column 3 */}
            <div className="sp-podium-col">
              <div className="sp-podium-emblem" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  <path d="M12 12a3 3 0 0 0 3-3" />
                </svg>
              </div>
              <div className="sp-podium-number">48h</div>
              <span className="sp-podium-pill">{ar ? 'ملوحة منخفضة' : 'Balanced Low Salt'}</span>
              <h4 className="sp-podium-name">{ar ? 'تمليح بحري خفيف' : 'Low Sodium Cure'}</h4>
              <p className="sp-podium-desc">{ar ? 'ملوحة خفيفة ومحببة لجميع أفراد الأسرة غنية بالأوميجا 3.' : 'Delicate salinity preserving natural healthy fish oils and juiciness.'}</p>
            </div>

            {/* Column 4 */}
            <div className="sp-podium-col">
              <div className="sp-podium-emblem" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="sp-podium-number font-iso">ISO 22000</div>
              <span className="sp-podium-pill">{ar ? 'اعتماد دولي موثق' : 'HACCP & NFSA'}</span>
              <h4 className="sp-podium-name">{ar ? 'معتمد سلامة غذاء' : 'Food Safety Standard'}</h4>
              <p className="sp-podium-desc">{ar ? 'مطابق لأعلى مواصفات الهيئة القومية لسلامة الغذاء المصرية.' : 'Manufactured under rigorous NFSA and international ISO standards.'}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SmokingProcessSection;
