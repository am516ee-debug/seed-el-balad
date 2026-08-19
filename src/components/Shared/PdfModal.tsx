import React from 'react';
import '../../css/shared.css';

interface PdfModalProps {
  pdfUrl: string | null;
  pdfTitle: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ pdfUrl, pdfTitle, isOpen, onClose }) => {
  if (!isOpen || !pdfUrl) {
    return null;
  }

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const isImage = pdfUrl.endsWith('.png') || pdfUrl.endsWith('.jpg') || pdfUrl.endsWith('.jpeg');

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="pdf-modal-title">
      <div className="modal-card" style={{ maxWidth: '950px', height: isImage ? 'auto' : '90vh' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 id="pdf-modal-title" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-accent-gold)' }}>
            {pdfTitle || 'Certificate Document'}
          </h3>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <div 
          className="modal-body" 
          style={{ 
            padding: isImage ? '20px' : 0, 
            height: isImage ? 'auto' : 'calc(90vh - 70px)', 
            overflow: 'auto', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: isImage ? '#f5f5f5' : 'transparent'
          }}
        >
          {isImage ? (
            <img 
              src={pdfUrl} 
              alt={pdfTitle || 'Certificate'} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '75vh', 
                objectFit: 'contain', 
                borderRadius: '4px', 
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                border: '1px solid rgba(185, 150, 83, 0.15)'
              }}
            />
          ) : (
            <iframe 
              src={`${pdfUrl}#toolbar=0`} 
              width="100%" 
              height="100%" 
              style={{ border: 'none', width: '100%', height: '100%' }}
              title={pdfTitle || 'PDF Document'}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default PdfModal;
