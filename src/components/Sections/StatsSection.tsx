import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import useCountUp from '../../hooks/useCountUp';
import '../../css/home.css';

export const StatsSection: React.FC = () => {
  const { t } = useTranslation();
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.unobserve(entry.target); // Trigger count up only once
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Set up animated counts
  const count1 = useCountUp(2019, 2000, startCounting);
  const count2 = useCountUp(3, 1500, startCounting);
  const count3 = useCountUp(1000, 2000, startCounting);
  const count4 = useCountUp(100, 1800, startCounting);

  return (
    <section className="stats-section" id="stats-section" ref={sectionRef}>
      <div className="container">
        <h2 className="reveal" style={{ marginBottom: '16px' }}>{t('stats.title')}</h2>
        
        <div className="divider-ornament reveal" aria-hidden="true">
          <span className="line-left"></span>
          <span className="diamond"></span>
          <span className="line-right"></span>
        </div>

        <div className="stats-grid">
          <div className="stat-item reveal">
            <span className="stat-num">{count1}</span>
            <span className="stat-label">{t('stats.stat1.lbl')}</span>
          </div>

          <div className="stat-item reveal">
            <span className="stat-num">{count2}+</span>
            <span className="stat-label">{t('stats.stat2.lbl')}</span>
          </div>

          <div className="stat-item reveal">
            <span className="stat-num">{count3}+</span>
            <span className="stat-label">{t('stats.stat3.lbl')}</span>
          </div>

          <div className="stat-item reveal">
            <span className="stat-num">{count4}%</span>
            <span className="stat-label">{t('stats.stat4.lbl')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
