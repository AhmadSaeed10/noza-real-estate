import { L, lp, type Lang } from '../i18n';
import { faqs } from './content';
import { site } from './site';
import type { Area } from './areas';
import type { Project } from './projects';
import type { Post } from './posts';

const o = site.url;

export const faqSchema = (lang: Lang, items = faqs) => ({
  '@type': 'FAQPage',
  inLanguage: lang === 'ar' ? 'ar-AE' : 'en-AE',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: L(f.q, lang), acceptedAnswer: { '@type': 'Answer', text: L(f.a, lang) } })),
});

export const itemListSchema = (lang: Lang, name: string, items: { name: string; url: string }[]) => ({
  '@type': 'ItemList',
  name,
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: o + it.url })),
});

export const areaSchema = (lang: Lang, a: Area) => ({
  '@type': 'Place',
  name: L(a.name, lang),
  description: L(a.intro, lang),
  image: a.img,
  address: { '@type': 'PostalAddress', addressRegion: a.emirate, addressCountry: 'AE' },
  url: o + lp(lang, `/${a.slug}/`),
});

export const projectSchema = (lang: Lang, p: Project) => ({
  '@type': 'Residence',
  name: p.name,
  description: L(p.summary, lang),
  image: p.img,
  url: o + lp(lang, `/projects/${p.slug}/`),
  address: { '@type': 'PostalAddress', ...(p.community ? { addressLocality: p.community } : {}), addressRegion: 'Dubai', addressCountry: 'AE' },
  ...(p.developer ? { brand: { '@type': 'Organization', name: p.developer } } : {}),
});

export const articleSchema = (lang: Lang, p: Post) => ({
  '@type': 'Article',
  headline: L(p.title, lang),
  description: L(p.answer, lang),
  inLanguage: lang === 'ar' ? 'ar-AE' : 'en-AE',
  dateModified: p.updated,
  datePublished: p.updated,
  mainEntityOfPage: o + lp(lang, `/blog/${p.slug}/`),
  author: { '@type': 'Organization', name: site.name, '@id': o + '/#agent' },
  publisher: { '@id': o + '/#agent' },
});

export const serviceSchema = (lang: Lang, s: { title: { en: string; ar: string }; text: { en: string; ar: string } }) => ({
  '@type': 'Service',
  name: L(s.title, lang),
  description: L(s.text, lang),
  provider: { '@id': o + '/#agent' },
  areaServed: 'Dubai, United Arab Emirates',
});
