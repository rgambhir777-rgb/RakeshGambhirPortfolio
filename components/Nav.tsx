import { navLinks } from "@/lib/profile";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top"><b>~/</b>rakesh-gambhir</a>
        <nav aria-label="Primary">
          <ul>
            {navLinks.map((id) => (
              <li key={id}><a href={`#${id}`}>{id}</a></li>
            ))}
            <li><a className="status" href="#contact"><span className="dot"></span>Open to FDE roles</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
