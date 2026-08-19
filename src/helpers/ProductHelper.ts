import imgPr1 from '../assets/images/seed-el-balad/pr1.jpeg';
import imgPr2 from '../assets/images/seed-el-balad/pr2.jpeg';
import imgPr3 from '../assets/images/seed-el-balad/pr3.png';
import imgPr4 from '../assets/images/seed-el-balad/pr4.png';
import imgPr5 from '../assets/images/seed-el-balad/pr5.png';
import imgPr6 from '../assets/images/seed-el-balad/pr6.png';
import imgPr7 from '../assets/images/seed-el-balad/pr7.png';

export interface ProductSpecs {
  weight: { ar: string; en: string };
  origin: { ar: string; en: string };
  shelfLife: { ar: string; en: string };
}

export interface ProductNutrition {
  calories: string;
  fat: string;
  protein: string;
  salt: string;
}

export interface Product {
  id: string;
  title: { ar: string; en: string };
  category: { ar: string; en: string };
  image: string;
  rating: number;
  size: { ar: string; en: string };
  desc: { ar: string; en: string };
  details: { ar: string[]; en: string[] };
  specs: ProductSpecs;
  nutrition: ProductNutrition;
  ingredients: { ar: string; en: string };
}

export class ProductHelper {
  private static readonly products: Product[] = [
    {
      id: 'premium-gift-bag',
      title: { ar: 'شنطة هدايا سيد البلد الورقية', en: 'Seed El Balad Premium Gift Bag' },
      category: { ar: 'الهدايا والتغليف', en: 'Gifts & Packaging' },
      image: imgPr1,
      rating: 4.9,
      size: { ar: 'شنطة ورقية فاخرة لحمل المنتجات', en: 'Premium paper bag for product gifting' },
      desc: { 
        ar: 'شنطة ورقية فاخرة من الكرتون المقوى بتصميم هوية سيد البلد الأنيق، مثالية لتقديم الهدايا والمناسبات والتوصيل الفاخر بأرقى مظهر.',
        en: 'Luxurious thick paper bag featuring Seed El Balad\'s elegant brand identity, perfect for gifting, special occasions, and premium presentation.'
      },
      details: {
        ar: [
          'مصنوعة من كرتون مقوى عالي الجودة وصديق للبيئة.',
          'تتميز بمقابض قطنية متينة لسهولة الحمل والراحة.',
          'مطبوع عليها هوية وشعار "سيد البلد" بألوان العلامة التجارية الرسمية.',
          'تتسع لعدد متنوع من المنتجات والعلب والبرطمانات كهدية قيمة.'
        ],
        en: [
          'Made of eco-friendly, high-density reinforced paperboard.',
          'Features soft, strong cotton rope handles for comfortable carrying.',
          'Embossed with the official Seed El Balad logo and colors.',
          'Holds a variety of our seafood products, making it a perfect gift set.'
        ]
      },
      specs: {
        weight: { ar: 'تتسع حتى ٤ كجم', en: 'Holds up to 4 kg' },
        origin: { ar: 'جمهورية مصر العربية', en: 'Egypt' },
        shelfLife: { ar: 'متينة وقابلة لإعادة الاستخدام', en: 'Durable & reusable' }
      },
      nutrition: {
        calories: '-',
        fat: '-',
        protein: '-',
        salt: '-'
      },
      ingredients: {
        ar: 'ورق كرتون صديق للبيئة، أحبار طباعة مائية غير سامة، حبال قطنية.',
        en: 'Eco-friendly cardboard paper, non-toxic water-based inks, cotton ropes.'
      }
    },
    {
      id: 'canned-herring-oil',
      title: { ar: 'رنجة معلبة فاخرة بزيت الزيتون البكر', en: 'Premium Canned Herring in Olive Oil' },
      category: { ar: 'المعلبات سهلة الفتح', en: 'Canned Seafood' },
      image: imgPr2,
      rating: 4.8,
      size: { ar: 'علبة معدنية سهلة الفتح - ١٢٠ جرام صافي', en: 'Easy-open tin can - 120g net' },
      desc: { 
        ar: 'قطع فيليه رنجة مدخنة ناعمة خالية من العظم ومغمورة بزيت زيتون بكر ممتاز وتوابل خفيفة، معبأة لسهولة التناول الفوري في الرحلات والتنقل.',
        en: 'Tender, boneless smoked herring fillet cuts submerged in extra virgin olive oil and light seasoning, canned for instant on-the-go enjoyment.'
      },
      details: {
        ar: [
          'قطع فيليه رنجة خالية تماماً من الجلد والشوك.',
          'مغمورة بالكامل في زيت زيتون بكر ممتاز طبيعي ١٠٠٪.',
          'علبة معدنية محمية ومقاومة للصدأ سهلة الفتح وعملية التخزين.',
          'لا تتطلب التبريد قبل الفتح وصلاحيتها ممتدة.'
        ],
        en: [
          'De-boned and skinless tender herring fillet cuts.',
          'Fully submerged in 100% natural extra virgin olive oil.',
          'Rust-free, easy-open steel can for durable shelf storage.',
          'Requires no refrigeration before opening, ideal for travel.'
        ]
      },
      specs: {
        weight: { ar: '١٢٠ جرام صافي', en: '120g net' },
        origin: { ar: 'هولندا / النرويج', en: 'Netherlands / Norway' },
        shelfLife: { ar: '٢٤ شهر (حرارة الغرفة)', en: '24 months (room temp)' }
      },
      nutrition: {
        calories: '245 kcal',
        fat: '18g',
        protein: '20g',
        salt: '1.2g'
      },
      ingredients: {
        ar: 'قطع فيليه رنجة مدخنة، زيت زيتون بكر ممتاز، ملح خفيف.',
        en: 'Smoked herring fillet, extra virgin olive oil, light salt.'
      }
    },
    {
      id: 'herring-caviar-jar',
      title: { ar: 'برطمان بطارخ رنجة خرز فاخرة', en: 'Premium Herring Caviar Roe Jar' },
      category: { ar: 'البطارخ والكافيار', en: 'Gourmet Roe' },
      image: imgPr3,
      rating: 5.0,
      size: { ar: 'برطمان زجاجي محكم الإغلاق - ٢٥٠ جرام صافي', en: 'Hygienic glass jar - 250g net' },
      desc: { 
        ar: 'بطارخ رنجة هارينج خرز طبيعية بالكامل، منتقاة بعناية فائقة ومملحة تمليحاً خفيفاً، غنية بالبروتينات وأوميجا ٣ لمذاق ملكي على مائدتك.',
        en: '100% natural, whole and firm herring roe beads, lightly cured to preserve their rich, authentic taste. A royal seafood delicacy.'
      },
      details: {
        ar: [
          'بطارخ طبيعية خرز كامل وقوام متماسك ممتاز.',
          'تمليح بحري خفيف جداً للحفاظ على نكهة البطارخ الأصلية.',
          'معبأة يدوياً تحت شروط تعقيم كاملة للحفاظ على الجودة.',
          'مقبل فاخر وغني جداً بالأوميجا ٣ والفيتامينات.'
        ],
        en: [
          '100% natural, whole and firm herring roe beads.',
          'Very light sea salt curing to highlight the raw native flavor.',
          'Hand-packed under strict sanitary conditions to maintain quality.',
          'Luxurious appetizer, exceptionally rich in Omega-3 and vitamins.'
        ]
      },
      specs: {
        weight: { ar: '٢٥٠ جرام صافي', en: '250g net' },
        origin: { ar: 'هولندا', en: 'Netherlands' },
        shelfLife: { ar: '٦ أشهر (مبرد من ٠ إلى ٤ درجات)', en: '6 months (chilled 0-4°C)' }
      },
      nutrition: {
        calories: '185 kcal',
        fat: '11g',
        protein: '22g',
        salt: '1.4g'
      },
      ingredients: {
        ar: 'بطارخ رنجة هارينج خرز طبيعية، ملح بحري، زيت نباتي نقي.',
        en: 'Natural herring roe beads, sea salt, pure vegetable oil.'
      }
    },
    {
      id: 'whole-smoked-herring-box',
      title: { ar: 'صندوق رنجة جامبو كاملة على الجليد', en: 'Premium Jumbo Box of Whole Smoked Herring' },
      category: { ar: 'الرنجة المدخنة', en: 'Smoked Herring' },
      image: imgPr4,
      rating: 4.9,
      size: { ar: 'صندوق كرتوني فاخر - وزن تقريبي ٥ كجم', en: 'Premium carton box - approx 5 kg' },
      desc: { 
        ar: 'صندوق الجملة والضيافة من رنجة سيد البلد الذهبية الكاملة المنتقاة حبة بحبة، مغلفة حرارياً ومحفوظة بالثلج لضمان النضارة المطلقة.',
        en: 'Wholesale & catering size box featuring Seed El Balad\'s signature whole golden smoked herring, selected piece by piece and chilled on ice for absolute freshness.'
      },
      details: {
        ar: [
          'أسماك هارينج هولندية كاملة متجانسة الحجم وغنية باللحم والدهون.',
          'مدخنة طبيعياً بنشارة خشب الزان للحصول على النكهة المتزنة.',
          'تأتي مغلفة حرارياً ومفرغة الهواء بشكل فردي داخل الصندوق.',
          'مثالية للموزعين، المطاعم، والمناسبات الكبرى.'
        ],
        en: [
          'Whole Dutch herring of uniform size, rich in meat and natural fats.',
          'Naturally smoked with beechwood for a premium balanced smoky flavor.',
          'Individually vacuum-sealed to lock in freshness inside the box.',
          'Ideal for wholesalers, restaurants, and large gatherings.'
        ]
      },
      specs: {
        weight: { ar: '٥ كجم (تقريبي)', en: '5 kg (approx)' },
        origin: { ar: 'هولندا', en: 'Netherlands' },
        shelfLife: { ar: '٤ أشهر (مجمد)', en: '4 months (frozen)' }
      },
      nutrition: {
        calories: '210 kcal',
        fat: '15g',
        protein: '18g',
        salt: '2.1g'
      },
      ingredients: {
        ar: 'سمك هارينج كامل، ملح طعام، دخان خشب الزان الطبيعي.',
        en: 'Whole herring fish, table salt, natural beechwood smoke.'
      }
    },
    {
      id: 'family-savings-box',
      title: { ar: 'صندوق التوفير العائلي من ظروف الرنجة', en: 'Family Savings Box of Vacuum Herring Pouches' },
      category: { ar: 'الرنجة المدخنة', en: 'Smoked Herring' },
      image: imgPr5,
      rating: 4.9,
      size: { ar: 'علبة كرتونية فاخرة تحتوي على ٦ ظروف مفرغة الهواء', en: 'Premium box containing 6 vacuum pouches' },
      desc: { 
        ar: 'صندوق عائلي مميز يحتوي على ظروف رنجة سيد البلد الفاخرة المغلفة حرارياً ومفرغة من الهواء، خيار ممتاز للتخزين المنزلي الطويل والمناسبات الكبرى.',
        en: 'Special family package containing individual vacuum-sealed pouches of Seed El Balad smoked herring, perfect for extended storage and large family gatherings.'
      },
      details: {
        ar: [
          'صندوق اقتصادي يحتوي على ٦ ظروف رنجة مغلفة بشكل مستقل.',
          'كل ظرف مغلق تماماً وخالٍ من الروائح وسهل الحفظ والتخزين.',
          'مجهزة بخشب الزان ومدخنة على البارد بأحدث التكنولوجيات.',
          'تضمن طعاماً صحياً معقماً وآمناً لعائلتك.'
        ],
        en: [
          'Economical box containing 6 separately vacuum-packaged herring pouches.',
          'Each pouch is odor-free, sanitary, and easy to store in the freezer.',
          'Cold-smoked using premium beechwood and advanced clean-tech.',
          'Guarantees hygienic, safe, and nutritious seafood for your family.'
        ]
      },
      specs: {
        weight: { ar: '٦ كجم تقريباً (٦ ظروف × ١ كجم)', en: 'Approx 6 kg (6 pouches x 1 kg)' },
        origin: { ar: 'هولندا', en: 'Netherlands' },
        shelfLife: { ar: '٦ أشهر (مجمد)', en: '6 months (frozen)' }
      },
      nutrition: {
        calories: '210 kcal',
        fat: '15g',
        protein: '18g',
        salt: '2.1g'
      },
      ingredients: {
        ar: 'سمك هارينج كامل مدخن، ملح طعام، خشب الزان الطبيعي.',
        en: 'Whole smoked herring, table salt, natural beechwood smoke.'
      }
    },
    {
      id: 'fresh-fillet-pouch',
      title: { ar: 'ظرف شرائح فيليه رنجة طازجة مخلية', en: 'Fresh Herring Fillet Slices Pouch' },
      category: { ar: 'شرائح الفيليه', en: 'Premium Fillet' },
      image: imgPr6,
      rating: 4.8,
      size: { ar: 'ظرف بسحاب للإغلاق ومحكم حرارياً - ٥٠٠ جرام صافي', en: 'Reclosable zip pouch - 500g net' },
      desc: { 
        ar: 'شرائح فيليه رنجة مخلية تماماً من الشوك والجلد، معبأة طازجة في ظرف فاخر بسحاب محكم الإغلاق لتسهيل الحفظ والتناول السريع.',
        en: 'Boneless and skinless fresh herring fillet slices, vacuum packed in a premium stand-up zipper pouch for easy storage and quick serving.'
      },
      details: {
        ar: [
          'فيليه مخلي يدوياً بدقة للتخلص من الجلد والشوك بنسبة ١٠٠٪.',
          'معبأ في ظرف بسحاب عملي للغاية لإعادة الغلق وحفظ النضارة.',
          'لحم طري ورطب جاهز للتقديم الفوري دون أي مجهود.',
          'مثالي للسلطات الفاخرة والسندوتشات السريعة.'
        ],
        en: [
          'Hand-filleted with extreme precision for 100% skinless & boneless meat.',
          'Packed in a smart zipper pouch for convenient re-sealing and freshness.',
          'Tender, moist fillets ready to serve instantly with zero prep work.',
          'Perfect for making premium seafood salads and quick sandwiches.'
        ]
      },
      specs: {
        weight: { ar: '٥٠٠ جرام صافي', en: '500g net' },
        origin: { ar: 'هولندا', en: 'Netherlands' },
        shelfLife: { ar: '٣ أشهر (مبرد من ٠ إلى ٤ درجات)', en: '3 months (chilled 0-4°C)' }
      },
      nutrition: {
        calories: '235 kcal',
        fat: '17g',
        protein: '19g',
        salt: '1.8g'
      },
      ingredients: {
        ar: 'فيليه سمك هارينج مخلي، زيت نباتي خفيف، ملح خفيف.',
        en: 'De-boned herring fish fillet, light vegetable oil, light salt.'
      }
    },
    {
      id: 'smoked-herring-retail-pouch',
      title: { ar: 'ظرف رنجة مدخنة فاخرة بالوزن', en: 'Premium Smoked Herring Retail Pouch' },
      category: { ar: 'الرنجة المدخنة', en: 'Smoked Herring' },
      image: imgPr7,
      rating: 4.9,
      size: { ar: 'ظرف محكم الغلق مفرغ الهواء - وزن تقريبي ١ كجم', en: 'Vacuum sealed retail pouch - approx 1 kg' },
      desc: { 
        ar: 'ظرف رنجة سيد البلد الفاخرة الكاملة والمدخنة ببطء بنشارة خشب الزان، مغلف تفريغ كامل لمنع الروائح والحفاظ على الطعم الأصلي.',
        en: 'Standard retail pouch featuring Seed El Balad whole smoked herring, slow-smoked with beechwood and vacuum packed to lock in freshness and prevent odors.'
      },
      details: {
        ar: [
          'رنجة كاملة فاخرة مدخنة بخشب الزان الطبيعي.',
          'تغليف حراري متكامل يمنع نفاذ أي رائحة للخارج.',
          'لحم مدخن غني، متماسك، وبطعم متوازن التمليح.',
          'المنتج الأكثر طلباً لمبيعات التجزئة والاستخدام المنزلي.'
        ],
        en: [
          'Whole premium herring naturally smoked with real beechwood.',
          'Hygienic heavy-duty vacuum seal prevents any odor leakage.',
          'Rich, firm smoked meat with a perfectly balanced salt profile.',
          'Our most popular item for standard retail sales and household use.'
        ]
      },
      specs: {
        weight: { ar: '١ كجم (تقريبي)', en: '1 kg (approx)' },
        origin: { ar: 'هولندا / النرويج', en: 'Netherlands / Norway' },
        shelfLife: { ar: '٤ أشهر (مجمد)', en: '4 months (frozen)' }
      },
      nutrition: {
        calories: '210 kcal',
        fat: '15g',
        protein: '18g',
        salt: '2.1g'
      },
      ingredients: {
        ar: 'سمك هارينج كامل، ملح طعام، دخان خشب الزان الطبيعي.',
        en: 'Whole herring fish, table salt, natural beechwood smoke.'
      }
    }
  ];

  public static getAll(): Product[] {
    return this.products;
  }

  public static getById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
