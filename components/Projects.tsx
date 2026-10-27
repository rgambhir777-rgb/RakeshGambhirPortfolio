import { projects } from "@/lib/profile";
import { accent } from "@/lib/css";
import Chips from "./Chips";

export default function Projects() {
  return (
    <section id="projects" className="alt">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Selected projects</p>
          <h2>Quality work, <span className="sub">with the numbers to show for it.</span></h2>
        </div>
        <div className="projects">
          {projects.map((p) => (
            <article key={p.title} className="panel project" style={accent(p.color)}>
              <div className="project-cover"></div>
              <div className="project-body">
                <span className="label">{p.label}</span>
                <h3>{p.title}</h3>
                <span className="client">{p.client}</span>
                <p>{p.summary}</p>
                <dl>
                  <div><dt>Problem</dt><dd>{p.problem}</dd></div>
                  <div><dt>Approach</dt><dd>{p.approach}</dd></div>
                  <div><dt>Result</dt><dd>{p.result}</dd></div>
                </dl>
                <Chips items={p.chips} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
