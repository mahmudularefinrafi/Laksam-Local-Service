import "../admin.css";

type Review = [string, string, string, number, string];

const reviews: Review[] = [
  ["Rafi Ahmed", "Rahim Electric Service", "Electrician", 5, "Very good service and arrived on time."],
  ["Hasan Mia", "Kawsar AC Care", "AC Technician", 4, "Good work. Price was reasonable."],
  ["Nusrat Jahan", "Hasan Plumbing", "Plumber", 2, "Service was late and communication was poor."],
];

export default function Reviews() {
  return <AdminPage title="Reviews" subtitle="Moderate customer feedback and protect platform trust.">
    <div className="admin-panel">
      <div className="panel-heading"><div><h2>Customer reviews</h2><p>Review feedback and remove inappropriate content when necessary.</p></div></div>
      {reviews.map(([customer, provider, category, rating, text]) => (
        <div className="review-row" key={`${customer}-${provider}`}>
          <div className="review-avatar">{customer.slice(0, 2).toUpperCase()}</div>
          <div className="review-body">
            <strong>{customer}</strong><span>{provider} · {category}</span>
            <div className="stars">{"★".repeat(rating)}<i>{"★".repeat(5 - rating)}</i></div>
            <p>{text}</p>
          </div>
          <button className="review-action">•••</button>
        </div>
      ))}
    </div>
  </AdminPage>;
}

function AdminPage({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  const nav: [string, string][] = [["Overview", "/admin"], ["Providers", "/admin/providers"], ["Users", "/admin/users"], ["Bookings", "/admin/bookings"], ["Services", "/admin/services"], ["Reviews", "/admin/reviews"], ["Reports", "/admin/reports"]];
  return <div className="admin-shell">
    <aside className="admin-sidebar"><a href="/" className="admin-brand"><span>L</span><div>Laksam Local Service<small>Admin Panel</small></div></a>
      <nav className="admin-nav">{nav.map(([name, href]) => <a className={name === title ? "active" : ""} href={href} key={name}><span>•</span>{name}</a>)}</nav>
      <div className="admin-side-footer"><a href="/">← Back to website</a></div>
    </aside>
    <main className="admin-main"><header className="admin-topbar"><div><p className="admin-kicker">Laksam Local Service</p><h1>{title}</h1><p className="page-subtitle">{subtitle}</p></div><div className="admin-user"><div className="admin-avatar">A</div><div><strong>Administrator</strong><small>Super Admin</small></div></div></header>{children}</main>
  </div>;
}
