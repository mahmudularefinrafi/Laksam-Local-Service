import Link from "next/link";
import { Search, MapPin, Star, BadgeCheck, ArrowRight } from "lucide-react";
import "../globals.css";

const providers = [
  ["Rahim Electric Service", "Electrician", "Laksam Town", "4.9", "120+ jobs", "৳500"],
  ["Kawsar AC Care", "AC Technician", "Laksam", "4.8", "86+ jobs", "৳700"],
  ["Mizan Mobile Point", "Mobile Repair", "Bypass Road", "4.7", "210+ jobs", "৳300"],
  ["Hasan Plumbing", "Plumber", "Azgara", "4.9", "74+ jobs", "৳400"],
  ["Nayeem Laptop Care", "Laptop Repair", "Laksam Bazar", "4.8", "95+ jobs", "৳500"],
  ["Sabbir Home Care", "Cleaner", "Laksam", "4.6", "60+ jobs", "৳600"],
];

export default function ProvidersPage() {
  return <main className="page-shell"><header className="site-header"><Link className="brand" href="/">Laksam <span>Local Service</span></Link><nav><Link href="/services">Services</Link><Link href="/providers">Providers</Link><Link href="/">How it works</Link></nav><Link className="header-cta" href="/provider">Become a Provider</Link></header><section className="listing-head"><div><p className="eyebrow">LOCAL PROFESSIONALS</p><h1>Find a trusted provider</h1><p>Verified professionals serving Laksam and nearby areas.</p></div><div className="listing-search"><Search size={18}/><input placeholder="Search service or provider"/><button>Search</button></div></section><div className="filter-row"><button className="filter-active">All Services</button><button>Electrician</button><button>Plumber</button><button>AC Technician</button><button>Mobile Repair</button><button>Nearby</button></div><section className="provider-grid">{providers.map(([name, service, area, rating, jobs, price]) => <article className="provider-card" key={name}><div className="provider-avatar">{name[0]}</div><div className="provider-main"><div className="provider-title"><h3>{name}</h3><BadgeCheck size={17}/></div><span className="provider-service">{service}</span><p><MapPin size={14}/> {area}</p><div className="provider-meta"><span><Star size={14} fill="currentColor"/> {rating}</span><span>{jobs}</span><b>From {price}</b></div></div><Link className="card-arrow" href={`/providers/rahim-electric-service`}><ArrowRight size={18}/></Link></article>)}</section></main>;
}
