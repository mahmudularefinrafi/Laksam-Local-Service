import "../admin.css";

const providers = [
  ["Rahim Electric Service", "Electrician", "Laksam Town", "4.9", "Verified"],
  ["Kawsar AC Care", "AC Technician", "Laksam", "4.8", "Pending"],
  ["Mizan Mobile Point", "Mobile Repair", "Bypass Road", "4.7", "Verified"],
  ["Hasan Plumbing", "Plumber", "Azgara", "4.6", "Pending"],
];

export default function ProvidersPage() {
  return <AdminPage title="Providers" subtitle="Manage local service providers and verification status.">
    <div className="admin-panel"><div className="panel-heading"><div><h2>All providers</h2><p>Search, review and manage provider profiles.</p></div><button className="admin-primary">+ Add provider</button></div>
      <div className="filter-bar"><input placeholder="Search providers..." /><select defaultValue="all"><option value="all">All status</option><option>Verified</option><option>Pending</option></select><select defaultValue="all"><option value="all">All categories</option><option>Electrician</option><option>Plumber</option><option>AC Technician</option><option>Mobile Repair</option></select></div>
      <div className="provider-table"><div className="table-row table-head"><span>Provider</span><span>Category</span><span>Area</span><span>Rating</span><span>Status</span></div>{providers.map(p=><div className="table-row" key={p[0]}><span className="provider-cell"><b>{p[0].slice(0,2).toUpperCase()}</b><strong>{p[0]}</strong></span><span>{p[1]}</span><span>{p[2]}</span><span>★ {p[3]}</span><span><em className={`status ${p[4].toLowerCase()}`}>{p[4]}</em></span></div>)}</div>
    </div>
  </AdminPage>;
}

function AdminPage({title, subtitle, children}:{title:string;subtitle:string;children:React.ReactNode}){return <div className="admin-shell"><aside className="admin-sidebar"><a href="/" className="admin-brand"><span>L</span><div>Laksam Local Service<small>Admin Panel</small></div></a><nav className="admin-nav">{[["Overview","/admin"],["Providers","/admin/providers"],["Users","/admin/users"],["Bookings","/admin/bookings"],["Services","/admin/services"],["Reviews","/admin/reviews"],["Reports","/admin/reports"]].map(([n,h])=><a className={n===title?"active":""} href={h} key={n}><span>•</span>{n}</a>)}</nav><div className="admin-side-footer"><a href="/">← Back to website</a></div></aside><main className="admin-main"><header className="admin-topbar"><div><p className="admin-kicker">Laksam Local Service</p><h1>{title}</h1><p className="page-subtitle">{subtitle}</p></div><div className="admin-user"><div className="admin-avatar">A</div><div><strong>Administrator</strong><small>Super Admin</small></div></div></header>{children}</main></div>}
