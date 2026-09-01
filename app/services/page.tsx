import Link from "next/link";
import { Search, Zap, Droplets, Snowflake, Smartphone, Laptop, Sparkles, Hammer, BookOpen, Camera, Car, ArrowRight } from "lucide-react";
import "../globals.css";

const services = [
  ["Electrician", "Electrical repair, wiring & installation", Zap],
  ["Plumber", "Leaks, pipes, taps & bathroom work", Droplets],
  ["AC Technician", "AC servicing, repair & installation", Snowflake],
  ["Mobile Repair", "Screen, battery & software repair", Smartphone],
  ["Laptop Repair", "Laptop troubleshooting & upgrades", Laptop],
  ["Cleaner", "Home, office & deep cleaning", Sparkles],
  ["Carpenter", "Furniture, doors & woodwork", Hammer],
  ["Tutor", "School, college & private tutoring", BookOpen],
  ["Photographer", "Events, portraits & products", Camera],
  ["Driver", "Personal & local driving service", Car],
] as const;

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <header className="site-header"><Link className="brand" href="/">Laksam <span>Local Service</span></Link><nav><Link href="/services">Services</Link><Link href="/providers">Providers</Link><Link href="/">How it works</Link></nav><Link className="header-cta" href="/provider">Become a Provider</Link></header>
      <section className="inner-hero"><p className="eyebrow">SERVICES IN LAKSAM</p><h1>What do you need help with?</h1><p>Choose a service and find trusted local professionals near you.</p><div className="search-box"><Search size={19}/><input placeholder="Search for electrician, plumber, tutor..."/><button>Search</button></div></section>
      <section className="service-grid">{services.map(([name, desc, Icon]) => <Link className="service-card" href={`/providers?service=${encodeURIComponent(name)}`} key={name}><span className="service-icon"><Icon size={22}/></span><div><h3>{name}</h3><p>{desc}</p></div><ArrowRight size={17}/></Link>)}</section>
      <footer className="site-footer"><strong>Laksam Local Service</strong><span>Find trusted local help, when you need it.</span></footer>
    </main>
  );
}
