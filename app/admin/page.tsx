import "./admin.css";

const stats = [
  ["1,248", "Total Users", "users"],
  ["186", "Providers", "providers"],
  ["17", "Pending Verification", "verification"],
  ["528", "Total Bookings", "bookings"],
];

const recentProviders = [
  { name: "Rahim Electric Service", category: "Electrician", area: "Laksam Town", status: "Verified" },
  { name: "Kawsar AC Care", category: "AC Technician", area: "Laksam", status: "Pending" },
  { name: "Mizan Mobile Point", category: "Mobile Repair", area: "Bypass Road", status: "Verified" },
  { name: "Hasan Plumbing", category: "Plumber", area: "Azgara", status: "Pending" },
];

const nav = ["Overview", "Providers", "Users", "Bookings", "Services", "Reviews", "Reports"];

export default function AdminDashboard() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <a href="/" className="admin-brand"><span>L</span><div>Laksam Local Service<small>Admin Panel</small></div></a>
        <nav className="admin-nav">
          {nav.map((item, index) => <a className={index === 0 ? "active" : ""} href="#" key={item}><span>{["⌂", "♙", "◉", "▣", "▦", "★", "⚑"][index]}</span>{item}</a>)}
        </nav>
        <div className="admin-side-footer"><a href="/">← Back to website</a><button>Sign out</button></div>
      </aside>
      <main className="admin-main">
        <header className="admin-topbar"><div><p className="admin-kicker">Laksam Local Service</p><h1>Good evening, Admin</h1></div><div className="admin-user"><div className="admin-avatar">A</div><div><strong>Administrator</strong><small>Super Admin</small></div></div></header>
        <section className="admin-stats">
          {stats.map(([value, label, key]) => <div className="admin-stat" key={key}><div className={`stat-icon ${key}`}>{key === "users" ? "◉" : key === "providers" ? "♙" : key === "verification" ? "✓" : "▣"}</div><div><strong>{value}</strong><span>{label}</span></div></div>)}
        </section>
        <section className="admin-grid">
          <div className="admin-panel wide"><div className="panel-heading"><div><h2>Provider applications</h2><p>Review and manage the latest provider registrations.</p></div><a href="#">View all</a></div><div className="provider-table"><div className="table-row table-head"><span>Provider</span><span>Category</span><span>Area</span><span>Status</span><span></span></div>{recentProviders.map((p) => <div className="table-row" key={p.name}><span className="provider-cell"><b>{p.name.slice(0,2).toUpperCase()}</b><strong>{p.name}</strong></span><span>{p.category}</span><span>{p.area}</span><span><em className={`status ${p.status.toLowerCase()}`}>{p.status}</em></span><span className="more">•••</span></div>)}</div></div>
          <div className="admin-panel"><div className="panel-heading"><div><h2>Quick actions</h2><p>Common admin tasks.</p></div></div><div className="quick-actions"><button><b>+</b><span><strong>Add provider</strong><small>Create a provider profile</small></span></button><button><b>✓</b><span><strong>Verification queue</strong><small>17 applications waiting</small></span></button><button><b>▦</b><span><strong>Add service</strong><small>Create a new category</small></span></button></div></div>
        </section>
      </main>
    </div>
  );
}
