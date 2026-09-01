"use client";

import { useEffect, useState } from "react";

export type Language = "bn" | "en";

export default function LanguageToggle({ onChange }: { onChange: (language: Language) => void }) {
  const [language, setLanguage] = useState<Language>("bn");

  useEffect(() => {
    const saved = window.localStorage.getItem("laksam-language") as Language | null;
    if (saved === "bn" || saved === "en") {
      setLanguage(saved);
      onChange(saved);
    }
  }, [onChange]);

  const change = (next: Language) => {
    setLanguage(next);
    window.localStorage.setItem("laksam-language", next);
    onChange(next);
  };

  return (
    <div className="language-toggle" aria-label="Language selector">
      <button className={language === "bn" ? "selected" : ""} onClick={() => change("bn")}>বাংলা</button>
      <span>/</span>
      <button className={language === "en" ? "selected" : ""} onClick={() => change("en")}>EN</button>
    </div>
  );
}
