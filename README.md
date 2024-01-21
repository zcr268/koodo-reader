<div align="left">

[简体中文](https://github.com/koodo-reader/koodo-reader/blob/master/README_cn.md) | [Português](https://github.com/koodo-reader/koodo-reader/blob/master/README_pt.md) | English

</div>

<div align="center" >
  <img src="https://dl.960960.xyz/screenshots/logo.png" width="96px" height="96px"/>
</div>

<h1 align="center">
  Koodo Reader
</h1>

<h3 align="center">
  A cross-platform ebook reader
</h3>
<div align="center">

[Download](https://koodo.960960.xyz/en) | [Preview](https://reader.960960.xyz) | [Roadmap](https://koodo.960960.xyz/en/roadmap) | [Document](https://koodo.960960.xyz/en/document)

</div>

## Preview

<div align="center">
  <br/>
  <kbd><img src="https://dl.960960.xyz/screenshots/1.png" width="800px"></kbd>
  <br/>
  <br/>
  <kbd><img src="https://dl.960960.xyz/screenshots/5.png" width="800px"></kbd>
  <br/>
</div>

## Feature

- Format support:
  - EPUB (**.epub**)
  - PDF (**.pdf**)
  - DRM-free Mobipocket (**.mobi**) and Kindle (**.azw3**, **.azw**)
  - Plain text (**.txt**)
  - FictionBook (**.fb2**)
  - Comic book archive (**.cbr**, **.cbz**, **.cbt**, **.cb7**)
  - Rich text (**.md**, **.docx**)
  - Hyper Text (**.html**, **.xml**, **.xhtml**, **.mhtml**, **.htm**, **.htm**)
- Platform support: **Windows**, **macOS**, **Linux** and **Web**
- Save your data to **OneDrive**, **Google Drive**, **Dropbox**, **FTP**, **SFTP**, **WebDAV**, **S3**, **S3 compatible**
- Customize the source folder and synchronize among multiple devices using OneDrive, iCloud, Dropbox, etc.
- Single-column, two-column, or continuous scrolling layouts
- Text-to-speech, translation, dictionary, touch screen support, batch import
- Add bookmarks, notes, highlights to your books
- Adjust font size, font family, line-spacing, paragraph spacing, background color, text color, margins, and brightness
- Night mode and theme color
- Text highlight, underline, boldness, italics and shadow

## Installation

- Desktop Version:
  - Stable Version (Recommended): [Download](https://koodo.960960.xyz/en)
  - Developer version: [Download](https://github.com/koodo-reader/koodo-reader/releases/latest) ( With new feature and bug fix, but may induce some unknown bugs)
- Web Version：[Preview](https://reader.960960.xyz)
- Install with Scoop:

```shell
scoop bucket add extras
scoop install extras/koodo-reader
```

- Install with Winget:

```shell
winget install -e AppbyTroye.KoodoReader
```

- Install with Homebrew:

```shell
brew install --cask koodo-reader
```

- Install with Docker:

```bash
docker-compose up -d
```

- Install with Flathub:

```shell
flatpak install flathub io.github.troyeguo.koodo-reader
flatpak run io.github.troyeguo.koodo-reader
```

<a href="https://flathub.org/apps/details/io.github.troyeguo.koodo-reader"><img height="50" alt="Download on Flathub" src="https://flathub.org/assets/badges/flathub-badge-en.png"/></a>

## Screenshot

<div align="center">
  <br/>
  <b>List mode</b>
  <br/>
  <br/>
  <kbd><img src="https://dl.960960.xyz/screenshots/2.png" width="800px"></kbd>
  <br/>
  <br/>
  <b>Cover mode</b>
  <br/>
  <br/>
  <kbd><img src="https://dl.960960.xyz/screenshots/3.png" width="800px"></kbd>
  <br/>
  <br/>
  <b>Reader menu</b>
  <br/>
  <br/>
  <kbd><img src="https://dl.960960.xyz/screenshots/6.png" width="800px"></kbd>
  <br/>
  <br/>
  <b>Dark mode</b>
  <br/>
  <br/>
  <kbd><img src="https://dl.960960.xyz/screenshots/4.png" width="800px"></kbd>
  <br/>
</div>

</div>

## Develop

Make sure that you have installed yarn and git

1. Download the repo

   ```
   git clone https://github.com/koodo-reader/koodo-reader.git
   ```

2. Enter desktop mode

   ```
   yarn
   yarn dev
   ```

3. Enter web mode

   ```
   yarn
   yarn start
   ```

## Translation

### Edit current language

1. Select your target language from the following list.

2. Click the view button to examine the source file. The untranslated terms are listed at the bottom of each file.

3. Translate the terms to your target language based on the given English reference

4. Sumbit the translation file or just translation snippets based on the amount of your translation to [this link](https://github.com/koodo-reader/koodo-reader/issues/new?assignees=&labels=submit+translation&projects=&template=3_submit_translation.yml). Pull request is also welcomed.

| Language(A-Z)   | Code  | View                                                |
| --------------- | ----- | --------------------------------------------------- |
| Arabic          | ar    | [View](./src/assets/locales/ar/translation.json)    |
| Armenian        | hy    | [View](./src/assets/locales/hy/translation.json)    |
| Bengali         | bn    | [View](./src/assets/locales/bn/translation.json)    |
| Bulgarian       | bg    | [View](./src/assets/locales/bg/translation.json)    |
| Chinese (CN)    | zh-CN | [View](./src/assets/locales/zh-CN/translation.json) |
| Chinese (MO)    | zh-MO | [View](./src/assets/locales/zh-MO/translation.json) |
| Chinese (TW)    | zh-TW | [View](./src/assets/locales/zh-TW/translation.json) |
| Czech           | cs    | [View](./src/assets/locales/cs/translation.json)    |
| Danish          | da    | [View](./src/assets/locales/da/translation.json)    |
| Dutch           | nl    | [View](./src/assets/locales/nl/translation.json)    |
| English         | en    | [View](./src/assets/locales/en/translation.json)    |
| Esperanto       | eo    | [View](./src/assets/locales/eo/translation.json)    |
| Finnish         | fi    | [View](./src/assets/locales/fi/translation.json)    |
| French          | fr    | [View](./src/assets/locales/fr/translation.json)    |
| German          | de    | [View](./src/assets/locales/de/translation.json)    |
| Greek           | el    | [View](./src/assets/locales/el/translation.json)    |
| Indonesian      | id    | [View](./src/assets/locales/id/translation.json)    |
| Interlingue     | ie    | [View](./src/assets/locales/ie/translation.json)    |
| Italian         | it    | [View](./src/assets/locales/it/translation.json)    |
| Japanese        | ja    | [View](./src/assets/locales/ja/translation.json)    |
| Korean          | ko    | [View](./src/assets/locales/ko/translation.json)    |
| Persian         | fa    | [View](./src/assets/locales/fa/translation.json)    |
| Polish          | pl    | [View](./src/assets/locales/pl/translation.json)    |
| Portuguese      | pt    | [View](./src/assets/locales/pt/translation.json)    |
| Portuguese (BR) | pt-BR | [View](./src/assets/locales/pt-BR/translation.json) |
| Romanian        | ro    | [View](./src/assets/locales/ro/translation.json)    |
| Russian         | ru    | [View](./src/assets/locales/ru/translation.json)    |
| Slovenian       | sl    | [View](./src/assets/locales/sl/translation.json)    |
| Spanish         | es    | [View](./src/assets/locales/es/translation.json)    |
| Swedish         | sv    | [View](./src/assets/locales/sv/translation.json)    |
| Tamil           | ta    | [View](./src/assets/locales/ta/translation.json)    |
| Thai            | th    | [View](./src/assets/locales/th/translation.json)    |
| Tibetan         | bo    | [View](./src/assets/locales/bo/translation.json)    |
| Turkish         | tr    | [View](./src/assets/locales/tr/translation.json)    |
| Ukrainian       | uk    | [View](./src/assets/locales/uk/translation.json)    |
| Vietnamese      | vi    | [View](./src/assets/locales/vi/translation.json)    |

### Add new language

1. If you can't find your target language from the above list, Download the Engish source file from [this link](./src/assets/locales/en/translation.json)

2. When you finish translation, submit the source file to [this link](https://github.com/koodo-reader/koodo-reader/issues/new?assignees=&labels=submit+translation&projects=&template=3_submit_translation.yml). Pull request is also welcomed.
