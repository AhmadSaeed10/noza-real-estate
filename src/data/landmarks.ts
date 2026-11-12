import type { Bi } from '../i18n';

/**
 * Original single-line illustrations of UAE landmarks.
 * Each drawing sits in its own viewBox (w x h) with the ground line at the bottom.
 * Stroke-only, coloured with currentColor, so they inherit the brass accent.
 */
export interface Landmark {
  id: LandmarkId;
  w: number;
  h: number;
  body: string;
  name: Bi;
  note: Bi;
}

export type LandmarkId =
  | 'burj-khalifa'
  | 'burj-al-arab'
  | 'museum-future'
  | 'dubai-frame'
  | 'palm-jumeirah'
  | 'ain-dubai'
  | 'grand-mosque';

const wheel = (() => {
  const cx = 80, cy = 74, r = 62, n = 16;
  let spokes = '';
  let pods = '';
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const x = (cx + Math.cos(a) * r).toFixed(1);
    const y = (cy + Math.sin(a) * r).toFixed(1);
    spokes += `M${cx} ${cy} L${x} ${y} `;
    const px = (cx + Math.cos(a) * (r + 6)).toFixed(1);
    const py = (cy + Math.sin(a) * (r + 6)).toFixed(1);
    pods += `<circle cx="${px}" cy="${py}" r="3.4"/>`;
  }
  return `<circle cx="${cx}" cy="${cy}" r="${r}"/><circle cx="${cx}" cy="${cy}" r="7"/><path d="${spokes.trim()}"/>${pods}<path d="M80 74 L44 176 M80 74 L116 176 M58 136 H102 M30 176 H130"/>`;
})();

const fronds = (() => {
  // trunk plus sixteen fronds fanning out, crowned by the crescent breakwater
  let d = 'M80 152 V84 ';
  const n = 8;
  for (let i = 0; i < n; i++) {
    const y = 88 + i * 7.5;
    const len = 46 - i * 2.5;
    d += `M80 ${y} Q${80 - len * 0.6} ${y - 10} ${80 - len} ${y + 4} M80 ${y} Q${80 + len * 0.6} ${y - 10} ${80 + len} ${y + 4} `;
  }
  d += 'M80 84 L80 70';
  return `<path d="${d.trim()}"/><path d="M14 92 A70 64 0 0 1 146 92"/><path d="M8 100 A76 70 0 0 1 152 100"/><path d="M60 156 H100"/>`;
})();

export const landmarks: Landmark[] = [
  {
    id: 'burj-khalifa',
    w: 100,
    h: 220,
    body: `<path d="M50 4 V30"/><path d="M46 30 H54 V58 H57 V88 H61 V118 H65 V148 H70 V180 H76 V216 H24 V180 H30 V148 H35 V118 H39 V88 H43 V58 H46 Z"/><path d="M50 34 V214"/><path d="M14 216 H86"/>`,
    name: { en: 'Burj Khalifa', ar: 'برج خليفة' },
    note: { en: '828 m, the world’s tallest building, at the heart of Downtown Dubai.', ar: '828 مترًا، أطول مبنى في العالم، في قلب وسط مدينة دبي.' },
  },
  {
    id: 'burj-al-arab',
    w: 110,
    h: 220,
    body: `<path d="M36 216 V12"/><path d="M36 26 C78 52 96 126 88 216"/><path d="M36 70 H70 M36 112 H84 M36 156 H88"/><path d="M36 128 H18"/><ellipse cx="13" cy="128" rx="10" ry="3.2"/><path d="M6 216 H104"/>`,
    name: { en: 'Burj Al Arab', ar: 'برج العرب' },
    note: { en: 'The sail-shaped icon standing on its own island off Jumeirah Beach.', ar: 'أيقونة على شكل شراع تقف على جزيرتها قبالة شاطئ جميرا.' },
  },
  {
    id: 'museum-future',
    w: 200,
    h: 150,
    body: `<ellipse cx="100" cy="72" rx="72" ry="58"/><ellipse cx="112" cy="70" rx="34" ry="27"/><path d="M44 52 q10 -8 18 0 t18 0 M40 86 q12 8 22 -2 t20 4 M150 44 q8 -8 14 2 M154 96 q6 8 12 -2 M98 28 q10 -6 22 0"/><path d="M18 146 Q100 120 182 146"/>`,
    name: { en: 'Museum of the Future', ar: 'متحف المستقبل' },
    note: { en: 'A ring of Arabic calligraphy rising beside Sheikh Zayed Road.', ar: 'حلقة من الخط العربي ترتفع بجوار شارع الشيخ زايد.' },
  },
  {
    id: 'dubai-frame',
    w: 120,
    h: 220,
    body: `<path d="M18 216 V10 H102 V216"/><path d="M36 216 V30 H84 V216"/><path d="M18 60 H36 M18 110 H36 M18 160 H36 M84 60 H102 M84 110 H102 M84 160 H102"/><path d="M6 216 H114"/>`,
    name: { en: 'Dubai Frame', ar: 'برواز دبي' },
    note: { en: 'A 150 m frame in Zabeel Park, looking at old Dubai on one side and the new city on the other.', ar: 'إطار بارتفاع 150 مترًا في حديقة زعبيل يطل على دبي القديمة من جهة والمدينة الجديدة من الأخرى.' },
  },
  {
    id: 'palm-jumeirah',
    w: 160,
    h: 160,
    body: fronds,
    name: { en: 'Palm Jumeirah', ar: 'نخلة جميرا' },
    note: { en: 'The palm-shaped island of beachfront villas, apartments and resorts.', ar: 'الجزيرة على شكل نخلة بفللها وشققها ومنتجعاتها الشاطئية.' },
  },
  {
    id: 'ain-dubai',
    w: 160,
    h: 180,
    body: wheel,
    name: { en: 'Ain Dubai', ar: 'عين دبي' },
    note: { en: 'The giant observation wheel on Bluewaters Island, next to Dubai Marina and JBR.', ar: 'عجلة المراقبة العملاقة في جزيرة بلوواترز بجوار دبي مارينا وجي بي آر.' },
  },
  {
    id: 'grand-mosque',
    w: 220,
    h: 140,
    body: `<path d="M18 136 V40 L22 26 L26 40 V136 M194 136 V40 L198 26 L202 40 V136"/><path d="M78 96 C78 46 142 46 142 96"/><path d="M110 50 V40"/><path d="M113 27 a6 6 0 1 0 0 11 a4.6 4.6 0 1 1 0 -11 Z"/><path d="M46 96 C46 74 72 74 72 96 M148 96 C148 74 174 74 174 96"/><path d="M59 75 V68 M161 75 V68"/><path d="M34 96 H186 V136 M34 96 V136"/><path d="M50 136 V118 a8 8 0 0 1 16 0 V136 M80 136 V114 a10 10 0 0 1 20 0 V136 M120 136 V114 a10 10 0 0 1 20 0 V136 M154 136 V118 a8 8 0 0 1 16 0 V136"/><path d="M8 136 H212"/>`,
    name: { en: 'Sheikh Zayed Grand Mosque', ar: 'جامع الشيخ زايد الكبير' },
    note: { en: 'Abu Dhabi’s white-marble landmark, about 90 minutes’ drive from Dubai.', ar: 'معلم أبوظبي من الرخام الأبيض، على بعد نحو 90 دقيقة بالسيارة من دبي.' },
  },
];

export const landmark = (id: LandmarkId) => landmarks.find((l) => l.id === id)!;

/** Give every drawn element pathLength=1 so the draw-on animation works for any shape. */
export const withLength = (body: string) => body.replace(/<(path|circle|ellipse|line|rect|polyline)\b/g, '<$1 pathLength="1"');
