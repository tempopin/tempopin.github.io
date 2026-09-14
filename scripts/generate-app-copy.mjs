import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const resourcesArg = process.argv[2];
if (!resourcesArg) {
  throw new Error('Usage: node scripts/generate-app-copy.mjs /path/to/android/app/src/main/res');
}
const resources = path.resolve(resourcesArg);
const output = path.resolve(here, '../app/i18n/app-copy.json');

const localeDirectories = {
  en: 'values', ar: 'values-ar', bg: 'values-bg', bn: 'values-bn',
  cs: 'values-cs', da: 'values-da', de: 'values-de', el: 'values-el',
  es: 'values-es', fa: 'values-fa', fi: 'values-fi', fr: 'values-fr',
  he: 'values-iw', hi: 'values-hi', hu: 'values-hu', id: 'values-in',
  it: 'values-it', ja: 'values-ja', ko: 'values-ko', ms: 'values-ms',
  nb: 'values-nb', nl: 'values-nl', pl: 'values-pl', 'pt-BR': 'values-pt-rBR',
  ro: 'values-ro', ru: 'values-ru', sv: 'values-sv', th: 'values-th',
  tr: 'values-tr', uk: 'values-uk', ur: 'values-ur', vi: 'values-vi',
  'zh-CN': 'values-zh-rCN', 'zh-TW': 'values-zh-rTW',
};

const stringKeys = [
  'app_description', 'control_eyebrow', 'control_title',
  'control_actions_title', 'control_actions_description',
  'control_today_summary_label', 'daily_reset_title', 'daily_reset_description',
  'grant_overlay_permission', 'grant_usage_access', 'grant_notifications',
  'navigation_control', 'navigation_history', 'navigation_settings',
  'appearance_eyebrow', 'appearance_title', 'appearance_description',
  'appearance_live_note', 'appearance_layout_title', 'appearance_style_title',
  'appearance_colors_title', 'appearance_pulse_title',
  'appearance_pulse_style', 'appearance_pulse_interval',
  'appearance_session_title', 'appearance_session_description',
  'statistics_eyebrow', 'statistics_title', 'statistics_history_description',
  'statistics_include_system_apps', 'statistics_activity_threshold',
  'statistics_history_daily', 'statistics_history_weekly',
  'statistics_history_monthly', 'statistics_history_yearly',
  'privacy_summary', 'notification_text',
];

const arrayKeys = ['appearance_style_entries', 'appearance_pulse_style_entries'];

function decode(value) {
  return value
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"')
    .trim();
}

function parse(xml) {
  const strings = {};
  const arrays = {};
  for (const [, attrs, value] of xml.matchAll(/<string(?=\s|>)([^>]*)>([\s\S]*?)<\/string>/g)) {
    const name = attrs.match(/\bname="([^"]+)"/)?.[1];
    if (name) strings[name] = decode(value);
  }
  for (const [, attrs, value] of xml.matchAll(/<string-array\b([^>]*)>([\s\S]*?)<\/string-array>/g)) {
    const name = attrs.match(/\bname="([^"]+)"/)?.[1];
    if (name) arrays[name] = [...value.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => decode(match[1]));
  }
  return { strings, arrays };
}

const all = {};
for (const [locale, directory] of Object.entries(localeDirectories)) {
  const xml = await readFile(path.join(resources, directory, 'strings.xml'), 'utf8');
  const parsed = parse(xml);
  const missing = [...stringKeys, ...arrayKeys].filter((key) => !(key in parsed.strings) && !(key in parsed.arrays));
  if (missing.length) throw new Error(`${locale} is missing ${missing.join(', ')}`);
  if (parsed.arrays.appearance_style_entries.length !== 10 || parsed.arrays.appearance_pulse_style_entries.length !== 6) {
    throw new Error(`${locale} has an unexpected style or pulse count`);
  }
  all[locale] = {
    strings: Object.fromEntries(stringKeys.map((key) => [key, parsed.strings[key]])),
    arrays: Object.fromEntries(arrayKeys.map((key) => [key, parsed.arrays[key]])),
  };
}

await writeFile(output, `${JSON.stringify(all, null, 2)}\n`);
console.log(`Saved ${Object.keys(all).length} complete app locales to ${output}`);
