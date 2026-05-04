"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: new (
          options: Record<string, unknown>,
          elementId: string
        ) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const languages = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "zh-CN", label: "中国简体" },
  { code: "zh-TW", label: "簡體字" },
  { code: "cs", label: "Čeština" },
  { code: "el", label: "Ελληνικά" },
  { code: "iw", label: "עִבְרִית" },
  { code: "hi", label: "हिन्दी" },
  { code: "hu", label: "Magyar" },
  { code: "is", label: "Íslenska" },
  { code: "id", label: "Indonesia" },
  { code: "it", label: "Italiano" },
  { code: "ko", label: "한국말" },
  { code: "ja", label: "日本語" },
  { code: "no", label: "Norsk" },
  { code: "pl", label: "Język Polski" },
  { code: "pt", label: "Português" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "ro", label: "Română" },
  { code: "ru", label: "Русский" },
  { code: "sv", label: "Svenska" },
  { code: "ta", label: "தமிழ்" },
  { code: "th", label: "ภาษาไทย" },
  { code: "tr", label: "Türkçe" },
  { code: "uk", label: "Українська мова" },
  { code: "vi", label: "Tiếng Việt" }
] as const;

function setGoogTransCookie(language: string) {
  document.cookie = `googtrans=/en/${language};path=/`;
  document.cookie = `googtrans=/en/${language};domain=${window.location.hostname};path=/`;
}

function clearGoogTransCookie() {
  document.cookie = "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = `googtrans=;domain=${window.location.hostname};path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export function LanguageSelector() {
  const [selected, setSelected] = useState("en");
  const includedLanguages = useMemo(
    () =>
      languages
        .filter((language) => language.code !== "en")
        .map((language) => language.code)
        .join(","),
    []
  );

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        return;
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          includedLanguages,
          layout: 0
        },
        "google_translate_element"
      );
    };

    const savedLanguage = window.localStorage.getItem("site-language") ?? "en";
    setSelected(savedLanguage);

    const applySavedLanguage = window.setInterval(() => {
      const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (!combo) {
        return;
      }

      window.clearInterval(applySavedLanguage);
      if (savedLanguage !== "en") {
        setGoogTransCookie(savedLanguage);
        combo.value = savedLanguage;
        combo.dispatchEvent(new Event("change"));
      }
    }, 250);

    return () => {
      window.clearInterval(applySavedLanguage);
    };
  }, [includedLanguages]);

  const onChange = (language: string) => {
    setSelected(language);
    window.localStorage.setItem("site-language", language);

    if (language === "en") {
      clearGoogTransCookie();
      window.location.reload();
      return;
    }

    setGoogTransCookie(language);
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (combo) {
      combo.value = language;
      combo.dispatchEvent(new Event("change"));
      return;
    }

    window.location.reload();
  };

  return (
    <div className="language-switcher">
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <div id="google_translate_element" className="translation-anchor" />
      <label className="language-switcher__label" htmlFor="site-language">
        Language
      </label>
      <select
        id="site-language"
        className="language-switcher__select"
        value={selected}
        onChange={(event) => onChange(event.target.value)}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
}
