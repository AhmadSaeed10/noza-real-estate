import type { Bi } from '../i18n';

/**
 * Only facts confirmed on the live site or well-known public facts are shown.
 * The live site repeats "Sobha Realty / Motor City / AED 1,007,000" on ten listings, which is clearly template data,
 * so those fields are NOT reused. Set `developer` / `community` / `from` once verified; the UI hides empty ones
 * and shows "Price on request".
 */
export type Project = {
  slug: string;
  name: string;
  img: string;
  developer?: string;
  community?: string;
  from?: number; // AED, only when verified
  tag: Bi;
  summary: Bi;
  units?: Bi;
  featured?: boolean;
  type: 'villa' | 'townhouse' | 'apartment';
};

const up = (p: string) => `https://nozarealestate.ae/wp-content/uploads/${p}`;
const old = (p: string) => `https://nozarealestate.com/wp-content/uploads/${p}`;

export const projects: Project[] = [
  {
    slug: 'azizi-venice', name: 'Azizi Venice', developer: 'Azizi Developments', community: 'Dubai South',
    img: old('2024/09/WhatsApp-Image-2024-09-10-at-08.23.44_5b92d7be-1024x1024.jpg'), featured: true, type: 'apartment',
    tag: { en: 'Villas and apartments', ar: 'فلل وشقق' },
    summary: { en: 'A large waterfront-themed community designed around luxury living, with 109 villas and more than 34,000 apartments.', ar: 'مجتمع كبير بطابع الواجهة المائية صُمّم حول الحياة الفاخرة، يضم 109 فلل وأكثر من 34 ألف شقة.' },
    units: { en: '109 villas, 34,795+ apartments', ar: '109 فلل و34,795+ شقة' },
  },
  {
    slug: 'damac-sun-city', name: 'Damac Sun City', developer: 'Damac Properties', community: 'Dubailand',
    img: old('2024/09/WhatsApp-Image-2024-09-10-at-08.23.49_bc11aa81.jpg'), featured: true, type: 'townhouse',
    tag: { en: '4 to 5 bedroom townhouses', ar: 'تاون هاوس 4 إلى 5 غرف' },
    summary: { en: 'A family-focused concept of wholesome urban living, built around spacious 4 and 5 bedroom townhouses.', ar: 'مفهوم سكني عصري موجّه للعائلات، قائم على تاون هاوس واسعة من 4 و5 غرف نوم.' },
    units: { en: '4 and 5 bedroom townhouses', ar: 'تاون هاوس 4 و5 غرف' },
  },
  {
    slug: 'the-valley-by-emaar', name: 'The Valley by Emaar', developer: 'Emaar Properties',
    img: old('2024/09/WhatsApp-Image-2024-09-10-at-09.14.01_e2c6ee16-1024x901.jpg'), featured: true, type: 'townhouse',
    tag: { en: '3 to 5 bedroom townhouses', ar: 'تاون هاوس 3 إلى 5 غرف' },
    summary: { en: 'A collection of luxury 3 to 5 bedroom townhouses spread across clusters including Eden, Nara, Talia and Orania.', ar: 'مجموعة من التاون هاوس الفاخرة من 3 إلى 5 غرف نوم موزعة على مجمّعات منها إيدن ونارا وتاليا وأورانيا.' },
    units: { en: 'Clusters: Eden, Nara, Talia, Orania', ar: 'المجمّعات: إيدن، نارا، تاليا، أورانيا' },
  },
  {
    slug: 'sobha-orbis', name: 'Sobha Orbis', developer: 'Sobha Realty', community: 'Motor City',
    img: up('2024/09/Orbis-Building-1024x640.webp'), type: 'apartment',
    tag: { en: 'Apartments in Motor City', ar: 'شقق في مدينة السيارات' },
    summary: { en: 'Sobha Realty apartments in Motor City. Ask us for current unit types, availability and the payment plan.', ar: 'شقق من سوبها العقارية في مدينة السيارات. اسألنا عن أنواع الوحدات المتاحة وخطة الدفع الحالية.' },
  },
  {
    slug: 'binghatti-hills', name: 'Binghatti Hills', developer: 'Binghatti',
    img: up('2024/09/Binghatti-Hills-3-1-1024x640.webp'), type: 'apartment',
    tag: { en: 'Branded apartment towers', ar: 'أبراج سكنية مميزة' },
    summary: { en: 'A Binghatti residential launch. Ask us for current unit types, availability and the payment plan.', ar: 'مشروع سكني من بن غاطي. اسألنا عن أنواع الوحدات المتاحة وخطة الدفع الحالية.' },
  },
  {
    slug: 'binghatti-apex', name: 'Binghatti Apex', developer: 'Binghatti',
    img: up('2024/09/Binghatti-Apex-2-1024x640.webp'), type: 'apartment',
    tag: { en: 'Branded apartment towers', ar: 'أبراج سكنية مميزة' },
    summary: { en: 'A Binghatti residential launch. Ask us for current unit types, availability and the payment plan.', ar: 'مشروع سكني من بن غاطي. اسألنا عن أنواع الوحدات المتاحة وخطة الدفع الحالية.' },
  },
  {
    slug: 'diamondz', name: 'Diamondz', developer: 'Danube Properties', community: 'Jumeirah Lake Towers',
    img: up('2024/09/Diamondz-3-1024x640.jpg'), type: 'apartment',
    tag: { en: 'Apartments in JLT', ar: 'شقق في أبراج بحيرات الجميرا' },
    summary: { en: 'A Danube Properties tower in Jumeirah Lake Towers. Ask us for current unit types, availability and the payment plan.', ar: 'برج من دانوب العقارية في أبراج بحيرات الجميرا. اسألنا عن أنواع الوحدات المتاحة وخطة الدفع الحالية.' },
  },
  {
    slug: 'the-spark', name: 'The Spark',
    img: up('2024/09/The-Spark-Building-1024x640.webp'), type: 'apartment',
    tag: { en: 'Residential tower', ar: 'برج سكني' },
    summary: { en: 'A residential launch we place buyers into. Ask us for developer, location, unit types and the payment plan.', ar: 'مشروع سكني نوجّه المشترين إليه. اسألنا عن المطوّر والموقع وأنواع الوحدات وخطة الدفع.' },
  },
  {
    slug: 'ocean-star', name: 'Ocean Star',
    img: up('2024/09/Ocean-Star-Building-1024x640.webp'), type: 'apartment',
    tag: { en: 'Residential tower', ar: 'برج سكني' },
    summary: { en: 'A residential launch we place buyers into. Ask us for developer, location, unit types and the payment plan.', ar: 'مشروع سكني نوجّه المشترين إليه. اسألنا عن المطوّر والموقع وأنواع الوحدات وخطة الدفع.' },
  },
  {
    slug: 'q-garden-lofts', name: 'Q Garden Lofts',
    img: up('2024/09/Q-Garden-Lofts-Building-1024x640.webp'), type: 'apartment',
    tag: { en: 'Residential tower', ar: 'برج سكني' },
    summary: { en: 'A residential launch we place buyers into. Ask us for developer, location, unit types and the payment plan.', ar: 'مشروع سكني نوجّه المشترين إليه. اسألنا عن المطوّر والموقع وأنواع الوحدات وخطة الدفع.' },
  },
  {
    slug: 'sonate', name: 'Sonate',
    img: up('2024/09/Sonate-Building-2-1024x640.webp'), type: 'apartment',
    tag: { en: 'Residential tower', ar: 'برج سكني' },
    summary: { en: 'A residential launch we place buyers into. Ask us for developer, location, unit types and the payment plan.', ar: 'مشروع سكني نوجّه المشترين إليه. اسألنا عن المطوّر والموقع وأنواع الوحدات وخطة الدفع.' },
  },
  {
    slug: 'albero', name: 'Albero',
    img: up('2024/09/Albero-1-1024x640.webp'), type: 'apartment',
    tag: { en: 'Residential development', ar: 'مشروع سكني' },
    summary: { en: 'A residential launch we place buyers into. Ask us for developer, location, unit types and the payment plan.', ar: 'مشروع سكني نوجّه المشترين إليه. اسألنا عن المطوّر والموقع وأنواع الوحدات وخطة الدفع.' },
  },
];
