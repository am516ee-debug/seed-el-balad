import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { ProductHelper } from '../../helpers/ProductHelper';
import '../../css/products.css';

interface CollectionPedestalProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CollectionPedestal: React.FC<CollectionPedestalProps> = ({ onSelectCategory }) => {
  const { t, language } = useTranslation();
  const products = ProductHelper.getAll();

  const getCategoryFilterKey = (catEn: string): string => {
    switch (catEn) {
      case 'Packaged Herring':
        return 'packaged-herring';
      case 'Premium Fillet':
        return 'premium-fillet';
      case 'Gourmet Roe':
        return 'gourmet-roe';
      case 'Canned Seafood':
        return 'canned-herring';
      case 'Gifts & Packaging':
        return 'gifts';
      default:
        return 'all';
    }
  };

  return (
    <section className="pedestal-section" id="pedestal-section">
      <div className="container">
        {/* Section Header */}
        <div className="collection-kick reveal">
          {t('collection.kick')}
        </div>

        <div className="divider-ornament reveal" aria-hidden="true">
          <span className="line-left"></span>
          <span className="diamond"></span>
          <span className="line-right"></span>
        </div>

        <h2 className="reveal">
          {t('collection.title')}
        </h2>
        
        <p className="cs-sub reveal">
          {language === 'ar' ? 'صُنعت بالشغف، وهُذبت بالخبرة الطويلة للدار' : 'CRAFTED WITH PASSION, REFINED BY HERITAGE'}
        </p>

        {/* Categories Showcase Row */}
        <div className="cs-row">
          {products.map((product) => {
            const filterKey = getCategoryFilterKey(product.category.en);
            const altText = product.seo?.altText?.[language] || (language === 'ar' ? product.title.ar : product.title.en);
            return (
              <div 
                key={product.id} 
                className="prod reveal"
                onClick={() => onSelectCategory(filterKey)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { 
                  if (e.key === 'Enter' || e.key === ' ') { 
                    e.preventDefault(); 
                    onSelectCategory(filterKey); 
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
                      {language === 'ar' ? 'اكتشف التشكيلة' : 'Discover'}
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
          })}
        </div>

        {/* Tail Message & Full Catalogue Exploration Link */}
        <div className="cs-tail reveal" style={{ marginTop: '54px' }}>
          <p style={{ margin: '0 0 20px', fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-primary)' }}>
            {t('collection.tail')}
          </p>
          <button 
            type="button" 
            className="btn-gold-explore"
            onClick={() => onSelectCategory('all')}
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 34px',
              backgroundColor: 'var(--color-accent-gold)',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: '0',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: language === 'ar' ? '0' : '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(185, 150, 83, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent-gold-dark)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(185, 150, 83, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent-gold)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(185, 150, 83, 0.3)';
            }}
          >
            <span>{language === 'ar' ? 'استعراض كل المنتجات' : 'View Full Catalogue'}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
export default CollectionPedestal;
