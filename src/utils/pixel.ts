import type { Product } from '../helpers/ProductHelper';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    ttq?: {
      page: () => void;
      track: (event: string, params?: any) => void;
      [key: string]: any;
    };
  }
}

export const PixelService = {
  // 1. PageView tracking for both Meta and TikTok
  trackPageView: () => {
    try {
      if (typeof window !== 'undefined') {
        if (window.fbq) {
          window.fbq('track', 'PageView');
        }
        if (window.ttq && typeof window.ttq.page === 'function') {
          window.ttq.page();
        }
      }
    } catch (e) {
      console.warn('Pixel tracking error (PageView):', e);
    }
  },

  // 2. ViewContent event on viewing a product
  trackViewContent: (product: Product, lang: 'ar' | 'en' = 'ar') => {
    try {
      if (typeof window !== 'undefined' && product) {
        const prodName = product.title?.[lang] || product.title?.ar || product.id;
        const prodCat = product.category?.[lang] || product.category?.ar || 'Seafood';

        // Meta Pixel ViewContent
        if (window.fbq) {
          window.fbq('track', 'ViewContent', {
            content_name: prodName,
            content_category: prodCat,
            content_ids: [product.id],
            content_type: 'product',
            currency: 'EGP'
          });
        }

        // TikTok Pixel ViewContent
        if (window.ttq && typeof window.ttq.track === 'function') {
          window.ttq.track('ViewContent', {
            contents: [{
              content_id: product.id,
              content_name: prodName,
              content_category: prodCat
            }],
            currency: 'EGP'
          });
        }
      }
    } catch (e) {
      console.warn('Pixel tracking error (ViewContent):', e);
    }
  },

  // 3. Contact event on clicking WhatsApp, Phone, or Direct Line
  trackContact: (channel: string = 'WhatsApp') => {
    try {
      if (typeof window !== 'undefined') {
        // Meta Pixel Contact
        if (window.fbq) {
          window.fbq('track', 'Contact', {
            content_name: channel,
            content_category: 'Direct Customer Outreach'
          });
        }

        // TikTok Pixel Contact
        if (window.ttq && typeof window.ttq.track === 'function') {
          window.ttq.track('Contact', {
            content_name: channel
          });
        }
      }
    } catch (e) {
      console.warn('Pixel tracking error (Contact):', e);
    }
  },

  // 4. Lead event on submitting Contact or Wholesale inquiry form
  trackLead: (formName: string = 'Contact Form') => {
    try {
      if (typeof window !== 'undefined') {
        // Meta Pixel Lead
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: formName,
            content_category: 'Customer Inquiry'
          });
        }

        // TikTok Pixel SubmitForm / Lead
        if (window.ttq && typeof window.ttq.track === 'function') {
          window.ttq.track('SubmitForm', {
            content_name: formName
          });
        }
      }
    } catch (e) {
      console.warn('Pixel tracking error (Lead):', e);
    }
  }
};
