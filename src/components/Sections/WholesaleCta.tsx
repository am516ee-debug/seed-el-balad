import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { PixelService } from '../../utils/pixel';
import imgFactory from '../../assets/images/seed-el-balad/img_22.webp';

interface WholesaleCtaProps {
  onExploreClick?: () => void;
}

export const WholesaleCta: React.FC<WholesaleCtaProps> = ({ onExploreClick }) => {
  const { language } = useLanguage();

  return (
    <section className="home-cta-section" style={{
      position: 'relative',
      padding: '100px 8%',
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-white)',
      textAlign: 'center',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255, 255, 255, 0.12)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Subtle Background image watermark */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${imgFactory})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.14,
        mixBlendMode: 'overlay',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
        <span className="collection-kick" style={{ color: 'var(--color-white)', opacity: 0.9, letterSpacing: language === 'ar' ? '0' : '0.15em' }}>
          {language === 'ar' ? 'اطلب عراقة الطعم' : 'THE CULINARY EXPERIENCE'}
        </span>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.0rem, 3.8vw, 2.8rem)',
          color: 'var(--color-white)',
          marginTop: '16px',
          lineHeight: '1.25',
          fontWeight: 500
        }}>
          {language === 'ar' 
            ? 'احصل على رنجة سيد البلد الفاخرة مباشرة على مائدتك' 
            : 'Bring the Authentic Gold Standard Seafood to Your Table'}
        </h2>
        <p style={{
          color: 'var(--color-white)',
          fontSize: '0.98rem',
          opacity: 0.9,
          maxWidth: '650px',
          margin: '20px auto 36px',
          lineHeight: '1.6'
        }}>
          {language === 'ar'
            ? 'مجهزة خصيصاً بشغف التدخين الهادئ بخشب الزان، تمليح بحري خفيف منخفض الصوديوم، وتعبئة معقمة ومفرغة من الهواء لأمان عائلتك التام.'
            : 'Slow smoked over natural beechwood, dry cured with low-sodium sea salt, and vacuum sealed under strict ISO hygiene compliance.'}
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center'
        }}>
          <button 
            type="button" 
            className="btn-primary" 
            onClick={() => {
              PixelService.trackContact('Home Banner WhatsApp Order');
              window.open('https://wa.me/201032033302', '_blank');
            }}
            style={{
              padding: '14px 32px',
              fontSize: '0.88rem',
              fontWeight: 700,
              borderRadius: '0px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              backgroundColor: 'var(--color-white)',
              color: 'var(--color-primary)',
              border: '1px solid var(--color-white)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.202-1.362a9.92 9.92 0 004.808 1.248h.005c5.507 0 9.99-4.479 9.991-9.986A9.99 9.99 0 0012.012 2zm5.727 14.126c-.25.707-1.455 1.3-1.985 1.385-.48.077-1.11.144-3.23-.736-2.705-1.123-4.436-3.879-4.57-4.061-.135-.182-1.093-1.453-1.093-2.77 0-1.318.692-1.968.942-2.228.25-.26.545-.325.727-.325.182 0 .364.001.52.008.163.007.382-.061.597.457.22.53.754 1.84.82 1.974.065.134.11.29.02.468-.09.18-.135.29-.27.447-.135.158-.285.353-.407.474-.136.136-.28.285-.12.56.16.275.708 1.17 1.517 1.89.1.09.2.17.29.25.932.81 1.702 1.05 1.942 1.15.24.1.382.02.522-.14.14-.16.598-.697.758-.936.16-.24.32-.2.54-.12.22.08 1.397.66 1.637.78.24.12.4.18.46.28.06.1.06.58-.19 1.286z"/>
            </svg>
            {language === 'ar' ? 'اطلب الآن عبر واتساب' : 'Order via WhatsApp'}
          </button>
          
          {onExploreClick && (
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={onExploreClick}
              style={{
                padding: '14px 32px',
                fontSize: '0.88rem',
                fontWeight: 700,
                borderRadius: '0px',
                backgroundColor: 'transparent',
                color: 'var(--color-white)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.borderColor = 'var(--color-white)'; 
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)'; 
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'; 
                e.currentTarget.style.backgroundColor = 'transparent'; 
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {language === 'ar' ? 'استكشف المنتجات' : 'Explore Collections'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
export default WholesaleCta;
