import { ChevronDown, Download, Globe2, History, Palette, Smartphone } from 'lucide-react';
import { getAppCopy, getUi, isRtl, locales, pathWithLocale, type Locale } from './i18n';

export function AppMark() {
  return <img className="app-mark" src="/app-icon.svg" alt="" width="44" height="44" />;
}

export function SiteHeader({ locale, page }: { locale: Locale; page: 'home' | 'downloads' }) {
  const s = getAppCopy(locale).strings;
  const u = getUi(locale);
  const home = pathWithLocale('/', locale);
  const downloads = pathWithLocale('/downloads', locale);
  return (
    <header className="site-header">
      <a className="brand" href={home} aria-label="TempoPin"><AppMark /><span>TempoPin</span></a>
      <nav className="desktop-nav" aria-label="TempoPin">
        <a href={`${home}#today`}>{s.navigation_control}</a>
        <a href={`${home}#days`}>{s.navigation_history}</a>
        <a href={`${home}#style`}>{s.navigation_settings}</a>
        <a href={`${home}#privacy`}>{u.privacy}</a>
        <a className={page === 'downloads' ? 'nav-active' : ''} href={downloads}>{u.downloads}</a>
      </nav>
      <details className="language-picker">
        <summary aria-label={u.language}>
          <Globe2 size={19} aria-hidden="true" />
          <span>{locales.find(([code]) => code === locale)?.[1]}</span>
          <ChevronDown className="language-chevron" size={16} aria-hidden="true" />
        </summary>
        <nav className="language-menu" aria-label={u.language}>
          {locales.map(([code, name]) => (
            <a
              key={code}
              href={pathWithLocale(page === 'downloads' ? '/downloads' : '/', code)}
              lang={code}
              dir={isRtl(code) ? 'rtl' : 'ltr'}
              aria-current={code === locale ? 'page' : undefined}
            >{name}</a>
          ))}
        </nav>
      </details>
    </header>
  );
}

export function SectionTabs({ locale }: { locale: Locale }) {
  const s = getAppCopy(locale).strings;
  const u = getUi(locale);
  const home = pathWithLocale('/', locale);
  return (
    <nav className="section-tabs" aria-label="TempoPin">
      <a href={`${home}#today`}><Smartphone size={20} aria-hidden="true" />{s.navigation_control}</a>
      <a href={`${home}#days`}><History size={20} aria-hidden="true" />{s.navigation_history}</a>
      <a href={`${home}#style`}><Palette size={20} aria-hidden="true" />{s.navigation_settings}</a>
      <a href={pathWithLocale('/downloads', locale)}><Download size={20} aria-hidden="true" />{u.downloads}</a>
    </nav>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const u = getUi(locale);
  return (
    <footer className="site-footer section">
      <a className="brand" href={pathWithLocale('/', locale)}><AppMark /><span>TempoPin</span></a>
      <span>Android 6.0+</span>
      <a href={pathWithLocale('/downloads', locale)}>{u.downloads}</a>
    </footer>
  );
}
