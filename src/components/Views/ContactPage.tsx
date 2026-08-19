import React, { useEffect } from 'react';
import ContactSection from '../Sections/ContactSection';
import StoresSection from '../Sections/StoresSection';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  return (
    <div className="contact-page-view" style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'transparent' }}>
      {/* 1. Contact Form & Details (Email, Phone, WhatsApp, Address) */}
      <ContactSection />
      
      {/* 2. Official Branches Details & Interactive Map Widget right below */}
      <div style={{ marginTop: '40px' }}>
        <StoresSection />
      </div>
    </div>
  );
};

export default ContactPage;
