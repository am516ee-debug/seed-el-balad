import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import imgHero from '../../assets/images/seed-el-balad/herosection.webp';
import '../../css/home.css';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const handleScrollDown = () => {
    const nextSection = document.getElementById('products-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src={imgHero} alt="Seed El-balad Premium Smoked Herring Still Life" />
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">{t('hero.eyebrow')}</div>
        <h1 
          className="hero-title"
          dangerouslySetInnerHTML={{ __html: t('hero.title') }}
        />
      </div>
      <div className="scroll-cue" onClick={handleScrollDown}>
        <span>{t('hero.scroll')}</span>
        <span className="dot"></span>
      </div>
    </section>
  );
};
export default Hero;
