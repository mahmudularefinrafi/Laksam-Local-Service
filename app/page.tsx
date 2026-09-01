import Link from "next/link";

const categories = [
  ["⚡", "Electrician", "12 providers"], ["🔧", "Plumber", "9 providers"], ["❄️", "AC Technician", "8 providers"],
  ["📱", "Mobile Repair", "15 providers"], ["💻", "Laptop Repair", "6 providers"], ["🧹", "Cleaner", "11 providers"],
  ["🪚", "Carpenter", "7 providers"], ["🎓", "Tutor", "18 providers"], ["📷", "Photographer", "5 providers"], ["🚗", "Driver", "10 providers"],
];

const providers = [
  { initials: "RA", name: "Rahim Electric Service", service: "Electrician", area: "Laksam Town", rating: "4.9" },
  { initials: "KS", name: "Kawsar AC Care", service: "AC Technician", area: "Laksam", rating: "4.8" },
  { initials: "MH", name: "Mizan Mobile Point", service: "Mobile Repair", area: "Bypass Road", rating: "4.7" },
];

export default function Home() {
  return <main className="premium-home">
    <header className="premium-nav">
      <Link href="/" className="premium-brand"><span className="premium-brand-mark">L</span> Laksam Local Service</Link>
      <nav className="premium-navlinks"><Link href="/services">Services</Link><Link href="/providers">Providers</Link><a href="#how">How it works</a></nav>
      <div className="premium-actions"><Link href="/login" className="premium-login">Sign in</Link><Link href="/register" className="premium-cta">Become a Provider</Link></div>
    </header>

    <section className="premium-hero"><div className="premium-container premium-hero-grid">
      <div>
        <div className="premium-badge"><span className="premium-dot"/> Trusted local services in Laksam</div>
        <h1 className="premium-title">The right service.<br/><span>Right around you.</span></h1>
        <p className="premium-copy">Find trusted professionals for your everyday needs — with ratings, transparent starting prices and easy booking.</p>
        <div className="premium-search"><input placeholder="What service do you need?  e.g. AC repair" aria-label="Search service"/><Link href="/providers" className="premium-search-btn"><button>Search</button></Link></div>
        <div className="premium-trust"><div className="trust-avatars"><span>RA</span><span>KS</span><span>MH</span></div><span>Trusted by people around Laksam</span></div>
      </div>
      <div className="premium-hero-card">
        <div className="premium-card-top"><strong>Popular near you</strong><span className="premium-location">● Laksam</span></div>
        {providers.map(p=><Link href="/providers/rahim-electric-service" className="premium-provider" key={p.name}><div className="premium-avatar">{p.initials}</div><div className="premium-provider-info"><strong>{p.name}</strong><small>{p.service} · {p.area}</small><span className="premium-verified">✓ Verified provider</span></div><span className="premium-rating">★ {p.rating}</span></Link>)}
      </div>
    </div></section>

    <section className="premium-section"><div className="premium-container"><div className="premium-section-head"><div><h2>What do you need?</h2><p>From home repairs to personal services, find someone reliable nearby.</p></div><Link href="/services" className="premium-link">View all services →</Link></div>
      <div className="premium-category-grid">{categories.map(([icon,name,count])=><Link href="/providers" className="premium-category" key={name}><div className="premium-category-icon">{icon}</div><strong>{name}</strong><small>{count}</small></Link>)}</div>
    </div></section>

    <section className="premium-section premium-dark" id="how"><div className="premium-container"><div className="premium-section-head"><div><h2>Simple from start to finish.</h2><p>Search, compare and book — without the usual hassle.</p></div></div>
      <div className="premium-steps"><div className="premium-step"><span className="premium-step-number">01 / SEARCH</span><h3>Tell us what you need</h3><p>Choose a service and your area in Laksam to see relevant professionals.</p></div><div className="premium-step"><span className="premium-step-number">02 / CHOOSE</span><h3>Compare with confidence</h3><p>See verification, experience, ratings and starting prices before you decide.</p></div><div className="premium-step"><span className="premium-step-number">03 / BOOK</span><h3>Get the job done</h3><p>Send a booking request or contact the provider directly at your convenience.</p></div></div>
    </div></section>

    <section className="premium-section premium-provider-section"><div className="premium-container"><div className="premium-provider-banner"><div><h2>Are you a local service professional?</h2><p>Join Laksam Local Service, build your profile and reach customers looking for your skills.</p></div><Link href="/register" className="premium-white-btn">Join as a Provider →</Link></div></div></section>
    <footer className="premium-footer"><div className="premium-container premium-footer-inner"><strong>© 2026 Laksam Local Service</strong><span>Built for Laksam · Trusted locally</span></div></footer>
  </main>;
}
