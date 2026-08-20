import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import '../../css/stores.css';

interface Branch {
  id: string;
  nameEn: string;
  nameAr: string;
  lat: number;
  lng: number;
  addressEn: string;
  addressAr: string;
  gmapsUrl: string;
  typeEn: string;
  typeAr: string;
  city: 'belbeis' | 'cairo';
}

const BRANCHES_DATA: Branch[] = [
  {
    id: 'gf-factory-belbeis',
    nameEn: 'Gold Foods Factory for Food Industries',
    nameAr: 'مصنع شركة جولد فودز للصناعات الغذائية',
    lat: 30.6413568,
    lng: 31.637504,
    addressEn: '8FGX+75 Gold Foods Factory for Food Industries, Bilbeis, Al-Sharqia Governorate 7050301',
    addressAr: '8FGX+75 مصنع شركة جولد فودز للصناعات الغذائية، بلبيس، محافظة الشرقية 7050301',
    gmapsUrl: 'https://maps.app.goo.gl/4XrjBhoWF4qXuxzGA',
    typeEn: 'Headquarters & Main Factory',
    typeAr: 'الفرع الرئيسي ومجمع المصانع',
    city: 'belbeis'
  },
  {
    id: 'gf-office-cairo',
    nameEn: 'Gold Foods Corporate Office',
    nameAr: 'إدارة جولد فودز - القاهرة',
    lat: 29.8973,
    lng: 31.3788,
    addressEn: 'Gold Tower, Plot 39, 15th of May City, Cairo',
    addressAr: 'برج جولد، قطعة رقم ٣٩، مدينة ١٥ مايو، القاهرة',
    gmapsUrl: 'https://maps.google.com/?q=29.8973,31.3788',
    typeEn: 'Corporate Office',
    typeAr: 'إدارة الشركة والفرع الإداري',
    city: 'cairo'
  }
];

export const StoresSection: React.FC = () => {
  const { language } = useTranslation();
  const [activeCity, setActiveCity] = useState<string>('belbeis');
  const [selectedBranchId, setSelectedBranchId] = useState<string>('gf-factory-belbeis');

  const mapRef = useRef<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersMapRef = useRef<Record<string, any>>({});

  // Group branches by city
  const groupedBranches = {
    belbeis: BRANCHES_DATA.filter(b => b.city === 'belbeis'),
    cairo: BRANCHES_DATA.filter(b => b.city === 'cairo')
  };

  const cityLabels: Record<string, { ar: string; en: string }> = {
    belbeis: { ar: 'بلبيس (المصنع والمنفذ)', en: 'Belbeis (Factory & Outlet)' },
    cairo: { ar: 'القاهرة (الإدارة العامة)', en: 'Cairo (Corporate Office)' }
  };

  useEffect(() => {
    // Check if Leaflet is available globally
    if (typeof window === 'undefined' || !(window as any).L) {
      return;
    }

    const L = (window as any).L;

    // Initialize map if not already done
    if (!mapRef.current && mapContainerRef.current) {
      // Center map between Belbeis and Cairo
      mapRef.current = L.map(mapContainerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true
      }).setView([30.15, 31.45], 9);

      // Add CartoDB Positron tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(mapRef.current);
    }

    // Clear existing markers
    Object.values(markersMapRef.current).forEach(marker => marker.remove());
    markersMapRef.current = {};

    // Define custom marker icon (gold with white border)
    const customIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `<div class="pin-inner"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10]
    });

    const activeIcon = L.divIcon({
      className: 'custom-map-pin active',
      html: `<div class="pin-inner active"></div>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
      popupAnchor: [0, -13]
    });

    // Populate markers
    BRANCHES_DATA.forEach((branch) => {
      const isSelected = branch.id === selectedBranchId;
      const marker = L.marker([branch.lat, branch.lng], { 
        icon: isSelected ? activeIcon : customIcon 
      })
        .addTo(mapRef.current)
        .bindPopup(`
          <div class="map-popup ${language === 'ar' ? 'rtl' : 'ltr'}">
            <h4 class="popup-title">${language === 'ar' ? branch.nameAr : branch.nameEn}</h4>
            <p class="popup-desc">${language === 'ar' ? branch.addressAr : branch.addressEn}</p>
            <span class="popup-type">${language === 'ar' ? branch.typeAr : branch.typeEn}</span>
            <a href="${branch.gmapsUrl}" target="_blank" rel="noopener noreferrer" class="popup-link">
              ${language === 'ar' ? 'الاتجاهات ↗' : 'Directions ↗'}
            </a>
          </div>
        `);

      marker.on('click', () => {
        setSelectedBranchId(branch.id);
        setActiveCity(branch.city);
      });

      markersMapRef.current[branch.id] = marker;
    });

    // Fit map to selected branch initially or center it
    const selectedBranch = BRANCHES_DATA.find(b => b.id === selectedBranchId);
    if (selectedBranch && mapRef.current) {
      mapRef.current.setView([selectedBranch.lat, selectedBranch.lng], 13, {
        animate: true,
        duration: 1.2
      });
      // Delay opening popup slightly to let animation finish
      setTimeout(() => {
        if (markersMapRef.current[selectedBranch.id]) {
          markersMapRef.current[selectedBranch.id].openPopup();
        }
      }, 300);
    }

    // Force Leaflet to recalculate container size to render tiles correctly
    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    }, 200);

    // Cleanup Leaflet map instance on unmount to prevent container already initialized error
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [language]);

  const handleBranchClick = (branch: Branch) => {
    setSelectedBranchId(branch.id);
    
    if (mapRef.current) {
      // Pan and zoom map smoothly
      mapRef.current.setView([branch.lat, branch.lng], 14, {
        animate: true,
        duration: 1.2
      });

      // Update icons so only selected is active
      const L = (window as any).L;
      if (L) {
        const customIcon = L.divIcon({
          className: 'custom-map-pin',
          html: `<div class="pin-inner"></div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10],
          popupAnchor: [0, -10]
        });

        const activeIcon = L.divIcon({
          className: 'custom-map-pin active',
          html: `<div class="pin-inner active"></div>`,
          iconSize: [26, 26],
          iconAnchor: [13, 13],
          popupAnchor: [0, -13]
        });

        Object.keys(markersMapRef.current).forEach((key) => {
          markersMapRef.current[key].setIcon(key === branch.id ? activeIcon : customIcon);
        });

        // Open popup
        setTimeout(() => {
          if (markersMapRef.current[branch.id]) {
            markersMapRef.current[branch.id].openPopup();
          }
        }, 150);
      }
    }
  };

  const toggleCityAccordion = (city: 'belbeis' | 'cairo') => {
    setActiveCity(activeCity === city ? '' : city);
  };

  return (
    <section className="stores-section" id="stores-section">
      <div className="container">
        {/* Title Block */}
        <div className="section-title-wrapper reveal active">
          <div className="section-kick">{language === 'ar' ? 'عناويننا الرسمية' : 'OUR LOCATIONS'}</div>
          <h2 className="section-title">
            {language === 'ar' ? 'المقرات الرسمية والمصانع' : 'Headquarters & Factories'}
          </h2>
          <p className="section-desc">
            {language === 'ar' 
              ? 'يسعدنا تشريفكم في مقر إدارة الشركة الرئيسي بالقاهرة أو زيارة منفذ بيع المصنع في بلبيس بمحافظة الشرقية للتواصل المباشر:' 
              : 'We are pleased to welcome you at our main corporate office in Cairo or our factory outlet in Belbeis, Sharqia:'}
          </p>
        </div>

        {/* Store Locator Map Wrapper */}
        <div className="storewrap reveal active">
          {/* List panel */}
          <div className="storelist">
            <div className="country-block">
              <div className="country-h">
                <span className="cflag">🇪🇬</span>
                <span>{language === 'ar' ? 'جمهورية مصر العربية' : 'Egypt'}</span>
                <span className="country-n">
                  {language === 'ar' ? 'مقراتنا الرسمية' : 'Official Sites'}
                </span>
              </div>

              {Object.entries(groupedBranches).map(([cityKey, cityBranches]) => {
                const isOpen = activeCity === cityKey;
                const cKey = cityKey as 'belbeis' | 'cairo';
                return (
                  <div key={cityKey} className={`city-acc ${isOpen ? 'open' : ''}`}>
                    <button 
                      className="city-head" 
                      type="button" 
                      onClick={() => toggleCityAccordion(cKey)}
                      aria-expanded={isOpen}
                    >
                      <span className="city-name">
                        {language === 'ar' ? cityLabels[cityKey].ar : cityLabels[cityKey].en}
                      </span>
                      <span className="city-meta">
                        {cityBranches.length}
                        <i className="chev">›</i>
                      </span>
                    </button>
                    <div 
                      className="city-body" 
                      style={{ 
                        maxHeight: isOpen ? `${cityBranches.length * 100}px` : '0px'
                      }}
                    >
                      <div className="city-body-in">
                        {cityBranches.map((branch) => {
                          const isSelected = selectedBranchId === branch.id;
                          return (
                            <div 
                              key={branch.id} 
                              className={`branch ${isSelected ? 'on' : ''}`}
                              onClick={() => handleBranchClick(branch)}
                            >
                              <div className="branch-locate">
                                <span className="branch-dot"></span>
                                <div className="branch-details">
                                  <span className="branch-name">
                                    {language === 'ar' ? branch.nameAr : branch.nameEn}
                                  </span>
                                  <span className="branch-addr">
                                    {language === 'ar' ? branch.addressAr : branch.addressEn}
                                  </span>
                                </div>
                              </div>
                              <a 
                                className="branch-go" 
                                href={branch.gmapsUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {language === 'ar' ? 'الاتجاهات ↗' : 'Directions ↗'}
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Map */}
          <div className="storemap-container">
            <div id="stores-map" ref={mapContainerRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoresSection;
