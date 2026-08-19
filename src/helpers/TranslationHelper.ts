export class TranslationHelper {
  private static readonly dictionary: Record<string, { ar: string; en: string }> = {
    // Navigation
    'nav.home': { ar: 'الرئيسية', en: 'Home' },
    'nav.products': { ar: 'المجموعة الخاصة', en: 'Our Collection' },
    'nav.quality': { ar: 'الجودة والشهادات', en: 'Quality & Certs' },
    'nav.about': { ar: 'لماذا سيد البلد؟', en: 'Why Seed El-blad?' },
    'nav.story': { ar: 'قصتنا وعراقتنا', en: 'Our Story' },
    'nav.contact': { ar: 'تواصل معنا', en: 'Contact Us' },
    'nav.menu': { ar: 'القائمة', en: 'Menu' },
    'nav.callUs': { ar: 'اتصل بنا', en: 'Call Us' },
    'nav.search': { ar: 'بحث', en: 'Search' },
    'nav.stores': { ar: 'منافذ البيع', en: 'Store Locator' },

    // Hero
    'hero.eyebrow': { ar: 'بيت المأكولات البحرية — منذ ٢٠١٩', en: 'MEDITERRANEAN HOUSE — SINCE 2019' },
    'hero.title': { ar: 'أشهى ما جاد به البحر', en: 'The Finest <em>from the</em> Sea' },
    'hero.scroll': { ar: 'اسحب للأسفل', en: 'Scroll' },

    // Collection Pedestal
    'collection.kick': { ar: 'المجموعة الخاصة', en: 'The Collection' },
    'collection.title': { ar: 'اكتشف تشكيلة من\nإبداعات الدار الفاخرة', en: "Explore a Selection of\nthe House's Creations" },
    'collection.sub': { ar: 'صُنعت بالشغف، وهُذبت بالخبرة الطويلة.', en: 'Crafted with passion. Refined by heritage.' },
    'collection.discover': { ar: 'اكتشف المنتج', en: 'Discover' },
    'collection.creations': { ar: 'منتج فاخر', en: 'creations' },
    'collection.tail': { ar: 'مذاق أصيل، نضعه بين يديك بكل حب وإتقان.', en: 'A taste of the sea, perfected through time.' },
    'collection.exploreAll': { ar: 'استكشف المجموعة الكاملة', en: 'Explore the full collection' },

    // Editorial Section
    'editorial.eyebrow': { ar: 'فن صناعة الرنجة والمنتجات البحرية', en: 'The Art of Seafood' },
    'editorial.title': { ar: 'حين تلتقي التقاليد بالشغف المطلق', en: 'Where tradition meets obsession' },
    'editorial.desc1': { 
      ar: 'بدأت Gold Foods نشاطها في السوق المصري عام 2019، ومنذ ذلك الحين ركزت على تقديم منتجات بحرية عالية الجودة تلبي احتياجات المستهلك المصري، مع الالتزام بأعلى معايير الجودة وسلامة الغذاء.',
      en: 'Since entering the Egyptian market in 2019, Gold Foods has focused on delivering premium seafood products with consistent quality and reliable service.'
    },
    'editorial.desc2': {
      ar: 'وقبل انطلاق الشركة في مصر، اكتسب فريق الإدارة خبرات عملية واسعة في مجال المنتجات البحرية في عدد من الأسواق الأوروبية، من بينها إسبانيا، وألمانيا، والدنمارك. وقد ساهمت هذه الخبرات في نقل أفضل الممارسات العالمية إلى السوق المصري، سواء في اختيار الخامات أو التصنيع أو إدارة الجودة.',
      en: 'The company’s management team also brings valuable experience from European markets, including Spain, Germany, and Denmark, helping transfer international best practices to product sourcing, manufacturing, and quality management.'
    },
    'editorial.link': { ar: 'اكتشف حكايتنا', en: 'Discover the House' },

    // Sourcing Section
    'sourcing.eyebrow': { ar: 'الجودة تبدأ من البحر', en: 'Quality Starts From the Sea' },
    'sourcing.title': { ar: 'شغف حقيقي بالهارينج والسردين', en: 'A Passion for Herring & Sardines' },
    'sourcing.desc': {
      ar: 'يسافر فريق الإدارة ومندوبو الجودة في Gold Foods إلى أشهر مناطق صيد الهارينج في العالم لاختيار أفضل الخامات مباشرة من المصدر، ومتابعة الموردين والتأكد من مطابقة المنتجات لمعايير الشركة الفنية الصارمة.',
      en: 'Our management and quality assurance teams travel directly to the world’s leading herring fishing zones to select only the best catch directly from the source, maintaining strict compliance with our standards.'
    },
    'sourcing.countries': { ar: 'نتعاون مع موردين من أشهر مناطق الإنتاج المعروفة عالميًا، ومنها:', en: 'We source premium herring from leading global fishing regions, including:' },
    'sourcing.criteriaTitle': { ar: 'معايير تقييم الشحنات:', en: 'Shipment Evaluation Criteria:' },
    'sourcing.criteria1': { ar: 'جودة موسم الصيد وخصائص المصيد.', en: 'Catch quality and fishing season.' },
    'sourcing.criteria2': { ar: 'نسبة الدهون الطبيعية المتوازنة.', en: 'Natural balanced fat content.' },
    'sourcing.criteria3': { ar: 'حجم الأسماك وتجانس الشحنة.', en: 'Fish size consistency and uniformity.' },
    'sourcing.criteria4': { ar: 'طرق التداول والتجميد وسلسلة التبريد.', en: 'Cold chain integrity and freezing methods.' },

    // Stats Section
    'stats.title': { ar: 'جولد فودز بالأرقام', en: 'Gold Foods in Numbers' },
    'stats.stat1.num': { ar: '2019', en: '2019' },
    'stats.stat1.lbl': { ar: 'بداية النشاط في السوق المصري', en: 'Established in Egypt' },
    'stats.stat2.num': { ar: '3+', en: '3+' },
    'stats.stat2.lbl': { ar: 'دول خبرات أوروبية سابقة', en: 'European Sourcing Countries' },
    'stats.stat3.num': { ar: '1000+', en: '1000+' },
    'stats.stat3.lbl': { ar: 'منفذ بيع وسوبر ماركت في مصر', en: 'Retail Outlets & Supermarkets' },
    'stats.stat4.num': { ar: '100%', en: '100%' },
    'stats.stat4.lbl': { ar: 'فحص شحنات ورقابة صارمة', en: 'Independent Quality Audits' },

    // Quality Certs Section
    'quality.title': { ar: 'الجودة أساس كل شراكة', en: 'Quality is the Foundation' },
    'quality.subtitle': { ar: 'نلتزم بأعلى معايير سلامة الغذاء والإدارة البيئية والصحة المهنية بموجب الشهادات الدولية المعتمدة:', en: 'We adhere to the highest international standards of food safety, quality, and environmental management:' },
    'quality.cert1': { ar: 'نظام إدارة سلامة الغذاء (ISO 22000)', en: 'Food Safety Management System (ISO 22000)' },
    'quality.cert2': { ar: 'نظام إدارة الجودة العالمي (ISO 9001)', en: 'Quality Management System (ISO 9001)' },
    'quality.cert3': { ar: 'نظام الإدارة البيئية المتكاملة (ISO 14001)', en: 'Environmental Management System (ISO 14001)' },
    'quality.cert4': { ar: 'نظام السلامة والصحة المهنية (ISO 45001)', en: 'Occupational Health & Safety (ISO 45001)' },
    'quality.cert5': { ar: 'شهادة تحليل المخاطر ونقاط التحكم (HACCP)', en: 'Hazard Analysis Critical Control Point (HACCP)' },
    'quality.download': { ar: 'عرض وتنزيل الشهادة المعتمدة (PDF)', en: 'View & Download Certificate (PDF)' },

    // Why Choose Us
    'why.title': { ar: 'لماذا يختارنا عملاؤنا؟', en: 'Why Choose Us?' },
    'why.item1.title': { ar: 'خبرة متخصصة', en: 'Specialized Expertise' },
    'why.item1.desc': { ar: 'تركيز كامل وشغف حقيقي بأسماك الهارينج والسردين والفسيخ.', en: 'Dedicated expertise and passion for herring, sardine, and fesikh.' },
    'why.item2.title': { ar: 'اختيار دقيق للخام', en: 'Direct Sourcing' },
    'why.item2.desc': { ar: 'شراء مباشر للخامات من هولندا والنرويج وأيسلندا وجزر فارو واسكتلندا.', en: 'Direct raw material sourcing from Netherlands, Norway, Iceland, and Scotland.' },
    'why.item3.title': { ar: 'رقابة صارمة', en: 'Rigorous Quality Control' },
    'why.item3.desc': { ar: 'فحص عينات مستقل لكل شحنة بمواصفات المصنع الخاصة.', en: 'Independent assessment of each shipment to match custom quality standards.' },
    'why.item4.title': { ar: 'تنوع الأحجام والحلول', en: 'Diverse Solutions' },
    'why.item4.desc': { ar: 'تلبية احتياجات تجار الجملة، الموزعين، المطاعم، الفنادق، ومحلات التجزئة.', en: 'Customized solutions for wholesalers, distributors, hotels, and restaurants.' },

    // Contact
    'contact.title': { ar: 'تواصل معنا', en: 'Get in Touch' },
    'contact.sub': { ar: 'يسعد فريق جولد فودز التواصل معك لمناقشة فرص التعاون والتوزيع.', en: 'The Gold Foods team is happy to connect for trading and distribution opportunities.' },
    'contact.email': { ar: 'البريد الإلكتروني للرئيس التنفيذي', en: 'CEO Email Address' },
    'contact.phone': { ar: 'الهاتف والواتساب المباشر', en: 'Direct Phone & WhatsApp' },
    'contact.address': { ar: 'العنوان والمصنع الرئيسي', en: 'Headquarters & Factory Address' },
    'contact.addressVal': { ar: 'برج جولد، قطعة رقم ٣٩، شمال دار مصر، مدينة ١٥ مايو، القاهرة، مصر', en: 'Gold Tower, Plot 39, North Dar Misr, 15th of May City, Cairo, Egypt' },
    'contact.formName': { ar: 'الاسم الكريم', en: 'Full Name' },
    'contact.formEmail': { ar: 'البريد الإلكتروني', en: 'Email Address' },
    'contact.formPhone': { ar: 'رقم الهاتف', en: 'Phone Number' },
    'contact.formMsg': { ar: 'رسالتك أو تفاصيل طلبك', en: 'Your message or order details' },
    'contact.formSubmit': { ar: 'إرسال الرسالة عبر الواتساب', en: 'Send via WhatsApp' },

    // Stores Locator
    'stores.title': { ar: 'منافذ التوزيع', en: 'OFFICIAL DISTRIBUTORS' },
    'stores.subtitle': { ar: 'تتوفر منتجات "سيد البلد" الفاخرة في مصنعنا الرئيسي وبورصة الأسماك، وبكافة فروع كبرى سلاسل الهايبرماركت ومنافذ البيع المعتمدة في مصر:', en: 'Our premium products are available at our headquarters, factory outlet, and selected leading hypermarket chains across Egypt:' },
    'stores.directions': { ar: 'الاتجاهات ↗', en: 'Directions ↗' },

    // Cookie Consent
    'cookies.text': { 
      ar: 'نستخدم ملفات تعريف الارتباط (Cookies) لضمان تقديم أفضل تجربة على موقعنا وتسهيل التصفح باللغتين.',
      en: 'We use cookies to ensure you get the best experience on our website and to remember your language preferences.'
    },
    'cookies.accept': { ar: 'قبول الكل', en: 'Accept All' },
    'cookies.privacy': { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },

    // Privacy Policy
    'privacy.title': { ar: 'سياسة الخصوصية وملفات تعريف الارتباط', en: 'Privacy & Cookie Policy' },
    'privacy.intro': { 
      ar: 'يلتزم مصنع جولد فودز بحماية بياناتك وخصوصيتك. نوضح أدناه كيف نستخدم الكوكيز والبيانات التي تقدمها عند تصفح موقع سيد البلد.',
      en: 'Gold Foods is committed to protecting your privacy. Below we outline how we handle cookies and your contact information.'
    },
    'privacy.section1.title': { ar: '١. ملفات تعريف الارتباط (Cookies)', en: '1. Cookie Files' },
    'privacy.section1.desc': { 
      ar: 'نستخدم الكوكيز لحفظ لغتك المفضلة (عربي/إنجليزي) وضمان تحميل المحتوى بسلاسة وسرعة. لا نجمع أي بيانات تتبع تطفلية.',
      en: 'We use session cookies to remember your preferred language (AR/EN) and improve loading speeds. No intrusive tracking is performed.'
    },
    'privacy.section2.title': { ar: '٢. تجميع البيانات والتواصل', en: '2. Contact Information' },
    'privacy.section2.desc': { 
      ar: 'عند استخدام نموذج التواصل، تُرسل بياناتك مباشرة للتحدث مع مبيعات المصنع عبر الواتساب أو البريد الإلكتروني. لا يتم تخزين هذه البيانات في خوادم طرف ثالث.',
      en: 'When using our contact form, your details are sent directly to our sales team via WhatsApp or email. We do not store this data on third-party servers.'
    },
    'privacy.close': { ar: 'إغلاق النافذة', en: 'Close' },
    
    // Product Modal
    'product.close': { ar: 'إغلاق', en: 'Close' },
    'product.order': { ar: 'طلب المنتج عبر الواتساب', en: 'Order Product via WhatsApp' },
    'product.rating': { ar: 'تقييم الجودة والعملاء', en: 'Quality & Customer Rating' },
    'product.ingredients': { ar: 'المكونات المعتمدة', en: 'Ingredients' },
    'product.nutrition': { ar: 'القيم الغذائية — لكل ١٠٠ جرام', en: 'Nutrition — per 100g' },
    'product.nutrition.calories': { ar: 'السعرات الحرارية', en: 'Calories' },
    'product.nutrition.fat': { ar: 'الدهون', en: 'Fat' },
    'product.nutrition.protein': { ar: 'البروتين', en: 'Protein' },
    'product.nutrition.salt': { ar: 'الملح', en: 'Salt' },
    'product.advisorNotice': { ar: 'يقوم مستشار المبيعات بتأكيد تفاصيل طلبك وطرق التوريد والتوصيل معك عبر الواتساب.', en: 'A sales advisor will confirm your order details and delivery terms with you via WhatsApp.' }
  };

  /**
   * Translates a given key based on language.
   * @param key The dictionary translation key
   * @param lang Current language ('ar' | 'en')
   * @returns Translated string
   */
  public static get(key: string, lang: 'ar' | 'en'): string {
    const entry = this.dictionary[key];
    if (!entry) {
      return key; // Fallback to key if not found
    }
    return lang === 'ar' ? entry.ar : entry.en;
  }
}
