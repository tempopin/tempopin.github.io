'use client';

import { ArrowLeft, Package } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../SiteChrome';
import { getUi, isRtl, pathWithLocale } from '../i18n';
import { useLocale } from '../i18n/client';

const sources = [
  { name: 'Google Play Store', icon: '/download-icons/google-play.svg' },
  { name: 'APK', icon: null },
  { name: 'Obtainium', icon: '/download-icons/obtainium.png' },
  { name: 'F-Droid', icon: '/download-icons/fdroid.svg' },
];

export default function Downloads() {
  const locale = useLocale();
  const u = getUi(locale);
  return (
    <main className="downloads-page" lang={locale} dir={isRtl(locale) ? 'rtl' : 'ltr'}>
      <SiteHeader locale={locale} page="downloads" />
      <section className="downloads-hero section">
        <a className="back-link" href={pathWithLocale('/', locale)}><ArrowLeft size={19} aria-hidden="true" />{u.backHome}</a>
        <p className="eyebrow">TEMPOPIN</p>
        <h1>{u.downloads}</h1>
        <p>{u.downloadIntro}</p>
        <div className="download-notice"><span className="ready-dot" /><span>{u.notLive}</span></div>
      </section>
      <section className="download-grid section" aria-label={u.downloads}>
        {sources.map(({ name, icon }) => (
          <div className="download-badge" key={name} aria-label={`${name} — ${u.comingSoon}`}>
            <span className="download-badge-icon">
              {icon ? <img src={icon} alt="" width="47" height="47" /> : <Package size={43} strokeWidth={1.7} aria-hidden="true" />}
            </span>
            <span className="download-badge-copy"><small>{u.comingSoon}</small><strong>{name}</strong></span>
          </div>
        ))}
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
