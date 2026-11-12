import type { Bi } from '../i18n';

export type Area = { slug: string; name: Bi; img: string; intro: Bi; points: Bi[]; emirate: 'Dubai' | 'Ras Al Khaimah' };

const up = (p: string) => `https://nozarealestate.ae/wp-content/uploads/${p}`;

export const areas: Area[] = [
  {
    slug: 'marina', name: { en: 'Dubai Marina', ar: 'دبي مارينا' }, img: up('2024/08/marina-1.jpg'), emirate: 'Dubai',
    intro: {
      en: 'Dubai Marina stretches for 3 kilometres along the water, lined with towers and luxury apartments and filled with yachts and sailboats. The promenade has restaurants and cafes serving international cuisine, and Dubai Marina Mall adds shopping, dining and a cinema.',
      ar: 'تمتد دبي مارينا لمسافة 3 كيلومترات على الواجهة المائية، تحفّها الأبراج والشقق الفاخرة وتزدان باليخوت والقوارب الشراعية. وتضم الممشى مطاعم ومقاهي بمأكولات عالمية، ويضيف دبي مارينا مول تسوقًا ومطاعم ودار سينما.',
    },
    points: [
      { en: 'Waterfront promenade and marina views', ar: 'ممشى على الواجهة المائية وإطلالات على المارينا' },
      { en: 'Yacht rides, water sports and sailing clubs', ar: 'رحلات يخوت ورياضات مائية ونوادٍ للإبحار' },
      { en: 'Freehold apartments popular with investors', ar: 'شقق تملك حر مطلوبة بين المستثمرين' },
    ],
  },
  {
    slug: 'blue-water', name: { en: 'Bluewaters Island', ar: 'جزيرة بلوواترز' }, img: up('2024/08/bluwater.jpg'), emirate: 'Dubai',
    intro: { en: 'Bluewaters is an island community beside JBR, with residential towers, dining and leisure on the waterfront. Ask us which buildings have units available and how they compare on price and views.', ar: 'بلوواترز جزيرة سكنية بجوار جي بي آر، تضم أبراجًا سكنية ومطاعم وأماكن ترفيه على الواجهة البحرية. اسألنا عن المباني التي تتوفر فيها وحدات وكيف تتقارن في السعر والإطلالات.' },
    points: [
      { en: 'Island setting beside JBR', ar: 'موقع على جزيرة بجوار جي بي آر' },
      { en: 'Waterfront dining and leisure', ar: 'مطاعم وترفيه على الواجهة البحرية' },
      { en: 'Apartments with sea and skyline views', ar: 'شقق بإطلالات على البحر وأفق المدينة' },
    ],
  },
  {
    slug: 'jbr', name: { en: 'Jumeirah Beach Residence (JBR)', ar: 'جميرا بيتش ريزيدنس (جي بي آر)' }, img: up('2024/08/jbr-1.jpg'), emirate: 'Dubai',
    intro: { en: 'JBR combines beachfront living with a busy walk of shops and restaurants. It is a well-known choice for owners who want strong short-term rental demand and a holiday feel all year.', ar: 'تجمع جي بي آر بين السكن على الشاطئ وممشى حيوي من المتاجر والمطاعم. وهي خيار معروف للملاك الذين يبحثون عن طلب قوي على الإيجار قصير الأجل وأجواء عطلة طوال العام.' },
    points: [
      { en: 'Direct beach access', ar: 'وصول مباشر إلى الشاطئ' },
      { en: 'Walkable shops and restaurants', ar: 'متاجر ومطاعم على مسافة مشي' },
      { en: 'Strong holiday-let demand', ar: 'طلب قوي على بيوت العطلات' },
    ],
  },
  {
    slug: 'downtown', name: { en: 'Downtown Dubai', ar: 'وسط مدينة دبي' }, img: 'https://nozarealestate.ae/wp-content/uploads/elementor/thumbs/downtown-rcrgpne4bndjw57is5qdgg3dlrvlngtrv4v576y93o.jpg', emirate: 'Dubai',
    intro: { en: 'Downtown Dubai is the city’s central district, home to Dubai Mall, Burj Khalifa and the fountain, with high-rise residences close to offices, dining and culture.', ar: 'وسط مدينة دبي هو قلب المدينة، ويضم دبي مول وبرج خليفة والنافورة، مع أبراج سكنية قريبة من المكاتب والمطاعم والفعاليات الثقافية.' },
    points: [
      { en: 'Dubai Mall and Burj Khalifa on your doorstep', ar: 'دبي مول وبرج خليفة على بُعد خطوات' },
      { en: 'Central location for work and leisure', ar: 'موقع مركزي للعمل والترفيه' },
      { en: 'High-rise apartments and serviced residences', ar: 'شقق في أبراج وإقامات فندقية' },
    ],
  },
  {
    slug: 'jumeirah', name: { en: 'Jumeirah', ar: 'جميرا' }, img: 'https://nozarealestate.ae/wp-content/uploads/elementor/thumbs/Jumeirah-rcrgpxqcetrpfusi3s79pvhg50gn04ytkk1hh8ix78.jpg', emirate: 'Dubai',
    intro: { en: 'Jumeirah is Dubai’s long coastal stretch of beach villas, low-rise residences and boutique cafes, valued for space, sea access and a settled community feel.', ar: 'جميرا شريط ساحلي طويل من الفلل الشاطئية والمساكن منخفضة الارتفاع والمقاهي الراقية، تتميز بالمساحة والقرب من البحر وأجواء مجتمعية مستقرة.' },
    points: [
      { en: 'Beachfront villas and low-rise homes', ar: 'فلل شاطئية ومنازل منخفضة الارتفاع' },
      { en: 'Established, family-friendly neighbourhoods', ar: 'أحياء عريقة مناسبة للعائلات' },
      { en: 'Close to the city centre', ar: 'قريبة من وسط المدينة' },
    ],
  },
  {
    slug: 'dubai-south', name: { en: 'Dubai South', ar: 'دبي الجنوب' }, img: 'https://nozarealestate.ae/wp-content/uploads/elementor/thumbs/Untitled-design-rcrgpxqcetrpfusi3s79pvhg50gn04ytkk1hh8ix78.png', emirate: 'Dubai',
    intro: { en: 'Dubai South is a master-planned district around Al Maktoum International Airport, with several large residential launches, many on payment plans, aimed at buyers looking at long-term growth.', ar: 'دبي الجنوب منطقة مخططة بالكامل حول مطار آل مكتوم الدولي، وتضم عدة مشاريع سكنية كبيرة، كثير منها بخطط دفع، موجهة للمشترين الذين ينظرون إلى النمو طويل الأمد.' },
    points: [
      { en: 'Master-planned community near the airport', ar: 'مجتمع مخطط بالكامل بالقرب من المطار' },
      { en: 'Large off-plan launches with payment plans', ar: 'مشاريع كبيرة قيد الإنشاء بخطط دفع' },
      { en: 'Entry-level pricing relative to the coast', ar: 'أسعار دخول أقل مقارنة بالمناطق الساحلية' },
    ],
  },
  {
    slug: 'palm-jumeirah', name: { en: 'Palm Jumeirah', ar: 'نخلة جميرا' }, img: 'https://nozarealestate.ae/wp-content/uploads/elementor/thumbs/JumeirahPalm-rcrgpt15gnl9tszbv864veo5633sxng5vws22upw2c.jpg', emirate: 'Dubai',
    intro: { en: 'Palm Jumeirah is the palm-shaped island known for beachfront villas, branded residences and resort-style apartments, a long-standing choice for luxury buyers.', ar: 'نخلة جميرا جزيرة على شكل نخلة، تشتهر بالفلل الشاطئية والإقامات العلامات التجارية والشقق بطابع المنتجعات، وهي خيار قائم لمشتري العقارات الفاخرة.' },
    points: [
      { en: 'Villas, penthouses and branded residences', ar: 'فلل وبنتهاوس وإقامات تحمل علامات تجارية' },
      { en: 'Private beach access in many communities', ar: 'وصول إلى شاطئ خاص في مجتمعات عديدة' },
      { en: 'Freehold for foreign buyers', ar: 'تملّك حر للمشترين الأجانب' },
    ],
  },
  {
    slug: 'jumeirah-lake-towers', name: { en: 'Jumeirah Lake Towers (JLT)', ar: 'أبراج بحيرات الجميرا (JLT)' }, img: 'https://nozarealestate.ae/wp-content/uploads/elementor/thumbs/Laketowers-rcrgpwsi7zqf48tv99sn5dpzjml9sfv38fdzzykbdg.jpg', emirate: 'Dubai',
    intro: { en: 'JLT is a cluster of towers around artificial lakes, with offices, shops and apartments close to Dubai Marina and the metro. It is a freehold area with a wide range of unit sizes.', ar: 'JLT مجموعة أبراج حول بحيرات صناعية، تضم مكاتب ومتاجر وشققًا قريبة من دبي مارينا والمترو. وهي منطقة تملك حر بمساحات وحدات متنوعة.' },
    points: [
      { en: 'Freehold towers around lakes', ar: 'أبراج تملك حر حول البحيرات' },
      { en: 'Near Dubai Marina and the metro', ar: 'قريبة من دبي مارينا والمترو' },
      { en: 'Wide range of unit sizes and budgets', ar: 'تنوّع في مساحات الوحدات والميزانيات' },
    ],
  },
  {
    slug: 'marjan-islands', name: { en: 'Marjan Island, Ras Al Khaimah', ar: 'جزيرة المرجان، رأس الخيمة' }, img: 'https://nozarealestate.ae/wp-content/uploads/elementor/thumbs/DoubleTree-by-Hilton-Resort-Spa-Marjan-Island-1-e1725089606417-rcrgpt15gnl9tszbv864veo5633sxng5vws22upw2c.jpg', emirate: 'Ras Al Khaimah',
    intro: { en: 'Marjan Island is an island development in Ras Al Khaimah with resorts and beachfront residences, a destination for buyers looking beyond Dubai for waterfront property in the northern emirates.', ar: 'جزيرة المرجان مشروع جزيرة في رأس الخيمة يضم منتجعات ومساكن على الشاطئ، وهي وجهة للمشترين الذين يبحثون خارج دبي عن عقار على الواجهة البحرية في الإمارات الشمالية.' },
    points: [
      { en: 'Resort-led waterfront living', ar: 'سكن على الواجهة البحرية بطابع المنتجعات' },
      { en: 'Ras Al Khaimah, outside Dubai', ar: 'في رأس الخيمة، خارج دبي' },
      { en: 'Options for investors and holiday buyers', ar: 'خيارات للمستثمرين ومشتري بيوت العطلات' },
    ],
  },
];
