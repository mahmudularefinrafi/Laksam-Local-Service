"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, BriefcaseBusiness, Phone, MapPin, UserRound, FileCheck2 } from "lucide-react";
import LanguageToggle, { Language } from "../components/LanguageToggle";
import "../globals.css";

export default function ProviderRegistrationPage() {
  const [language, setLanguage] = useState<Language>("bn");
  const [submitted, setSubmitted] = useState(false);
  const bn = language === "bn";

  return <main className="auth-page">
    <div className="auth-topbar"><Link className="auth-brand" href="/">Laksam <span>Local Service</span></Link><LanguageToggle onChange={setLanguage}/></div>
    <div className="auth-card auth-card-wide">
      <p className="eyebrow">{bn ? "সার্ভিস প্রোভাইডার" : "SERVICE PROVIDER"}</p>
      <h1>{bn ? "আপনার সার্ভিস লিস্ট করুন" : "List your service"}</h1>
      <p>{bn ? "লাকসামের মানুষকে আপনার সার্ভিস খুঁজে পেতে সাহায্য করুন।" : "Help people in Laksam discover your local service."}</p>
      {submitted ? <div className="auth-success"><FileCheck2 size={22}/><strong>{bn ? "রেজিস্ট্রেশন জমা হয়েছে" : "Registration submitted"}</strong><span>{bn ? "Admin verification-এর পর আপনার প্রোফাইল প্রকাশ করা যাবে।" : "Your profile can be published after admin verification."}</span></div> : <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <label>{bn ? "আপনার নাম" : "Your name"}<div className="input-icon"><UserRound size={17}/><input required placeholder={bn ? "পূর্ণ নাম" : "Full name"}/></div></label>
        <label>{bn ? "ফোন নম্বর" : "Phone number"}<div className="input-icon"><Phone size={17}/><input required placeholder="01XXXXXXXXX"/></div></label>
        <label>{bn ? "কাজের ধরন" : "Service category"}<div className="input-icon"><BriefcaseBusiness size={17}/><select required defaultValue=""><option value="" disabled>{bn ? "ক্যাটাগরি নির্বাচন করুন" : "Select a category"}</option><option>Electrician / ইলেকট্রিশিয়ান</option><option>Plumber / প্লাম্বার</option><option>AC Technician / AC টেকনিশিয়ান</option><option>Mobile Repair / মোবাইল রিপেয়ার</option><option>Laptop Repair / ল্যাপটপ রিপেয়ার</option><option>Tutor / টিউটর</option><option>Photographer / ফটোগ্রাফার</option><option>Cleaner / ক্লিনার</option></select></div></label>
        <label>{bn ? "সার্ভিস এলাকা" : "Service area"}<div className="input-icon"><MapPin size={17}/><input required placeholder={bn ? "যেমন: লাকসাম পৌরসভা" : "e.g. Laksam Pourashava"}/></div></label>
        <label>{bn ? "শুরু মূল্য" : "Starting price"}<div className="input-icon"><span>৳</span><input required type="number" min="0" placeholder="500"/></div></label>
        <label>{bn ? "অভিজ্ঞতা" : "Experience"}<div className="input-icon"><input required placeholder={bn ? "যেমন: ৫ বছর" : "e.g. 5 years"}/></div></label>
        <button className="primary-btn" type="submit">{bn ? "Verification-এর জন্য জমা দিন" : "Submit for verification"}</button>
      </form>}
      <Link className="back-link auth-back" href="/register"><ArrowLeft size={15}/> {bn ? "রেজিস্ট্রেশনে ফিরুন" : "Back to registration"}</Link>
    </div>
  </main>;
}
