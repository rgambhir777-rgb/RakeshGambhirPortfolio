import { experience } from "@/lib/profile";
import Chips from "./Chips";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Experience</p>
          <h2>Where I&apos;ve done the work.</h2>
        </div>
        <ol className="timeline">
          {experience.map((j) => (
            <li key={j.role + j.period} className="job">
              <div className="panel">
                <div className="job-head">
                  {/* Client (org) and dates (period) stay in lib/profile.ts but are hidden for now, at Rakesh's request */}
                  <h3>{j.role}</h3>
                </div>
                <ul>
                  {j.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <Chips items={j.chips} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
