import Link from "next/link";
import { ArrowLeft, Mail, Lock, Phone, UserRound } from "lucide-react";
import "../globals.css";

export default function RegisterPage() {
  return <main className="auth-page"><Link className="auth-brand" href="/">Laksam <span>Local Service</span></Link><div className="auth-card"><p className="eyebrow">GET STARTED</p><h1>Create your account</h1><p>Book trusted local services in just a few steps.</p><form><label>Full name<div className="input-icon"><UserRound size={17}/><input placeholder="Your name"/></div></label><label>Phone number<div className="input-icon"><Phone size={17}/><input placeholder="01XXXXXXXXX"/></div></label><label>Email address<div className="input-icon"><Mail size={17}/><input type="email" placeholder="you@example.com"/></div></label><label>Password<div className="input-icon"><Lock size={17}/><input type="password" placeholder="Create a password"/></div></label><button className="primary-btn" type="button">Create account</button></form><p className="auth-switch">Already have an account? <Link href="/login">Login</Link></p><Link className="back-link auth-back" href="/"><ArrowLeft size={15}/> Back to home</Link></div></main>;
}
