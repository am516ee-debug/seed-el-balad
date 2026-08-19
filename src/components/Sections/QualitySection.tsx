import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import '../../css/home.css';

interface QualitySectionProps {
  onViewPdf: (url: string, title: string) => void;
}

export const QualitySection: React.FC<QualitySectionProps> = ({ onViewPdf }) => {
  const { t, language } = useTranslation();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const certificates = [
    {
      badge: 'ISO 22000',
      name: t('quality.cert1'),
      pdfFile: '/certificates/FP-004-13 Perfect Cert(Gold Foods (Seed El Balad))- ISO 22000 ..pdf',
      imgFile: '/certificates/FP-004-13 Perfect Cert(Gold Foods (Seed El Balad))- ISO 22000 ..png'
    },
    {
      badge: 'ISO 9001',
      name: t('quality.cert2'),
      pdfFile: '/certificates/FP-004-13 Perfect Cert( Gold Foods (Seed El Balad)) - ISO 9001.pdf',
      imgFile: '/certificates/FP-004-13 Perfect Cert( Gold Foods (Seed El Balad)) - ISO 9001.png'
    },
    {
      badge: 'ISO 14001',
      name: t('quality.cert3'),
      pdfFile: '/certificates/FP-004-13 Perfect Cert - (Gold Foods )ISO 14001.pdf',
      imgFile: '/certificates/FP-004-13 Perfect Cert - (Gold Foods )ISO 14001.png'
    },
    {
      badge: 'ISO 45001',
      name: t('quality.cert4'),
      pdfFile: '/certificates/FP-004-13 Perfect Cert ( Gold Foods (Seed El Balad))- ISO 45001.pdf',
      imgFile: '/certificates/FP-004-13 Perfect Cert ( Gold Foods (Seed El Balad))- ISO 45001.png'
    },
    {
      badge: 'HACCP',
      name: t('quality.cert5'),
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
      onViewPdf(cert.imgFile, cert.name);
    } else {
      setActiveIdx(idx);
    }
  };

  return (
    <section className="quality-section" id="quality-section">
      <div className="container">
        
        {/* Unified Premium Section Header */}
        <div className="reveal active" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="collection-kick">{language === 'ar' ? 'اعتماداتنا الموثقة' : 'OUR CERTIFICATIONS'}</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-text-ink)', marginTop: '12px' }}>
            {t('quality.title')}
          </h2>
          
          <div className="divider-ornament" style={{ margin: '18px auto' }} aria-hidden="true">
            <span className="line-left"></span>
            <span className="diamond"></span>
            <span className="line-right"></span>
          </div>

          <p style={{ maxWidth: '750px', margin: '0 auto', opacity: 0.85, fontSize: '0.98rem', lineHeight: '1.6' }}>
            {t('quality.subtitle')}
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
                          ? (language === 'ar' ? 'انقر للتكبير' : 'Click to Zoom')
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
  );
};

export default QualitySection;
