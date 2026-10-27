import { navLinks, status } from "@/lib/profile";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top"><b>~/</b>rakesh-gambhir</a>
        <nav aria-label="Primary">
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>
            ))}
            <li><a className="status" href="#contact"><span className="dot"></span>{status}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
