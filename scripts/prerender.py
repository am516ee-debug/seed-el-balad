import os
import re

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
dist_dir = os.path.join(base_dir, "dist")
index_path = os.path.join(dist_dir, "index.html")

if not os.path.exists(index_path):
    print("dist/index.html not found, skipping prerender.")
    exit(0)

with open(index_path, "r", encoding="utf-8") as f:
    template = f.read()

products = [
    {"id": "vacuum-herring", "title": "رنجة فاكيوم فاخرة مفرغة الهواء | سيد البلد", "desc": "رنجة فاكيوم من سيد البلد: رنجة هولندية ونرويجية مدخنة بخشب الزان، مغلفة بالتفريغ الهوائي بدون أي روائح وبأعلى جودة.", "image": "https://seed-elbalad.com/images/products/vacuum-herring.webp", "rating": "4.9", "review_count": "214"},
    {"id": "dutch-herring", "title": "رنجة هولندي فاخرة مدخنة | سمك هارينج أصلي | سيد البلد", "desc": "اشتري رنجة هولندي فاخرة مدخنة على البارد بخلاصة خشب الزان الطبيعي من سيد البلد. سمك هارينج عالي الأوميجا 3، لحم زبدي وتغليف فاكيوم محكم.", "image": "https://seed-elbalad.com/images/products/dutch-herring.webp", "rating": "4.9", "review_count": "186"},
    {"id": "norwegian-herring", "title": "رنجة نرويجي ملكية سوبر جامبو | رنجة لحمية فاخرة | سيد البلد", "desc": "رنجة نرويجي سوبر جامبو لحمية من سيد البلد، مستوردة من أنقى مياه النرويج، غنية بالبروتين والأوميجا 3 وتمليح خفيف مغلفة فاكيوم.", "image": "https://seed-elbalad.com/images/products/norwegian-herring.webp", "rating": "4.9", "review_count": "143"},
    {"id": "icelandic-herring", "title": "رنجة أيسلندي فاخرة بنقاء المحيط | سيد البلد للمأكولات البحرية", "desc": "رنجة أيسلندية فاخرة من مياه أيسلندا النقية، مدخنة بلطف ومملحة ملح بحري خفيف. طعم سلس وقيمة غذائية عالية من سيد البلد.", "image": "https://seed-elbalad.com/images/products/icelandic-herring.webp", "rating": "4.8", "review_count": "97"},
    {"id": "russian-herring", "title": "رنجة روسي كلاسيكية مميزة | نكهة تدخين تراثية | سيد البلد", "desc": "رنجة روسية كلاسيكية مدخنة بنكهة قوية وقوام متماسك من سيد البلد. معالجة على الطريقة التراثية ومغلفة فاكيوم لنضارة دائمة.", "image": "https://seed-elbalad.com/images/products/russian-herring.webp", "rating": "4.8", "review_count": "112"},
    {"id": "vacuum-feseekh", "title": "فسيخ بوري بلدي فاخر فاكيوم | فسيخ زبدة بدون رائحة | سيد البلد", "desc": "اشتري فسيخ بوري بلدي فاخر فاكيوم من سيد البلد. أسماك بوري طازجة، تمليح دلع زبدي، وتغليف محكم بدون أي تسرب للروائح.", "image": "https://seed-elbalad.com/images/products/vacuum-feseekh.webp", "rating": "4.9", "review_count": "168"},
    {"id": "vacuum-mackerel", "title": "سمك ماكريل مدخن فاخر فاكيوم | غني بالأوميجا 3 | سيد البلد", "desc": "سمك ماكريل أطلسي مدخن فاخر من سيد البلد. لحم طري ذهبي غني بالأوميجا 3 والزيوت المفيدة، مغلف فاكيوم لنضارة تامة.", "image": "https://seed-elbalad.com/images/products/vacuum-mackerel.webp", "rating": "4.8", "review_count": "134"},
    {"id": "fresh-fillet-pouch", "title": "ظرف شرائح فيليه رنجة مخلية بدون شوك | سيد البلد", "desc": "شرائح فيليه رنجة هولندية مخلية بدون شوك أو جلد من سيد البلد. ظرف عملي بسحاب للإغلاق، جاهزة للأكل الفوري والسلطات.", "image": "https://seed-elbalad.com/images/products/fresh-fillet-pouch.webp", "rating": "4.9", "review_count": "89"},
    {"id": "herring-caviar-jar", "title": "برطمان بطارخ رنجة خرز فاخرة | كافيار طبيعي | سيد البلد", "desc": "برطمان بطارخ رنجة هارينج خرز طبيعية 100 من سيد البلد. قوام متماسك، تمليح خفيف، وغنية بالبروتين والأوميجا 3.", "image": "https://seed-elbalad.com/images/products/herring-caviar-jar.webp", "rating": "4.9", "review_count": "76"},
    {"id": "canned-herring-oil", "title": "رنجة معلبة فاخرة بزيت الزيتون البكر | علبة سهلة الفتح | سيد البلد", "desc": "فيليه رنجة مدخنة معلبة بزيت زيتون بكر ممتاز من سيد البلد. علبة سهلة الفتح، خالية من الشوك وصالحة للتخزين في حرارة الغرفة.", "image": "https://seed-elbalad.com/images/products/canned-herring-oil.webp", "rating": "4.8", "review_count": "103"},
    {"id": "whole-smoked-herring-box", "title": "صندوق رنجة جامبو كاملة 5 كجم | بيع جملة وضيافة | سيد البلد", "desc": "صندوق رنجة هولندية كاملة 5 كجم من سيد البلد. رنجة جامبو مدخنة بخشب الزان، مغلفة ومناسبة للمطاعم والولائم الكبرى.", "image": "https://seed-elbalad.com/images/products/whole-smoked-herring-box.webp", "rating": "4.9", "review_count": "58"},
    {"id": "family-savings-box", "title": "صندوق التوفير العائلي من ظروف الرنجة 6 كجم | سيد البلد", "desc": "صندوق عائلي اقتصادي يحتوي على 6 أظرف رنجة فاكيوم مدخنة من سيد البلد. توفير كبير وحفظ محكم بدون روائح.", "image": "https://seed-elbalad.com/images/products/family-savings-box.webp", "rating": "4.8", "review_count": "91"},
    {"id": "smoked-herring-retail-pouch", "title": "ظرف رنجة مدخنة فاخرة بالوزن 1 كجم | سيد البلد", "desc": "ظرف رنجة مدخنة فاخرة 1 كجم من سيد البلد. رنجة هولندية ونرويجية مدخنة بخشب الزان، مغلفة فاكيوم بدون روائح.", "image": "https://seed-elbalad.com/images/products/smoked-herring-retail-pouch.webp", "rating": "4.9", "review_count": "147"},
    {"id": "premium-gift-bag", "title": "شنطة هدايا سيد البلد الورقية الفاخرة | تغليف هدايا راقي", "desc": "شنطة هدايا ورقية فاخرة من الكرتون المقوى بهوية سيد البلد. مثالية لتقديم الهدايا والمناسبات والتوصيل الراقي.", "image": "https://seed-elbalad.com/images/products/premium-gift-bag.webp", "rating": "4.7", "review_count": "34"},
]

pages = [
    {"path": "collection", "title": "تشكيلة المنتجات الفاخرة | رنجة وفسيخ وبطارخ | سيد البلد", "desc": "استكشف قائمة منتجات سيد البلد: رنجة هولندي، نرويجي، أيسلندي، روسي، فسيخ بلدي فاكيوم، ماكريل مدخن، وعلب رنجة بزيت الزيتون.", "image": "https://seed-elbalad.com/images/og-collection.jpg"},
    {"path": "story", "title": "قصتنا وتراثنا | من بحر الشمال إلى بلبيس | سيد البلد", "desc": "تعرف على قصة تأسيس سيد البلد ورحلة استيراد وتصنيع أرقى الأسماك المدخنة الهولندية والنرويجية في مصنعنا الحديث ببلبيس.", "image": "https://seed-elbalad.com/images/og-story.jpg"},
    {"path": "why-us", "title": "لماذا تختارنا | معايير الجودة والأيزو | سيد البلد", "desc": "اكتشف سر تميز سيد البلد: تدخين طبيعي بخلاصة خشب الزان، تمليح خفيف، تغليف فاكيوم بدون روائح، وشهادات الأيزو ISO 22000.", "image": "https://seed-elbalad.com/images/og-why-us.jpg"},
    {"path": "locations", "title": "مواقعنا وتغطيتنا | مصنع بلبيس وشبكة التوزيع | سيد البلد", "desc": "مقر مصنع شركة جولد فودز ببلبيس الشرقية وشبكة توزيع منتجات سيد البلد للمطاعم وتجار الجملة والتجزئة في كافة المحافظات.", "image": "https://seed-elbalad.com/images/og-locations.jpg"},
    {"path": "contact", "title": "تواصل معنا | طلبات الجملة والتوزيع | سيد البلد", "desc": "تواصل مع إدارة مبيعات وتصدير سيد البلد وجولد فودز لطلبات التوريد، التوزيع، والضيافة في مصر والشرق الأوسط.", "image": "https://seed-elbalad.com/images/og-home.jpg"},
    {"path": "privacy-policy", "title": "سياسة الخصوصية | Seed El Balad | Gold Foods", "desc": "تعرف على كيفية جمع واستخدام وحماية بياناتك الشخصية عند استخدام موقع Seed El Balad التابع لشركة Gold Foods.", "image": "https://seed-elbalad.com/images/og-home.jpg"},
]

def render_page(out_dir, title, desc, url, og_image="https://seed-elbalad.com/images/og-home.jpg", extra_schema=""):
    os.makedirs(out_dir, exist_ok=True)
    html = template
    html = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', html, flags=re.DOTALL)
    html = re.sub(r'<meta name="description" content=".*?" />', f'<meta name="description" content="{desc}" />', html)
    html = re.sub(r'<meta property="og:title" content=".*?" />', f'<meta property="og:title" content="{title}" />', html)
    html = re.sub(r'<meta property="og:description" content=".*?" />', f'<meta property="og:description" content="{desc}" />', html)
    html = re.sub(r'<meta property="og:url" content=".*?" />', f'<meta property="og:url" content="{url}" />', html)
    html = re.sub(r'<meta property="og:image" content=".*?" />', f'<meta property="og:image" content="{og_image}" />', html)
    html = re.sub(r'<meta name="twitter:title" content=".*?" />', f'<meta name="twitter:title" content="{title}" />', html)
    html = re.sub(r'<meta name="twitter:description" content=".*?" />', f'<meta name="twitter:description" content="{desc}" />', html)
    html = re.sub(r'<meta name="twitter:url" content=".*?" />', f'<meta name="twitter:url" content="{url}" />', html)
    html = re.sub(r'<meta name="twitter:image" content=".*?" />', f'<meta name="twitter:image" content="{og_image}" />', html)
    html = re.sub(r'<link rel="canonical" href=".*?" />', f'<link rel="canonical" href="{url}" />', html)
    if extra_schema:
        html = html.replace('</head>', f'{extra_schema}\n</head>')
    out_file = os.path.join(out_dir, "index.html")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated static SSG HTML: {out_file}")

for p in pages:
    page_dir = os.path.join(dist_dir, p["path"])
    url = f"https://seed-elbalad.com/{p['path']}"
    render_page(page_dir, p["title"], p["desc"], url, p.get("image", "https://seed-elbalad.com/images/og-home.jpg"))

for prod in products:
    prod_dir = os.path.join(dist_dir, "product", prod["id"])
    url = f"https://seed-elbalad.com/product/{prod['id']}"
    prod_schema = f"""<script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "{prod['title']}",
      "description": "{prod['desc']}",
      "image": "{prod['image']}",
      "brand": {{"@type": "Brand", "name": "Seed El-balad"}},
      "manufacturer": {{"@type": "Organization", "name": "Gold Foods Egypt", "url": "https://www.gf-egypt.com"}},
      "offers": {{"@type": "Offer", "priceCurrency": "EGP", "availability": "https://schema.org/InStock", "url": "{url}", "seller": {{"@type": "Organization", "name": "Seed El-balad", "url": "https://seed-elbalad.com"}}}},
      "aggregateRating": {{"@type": "AggregateRating", "ratingValue": "{prod['rating']}", "bestRating": "5", "worstRating": "1", "reviewCount": "{prod['review_count']}"}}
    }}
    </script>"""
    render_page(prod_dir, prod["title"], prod["desc"], url, prod["image"], prod_schema)

print("Pre-rendering SSG complete for all pages and products!")
