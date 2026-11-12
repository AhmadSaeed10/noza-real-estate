import type { Bi } from '../i18n';

export const services: { slug: string; title: Bi; text: Bi; ask: Bi }[] = [
  {
    slug: 'investment-advisory',
    title: { en: 'Investment advisory', ar: 'الاستشارات الاستثمارية' },
    text: {
      en: 'Market analysis, portfolio diversification and guidance on high-yield opportunities, for first-time investors and those expanding a portfolio.',
      ar: 'تحليل للسوق وتنويع للمحفظة وإرشاد نحو الفرص عالية العائد، للمستثمرين الجدد ولمن يوسّعون محافظهم.',
    },
    ask: { en: 'Hello NOZA, I would like investment advisory.', ar: 'مرحبًا نوزا، أرغب في استشارة استثمارية.' },
  },
  {
    slug: 'property-management',
    title: { en: 'Property management', ar: 'إدارة العقارات' },
    text: {
      en: 'Tenant screening, rent collection, maintenance and repairs, so your property stays maintained and profitable without day-to-day landlord work.',
      ar: 'فحص المستأجرين وتحصيل الإيجار والصيانة والإصلاحات، ليبقى عقارك مُصانًا ومربحًا دون عناء إدارته اليومية.',
    },
    ask: { en: 'Hello NOZA, I would like property management.', ar: 'مرحبًا نوزا، أرغب في خدمة إدارة العقارات.' },
  },
  {
    slug: 'holiday-home-management',
    title: { en: 'Airbnb and short-term rental management', ar: 'إدارة الإيجارات قصيرة الأجل (إير بي إن بي)' },
    text: {
      en: 'Listing optimization, guest management, housekeeping and maintenance for short-let properties, aimed at high occupancy and steady rental income.',
      ar: 'تحسين الإعلانات وإدارة الضيوف والتنظيف والصيانة للعقارات قصيرة الأجل، بهدف رفع الإشغال وتحقيق دخل إيجاري منتظم.',
    },
    ask: { en: 'Hello NOZA, I would like holiday-home management.', ar: 'مرحبًا نوزا، أرغب في إدارة بيت عطلات.' },
  },
  {
    slug: 'residential-sales-leasing',
    title: { en: 'Residential sales and leasing', ar: 'بيع وتأجير العقارات السكنية' },
    text: {
      en: 'Buying, selling and leasing across Dubai, from personal consultations and viewings to finalizing contracts.',
      ar: 'شراء وبيع وتأجير في أنحاء دبي، من الاستشارات الشخصية والمعاينات حتى إتمام العقود.',
    },
    ask: { en: 'Hello NOZA, I would like help buying, selling or leasing.', ar: 'مرحبًا نوزا، أرغب في المساعدة في الشراء أو البيع أو التأجير.' },
  },
  {
    slug: 'off-plan-services',
    title: { en: 'Off-plan property services', ar: 'خدمات العقارات قيد الإنشاء' },
    text: {
      en: 'Access to sought-after off-plan launches with flexible payment plans, and updates on construction progress and market trends after you buy.',
      ar: 'وصول إلى مشاريع مطلوبة قيد الإنشاء بخطط دفع مرنة، مع متابعة لمراحل البناء واتجاهات السوق بعد الشراء.',
    },
    ask: { en: 'Hello NOZA, I would like to see off-plan options.', ar: 'مرحبًا نوزا، أرغب في الاطلاع على خيارات المشاريع قيد الإنشاء.' },
  },
];

export const why: { title: Bi; text: Bi }[] = [
  { title: { en: 'In Dubai since 2006', ar: 'في دبي منذ عام 2006' }, text: { en: 'More than 15 years of reading this market.', ar: 'أكثر من 15 عامًا من متابعة هذا السوق.' } },
  { title: { en: '50+ RERA-certified brokers', ar: 'أكثر من 50 وسيطًا معتمدًا من ريرا' }, text: { en: 'A sales team trained and certified to act for you.', ar: 'فريق مبيعات مدرَّب ومعتمد ليمثّلك.' } },
  { title: { en: 'Community specialists', ar: 'متخصصون في المجتمعات السكنية' }, text: { en: 'Brokers who know the streets, buildings and pricing of each area.', ar: 'وسطاء يعرفون شوارع كل منطقة ومبانيها وأسعارها.' } },
  { title: { en: 'Multicultural and multilingual', ar: 'فريق متعدد الثقافات واللغات' }, text: { en: 'A team of 30+ nationalities, so you can talk in your language.', ar: 'فريق من أكثر من 30 جنسية، لتتحدث بلغتك.' } },
  { title: { en: 'Customer care first', ar: 'العناية بالعميل أولًا' }, text: { en: 'Clear updates from first call to handover.', ar: 'تحديثات واضحة من الاتصال الأول حتى التسليم.' } },
  { title: { en: 'Results driven', ar: 'نركّز على النتائج' }, text: { en: 'We help 100+ clients find their homes and investments.', ar: 'ساعدنا أكثر من 100 عميل في العثور على منازلهم واستثماراتهم.' } },
];

export const partners = ['Emaar', 'Damac', 'Danube Properties', 'Sobha Realty', 'Binghatti', 'Azizi', 'Samana', 'Ellington', 'Nakheel', 'Dubai Holding', 'Al-Futtaim', 'The Luxe Developers'];

export const testimonials: { name: string; quote: Bi }[] = [
  { name: 'John D.', quote: { en: 'Noza made finding a property in Dubai straightforward. The team was helpful, knowledgeable, and found exactly what I was looking for.', ar: 'جعلت نوزا العثور على عقار في دبي أمرًا سهلًا. كان الفريق متعاونًا وعلى دراية، ووجد لي ما كنت أبحث عنه تمامًا.' } },
  { name: 'Ayesha K.', quote: { en: 'Investing in Dubai was made simple. Their expertise and professionalism kept the process smooth and stress-free.', ar: 'جعلوا الاستثمار في دبي بسيطًا. خبرتهم واحترافيتهم جعلت الإجراءات سلسة وخالية من التوتر.' } },
  { name: 'Michael S.', quote: { en: 'They listened to my needs and helped me find a property that fit perfectly. Their dedication to clients is commendable.', ar: 'أصغوا إلى احتياجاتي وساعدوني في العثور على عقار يناسبني تمامًا. حرصهم على العملاء جدير بالثناء.' } },
  { name: 'Rami H.', quote: { en: 'Top-notch service. Responsive, transparent, and they helped me secure a great investment in Dubai.', ar: 'خدمة ممتازة. سرعة في الاستجابة وشفافية، وساعدوني في تأمين استثمار رائع في دبي.' } },
  { name: 'Sophia L.', quote: { en: 'From start to finish they handled everything with care and professionalism, making my purchase a breeze.', ar: 'من البداية إلى النهاية تولّوا كل شيء بعناية واحترافية، فكان شرائي للعقار سهلًا للغاية.' } },
];

export const faqs: { q: Bi; a: Bi }[] = [
  {
    q: { en: 'Why should I invest in Dubai property?', ar: 'لماذا أستثمر في عقارات دبي؟' },
    a: { en: 'Dubai combines a strong economy, tax-free personal income, modern infrastructure and a location linking East and West. Many investors are drawn by high rental yields compared with other global cities.', ar: 'تجمع دبي بين اقتصاد قوي ودخل شخصي معفى من الضرائب وبنية تحتية حديثة وموقع يربط الشرق بالغرب. ويجذب كثيرًا من المستثمرين ارتفاع العوائد الإيجارية مقارنة بمدن عالمية أخرى.' },
  },
  {
    q: { en: 'Can foreigners own property in Dubai?', ar: 'هل يمكن للأجانب تملّك عقار في دبي؟' },
    a: { en: 'Yes. Foreigners can own property with full ownership rights in designated freehold areas. Popular freehold locations include Dubai Marina, Jumeirah Lake Towers and Palm Jumeirah.', ar: 'نعم. يمكن للأجانب التملّك بحقوق ملكية كاملة في مناطق التملّك الحر المحددة. ومن المواقع الشائعة دبي مارينا وأبراج بحيرات الجميرا ونخلة جميرا.' },
  },
  {
    q: { en: 'Can I rent out my property after I buy it?', ar: 'هل يمكنني تأجير عقاري بعد شرائه؟' },
    a: { en: 'Yes. Owners can rent out their property, and demand is strong in areas such as Dubai Marina and Downtown Dubai. NOZA offers property management to handle tenants, rent and maintenance for you.', ar: 'نعم. يمكن للمالك تأجير عقاره، والطلب قوي في مناطق مثل دبي مارينا ووسط مدينة دبي. وتوفر نوزا خدمة إدارة العقارات لتتولى المستأجرين والإيجار والصيانة نيابةً عنك.' },
  },
  {
    q: { en: 'Why work with NOZA Real Estate in Dubai?', ar: 'لماذا أتعامل مع نوزا العقارية في دبي؟' },
    a: { en: 'NOZA brings market expertise, access to a wide range of properties and support through the buying or selling process, including the legal and procedural steps, so the transaction runs smoothly.', ar: 'تقدم نوزا خبرة بالسوق ووصولًا إلى مجموعة واسعة من العقارات ودعمًا طوال عملية الشراء أو البيع، بما يشمل الخطوات القانونية والإجرائية، لتسير الصفقة بسلاسة.' },
  },
  {
    q: { en: 'How do Dubai rental yields compare globally?', ar: 'كيف تقارن العوائد الإيجارية في دبي عالميًا؟' },
    a: { en: 'Gross yields in Dubai are often quoted between 9% and 12%, higher than many global cities such as London and New York. Actual yield depends on the unit, building and how it is let, so ask us for current figures.', ar: 'تُذكر العوائد الإجمالية في دبي غالبًا بين 9% و12%، وهي أعلى من مدن عالمية كثيرة مثل لندن ونيويورك. ويعتمد العائد الفعلي على الوحدة والمبنى وطريقة التأجير، فاسألنا عن الأرقام الحالية.' },
  },
  {
    q: { en: 'How does buying off-plan in Dubai work?', ar: 'كيف تتم عملية الشراء على الخريطة (قيد الإنشاء) في دبي؟' },
    a: { en: 'You reserve a unit, sign the sales agreement and pay in stages set by the developer’s payment plan, usually tied to construction progress, with the balance due near handover. A broker confirms the current plan and registration steps with you before you commit.', ar: 'تحجز وحدة وتوقّع عقد البيع وتسدد على دفعات وفق خطة الدفع التي يحددها المطوّر، وغالبًا ترتبط بمراحل البناء، وتُسدَّد المتبقية قرب التسليم. ويؤكد لك الوسيط الخطة الحالية وخطوات التسجيل قبل أن تلتزم.' },
  },
  {
    q: { en: 'What costs come on top of the purchase price?', ar: 'ما التكاليف الإضافية على سعر الشراء؟' },
    a: { en: 'Buyers typically pay a Dubai Land Department transfer fee of 4% of the price, plus registration and agency fees, and later service charges. Confirm exact amounts for your purchase with your broker before you commit.', ar: 'يدفع المشترون عادةً رسوم نقل ملكية لدى دائرة الأراضي والأملاك في دبي بنسبة 4% من السعر، إضافةً إلى رسوم التسجيل والوساطة ورسوم الخدمة لاحقًا. تأكد من المبالغ الدقيقة لصفقتك مع وسيطك قبل الالتزام.' },
  },
];
