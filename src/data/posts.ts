import type { Bi } from '../i18n';

export type Post = { slug: string; title: Bi; answer: Bi; body: Bi[]; updated: string };

export const posts: Post[] = [
  {
    slug: 'can-foreigners-buy-property-in-dubai',
    updated: '2026-11-12',
    title: { en: 'Can foreigners buy property in Dubai?', ar: 'هل يمكن للأجانب شراء عقار في دبي؟' },
    answer: {
      en: 'Yes. Foreign buyers can own property outright in designated freehold areas of Dubai, such as Dubai Marina, Jumeirah Lake Towers and Palm Jumeirah.',
      ar: 'نعم. يمكن للمشترين الأجانب تملّك العقار تملّكًا كاملًا في مناطق التملّك الحر المحددة في دبي، مثل دبي مارينا وأبراج بحيرات الجميرا ونخلة جميرا.',
    },
    body: [
      { en: 'Freehold means you hold the title to the unit itself, and you can sell it, rent it out or pass it on. Outside designated freehold zones, other ownership terms apply, so always confirm the status of the specific community before you reserve a unit.', ar: 'التملّك الحر يعني أنك تملك سند الوحدة نفسها، ويمكنك بيعها أو تأجيرها أو توريثها. وخارج مناطق التملّك الحر المحددة تنطبق شروط ملكية أخرى، لذا تأكد دائمًا من وضع المنطقة المحددة قبل حجز وحدة.' },
      { en: 'Before you buy, decide your goal (live in it, rent it long term, or run it as a holiday home), set a total budget that includes transfer and service fees, and ask the broker for the title and developer details.', ar: 'قبل الشراء، حدّد هدفك (السكن أو الإيجار طويل الأجل أو بيت عطلات)، وضع ميزانية إجمالية تشمل رسوم النقل والخدمة، واطلب من الوسيط بيانات السند والمطوّر.' },
      { en: 'A NOZA broker can walk you through eligible areas and the steps for your nationality and situation.', ar: 'يستطيع أحد وسطاء نوزا إرشادك إلى المناطق المؤهلة والخطوات المناسبة لجنسيتك وظروفك.' },
    ],
  },
  {
    slug: 'how-off-plan-buying-works-in-dubai',
    updated: '2026-11-12',
    title: { en: 'How does buying off-plan in Dubai work?', ar: 'كيف تتم عملية الشراء على الخريطة في دبي؟' },
    answer: {
      en: 'You reserve a unit in a project that is still being built, sign the sales agreement, and pay in instalments under the developer’s payment plan until handover.',
      ar: 'تحجز وحدة في مشروع ما زال قيد الإنشاء، وتوقّع عقد البيع، وتسدد على دفعات وفق خطة الدفع التي يحددها المطوّر حتى التسليم.',
    },
    body: [
      { en: 'Payment plans differ by developer and launch. Some tie instalments to construction milestones and others to dates, and some extend after handover. Ask for the plan in writing and check the handover date.', ar: 'تختلف خطط الدفع باختلاف المطوّر والمرحلة. بعضها يربط الدفعات بمراحل البناء، وبعضها بتواريخ محددة، وبعضها يمتد بعد التسليم. اطلب الخطة كتابةً وتحقق من تاريخ التسليم.' },
      { en: 'Check the developer’s track record, the project registration, and what the service charges are likely to be once it completes.', ar: 'تحقق من سجل المطوّر وتسجيل المشروع وما يُتوقع أن تكون عليه رسوم الخدمة بعد الاكتمال.' },
      { en: 'NOZA gives access to off-plan launches and keeps you updated on construction progress after you buy.', ar: 'تتيح لك نوزا الوصول إلى مشاريع قيد الإنشاء وتبقيك على اطلاع بتقدم البناء بعد الشراء.' },
    ],
  },
  {
    slug: 'how-to-estimate-rental-yield-in-dubai',
    updated: '2026-11-12',
    title: { en: 'How do I estimate rental yield on a Dubai apartment?', ar: 'كيف أقدّر العائد الإيجاري لشقة في دبي؟' },
    answer: {
      en: 'Divide the annual rent by the purchase price for gross yield, then subtract service charges, management and vacancy to get net yield.',
      ar: 'اقسم الإيجار السنوي على سعر الشراء لتحصل على العائد الإجمالي، ثم اطرح رسوم الخدمة والإدارة والشواغر لتحصل على العائد الصافي.',
    },
    body: [
      { en: 'Example: a unit bought for AED 1,000,000 that rents for AED 80,000 a year has an 8% gross yield. If service charges and management take 20% of rent and the unit sits empty for one month, net income is lower than the headline figure.', ar: 'مثال: وحدة اشتُريت بمليون درهم وتؤجَّر بـ80,000 درهم سنويًا عائدها الإجمالي 8%. وإذا استقطعت رسوم الخدمة والإدارة 20% من الإيجار وبقيت الوحدة شاغرة شهرًا، يصبح صافي الدخل أقل من الرقم المعلن.' },
      { en: 'Use the calculator on our homepage to test your own numbers, and ask a broker for recent rents in the same building.', ar: 'استخدم الحاسبة في صفحتنا الرئيسية لاختبار أرقامك، واطلب من وسيط الإيجارات الحديثة في المبنى نفسه.' },
    ],
  },
];
