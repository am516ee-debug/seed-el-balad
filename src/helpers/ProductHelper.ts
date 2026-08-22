import imgPr1 from '../assets/images/seed-el-balad/pr1.jpeg';
import imgPr2 from '../assets/images/seed-el-balad/pr2.jpeg';
import imgPr3 from '../assets/images/seed-el-balad/pr3.png';
import imgPr4 from '../assets/images/seed-el-balad/pr4.png';
import imgPr5 from '../assets/images/seed-el-balad/pr5.png';
import imgPr6 from '../assets/images/seed-el-balad/pr6.png';
import imgPr7 from '../assets/images/seed-el-balad/pr7.png';
import imgDutchHerring from '../assets/images/seed-el-balad/Dutch Herring.jpeg';
import imgNorwegianHerring from '../assets/images/seed-el-balad/Norwegian Herring.jpeg';
import imgIcelandicHerring from '../assets/images/seed-el-balad/Icelandic Herring.jpeg';
import imgRussianHerring from '../assets/images/seed-el-balad/Russian Herring.jpeg';
import imgVacuumFeseekh from '../assets/images/seed-el-balad/Vacuum Feseekh.jpeg';
import imgVacuumMackerel from '../assets/images/seed-el-balad/Vacuum Mackerel.jpeg';

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
      id: "dutch-herring",
      title: { ar: "رنجة هولندي فاخرة مدخنة", en: "Premium Dutch Smoked Herring" },
      category: { ar: "رنجة مغلفة", en: "Packaged Herring" },
      image: imgDutchHerring,
      rating: 5.0,
      size: { ar: "ظرف فاكيوم محكم الغلق - وزن تقريبي ١ كجم", en: "Vacuum-sealed pouch - approx 1 kg" },
      desc: { 
        ar: "أجود أسماك الهارينج الهولندية المنتقاة من بحر الشمال، مدخنة على البارد بخشب الزان الطبيعي، وتتميز بنسبة دهون عالية ولحم زبدي غني ومذاق استثنائي.",
        en: "The finest Dutch herring harvested from the North Sea, cold-smoked with natural beechwood, boasting high healthy fat content and a melt-in-the-mouth buttery texture."
      },
      details: {
        ar: [
          "مستوردة مباشرة من أرقى مزارع ومصايد هولندا المعتمدة دولياً.",
          "نسبة دهون طبيعية عالية تمنح السمك طراوة ونكهة زبدية لا تُقاوم.",
          "مدخنة طبيعياً على البارد بنشارة خشب الزان الفاخر دون أي إضافات كيميائية.",
          "مغلفة حرارياً ومفرغة الهواء (فاكيوم) لحفظ النضارة التامة ومنع تسرب الروائح."
        ],
        en: [
          "Directly imported from internationally certified premium Dutch fisheries.",
          "High natural fat profile offering exceptional tenderness and buttery richness.",
          "Naturally cold-smoked with premium beechwood without artificial additives.",
          "Heavy-duty vacuum packed to preserve peak freshness and lock in aroma."
        ]
      },
      specs: {
        weight: { ar: "١ كجم تقريباً", en: "Approx 1 kg" },
        origin: { ar: "هولندا (بحر الشمال)", en: "Netherlands (North Sea)" },
        shelfLife: { ar: "٦ أشهر (مجمد -١٨ مئوية)", en: "6 months (frozen -18°C)" }
      },
      nutrition: {
        calories: "220 kcal",
        fat: "16g",
        protein: "19g",
        salt: "1.9g"
      },
      ingredients: {
        ar: "سمك هارينج هولندي كامل، ملح بحري نقي، دخان خشب الزان الطبيعي.",
        en: "Whole Dutch herring, pure sea salt, natural beechwood smoke."
      }
    },
    {
      id: "norwegian-herring",
      title: { ar: "رنجة نرويجي ملكية سوبر جامبو", en: "Royal Norwegian Super Jumbo Herring" },
      category: { ar: "رنجة مغلفة", en: "Packaged Herring" },
      image: imgNorwegianHerring,
      rating: 4.9,
      size: { ar: "ظرف فاكيوم محكم الغلق - وزن تقريبي ١ كجم", en: "Vacuum-sealed pouch - approx 1 kg" },
      desc: { 
        ar: "رنجة نرويجية عملاقة منتقاة من أعماق المياه القطبية الباردة والنقية، تتميز بقوام متماسك مليء باللحم الأبيض النقي ونكهة مدخنة متوازنة بعناية.",
        en: "Giant Norwegian herring harvested from icy sub-arctic waters, distinguished by its firm, thick white meat and carefully balanced artisanal smokiness."
      },
      details: {
        ar: [
          "حجم سوبر جامبو مميز غني باللحم والبروتين والأوميجا ٣.",
          "صيد أعماق المحيط النرويجي فائق النقاء والجودة.",
          "تمليح بحري خفيف يبرز طعم السمك الطبيعي الأصيل.",
          "تغليف فاكيوم محكم مانع للهواء والتلف ومطابق للمواصفات القياسية."
        ],
        en: [
          "Super jumbo grading packed with thick meat, protein, and Omega-3.",
          "Sourced from pristine Norwegian deep cold ocean waters.",
          "Mild sea-salt cure that enhances the authentic natural seafood flavor.",
          "Airtight vacuum pouch compliant with strict international food standards."
        ]
      },
      specs: {
        weight: { ar: "١ كجم تقريباً", en: "Approx 1 kg" },
        origin: { ar: "النرويج", en: "Norway" },
        shelfLife: { ar: "٦ أشهر (مجمد -١٨ مئوية)", en: "6 months (frozen -18°C)" }
      },
      nutrition: {
        calories: "215 kcal",
        fat: "15g",
        protein: "20g",
        salt: "1.8g"
      },
      ingredients: {
        ar: "سمك هارينج نرويجي جامبو، ملح طعام نقي، دخان خشب الزان.",
        en: "Jumbo Norwegian herring, pure table salt, beechwood smoke."
      }
    },
    {
      id: "icelandic-herring",
      title: { ar: "رنجة أيسلندي فاخرة بنقاء المحيط", en: "Premium Pure Icelandic Smoked Herring" },
      category: { ar: "رنجة مغلفة", en: "Packaged Herring" },
      image: imgIcelandicHerring,
      rating: 5.0,
      size: { ar: "ظرف فاكيوم محكم الغلق - وزن تقريبي ١ كجم", en: "Vacuum-sealed pouch - approx 1 kg" },
      desc: { 
        ar: "رنجة أيسلندية فريدة مستوردة من أنقى مياه المحيط الأطلسي الشمالي، ذات مذاق سلس وتمليح معتدل ونكهة تدخين هادئة تلائم أرقى الذواقة.",
        en: "Unique Icelandic herring from the cleanest North Atlantic waters, featuring a smooth texture, balanced cure, and gentle smoke for gourmet connoisseurs."
      },
      details: {
        ar: [
          "مستوردة من مصايد أيسلندا المستدامة المشهود لها عالمياً بالنقاء.",
          "توازن مثالي بين نسبة الملوحة والنكهة المدخنة الهادئة.",
          "خالية من المواد الحافظة والملونات الصناعية ١٠٠٪.",
          "معبأة في بيئة معقمة ومحكمة الغلق بالتفريغ الهوائي."
        ],
        en: [
          "Imported from certified sustainable, pristine Icelandic fisheries.",
          "Harmonious balance between delicate salting and smooth smokiness.",
          "100% free of artificial preservatives, chemicals, and coloring agents.",
          "Packaged in a sanitized environment with heavy-duty vacuum seal."
        ]
      },
      specs: {
        weight: { ar: "١ كجم تقريباً", en: "Approx 1 kg" },
        origin: { ar: "أيسلندا", en: "Iceland" },
        shelfLife: { ar: "٦ أشهر (مجمد -١٨ مئوية)", en: "6 months (frozen -18°C)" }
      },
      nutrition: {
        calories: "205 kcal",
        fat: "14g",
        protein: "19g",
        salt: "1.7g"
      },
      ingredients: {
        ar: "سمك هارينج أيسلندي، ملح بحري، دخان خشب طبيعي.",
        en: "Icelandic herring, sea salt, natural wood smoke."
      }
    },
    {
      id: "russian-herring",
      title: { ar: "رنجة روسي كلاسيكية مميزة", en: "Classic Heritage Russian Smoked Herring" },
      category: { ar: "رنجة مغلفة", en: "Packaged Herring" },
      image: imgRussianHerring,
      rating: 4.8,
      size: { ar: "ظرف فاكيوم محكم الغلق - وزن تقريبي ١ كجم", en: "Vacuum-sealed pouch - approx 1 kg" },
      desc: { 
        ar: "الرنجة الروسية الكلاسيكية بطريقتها العريقة في التدخين والتمليح التقليدي، نكهة قوية غنية تملأ الحواس ومثالية لعشاق المذاق الأصيل.",
        en: "Classic Russian-style smoked herring prepared using heritage curing and smoking techniques, delivering a bold, savory flavor for lovers of authentic seafood."
      },
      details: {
        ar: [
          "تدخين تقليدي عريق يعطي السمكة لوناً ذهبياً غامقاً ونكهة عميقة.",
          "قوام متماسك ومذاق قوي ومميز يلائم الولائم والمناسبات.",
          "مغلفة بأعلى معايير سلامة الغذاء لمنع وصول الهواء أو الرطوبة.",
          "جاهزة للتناول أو التقديم مع زيت الزيتون والليمون."
        ],
        en: [
          "Traditional smoking gives the fish a deep golden sheen and robust aroma.",
          "Firm, satisfying texture and rich taste perfect for special occasions.",
          "Packaged to top food safety standards protecting against moisture and air.",
          "Ready to enjoy or serve dressed with olive oil and fresh lemon."
        ]
      },
      specs: {
        weight: { ar: "١ كجم تقريباً", en: "Approx 1 kg" },
        origin: { ar: "روسيا / بحر الشمال", en: "Russia / North Sea" },
        shelfLife: { ar: "٦ أشهر (مجمد -١٨ مئوية)", en: "6 months (frozen -18°C)" }
      },
      nutrition: {
        calories: "225 kcal",
        fat: "16g",
        protein: "19g",
        salt: "2.2g"
      },
      ingredients: {
        ar: "سمك هارينج كامل، ملح طعام، دخان خشب الزان والأرو.",
        en: "Whole herring, table salt, beechwood & oak smoke."
      }
    },
    {
      id: "vacuum-feseekh",
      title: { ar: "فسيخ بوري بلدي فاخر فاكيوم", en: "Artisanal Vacuum-Sealed Mullet Feseekh" },
      category: { ar: "رنجة مغلفة", en: "Packaged Herring" },
      image: imgVacuumFeseekh,
      rating: 5.0,
      size: { ar: "ظرف فاكيوم مفرغ الهواء - وزن تقريبي ١ كجم", en: "Vacuum sealed pouch - approx 1 kg" },
      desc: { 
        ar: "فسيخ بلدي أصيل محضر من أفخر أسماك البوري الطازجة الممتلئة، مخلل ومعتق بملح البحر الطبيعي بنسبة تمليح مظبوطة وزبدية، مغلف فاكيوم بدون أي روائح.",
        en: "Authentic artisanal Egyptian Feseekh made from prime fresh mullet fish, expertly cured in natural sea salt for a balanced, melt-in-mouth texture, vacuum-packed completely odor-free."
      },
      details: {
        ar: [
          "محضر من أسماك بوري طازجة منتقاة بعناية حبة بحبة.",
          "تمليح بلدي معتق متوازن (دلّع/مظبوط) يعطي قواماً زبدياً فاخراً.",
          "تغليف فاكيوم حراري محكم يمنع أي تسرب للرائحة داخل الثلاجة.",
          "معقم وخاضع للرقابة الصحية ومطابق لأعلى اشتراطات الجودة."
        ],
        en: [
          "Crafted exclusively from prime, hand-selected whole fresh mullet fish.",
          "Masterfully cured for a balanced, buttery, melt-in-your-mouth delicacy.",
          "Advanced vacuum sealing ensures zero odor leakage in storage.",
          "Sanitized and monitored under stringent food safety hygiene protocols."
        ]
      },
      specs: {
        weight: { ar: "١ كجم تقريباً", en: "Approx 1 kg" },
        origin: { ar: "جمهورية مصر العربية", en: "Egypt" },
        shelfLife: { ar: "٤ أشهر (مبرد / مجمد)", en: "4 months (chilled/frozen)" }
      },
      nutrition: {
        calories: "210 kcal",
        fat: "13g",
        protein: "22g",
        salt: "3.5g"
      },
      ingredients: {
        ar: "سمك بوري طازج كامل، ملح بحري رشيدي خشن نقي.",
        en: "Fresh whole mullet fish, pure coarse sea salt."
      }
    },
    {
      id: "vacuum-mackerel",
      title: { ar: "سمك ماكريل مدخن فاخر فاكيوم", en: "Premium Vacuum-Sealed Smoked Mackerel" },
      category: { ar: "رنجة مغلفة", en: "Packaged Herring" },
      image: imgVacuumMackerel,
      rating: 4.9,
      size: { ar: "ظرف فاكيوم محكم الغلق - وزن تقريبي ٧٥٠ جم", en: "Vacuum-sealed pouch - approx 750g" },
      desc: { 
        ar: "سمك ماكريل أطلسي غني بالزيوت الصحية والأوميجا ٣، مدخن على الطريقة الأوروبية بنشارة الخشب الطبيعي، يتميز بلحم ذهبي سميك ونكهة مدخنة ساحرة.",
        en: "Rich Atlantic mackerel packed with natural oils and Omega-3, smoked European-style with natural wood shavings for a deep golden finish and succulent flavor."
      },
      details: {
        ar: [
          "سمك ماكريل أطلسي مستورد عالي الجودة غني بالدهون المفيدة والبروتين.",
          "تدخين ذهبي متقن يمنح اللحم قواماً غنياً وطرياً للغاية.",
          "تمليح بحري خفيف متناسق يبرز حلاوة لحم الماكريل.",
          "تغليف فاكيوم صحي مفرغ من الهواء للحفاظ على الزيوت والنكهة."
        ],
        en: [
          "Imported Atlantic mackerel rich in healthy Omega-3 fats and protein.",
          "Artisanal golden smoking delivers an exceptionally rich, juicy texture.",
          "Mild sea salt seasoning enhancing the natural savory profile.",
          "Hygienic vacuum sealing locking in natural oils and smoke essence."
        ]
      },
      specs: {
        weight: { ar: "٧٥٠ جرام تقريباً", en: "Approx 750g" },
        origin: { ar: "المحيط الأطلسي / النرويج", en: "Atlantic Ocean / Norway" },
        shelfLife: { ar: "٦ أشهر (مجمد -١٨ مئوية)", en: "6 months (frozen -18°C)" }
      },
      nutrition: {
        calories: "260 kcal",
        fat: "20g",
        protein: "20g",
        salt: "1.6g"
      },
      ingredients: {
        ar: "سمك ماكريل أطلسي كامل، ملح بحري، دخان خشب الزان الطبيعي.",
        en: "Whole Atlantic mackerel, sea salt, natural beechwood smoke."
      }
    },
    {
      id: "fresh-fillet-pouch",
      title: { ar: "ظرف شرائح فيليه رنجة طازجة مخلية", en: "Fresh Herring Fillet Slices Pouch" },
      category: { ar: "شرائح الفيليه", en: "Premium Fillet" },
      image: imgPr6,
      rating: 4.8,
      size: { ar: "ظرف بسحاب للإغلاق ومحكم حرارياً - ٥٠٠ جرام صافي", en: "Reclosable zip pouch - 500g net" },
      desc: { 
        ar: "شرائح فيليه رنجة مخلية تماماً من الشوك والجلد، معبأة طازجة في ظرف فاخر بسحاب محكم الإغلاق لتسهيل الحفظ والتناول السريع.",
        en: "Boneless and skinless fresh herring fillet slices, vacuum packed in a premium stand-up zipper pouch for easy storage and quick serving."
      },
      details: {
        ar: [
          "فيليه مخلي يدوياً بدقة للتخلص من الجلد والشوك بنسبة ١٠٠٪.",
          "معبأ في ظرف بسحاب عملي للغاية لإعادة الغلق وحفظ النضارة.",
          "لحم طري ورطب جاهز للتقديم الفوري دون أي مجهود.",
          "مثالي للسلطات الفاخرة والسندوتشات السريعة."
        ],
        en: [
          "Hand-filleted with extreme precision for 100% skinless & boneless meat.",
          "Packed in a smart zipper pouch for convenient re-sealing and freshness.",
          "Tender, moist fillets ready to serve instantly with zero prep work.",
          "Perfect for making premium seafood salads and quick sandwiches."
        ]
      },
      specs: {
        weight: { ar: "٥٠٠ جرام صافي", en: "500g net" },
        origin: { ar: "هولندا", en: "Netherlands" },
        shelfLife: { ar: "٣ أشهر (مبرد من ٠ إلى ٤ درجات)", en: "3 months (chilled 0-4°C)" }
      },
      nutrition: {
        calories: "235 kcal",
        fat: "17g",
        protein: "19g",
        salt: "1.8g"
      },
      ingredients: {
        ar: "فيليه سمك هارينج مخلي، زيت نباتي خفيف، ملح خفيف.",
        en: "De-boned herring fish fillet, light vegetable oil, light salt."
      }
    },
    {
      id: "herring-caviar-jar",
      title: { ar: "برطمان بطارخ رنجة خرز فاخرة", en: "Premium Herring Caviar Roe Jar" },
      category: { ar: "بطارخ", en: "Gourmet Roe" },
      image: imgPr3,
      rating: 5.0,
      size: { ar: "برطمان زجاجي محكم الإغلاق - ٢٥٠ جرام صافي", en: "Hygienic glass jar - 250g net" },
      desc: { 
        ar: "بطارخ رنجة هارينج خرز طبيعية بالكامل، منتقاة بعناية فائقة ومملحة تمليحاً خفيفاً، غنية بالبروتينات وأوميجا ٣ لمذاق ملكي على مائدتك.",
        en: "100% natural, whole and firm herring roe beads, lightly cured to preserve their rich, authentic taste. A royal seafood delicacy."
      },
      details: {
        ar: [
          "بطارخ طبيعية خرز كامل وقوام متماسك ممتاز.",
          "تمليح بحري خفيف جداً للحفاظ على نكهة البطارخ الأصلية.",
          "معبأة يدوياً تحت شروط تعقيم كاملة للحفاظ على الجودة.",
          "مقبل فاخر وغني جداً بالأوميجا ٣ والفيتامينات."
        ],
        en: [
          "100% natural, whole and firm herring roe beads.",
          "Very light sea salt curing to highlight the raw native flavor.",
          "Hand-packed under strict sanitary conditions to maintain quality.",
          "Luxurious appetizer, exceptionally rich in Omega-3 and vitamins."
        ]
      },
      specs: {
        weight: { ar: "٢٥٠ جرام صافي", en: "250g net" },
        origin: { ar: "هولندا", en: "Netherlands" },
        shelfLife: { ar: "٦ أشهر (مبرد من ٠ إلى ٤ درجات)", en: "6 months (chilled 0-4°C)" }
      },
      nutrition: {
        calories: "185 kcal",
        fat: "11g",
        protein: "22g",
        salt: "1.4g"
      },
      ingredients: {
        ar: "بطارخ رنجة هارينج خرز طبيعية، ملح بحري، زيت نباتي نقي.",
        en: "Natural herring roe beads, sea salt, pure vegetable oil."
      }
    },
    {
      id: "canned-herring-oil",
      title: { ar: "رنجة معلبة فاخرة بزيت الزيتون البكر", en: "Premium Canned Herring in Olive Oil" },
      category: { ar: "المعلبات سهلة الفتح", en: "Canned Seafood" },
      image: imgPr2,
      rating: 4.8,
      size: { ar: "علبة معدنية سهلة الفتح - ١٢٠ جرام صافي", en: "Easy-open tin can - 120g net" },
      desc: { 
        ar: "قطع فيليه رنجة مدخنة ناعمة خالية من العظم ومغمورة بزيت زيتون بكر ممتاز وتوابل خفيفة، معبأة لسهولة التناول الفوري في الرحلات والتنقل.",
        en: "Tender, boneless smoked herring fillet cuts submerged in extra virgin olive oil and light seasoning, canned for instant on-the-go enjoyment."
      },
      details: {
        ar: [
          "قطع فيليه رنجة خالية تماماً من الجلد والشوك.",
          "مغمورة بالكامل في زيت زيتون بكر ممتاز طبيعي ١٠٠٪.",
          "علبة معدنية محمية ومقاومة للصدأ سهلة الفتح وعملية التخزين.",
          "لا تتطلب التبريد قبل الفتح وصلاحيتها ممتدة."
        ],
        en: [
          "De-boned and skinless tender herring fillet cuts.",
          "Fully submerged in 100% natural extra virgin olive oil.",
          "Rust-free, easy-open steel can for durable shelf storage.",
          "Requires no refrigeration before opening, ideal for travel."
        ]
      },
      specs: {
        weight: { ar: "١٢٠ جرام صافي", en: "120g net" },
        origin: { ar: "هولندا / النرويج", en: "Netherlands / Norway" },
        shelfLife: { ar: "٢٤ شهر (حرارة الغرفة)", en: "24 months (room temp)" }
      },
      nutrition: {
        calories: "245 kcal",
        fat: "18g",
        protein: "20g",
        salt: "1.2g"
      },
      ingredients: {
        ar: "قطع فيليه رنجة مدخنة، زيت زيتون بكر ممتاز، ملح خفيف.",
        en: "Smoked herring fillet, extra virgin olive oil, light salt."
      }
    },
    {
      id: "whole-smoked-herring-box",
      title: { ar: "صندوق رنجة جامبو كاملة على الجليد", en: "Premium Jumbo Box of Whole Smoked Herring" },
      category: { ar: "رنجة مغلفة", en: "Packaged Herring" },
      image: imgPr4,
      rating: 4.9,
      size: { ar: "صندوق كرتوني فاخر - وزن تقريبي ٥ كجم", en: "Premium carton box - approx 5 kg" },
      desc: { 
        ar: "صندوق الجملة والضيافة من رنجة سيد البلد الذهبية الكاملة المنتقاة حبة بحبة، مغلفة حرارياً ومحفوظة بالثلج لضمان النضارة المطلقة.",
        en: "Wholesale & catering size box featuring Seed El Balad signature whole golden smoked herring, selected piece by piece and chilled on ice for absolute freshness."
      },
      details: {
        ar: [
          "أسماك هارينج هولندية كاملة متجانسة الحجم وغنية باللحم والدهون.",
          "مدخنة طبيعياً بنشارة خشب الزان للحصول على النكهة المتزنة.",
          "تأتي مغلفة حرارياً ومفرغة الهواء بشكل فردي داخل الصندوق.",
          "مثالية للموزعين، المطاعم، والمناسبات الكبرى."
        ],
        en: [
          "Whole Dutch herring of uniform size, rich in meat and natural fats.",
          "Naturally smoked with beechwood for a premium balanced smoky flavor.",
          "Individually vacuum-sealed to lock in freshness inside the box.",
          "Ideal for wholesalers, restaurants, and large gatherings."
        ]
      },
      specs: {
        weight: { ar: "٥ كجم (تقريبي)", en: "5 kg (approx)" },
        origin: { ar: "هولندا", en: "Netherlands" },
        shelfLife: { ar: "٤ أشهر (مجمد)", en: "4 months (frozen)" }
      },
      nutrition: {
        calories: "210 kcal",
        fat: "15g",
        protein: "18g",
        salt: "2.1g"
      },
      ingredients: {
        ar: "سمك هارينج كامل، ملح طعام، دخان خشب الزان الطبيعي.",
        en: "Whole herring fish, table salt, natural beechwood smoke."
      }
    },
    {
      id: "family-savings-box",
      title: { ar: "صندوق التوفير العائلي من ظروف الرنجة", en: "Family Savings Box of Vacuum Herring Pouches" },
      category: { ar: "رنجة مغلفة", en: "Packaged Herring" },
      image: imgPr5,
      rating: 4.9,
      size: { ar: "علبة كرتونية فاخرة تحتوي على ٦ ظروف مفرغة الهواء", en: "Premium box containing 6 vacuum pouches" },
      desc: { 
        ar: "صندوق عائلي مميز يحتوي على ظروف رنجة سيد البلد الفاخرة المغلفة حرارياً ومفرغة من الهواء، خيار ممتاز للتخزين المنزلي الطويل والمناسبات الكبرى.",
        en: "Special family package containing individual vacuum-sealed pouches of Seed El Balad smoked herring, perfect for extended storage and large family gatherings."
      },
      details: {
        ar: [
          "صندوق اقتصادي يحتوي على ٦ ظروف رنجة مغلفة بشكل مستقل.",
          "كل ظرف مغلق تماماً وخالٍ من الروائح وسهل الحفظ والتخزين.",
          "مجهزة بخشب الزان ومدخنة على البارد بأحدث التكنولوجيات.",
          "تضمن طعاماً صحياً معقماً وآمناً لعائلتك."
        ],
        en: [
          "Economical box containing 6 separately vacuum-packaged herring pouches.",
          "Each pouch is odor-free, sanitary, and easy to store in the freezer.",
          "Cold-smoked using premium beechwood and advanced clean-tech.",
          "Guarantees hygienic, safe, and nutritious seafood for your family."
        ]
      },
      specs: {
        weight: { ar: "٦ كجم تقريباً (٦ ظروف × ١ كجم)", en: "Approx 6 kg (6 pouches x 1 kg)" },
        origin: { ar: "هولندا", en: "Netherlands" },
        shelfLife: { ar: "٦ أشهر (مجمد)", en: "6 months (frozen)" }
      },
      nutrition: {
        calories: "210 kcal",
        fat: "15g",
        protein: "18g",
        salt: "2.1g"
      },
      ingredients: {
        ar: "سمك هارينج كامل مدخن، ملح طعام، خشب الزان الطبيعي.",
        en: "Whole smoked herring, table salt, natural beechwood smoke."
      }
    },
    {
      id: "smoked-herring-retail-pouch",
      title: { ar: "ظرف رنجة مدخنة فاخرة بالوزن", en: "Premium Smoked Herring Retail Pouch" },
      category: { ar: "رنجة مغلفة", en: "Packaged Herring" },
      image: imgPr7,
      rating: 4.9,
      size: { ar: "ظرف محكم الغلق مفرغ الهواء - وزن تقريبي ١ كجم", en: "Vacuum sealed retail pouch - approx 1 kg" },
      desc: { 
        ar: "ظرف رنجة سيد البلد الفاخرة الكاملة والمدخنة ببطء بنشارة خشب الزان، مغلف تفريغ كامل لمنع الروائح والحفاظ على الطعم الأصلي.",
        en: "Standard retail pouch featuring Seed El Balad whole smoked herring, slow-smoked with beechwood and vacuum packed to lock in freshness and prevent odors."
      },
      details: {
        ar: [
          "رنجة كاملة فاخرة مدخنة بخشب الزان الطبيعي.",
          "تغليف حراري متكامل يمنع نفاذ أي رائحة للخارج.",
          "لحم مدخن غني، متماسك، وبطعم متوازن التمليح.",
          "المنتج الأكثر طلباً لمبيعات التجزئة والاستخدام المنزلي."
        ],
        en: [
          "Whole premium herring naturally smoked with real beechwood.",
          "Hygienic heavy-duty vacuum seal prevents any odor leakage.",
          "Rich, firm smoked meat with a perfectly balanced salt profile.",
          "Our most popular item for standard retail sales and household use."
        ]
      },
      specs: {
        weight: { ar: "١ كجم (تقريبي)", en: "1 kg (approx)" },
        origin: { ar: "هولندا / النرويج", en: "Netherlands / Norway" },
        shelfLife: { ar: "٤ أشهر (مجمد)", en: "4 months (frozen)" }
      },
      nutrition: {
        calories: "210 kcal",
        fat: "15g",
        protein: "18g",
        salt: "2.1g"
      },
      ingredients: {
        ar: "سمك هارينج كامل، ملح طعام، دخان خشب الزان الطبيعي.",
        en: "Whole herring fish, table salt, natural beechwood smoke."
      }
    },
    {
      id: "premium-gift-bag",
      title: { ar: "شنطة هدايا سيد البلد الورقية", en: "Seed El Balad Premium Gift Bag" },
      category: { ar: "الهدايا والتغليف", en: "Gifts & Packaging" },
      image: imgPr1,
      rating: 4.9,
      size: { ar: "شنطة ورقية فاخرة لحمل المنتجات", en: "Premium paper bag for product gifting" },
      desc: { 
        ar: "شنطة ورقية فاخرة من الكرتون المقوى بتصميم هوية سيد البلد الأنيق، مثالية لتقديم الهدايا والمناسبات والتوصيل الفاخر بأرقى مظهر.",
        en: "Luxurious thick paper bag featuring Seed El Balad elegant brand identity, perfect for gifting, special occasions, and premium presentation."
      },
      details: {
        ar: [
          "مصنوعة من كرتون مقوى عالي الجودة وصديق للبيئة.",
          "تتميز بمقابض قطنية متينة لسهولة الحمل والراحة.",
          "مطبوع عليها هوية وشعار \"سيد البلد\" بألوان العلامة التجارية الرسمية.",
          "تتسع لعدد متنوع من المنتجات والعلب والبرطمانات كهدية قيمة."
        ],
        en: [
          "Made of eco-friendly, high-density reinforced paperboard.",
          "Features soft, strong cotton rope handles for comfortable carrying.",
          "Embossed with the official Seed El Balad logo and colors.",
          "Holds a variety of our seafood products, making it a perfect gift set."
        ]
      },
      specs: {
        weight: { ar: "تتسع حتى ٤ كجم", en: "Holds up to 4 kg" },
        origin: { ar: "جمهورية مصر العربية", en: "Egypt" },
        shelfLife: { ar: "متينة وقابلة لإعادة الاستخدام", en: "Durable & reusable" }
      },
      nutrition: {
        calories: "-",
        fat: "-",
        protein: "-",
        salt: "-"
      },
      ingredients: {
        ar: "ورق كرتون صديق للبيئة، أحبار طباعة مائية غير سامة، حبال قطنية.",
        en: "Eco-friendly cardboard paper, non-toxic water-based inks, cotton ropes."
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
