"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, CheckCircle2, Clock3, DollarSign, MapPin, Settings, Star, UserRound, XCircle } from "lucide-react";
import LanguageToggle, { Language } from "../components/LanguageToggle";
import "../globals.css";

const requests = [
  {customer:"Sabbir Hossain", service:"Electrical repair", time:"Today · 5:00 PM", area:"Laksam Town", status:"Pending"},
  {customer:"Nusrat Jahan", service:"Fan installation", time:"Sep 4 · 3:00 PM", area:"Bypass Road", status:"Accepted"},
  {customer:"Imran Ahmed", service:"Wiring check", time:"Aug 30 · 11:00 AM", area:"Laksam", status:"Completed"},
];

export default function ProviderDashboard(){
  const [language,setLanguage]=useState<Language>("bn");
  const [filter,setFilter]=useState("All");
  const [items,setItems]=useState(requests);
  const bn=language==="bn";
  const filters=["All","Pending","Accepted","Completed"];
  const visible=filter==="All"?items:items.filter(x=>x.status===filter);
  const updateStatus=(customer:string,status:string)=>setItems(items.map(x=>x.customer===customer?{...x,status}:x));
  const label=(status:string)=>bn?({Pending:"অপেক্ষমাণ",Accepted:"গৃহীত",Completed:"সম্পন্ন",All:"সব"}[status]||status):status;
  return <main className="page-shell">
    <header className="site-header"><Link className="brand" href="/">Laksam <span>Local Service</span></Link><nav><Link href="/provider-dashboard">{bn?"ড্যাশবোর্ড":"Dashboard"}</Link><Link href="/services">{bn?"সার্ভিস":"Services"}</Link><Link href="/providers">{bn?"প্রোভাইডার":"Providers"}</Link></nav><div className="header-actions"><LanguageToggle onChange={setLanguage}/><Link className="header-cta" href="/">{bn?"হোম":"Home"}</Link></div></header>
    <section className="provider-dashboard"><div className="provider-welcome"><div><p className="eyebrow">{bn?"প্রোভাইডার প্যানেল":"PROVIDER PANEL"}</p><h1>{bn?"স্বাগতম, Rahim ভাই":"Welcome, Rahim"}</h1><p className="page-subtitle">{bn?"আপনার সার্ভিস, বুকিং ও কাস্টমার রিকোয়েস্ট পরিচালনা করুন।":"Manage your services, bookings and customer requests."}</p></div><div className="provider-profile-chip"><div className="booking-mini-avatar">R</div><div><strong>Rahim Electric Service</strong><span><CheckCircle2 size={14}/> {bn?"ভেরিফায়েড":"Verified"}</span></div></div></div>
      <div className="dashboard-stats"><article className="dashboard-stat"><CalendarDays size={19}/><strong>12</strong><span>{bn?"মোট বুকিং":"Total bookings"}</span></article><article className="dashboard-stat"><Clock3 size={19}/><strong>2</strong><span>{bn?"অপেক্ষমাণ রিকোয়েস্ট":"Pending requests"}</span></article><article className="dashboard-stat"><DollarSign size={19}/><strong>৳18.5k</strong><span>{bn?"এই মাসের আয়":"This month"}</span></article><article className="dashboard-stat"><Star size={19}/><strong>4.9</strong><span>{bn?"রেটিং":"Rating"}</span></article></div>
      <div className="provider-dashboard-grid"><section className="dashboard-card provider-requests"><div className="card-heading"><div><p className="eyebrow">{bn?"বুকিং ম্যানেজমেন্ট":"BOOKING MANAGEMENT"}</p><h2>{bn?"কাস্টমার রিকোয়েস্ট":"Customer requests"}</h2></div><Link href="/provider">{bn?"প্রোফাইল এডিট":"Edit profile"} →</Link></div><div className="booking-tabs">{filters.map(x=><button key={x} className={filter===x?"tab-active":""} onClick={()=>setFilter(x)}>{label(x)}</button>)}</div><div className="provider-request-list">{visible.map(item=><article className="provider-request" key={item.customer+item.service}><div className="booking-mini-avatar">{item.customer[0]}</div><div className="booking-info"><h3>{item.customer}</h3><strong>{item.service}</strong><p><CalendarDays size={14}/> {item.time} · <MapPin size={14}/> {item.area}</p></div><span className={`status ${item.status.toLowerCase()}`}>{label(item.status)}</span>{item.status==="Pending"?<div className="request-actions"><button title="Accept" onClick={()=>updateStatus(item.customer,"Accepted")}><CheckCircle2 size={17}/></button><button title="Decline" onClick={()=>updateStatus(item.customer,"Completed")}><XCircle size={17}/></button></div>:item.status==="Accepted"?<button className="small-action" onClick={()=>updateStatus(item.customer,"Completed")}>{bn?"সম্পন্ন করুন":"Complete"}</button>:null}</article>)}</div></section>
      <aside className="dashboard-card provider-side"><div className="side-profile"><div className="provider-avatar">R</div><h2>Rahim Electric Service</h2><span className="verified-badge"><CheckCircle2 size={14}/> {bn?"ভেরিফায়েড প্রোভাইডার":"Verified provider"}</span></div><div className="provider-side-links"><Link href="/provider"><UserRound size={17}/> {bn?"প্রোফাইল ও সার্ভিস":"Profile & services"}</Link><button><Settings size={17}/> {bn?"সেটিংস":"Settings"}</button></div><div className="provider-tip"><Star size={18}/><div><strong>{bn?"আপনার রেটিং 4.9/5":"Your rating is 4.9/5"}</strong><p>{bn?"দ্রুত response দিলে আরও booking পাওয়ার সুযোগ বাড়ে।":"Fast responses can help you get more bookings."}</p></div></div></aside></div>
    </section>
  </main>;
}
