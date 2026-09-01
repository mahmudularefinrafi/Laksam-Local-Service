"use client";

import Link from "next/link";
import { CalendarDays, CheckCircle2, Clock3, Search, Star, UserRound } from "lucide-react";
import LanguageToggle, { Language } from "../components/LanguageToggle";
import "../globals.css";

const stats = [
  ["3", "Total bookings", "মোট বুকিং", CalendarDays],
  ["1", "Active booking", "চলমান বুকিং", Clock3],
  ["1", "Completed", "সম্পন্ন", CheckCircle2],
  ["2", "Reviews", "রিভিউ", Star],
] as const;

export default function DashboardPage() {
  const [language, setLanguage] = React.useState<Language>("bn");
  const bn = language === "bn";
  return <main className="page-shell">
    <header className="site-header"><Link className="brand" href="/">Laksam <span>Local Service</span></Link><nav><Link href="/services">{bn ? "সার্ভিস" : "Services"}</Link><Link href="/providers">{bn ? "প্রোভাইডার" : "Providers"}</Link><Link href="/bookings">{bn ? "আমার বুকিং" : "My Bookings"}</Link></nav><div className="header-actions"><LanguageToggle onChange={setLanguage}/><Link className="header-cta" href="/">{bn ? "হোম" : "Home"}</Link></div></header>
    <section className="dashboard-page"><div className="dashboard-welcome"><div><p className="eyebrow">{bn ? "আমার অ্যাকাউন্ট" : "MY ACCOUNT"}</p><h1>{bn ? "স্বাগতম, Rafi" : "Welcome, Rafi"}</h1><p className="page-subtitle">{bn ? "আপনার সার্ভিস বুকিং এক জায়গা থেকে পরিচালনা করুন।" : "Manage your service bookings from one place."}</p></div><Link className="primary-btn dashboard-find" href="/services"><Search size={17}/> {bn ? "সার্ভিস খুঁজুন" : "Find a service"}</Link></div>
      <div className="dashboard-stats">{stats.map(([number,en,bangla,Icon])=><article className="dashboard-stat" key={en}><Icon size={19}/><strong>{number}</strong><span>{bn ? bangla : en}</span></article>)}</div>
      <div className="dashboard-grid"><section className="dashboard-card"><div className="card-heading"><div><p className="eyebrow">{bn ? "সাম্প্রতিক" : "RECENT"}</p><h2>{bn ? "সাম্প্রতিক বুকিং" : "Recent bookings"}</h2></div><Link href="/bookings">{bn ? "সব দেখুন" : "View all"} →</Link></div><div className="dashboard-booking"><div className="booking-mini-avatar">R</div><div><strong>Rahim Electric Service</strong><p>{bn ? "ইলেকট্রিক মেরামত · আজ, বিকেল ৫টা" : "Electrical repair · Today, 5:00 PM"}</p></div><span className="status pending">{bn ? "অপেক্ষমাণ" : "Pending"}</span></div><div className="dashboard-booking"><div className="booking-mini-avatar">K</div><div><strong>Kawsar AC Care</strong><p>{bn ? "AC সার্ভিসিং · ৫ সেপ্টেম্বর" : "AC servicing · Sep 5"}</p></div><span className="status accepted">{bn ? "গৃহীত" : "Accepted"}</span></div></section>
      <aside className="dashboard-card profile-card"><UserRound size={26}/><h2>{bn ? "আপনার প্রোফাইল" : "Your profile"}</h2><p>{bn ? "নাম, ফোন ও ঠিকানা আপডেট রাখুন যাতে বুকিং সহজ হয়।" : "Keep your name, phone and address updated for easier bookings."}</p><button className="secondary-btn" type="button">{bn ? "প্রোফাইল এডিট" : "Edit profile"}</button></aside></div>
    </section>
  </main>;
}

import React from "react";
