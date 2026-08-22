import imgVacuumHerring from '../assets/images/seed-el-balad/Vacuum Herring.webp';
import imgPr1 from '../assets/images/seed-el-balad/pr1.webp';
import imgPr2 from '../assets/images/seed-el-balad/pr2.webp';
import imgPr3 from '../assets/images/seed-el-balad/pr3.webp';
import imgPr4 from '../assets/images/seed-el-balad/pr4.webp';
import imgPr5 from '../assets/images/seed-el-balad/pr5.webp';
import imgPr6 from '../assets/images/seed-el-balad/pr6.webp';
import imgPr7 from '../assets/images/seed-el-balad/pr7.webp';
import imgDutchHerring from '../assets/images/seed-el-balad/Dutch Herring.webp';
import imgNorwegianHerring from '../assets/images/seed-el-balad/Norwegian Herring.webp';
import imgIcelandicHerring from '../assets/images/seed-el-balad/Icelandic Herring.webp';
import imgRussianHerring from '../assets/images/seed-el-balad/Russian Herring.webp';
import imgVacuumMackerel from '../assets/images/seed-el-balad/Vacuum Mackerel.webp';

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

export interface ProductSEO {
  metaTitle: { ar: string; en: string };
  metaDescription: { ar: string; en: string };
  keywords: { ar: string; en: string };
  altText: { ar: string; en: string };
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
  seo: ProductSEO;
}

export class ProductHelper {
  private static readonly products: Product[] = [
    {
      id: "vacuum-herring",
      title: { ar: "رنجة فاكيوم فاخرة مفرغة الهواء", en: "Vacuum Herring" },
      category: { ar: "رنجة مغلفة", en: "Packaged Herring" },
      image: imgVacuumHerring,
      rating: 5.0,
      size: { ar: "ظرف فاكيوم محكم الغلق - وزن تقريبي ١ كجم", en: "Vacuum-sealed pouch - approx 1 kg" },
      desc: { 
        ar: "رنجة فاكيوم (Vacuum Herring) الفاخرة من سيد البلد هي الاختيار الأمثل لعشاق الجودة العالية والحفظ الآمن الطويل. نعتمد في تصنيعها على أجود أنواع أسماك الهارينج المستوردة والمصطادة من مياه بحر الشمال الباردة والنقية. يتم تدخين الأسماك تدخيناً بطيئاً على البارد باستخدام خشب الزان الطبيعي الخالص لإكسابها لوناً ذهبياً ساحراً ومذاقاً مدخناً أصيلاً يذوب في الفم، مع ضبط دقيق لنسبة الملح لتكون خفيفة وصحية ومناسبة لكافة أفراد العائلة. يتم سحب الهواء تماماً وتغليف الرنجة بتقنية الفاكيوم الحراري المتطورة داخل مصنعنا المعتمد ببلبيس، مما يعزلها تماماً عن الهواء الخارجي والبكتيريا ويمنع انبعاث أية روائح داخل الثلاجة مع بقاء اللحم رطباً وطازجاً بنكهته الكاملة وقيمته الغذائية الغنية بأحماض أوميجا 3 والبروتين.",
        en: "Seed El-Balad's Vacuum Herring is the premium standard for seafood enthusiasts seeking exceptional flavor combined with superior hygienic preservation. Crafted from top-tier North Sea herring, each fish undergoes a slow, natural cold-smoking process using premium beechwood sawdust to achieve an alluring golden skin and a succulent, melt-in-the-mouth buttery texture. Balanced with a delicate touch of pure sea salt, it provides an exquisite taste rich in Omega-3 fatty acids and wholesome protein. Hermetically sealed using advanced thermal vacuum technology in our certified Bilbeis facility, it completely locks out air and bacteria, ensuring 100% odor-free refrigeration while maintaining peak moistness and fresh aroma."
      },
      details: {
        ar: [
          "منتج فاخر يحمل اسم Vacuum Herring معبأ بتكنولوجيا التفريغ الهوائي الفاكيوم.",
          "مدخنة بخشب الزان الطبيعي المستورد دون أية ملونات أو نكهات صناعية.",
          "تغليف حراري عازل يمنع نفاذ الهواء ويضمن عدم خروج أي روائح بالثلاجة.",
          "لحم رطب زبدي متماسك غني بالبروتين والأحماض الدهنية أوميجا ٣.",
          "مطابقة لأعلى معايير سلامة الأغذية والتطهير ISO 22000 و HACCP."
        ],
        en: [
          "Premium Vacuum Herring packaged using state-of-the-art air extraction technology.",
          "Naturally cold-smoked with real imported beechwood, zero artificial additives.",
          "Heavy-duty barrier pouch preventing oxidation and ensuring 100% odor-free refrigeration.",
          "Succulent, buttery texture rich in wholesome protein and essential Omega-3 fatty acids.",
          "Fully compliant with global food hygiene and quality standards (ISO 22000, HACCP)."
        ]
      },
      specs: {
        weight: { ar: "١ كجم تقريباً", en: "Approx 1 kg" },
        origin: { ar: "هولندا / النرويج", en: "Netherlands / Norway" },
        shelfLife: { ar: "٦ أشهر (مجمد -١٨ مئوية)", en: "6 months (frozen -18°C)" }
      },
      nutrition: {
        calories: "218 kcal",
        fat: "15.5g",
        protein: "19.5g",
        salt: "1.8g"
      },
      ingredients: {
        ar: "سمك هارينج كامل، ملح بحري نقي، دخان خشب الزان الطبيعي.",
        en: "Whole herring fish, pure sea salt, natural beechwood smoke."
      },
      seo: {
        metaTitle: { ar: "Vacuum Herring | رنجة فاكيوم فاخرة مفرغة الهواء | سيد البلد", en: "Vacuum Herring | Premium Smoked Vacuum Sealed Herring | Seed El-Balad" },
        metaDescription: { ar: "رنجة فاكيوم (Vacuum Herring) من سيد البلد: رنجة هولندية ونرويجية مدخنة بخشب الزان، مغلفة بالتفريغ الهوائي الفاكيوم بدون أي روائح وبأعلى جودة.", en: "Buy Vacuum Herring by Seed El-Balad. Cold-smoked Dutch and Norwegian herring, vacuum sealed for ultimate freshness and 100% odor-free refrigeration." },
        keywords: { ar: "Vacuum Herring, رنجة فاكيوم, رنجة مفرغة الهواء, رنجة سيد البلد, سمك مدخن فاكيوم, اسعار الرنجة الفاكيوم", en: "Vacuum Herring, vacuum packed herring, Seed El-Balad smoked fish, North Sea herring" },
        altText: { ar: "ظرف رنجة فاكيوم Vacuum Herring فاخرة من سيد البلد", en: "Seed El-Balad Vacuum Herring sealed pack" }
      }
    },
    {
      id: "dutch-herring",
      title: { ar: "رنجة هولندي فاخرة مدخنة", en: "Premium Dutch Smoked Herring" },
      category: { ar: "رنجة مغلفة", en: "Packaged Herring" },
      image: imgDutchHerring,
      rating: 5.0,
      size: { ar: "ظرف فاكيوم محكم الغلق - وزن تقريبي ١ كجم", en: "Vacuum-sealed pouch - approx 1 kg" },
      desc: { 
        ar: "تعتبر رنجة سيد البلد الهولندية الفاخرة تاج المأكولات البحرية المدخنة في مصر، حيث يتم انتقاؤها خصيصاً من أحدث مواسم صيد أسماك الهارينج في مياه بحر الشمال الباردة والنقية بهولندا. تخضع الأسماك لعملية تدخين تقليدية بطيئة على البارد باستخدام نشارة خشب الزان الطبيعي المستورد، مما يمنحها لوناً ذهبياً براقاً وقواماً زبدياً يذوب في الفم مع نسبة دهون صحية طبيعية غنية بأحماض أوميجا 3 والبروتين عالي القيمة الغذائية. يتم تمليح الأسماك بملح البحر الصافي بنسبة متوازنة وخفيفة للغاية تناسب أرقى الذواقة والعائلات، وتغلف حرارياً بتفريغ هوائي تام (فاكيوم) داخل مصنعنا المعتمد بشهادات الأيزو ISO 22000 والـ HACCP بمدينة بلبيس، لضمان أعلى مستويات النظافة ومنع أي تسرب للروائح مع الحفاظ على الطراوة والنضارة الكاملة لأطول فترة.",
        en: "Seed El-Balad's Premium Dutch Smoked Herring represents the pinnacle of artisanal smoked seafood in Egypt. Harvested exclusively from the pristine, icy depths of the North Sea in the Netherlands during peak season, every herring is hand-selected for optimal fat content and plump tenderness. Our master curers slowly cold-smoke the fish using 100% natural imported beechwood shavings, imparting a signature golden luster and a luscious, melt-in-the-mouth buttery texture rich in essential Omega-3 fatty acids and wholesome protein. Lightly seasoned with pure natural sea salt, it meets the highest gourmet standards. Vacuum-sealed in our state-of-the-art ISO 22000 & HACCP certified facility in Bilbeis, it ensures peak freshness and zero odor leakage."
      },
      details: {
        ar: [
          "مستوردة مباشرة من أرقى مزارع ومصايد هولندا المعتمدة دولياً في بحر الشمال.",
          "نسبة دهون طبيعية عالية تمنح السمك طراوة ونكهة زبدية أصيلة لا تُقاوم.",
          "مدخنة طبيعياً على البارد بنشارة خشب الزان الفاخر دون أي إضافات أو ملونات كيميائية.",
          "مغلفة حرارياً ومفرغة الهواء (فاكيوم) لحفظ النضارة التامة ومنع تسرب الروائح تماماً.",
          "مطابقة لأعلى المعايير الصحية وسلامة الغذاء العالمية ISO 22000 و HACCP."
        ],
        en: [
          "Directly imported from internationally certified premium Dutch fisheries in the North Sea.",
          "High natural fat profile offering exceptional tenderness and buttery richness.",
          "Naturally cold-smoked with premium beechwood without artificial additives or colorants.",
          "Heavy-duty vacuum packed to preserve peak freshness and lock in aroma completely.",
          "Fully compliant with international food safety and hygiene protocols (ISO 22000, HACCP)."
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
      },
      seo: {
        metaTitle: { ar: "رنجة هولندي فاخرة مدخنة | سمك هارينج أصلي | سيد البلد", en: "Premium Dutch Smoked Herring | Authentic Seafood | Seed El-Balad" },
        metaDescription: { ar: "اشتري رنجة هولندي فاخرة مدخنة على البارد بخلاصة خشب الزان الطبيعي من سيد البلد. سمك هارينج عالي الأوميجا 3، لحم زبدي وتغليف فاكيوم محكم.", en: "Buy premium Dutch smoked herring cold-smoked with natural beechwood by Seed El-Balad. High Omega-3, buttery texture, vacuum-sealed for ultimate freshness." },
        keywords: { ar: "رنجة هولندي, سمك هارينج هولندي, رنجة مدخنة فاخرة, سمك مدخن أصلي, رنجة سيد البلد, رنجة فاكيوم, رنجة زبدة, اسعار الرنجة في مصر", en: "Dutch herring, smoked herring Egypt, Seed El-Balad, premium smoked fish, vacuum packed herring, North Sea herring" },
        altText: { ar: "رنجة هولندي فاخرة مدخنة مغلفة فاكيوم من علامة سيد البلد", en: "Seed El-Balad Premium Dutch Smoked Herring in vacuum sealed pack" }
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
        ar: "تتميز الرنجة النرويجية الملكية سوبر جامبو من سيد البلد بحجمها الاستثنائي وقوامها الممتلئ الغني باللحم الأبيض النقي، حيث يتم صيدها من أعماق المضايق البحرية النرويجية والمياه القطبية الشمالية شديدة النقاء والبرودة. توفر هذه البيئة الطبيعية للأسماك تركيزاً غذائياً فائقاً من المعادن والبروتينات وزيوت الأوميجا 3 المفيدة لصحة القلب. نعتمد في تصنيعها على تمليح بحري خفيف ودقيق للغاية يبرز حلاوة لحم السمك الطبيعي، يعقبه تدخين بطيء متقن يمنح الجلد لمعاناً فضياً مائلاً للذهبي ورائحة مدخنة متوازنة وساحرة. تأتيكم مغلفة بأحدث تقنيات التفريغ الحراري من الهواء للحفاظ على جودتها ونضارتها في ثلاجتكم دون أي روائح.",
        en: "Our Royal Norwegian Super Jumbo Herring is renowned for its generous sizing, thick succulent fillets, and firm, pristine white meat. Sourced from the icy, crystal-clear fjords of Norway, these sub-arctic fish develop dense nutritional value rich in healthy proteins and Omega-3 oils. Cured with delicate care using pure marine salt and slowly smoked with seasoned wood, this delicacy achieves a harmonious flavor that accentuates the pure, oceanic taste without overpowering sharpness. Packaged using heavy-duty vacuum sealing in our sanitized facility, it guarantees uncompromising quality for large family meals and festive celebrations."
      },
      details: {
        ar: [
          "حجم سوبر جامبو ملكي ممتلئ باللحم الأبيض النقي وغني بالبروتين والأوميجا ٣.",
          "صيد مباشر من أعماق المحيط النرويجي والمضايق القطبية فائقة النقاء.",
          "تمليح بحري خفيف معتدل يحافظ على طراوة اللحم ونكهته الطبيعية.",
          "تغليف فاكيوم محكم تماماً مانع للهواء والتلف ومطابق للمواصفات الدولية.",
          "معالجة ومعبأة تحت رقابة صحية صارمة في مصنع بلبيس."
        ],
        en: [
          "Super jumbo royal grading loaded with succulent white meat, protein, and Omega-3.",
          "Sourced directly from the pristine Norwegian fjords and deep arctic waters.",
          "Mild sea salt curing preserving the delicate moisture and natural flavor of the fish.",
          "Airtight vacuum barrier pouch locking out air and preventing external odors.",
          "Processed and packed under strict quality control at our Bilbeis facility."
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
      },
      seo: {
        metaTitle: { ar: "رنجة نرويجي ملكية سوبر جامبو | رنجة لحمية فاخرة | سيد البلد", en: "Royal Norwegian Super Jumbo Smoked Herring | Seed El-Balad" },
        metaDescription: { ar: "رنجة نرويجي سوبر جامبو لحمية من سيد البلد، مستوردة من أنقى مياه النرويج، غنية بالبروتين والأوميجا 3 وتمليح خفيف مغلفة فاكيوم.", en: "Discover Royal Norwegian Super Jumbo Smoked Herring by Seed El-Balad. Thick, meaty fillets from icy Norwegian waters, lightly salted and vacuum-sealed." },
        keywords: { ar: "رنجة نرويجي, رنجة جامبو, رنجة نرويجية مدخنة, سمك هارينج نرويجي, اسماك مدخنة مصر, سيد البلد بلبيس", en: "Norwegian herring, jumbo smoked herring, Norwegian seafood, Seed El-Balad Egypt" },
        altText: { ar: "رنجة نرويجي سوبر جامبو مدخنة ومغلفة فاكيوم من سيد البلد", en: "Seed El-Balad Royal Norwegian Super Jumbo Smoked Herring pack" }
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
        ar: "تأتيكم الرنجة الأيسلندية الفاخرة من سيد البلد من أنقى المسطحات المائية في شمال المحيط الأطلسي المحيطة بسواحل أيسلندا البركانية البكر. تشتهر أسماك الهارينج الأيسلندية بلحامها النقي المخملي وتوازنها الفريد بين النعومة والتماسك. يتم تدخينها باتباع وصفات تدخين نوردية هادئة للغاية ومدروسة لتكسب السمكة نكهة خفيفة راقية تدغدغ الحواس دون حدة. خالية تماماً من أية إضافات صناعية أو مواد حافظة، ومعدة خصيصاً لأولئك الذين يبحثون عن تجربة طعام بحرية نقية وراقية تجمع بين أصالة المذاق والتغذية الصحية المتكاملة.",
        en: "Imported from the volcanic, pure sub-arctic waters around Iceland, Seed El-Balad's Icelandic Smoked Herring is celebrated for its velvet-smooth texture and refined, clean flavor. Icelandic fisheries are globally renowned for their unmatched sustainability and purity. Smoked slowly using delicate Nordic aromatic wood methods, it delivers an understated, sophisticated smoky aroma. Free of all chemical additives and coloring agents, it stands out as an exquisite, heart-healthy seafood delight perfect for discerning gourmets."
      },
      details: {
        ar: [
          "مستوردة من مصايد أيسلندا المستدامة المشهود لها عالمياً بنقاء البيئة البحرية.",
          "توازن استثنائي بين التمليح البحري الهادئ والنكهة المدخنة الخفيفة.",
          "لحم ناعم ومخملي الملمس مثالي للمقبلات الفاخرة والسلطات.",
          "خالية تماماً من المواد الحافظة والملونات الصناعية بنسبة ١٠٠٪.",
          "تعبئة معقمة ومحكمة الغلق بالتفريغ الهوائي الفاكيوم."
        ],
        en: [
          "Sourced from internationally certified pristine, sustainable Icelandic ocean waters.",
          "Harmonious balance of subtle sea salt curing and gentle Nordic wood smoking.",
          "Velvety, smooth fillet texture ideal for upscale appetizers and gourmet platters.",
          "100% natural, free of artificial colors, preservatives, and chemicals.",
          "Hygienically vacuum-sealed to lock in aroma and peak tenderness."
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
      },
      seo: {
        metaTitle: { ar: "رنجة أيسلندي فاخرة بنقاء المحيط | سيد البلد للمأكولات البحرية", en: "Premium Pure Icelandic Smoked Herring | Seed El-Balad" },
        metaDescription: { ar: "رنجة أيسلندية فاخرة من مياه أيسلندا النقية، مدخنة بلطف ومملحة ملح بحري خفيف. طعم سلس وقيمة غذائية عالية من سيد البلد.", en: "Premium Icelandic Smoked Herring by Seed El-Balad. Sourced from pristine Atlantic waters, delicately smoked and vacuum packed." },
        keywords: { ar: "رنجة ايسلندي, سمك هارينج ايسلندا, رنجة مدخنة خفيفة, اسماك مدخنة فاخرة, سيد البلد", en: "Icelandic herring, pure smoked herring, Icelandic seafood Egypt, Seed El-Balad" },
        altText: { ar: "رنجة أيسلندي فاخرة مغلفة حرارياً ومفرغة من الهواء سيد البلد", en: "Seed El-Balad Pure Icelandic Smoked Herring pack" }
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
        ar: "لعشاق المذاق الأصيل والنكهات العميقة القوية، تقدم سيد البلد الرنجة الروسية الكلاسيكية المجهزة على الطريقة السلافية التراثية العريقة. يتم تعتيق الأسماك وتمليحها تمليحاً مميزاً يمنح اللحم تماسكاً وقوة نكهة لا تضاهى، ثم تُدخن بخشب الزان والأرو الصلب لتكتسب قشرة برونزية ذهبية دافئة ورائحة شواء وتدخين تملأ الحواس. تعتبر الخيار الأول في الموائد والولائم التراثية، حيث تتناغم نكهتها الجريئة مع زيت الزيتون البكر، البصل الأخضر، والليمون الطازج، وهي معبأة في أظرف فاكيوم قوية تحميها من الهواء والرطوبة.",
        en: "For connoisseurs craving robust, heritage flavors, Seed El-Balad presents the Classic Russian Smoked Herring crafted in traditional Slavic smokehouse styles. Cured to develop a firm, full-bodied texture and intensely savory depth, each fish is smoked over dense beech and oak hardwoods, acquiring a rich bronze sheen and an unforgettable smoky aroma. Perfect as the centerpiece of festive spreads, paired with virgin olive oil, herbs, and lemon, it comes sealed in heavy vacuum packaging."
      },
      details: {
        ar: [
          "تدخين تراثي عميق بنشارة خشب الزان والأرو يكسب السمكة نكهة غنية قوية.",
          "قوام لحمي متماسك ومذاق كلاسيكي مفضل لعشاق الرنجة الأصيلة.",
          "تعتيق متقن يبرز النكهات البحرية التراثية العريقة.",
          "تغليف فاكيوم متين مانع للهواء والرطوبة ومحافظ على الجودة.",
          "جاهزة للأكل أو التقديم المباشر مع الزيت والليمون."
        ],
        en: [
          "Deep heritage smoking over beech and oak hardwoods for intense flavor.",
          "Firm, meaty texture favored by lovers of classic smoked seafood.",
          "Expertly cured to highlight authentic traditional oceanic richness.",
          "Airtight barrier vacuum packaging protecting against moisture and oxidation.",
          "Ready to slice and serve dressed with quality oil and fresh citrus."
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
      },
      seo: {
        metaTitle: { ar: "رنجة روسي كلاسيكية مميزة | نكهة تدخين تراثية | سيد البلد", en: "Classic Heritage Russian Smoked Herring | Seed El-Balad" },
        metaDescription: { ar: "رنجة روسية كلاسيكية مدخنة بنكهة قوية وقوام متماسك من سيد البلد. معالجة على الطريقة التراثية ومغلفة فاكيوم لنضارة دائمة.", en: "Classic Russian Smoked Herring by Seed El-Balad. Bold, rich flavor cured with heritage smoking techniques and sealed for freshness." },
        keywords: { ar: "رنجة روسي, رنجة كلاسيكية, رنجة مدخنة قوية, سمك مدخن مصري, سيد البلد جولد فودز", en: "Russian herring, heritage smoked herring, strong smoked fish Egypt, Seed El-Balad" },
        altText: { ar: "ظرف رنجة روسي كلاسيكية مدخنة فاخرة من سيد البلد", en: "Seed El-Balad Classic Russian Smoked Herring pack" }
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
        ar: "يعد سمك الماكريل المدخن الفاخر من سيد البلد الخيار الذهبي لعشاق الأسماك الدسمة الغنية بالقيمة الغذائية العالية. نستورد أسماك الماكريل الأطلسية الممتازة المصطادة من المياه الباردة، والتي تتميز بنسبة وفيرة من الزيوت الطبيعية المفيدة والأوميجا 3 وفيتامين د. يتم تنظيف الأسماك وتمليحها تمليحاً خفيفاً، ثم تدخينها على الطريقة الأوروبية بنشارة خشب الزان لتكتسب لمعاناً ذهبياً غنياً ولحماً عصيرياً طرياً ومذاقاً مدخناً يأسر الحواس. مغلفة بتقنية الفاكيوم للحفاظ على عصارتها وزيوتها المفيدة ونضارتها التامة.",
        en: "Seed El-Balad's Premium Smoked Mackerel is the golden standard for nutritious, oil-rich seafood lovers. Harvested from the cold Atlantic Ocean, our Atlantic mackerel boasts rich concentrations of healthy Omega-3 fatty acids, proteins, and Vitamin D. Lightly cured with fine sea salt and hot-smoked in European tradition over natural beechwood embers, it develops an appetizing bronze-golden crust and deeply succulent, flaky meat. Sealed in airtight vacuum packs to retain its natural juices and smoke essence."
      },
      details: {
        ar: [
          "سمك ماكريل أطلسي مستورد عالي الجودة غني بالدهون المفيدة والأوميجا ٣ والبروتين.",
          "تدخين ذهبي متقن يمنح اللحم قواماً غنياً وعصيرياً وطرياً للغاية.",
          "تمليح بحري خفيف متناسق يبرز حلاوة لحم الماكريل الطبيعي.",
          "تغليف فاكيوم صحي مفرغ من الهواء للحفاظ على الزيوت والنكهة دون جفاف.",
          "معتمد ومصنع بأعلى معايير سلامة الأغذية والتطهير."
        ],
        en: [
          "Imported Atlantic mackerel loaded with healthy Omega-3 fats, protein, and Vitamin D.",
          "Artisanal golden smoking delivers an exceptionally juicy, succulent, and flaky texture.",
          "Mild sea salt seasoning that accentuates the fish's natural ocean sweetness.",
          "Hygienic vacuum sealing locking in natural oils, moisture, and smoky aroma.",
          "Processed in full compliance with certified international food safety guidelines."
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
      },
      seo: {
        metaTitle: { ar: "سمك ماكريل مدخن فاخر فاكيوم | غني بالأوميجا 3 | سيد البلد", en: "Premium Vacuum-Sealed Smoked Mackerel | Seed El-Balad" },
        metaDescription: { ar: "سمك ماكريل أطلسي مدخن فاخر من سيد البلد. لحم طري ذهبي غني بالأوميجا 3 والزيوت المفيدة، مغلف فاكيوم لنضارة تامة.", en: "Premium Atlantic Smoked Mackerel by Seed El-Balad. Juicy, golden fillets packed with Omega-3 and natural smoke aroma, vacuum packed." },
        keywords: { ar: "ماكريل مدخن, سمك ماكريل فاكيوم, اسماك مدخنة اوميجا 3, ماكريل سيد البلد, ماكريل نرويجي", en: "Smoked mackerel, vacuum packed mackerel, Atlantic mackerel Egypt, Seed El-Balad" },
        altText: { ar: "سمك ماكريل أطلسي مدخن فاخر مغلف فاكيوم من سيد البلد", en: "Seed El-Balad Premium Vacuum-Sealed Smoked Mackerel pack" }
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
        ar: "صُمم ظرف شرائح فيليه الرنجة المخلية من سيد البلد ليمنحك الراحة القصوى والرفاهية في التقديم السريع دون أي مجهود. نقوم بإخلاء وتشفية أرقى أسماك الرنجة الهولندية يدوياً للتخلص التام من الجلد والشوك وسلسلة الظهر بنسبة 100%، لنقدم لك شرائح فيليه صافية ونقية ومغمورة بنسبة خفيفة جداً من الزيت النقي لحفظ الطراوة. تأتي الشرائح في كيس ستاند-أب فاخر مزود بسحاب محكم (Zip Lock) قابل لإعادة الفتح والغلق، مما يجعله مثالياً لإعداد سلطات الرنجة، السندوتشات السريعة، والمقبلات الفاخرة في دقائق معدودة.",
        en: "Seed El-Balad's Fresh Herring Fillet Slices pouch provides ultimate culinary convenience and instant luxury with zero preparation hassle. Every Dutch herring fillet is masterfully hand-deboned and skin-peeled to achieve 100% boneless and skinless purity. Submerged in a touch of light, neutral vegetable oil to preserve its supple moisture, the fillets are packed in a stand-up zipper pouch designed for easy resealing. Ideal for crafting rapid gourmet salads, sandwiches, and appetizers."
      },
      details: {
        ar: [
          "شرائح فيليه مخلاة يدوياً بدقة فائقة للتخلص من الجلد والشوك بنسبة ١٠٠٪.",
          "معبأة في ظرف بسحاب عملي (Zip Lock) لإعادة الغلق وحفظ النضارة بعد الاستخدام.",
          "لحم رطب وطري جاهز للأكل والتقديم الفوري دون أي عناء في التنظيف.",
          "مثالي لتحضير سلطات الرنجة بالطحينة، السندوتشات، ومقبلات الحفلات.",
          "صلاحية مضمونة ونظافة كاملة معتمدة من مصانعنا في بلبيس."
        ],
        en: [
          "Hand-filleted with surgical precision for 100% skinless & boneless meat purity.",
          "Packed in a smart resealable zipper pouch for effortless kitchen storage and freshness.",
          "Moist, tender fillets ready to serve instantly with zero cleaning or deboning effort.",
          "Perfect for creating gourmet herring salads, tahini mixes, and quick spreads.",
          "Certified food safety and hygienic processing guaranteed by our Bilbeis plant."
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
      },
      seo: {
        metaTitle: { ar: "ظرف شرائح فيليه رنجة مخلية بدون شوك | سيد البلد", en: "Fresh Herring Fillet Slices Resealable Pouch | Seed El-Balad" },
        metaDescription: { ar: "شرائح فيليه رنجة هولندية مخلية بدون شوك أو جلد من سيد البلد. ظرف عملي بسحاب للإغلاق، جاهزة للأكل الفوري والسلطات.", en: "Ready-to-eat boneless and skinless Dutch herring fillets in resealable pouch by Seed El-Balad. Perfect for quick salads and gourmet spreads." },
        keywords: { ar: "فيليه رنجة, رنجة مخلية, رنجة بدون شوك, فيليه رنجة هولندي, رنجة جاهزة للأكل, سيد البلد", en: "Herring fillets, boneless herring, skinless smoked herring, Seed El-Balad Egypt" },
        altText: { ar: "ظرف شرائح فيليه رنجة مخلية بسحاب من سيد البلد", en: "Seed El-Balad Fresh Herring Fillet Slices in resealable zipper pouch" }
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
        ar: "برطمان بطارخ رنجة الهارينج الخرز من سيد البلد هو كافيار المائدة المتوسطية وأرقى مقبلات المأكولات البحرية. يتم استخلاص البطارخ الطبيعية الخرزية الكاملة المتماسكة من إناث أسماك الهارينج المستوردة في ذروة نضجها. تخضع البطارخ لتمليح بحري خفيف للغاية للحفاظ على حبات الخرز المقرمشة ونكهتها البحرية الغنية والفريدة. معبأة يدوياً في برطمانات زجاجية معقمة ومحكمة الغلق لحفظ قيمتها الغذائية الفائقة من البروتينات، الدهون المفيدة، والأوميجا 3، مما يجعلها إضافة ملكية لأطباق المقبلات والكانابيه الفاخر.",
        en: "Seed El-Balad's Premium Herring Caviar Roe is the crown jewel of gourmet appetizers. Hand-harvested from prime mature female North Sea herring, each bead boasts crisp firmness and explosive oceanic savoriness. Lightly salted with mineral sea crystals to accent its innate, sweet sea depth, the roe is hand-packaged into sanitized glass jars. Exceptionally dense in high-grade protein, healthy fats, and Omega-3 nutrients, it turns any appetizer, canapé, or festive board into a royal feast."
      },
      details: {
        ar: [
          "بطارخ طبيعية خرز كاملة ١٠٠٪ بقوام متماسك ومقرمش ممتاز.",
          "تمليح بحري خفيف جداً يحافظ على النكهة والخصائص الطبيعية للبطارخ.",
          "معبأة يدوياً تحت شروط تعقيم كاملة داخل برطمانات زجاجية صحية.",
          "مقبل ملكي فاخر وغني جداً بالأوميجا ٣ والبروتينات والفيتامينات.",
          "خالية من المواد الحافظة الصناعية والملونات المضافة."
        ],
        en: [
          "100% natural, whole and firm herring roe beads with delightful popping texture.",
          "Gentle sea salt curing that highlights the native rich ocean savoriness.",
          "Hand-packed under hospital-grade sanitized conditions in premium glass jars.",
          "Luxurious royal appetizer, exceptionally rich in Omega-3, protein, and vitamins.",
          "Completely free of artificial preservatives, binders, or coloring agents."
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
      },
      seo: {
        metaTitle: { ar: "برطمان بطارخ رنجة خرز فاخرة | كافيار طبيعي | سيد البلد", en: "Premium Herring Caviar Roe Glass Jar | Seed El-Balad" },
        metaDescription: { ar: "برطمان بطارخ رنجة هارينج خرز طبيعية ١٠٠٪ من سيد البلد. قوام متماسك، تمليح خفيف، وغنية بالبروتين والأوميجا 3.", en: "100% Natural Herring Caviar Roe jar by Seed El-Balad. Crunchy, firm roe beads lightly cured for royal gourmet appetizers." },
        keywords: { ar: "بطارخ رنجة, بطارخ خرز, كافيار رنجة, بطارخ طبيعية, اسعار البطارخ في مصر, سيد البلد", en: "Herring roe, smoked herring caviar, natural fish roe Egypt, Seed El-Balad" },
        altText: { ar: "برطمان زجاجي بطارخ رنجة هارينج خرز طبيعية فاخرة من سيد البلد", en: "Seed El-Balad Premium Herring Caviar Roe glass jar" }
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
        ar: "تقدم معلبات رنجة سيد البلد بزيت الزيتون البكر الممتاز تجربة راقية للتناول الفوري أثناء السفر والتنقل أو الوجبات السريعة الصحية. نستخدم قطع فيليه رنجة مدخنة خالية تماماً من الشوك والعظام، ومغمورة بالكامل في أجود أنواع زيت الزيتون البكر الطبيعي المعصور على البارد وتوابل متوسطية خفيفة. تأتي في عبوة معدنية مخصصة سهلة الفتح (Easy-Open) مقاومة للصدأ تحافظ على جودة ونكهة المنتج لشهور طويلة في درجة حرارة الغرفة دون الحاجة للتبريد قبل الفتح.",
        en: "Seed El-Balad's Canned Smoked Herring in Extra Virgin Olive Oil provides an elevated, on-the-go culinary experience for healthy snacks and travel. Featuring boneless and skinless tender smoked herring cuts completely submerged in cold-pressed extra virgin olive oil and delicate Mediterranean seasonings, this canned delicacy requires no refrigeration prior to opening. Sealed in a corrosion-proof, easy-open steel tin designed for lasting shelf stability."
      },
      details: {
        ar: [
          "قطع فيليه رنجة مدخنة خالية تماماً من الجلد والشوك والزوائد.",
          "مغمورة بالكامل في زيت زيتون بكر ممتاز طبيعي ١٠٠٪.",
          "علبة معدنية محمية مقاومة للتآكل وسهلة الفتح فوراً دون فتاحة.",
          "لا تتطلب التبريد قبل الفتح وصلاحيتها ممتدة تناسب التخزين والرحلات.",
          "وجبة متكاملة غنية بالبروتين والأحماض الدهنية المفيدة للقلب."
        ],
        en: [
          "Skinless and boneless tender smoked herring fillet cuts.",
          "Submerged in 100% pure cold-pressed extra virgin olive oil.",
          "Rust-proof, durable tin can with convenient pull-tab easy-open lid.",
          "Requires zero refrigeration before opening; perfect for pantry storage and trips.",
          "A wholesome meal rich in high-grade protein and heart-healthy fatty acids."
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
      },
      seo: {
        metaTitle: { ar: "رنجة معلبة فاخرة بزيت الزيتون البكر | علبة سهلة الفتح | سيد البلد", en: "Premium Canned Herring in Extra Virgin Olive Oil | Seed El-Balad" },
        metaDescription: { ar: "فيليه رنجة مدخنة معلبة بزيت زيتون بكر ممتاز من سيد البلد. علبة سهلة الفتح، خالية من الشوك وصالحة للتخزين في حرارة الغرفة.", en: "Smoked herring fillets in extra virgin olive oil by Seed El-Balad. Easy-open pull-tab can, boneless, perfect for on-the-go meals." },
        keywords: { ar: "رنجة معلبة, تونة ورنجة, رنجة بزيت الزيتون, معلبات اسماك فاخرة, سيد البلد", en: "Canned herring, smoked herring olive oil, canned seafood Egypt, Seed El-Balad" },
        altText: { ar: "علبة رنجة مدخنة فاخرة سهلة الفتح بزيت الزيتون البكر سيد البلد", en: "Seed El-Balad Premium Canned Herring in Extra Virgin Olive Oil tin" }
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
        ar: "صندوق الجملة والضيافة الكبرى من رنجة سيد البلد الذهبية الكاملة يمثل الخيار المفضل للمطاعم الفاخرة، الفنادق، والمناسبات العائلية الكبرى. يحتوي الصندوق على أسماك هارينج كاملة متجانسة الحجم والوزن، مدخنة بخشب الزان الطبيعي ومغلفة حرارياً بشكل فردي ومحفوظة بعناية فائقة. يوفر هذا الصندوق أفضل قيمة اقتصادية مع الحفاظ على أعلى معايير الجودة والمذاق الهولندي الأصيل الذي تشتهر به علامة سيد البلد في الأسواق.",
        en: "Seed El-Balad's Whole Smoked Herring Jumbo Box is the preferred choice for premier catering establishments, fine restaurants, and large family celebrations. Containing calibrated whole Dutch herring of uniform size and grade, cold-smoked over natural beechwood and individually vacuum-sealed, this bulk carton delivers unmatched economic value alongside our signature gold-standard flavor profile."
      },
      details: {
        ar: [
          "أسماك هارينج هولندية كاملة متجانسة الحجم وغنية باللحم والدهون الطبيعية.",
          "مدخنة طبيعياً بنشارة خشب الزان للحصول على النكهة المتزنة واللون الذهبي.",
          "تأتي مغلفة حرارياً ومفرغة الهواء بشكل فردي داخل الصندوق لسهولة الاستخدام.",
          "مثالية للموزعين، المطاعم، والمناسبات الكبرى بأفضل سعر اقتصادي.",
          "معتمدة ومطابقة لكافة اشتراطات السلامة الغذائية."
        ],
        en: [
          "Whole Dutch herring of calibrated uniform sizing, high meat yield and natural fat.",
          "Naturally smoked with beechwood for a premium balanced aroma and golden skin.",
          "Individually vacuum-sealed to lock in peak freshness within the bulk carton.",
          "Ideal for wholesalers, restaurants, and celebratory catering at great value.",
          "Certified compliant with global food hygiene and quality standards."
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
      },
      seo: {
        metaTitle: { ar: "صندوق رنجة جامبو كاملة ٥ كجم | بيع جملة وضيافة | سيد البلد", en: "Jumbo Whole Smoked Herring Bulk Box 5kg | Seed El-Balad" },
        metaDescription: { ar: "صندوق رنجة هولندية كاملة ٥ كجم من سيد البلد. رنجة جامبو مدخنة بخشب الزان، مغلفة ومناسبة للمطاعم والولائم الكبرى.", en: "5kg bulk box of whole jumbo Dutch smoked herring by Seed El-Balad. Individually vacuum sealed for catering and fine restaurants." },
        keywords: { ar: "صندوق رنجة, رنجة جملة, كرتونة رنجة 5 كيلو, اسعار رنجة الجملة, رنجة سيد البلد بلبيس", en: "Bulk smoked herring, wholesale herring Egypt, 5kg herring box, Seed El-Balad" },
        altText: { ar: "صندوق رنجة هولندية كاملة جامبو ٥ كجم من سيد البلد", en: "Seed El-Balad Premium Jumbo Box of Whole Smoked Herring 5kg" }
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
        ar: "صندوق التوفير العائلي من سيد البلد مصمم خصيصاً لتلبية احتياجات التخزين المنزلي الطويل والمناسبات العائلية والأعياد. يحتوي الصندوق على 6 أظرف رنجة فاخرة مغلفة حرارياً ومفرغة من الهواء بشكل مستقل (وزن تقريبي 1 كجم لكل ظرف)، مما يتيح لك فتح ظرف واحد عند الحاجة مع بقاء باقي الأظرف مغلقة ومحفوظة بنضارتها التامة داخل الفريزر دون أي روائح.",
        en: "Seed El-Balad's Family Savings Box is engineered for convenient household storage, gatherings, and festive seasons. Containing 6 individually vacuum-sealed pouches of our premium smoked herring (approx. 1 kg each), it allows families to open one pouch at a time while keeping the remainder in pristine frozen freshness without aroma dispersion."
      },
      details: {
        ar: [
          "صندوق اقتصادي يحتوي على ٦ ظروف رنجة فاخرة مغلفة بشكل مستقل.",
          "كل ظرف مغلق تماماً بتقنية الفاكيوم لمنع الروائح وسهولة الحفظ المنزلي.",
          "مدخنة بخشب الزان الطبيعي على البارد بأحدث التقنيات الأوروبية.",
          "توفير مالي كبير مقارنة بشراء الأظرف الفردية.",
          "طعام صحي ومضمون ومعقم لجميع أفراد الأسرة."
        ],
        en: [
          "Economical multi-pack featuring 6 individually vacuum-packaged pouches.",
          "Each pouch is completely odor-free and easy to organize in home freezers.",
          "Cold-smoked using premium natural beechwood and advanced clean tech.",
          "Significant cost savings compared to purchasing single pouches.",
          "Hygienic, certified safe, and wholesome seafood for the entire household."
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
      },
      seo: {
        metaTitle: { ar: "صندوق التوفير العائلي من ظروف الرنجة ٦ كجم | سيد البلد", en: "Family Savings Box of Vacuum Herring Pouches | Seed El-Balad" },
        metaDescription: { ar: "صندوق عائلي اقتصادي يحتوي على ٦ أظرف رنجة فاكيوم مدخنة من سيد البلد. توفير كبير وحفظ محكم بدون روائح.", en: "Family savings carton of 6 individually vacuum sealed smoked herring pouches by Seed El-Balad. Exceptional value and odor-free storage." },
        keywords: { ar: "صندوق رنجة عائلي, عرض رنجة, رنجة فاكيوم توفير, اسعار الرنجة العائلية, سيد البلد", en: "Family pack herring, bulk smoked fish, vacuum pouches offer, Seed El-Balad" },
        altText: { ar: "صندوق التوفير العائلي يحتوي على ٦ ظروف رنجة فاكيوم من سيد البلد", en: "Seed El-Balad Family Savings Box of 6 vacuum herring pouches" }
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
        ar: "المنتج الأكثر طلباً وشهرة في السوق المصري من علامة سيد البلد. ظرف الرنجة المدخنة الفاخرة المفرغ من الهواء يحتوي على أسماك رنجة هارينج هولندية ونرويجية كاملة مدخنة على البارد بخشب الزان الطبيعي بنسبة تمليح متوازنة تماماً. يوفر التغليف الحراري المحكم أقصى حماية ضد الأكسدة والتلف مع منع خروج الروائح، ليكون رفيق مائدتك الأسبوعية المثالي.",
        en: "Seed El-Balad's standard retail pouch is our most popular everyday flagship across Egypt. Featuring whole Dutch and Norwegian herring slow cold-smoked over beechwood with a well-balanced cure, each pouch is vacuum-sealed to prevent oxidation and eliminate refrigerator odor, making it the perfect weekly seafood staple."
      },
      details: {
        ar: [
          "رنجة كاملة فاخرة مدخنة بخشب الزان الطبيعي المستورد.",
          "تغليف حراري متكامل يمنع نفاذ أي رائحة للخارج تماماً.",
          "لحم مدخن غني، متماسك، وبطعم متوازن التمليح يلائم الجميع.",
          "المنتج الأكثر شعبية لمبيعات التجزئة والاستهلاك المنزلي.",
          "خاضع لأعلى معايير الرقابة الصحية والبيطرية المعتمدة."
        ],
        en: [
          "Whole premium herring naturally cold-smoked with real imported beechwood.",
          "Hygienic heavy-duty vacuum seal preventing any odor transmission.",
          "Rich, firm smoked meat with a perfectly balanced salt profile.",
          "Our most popular flagship item for standard retail and household meals.",
          "Monitored under stringent health inspection and certified standards."
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
      },
      seo: {
        metaTitle: { ar: "ظرف رنجة مدخنة فاخرة بالوزن ١ كجم | سيد البلد", en: "Premium Smoked Herring Retail Pouch 1kg | Seed El-Balad" },
        metaDescription: { ar: "ظرف رنجة مدخنة فاخرة ١ كجم من سيد البلد. رنجة هولندية ونرويجية مدخنة بخشب الزان، مغلفة فاكيوم بدون روائح.", en: "Standard 1kg vacuum sealed smoked herring pouch by Seed El-Balad. Cold-smoked North Sea herring, perfectly salted and odor-free." },
        keywords: { ar: "ظرف رنجة, كيس رنجة فاكيوم, رنجة مدخنة كيلو, سعر كيلو الرنجة, سيد البلد", en: "Herring pouch, 1kg smoked herring, vacuum herring pack, Seed El-Balad" },
        altText: { ar: "ظرف رنجة مدخنة فاخرة بالوزن ١ كجم مغلفة فاكيوم من سيد البلد", en: "Seed El-Balad Premium Smoked Herring 1kg retail pouch" }
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
        ar: "شنطة هدايا سيد البلد الورقية الفاخرة مصممة من الكرتون المقوى الصديق للبيئة مع مقابض قطنية متينة، لتتيح لك تقديم منتجات سيد البلد الفاخرة كهدايا قيمة في الأعياد والمناسبات والزيارات العائلية بأرقى مظهر يعكس فخامة العلامة التجارية وجودتها العالية.",
        en: "Seed El-Balad's Premium Gift Bag is crafted from eco-friendly reinforced paperboard with robust cotton rope handles. Designed to showcase our seafood delicacies as elegant presents for festive celebrations and family visits, reflecting the brand's prestige and luxury."
      },
      details: {
        ar: [
          "مصنوعة من كرتون مقوى عالي الجودة وصديق للبيئة.",
          "تتميز بمقابض قطنية ناعمة ومتينة لسهولة الحمل والراحة.",
          "مطبوع عليها هوية وشعار سيد البلد الرسمي بألوان العلامة التجارية.",
          "تتسع لعدد متنوع من المنتجات والعلب والبرطمانات كهدية قيمة.",
          "قابلة لإعادة الاستخدام ومتينة للغاية."
        ],
        en: [
          "Made of eco-friendly, high-density reinforced paperboard.",
          "Features soft, durable cotton rope handles for comfortable carrying.",
          "Embossed with official Seed El-Balad brand graphics and royal colors.",
          "Holds multiple pouches, jars, and tins for an exquisite gift hamper.",
          "Durable, reusable, and stylishly crafted."
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
      },
      seo: {
        metaTitle: { ar: "شنطة هدايا سيد البلد الورقية الفاخرة | تغليف هدايا راقي", en: "Seed El-Balad Premium Branded Gift Bag | Luxury Packaging" },
        metaDescription: { ar: "شنطة هدايا ورقية فاخرة من الكرتون المقوى بهوية سيد البلد. مثالية لتقديم الهدايا والمناسبات والتوصيل الراقي.", en: "Eco-friendly premium branded gift paper bag by Seed El-Balad for seafood gifting and special celebrations." },
        keywords: { ar: "شنطة هدايا, تغليف سيد البلد, اكياس ورقية فاخرة, هدايا رنجة واسماك", en: "Gift bag, luxury packaging, Seed El-Balad branded bag" },
        altText: { ar: "شنطة هدايا ورقية فاخرة مطبوع عليها شعار سيد البلد", en: "Seed El-Balad luxury branded paper gift bag" }
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
