import { about, contact, quickFacts } from "@/lib/profile";

export default function About() {
  return (
    <section id="about" className="alt">
      <div className="wrap about-grid">
        <div className="about-body">
          <p className="kicker">About</p>
          <h2 style={{ marginBottom: 28 }}>Enterprise QA discipline, <span className="sub">applied to AI.</span></h2>
          {about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <aside className="panel facts">
          <h3>Quick facts</h3>
          <dl>
            {quickFacts.map((f) => (
              <div key={f.label}><dt>{f.label}</dt><dd className={f.tone}>{f.value}</dd></div>
            ))}
            <div><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={contact.tel}>{contact.phone}</a></dd></div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
