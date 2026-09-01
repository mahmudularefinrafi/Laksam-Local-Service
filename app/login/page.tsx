import Link from "next/link";
import { ArrowLeft, Mail, Lock, UserRound } from "lucide-react";
import "../globals.css";

export default function LoginPage() {
  return <main className="auth-page"><Link className="auth-brand" href="/">Laksam <span>Local Service</span></Link><div className="auth-card"><p className="eyebrow">WELCOME BACK</p><h1>Login to your account</h1><p>Manage bookings and connect with local providers.</p><form><label>Email address<div className="input-icon"><Mail size={17}/><input type="email" placeholder="you@example.com"/></div></label><label>Password<div className="input-icon"><Lock size={17}/><input type="password" placeholder="••••••••"/></div></label><button className="primary-btn" type="button">Login</button></form><div className="auth-divider"><span>or</span></div><Link className="secondary-btn" href="/register"><UserRound size={17}/> Create a new account</Link><Link className="back-link auth-back" href="/"><ArrowLeft size={15}/> Back to home</Link></div></main>;
}
