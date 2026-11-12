export type Lang = 'en' | 'ar';
export type Bi = { en: string; ar: string };

export const langs: Lang[] = ['en', 'ar'];
export const L = (b: Bi, lang: Lang): string => b[lang];
export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

/** Build a localized, trailing-slash path. `path` is the English path, e.g. "/about-noza-real-estate/". */
export const lp = (lang: Lang, path = '/'): string => {
  let p = path.startsWith('/') ? path : '/' + path;
  if (!p.endsWith('/') && !p.includes('.') && !p.includes('#') && !p.includes('?')) p += '/';
  return lang === 'ar' ? '/ar' + p : p;
};

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'ar' : 'en');
