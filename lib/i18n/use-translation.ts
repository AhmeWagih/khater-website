"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getLocaleByCode } from './config';
import enTranslations from './translations/en.json';
import arTranslations from './translations/ar.json';

// Define proper types for translations
type TranslationObject = Record<string, any>;

const translations: Record<string, TranslationObject> = {
  en: enTranslations,
  ar: arTranslations
};

export function useTranslation() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const [currentLocale, setCurrentLocale] = useState(getLocaleByCode(locale));
  
  useEffect(() => {
    const newLocale = getLocaleByCode(locale);
    setCurrentLocale(newLocale);
    document.documentElement.dir = newLocale.dir;
    document.documentElement.lang = newLocale.code;
  }, [locale]);

  function t(key: string): string {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    let value: any = translations[locale as keyof typeof translations];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation is not found
      }
    }

    return typeof value === 'string' ? value : key;
  }

  return { t, locale: currentLocale };
}