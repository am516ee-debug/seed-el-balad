import React, { useState, useRef, useCallback } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import imgBefore from '../../assets/images/seed-el-balad/Before smoking.webp';
import imgAfter from '../../assets/images/seed-el-balad/After smoking.webp';
import '../../css/smoking-process.css';

interface SmokingProcessSectionProps {
  id?: string;
  className?: string;
  showKicker?: boolean;
}

export const SmokingProcessSection: React.FC<SmokingProcessSectionProps> = ({
  id = 'smoking-process-section',
  className = '',
  showKicker = true,
}) => {
  const { language } = useTranslation();
  const ar = language === 'ar';

  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'slider' | 'side-by-side'>('slider');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section className={`smoking-process-sec reveal ${className}`} id={id}>
      <div className="container">
        {/* Section Header */}
        <div className="sp-section-header">
          {showKicker && (
            <span className="collection-kick">
              {ar ? 'حرفية التدخين الطبيعي' : 'ARTISANAL SMOKING CRAFT'}
            </span>
          )}
          <div className="divider-ornament" aria-hidden="true">
            <span className="line-left" />
            <span className="diamond" />
            <span className="line-right" />
          </div>
          <h2>
            {ar ? 'التحول الذهبي: قبل وبعد التدخين' : 'The Golden Transformation: Before & After'}
          </h2>
          <p className="sp-sub-desc">
            {ar
              ? 'شاهد بالصورة الحية التحول الاستثنائي لأسماك الهارينج المستوردة من حالتها الفضية الطازجة بعد التمليح، إلى لونها الذهبي الملكي وقوامها الزبدي بعد 12 ساعة من التدخين البطيء بنشارة خشب الزان الخالص.'
              : 'Witness the remarkable transformation of imported North Sea herring — from fresh, silver-brined raw fish to an exquisite golden luster and buttery texture after 12 hours of artisanal beechwood smoking.'}
          </p>

          {/* View Mode Toggle Tabs */}
          <div className="sp-mode-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'slider'}
              className={`sp-tab-btn ${activeTab === 'slider' ? 'active' : ''}`}
              onClick={() => setActiveTab('slider')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="18" rx="2" />
                <line x1="12" y1="3" x2="12" y2="21" />
                <path d="M8 12l-3-3 3-3M16 12l3 3-3 3" />
              </svg>
              <span>{ar ? 'المقارنة التفاعلية (Interactive Slider)' : 'Interactive Comparison Slider'}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'side-by-side'}
              className={`sp-tab-btn ${activeTab === 'side-by-side' ? 'active' : ''}`}
              onClick={() => setActiveTab('side-by-side')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="8" height="18" rx="1" />
                <rect x="13" y="3" width="8" height="18" rx="1" />
              </svg>
              <span>{ar ? 'تفاصيل المرحلتين جنباً إلى جنب' : 'Side-by-Side Dual View'}</span>
            </button>
          </div>
        </div>

        {/* ─── TAB 1: INTERACTIVE SLIDER ──────────────────────────────────── */}
        {activeTab === 'slider' && (
          <div className="sp-interactive-wrapper">
            <div
              className="sp-slider-frame"
              ref={containerRef}
              onMouseDown={handlePointerDown}
              onMouseUp={handlePointerUp}
              onMouseLeave={handlePointerUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handlePointerDown}
              onTouchEnd={handlePointerUp}
              onTouchMove={handleTouchMove}
            >
              {/* Layer 1: After Smoking (Base Full Width) */}
              <div className="sp-slide-layer sp-layer-after">
                <img
                  src={imgAfter}
                  alt={ar ? 'الأسماك بعد التدخين باللون الذهبي' : 'Herring after beechwood smoking'}
                  draggable={false}
                />
                <div className="sp-badge sp-badge-after">
                  <span className="sp-badge-dot gold" />
                  <span>{ar ? 'بعد التدخين — التحول الذهبي الملكي' : 'AFTER SMOKING — GOLDEN LUSTER'}</span>
                </div>
              </div>

              {/* Layer 2: Before Smoking (Clipped by slider position) */}
              <div
                className="sp-slide-layer sp-layer-before"
                style={{
                  clipPath: ar
                    ? `inset(0 0 0 ${100 - sliderPosition}%)`
                    : `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              >
                <img
                  src={imgBefore}
                  alt={ar ? 'الأسماك قبل التدخين بعد التمليح' : 'Herring before smoking after curing'}
                  draggable={false}
                />
                <div className="sp-badge sp-badge-before">
                  <span className="sp-badge-dot silver" />
                  <span>{ar ? 'قبل التدخين — الخام الطازج والمملح' : 'BEFORE SMOKING — FRESH CURED'}</span>
                </div>
              </div>

              {/* Draggable Divider Handle */}
              <div
                className="sp-slider-handle"
                style={{
                  [ar ? 'right' : 'left']: `${sliderPosition}%`,
                }}
              >
                <div className="sp-handle-line" />
                <div className="sp-handle-knob">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                    <polyline points="9 18 3 12 9 6" />
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                    <polyline points="15 18 21 12 15 6" />
                  </svg>
                </div>
                <div className="sp-handle-line" />
              </div>
            </div>

            {/* Slider Hint */}
            <div className="sp-slider-instruction">
              <span className="sp-drag-icon" aria-hidden="true">⇄</span>
              <span>{ar ? 'اضغط واسحب المقبض الذهبي لمشاهدة الفرق بين حالتي ما قبل التدخين وما بعده' : 'Click & drag the gold slider to view the dramatic before and after smoking transformation'}</span>
            </div>
          </div>
        )}

        {/* ─── TAB 2: SIDE BY SIDE CARDS ──────────────────────────────────── */}
        {activeTab === 'side-by-side' && (
          <div className="sp-side-grid">
            {/* Card 1: Before Smoking */}
            <div className="sp-card sp-card-before">
              <div className="sp-card-media">
                <img src={imgBefore} alt={ar ? 'الرنجة قبل التدخين' : 'Herring before smoking'} />
                <span className="sp-stage-tag silver">
                  {ar ? 'المرحلة الأولى: الخام والتمليح' : 'STAGE 1: FRESH CURE'}
                </span>
              </div>
              <div className="sp-card-body">
                <h3>{ar ? 'قبل التدخين (الخام الطازج)' : 'Before Smoking (Fresh Catch)'}</h3>
                <ul className="sp-feature-list">
                  <li>
                    <strong>{ar ? 'المظهر الخارجي:' : 'Appearance:'}</strong>{' '}
                    {ar ? 'لون فضي نقي طبيعي مائل للزرقة البحرية.' : 'Pure, natural ocean-silver sheen.'}
                  </li>
                  <li>
                    <strong>{ar ? 'طريقة التحضير:' : 'Preparation:'}</strong>{' '}
                    {ar ? 'غسيل بمياه معقمة وتمليح جاف بملح بحري نقي خفيف 100%.' : 'Sanitized rinse and mild dry-brining with natural sea salt.'}
                  </li>
                  <li>
                    <strong>{ar ? 'حالة اللحم:' : 'Texture:'}</strong>{' '}
                    {ar ? 'لحم رطب غض ممتلئ بالزيوت الطبيعية وأحماض أوميجا 3.' : 'Moist, supple flesh rich in natural healthy ocean oils.'}
                  </li>
                  <li>
                    <strong>{ar ? 'الخطوة التالية:' : 'Next Step:'}</strong>{' '}
                    {ar ? 'التعليق على أسياخ ستانلس ستيل معقمة لدخول أفران الزان.' : 'Mounted on sterile stainless spits ready for the smoke chambers.'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: After Smoking */}
            <div className="sp-card sp-card-after">
              <div className="sp-card-media">
                <img src={imgAfter} alt={ar ? 'الرنجة بعد التدخين' : 'Herring after smoking'} />
                <span className="sp-stage-tag gold">
                  {ar ? 'المرحلة النهائية: التحول الذهبي' : 'FINAL STAGE: GOLDEN CURE'}
                </span>
              </div>
              <div className="sp-card-body">
                <h3>{ar ? 'بعد التدخين (التحول الذهبي)' : 'After Smoking (Golden Masterpiece)'}</h3>
                <ul className="sp-feature-list">
                  <li>
                    <strong>{ar ? 'المظهر الخارجي:' : 'Appearance:'}</strong>{' '}
                    {ar ? 'قشرة ذهبية برونزية متوهجة متجانسة 100% دون ملونات.' : 'Luminous golden-bronze coat without any artificial dyes.'}
                  </li>
                  <li>
                    <strong>{ar ? 'طريقة التدخين:' : 'Smoking Method:'}</strong>{' '}
                    {ar ? '12 ساعة تدخين بطيء على البارد بنشارة خشب الزان الألماني.' : '12-hour cold smoking with pure German beechwood shavings.'}
                  </li>
                  <li>
                    <strong>{ar ? 'حالة اللحم:' : 'Texture:'}</strong>{' '}
                    {ar ? 'قوام زبدي متماسك يذوب في الفم بنكهة مدخنة متوازنة وساحرة.' : 'Succulent, melt-in-the-mouth buttery meat infused with deep aroma.'}
                  </li>
                  <li>
                    <strong>{ar ? 'الخطوة التالية:' : 'Next Step:'}</strong>{' '}
                    {ar ? 'التبريد السريع ثم التغليف الحراري الفاكيوم المعقم ببلبيس.' : 'Rapid cooling followed by sterile airtight thermal vacuum sealing.'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ─── CRAFT METRICS STRIP ────────────────────────────────────────── */}
        <div className="sp-metrics-strip">
          <div className="sp-metric-box">
            <span className="sp-metric-val">100%</span>
            <span className="sp-metric-title">{ar ? 'خشب زان طبيعي خالص' : 'Pure Beechwood'}</span>
            <span className="sp-metric-sub">{ar ? 'بدون ألوان أو كيمياويات صناعية' : 'Zero chemicals or dyes'}</span>
          </div>
          <div className="sp-metric-divider" />
          <div className="sp-metric-box">
            <span className="sp-metric-val">12h</span>
            <span className="sp-metric-title">{ar ? 'تدخين بطيء على البارد' : 'Cold Slow Smoking'}</span>
            <span className="sp-metric-sub">{ar ? 'في أفران رقمية مغلقة ومراقبة' : 'Digitally monitored kilns'}</span>
          </div>
          <div className="sp-metric-divider" />
          <div className="sp-metric-box">
            <span className="sp-metric-val">48h</span>
            <span className="sp-metric-title">{ar ? 'تعتيق بملح البحر النقي' : 'Natural Sea Salt Cure'}</span>
            <span className="sp-metric-sub">{ar ? 'تمليح خفيف وصحي متوازن' : 'Low sodium & heart-healthy'}</span>
          </div>
          <div className="sp-metric-divider" />
          <div className="sp-metric-box">
            <span className="sp-metric-val">ISO</span>
            <span className="sp-metric-title">{ar ? 'سلامة الغذاء والتطهير' : '22000 & HACCP'}</span>
            <span className="sp-metric-sub">{ar ? 'معتمد في مصنعنا ببلبيس' : 'Certified Belbeis Plant'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmokingProcessSection;
