import { headers } from 'next/headers';
import { locales, preferredLocale, type Locale } from './index';

export async function resolveRequestLocale(value: string | string[] | undefined): Promise<Locale> {
  const candidate = Array.isArray(value) ? value[0] : value;
  const explicit = locales.find(([code]) => code === candidate);
  if (explicit) return explicit[0];
  return preferredLocale((await headers()).get('accept-language'));
}
