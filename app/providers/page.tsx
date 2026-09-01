"use client";

import Link from "next/link";
import { Search, MapPin, Star, BadgeCheck, ArrowRight, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import LanguageToggle, { type Language } from "../components/LanguageToggle";
import "../globals.css";

const providers = [
  { name:"Rahim Electric Service", service:"Electrician", bn:"ইলেকট্রিশিয়ান", area:"Laksam Town", rating:"4.9", jobs:"120+ jobs", price:"৳500" },
  { name:"Kawsar AC Care", service:"AC Technician", bn:"এসি টেকনিশিয়ান", area:"Laksam", rating:"4.8", jobs:"86+ jobs", price:"৳700" },
  { name:"Mizan Mobile Point", service:"Mobile Repair", bn:"মোবাইল রিপেয়ার", area:"Bypass Road", rating:"4.7", jobs:"210+ jobs", price:"৳300" },
  { name:"Hasan Plumbing", service:"Plumber", bn:"প্লাম্বার", area:"Azgara", rating:"4.9", jobs:"74+ jobs", price:"৳400" },
  { name:"Nayeem Laptop Care", service:"Laptop Repair", bn:"ল্যাপটপ রিপেয়ার", area:"Laksam Bazar", rating:"4.8", jobs:"95+ jobs", price:"৳500" },
  { name:"Sabbir Home Care", service:"Cleaner", bn:"ক্লিনার", area:"Laksam", rating:"4.6", jobs:"60+ jobs", price:"৳600" },
];

const copy = {
  bn:{navServices:"সার্ভিস",navProviders:"প্রোভাইডার",navHow:"যেভাবে কাজ করে",join:"প্রোভাইডার হন",eyebrow:"লোকাল প্রফেশনাল",title:"বিশ্বস্ত সার্ভিস প্রোভাইডার খুঁজুন",desc:"লাকসাম ও আশেপাশের এলাকার ভেরিফায়েড প্রফেশনালদের খুঁজে নিন।",placeholder:"সার্ভিস বা প্রোভাইডারের নাম লিখুন",search:"খুঁজুন",all:"সব সার্ভিস",nearby:"কাছাকাছি",from:"শুরু",jobs:"টি কাজ",empty:"আপনার খোঁজার সাথে মিলছে এমন প্রোভাইডার পাওয়া যায়নি।",results:"জন প্রোভাইডার পাওয়া গেছে",sort:"রেটিং অনুযায়ী",verified:"ভেরিফায়েড",book:"বুক করুন"},
  en:{navServices:"Services",navProviders:"Providers",navHow:"How it works",join:"Become a Provider",eyebrow:"LOCAL PROFESSIONALS",title:"Find a trusted provider",desc:"Verified professionals serving Laksam and nearby areas.",placeholder:"Search service or provider",search:"Search",all:"All Services",nearby:"Nearby",from:"From",jobs:"jobs",empty:"No providers match your search.",results:"providers found",sort:"Top rated",verified:"Verified",book:"Book now"}
};

export default function ProvidersPage() {
  const [language,setLanguage]=useState<Language>("bn");
  const [query,setQuery]=useState("");
  const [filter,setFilter]=useState("All");
  const [nearby,setNearby]=useState(false);
  const x=copy[language];
  const filters=["All","Electrician","Plumber","AC Technician","Mobile Repair","Laptop Repair","Cleaner"];
  const filtered=useMemo(()=>providers.filter(p=>(filter==="All"||p.service===filter)&&(!nearby||p.area.toLowerCase().includes("laksam"))&&(`${p.name} ${p.service} ${p.bn} ${p.area}`).toLowerCase().includes(query.toLowerCase())),[query,filter,nearby]);
  return <main className="page-shell"><header className="site-header"><Link className="brand" href="/">Laksam <span>Local Service</span></Link><nav><Link href="/services">{x.navServices}</Link><Link href="/providers">{x.navProviders}</Link><Link href="/#how">{x.navHow}</Link></nav><div style={{display:"flex",alignItems:"center",gap:16}}><LanguageToggle onChange={setLanguage}/><Link className="header-cta" href="/register">{x.join}</Link></div></header><section className="listing-head"><div><p className="eyebrow">{x.eyebrow}</p><h1>{x.title}</h1><p>{x.desc}</p></div><div className="listing-search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>e.key==="Enter"&&setQuery(query.trim())} placeholder={x.placeholder}/><button onClick={()=>setQuery(query.trim())}>{x.search}</button></div></section><div className="filter-toolbar"><div className="filter-label"><SlidersHorizontal size={15}/>{language==="bn"?"ফিল্টার":"Filters"}</div><div className="filter-row">{filters.map(f=><button key={f} className={filter===f?"filter-active":""} onClick={()=>setFilter(f)}>{f==="All"?x.all:(language==="bn"?providers.find(p=>p.service===f)?.bn:f)}</button>)}<button className={nearby?"filter-active":""} onClick={()=>setNearby(!nearby)}><MapPin size={13}/>{x.nearby}</button></div></div><div className="listing-meta"><span><strong>{filtered.length}</strong> {x.results}</span><span>{x.sort}</span></div><section className="provider-grid">{filtered.map(p=><article className="provider-card provider-card-modern" key={p.name}><div className="provider-avatar">{p.name.slice(0,1)}</div><div className="provider-main"><div className="provider-title"><h3>{p.name}</h3><BadgeCheck size={17}/></div><span className="provider-service">{language==="bn"?p.bn:p.service}</span><p><MapPin size={14}/> {p.area}</p><div className="provider-meta"><span><Star size={14} fill="currentColor"/> {p.rating}</span><span>{p.jobs}</span><b>{x.from} {p.price}</b></div></div><div className="provider-card-action"><small><BadgeCheck size={12}/> {x.verified}</small><Link className="card-arrow" href="/providers/rahim-electric-service">{x.book}<ArrowRight size={15}/></Link></div></article>)}{filtered.length===0&&<div style={{gridColumn:"1/-1",padding:"48px 20px",textAlign:"center",color:"#64748b"}}>{x.empty}</div>}</section></main>;
}
