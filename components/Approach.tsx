import { asserts } from "@/lib/profile";

export default function Approach() {
  return (
    <section id="approach">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Approach</p>
          <h2>Measure first. <span className="sub">Then ship, then keep measuring.</span></h2>
        </div>
        <div className="asserts">
          {asserts.map((a) => (
            <article key={a.code} className="panel assert">
              <code><b>✓</b> {a.code}</code>
              <div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
