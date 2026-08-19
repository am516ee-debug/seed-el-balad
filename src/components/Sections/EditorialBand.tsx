import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import imgEditorial from '../../assets/images/seed-el-balad/The Art of Seafood pic.png';
import '../../css/home.css';

export const EditorialBand: React.FC = () => {
  const { t } = useTranslation();

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="editorial-band" id="editorial-section">
      <div className="editorial-bg">
        <img src={imgEditorial} alt="Gold Foods Seafood Production Quality" />
      </div>
      <div className="editorial-content reveal">
        <div className="editorial-eyebrow">{t('editorial.eyebrow')}</div>
        <h3>{t('editorial.title')}</h3>
        <p>{t('editorial.desc1')}</p>
        <p>{t('editorial.desc2')}</p>
        <a 
          href="#story" 
          className="animate-underline" 
          style={{ color: 'var(--color-accent-gold)', width: 'fit-content', fontWeight: 600 }}
          onClick={(e) => { e.preventDefault(); handleScrollToAbout(); }}
        >
          {t('editorial.link')}
        </a>
      </div>
    </section>
  );
};
export default EditorialBand;
