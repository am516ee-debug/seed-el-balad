import React, { useState } from 'react';
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
import WholesaleCta from '../Sections/WholesaleCta';

export const Layout: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  
  const [selectedPdfUrl, setSelectedPdfUrl] = useState<string | null>(null);
  const [selectedPdfTitle, setSelectedPdfTitle] = useState<string | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const [currentView, setCurrentView] = useState<'home' | 'collection' | 'story' | 'locations' | 'why-us' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSelectProduct = (id: string) => {
    setSelectedProductId(id);
    setIsProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setSelectedProductId(null);
    setIsProductModalOpen(false);
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
    setSelectedCategory('all'); // Reset category selection when text searching
    setCurrentView('collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view: 'home' | 'collection' | 'story' | 'locations' | 'why-us' | 'contact', sectionId?: string) => {
    setCurrentView(view);
    setSearchQuery(''); // Clear search on direct page navigation
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
    setSearchQuery(''); // Clear search when a category banner is clicked
    setCurrentView('collection');
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
      </main>

      {/* Footer CTA Banner (Shown on all pages except Contact) */}
      {currentView !== 'contact' && (
        <WholesaleCta 
          onExploreClick={currentView !== 'collection' ? () => handleNavigate('collection') : undefined} 
        />
      )}

      {/* Footer */}
      <Footer onOpenPrivacy={() => setIsPrivacyModalOpen(true)} onNavigate={handleNavigate} />

      {/* Product Information Overlay */}
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
