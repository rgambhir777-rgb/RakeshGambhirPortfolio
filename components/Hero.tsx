import { contact, evalScores, evalStats, metrics } from "@/lib/profile";
import IdLines from "./IdLines";
import { LinkedInIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="idblock">
          <IdLines showRoles />
        </div>
        <div className="hero-grid">
          <div>
            <div className="intro">
              <div className="avatar" aria-hidden="true">RG</div>
              <div>
                <strong>{contact.name}</strong>
                <span>{contact.title} · Columbus, OH</span>
              </div>
            </div>
            <h1>I test AI systems <span className="hl">before your customers do.</span></h1>
            <p className="lead">AI Quality Analyst with 10+ years in QA leadership, test automation and performance testing. I score LLM-driven virtual agents for context awareness, accuracy and hallucination, build Playwright test suites, both classic and AI-assisted with a human reviewing what the AI writes, and run JMeter performance tests that show how much load a system can take before it breaks.</p>
            <div className="actions">
              <a className="btn btn-primary" href="#projects">View my work →</a>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>
            <div className="socials">
              <a href={contact.linkedin}><LinkedInIcon />LinkedIn</a>
              <a href={contact.hfSpace}><span aria-hidden="true">🤗</span>Hugging Face</a>
              <a href={`mailto:${contact.email}`}>✉ Email</a>
            </div>
          </div>

          <div>
            <div className="panel trace" aria-label="Illustration: a scorecard for a multi-turn virtual agent evaluation" role="img">
              <div className="trace-top"><span className="lights"><i></i><i></i><i></i></span>eval · virtual_agent.multi_turn<span className="ok">● 47/50 passed</span></div>
              <div className="spans">
                {evalScores.map((s) => (
                  <div key={s.name} className="span-row">
                    <span className="name">{s.name}</span>
                    <span className="track">
                      <span className="bar" style={{ left: 0, width: `${s.score}%`, background: s.color }}></span>
                    </span>
                    <span className="score">{s.score}%</span>
                  </div>
                ))}
              </div>
              <div className="trace-foot">
                {evalStats.map((s) => (
                  <div key={s.label}><small>{s.label}</small><strong style={s.color ? { color: s.color } : undefined}>{s.value}</strong></div>
                ))}
              </div>
            </div>
            <p className="trace-caption">Example scorecard: how I grade a virtual agent, turn by turn.</p>
          </div>
        </div>

        <div className="panel metrics-grid">
          {metrics.map((m) => (
            <div key={m.label} className="metric"><strong>{m.value}</strong><span>{m.label}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
