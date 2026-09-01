"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import LanguageToggle, { type Language } from "./components/LanguageToggle";

const categories = [
  ["⚡", "Electrician", "ইলেকট্রিশিয়ান", "12 providers"], ["🔧", "Plumber", "প্লাম্বার", "9 providers"], ["❄️", "AC Technician", "এসি টেকনিশিয়ান", "8 providers"],
  ["📱", "Mobile Repair", "মোবাইল রিপেয়ার", "15 providers"], ["💻", "Laptop Repair", "ল্যাপটপ রিপেয়ার", "6 providers"], ["🧹", "Cleaner", "ক্লিনার", "11 providers"],
  ["🪚", "Carpenter", "কার্পেন্টার", "7 providers"], ["🎓", "Tutor", "গৃহশিক্ষক", "18 providers"], ["📷", "Photographer", "ফটোগ্রাফার", "5 providers"], ["🚗", "Driver", "ড্রাইভার", "10 providers"],
];
const providers = [
  { initials: "RA", name: "Rahim Electric Service", service: "Electrician", bn: "ইলেকট্রিশিয়ান", area: "Laksam Town", rating: "4.9" },
  { initials: "KS", name: "Kawsar AC Care", service: "AC Technician", bn: "এসি টেকনিশিয়ান", area: "Laksam", rating: "4.8" },
  { initials: "MH", name: "Mizan Mobile Point", service: "Mobile Repair", bn: "মোবাইল রিপেয়ার", area: "Bypass Road", rating: "4.7" },
];

const t = {
  bn: { navServices: "সার্ভিস", navProviders: "সার্ভিস প্রোভাইডার", navHow: "যেভাবে কাজ করে", signIn: "লগইন", join: "প্রোভাইডার হন", badge: "লাকসামের বিশ্বস্ত লোকাল সার্ভিস", title1: "সঠিক সার্ভিস।", title2: "আপনার কাছেই।", copy: "দৈনন্দিন প্রয়োজনের জন্য লাকসামের বিশ্বস্ত প্রফেশনাল খুঁজে নিন—রেটিং, শুরু মূল্য ও সহজ বুকিংসহ।", placeholder: "কী সার্ভিস প্রয়োজন? যেমন: এসি রিপেয়ার", search: "খুঁজুন", trusted: "লাকসামের মানুষের আস্থায়", popular: "আপনার আশেপাশে জনপ্রিয়", location: "লাকসাম", need: "আপনার কী প্রয়োজন?", needCopy: "বাসার কাজ থেকে ব্যক্তিগত সার্ভিস—কাছের নির্ভরযোগ্য মানুষ খুঁজে নিন।", all: "সব সার্ভিস দেখুন →", simple: "শুরু থেকে শেষ পর্যন্ত সহজ।", simpleCopy: "খুঁজুন, তুলনা করুন এবং বুক করুন—ঝামেলাহীনভাবে।", step1: "আপনার প্রয়োজন বলুন", step1c: "লাকসামের এলাকা ও প্রয়োজনীয় সার্ভিস নির্বাচন করুন।", step2: "আস্থা নিয়ে বেছে নিন", step2c: "ভেরিফিকেশন, অভিজ্ঞতা, রেটিং ও শুরু মূল্য দেখে সিদ্ধান্ত নিন।", step3: "কাজটি সম্পন্ন করুন", step3c: "বুকিং রিকোয়েস্ট পাঠান অথবা সরাসরি প্রোভাইডারের সাথে যোগাযোগ করুন।", banner: "আপনি কি লোকাল সার্ভিস প্রফেশনাল?", bannerCopy: "Laksam Local Service-এ প্রোফাইল তৈরি করুন এবং আপনার সার্ভিসের জন্য নতুন কাস্টমার পান।", bannerBtn: "প্রোভাইডার হিসেবে যোগ দিন →", footer: "লাকসামের জন্য তৈরি · স্থানীয়ভাবে বিশ্বস্ত" },
  en: { navServices: "Services", navProviders: "Providers", navHow: "How it works", signIn: "Sign in", join: "Become a Provider", badge: "Trusted local services in Laksam", title1: "The right service.", title2: "Right around you.", copy: "Find trusted professionals for your everyday needs — with ratings, starting prices and easy booking.", placeholder: "What service do you need? e.g. AC repair", search: "Search", trusted: "Trusted by people around Laksam", popular: "Popular near you", location: "Laksam", need: "What do you need?", needCopy: "From home repairs to personal services, find someone reliable nearby.", all: "View all services →", simple: "Simple from start to finish.", simpleCopy: "Search, compare and book — without the usual hassle.", step1: "Tell us what you need", step1c: "Choose a service and your area in Laksam to see relevant professionals.", step2: "Compare with confidence", step2c: "See verification, experience, ratings and starting prices before you decide.", step3: "Get the job done", step3c: "Send a booking request or contact the provider directly at your convenience.", banner: "Are you a local service professional?", bannerCopy: "Join Laksam Local Service, build your profile and reach customers looking for your skills.", bannerBtn: "Join as a Provider →", footer: "Built for Laksam · Trusted locally" }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("bn");
  const handleLanguage = useCallback((next: Language) => setLanguage(next), []);
  const x = t[language];
  return <main className="premium-home">
    <header className="premium-nav">
      <Link href="/" className="premium-brand"><span className="premium-brand-mark">L</span> Laksam Local Service</Link>
      <nav className="premium-navlinks"><Link href="/services">{x.navServices}</Link><Link href="/providers">{x.navProviders}</Link><a href="#how">{x.navHow}</a></nav>
      <div className="premium-actions"><LanguageToggle onChange={handleLanguage}/><Link href="/login" className="premium-login">{x.signIn}</Link><Link href="/register" className="premium-cta">{x.join}</Link></div>
    </header>
    <section className="premium-hero"><div className="premium-container premium-hero-grid"><div>
      <div className="premium-badge"><span className="premium-dot"/> {x.badge}</div><h1 className="premium-title">{x.title1}<br/><span>{x.title2}</span></h1><p className="premium-copy">{x.copy}</p>
      <div className="premium-search"><input placeholder={x.placeholder} aria-label={x.placeholder}/><Link href="/providers" className="premium-search-btn"><button>{x.search}</button></Link></div>
      <div className="premium-trust"><div className="trust-avatars"><span>RA</span><span>KS</span><span>MH</span></div><span>{x.trusted}</span></div>
    </div><div className="premium-hero-card"><div className="premium-card-top"><strong>{x.popular}</strong><span className="premium-location">● {x.location}</span></div>
      {providers.map(p=><Link href="/providers/rahim-electric-service" className="premium-provider" key={p.name}><div className="premium-avatar">{p.initials}</div><div className="premium-provider-info"><strong>{p.name}</strong><small>{language === "bn" ? p.bn : p.service} · {p.area}</small><span className="premium-verified">✓ {language === "bn" ? "ভেরিফায়েড প্রোভাইডার" : "Verified provider"}</span></div><span className="premium-rating">★ {p.rating}</span></Link>)}
    </div></div></section>
    <section className="premium-section"><div className="premium-container"><div className="premium-section-head"><div><h2>{x.need}</h2><p>{x.needCopy}</p></div><Link href="/services" className="premium-link">{x.all}</Link></div><div className="premium-category-grid">{categories.map(([icon,en,bn,count])=><Link href="/providers" className="premium-category" key={en}><div className="premium-category-icon">{icon}</div><strong>{language === "bn" ? bn : en}</strong><small>{count}</small></Link>)}</div></div></section>
    <section className="premium-section premium-dark" id="how"><div className="premium-container"><div className="premium-section-head"><div><h2>{x.simple}</h2><p>{x.simpleCopy}</p></div></div><div className="premium-steps"><div className="premium-step"><span className="premium-step-number">01 / SEARCH</span><h3>{x.step1}</h3><p>{x.step1c}</p></div><div className="premium-step"><span className="premium-step-number">02 / CHOOSE</span><h3>{x.step2}</h3><p>{x.step2c}</p></div><div className="premium-step"><span className="premium-step-number">03 / BOOK</span><h3>{x.step3}</h3><p>{x.step3c}</p></div></div></div></section>
    <section className="premium-section premium-provider-section"><div className="premium-container"><div className="premium-provider-banner"><div><h2>{x.banner}</h2><p>{x.bannerCopy}</p></div><Link href="/register" className="premium-white-btn">{x.bannerBtn}</Link></div></div></section>
    <footer className="premium-footer"><div className="premium-container premium-footer-inner"><strong>© 2026 Laksam Local Service</strong><span>{x.footer}</span></div></footer>
  </main>;
}
