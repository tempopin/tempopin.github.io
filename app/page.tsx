'use client';

import { Activity, ArrowDown, BellRing, Check, Clock3, Palette, ShieldCheck, SlidersHorizontal, WifiOff } from 'lucide-react';
import { SectionTabs, SiteFooter, SiteHeader } from './SiteChrome';
import { getAppCopy, getUi, isRtl, pathWithLocale } from './i18n';
import { useLocale } from './i18n/client';

function Screenshot({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <div className={`screen-shot ${className}`}><img src={src} alt={alt} width="540" height="1200" loading="lazy" /></div>;
}

export default function Home() {
  const locale = useLocale();
  const { strings: s, arrays: a } = getAppCopy(locale);
  const u = getUi(locale);
  const [privacyTitle, ...privacyLines] = s.privacy_summary.split('\n');
  const privacyBody = privacyLines.join(' ');
  return (
    <main id="top" lang={locale} dir={isRtl(locale) ? 'rtl' : 'ltr'}>
      <SiteHeader locale={locale} page="home" />

      <section className="hero section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{s.control_eyebrow}</p>
          <h1 id="hero-title">{s.control_title}</h1>
          <p className="hero-intro">{s.app_description}</p>
          <a className="primary-button" href={pathWithLocale('/downloads', locale)}>{u.downloads}<ArrowDown size={19} aria-hidden="true" /></a>
          <p className="quiet-note"><WifiOff size={18} aria-hidden="true" />{u.noInternet}</p>
        </div>
        <div className="hero-screens">
          <Screenshot src="/control-dark.png" alt={`TempoPin — ${s.navigation_control}`} className="hero-screen-dark" />
          <Screenshot src="/control-light.png" alt={`TempoPin — ${s.navigation_control}`} className="hero-screen-light" />
        </div>
      </section>

      <SectionTabs locale={locale} />

      <section className="feature-section section" id="today" aria-labelledby="today-title">
        <div className="feature-copy">
          <p className="eyebrow">{s.navigation_control}</p>
          <h2 id="today-title">{s.control_today_summary_label}</h2>
          <p>{s.control_actions_description}</p>
          <div className="fact-card"><span className="fact-icon"><Clock3 size={25} aria-hidden="true" /></span><div><strong>{s.appearance_session_title}</strong><span>{s.appearance_session_description}</span></div></div>
          <div className="fact-card"><span className="fact-icon"><Activity size={25} aria-hidden="true" /></span><div><strong>{s.daily_reset_title}</strong><span>{s.daily_reset_description}</span></div></div>
        </div>
        <div className="today-visual">
          <div className="ring-figure" aria-hidden="true"><span className="ring-center"><strong>11s</strong><small>{s.control_today_summary_label}</small></span></div>
          <div className="ready-card"><span className="ready-dot" /><span><strong>{s.control_actions_title}</strong><small>{s.control_actions_description}</small></span></div>
          <div className="overlay-example"><span>{s.appearance_style_title}</span><strong>00:42:18</strong><small>↳ 00:08:41</small></div>
        </div>
      </section>

      <section className="days-band" id="days" aria-labelledby="days-title">
        <div className="section days-layout">
          <div className="days-screen"><Screenshot src="/history-light.png" alt={`TempoPin — ${s.navigation_history}`} /></div>
          <div className="feature-copy">
            <p className="eyebrow">{s.statistics_eyebrow}</p><h2 id="days-title">{s.statistics_title}</h2>
            <p>{s.statistics_history_description}</p>
            <div className="periods"><span>{s.statistics_history_daily}</span><span>{s.statistics_history_weekly}</span><span>{s.statistics_history_monthly}</span><span>{s.statistics_history_yearly}</span></div>
            <p className="supporting-copy">{s.statistics_include_system_apps} · {s.statistics_activity_threshold}</p>
          </div>
        </div>
      </section>

      <section className="feature-section section style-layout" id="style" aria-labelledby="style-title">
        <div className="feature-copy">
          <p className="eyebrow">{s.appearance_eyebrow}</p><h2 id="style-title">{s.appearance_title}</h2>
          <p>{s.appearance_description}</p>
          <div className="settings-summary">
            <div><SlidersHorizontal size={24} aria-hidden="true" /><span><strong>{s.appearance_layout_title}</strong><small>{s.appearance_style_title}</small></span></div>
            <div><Palette size={24} aria-hidden="true" /><span><strong>{s.appearance_colors_title}</strong><small>{s.appearance_live_note}</small></span></div>
            <div><BellRing size={24} aria-hidden="true" /><span><strong>{s.appearance_pulse_title}</strong><small>{s.appearance_pulse_interval}: 00:05–1:00:00</small></span></div>
          </div>
        </div>
        <div className="style-screen"><Screenshot src="/settings-light.png" alt={`TempoPin — ${s.navigation_settings}`} /></div>
      </section>

      <section className="options-section section" aria-labelledby="options-title">
        <div className="options-heading"><p className="eyebrow">{s.appearance_eyebrow}</p><h2 id="options-title">{s.appearance_layout_title}</h2></div>
        <div className="options-grid">
          <div className="options-card"><span className="options-count">10</span><h3>{s.appearance_style_title}</h3><ul>{a.appearance_style_entries.map((name) => <li key={name}>{name}</li>)}</ul></div>
          <div className="options-card"><span className="options-count">6</span><h3>{s.appearance_pulse_style}</h3><ul>{a.appearance_pulse_style_entries.map((name) => <li key={name}>{name}</li>)}</ul></div>
          <div className="options-card options-card--note"><Activity size={31} aria-hidden="true" /><h3>{s.appearance_session_title}</h3><p>{s.appearance_session_description}</p><Palette size={31} aria-hidden="true" /><h3>{s.appearance_colors_title}</h3><p>{s.appearance_description}</p></div>
        </div>
      </section>

      <section className="privacy-band" id="privacy" aria-labelledby="privacy-title">
        <div className="section privacy-layout">
          <div><p className="eyebrow">{u.privacy}</p><h2 id="privacy-title">{privacyBody ? privacyTitle : u.privacy}</h2><p>{privacyBody || privacyTitle}</p></div>
          <div className="privacy-points">
            <p><WifiOff size={25} aria-hidden="true" /><span>{u.noInternet}</span><Check size={22} aria-hidden="true" /></p>
            <p><ShieldCheck size={25} aria-hidden="true" /><span>{s.statistics_history_description}</span><Check size={22} aria-hidden="true" /></p>
          </div>
        </div>
      </section>

      <section className="setup-section section" id="setup" aria-labelledby="setup-title">
        <div><p className="eyebrow">{s.control_actions_title}</p><h2 id="setup-title">{s.daily_reset_title}</h2><p>{s.control_actions_description}</p></div>
        <ol className="setup-steps">
          <li><span>01</span><strong>{s.grant_overlay_permission}</strong></li>
          <li><span>02</span><strong>{s.grant_usage_access}</strong></li>
          <li><span>03</span><strong>{s.daily_reset_title}</strong><small>{s.daily_reset_description}</small></li>
        </ol>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
