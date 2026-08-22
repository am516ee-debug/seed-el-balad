import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { ProductHelper, type Product } from '../../helpers/ProductHelper';
import '../../css/products.css';

interface CollectionPageProps {
  onSelectProduct: (productId: string) => void;
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
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = [
    { id: 'all', label: { ar: 'كافة المنتجات', en: 'All Collection' } },
    { id: 'packaged-herring', label: { ar: 'رنجة مغلفة', en: 'Packaged Herring' } },
    { id: 'premium-fillet', label: { ar: 'شرائح الفيليه', en: 'Premium Fillet' } },
    { id: 'gourmet-roe', label: { ar: 'بطارخ', en: 'Gourmet Roe' } },
    { id: 'canned-herring', label: { ar: 'المعلبات سهلة الفتح', en: 'Canned Seafood' } },
    { id: 'gifts', label: { ar: 'الهدايا والتغليف', en: 'Gifts & Packaging' } }
  ];

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      const all = ProductHelper.getAll();
      let result = all;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        result = result.filter(p => 
          p.title.ar.toLowerCase().includes(query) ||
          p.title.en.toLowerCase().includes(query) ||
          p.category.ar.toLowerCase().includes(query) ||
          p.category.en.toLowerCase().includes(query) ||
          p.desc.ar.toLowerCase().includes(query) ||
          p.desc.en.toLowerCase().includes(query) ||
          (p.seo && p.seo.keywords && (p.seo.keywords.ar.toLowerCase().includes(query) || p.seo.keywords.en.toLowerCase().includes(query)))
        );
      } else if (activeCategory !== 'all') {
        result = result.filter(p => {
          if (activeCategory === 'packaged-herring') return p.category.en === 'Packaged Herring';
          if (activeCategory === 'premium-fillet') return p.category.en === 'Premium Fillet';
          if (activeCategory === 'gourmet-roe') return p.category.en === 'Gourmet Roe';
          if (activeCategory === 'canned-herring') return p.category.en === 'Canned Seafood';
          if (activeCategory === 'gifts') return p.category.en === 'Gifts & Packaging';
          return true;
        });
      }

      setFilteredProducts(result);
      setIsAnimating(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (categoryId: string) => {
    if (searchQuery && onClearSearch) {
      onClearSearch();
    }
    setActiveCategory(categoryId);
  };

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
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              margin: '32px auto 48px',
              padding: '16px 28px',
              backgroundColor: 'var(--color-bg-cream)',
              border: '1px solid rgba(185, 150, 83, 0.3)',
              boxShadow: '0 4px 20px rgba(18, 34, 46, 0.05)',
              borderRadius: '2px',
              maxWidth: '1200px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ 
                  color: 'var(--color-accent-gold)', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(185, 150, 83, 0.15)'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
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
              filteredProducts.map((product) => {
                const altText = product.seo?.altText?.[language] || (language === 'ar' ? product.title.ar : product.title.en);
                return (
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
                      <img 
                        src={product.image}
                        alt={altText}
                        className="im-img"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        loading="lazy"
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
                );
              })
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
