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

  return (
    <section className={`smoking-process-sec ${className}`} id={id}>
      <div className="container">
        
        {/* Section Header */}
        <div className="sp-header-wrap">
          <span className="sp-eyebrow">
            {ar ? 'أسرار الصنعة الحرفية بمصنعنا' : 'FACTORY ARTISANAL CRAFT'}
          </span>
          <div className="sp-gold-accent-line" />
          <h2 className="sp-main-title">
            {ar ? 'رحلة التحول الذهبي: قبل وبعد التدخين' : 'The Golden Masterpiece: Before & After Smoking'}
          </h2>
          <p className="sp-lead-text">
            {ar
              ? 'شاهد بالصور الحقيقية من داخل عنابر مصنعنا ببلبيس، الفارق المبهر بين سمك الرنجة الفضي الطازج بعد التمليح والتجهيز، والتحول الملكي إلى اللون الذهبي الفاخر بعد 12 ساعة من التدخين البطيء بنشارة خشب الزان الطبيعي.'
              : 'Witness authentic photography from our Belbeis facility — the dramatic contrast between raw ocean-silver cured fish and the royal golden luster achieved after 12 hours of slow cold smoking with natural beechwood.'}
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
              {/* Bottom Image: After Smoking (Golden) */}
              <div className="sp-layer sp-layer-after">
                <img
                  src={imgAfter}
                  alt={ar ? 'الأسماك بعد التدخين باللون الذهبي' : 'Fish after beechwood smoking'}
                  draggable={false}
                />
                <div className="sp-tag-pill sp-tag-gold">
                  <span className="sp-tag-dot dot-gold" />
                  <span>{ar ? 'بعد التدخين — الذهب المدخن الفاخر' : 'AFTER SMOKING — GOLDEN LUSTER'}</span>
                </div>
              </div>

              {/* Top Image: Before Smoking (Silver Raw) */}
              <div
                className="sp-layer sp-layer-before"
                style={{
                  clipPath: ar
                    ? `inset(0 0 0 ${100 - sliderPosition}%)`
                    : `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              >
                <img
                  src={imgBefore}
                  alt={ar ? 'الأسماك قبل التدخين بعد التمليح' : 'Fish before smoking after curing'}
                  draggable={false}
                />
                <div className="sp-tag-pill sp-tag-silver">
                  <span className="sp-tag-dot dot-silver" />
                  <span>{ar ? 'قبل التدخين — الخام الطازج والمملح' : 'BEFORE SMOKING — FRESH CURED'}</span>
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
                  ? 'اسحب المقبض الذهبي يميناً ويساراً لمشاهدة التحول المذهل في اللون والقوام'
                  : 'Drag or click the gold slider handle left and right to reveal the full transformation'}
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
                <div className="sp-stage-badge-top gold">
                  {ar ? 'المرحلة 2: التحول الذهبي' : 'STAGE 2: GOLDEN SMOKED'}
                </div>
              </div>
              <div className="sp-dual-details">
                <div className="sp-card-heading">
                  <span className="sp-status-dot gold" />
                  <h3>{ar ? 'بعد التدخين (الذهب الملكي)' : 'After Smoking (Golden Glory)'}</h3>
                </div>
                <div className="sp-detail-grid">
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">{ar ? 'المظهر الخارجي:' : 'Appearance:'}</span>
                    <span className="sp-detail-val">{ar ? 'لون ذهبي برونزي متوهج 100% طبيعي' : 'Luminous golden-bronze coat'}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">{ar ? 'نوع الخشب:' : 'Wood Type:'}</span>
                    <span className="sp-detail-val">{ar ? 'نشارة خشب الزان الألماني الطبيعي' : '100% natural German beechwood'}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">{ar ? 'زمن التدخين:' : 'Smoking Time:'}</span>
                    <span className="sp-detail-val">{ar ? '12 ساعة تدخين بطيء على البارد' : '12 hours of slow cold smoking'}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">{ar ? 'قوام ومذاق اللحم:' : 'Taste & Texture:'}</span>
                    <span className="sp-detail-val">{ar ? 'زبدي مخملي يذوب مع نكهة تدخين ساحرة' : 'Velvety buttery melt-in-mouth finish'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── 4-STAGE CRAFT JOURNEY TIMELINE ─────────────────────────────── */}
        <div className="sp-steps-row">
          <div className="sp-step-card">
            <div className="sp-step-num">01</div>
            <h4>{ar ? 'الصيد والاستيراد المباشر' : 'Arctic Deep Catch'}</h4>
            <p>{ar ? 'صيد بري من أعماق بحر الشمال وهولندا في مواسم الذروة.' : 'Direct wild catch from North Sea winter runs.'}</p>
          </div>
          <div className="sp-step-card">
            <div className="sp-step-num">02</div>
            <h4>{ar ? 'التمليح البحري الهادئ' : 'Natural Sea Cure'}</h4>
            <p>{ar ? '48 ساعة تمليح خفيف بملح بحري نقي لضبط الملوحة والقوام.' : '48h low-sodium sea-salt dry brining.'}</p>
          </div>
          <div className="sp-step-card">
            <div className="sp-step-num">03</div>
            <h4>{ar ? 'التدخين بخشب الزان' : 'Beechwood Smoke'}</h4>
            <p>{ar ? '12 ساعة تدخين بطيء داخل أفران رقمية بنشارة الزان الخالص.' : '12h slow cold smoking with pure beechwood.'}</p>
          </div>
          <div className="sp-step-card">
            <div className="sp-step-num">04</div>
            <h4>{ar ? 'التغليف الفاكيوم المعقم' : 'Vacuum Packaging'}</h4>
            <p>{ar ? 'سحب هواء وتغليف حراري محكم يحفظ الطراوة والنكهة بدون روائح.' : 'Airtight thermal vacuum seal locking freshness.'}</p>
          </div>
        </div>

        {/* ─── QUALITY & SAFETY METRICS BADGES ────────────────────────────── */}
        <div className="sp-metrics-banner">
          <div className="sp-metric-unit">
            <span className="sp-metric-highlight">100%</span>
            <span className="sp-metric-label">{ar ? 'خشب زان طبيعي خالص' : 'Natural Beechwood'}</span>
          </div>
          <div className="sp-metric-sep" />
          <div className="sp-metric-unit">
            <span className="sp-metric-highlight">12h</span>
            <span className="sp-metric-label">{ar ? 'تدخين بارد متدرج' : 'Slow Cold Smoke'}</span>
          </div>
          <div className="sp-metric-sep" />
          <div className="sp-metric-unit">
            <span className="sp-metric-highlight">48h</span>
            <span className="sp-metric-label">{ar ? 'تمليح بحري خفيف' : 'Low Sodium Cure'}</span>
          </div>
          <div className="sp-metric-sep" />
          <div className="sp-metric-unit">
            <span className="sp-metric-highlight">ISO 22000</span>
            <span className="sp-metric-label">{ar ? 'معتمد سلامة غذاء' : 'HACCP & NFSA Certified'}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SmokingProcessSection;
