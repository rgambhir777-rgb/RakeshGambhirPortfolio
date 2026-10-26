import { layers } from "@/lib/profile";
import { accent } from "@/lib/css";

export default function Layers() {
  return (
    <section>
      <div className="wrap own-grid">
        <div>
          <p className="kicker">The system I own</p>
          <h2>Five layers between a model and a <span className="sub">business outcome.</span></h2>
          <p className="lead">Most AI projects stall in the gap between &quot;it works in the notebook&quot; and &quot;we trust it with customers.&quot; I sit in that gap, on site with the team, and close it one layer at a time.</p>
        </div>
        <div className="panel waterfall" aria-label="Production AI layers">
          {layers.map((l) => (
            <div key={l.n} className="wf-row" style={accent(l.color)}>
              <span className="n">{l.n}</span>
              <div>
                <strong>{l.title} <span className="tag">{l.tag}</span></strong>
                <p>{l.text}</p>
                <div className="wf-bar"><span style={{ left: `${l.left}%`, width: `${l.width}%` }}></span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
