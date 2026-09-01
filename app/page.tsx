const categories = [
  ["⚡", "Electrician", "12 providers"],
  ["🔧", "Plumber", "9 providers"],
  ["❄️", "AC Technician", "8 providers"],
  ["📱", "Mobile Repair", "15 providers"],
  ["💻", "Laptop Repair", "6 providers"],
  ["🧹", "Cleaner", "11 providers"],
  ["🪚", "Carpenter", "7 providers"],
  ["🎓", "Tutor", "18 providers"],
  ["📷", "Photographer", "5 providers"],
  ["🚗", "Driver", "10 providers"],
];

const providers = [
  { initials: "RA", name: "Rahim Electric Service", service: "Electrician", area: "Laksam Town", rating: "4.9" },
  { initials: "KS", name: "Kawsar AC Care", service: "AC Technician", area: "Laksam", rating: "4.8" },
  { initials: "MH", name: "Mizan Mobile Point", service: "Mobile Repair", area: "Bypass Road", rating: "4.7" },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <a className="logo" href="#">
            <span className="logo-mark">L</span>
            Laksam Local Service
          </a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#providers">Providers</a>
            <a href="#how">How it works</a>
          </nav>
          <a className="nav-cta" href="#provider">Become a Provider</a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Trusted services in Laksam</div>
            <h1>Find the right local service, right when you need it.</h1>
            <p className="hero-copy">From a broken AC to a leaking tap, discover trusted service providers around Laksam with ratings, estimated prices and easy booking.</p>
            <div className="search-box">
              <input aria-label="Search for a service" placeholder="What service do you need? e.g. AC repair" />
              <button className="search-btn">Search</button>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-head">
              <span className="card-title">Popular near you</span>
              <span className="live">Laksam</span>
            </div>
            {providers.map((provider) => (
              <div className="provider" key={provider.name}>
                <div className="avatar">{provider.initials}</div>
                <div className="provider-main">
                  <div className="provider-name">{provider.name}</div>
                  <div className="provider-meta">{provider.service} · {provider.area}</div>
                </div>
                <div className="rating">★ {provider.rating}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>What do you need?</h2>
              <p className="section-sub">Find a trusted provider for everyday needs in Laksam.</p>
            </div>
          </div>
          <div className="categories">
            {categories.map(([icon, name, count]) => (
              <a className="category" href="#providers" key={name}>
                <div className="category-icon">{icon}</div>
                <div className="category-name">{name}</div>
                <div className="category-count">{count}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section how" id="how">
        <div className="container">
          <h2>Simple from start to finish.</h2>
          <p className="section-sub">No complicated process. Search, choose and get the job done.</p>
          <div className="steps">
            <div className="step"><div className="step-no">01</div><h3>Search</h3><p>Choose the service you need and your area in Laksam.</p></div>
            <div className="step"><div className="step-no">02</div><h3>Choose</h3><p>Compare verified providers, ratings, experience and estimated price.</p></div>
            <div className="step"><div className="step-no">03</div><h3>Book</h3><p>Call, WhatsApp or send a booking request at your convenient time.</p></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">© 2026 Laksam Local Service · Built for Laksam</div>
      </footer>
    </main>
  );
}
