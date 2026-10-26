import { focusAreas } from "@/lib/profile";
import { accent } from "@/lib/css";
import Chips from "./Chips";

export default function FocusAreas() {
  return (
    <section id="focus">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Focus areas</p>
          <h2>Where AI projects fail quietly, <span className="sub">and where I specialise.</span></h2>
        </div>
        <div className="bento">
          {focusAreas.map((f) => (
            <article key={f.path} className={f.big ? "panel tile big" : "panel tile"} style={accent(f.color)}>
              <span className="path">{f.path}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <ul>
                {f.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <Chips items={f.chips} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
