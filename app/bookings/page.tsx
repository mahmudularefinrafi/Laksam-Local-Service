"use client";

import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import LanguageToggle, { Language } from "../components/LanguageToggle";
import "../globals.css";

const bookings = [
  ["Rahim Electric Service","Electrical repair","Today · 5:00 PM","Laksam Town","Pending","অপেক্ষমাণ"],
  ["Kawsar AC Care","AC servicing","Sep 5 · 11:00 AM","Laksam","Accepted","গৃহীত"],
  ["Mizan Mobile Point","Screen replacement","Aug 29","Bypass Road","Completed","সম্পন্ন"]
] as const;

export default function MyBookingsPage(){
  const [language,setLanguage]=useState<Language>("bn");
  const [filter,setFilter]=useState("All");
  const bn=language==="bn";
  const filters=["All","Pending","Accepted","Completed"];
  const visible=filter==="All"?bookings:bookings.filter(b=>b[4]===filter);
  return <main className="page-shell"><header className="site-header"><Link className="brand" href="/">Laksam <span>Local Service</span></Link><nav><Link href="/services">{bn?"সার্ভিস":"Services"}</Link><Link href="/providers">{bn?"প্রোভাইডার":"Providers"}</Link><Link href="/dashboard">{bn?"ড্যাশবোর্ড":"Dashboard"}</Link></nav><div className="header-actions"><LanguageToggle onChange={setLanguage}/><Link className="header-cta" href="/services">{bn?"নতুন বুকিং":"New booking"}</Link></div></header><section className="bookings-page"><p className="eyebrow">{bn?"আমার অ্যাকাউন্ট":"MY ACCOUNT"}</p><h1>{bn?"আমার বুকিং":"My bookings"}</h1><p className="page-subtitle">{bn?"আপনার সার্ভিস রিকোয়েস্ট ও সম্পন্ন কাজগুলো ট্র্যাক করুন।":"Track your service requests and completed jobs."}</p><div className="booking-tabs">{filters.map(item=><button key={item} className={filter===item?"tab-active":""} onClick={()=>setFilter(item)}>{bn?({All:"সব বুকিং",Pending:"অপেক্ষমাণ",Accepted:"চলমান",Completed:"সম্পন্ন"}[item]||item):item}</button>)}</div><section className="booking-list">{visible.map(([provider,service,time,area,status,statusBn])=><article className="booking-item" key={provider+service}><div className="booking-mini-avatar">{provider[0]}</div><div className="booking-info"><h3>{provider}</h3><strong>{service}</strong><p><CalendarDays size={14}/> {time} · <MapPin size={14}/> {area}</p></div><span className={`status ${status.toLowerCase()}`}>{bn?statusBn:status}</span><ArrowRight size={18}/></article>)}</section>{filter==="Completed"&&<div className="booking-review-prompt"><Star size={19}/><div><strong>{bn?"সম্পন্ন বুকিংয়ের রিভিউ দিন":"Review your completed service"}</strong><p>{bn?"আপনার অভিজ্ঞতা অন্য কাস্টমারদের সিদ্ধান্ত নিতে সাহায্য করবে।":"Your experience can help other customers choose confidently."}</p></div><button className="secondary-btn" type="button">{bn?"রিভিউ দিন":"Write review"}</button></div>}</section></main>
}
