# TempoPin website

Source for the TempoPin website. This repository is separate from the Android app; it includes the site code and its current screenshots and translations, but no app source code.

## Local development

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The download choices are visual placeholders; they do not link to live releases.

The checked-in `app/i18n/app-copy.json` contains the website's app-derived copy for all supported locales. To refresh it from a local Android checkout:

```sh
node scripts/generate-app-copy.mjs /path/to/android/app/src/main/res
```

Store icons are included locally: the [Google Play icon](https://commons.wikimedia.org/wiki/File:Google_Play_2022_icon.svg), the [F-Droid logo](https://f-droid.org/assets/fdroid-logo.svg), and the [Obtainium icon](https://github.com/ImranR98/Obtainium/blob/main/assets/graphics/icon_small.png). Their respective owners retain their trademarks and artwork rights.
