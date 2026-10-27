import { focusAreas } from "@/lib/profile";
import { accent } from "@/lib/css";

export default function FocusAreas() {
  return (
    <section id="focus">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">What I test</p>
          <h2>Where AI and enterprise systems break, <span className="sub">and how I catch it.</span></h2>
        </div>
        <div className="focus">
          {focusAreas.map((f) => (
            <article key={f.title} className="panel focus-card" style={accent(f.color)}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
