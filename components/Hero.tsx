import { traceSpans, traceStats } from "@/lib/profile";
import IdLines from "./IdLines";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="idblock">
          <IdLines showRoles />
        </div>
        <div>
          <h1>AI systems that ship to production and <span className="hl">stay trustworthy there.</span></h1>
          <p className="lead">I work inside customer teams to take agents and LLM applications from demo to dependable. That means measured cost, traced behavior, controlled hallucination and bias, and automated quality gates that keep everything honest after launch.</p>
          <div className="actions">
            <a className="btn btn-primary" href="#contact">Start a conversation →</a>
            <a className="btn btn-ghost" href="#focus">See focus areas</a>
          </div>
        </div>

        <div className="panel trace" aria-label="Illustration: a traced agent run with cost and evaluation results" role="img">
          <div className="trace-top"><span className="lights"><i></i><i></i><i></i></span>trace · agent.run<span className="ok">● eval passed</span></div>
          <div className="spans">
            {traceSpans.map((s) => (
              <div key={s.name} className="span-row">
                <span className={s.root ? "name" : "name child"}>{s.name}</span>
                <span className="track">
                  <span className="bar" style={{ left: `${s.left}%`, width: `${s.width}%`, background: s.color, opacity: s.root ? 0.85 : undefined }}></span>
                </span>
              </div>
            ))}
          </div>
          <div className="trace-foot">
            {traceStats.map((s) => (
              <div key={s.label}><small>{s.label}</small><strong style={s.color ? { color: s.color } : undefined}>{s.value}</strong></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
