import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import '../../css/shared.css';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  // Prevent scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="privacy-title">
      <div className="modal-card narrow" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 id="privacy-title">{t('privacy.title')}</h3>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ fontStyle: 'italic', opacity: 0.85 }}>{t('privacy.intro')}</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-accent-gold)' }}>
              {t('privacy.section1.title')}
            </h4>
            <p style={{ fontSize: '0.88rem' }}>{t('privacy.section1.desc')}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-accent-gold)' }}>
              {t('privacy.section2.title')}
            </h4>
            <p style={{ fontSize: '0.88rem' }}>{t('privacy.section2.desc')}</p>
          </div>

          <button 
            type="button" 
            className="btn-primary" 
            onClick={onClose} 
            style={{ marginTop: '10px', width: '100%' }}
          >
            {t('privacy.close')}
          </button>
        </div>
      </div>
    </div>
  );
};
export default PrivacyModal;
