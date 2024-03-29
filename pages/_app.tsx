import '../styles/globals.css'
import type { AppProps } from 'next/app'
import i18n from "i18next";
import HttpApi from 'i18next-http-backend'
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../public/lang/en.json';
import translationPT from '../public/lang/pt.json';

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources,
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
    supportedLngs: ['en', 'pt'],
    fallbackLng: "en",
    detection:{
      order: ['localStorage', 'cookie', 'path', 'subdomain', 'navigator', 'htmlTag'],
      caches:['cookie']
    },
    backend:{
      loadPath: '/lang/{{lng}}.json'
    },
    react: { useSuspense: false }
  });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
