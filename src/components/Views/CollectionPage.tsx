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
    { id: 'premium-fillet', label: { ar: 'شرائح الفيليه', en: 'Smoked Fillet' } },
    { id: 'gourmet-roe', label: { ar: 'البطارخ والكافيار', en: 'Gourmet Roe' } },
    { id: 'canned-herring', label: { ar: 'المعلبات', en: 'Canned Seafood' } },
    { id: 'gifts', label: { ar: 'الهدايا والتغليف', en: 'Gifts & Packaging' } }
  ];

  const handleCategoryChange = (catId: string) => {
    if (catId === activeCategory) return;
    if (onClearSearch && searchQuery) {
      onClearSearch();
    }
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
        matchesCategory = prodCat === 'smoked herring' || prodCat.includes('smoked herring');
      } else if (activeCategory === 'premium-fillet') {
        matchesCategory = prodCat.includes('fillet') || prodCat.includes('فيليه');
      } else if (activeCategory === 'gourmet-roe') {
        matchesCategory = prodCat.includes('roe') || prodCat.includes('caviar') || prodCat.includes('بطارخ');
      } else if (activeCategory === 'canned-herring') {
        matchesCategory = prodCat.includes('canned') || prodCat.includes('معلبات');
      } else if (activeCategory === 'gifts') {
        matchesCategory = prodCat.includes('gift') || prodCat.includes('هدايا') || prodCat.includes('packaging');
      }
    }
    
    // 2. Filter by search input query (Multi-token bilingual search across all fields)
    let matchesSearch = true;
    if (searchQuery) {
      const qTokens = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
      const searchableText = [
        p.title.ar, p.title.en,
        p.desc.ar, p.desc.en,
        p.category.ar, p.category.en,
        p.ingredients?.ar || '', p.ingredients?.en || '',
        p.size?.ar || '', p.size?.en || ''
      ].join(' ').toLowerCase();

      matchesSearch = qTokens.every(token => searchableText.includes(token));
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

          {/* Active Search Query Bar with enhanced styling and generous spacing */}
          {searchQuery && (
            <div className="search-query-bar reveal active" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              margin: '32px auto 48px',
              padding: '16px 28px',
              backgroundColor: 'var(--color-bg-cream)',
              border: '1px solid rgba(185, 150, 83, 0.3)',
              boxShadow: '0 4px 20px rgba(18, 34, 46, 0.05)',
              maxWidth: '900px',
              width: '92%'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '34px', 
                  height: '34px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(185, 150, 83, 0.15)',
                  color: 'var(--color-accent-gold-dark)',
                  flexShrink: 0
                }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7"/>
                    <path d="M20 20l-4-4"/>
                  </svg>
                </span>
                <div style={{ textAlign: 'start' }}>
                  <div style={{ fontSize: '1rem', color: 'var(--color-text-ink)', fontWeight: 600 }}>
                    {language === 'ar' 
                      ? <>نتائج البحث عن: <span style={{ color: 'var(--color-accent-gold-dark)' }}>"{searchQuery}"</span></>
                      : <>Search results for: <span style={{ color: 'var(--color-accent-gold-dark)' }}>"{searchQuery}"</span></>}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    {language === 'ar' 
                      ? `تم العثور على (${filteredProducts.length}) ${filteredProducts.length === 1 ? 'منتج' : 'منتجات'}`
                      : `Found (${filteredProducts.length}) ${filteredProducts.length === 1 ? 'product' : 'products'}`}
                  </div>
                </div>
              </div>

              <button 
                type="button" 
                onClick={onClearSearch}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid rgba(185, 150, 83, 0.4)',
                  color: 'var(--color-text-ink)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 18px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  letterSpacing: language === 'ar' ? '0' : '0.04em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent-gold)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = 'var(--color-accent-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-white)';
                  e.currentTarget.style.color = 'var(--color-text-ink)';
                  e.currentTarget.style.borderColor = 'rgba(185, 150, 83, 0.4)';
                }}
              >
                <span>✕</span>
                <span>{language === 'ar' ? 'إلغاء البحث وعرض الكل' : 'Clear Search & Show All'}</span>
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
                  <div className="im">
                    <div 
                      className="im-img"
                      style={{ backgroundImage: `url(${product.image})` }}
                      role="img"
                      aria-label={language === 'ar' ? product.title.ar : product.title.en}
                    />

                    {/* Hover CTA Button Overlay */}
                    <div className="prod-cta-overlay" aria-hidden="true">
                      <span className="prod-cta-btn">
                        {language === 'ar' ? 'تفاصيل المنتج' : 'Product Details'}
                      </span>
                    </div>
                  </div>

                  {/* Clean text body below image */}
                  <div className="pbody">
                    <h3 className="nm">
                      {language === 'ar' ? product.title.ar : product.title.en}
                    </h3>
                    <span className="ds">
                      {language === 'ar' ? product.category.ar : product.category.en}
                    </span>
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
