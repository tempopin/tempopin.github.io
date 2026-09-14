'use client';

import { useEffect, useState } from 'react';
import { isRtl, locales, preferredLocale, type Locale } from './index';

export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('lang');
    const explicit = locales.find(([code]) => code === requested)?.[0];
    const next = explicit ?? preferredLocale(navigator.languages.join(','));
    setLocale(next);
    document.documentElement.lang = next;
    document.documentElement.dir = isRtl(next) ? 'rtl' : 'ltr';
  }, []);

  return locale;
}
