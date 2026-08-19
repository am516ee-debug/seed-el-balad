import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import '../../css/shared.css';

interface CookieConsentProps {
  onOpenPrivacy: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenPrivacy }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage for consent
    const consent = localStorage.getItem('cookie-consent-accepted');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // delay showing slightly for a premium feel
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-consent-bar" role="dialog" aria-label="Cookie Consent">
      <div className="cookie-text">
        <p>{t('cookies.text')}</p>
      </div>
      <div className="cookie-actions">
        <button type="button" className="btn-secondary" onClick={onOpenPrivacy}>
          {t('cookies.privacy')}
        </button>
        <button type="button" className="btn-primary" onClick={handleAccept}>
          {t('cookies.accept')}
        </button>
      </div>
    </div>
  );
};
export default CookieConsent;
