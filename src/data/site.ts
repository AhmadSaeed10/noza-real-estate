export const site = {
  name: 'NOZA Real Estate',
  legalName: 'NOZA Real Estate',
  url: 'https://nozarealestate.ae',
  phone: '+971525873273',
  phoneDisplay: '+971 52 587 3273',
  whatsapp: '971525873273',
  founded: 2006,
  logo: 'https://nozarealestate.ae/images/noza-logo.png',
  socials: {
    facebook: 'https://www.facebook.com/nozarealestate',
    instagram: 'https://www.instagram.com/nozarealestate/',
    linkedin: 'https://www.linkedin.com/company/98519311/',
    tiktok: 'https://www.tiktok.com/@noza.real.estate',
  },
  founder: 'Muhammad Zahid Iqbal',
  md: 'Noor Fatima',
  // Set PUBLIC_FORM_ENDPOINT in .env to a Formspree / Basin / own API URL. Without it, forms open WhatsApp with the lead pre-filled.
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  ga4: import.meta.env.PUBLIC_GA4_ID ?? '',
};

export const wa = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
