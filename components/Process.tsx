import { processSteps } from "@/lib/profile";

export default function Process() {
  return (
    <section id="process" className="alt">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">How I work</p>
          <h2>From discovery to go-live, <span className="sub">with evidence at every step.</span></h2>
          <p className="lead">I start with the people who run the process and end with a release decision the business can defend. AI speeds up the middle, and a human still signs off on the result.</p>
        </div>
        <ol className="stepper">
          {processSteps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="node">{String(i + 1).padStart(2, "0")}</span>
              <div className="panel">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="out">{s.out}</div>
              </div>
            </li>
          ))}
        </ol>
        <p className="manifesto">Fluent isn&apos;t the same as correct. My job is to <span>prove the difference before customers find it.</span></p>
      </div>
    </section>
  );
}
