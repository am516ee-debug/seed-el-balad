import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductModal from '../Shared/ProductModal';
import PrivacyModal from '../Shared/PrivacyModal';
import PdfModal from '../Shared/PdfModal';
import CookieConsent from '../Shared/CookieConsent';
import Home from '../Views/Home';
import CollectionPage from '../Views/CollectionPage';
import OurStoryPage from '../Views/OurStoryPage';
import LocationsPage from '../Views/LocationsPage';
import WhyUsPage from '../Views/WhyUsPage';
import ContactPage from '../Views/ContactPage';
import PrivacyPolicyPage from '../Views/PrivacyPolicyPage';
import WholesaleCta from '../Sections/WholesaleCta';
import { useTranslation } from '../../hooks/useTranslation';
import useSEO from '../../hooks/useSEO';
import { ProductHelper } from '../../helpers/ProductHelper';

export const Layout: React.FC = () => {
  const { language } = useTranslation();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  
  const [selectedPdfUrl, setSelectedPdfUrl] = useState<string | null>(null);
  const [selectedPdfTitle, setSelectedPdfTitle] = useState<string | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const [currentView, setCurrentView] = useState<'home' | 'collection' | 'story' | 'locations' | 'why-us' | 'contact' | 'privacy-policy'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sync initial URL on mount and handle back/forward browser buttons
  const parsePathname = useCallback(() => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    if (!path || path === '') {
      setCurrentView('home');
      setSelectedProductId(null);
      setIsProductModalOpen(false);
    } else if (path.startsWith('product/')) {
      const prodId = path.split('/')[1];
      if (prodId && ProductHelper.getById(prodId)) {
        setSelectedProductId(prodId);
        setIsProductModalOpen(true);
        setCurrentView('collection');
      }
    } else if (path === 'collection') {
      setCurrentView('collection');
      setSelectedProductId(null);
      setIsProductModalOpen(false);
    } else if (path === 'story') {
      setCurrentView('story');
      setSelectedProductId(null);
      setIsProductModalOpen(false);
    } else if (path === 'why-us') {
      setCurrentView('why-us');
      setSelectedProductId(null);
      setIsProductModalOpen(false);
    } else if (path === 'locations') {
      setCurrentView('locations');
      setSelectedProductId(null);
      setIsProductModalOpen(false);
    } else if (path === 'contact') {
      setCurrentView('contact');
      setSelectedProductId(null);
      setIsProductModalOpen(false);
    } else if (path === 'privacy-policy' || path === 'privacy') {
      setCurrentView('privacy-policy');
      setSelectedProductId(null);
      setIsProductModalOpen(false);
    }
  }, []);

  useEffect(() => {
    parsePathname();
    window.addEventListener('popstate', parsePathname);
    return () => window.removeEventListener('popstate', parsePathname);
  }, [parsePathname]);

  // General SEO for Page Views (ProductModal overrides when open)
  const pageSEOData = {
    home: {
      title: language === 'ar' ? 'الرئيسية | رنجة وأسماك مدخنة فاخرة' : 'Home | Premium Smoked Herring & Seafood',
      desc: language === 'ar' ? 'سيد البلد من جولد فودز: رنجة هولندية ونرويجية فاخرة مدخنة بخشب الزان، فسيخ بوري بلدي، وبطارخ خرز بأعلى معايير الجودة ISO 22000.' : 'Seed El-Balad by Gold Foods: Premium Dutch & Norwegian beechwood-smoked herring, mullet feseekh, and gourmet roe.',
      path: ''
    },
    collection: {
      title: language === 'ar' ? 'تشكيلة المنتجات الفاخرة | رنجة وفسيخ وبطارخ' : 'Our Collection | Smoked Herring & Gourmet Roe',
      desc: language === 'ar' ? 'استكشف قائمة منتجات سيد البلد: رنجة هولندي، نرويجي، أيسلندي، روسي، فسيخ بلدي فاكيوم، ماكريل مدخن، وعلب رنجة بزيت الزيتون.' : 'Explore Seed El-Balad collection: Dutch, Norwegian, Icelandic smoked herring, mullet feseekh, mackerel, and caviar roe.',
      path: 'collection'
    },
    story: {
      title: language === 'ar' ? 'قصتنا وتراثنا | من بحر الشمال إلى بلبيس' : 'Our Story & Legacy | From North Sea to Egypt',
      desc: language === 'ar' ? 'تعرف على قصة تأسيس سيد البلد ورحلة استيراد وتصنيع أرقى الأسماك المدخنة الهولندية والنرويجية في مصنعنا الحديث ببلبيس.' : 'Discover the story behind Seed El-Balad and our journey of sourcing and smoking premium European seafood in Egypt.',
      path: 'story'
    },
    'why-us': {
      title: language === 'ar' ? 'لماذا تختارنا | معايير الجودة والأيزو' : 'Why Choose Us | ISO 22000 Quality Standards',
      desc: language === 'ar' ? 'اكتشف سر تميز سيد البلد: تدخين طبيعي بخلاصة خشب الزان، تمليح خفيف، تغليف فاكيوم بدون روائح، وشهادات الأيزو ISO 22000.' : 'Why Seed El-Balad is Egypt\'s most trusted smoked seafood: 100% natural beechwood smoking, low sodium cure, and ISO 22000 hygiene.',
      path: 'why-us'
    },
    locations: {
      title: language === 'ar' ? 'مواقعنا وتغطيتنا | مصنع بلبيس وشبكة التوزيع' : 'Locations & Factory | Bilbeis & Nationwide Distribution',
      desc: language === 'ar' ? 'مقر مصنع شركة جولد فودز ببلبيس الشرقية وشبكة توزيع منتجات سيد البلد للمطاعم وتجار الجملة والتجزئة في كافة المحافظات.' : 'Gold Foods manufacturing facility in Bilbeis, Sharqia, and nationwide distribution network across Egypt.',
      path: 'locations'
    },
    contact: {
      title: language === 'ar' ? 'تواصل معنا | طلبات الجملة والتوزيع' : 'Contact Us | Wholesale & Distribution Orders',
      desc: language === 'ar' ? 'تواصل مع إدارة مبيعات وتصدير سيد البلد وجولد فودز لطلبات التوريد، التوزيع، والضيافة في مصر والشرق الأوسط.' : 'Contact Seed El-Balad & Gold Foods for wholesale, catering, and export inquiries across Egypt and the Middle East.',
      path: 'contact'
    },
    'privacy-policy': {
      title: language === 'ar' ? 'سياسة الخصوصية | Seed El Balad | Gold Foods' : 'Privacy Policy | Seed El-balad | Gold Foods',
      desc: language === 'ar' ? 'تعرف على كيفية جمع واستخدام وحماية بياناتك الشخصية عند استخدام موقع Seed El Balad التابع لشركة Gold Foods.' : 'Learn how Seed El-balad by Gold Foods collects, uses, and protects your personal data when using our website and services.',
      path: 'privacy-policy'
    }
  };

  const currentSEO = pageSEOData[currentView];

  useSEO({
    title: currentSEO.title,
    description: currentSEO.desc,
    canonicalUrl: `https://seed-elbalad.com/${currentSEO.path}`,
    ogType: 'website',
    lang: language
  });

  const handleSelectProduct = (id: string) => {
    setSelectedProductId(id);
    setIsProductModalOpen(true);
    window.history.pushState({}, '', `/product/${id}`);
  };

  const handleCloseProductModal = () => {
    setSelectedProductId(null);
    setIsProductModalOpen(false);
    const targetPath = currentView === 'home' ? '/' : `/${currentView}`;
    window.history.pushState({}, '', targetPath);
  };

  const handleViewPdf = (url: string, title: string) => {
    setSelectedPdfUrl(url);
    setSelectedPdfTitle(title);
    setIsPdfModalOpen(true);
  };

  const handleClosePdfModal = () => {
    setSelectedPdfUrl(null);
    setSelectedPdfTitle(null);
    setIsPdfModalOpen(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory('all');
    setCurrentView('collection');
    window.history.pushState({}, '', '/collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view: 'home' | 'collection' | 'story' | 'locations' | 'why-us' | 'contact' | 'privacy-policy', sectionId?: string) => {
    setCurrentView(view);
    setSearchQuery('');
    const targetPath = view === 'home' ? '/' : `/${view}`;
    window.history.pushState({}, '', targetPath);

    if (view === 'home') {
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (view === 'collection') {
      if (!sectionId) {
        setSelectedCategory('all');
      } else {
        setSelectedCategory(sectionId);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery('');
    setCurrentView('collection');
    window.history.pushState({}, '', '/collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      {/* Skip to Main Content for Accessibility */}
      <a className="skip-link" href="#main-content">Skip to main content</a>
      
      {/* Navigation Header */}
      <Header currentView={currentView} onNavigate={handleNavigate} onSearch={handleSearch} />

      {/* Main Page Area */}
      <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        {currentView === 'home' && (
          <Home 
            onViewPdf={handleViewPdf}
            onSelectCategory={handleSelectCategory}
            onNavigate={handleNavigate}
          />
        )}
        {currentView === 'collection' && (
          <CollectionPage 
            onSelectProduct={handleSelectProduct} 
            initialCategory={selectedCategory}
            searchQuery={searchQuery}
            onClearSearch={() => setSearchQuery('')}
          />
        )}
        {currentView === 'story' && (
          <OurStoryPage onViewPdf={handleViewPdf} />
        )}
        {currentView === 'why-us' && (
          <WhyUsPage onViewPdf={handleViewPdf} />
        )}
        {currentView === 'locations' && (
          <LocationsPage />
        )}
        {currentView === 'contact' && (
          <ContactPage />
        )}
        {currentView === 'privacy-policy' && (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer CTA Banner (Shown on all pages except Contact and Privacy Policy) */}
      {currentView !== 'contact' && currentView !== 'privacy-policy' && (
        <WholesaleCta 
          onExploreClick={currentView !== 'collection' ? () => handleNavigate('collection') : undefined} 
        />
      )}

      {/* Footer */}
      <Footer onOpenPrivacy={() => setIsPrivacyModalOpen(true)} onNavigate={handleNavigate} />

      {/* Product Information Overlay with Dedicated URL */}
      <ProductModal 
        productId={selectedProductId}
        isOpen={isProductModalOpen}
        onClose={handleCloseProductModal}
      />

      {/* Privacy Policy and Cookies Overlay */}
      <PrivacyModal 
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Quality Certificate Lightbox Overlay */}
      <PdfModal 
        pdfUrl={selectedPdfUrl}
        pdfTitle={selectedPdfTitle}
        isOpen={isPdfModalOpen}
        onClose={handleClosePdfModal}
      />

      {/* Cookie Consent Toast */}
      <CookieConsent onOpenPrivacy={() => setIsPrivacyModalOpen(true)} />
    </div>
  );
};

export default Layout;
