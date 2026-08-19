import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface LanguageContextType {
  language: 'ar' | 'en';
  toggleLanguage: () => void;
  isRTL: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'ar' | 'en'>(() => {
    // 1. Check URL query parameters for SEO crawling support
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'ar' || urlLang === 'en') {
        return urlLang;
      }
    }
    // 2. Fallback to localStorage
    const saved = localStorage.getItem('language');
    return (saved === 'ar' || saved === 'en') ? saved : 'ar'; // Default to Arabic
  });

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  useEffect(() => {
    localStorage.setItem('language', language);
    const isRtl = language === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    // Dynamically update SEO tags based on active language
    if (language === 'ar') {
      document.title = "رنجة سيد البلد | أرقى الأسماك المدخنة والبطارخ الذهبية في مصر";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'اكتشف منتجات رنجة سيد البلد المدخنة طبيعياً بخشب الزان. بطارخ شامبين خفيفة الملح، فيليه رنجة مخلي، معقمة بالكامل ومصنعة وفق أرقى معايير الجودة الأوربية.');
      }
    } else {
      document.title = "Seed El-blad | Premium Smoked Herring & Golden Caviar Roe";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Experience Seed El-blad premium smoked herring & golden caviar roe. Slow-smoked over natural beechwood, low-sodium, and processed under European safety protocols.');
      }
    }

    // Dynamically update Canonical URL based on active language
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      if (language === 'ar') {
        canonicalLink.setAttribute('href', 'https://seed-elbalad.com/');
      } else {
        canonicalLink.setAttribute('href', 'https://seed-elbalad.com/?lang=en');
      }
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    toggleLanguage,
    isRTL: language === 'ar',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
