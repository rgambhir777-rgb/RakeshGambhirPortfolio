import { fdeSteps } from "@/lib/profile";

export default function Fde() {
  return (
    <section id="fde" className="fde">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Forward Deployed Engineering</p>
          <h2>Embedded with the customer. <span className="sub">Accountable for the outcome.</span></h2>
          <p className="lead">A Forward Deployed Engineer works where the problem is: in the customer&apos;s data, constraints and workflows. I bring all five focus areas into one engagement, so the result is a system the customer can run, measure and trust after I hand it over.</p>
        </div>
        <ol className="stepper">
          {fdeSteps.map((s, i) => (
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
        <p className="manifesto">An FDE&apos;s job isn&apos;t finished at the demo. It&apos;s finished when the customer <span>trusts the system without me in the room.</span></p>
      </div>
    </section>
  );
}
