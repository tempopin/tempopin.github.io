import appCopy from './app-copy.json';

export const locales = [
  ['en', 'English'], ['ar', 'العربية'], ['bg', 'Български'], ['bn', 'বাংলা'],
  ['cs', 'Čeština'], ['da', 'Dansk'], ['de', 'Deutsch'], ['el', 'Ελληνικά'],
  ['es', 'Español'], ['fa', 'فارسی'], ['fi', 'Suomi'], ['fr', 'Français'],
  ['he', 'עברית'], ['hi', 'हिन्दी'], ['hu', 'Magyar'], ['id', 'Bahasa Indonesia'],
  ['it', 'Italiano'], ['ja', '日本語'], ['ko', '한국어'], ['ms', 'Bahasa Melayu'],
  ['nb', 'Norsk bokmål'], ['nl', 'Nederlands'], ['pl', 'Polski'],
  ['pt-BR', 'Português (Brasil)'], ['ro', 'Română'], ['ru', 'Русский'],
  ['sv', 'Svenska'], ['th', 'ไทย'], ['tr', 'Türkçe'], ['uk', 'Українська'],
  ['ur', 'اردو'], ['vi', 'Tiếng Việt'], ['zh-CN', '简体中文'], ['zh-TW', '繁體中文'],
] as const;

export type Locale = (typeof locales)[number][0];
type UiTuple = [string, string, string, string, string, string, string, string, string];

// Site-only labels. Product terminology and feature copy below come from Android resources.
const rows: Record<Locale, UiTuple> = {
  en: ['Downloads', 'Privacy', 'Language', 'Apply', 'Coming soon', 'Choose a source.', 'These are placeholders. No download links are active yet.', 'Back to home', 'No internet permission.'],
  ar: ['التنزيلات', 'الخصوصية', 'اللغة', 'تطبيق', 'قريبًا', 'اختر مصدرًا.', 'هذه خيارات مؤقتة. لا توجد روابط تنزيل نشطة بعد.', 'العودة إلى الرئيسية', 'لا يحتاج إلى إذن الإنترنت.'],
  bg: ['Изтегляния', 'Поверителност', 'Език', 'Приложи', 'Очаквайте скоро', 'Изберете източник.', 'Това са временни варианти. Все още няма активни връзки за изтегляне.', 'Към началото', 'Без разрешение за интернет.'],
  bn: ['ডাউনলোড', 'গোপনীয়তা', 'ভাষা', 'প্রয়োগ করুন', 'শীঘ্রই আসছে', 'একটি উৎস বেছে নিন।', 'এগুলো আপাতত নমুনা। কোনো ডাউনলোড লিংক এখনো সক্রিয় নয়।', 'হোমে ফিরুন', 'ইন্টারনেটের অনুমতি লাগে না।'],
  cs: ['Stažení', 'Soukromí', 'Jazyk', 'Použít', 'Již brzy', 'Vyberte zdroj.', 'Toto jsou zástupné možnosti. Odkazy ke stažení zatím nejsou aktivní.', 'Zpět na úvod', 'Bez oprávnění k internetu.'],
  da: ['Downloads', 'Privatliv', 'Sprog', 'Anvend', 'Kommer snart', 'Vælg en kilde.', 'Disse muligheder er foreløbige. Ingen downloadlinks er aktive endnu.', 'Tilbage til forsiden', 'Ingen internettilladelse.'],
  de: ['Downloads', 'Datenschutz', 'Sprache', 'Anwenden', 'Demnächst', 'Wähle eine Quelle.', 'Dies sind Platzhalter. Es sind noch keine Downloadlinks aktiv.', 'Zur Startseite', 'Keine Internetberechtigung.'],
  el: ['Λήψεις', 'Απόρρητο', 'Γλώσσα', 'Εφαρμογή', 'Σύντομα', 'Επιλέξτε πηγή.', 'Αυτές είναι προσωρινές επιλογές. Δεν υπάρχουν ακόμη ενεργοί σύνδεσμοι λήψης.', 'Πίσω στην αρχική', 'Χωρίς άδεια πρόσβασης στο διαδίκτυο.'],
  es: ['Descargas', 'Privacidad', 'Idioma', 'Aplicar', 'Próximamente', 'Elige una fuente.', 'Estas opciones son provisionales. Aún no hay enlaces de descarga activos.', 'Volver al inicio', 'Sin permiso de Internet.'],
  fa: ['دریافت‌ها', 'حریم خصوصی', 'زبان', 'اعمال', 'به‌زودی', 'یک منبع انتخاب کنید.', 'این گزینه‌ها موقت هستند. هنوز هیچ پیوند دریافتی فعال نیست.', 'بازگشت به خانه', 'بدون مجوز اینترنت.'],
  fi: ['Lataukset', 'Tietosuoja', 'Kieli', 'Käytä', 'Tulossa pian', 'Valitse lähde.', 'Nämä ovat paikkamerkkejä. Latauslinkit eivät ole vielä käytössä.', 'Takaisin etusivulle', 'Ei internet-oikeutta.'],
  fr: ['Téléchargements', 'Confidentialité', 'Langue', 'Appliquer', 'Bientôt disponible', 'Choisissez une source.', 'Ces options sont provisoires. Aucun lien de téléchargement n’est encore actif.', 'Retour à l’accueil', 'Aucune autorisation Internet.'],
  he: ['הורדות', 'פרטיות', 'שפה', 'החל', 'בקרוב', 'בחרו מקור.', 'אלו אפשרויות זמניות. קישורי ההורדה עדיין אינם פעילים.', 'חזרה לדף הבית', 'ללא הרשאת אינטרנט.'],
  hi: ['डाउनलोड', 'गोपनीयता', 'भाषा', 'लागू करें', 'जल्द आ रहा है', 'एक स्रोत चुनें।', 'ये अभी प्लेसहोल्डर हैं। कोई डाउनलोड लिंक अभी सक्रिय नहीं है।', 'होम पर वापस जाएँ', 'इंटरनेट अनुमति की आवश्यकता नहीं।'],
  hu: ['Letöltések', 'Adatvédelem', 'Nyelv', 'Alkalmaz', 'Hamarosan', 'Válassz forrást.', 'Ezek helyőrzők. A letöltési hivatkozások még nem aktívak.', 'Vissza a kezdőlapra', 'Nincs internetengedély.'],
  id: ['Unduhan', 'Privasi', 'Bahasa', 'Terapkan', 'Segera hadir', 'Pilih sumber.', 'Ini masih berupa placeholder. Tautan unduhan belum aktif.', 'Kembali ke beranda', 'Tanpa izin internet.'],
  it: ['Download', 'Privacy', 'Lingua', 'Applica', 'In arrivo', 'Scegli una fonte.', 'Queste opzioni sono provvisorie. I link per il download non sono ancora attivi.', 'Torna alla home', 'Nessuna autorizzazione Internet.'],
  ja: ['ダウンロード', 'プライバシー', '言語', '適用', '近日公開', '入手先を選んでください。', 'これらは仮の選択肢です。ダウンロードリンクはまだ有効ではありません。', 'ホームに戻る', 'インターネット権限は不要です。'],
  ko: ['다운로드', '개인정보 보호', '언어', '적용', '곧 제공 예정', '다운로드 경로를 선택하세요.', '현재는 임시 항목입니다. 다운로드 링크는 아직 활성화되지 않았습니다.', '홈으로 돌아가기', '인터넷 권한이 필요하지 않습니다.'],
  ms: ['Muat turun', 'Privasi', 'Bahasa', 'Gunakan', 'Akan datang', 'Pilih sumber.', 'Pilihan ini hanyalah pemegang tempat. Pautan muat turun belum aktif.', 'Kembali ke utama', 'Tiada kebenaran internet.'],
  nb: ['Nedlastinger', 'Personvern', 'Språk', 'Bruk', 'Kommer snart', 'Velg en kilde.', 'Dette er plassholdere. Ingen nedlastingslenker er aktive ennå.', 'Tilbake til forsiden', 'Ingen internettillatelse.'],
  nl: ['Downloads', 'Privacy', 'Taal', 'Toepassen', 'Binnenkort', 'Kies een bron.', 'Dit zijn tijdelijke opties. Er zijn nog geen actieve downloadlinks.', 'Terug naar home', 'Geen internettoestemming.'],
  pl: ['Pobieranie', 'Prywatność', 'Język', 'Zastosuj', 'Wkrótce', 'Wybierz źródło.', 'To są opcje tymczasowe. Linki do pobrania nie są jeszcze aktywne.', 'Wróć na stronę główną', 'Bez uprawnienia do internetu.'],
  'pt-BR': ['Downloads', 'Privacidade', 'Idioma', 'Aplicar', 'Em breve', 'Escolha uma fonte.', 'Estas opções são provisórias. Ainda não há links de download ativos.', 'Voltar ao início', 'Sem permissão de internet.'],
  ro: ['Descărcări', 'Confidențialitate', 'Limbă', 'Aplică', 'În curând', 'Alege o sursă.', 'Aceste opțiuni sunt provizorii. Linkurile de descărcare nu sunt încă active.', 'Înapoi la pagina principală', 'Fără permisiune de internet.'],
  ru: ['Загрузки', 'Конфиденциальность', 'Язык', 'Применить', 'Скоро', 'Выберите источник.', 'Это временные варианты. Ссылки для скачивания пока не активны.', 'На главную', 'Без разрешения на доступ в интернет.'],
  sv: ['Nedladdningar', 'Integritet', 'Språk', 'Använd', 'Kommer snart', 'Välj en källa.', 'Det här är platshållare. Inga nedladdningslänkar är aktiva ännu.', 'Tillbaka till startsidan', 'Ingen internetbehörighet.'],
  th: ['ดาวน์โหลด', 'ความเป็นส่วนตัว', 'ภาษา', 'ใช้', 'เร็ว ๆ นี้', 'เลือกแหล่งดาวน์โหลด', 'ตัวเลือกเหล่านี้ยังเป็นเพียงตัวอย่าง ลิงก์ดาวน์โหลดยังไม่เปิดใช้งาน', 'กลับหน้าหลัก', 'ไม่ต้องขอสิทธิ์อินเทอร์เน็ต'],
  tr: ['İndirmeler', 'Gizlilik', 'Dil', 'Uygula', 'Yakında', 'Bir kaynak seçin.', 'Bunlar geçici seçeneklerdir. İndirme bağlantıları henüz etkin değil.', 'Ana sayfaya dön', 'İnternet izni yok.'],
  uk: ['Завантаження', 'Приватність', 'Мова', 'Застосувати', 'Незабаром', 'Виберіть джерело.', 'Це тимчасові варіанти. Посилання для завантаження ще не активні.', 'На головну', 'Без дозволу на інтернет.'],
  ur: ['ڈاؤن لوڈ', 'رازداری', 'زبان', 'لاگو کریں', 'جلد دستیاب', 'ایک ذریعہ منتخب کریں۔', 'یہ فی الحال عارضی اختیارات ہیں۔ ڈاؤن لوڈ لنکس ابھی فعال نہیں ہیں۔', 'مرکزی صفحے پر واپس', 'انٹرنیٹ کی اجازت درکار نہیں۔'],
  vi: ['Tải xuống', 'Quyền riêng tư', 'Ngôn ngữ', 'Áp dụng', 'Sắp ra mắt', 'Chọn một nguồn.', 'Đây là các lựa chọn tạm thời. Chưa có liên kết tải xuống nào hoạt động.', 'Về trang chủ', 'Không cần quyền truy cập Internet.'],
  'zh-CN': ['下载', '隐私', '语言', '应用', '即将推出', '选择下载来源。', '这些只是占位选项，下载链接尚未启用。', '返回首页', '无需互联网权限。'],
  'zh-TW': ['下載', '隱私', '語言', '套用', '即將推出', '選擇下載來源。', '這些只是佔位選項，下載連結尚未啟用。', '返回首頁', '不需網際網路權限。'],
};

export function resolveLocale(value: string | string[] | undefined): Locale {
  const candidate = Array.isArray(value) ? value[0] : value;
  return locales.find(([code]) => code === candidate)?.[0] ?? 'en';
}

export function preferredLocale(acceptLanguage: string | null): Locale {
  const requested = (acceptLanguage ?? '')
    .split(',')
    .map((entry, order) => {
      const [tag, ...parameters] = entry.trim().split(';');
      const quality = parameters.find((parameter) => parameter.trim().startsWith('q='));
      return { tag: tag.toLowerCase(), quality: quality ? Number(quality.trim().slice(2)) : 1, order };
    })
    .filter(({ tag, quality }) => tag && tag !== '*' && Number.isFinite(quality) && quality > 0 && quality <= 1)
    .sort((a, b) => b.quality - a.quality || a.order - b.order);

  for (const { tag } of requested) {
    const exact = locales.find(([code]) => code.toLowerCase() === tag);
    if (exact) return exact[0];
    if (tag.startsWith('zh-')) return /(?:hant|tw|hk|mo)(?:-|$)/.test(tag) ? 'zh-TW' : 'zh-CN';
    if (tag === 'zh') return 'zh-CN';
    if (tag === 'pt' || tag.startsWith('pt-')) return 'pt-BR';
    if (tag === 'no' || tag.startsWith('no-')) return 'nb';
    if (tag === 'iw' || tag.startsWith('iw-')) return 'he';
    if (tag === 'in' || tag.startsWith('in-')) return 'id';
    const primary = tag.split('-')[0];
    const match = locales.find(([code]) => code === primary);
    if (match) return match[0];
  }
  return 'en';
}

export function getUi(locale: Locale) {
  const [downloads, privacy, language, apply, comingSoon, downloadIntro, notLive, backHome, noInternet] = rows[locale];
  return { downloads, privacy, language, apply, comingSoon, downloadIntro, notLive, backHome, noInternet };
}

export function getAppCopy(locale: Locale) {
  return (appCopy as Record<Locale, { strings: Record<string, string>; arrays: Record<string, string[]> }>)[locale];
}

export function isRtl(locale: Locale) {
  return ['ar', 'fa', 'he', 'ur'].includes(locale);
}

export function pathWithLocale(path: string, locale: Locale) {
  return `${path}?lang=${encodeURIComponent(locale)}`;
}
