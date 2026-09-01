"use client";
import Link from "next/link";
import { Search, Zap, Droplets, Snowflake, Smartphone, Laptop, Sparkles, Hammer, BookOpen, Camera, Car, ArrowRight } from "lucide-react";
import { useState } from "react";
import LanguageToggle, { type Language } from "../components/LanguageToggle";
import "../globals.css";

const services = [
  ["Electrician", "Electrical repair, wiring & installation", "ইলেকট্রিশিয়ান", "বৈদ্যুতিক মেরামত, ওয়্যারিং ও ইনস্টলেশন", Zap],
  ["Plumber", "Leaks, pipes, taps & bathroom work", "প্লাম্বার", "লিকেজ, পাইপ, ট্যাপ ও বাথরুমের কাজ", Droplets],
  ["AC Technician", "AC servicing, repair & installation", "এসি টেকনিশিয়ান", "এসি সার্ভিসিং, মেরামত ও ইনস্টলেশন", Snowflake],
  ["Mobile Repair", "Screen, battery & software repair", "মোবাইল রিপেয়ার", "স্ক্রিন, ব্যাটারি ও সফটওয়্যার মেরামত", Smartphone],
  ["Laptop Repair", "Laptop troubleshooting & upgrades", "ল্যাপটপ রিপেয়ার", "ল্যাপটপ সমস্যা সমাধান ও আপগ্রেড", Laptop],
  ["Cleaner", "Home, office & deep cleaning", "ক্লিনার", "বাসা, অফিস ও ডিপ ক্লিনিং", Sparkles],
  ["Carpenter", "Furniture, doors & woodwork", "কার্পেন্টার", "ফার্নিচার, দরজা ও কাঠের কাজ", Hammer],
  ["Tutor", "School, college & private tutoring", "গৃহশিক্ষক", "স্কুল, কলেজ ও প্রাইভেট টিউশন", BookOpen],
  ["Photographer", "Events, portraits & products", "ফটোগ্রাফার", "ইভেন্ট, পোর্ট্রেট ও প্রোডাক্ট ফটোগ্রাফি", Camera],
  ["Driver", "Personal & local driving service", "ড্রাইভার", "ব্যক্তিগত ও স্থানীয় ড্রাইভিং সার্ভিস", Car],
] as const;

const t={bn:{eyebrow:"লাকসামের সার্ভিস",title:"কী কাজে সাহায্য দরকার?",desc:"একটি সার্ভিস বেছে নিয়ে আপনার কাছের বিশ্বস্ত প্রফেশনাল খুঁজে নিন।",placeholder:"ইলেকট্রিশিয়ান, প্লাম্বার, টিউটর লিখে খুঁজুন...",search:"খুঁজুন",services:"সার্ভিসসমূহ",navS:"সার্ভিস",navP:"প্রোভাইডার",how:"যেভাবে কাজ করে",join:"প্রোভাইডার হন",footer:"প্রয়োজনের সময় বিশ্বস্ত লোকাল সার্ভিস খুঁজে নিন।"},en:{eyebrow:"SERVICES IN LAKSAM",title:"What do you need help with?",desc:"Choose a service and find trusted local professionals near you.",placeholder:"Search electrician, plumber, tutor...",search:"Search",services:"All services",navS:"Services",navP:"Providers",how:"How it works",join:"Become a Provider",footer:"Find trusted local help, when you need it."}};

export default function ServicesPage(){const [language,setLanguage]=useState<Language>("bn");const [query,setQuery]=useState("");const x=t[language];const filtered=services.filter(([en,desc,bn,bdesc])=>`${en} ${desc} ${bn} ${bdesc}`.toLowerCase().includes(query.toLowerCase()));return <main className="page-shell"><header className="site-header"><Link className="brand" href="/">Laksam <span>Local Service</span></Link><nav><Link href="/services">{x.navS}</Link><Link href="/providers">{x.navP}</Link><Link href="/#how">{x.how}</Link></nav><div style={{display:"flex",alignItems:"center",gap:16}}><LanguageToggle onChange={setLanguage}/><Link className="header-cta" href="/register">{x.join}</Link></div></header><section className="inner-hero"><p className="eyebrow">{x.eyebrow}</p><h1>{x.title}</h1><p>{x.desc}</p><div className="search-box"><Search size={19}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={x.placeholder}/><button onClick={()=>setQuery(query.trim())}>{x.search}</button></div></section><section className="service-grid">{filtered.map(([name,desc,bn,bdesc,Icon])=><Link className="service-card" href={`/providers?service=${encodeURIComponent(name)}`} key={name}><span className="service-icon"><Icon size={22}/></span><div><h3>{language==="bn"?bn:name}</h3><p>{language==="bn"?bdesc:desc}</p></div><ArrowRight size={17}/></Link>)}</section>{filtered.length===0&&<p style={{textAlign:"center",padding:40}}>No matching services found.</p>}<footer className="site-footer"><strong>Laksam Local Service</strong><span>{x.footer}</span></footer></main>}
