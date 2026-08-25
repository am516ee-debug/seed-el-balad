import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  schema?: Record<string, any>;
  lang?: 'ar' | 'en';
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonicalUrl = 'https://seed-elbalad.com/',
  ogImage = 'https://seed-elbalad.com/images/og-home.jpg',
  ogType = 'website',
  schema,
  lang = 'ar',
}: SEOProps) => {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = `${title} | Seed El-balad - سيد البلد`;
    document.title = fullTitle;

    // 2. Update HTML Lang & Dir
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // 3. Helper to create or update meta tags
    const setMetaTag = (attrName: 'name' | 'property', attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // OpenGraph Meta Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', title);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'Seed El-balad - سيد البلد');
    setMetaTag('property', 'og:locale', lang === 'ar' ? 'ar_EG' : 'en_US');
    setMetaTag('property', 'og:locale:alternate', lang === 'ar' ? 'en_US' : 'ar_EG');

    // Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:image:alt', title);
    setMetaTag('name', 'twitter:url', canonicalUrl);

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // hreflang Alternate Links
    const setHreflang = (hreflang: string, href: string) => {
      let el = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`) as HTMLLinkElement;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'alternate');
        el.setAttribute('hreflang', hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Build ar/en alternate URLs from canonical
    const canonicalBase = canonicalUrl.split('?')[0];
    setHreflang('ar', canonicalBase);
    setHreflang('en', `${canonicalBase}?lang=en`);
    setHreflang('x-default', canonicalBase);

    // JSON-LD Structured Data Schema
    let schemaScript = document.getElementById('dynamic-seo-schema') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-seo-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    if (schema) {
      schemaScript.textContent = JSON.stringify(schema, null, 2);
    } else {
      // Default Organization Schema
      const defaultSchema = {
        '@context': 'https://schema.org',
        '@type': 'FoodEstablishment',
        name: 'Gold Foods - Seed El-balad',
        image: ogImage,
        '@id': 'https://seed-elbalad.com/#organization',
        url: 'https://seed-elbalad.com/',
        telephone: '+201032033302',
        email: 'Ceo@gf-egypt.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'مصنع شركة جولد فودز للصناعات الغذائية، بلبيس',
          addressLocality: 'بلبيس',
          addressRegion: 'الشرقية',
          postalCode: '7050301',
          addressCountry: 'EG',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 30.4192,
          longitude: 31.5647,
        },
        hasMap: 'https://maps.app.goo.gl/4XrjBhoWF4qXuxzGA',
        sameAs: [
          'https://www.facebook.com/seedelbalad',
          'https://www.instagram.com/seedelbalad',
        ],
      };
      schemaScript.textContent = JSON.stringify(defaultSchema, null, 2);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schema, lang]);
};

export default useSEO;
