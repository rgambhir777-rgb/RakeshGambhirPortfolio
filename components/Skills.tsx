import { skills } from "@/lib/profile";
import Chips from "./Chips";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Skills</p>
          <h2>Tools I build with.</h2>
        </div>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group} className="panel skill-group">
              <h3>{s.group}</h3>
              <Chips items={s.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
