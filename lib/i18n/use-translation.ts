"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getLocaleByCode } from './config';
import enTranslations from './translations/en.json';
import arTranslations from './translations/ar.json';

const translations = {
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

  function t(key: string) {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    let value = translations[locale as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        return key; // Return the key if translation is not found
      }
    }
    
    return value as string;
  }

  return { t, locale: currentLocale };
}