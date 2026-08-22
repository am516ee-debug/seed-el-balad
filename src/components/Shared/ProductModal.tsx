import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { ProductHelper } from '../../helpers/ProductHelper';
import useSEO from '../../hooks/useSEO';
import '../../css/shared.css';

interface ProductModalProps {
  productId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ productId, isOpen, onClose }) => {
  const { t, language } = useTranslation();

  const product = productId ? ProductHelper.getById(productId) : undefined;

  // Dynamic SEO & Structured Data Schema for Product
  const productSchema = product ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: language === 'ar' ? product.title.ar : product.title.en,
    image: product.image.startsWith('http') ? product.image : `https://seed-elbalad.com${product.image}`,
    description: language === 'ar' ? product.desc.ar : product.desc.en,
    brand: {
      '@type': 'Brand',
      name: 'Seed El-balad (سيد البلد)'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Gold Foods Egypt'
    },
    category: language === 'ar' ? product.category.ar : product.category.en,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EGP',
      availability: 'https://schema.org/InStock',
      url: `https://seed-elbalad.com/product/${product.id}`,
      seller: {
        '@type': 'Organization',
        name: 'Seed El-balad'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString(),
      bestRating: '5',
      reviewCount: '128'
    }
  } : undefined;

  useSEO({
    title: isOpen && product ? product.seo.metaTitle[language] : (language === 'ar' ? 'تشكيلة المأكولات البحرية الفاخرة' : 'Luxury Seafood Collection'),
    description: isOpen && product ? product.seo.metaDescription[language] : (language === 'ar' ? 'تعرف على منتجات سيد البلد من الرنجة الهولندية والنرويجية والفسيخ والبطارخ.' : 'Explore Seed El-Balad luxury smoked herring, feseekh, caviar roe, and seafood.'),
    keywords: isOpen && product ? product.seo.keywords[language] : undefined,
    canonicalUrl: product ? `https://seed-elbalad.com/product/${product.id}` : 'https://seed-elbalad.com/collection',
    ogImage: product?.image ? (product.image.startsWith('http') ? product.image : `https://seed-elbalad.com${product.image}`) : undefined,
    ogType: 'product',
    schema: productSchema,
    lang: language
  });

  if (!isOpen || !product) {
    return null;
  }

  // Prevent scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleOrder = () => {
    const text = language === 'ar' 
      ? `مرحباً جولد فودز، أريد الاستفسار عن منتج سيد البلد: ${product.title.ar} وطلب كمية توزيع / جملة منه.`
      : `Hello Gold Foods, I would like to inquire about the Seed El-balad product: ${product.title.en} for wholesale/distribution.`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/201032033302?text=${encodedText}`, '_blank');
  };

  const handleCopyLink = () => {
    const url = `https://seed-elbalad.com/product/${product.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      alert(language === 'ar' ? 'تم نسخ رابط المنتج بنجاح!' : 'Product link copied to clipboard!');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="product-detail-category">{language === 'ar' ? product.category.ar : product.category.en}</span>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={handleCopyLink} 
              title={language === 'ar' ? 'نسخ رابط المنتج' : 'Copy link'}
              aria-label="Copy product link"
              style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </button>
            <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="modal-body">
          <div className="product-detail-grid">
            {/* Image Column */}
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.seo?.altText?.[language] || (language === 'ar' ? product.title.ar : product.title.en)} 
                className="product-modal-image"
                style={{ width: '100%', borderRadius: '4px', objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
              
              {/* Nutrition Table */}
              <div className="product-detail-nutrition" style={{ marginTop: '20px' }}>
                <h4>{t('product.nutrition')}</h4>
                <table className="nutrition-table">
                  <tbody>
                    <tr>
                      <th>{t('product.nutrition.calories')}</th>
                      <td>{product.nutrition.calories}</td>
                    </tr>
                    <tr>
                      <th>{t('product.nutrition.fat')}</th>
                      <td>{product.nutrition.fat}</td>
                    </tr>
                    <tr>
                      <th>{t('product.nutrition.protein')}</th>
                      <td>{product.nutrition.protein}</td>
                    </tr>
                    <tr>
                      <th>{t('product.nutrition.salt')}</th>
                      <td>{product.nutrition.salt}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Info Column */}
            <div className="product-detail-info">
              <h3 id="product-modal-title" className="product-detail-title">
                {language === 'ar' ? product.title.ar : product.title.en}
              </h3>

              {/* Specifications Badges */}
              <div className="product-detail-specs">
                <span className="product-detail-spec-badge">
                  {language === 'ar' ? product.specs.weight.ar : product.specs.weight.en}
                </span>
                <span className="product-detail-spec-badge">
                  {language === 'ar' ? product.specs.origin.ar : product.specs.origin.en}
                </span>
                <span className="product-detail-spec-badge">
                  {language === 'ar' ? product.specs.shelfLife.ar : product.specs.shelfLife.en}
                </span>
              </div>

              {/* Description */}
              <p className="product-detail-desc" style={{ lineHeight: '1.75', fontSize: '0.92rem' }}>
                {language === 'ar' ? product.desc.ar : product.desc.en}
              </p>

              {/* Ingredients Box */}
              <div className="product-detail-ingredients-box">
                <h4>{t('product.ingredients')}</h4>
                <p>{language === 'ar' ? product.ingredients.ar : product.ingredients.en}</p>
              </div>

              {/* Key Features */}
              <ul className="product-detail-features">
                {(language === 'ar' ? product.details.ar : product.details.en).map((detail, idx) => (
                  <li key={idx}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* WhatsApp Call to Action */}
              <div className="product-detail-actions" style={{ marginTop: '16px' }}>
                <button type="button" className="btn-primary product-detail-order-btn" onClick={handleOrder}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  <span>{t('product.order')}</span>
                </button>
                <p className="psmall" style={{ marginTop: '10px', fontSize: '0.72rem', opacity: 0.7, textAlign: 'center', fontFamily: 'var(--font-sans)' }}>
                  {t('product.advisorNotice')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductModal;
