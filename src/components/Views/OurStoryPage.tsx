import React, { useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

import imgHero from '../../assets/images/seed-el-balad/hero s our story.webp';
import imgBeginning from '../../assets/images/seed-el-balad/THE BEGINNING pic.webp';
import imgFactory from '../../assets/images/seed-el-balad/img_22.webp';

import SmokingProcessSection from '../Sections/SmokingProcessSection';
import '../../css/story.css';

interface OurStoryPageProps {
  onViewPdf?: (url: string, title: string) => void;
}

export const OurStoryPage: React.FC<OurStoryPageProps> = () => {
  const { language } = useTranslation();
  const ar = language === 'ar';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    const reveals = document.querySelectorAll('.sp-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sp-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const origins = [
    {
      code: 'NL',
      country: ar ? 'هولندا' : 'Netherlands',
      catch: ar ? 'هارينج ماتيس الدهني' : 'Maatjes Herring',
      fact: ar ? 'الموردون الرئيسيون لخام الرنجة' : 'Primary herring raw material supplier',
    },
    {
      code: 'NO',
      country: ar ? 'النرويج' : 'Norway',
      catch: ar ? 'هارينج أطلنتي الشتوي' : 'Winter Atlantic Herring',
      fact: ar ? 'صيد موسم الشتاء عالي الدهون' : 'High-fat winter season catch',
    },
    {
      code: 'IS',
      country: ar ? 'أيسلندا' : 'Iceland',
      catch: ar ? 'هارينج المياه الباردة' : 'Cold-Water Herring',
      fact: ar ? 'مياه بحرية نقية ومصايد خاضعة للرقابة' : 'Pure arctic waters, regulated fishing',
    },
    {
      code: 'FO',
      country: ar ? 'جزر فارو' : 'Faroe Islands',
      catch: ar ? 'هارينج بري مستدام' : 'Wild-Caught Sustainable',
      fact: ar ? 'مصيد بري طبيعي خالٍ من الاستزراع' : 'Fully wild, no aquaculture',
    },
    {
      code: 'UK',
      country: ar ? 'اسكتلندا' : 'Scotland',
      catch: ar ? 'هارينج الخريف عالي الجودة' : 'Autumn High-Grade Herring',
      fact: ar ? 'أعلى محتوى دهوني لأجود المنتجات' : 'Highest fat content for premium products',
    },
  ];

  const criteria = [
    ar ? '\u062c\u0648\u062f\u0629 \u0645\u0648\u0633\u0645 \u0627\u0644\u0635\u064a\u062f \u0648\u062e\u0635\u0627\u0626\u0635 \u0627\u0644\u0645\u0635\u064a\u062f' : 'Catch quality & fishing season characteristics',
    ar ? '\u0646\u0633\u0628\u0629 \u0627\u0644\u062f\u0647\u0648\u0646 \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u0629 \u0627\u0644\u0645\u062a\u0648\u0627\u0632\u0646\u0629' : 'Natural balanced fat content',
    ar ? '\u062d\u062c\u0645 \u0627\u0644\u0623\u0633\u0645\u0627\u0643 \u0648\u062a\u062c\u0627\u0646\u0633 \u0627\u0644\u0634\u062d\u0646\u0629' : 'Fish size consistency & batch uniformity',
    ar ? '\u0637\u0631\u0642 \u0627\u0644\u062a\u062f\u0627\u0648\u0644 \u0648\u0627\u0644\u062a\u062c\u0645\u064a\u062f \u0648\u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u062a\u0628\u0631\u064a\u062f' : 'Cold chain integrity & freezing methods',
  ];

  return (
    <div className="story-page-view">

      {/* 1. CINEMATIC HERO */}
      <section className="sp-hero">
        <div className="sp-hero-bg">
          <img src={imgHero} alt={ar ? 'مصنع سيد البلد للأسماك المدخنة' : 'Seed El-Balad facility'} />
        </div>
        <div className="sp-hero-overlay" />
        <div className="sp-hero-content">
          <span className="sp-eyebrow">
            {ar ? 'قصتنا وعراقتنا' : 'OUR HERITAGE'}
          </span>
          <h1 className="sp-hero-title">
            {ar ? 'أصل الحكاية وعراقة الصنعة' : 'Our Story & Artisanal Legacy'}
          </h1>
          <p className="sp-hero-subtitle">
            {ar
              ? 'من الصيد المباشر في أعماق المياه الأوروبية الباردة إلى مصنعنا المتطور في بلبيس — قصة شغف والتزام بتقديم أرقى مذاق وأعلى معايير الجودة لكل مائدة مصرية.'
              : 'From direct sourcing in cold European waters to our state-of-the-art facility in Belbeis — a legacy of passion and unyielding commitment to premium seafood for Egyptian tables.'}
          </p>
        </div>
        <div 
          className="scroll-cue" 
          onClick={() => {
            const nextSec = document.getElementById('story-manifesto');
            if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>{ar ? 'اكتشف' : 'Discover'}</span>
          <span className="dot" />
        </div>
      </section>

      {/* 2. FOUNDERS MANIFESTO */}
      <section className="sp-manifesto sp-reveal" id="story-manifesto">
        <div className="sp-manifesto-frame">
          <div className="sp-manifesto-accent" />
          <span className="sp-manifesto-tag">
            {ar ? '\u0645\u0646\u064a\u0641\u0633\u062a\u0648 \u0627\u0644\u062a\u0623\u0633\u064a\u0633' : 'FOUNDERS MANIFESTO'}
          </span>
          <blockquote className="sp-manifesto-quote">
            {ar
              ? '\u0641\u064a \u0633\u064a\u062f \u0627\u0644\u0628\u0644\u062f\u060c \u0644\u0627 \u0646\u0635\u0646\u0639 \u0645\u062c\u0631\u062f \u0631\u0646\u062c\u0629 \u2014 \u0628\u0644 \u0646\u0635\u0646\u0639 \u062b\u0642\u0629\u060c \u0648\u0646\u062d\u0645\u0644 \u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0627\u0644\u0623\u0645\u0627\u0646 \u0627\u0644\u063a\u0630\u0627\u0626\u064a \u0644\u0643\u0644 \u0623\u0633\u0631\u0629 \u0645\u0635\u0631\u064a\u0629 \u0627\u062e\u062a\u0627\u0631\u062a\u0646\u0627.'
              : 'At Seed El-Balad, we do not merely produce herring \u2014 we build trust, and we carry the responsibility of food safety for every Egyptian family that chooses us.'}
          </blockquote>
          <p className="sp-manifesto-body">
            {ar
              ? '\u0627\u0646\u0637\u0644\u0642\u0646\u0627 \u0639\u0627\u0645 2019 \u0628\u0639\u062f \u0633\u0646\u0648\u0627\u062a \u0645\u0646 \u0627\u0644\u062e\u0628\u0631\u0629 \u0641\u064a \u0627\u0644\u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a\u0629\u060c \u0628\u0647\u062f\u0641 \u0648\u0627\u062d\u062f \u0648\u0627\u0636\u062d: \u0646\u0642\u0644 \u0623\u0639\u0644\u0649 \u0645\u0639\u0627\u064a\u064a\u0631 \u062a\u0635\u0646\u064a\u0639 \u0627\u0644\u0623\u0633\u0645\u0627\u0643 \u0627\u0644\u0645\u062f\u062e\u0646\u0629 \u0625\u0644\u0649 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0645\u0635\u0631\u064a \u0628\u062f\u0648\u0646 \u062a\u0646\u0627\u0632\u0644 \u0639\u0646 \u0627\u0644\u062c\u0648\u062f\u0629.'
              : 'We launched in 2019 after years of experience in European markets, with one clear goal: to bring the highest standards of smoked fish manufacturing to Egypt without compromising on quality.'}
          </p>
        </div>
        <div className="sp-stat-strip">
          <div className="sp-stat-item">
            <span className="sp-stat-num">2019</span>
            <span className="sp-stat-lbl">{ar ? '\u0633\u0646\u0629 \u0627\u0644\u062a\u0623\u0633\u064a\u0633' : 'Year Founded'}</span>
          </div>
          <div className="sp-stat-divider" />
          <div className="sp-stat-item">
            <span className="sp-stat-num">1000+</span>
            <span className="sp-stat-lbl">{ar ? '\u0645\u0646\u0641\u0630 \u0628\u064a\u0639 \u0641\u064a \u0645\u0635\u0631' : 'Retail Outlets in Egypt'}</span>
          </div>
          <div className="sp-stat-divider" />
          <div className="sp-stat-item">
            <span className="sp-stat-num">5</span>
            <span className="sp-stat-lbl">{ar ? '\u0634\u0647\u0627\u062f\u0627\u062a \u062c\u0648\u062f\u0629 \u062f\u0648\u0644\u064a\u0629' : 'ISO Certifications'}</span>
          </div>
        </div>
      </section>

      {/* 3. ORIGIN SPLIT */}
      <section className="sp-origin sp-reveal">
        <div
          className="sp-origin-img"
          style={{ backgroundImage: `url(${imgBeginning})` }}
          aria-hidden="true"
        />
        <div className="sp-origin-content">
          <span className="sp-section-tag">{ar ? '\u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0648\u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642' : 'THE BEGINNING'}</span>
          <div className="sp-navy-rule" />
          <div className="sp-year-mark">2019</div>
          <h2 className="sp-origin-title">
            {ar ? '\u0642\u0628\u0644 \u0645\u0635\u0631 \u2014 \u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a\u0629' : 'Before Egypt \u2014 The European Experience'}
          </h2>
          <p className="sp-origin-body">
            {ar
              ? '\u0642\u0628\u0644 \u0623\u0646 \u0646\u0628\u062f\u0623 \u0641\u064a \u0645\u0635\u0631\u060c \u0623\u0645\u0636\u0649 \u0641\u0631\u064a\u0642 \u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0633\u0646\u0648\u0627\u062a \u0641\u064a \u0623\u0633\u0648\u0627\u0642 \u0625\u0633\u0628\u0627\u0646\u064a\u0627 \u0648\u0623\u0644\u0645\u0627\u0646\u064a\u0627 \u0648\u0627\u0644\u062f\u0646\u0645\u0627\u0631\u0643 \u2014 \u064a\u062a\u0639\u0644\u0645 \u0623\u0633\u0631\u0627\u0631 \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0623\u0633\u0645\u0627\u0643 \u0627\u0644\u0645\u062f\u062e\u0646\u0629 \u0645\u0646 \u0623\u0635\u062d\u0627\u0628\u0647\u0627 \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a\u064a\u0646\u060c \u0648\u064a\u062f\u0631\u0633 \u062e\u0637\u0648\u0637 \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0648\u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u0644\u062c\u0648\u062f\u0629 \u0628\u0646\u0641\u0633\u0647.'
              : 'Before starting in Egypt, our management team spent years in Spanish, German, and Danish markets \u2014 learning the secrets of smoked fish manufacturing directly from European masters, studying production lines and quality control firsthand.'}
          </p>
          <p className="sp-origin-body">
            {ar
              ? '\u062d\u0645\u0644\u0646\u0627 \u0647\u0630\u0647 \u0627\u0644\u062e\u0628\u0631\u0629 \u0648\u0631\u062c\u0639\u0646\u0627 \u0628\u0647\u0627 \u0625\u0644\u0649 \u0645\u0635\u0631\u060c \u0648\u0628\u0646\u064a\u0646\u0627 \u0645\u0635\u0646\u0639 \u0628\u0644\u0628\u064a\u0633 \u0639\u0644\u0649 \u0646\u0641\u0633 \u0627\u0644\u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a\u0629 \u0627\u0644\u062a\u064a \u062a\u0639\u0644\u0645\u0646\u0627\u0647\u0627 \u2014 \u0644\u0643\u0646 \u0628\u0642\u0644\u0628 \u0645\u0635\u0631\u064a \u062e\u0627\u0644\u0635 \u0648\u0631\u063a\u0628\u0629 \u062d\u0642\u064a\u0642\u064a\u0629 \u0641\u064a \u0625\u0633\u0639\u0627\u062f \u0627\u0644\u0645\u0633\u062a\u0647\u0644\u0643 \u0627\u0644\u0645\u0635\u0631\u064a.'
              : 'We carried this expertise back to Egypt and built the Belbeis facility to the same European standards we had mastered \u2014 but with a genuinely Egyptian heart and a real desire to delight Egyptian consumers.'}
          </p>
          <div className="sp-origin-highlight">
            <span className="sp-origin-highlight-bar" />
            <p>
              {ar
                ? '\u201c\u0627\u0644\u0647\u062f\u0641 \u0644\u0645 \u064a\u0643\u0646 \u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0645\u0646\u062a\u062c \u2014 \u0628\u0644 \u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0645\u0639\u064a\u0627\u0631 \u0635\u0646\u0627\u0639\u064a \u0643\u0627\u0645\u0644.\u201d'
                : '"The goal was never to import a product \u2014 but to import an entire manufacturing standard."'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE CRAFT — DARK SECTION */}
      <section className="sp-craft">
        <div className="sp-craft-bg" style={{ backgroundImage: `url(${imgFactory})` }} />
        <div className="sp-craft-inner">
          <div className="sp-craft-header sp-reveal">
            <span className="sp-eyebrow-light">{ar ? '\u0641\u0646 \u0627\u0644\u0635\u0646\u0627\u0639\u0629' : 'THE CRAFT'}</span>
            <h2 className="sp-craft-title">
              {ar ? '\u062b\u0644\u0627\u062b \u062e\u0637\u0648\u0627\u062a \u062a\u0635\u0646\u0639 \u0627\u0644\u0641\u0631\u0642' : 'Three Steps That Make the Difference'}
            </h2>
            <div className="sp-craft-rule" />
          </div>
          <div className="sp-craft-steps sp-reveal">
            <div className="sp-craft-step">
              <div className="sp-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="sp-step-num">01</span>
              <h3 className="sp-step-title">{ar ? '\u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u0648\u0627\u0644\u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0627\u0644\u0645\u0628\u0627\u0634\u0631' : 'Direct Source Selection'}</h3>
              <p className="sp-step-desc">
                {ar
                  ? '\u0646\u0632\u0648\u0631 \u0645\u0648\u0627\u0633\u0645 \u0627\u0644\u0635\u064a\u062f \u0641\u064a \u0627\u0644\u0646\u0631\u0648\u064a\u062c \u0648\u0623\u064a\u0633\u0644\u0646\u062f\u0627 \u0648\u062c\u0632\u0631 \u0641\u0627\u0631\u0648 \u0644\u0627\u062e\u062a\u064a\u0627\u0631 \u0623\u0641\u0636\u0644 \u062e\u0627\u0645 \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0627\u0644\u0645\u0635\u064a\u062f.'
                  : 'We visit fishing seasons in Norway, Iceland and Faroe Islands to select the finest catch directly at source.'}
              </p>
            </div>
            <div className="sp-craft-step">
              <div className="sp-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="sp-step-num">02</span>
              <h3 className="sp-step-title">{ar ? '\u0627\u0644\u062a\u0645\u0644\u064a\u062d \u0648\u0627\u0644\u062a\u062f\u062e\u064a\u0646 \u0628\u062e\u0634\u0628 \u0627\u0644\u0632\u0627\u0646' : 'Cure & Beechwood Smoke'}</h3>
              <p className="sp-step-desc">
                {ar
                  ? '\u062a\u0645\u0644\u064a\u062d \u062e\u0641\u064a\u0641 \u0628\u0645\u0644\u062d \u0627\u0644\u0628\u062d\u0631 \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u060c \u062b\u0645 \u062a\u062f\u062e\u064a\u0646 \u0628\u0637\u064a\u0621 \u0641\u064a \u0623\u0641\u0631\u0627\u0646 \u0631\u0642\u0645\u064a\u0629 \u0645\u063a\u0644\u0642\u0629 \u0628\u062e\u0634\u0628 \u0627\u0644\u0632\u0627\u0646 \u0627\u0644\u0637\u0628\u064a\u0639\u064a \u0641\u0642\u0637.'
                  : 'Light curing with natural sea salt, then slow smoking in sealed digital kilns using only natural beechwood.'}
              </p>
            </div>
            <div className="sp-craft-step">
              <div className="sp-step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <span className="sp-step-num">03</span>
              <h3 className="sp-step-title">{ar ? '\u0627\u0644\u062a\u063a\u0644\u064a\u0641 \u0648\u0627\u0644\u0631\u0642\u0627\u0628\u0629 \u0627\u0644\u0645\u0639\u062a\u0645\u062f\u0629' : 'Certified Sealing & QC'}</h3>
              <p className="sp-step-desc">
                {ar
                  ? '\u062a\u063a\u0644\u064a\u0641 \u0645\u062d\u0643\u0645 \u0641\u064a \u0638\u0631\u0648\u0641 \u0645\u0639\u0642\u0645\u0629 \u0648\u0641\u0642 \u0634\u0647\u0627\u062f\u0627\u062a ISO 22000 \u0648HACCP\u060c \u0648\u0641\u062d\u0635 \u0639\u064a\u0646\u0627\u062a \u0645\u0633\u062a\u0642\u0644 \u0644\u0643\u0644 \u062f\u0641\u0639\u0629 \u0625\u0646\u062a\u0627\u062c.'
                  : 'Airtight packaging under sterile ISO 22000 & HACCP-certified conditions, with independent sample testing for every production batch.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. INTERACTIVE BEFORE & AFTER TRANSFORMATION */}
      <SmokingProcessSection />

      {/* 5. LEGACY TIMELINE */}
      <section className="story-timeline-sec sp-reveal" style={{ backgroundColor: 'var(--color-white)', padding: '100px 8% 120px', borderBottom: '1px solid rgba(32, 95, 166, 0.12)' }}>
        <div className="container">
          <div className="timeline-header" style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span className="collection-kick">{ar ? '\u0627\u0644\u0645\u0633\u064a\u0631\u0629 \u0627\u0644\u062a\u0627\u0631\u064a\u062e\u064a\u0629' : 'THE LEGACY TIMELINE'}</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: 'var(--color-text-ink)', marginTop: '8px', fontWeight: 400 }}>
              {ar ? '\u0631\u062d\u0644\u0629 \u0627\u0644\u0628\u0646\u0627\u0621 \u062e\u0637\u0648\u0629 \u0628\u062e\u0637\u0648\u0629' : 'A Chronicle of Craft & Growth'}
            </h2>
            <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--color-primary)', margin: '20px auto 0', opacity: 0.4 }} />
          </div>
          <div className="timeline-axis-wrapper">
            <div className="timeline-row">
              <div className="timeline-card">
                <span className="timeline-year-badge">2019</span>
                <h4>{ar ? 'التأسيس ونقل الخبرة الأوروبية' : 'The Inception & Tech Transfer'}</h4>
                <p>
                  {ar
                    ? 'بدأت مسيرة جولدن فودز في مصر بعد سنوات من الخبرة في أسواق ألمانيا وإسبانيا والدنمارك، بهدف تطبيق أرقى معايير تصنيع الأسماك المدخنة محلياً.'
                    : 'The journey began by transferring deep manufacturing expertise from Spain, Germany, and Denmark to establish a premium local processing standard.'}
                </p>
              </div>
            </div>
            <div className="timeline-row right-aligned">
              <div className="timeline-card">
                <span className="timeline-year-badge">2021</span>
                <h4>{ar ? 'تأسيس مصنع بلبيس المتطور' : 'The Belbeis Production Fortress'}</h4>
                <p>
                  {ar
                    ? 'افتتاح مصنعنا الرئيسي ببلبيس الشرقية وتجهيزه بأحدث أفران التدخين الرقمية المغلقة للامتثال لشهادات سلامة الغذاء العالمية.'
                    : 'Opening of our specialized Belbeis facility with sealed computer-monitored smoking chambers to meet global ISO standards.'}
                </p>
              </div>
            </div>
            <div className="timeline-row">
              <div className="timeline-card">
                <span className="timeline-year-badge">2023</span>
                <h4>{ar ? 'إطلاق علامة سيد البلد' : 'Launching "Seed El-Balad"'}</h4>
                <p>
                  {ar
                    ? 'إطلاق العلامة التجارية لتمثل معيار الجودة للرنجة المدخنة وبطارخ الرنجة الفاخر، وتوسيع الشراكة مع كبرى سلاسل السوبرماركت والفنادق.'
                    : 'Official launch of the consumer brand as the quality benchmark for premium smoked herring, expanding into luxury retail and hotel chains.'}
                </p>
              </div>
            </div>
            <div className="timeline-row right-aligned">
              <div className="timeline-card">
                <span className="timeline-year-badge">2026</span>
                <h4>{ar ? 'الريادة والانتشار القومي' : 'Market Leadership & National Expansion'}</h4>
                <p>
                  {ar
                    ? 'تغطية واسعة لكافة المحافظات المصرية عبر أسطول توزيع مبرد متطور، وتعزيز موقعنا كعلامة الجودة الأولى في فئتنا.'
                    : 'Nationwide coverage through an advanced refrigerated distribution fleet, cementing our position as the leading quality brand in our category.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SOURCING */}
      <section className="sp-sourcing sp-reveal">
        <div className="container">
          <div className="sp-sourcing-header">
            <span className="sp-section-tag">{ar ? 'الجودة تبدأ من البحر' : 'QUALITY STARTS AT SEA'}</span>
            <div className="sp-navy-rule" />
            <h2 className="sp-sourcing-title">
              {ar ? 'نسافر لنختار الأفضل بأنفسنا' : 'We Travel to Source the Best Ourselves'}
            </h2>
            <p className="sp-sourcing-desc">
              {ar
                ? 'يسافر فريق الإدارة ومندوبو الجودة إلى أشهر مناطق صيد الهارينج في العالم لاختيار الخام مباشرة من المصدر، والتأكد من مطابقة كل شحنة لمعاييرنا الصارمة.'
                : 'Our management and quality teams travel to the world\'s leading herring fishing zones to select raw materials at source and verify every shipment meets our strict standards.'}
            </p>
          </div>
          <div className="sp-origin-cards">
            {origins.map((o, i) => (
              <div key={i} className="sp-origin-card">
                <span className="sp-origin-flag">{o.code}</span>
                <h4 className="sp-origin-country">{o.country}</h4>
                <span className="sp-origin-catch">{o.catch}</span>
                <p className="sp-origin-fact">{o.fact}</p>
              </div>
            ))}
          </div>
          <div className="sp-criteria-block">
            <h3 className="sp-criteria-title">
              {ar ? '\u0645\u0639\u0627\u064a\u064a\u0631 \u062a\u0642\u064a\u064a\u0645 \u0643\u0644 \u0634\u062d\u0646\u0629:' : 'Shipment Evaluation Criteria:'}
            </h3>
            <div className="sp-criteria-grid">
              {criteria.map((c, i) => (
                <div key={i} className="sp-criteria-item">
                  <span className="sp-criteria-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. VALUES & PHILOSOPHY */}
      <section className="sp-values sp-reveal">
        <div className="container">
          <div className="sp-values-header">
            <span className="sp-section-tag">{ar ? '\u0631\u0643\u0627\u0626\u0632\u0646\u0627 \u0627\u0644\u0631\u0627\u0633\u062e\u0629' : 'OUR PILLARS'}</span>
            <div className="sp-navy-rule" />
            <h2 className="sp-values-title">
              {ar ? '\u0627\u0644\u0642\u064a\u0645 \u0627\u0644\u062a\u064a \u062a\u062d\u0631\u0643 \u0643\u0644 \u0642\u0631\u0627\u0631' : 'The Values That Drive Every Decision'}
            </h2>
          </div>
          <div className="sp-values-grid">
            <div className="sp-value-card">
              <div className="sp-value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <span className="sp-value-num">01</span>
              <h3 className="sp-value-title">{ar ? '\u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645 \u0648\u0627\u0644\u0634\u0641\u0627\u0641\u064a\u0629' : 'Unyielding Integrity'}</h3>
              <p className="sp-value-body">
                {ar
                  ? '\u0645\u0646 \u0646\u0642\u0637\u0629 \u0627\u0644\u0627\u0635\u0637\u064a\u0627\u062f \u0625\u0644\u0649 \u0627\u0644\u062a\u063a\u0644\u064a\u0641 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u2014 \u0646\u0637\u0628\u0642 \u0645\u0639\u0627\u064a\u064a\u0631 \u0631\u0642\u0627\u0628\u0629 \u0635\u0627\u0631\u0645\u0629 \u0648\u0646\u0648\u062b\u0642 \u0643\u0644 \u062e\u0637\u0648\u0629 \u0628\u0634\u0641\u0627\u0641\u064a\u0629 \u0643\u0627\u0645\u0644\u0629.'
                  : 'From fishing coordinates to final packaging \u2014 we apply rigorous quality controls and document every step transparently.'}
              </p>
            </div>
            <div className="sp-value-card">
              <div className="sp-value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
                </svg>
              </div>
              <span className="sp-value-num">02</span>
              <h3 className="sp-value-title">{ar ? '\u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a\u0629' : 'European Craft Technology'}</h3>
              <p className="sp-value-body">
                {ar
                  ? '\u0623\u0641\u0631\u0627\u0646 \u062a\u062f\u062e\u064a\u0646 \u0631\u0642\u0645\u064a\u0629 \u0645\u063a\u0644\u0642\u0629 \u0628\u062e\u0634\u0628 \u0627\u0644\u0632\u0627\u0646 \u062a\u0636\u0645\u0646 \u062b\u0628\u0627\u062a \u0627\u0644\u0645\u0630\u0627\u0642 \u0648\u0627\u0644\u062c\u0648\u062f\u0629 \u0641\u064a \u0643\u0644 \u062f\u0641\u0639\u0629 \u0625\u0646\u062a\u0627\u062c \u0628\u0639\u064a\u062f\u0627\u064b \u0639\u0646 \u0627\u0644\u062a\u062f\u062e\u064a\u0646 \u0627\u0644\u062a\u0642\u0644\u064a\u062f\u064a.'
                  : 'Sealed digital smoking chambers fueled by natural beechwood ensure consistent flavor and quality in every batch, far beyond traditional smoking methods.'}
              </p>
            </div>
            <div className="sp-value-card">
              <div className="sp-value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <span className="sp-value-num">03</span>
              <h3 className="sp-value-title">{ar ? '\u0625\u0633\u0639\u0627\u062f \u0627\u0644\u0645\u0633\u062a\u0647\u0644\u0643' : 'Consumer Obsession'}</h3>
              <p className="sp-value-body">
                {ar
                  ? '\u0631\u0646\u062c\u0629 \u0642\u0644\u064a\u0644\u0629 \u0627\u0644\u0645\u0644\u062d\u060c \u0630\u0627\u062a \u0645\u0644\u0645\u0633 \u0645\u062a\u0645\u0627\u0633\u0643\u060c \u062e\u0627\u0644\u064a\u0629 \u0645\u0646 \u0627\u0644\u062a\u0632\u0631\u064a\u0639 \u2014 \u0645\u0646\u062a\u062c \u064a\u0644\u0628\u064a \u062a\u0648\u0642\u0639\u0627\u062a \u0627\u0644\u0623\u0633\u0631\u0629 \u0627\u0644\u0645\u0635\u0631\u064a\u0629 \u0628\u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u062c\u0648\u062f\u0629 \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a\u0629.'
                  : 'Low-sodium herring with firm texture and zero defects \u2014 a product that meets Egyptian family expectations with European quality benchmarks.'}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurStoryPage;
