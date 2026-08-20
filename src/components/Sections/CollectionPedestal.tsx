import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { ProductHelper } from '../../helpers/ProductHelper';
import '../../css/categories.css';
import '../../css/products.css';

interface CollectionPedestalProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CollectionPedestal: React.FC<CollectionPedestalProps> = ({ onSelectCategory }) => {
  const { t, language } = useTranslation();
  const products = ProductHelper.getAll();

  const getCategoryFilterKey = (categoryEn: string) => {
    const cat = categoryEn.toLowerCase();
    if (cat.includes('roe') || cat.includes('caviar')) return 'gourmet-roe';
    if (cat.includes('fillet')) return 'premium-fillet';
    if (cat.includes('canned')) return 'canned-herring';
    if (cat.includes('smoked')) return 'smoked-herring';
    return 'all';
  };

  return (
    <section className="cshow" id="products-section">
      <div className="container">
        {/* Title block */}
        <div className="cs-kick reveal">{t('collection.kick')}</div>
        
        <div className="divider-ornament reveal" aria-hidden="true">
          <span className="line-left"></span>
          <span className="diamond"></span>
          <span className="line-right"></span>
        </div>

        <h2 className="reveal">
          {language === 'ar' ? 'تشكيلة منتجات سيد البلد الفاخرة' : 'Our Premium Seafood Collection'}
        </h2>
        
        <p className="cs-sub reveal">
          {language === 'ar' ? 'صُنعت بالشغف، وهُذبت بالخبرة الطويلة للدار' : 'CRAFTED WITH PASSION, REFINED BY HERITAGE'}
        </p>

        {/* Categories Showcase Row */}
        <div className="cs-row">
          {products.map((product) => {
            const filterKey = getCategoryFilterKey(product.category.en);
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
                  <div 
                    className="im-img"
                    style={{ backgroundImage: `url(${product.image})` }}
                    role="img"
                    aria-label={language === 'ar' ? product.title.ar : product.title.en}
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


        <div className="cs-tail reveal" style={{ marginTop: '54px' }}>
          {t('collection.tail')}
        </div>

        <a 
          href="#collection" 
          className="cs-all reveal" 
          onClick={(e) => { 
            e.preventDefault(); 
            onSelectCategory('all'); 
          }}
        >
          <span>{t('collection.exploreAll')}</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Decorative Minimalist Watermarks */}
      <div className="cs-deco-elements" aria-hidden="true">
        {/* Herring Fish Watermark (Bottom Right / Bottom Left in RTL) */}
        <svg className="cs-deco-fish" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M5,20 C15,11 40,9 65,19 C75,15 85,13 90,16 L95,10 L94,30 L90,24 C85,27 75,25 65,21 C40,31 15,29 5,20 Z" />
          <circle cx="16" cy="18" r="0.8" fill="currentColor" />
          <path d="M22,14 C25,17 25,23 22,26" />
          <path d="M45,12 C48,10 52,11 54,13" />
          <path d="M48,27 C50,29 53,29 55,27" />
          <path d="M25,20 C45,20 65,20 80,19" strokeDasharray="1.5,1.5" />
        </svg>

        {/* Ocean Wave Ripple Watermark (Bottom Left / Bottom Right in RTL) */}
        <svg className="cs-deco-wave" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M5,30 Q25,10 45,30 T85,30" />
          <path d="M15,25 Q35,5 55,25 T95,25" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default CollectionPedestal;
