import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { ProductHelper } from '../../helpers/ProductHelper';
import '../../css/products.css';

interface CollectionPageProps {
  onSelectProduct: (id: string) => void;
  initialCategory?: string;
  searchQuery?: string;
  onClearSearch?: () => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({ 
  onSelectProduct, 
  initialCategory = 'all',
  searchQuery = '',
  onClearSearch
}) => {
  const { t, language } = useTranslation();
  const products = ProductHelper.getAll();
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    setActiveCategory(initialCategory);
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [initialCategory]);

  const categories = [
    { id: 'all', label: { ar: 'الكل', en: 'All' } },
    { id: 'smoked-herring', label: { ar: 'الرنجة المدخنة', en: 'Smoked Herring' } },
    { id: 'premium-fillet', label: { ar: 'شرائح الفيليه', en: 'Premium Fillet' } },
    { id: 'spreads-paste', label: { ar: 'المعجون والمتبل', en: 'Spreads & Paste' } },
    { id: 'canned-herring', label: { ar: 'المعلبات سهلة الفتح', en: 'Canned Herring' } }
  ];

  const handleCategoryChange = (catId: string) => {
    if (catId === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(catId);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 250);
  };

  // Filter products based on active tab and text search query
  const filteredProducts = products.filter((p) => {
    // 1. Filter by category
    let matchesCategory = true;
    if (activeCategory !== 'all') {
      const prodCat = p.category.en.toLowerCase();
      if (activeCategory === 'smoked-herring') {
        matchesCategory = prodCat.includes('smoked herring');
      } else if (activeCategory === 'premium-fillet') {
        matchesCategory = prodCat.includes('premium fillet') || prodCat.includes('fillet');
      } else if (activeCategory === 'spreads-paste') {
        matchesCategory = prodCat.includes('spreads') || prodCat.includes('paste');
      } else if (activeCategory === 'canned-herring') {
        matchesCategory = prodCat.includes('canned') || prodCat.includes('معلبات');
      }
    }
    
    // 2. Filter by search input query
    let matchesSearch = true;
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      const name = (language === 'ar' ? p.title.ar : p.title.en).toLowerCase();
      const desc = (language === 'ar' ? p.desc.ar : p.desc.en).toLowerCase();
      const category = (language === 'ar' ? p.category.ar : p.category.en).toLowerCase();
      
      matchesSearch = name.includes(q) || desc.includes(q) || category.includes(q);
    }
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="collection-page-view" style={{ paddingTop: '80px', backgroundColor: 'transparent', minHeight: '100vh' }}>
      <section className="collection-section">
        <div className="container">
          {/* Header Title */}
          <div className="collection-kick reveal active">{t('collection.kick')}</div>
          
          <div className="divider-ornament reveal active" aria-hidden="true">
            <span className="line-left"></span>
            <span className="diamond"></span>
            <span className="line-right"></span>
          </div>

          <h2 className="reveal active" style={{ marginBottom: '16px' }}>
            {language === 'ar' ? 'تشكيلة منتجات سيد البلد الفاخرة' : 'Our Premium Seafood Collection'}
          </h2>
          
          <p className="collection-sub reveal active" style={{ maxWidth: '640px', margin: '0 auto' }}>
            {language === 'ar' 
              ? 'تصفح باقة مختارة من أرقى المأكولات البحرية المصنعة محلياً بأعلى مواصفات الجودة العالمية.' 
              : 'Browse our selected varieties of the finest hand-crafted seafood made with premium European raw materials.'}
          </p>

          {/* Categories Tabs Filter */}
          <div className="catbar reveal active">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`catbtn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {language === 'ar' ? cat.label.ar : cat.label.en}
              </button>
            ))}
          </div>

          {/* Active Search Query Bar */}
          {searchQuery && (
            <div className="search-query-bar reveal active" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              margin: '25px auto 0',
              padding: '10px 20px',
              backgroundColor: 'var(--color-primary-light)',
              border: '1px solid var(--color-border-divider)',
              maxWidth: 'fit-content',
            }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-text-ink)', fontWeight: 500 }}>
                {language === 'ar' 
                  ? `نتائج البحث عن: "${searchQuery}"` 
                  : `Search results for: "${searchQuery}"`}
              </span>
              <button 
                type="button" 
                onClick={onClearSearch}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-accent-gold-dark)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textDecoration: 'underline'
                }}
              >
                {language === 'ar' ? 'إلغاء البحث' : 'Clear'}
              </button>
            </div>
          )}

          {/* Products Grid */}
          <div className={`pgrid ${isAnimating ? 'animating' : ''}`}>
            {filteredProducts.length === 0 ? (
              <div className="no-products-found" style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '60px 20px',
                color: 'var(--color-text-ink)',
                opacity: 0.8
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" style={{ marginBottom: '15px', color: 'var(--color-accent-gold-dark)', display: 'inline-block' }}>
                  <circle cx="11" cy="11" r="7"/>
                  <path d="M20 20l-4-4M14 8L10 12M10 8l4 4"/>
                </svg>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '8px' }}>
                  {language === 'ar' ? 'لم نجد أي نتائج تطابق بحثك' : 'No Results Found'}
                </h3>
                <p style={{ fontSize: '0.92rem' }}>
                  {language === 'ar' 
                    ? 'جرب استخدام كلمات بحث أخرى أو تصفح الأقسام بالأعلى.' 
                    : 'Try using other keywords or select one of the categories above.'}
                </p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="prod"
                  onClick={() => onSelectProduct(product.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { 
                    if (e.key === 'Enter' || e.key === ' ') { 
                      e.preventDefault(); 
                      onSelectProduct(product.id); 
                    } 
                  }}
                >
                  <div 
                    className="im" 
                    style={{ backgroundImage: `url(${product.image})` }}
                    aria-label={language === 'ar' ? product.title.ar : product.title.en}
                  >
                    {/* Permanent Text Overlay directly on image */}
                    <div className="prod-info-overlay">
                      <h3 className="nm">
                        {language === 'ar' ? product.title.ar : product.title.en}
                      </h3>
                      <span className="ds">
                        {language === 'ar' ? product.category.ar : product.category.en}
                      </span>
                    </div>

                    {/* Hover CTA Button Overlay */}
                    <div className="prod-cta-overlay" aria-hidden="true">
                      <span className="prod-cta-btn">
                        {language === 'ar' ? 'تفاصيل المنتج' : 'Product Details'}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="collection-tail reveal active" style={{ marginTop: '54px', marginBottom: '20px' }}>
            {t('collection.tail')}
          </div>
        </div>
      </section>
    </div>
  );
};
export default CollectionPage;
