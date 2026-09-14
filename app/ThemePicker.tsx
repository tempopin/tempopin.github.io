'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Monitor, Moon, Sun, SunMoon } from 'lucide-react';
import { getThemeUi, type Locale } from './i18n';

type ThemePreference = 'light' | 'dark' | 'system';
const storageKey = 'tempopin-theme';

function isThemePreference(value: string | null): value is ThemePreference {
  return value === 'light' || value === 'dark' || value === 'system';
}

function applyTheme(preference: ThemePreference) {
  const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = preference === 'system'
    ? (systemIsDark ? 'dark' : 'light')
    : preference;
}

export function ThemePicker({ locale }: { locale: Locale }) {
  const labels = getThemeUi(locale);
  const [preference, setPreference] = useState<ThemePreference>('system');
  const preferenceRef = useRef<ThemePreference>('system');
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (isThemePreference(saved)) preferenceRef.current = saved;
    } catch {
      // Storage may be unavailable; the system setting remains the default.
    }
    setPreference(preferenceRef.current);
    applyTheme(preferenceRef.current);

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = () => {
      if (preferenceRef.current === 'system') applyTheme('system');
    };
    media.addEventListener('change', onSystemChange);
    return () => media.removeEventListener('change', onSystemChange);
  }, []);

  function choose(next: ThemePreference) {
    preferenceRef.current = next;
    setPreference(next);
    try { window.localStorage.setItem(storageKey, next); } catch { /* Keep this page's choice. */ }
    applyTheme(next);
    if (detailsRef.current) detailsRef.current.open = false;
  }

  const options = [
    { value: 'light', label: labels.light, Icon: Sun },
    { value: 'dark', label: labels.dark, Icon: Moon },
    { value: 'system', label: labels.system, Icon: Monitor },
  ] as const;

  return (
    <details className="theme-picker header-picker" ref={detailsRef}>
      <summary aria-label={`${labels.theme}: ${labels[preference]}`}>
        <SunMoon size={19} aria-hidden="true" />
        <span>{labels.theme}</span>
        <ChevronDown className="picker-chevron" size={16} aria-hidden="true" />
      </summary>
      <div className="theme-menu picker-menu" role="group" aria-label={labels.theme}>
        {options.map(({ value, label, Icon }) => (
          <button key={value} type="button" aria-pressed={preference === value} onClick={() => choose(value)}>
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
            {preference === value && <Check size={17} aria-hidden="true" />}
          </button>
        ))}
      </div>
    </details>
  );
}
