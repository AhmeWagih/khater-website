import { Locale } from '../types';

export const defaultLocale: Locale = {
  code: 'en',
  name: 'English',
  dir: 'ltr',
};

export const locales: Locale[] = [
  defaultLocale,
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
  },
];

export const getLocaleByCode = (code: string): Locale => {
  return locales.find(locale => locale.code === code) || defaultLocale;
};