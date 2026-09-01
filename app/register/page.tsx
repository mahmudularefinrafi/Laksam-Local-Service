"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Mail, Lock, Phone, UserRound, BriefcaseBusiness } from "lucide-react";
import LanguageToggle, { Language } from "../components/LanguageToggle";
import "../globals.css";

export default function RegisterPage() {
  const [language, setLanguage] = useState<Language>("bn");
  const [role, setRole] = useState<"customer" | "provider">("customer");
  const [submitted, setSubmitted] = useState(false);
  const bn = language === "bn";

  return <main className="auth-page">
    <div className="auth-topbar"><Link className="auth-brand" href="/">Laksam <span>Local Service</span></Link><LanguageToggle onChange={setLanguage}/></div>
    <div className="auth-card">
      <p className="eyebrow">{bn ? "শুরু করুন" : "GET STARTED"}</p>
      <h1>{bn ? "আপনার অ্যাকাউন্ট তৈরি করুন" : "Create your account"}</h1>
      <p>{bn ? "কয়েকটি ধাপেই স্থানীয় সার্ভিস বুক করুন।" : "Book trusted local services in just a few steps."}</p>
      <div className="role-switch">
        <button type="button" className={role === "customer" ? "active" : ""} onClick={() => setRole("customer")}><UserRound size={17}/>{bn ? "কাস্টমার" : "Customer"}</button>
        <button type="button" className={role === "provider" ? "active" : ""} onClick={() => setRole("provider")}><BriefcaseBusiness size={17}/>{bn ? "প্রোভাইডার" : "Provider"}</button>
      </div>
      {role === "provider" ? <div className="auth-success">{bn ? "প্রোভাইডার হিসেবে যোগ দিতে নিচের বাটনে ক্লিক করুন।" : "Continue below to register as a service provider."}<Link className="secondary-btn" href="/provider"><BriefcaseBusiness size={17}/> {bn ? "Provider Registration" : "Provider Registration"}</Link></div> : submitted ? <div className="auth-success">{bn ? "রেজিস্ট্রেশন তথ্য গ্রহণ করা হয়েছে। Backend সংযোগ হলে এখান থেকেই account তৈরি হবে।" : "Registration details received. Account creation will connect here when the backend is added."}</div> : <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <label>{bn ? "পুরো নাম" : "Full name"}<div className="input-icon"><UserRound size={17}/><input required placeholder={bn ? "আপনার নাম" : "Your name"}/></div></label>
        <label>{bn ? "ফোন নম্বর" : "Phone number"}<div className="input-icon"><Phone size={17}/><input required placeholder="01XXXXXXXXX"/></div></label>
        <label>{bn ? "ইমেইল" : "Email address"}<div className="input-icon"><Mail size={17}/><input required type="email" placeholder="you@example.com"/></div></label>
        <label>{bn ? "পাসওয়ার্ড" : "Password"}<div className="input-icon"><Lock size={17}/><input required type="password" placeholder={bn ? "একটি পাসওয়ার্ড তৈরি করুন" : "Create a password"}/></div></label>
        <button className="primary-btn" type="submit">{bn ? "অ্যাকাউন্ট তৈরি করুন" : "Create account"}</button>
      </form>}
      <p className="auth-switch">{bn ? "আগেই অ্যাকাউন্ট আছে?" : "Already have an account?"} <Link href="/login">{bn ? "লগইন" : "Login"}</Link></p>
      <Link className="back-link auth-back" href="/"><ArrowLeft size={15}/> {bn ? "হোমে ফিরুন" : "Back to home"}</Link>
    </div>
  </main>;
}
