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
    {
        "id": "dutch-herring",
        "title": "رنجة هولندي فاخرة مدخنة | سمك هارينج أصلي | سيد البلد",
        "desc": "اشتري رنجة هولندي فاخرة مدخنة على البارد بخلاصة خشب الزان الطبيعي من سيد البلد. سمك هارينج عالي الأوميجا 3، لحم زبدي وتغليف فاكيوم محكم."
    },
    {
        "id": "norwegian-herring",
        "title": "رنجة نرويجي ملكية سوبر جامبو | رنجة لحمية فاخرة | سيد البلد",
        "desc": "رنجة نرويجي سوبر جامبو لحمية من سيد البلد، مستوردة من أنقى مياه النرويج، غنية بالبروتين والأوميجا 3 وتمليح خفيف مغلفة فاكيوم."
    },
    {
        "id": "icelandic-herring",
        "title": "رنجة أيسلندي فاخرة بنقاء المحيط | سيد البلد للمأكولات البحرية",
        "desc": "رنجة أيسلندية فاخرة من مياه أيسلندا النقية، مدخنة بلطف ومملحة ملح بحري خفيف. طعم سلس وقيمة غذائية عالية من سيد البلد."
    },
    {
        "id": "russian-herring",
        "title": "رنجة روسي كلاسيكية مميزة | نكهة تدخين تراثية | سيد البلد",
        "desc": "رنجة روسية كلاسيكية مدخنة بنكهة قوية وقوام متماسك من سيد البلد. معالجة على الطريقة التراثية ومغلفة فاكيوم لنضارة دائمة."
    },
    {
        "id": "vacuum-feseekh",
        "title": "فسيخ بوري بلدي فاخر فاكيوم | فسيخ زبدة بدون رائحة | سيد البلد",
        "desc": "اشتري فسيخ بوري بلدي فاخر فاكيوم من سيد البلد. أسماك بوري طازجة، تمليح دلّع زبدي، وتغليف محكم بدون أي تسرب للروائح."
    },
    {
        "id": "vacuum-mackerel",
        "title": "سمك ماكريل مدخن فاخر فاكيوم | غني بالأوميجا 3 | سيد البلد",
        "desc": "سمك ماكريل أطلسي مدخن فاخر من سيد البلد. لحم طري ذهبي غني بالأوميجا 3 والزيوت المفيدة، مغلف فاكيوم لنضارة تامة."
    },
    {
        "id": "fresh-fillet-pouch",
        "title": "ظرف شرائح فيليه رنجة مخلية بدون شوك | سيد البلد",
        "desc": "شرائح فيليه رنجة هولندية مخلية بدون شوك أو جلد من سيد البلد. ظرف عملي بسحاب للإغلاق، جاهزة للأكل الفوري والسلطات."
    },
    {
        "id": "herring-caviar-jar",
        "title": "برطمان بطارخ رنجة خرز فاخرة | كافيار طبيعي | سيد البلد",
        "desc": "برطمان بطارخ رنجة هارينج خرز طبيعية ١٠٠٪ من سيد البلد. قوام متماسك، تمليح خفيف، وغنية بالبروتين والأوميجا 3."
    },
    {
        "id": "canned-herring-oil",
        "title": "رنجة معلبة فاخرة بزيت الزيتون البكر | علبة سهلة الفتح | سيد البلد",
        "desc": "فيليه رنجة مدخنة معلبة بزيت زيتون بكر ممتاز من سيد البلد. علبة سهلة الفتح، خالية من الشوك وصالحة للتخزين في حرارة الغرفة."
    },
    {
        "id": "whole-smoked-herring-box",
        "title": "صندوق رنجة جامبو كاملة ٥ كجم | بيع جملة وضيافة | سيد البلد",
        "desc": "صندوق رنجة هولندية كاملة ٥ كجم من سيد البلد. رنجة جامبو مدخنة بخشب الزان، مغلفة ومناسبة للمطاعم والولائم الكبرى."
    },
    {
        "id": "family-savings-box",
        "title": "صندوق التوفير العائلي من ظروف الرنجة ٦ كجم | سيد البلد",
        "desc": "صندوق عائلي اقتصادي يحتوي على ٦ أظرف رنجة فاكيوم مدخنة من سيد البلد. توفير كبير وحفظ محكم بدون روائح."
    },
    {
        "id": "smoked-herring-retail-pouch",
        "title": "ظرف رنجة مدخنة فاخرة بالوزن ١ كجم | سيد البلد",
        "desc": "ظرف رنجة مدخنة فاخرة ١ كجم من سيد البلد. رنجة هولندية ونرويجية مدخنة بخشب الزان، مغلفة فاكيوم بدون روائح."
    },
    {
        "id": "premium-gift-bag",
        "title": "شنطة هدايا سيد البلد الورقية الفاخرة | تغليف هدايا راقي",
        "desc": "شنطة هدايا ورقية فاخرة من الكرتون المقوى بهوية سيد البلد. مثالية لتقديم الهدايا والمناسبات والتوصيل الراقي."
    }
]

pages = [
    {
        "path": "collection",
        "title": "تشكيلة المنتجات الفاخرة | رنجة وفسيخ وبطارخ | سيد البلد",
        "desc": "استكشف قائمة منتجات سيد البلد: رنجة هولندي، نرويجي، أيسلندي، روسي، فسيخ بلدي فاكيوم، ماكريل مدخن، وعلب رنجة بزيت الزيتون."
    },
    {
        "path": "story",
        "title": "قصتنا وتراثنا | من بحر الشمال إلى بلبيس | سيد البلد",
        "desc": "تعرف على قصة تأسيس سيد البلد ورحلة استيراد وتصنيع أرقى الأسماك المدخنة الهولندية والنرويجية في مصنعنا الحديث ببلبيس."
    },
    {
        "path": "why-us",
        "title": "لماذا تختارنا | معايير الجودة والأيزو | سيد البلد",
        "desc": "اكتشف سر تميز سيد البلد: تدخين طبيعي بخلاصة خشب الزان، تمليح خفيف، تغليف فاكيوم بدون روائح، وشهادات الأيزو ISO 22000."
    },
    {
        "path": "locations",
        "title": "مواقعنا وتغطيتنا | مصنع بلبيس وشبكة التوزيع | سيد البلد",
        "desc": "مقر مصنع شركة جولد فودز ببلبيس الشرقية وشبكة توزيع منتجات سيد البلد للمطاعم وتجار الجملة والتجزئة في كافة المحافظات."
    },
    {
        "path": "contact",
        "title": "تواصل معنا | طلبات الجملة والتوزيع | سيد البلد",
        "desc": "تواصل مع إدارة مبيعات وتصدير سيد البلد وجولد فودز لطلبات التوريد، التوزيع، والضيافة في مصر والشرق الأوسط."
    }
]

def render_page(out_dir, title, desc, url, extra_schema=""):
    os.makedirs(out_dir, exist_ok=True)
    html = template
    html = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", html, flags=re.DOTALL)
    html = re.sub(r'<meta name="description" content=".*?" />', f'<meta name="description" content="{desc}" />', html)
    html = re.sub(r'<meta property="og:title" content=".*?" />', f'<meta property="og:title" content="{title}" />', html)
    html = re.sub(r'<meta property="og:description" content=".*?" />', f'<meta property="og:description" content="{desc}" />', html)
    html = re.sub(r'<meta property="og:url" content=".*?" />', f'<meta property="og:url" content="{url}" />', html)
    html = re.sub(r'<meta name="twitter:title" content=".*?" />', f'<meta name="twitter:title" content="{title}" />', html)
    html = re.sub(r'<meta name="twitter:description" content=".*?" />', f'<meta name="twitter:description" content="{desc}" />', html)
    html = re.sub(r'<meta name="twitter:url" content=".*?" />', f'<meta name="twitter:url" content="{url}" />', html)
    html = re.sub(r'<link rel="canonical" href=".*?" />', f'<link rel="canonical" href="{url}" />', html)
    
    if extra_schema:
        html = html.replace('</head>', f'{extra_schema}\n</head>')
        
    out_file = os.path.join(out_dir, "index.html")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated static SSG HTML: {out_file}")

# 1. Generate Static Pages
for p in pages:
    page_dir = os.path.join(dist_dir, p["path"])
    url = f"https://seed-elbalad.com/{p['path']}"
    render_page(page_dir, p["title"], p["desc"], url)

# 2. Generate Static Product Pages
for prod in products:
    prod_dir = os.path.join(dist_dir, "product", prod["id"])
    url = f"https://seed-elbalad.com/product/{prod['id']}"
    prod_schema = f"""<script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "{prod['title']}",
      "description": "{prod['desc']}",
      "brand": {{
        "@type": "Brand",
        "name": "Seed El-balad"
      }},
      "offers": {{
        "@type": "Offer",
        "priceCurrency": "EGP",
        "availability": "https://schema.org/InStock",
        "url": "{url}"
      }}
    }}
    </script>"""
    render_page(prod_dir, prod["title"], prod["desc"], url, prod_schema)

print("Pre-rendering SSG complete for all pages and products!")
