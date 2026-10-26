import { metrics } from "@/lib/profile";

export default function Metrics() {
  return (
    <section className="metrics">
      <div className="wrap">
        <div className="panel metrics-grid">
          {metrics.map((m) => (
            <div key={m.label} className="metric"><small><i></i>{m.label}</small><strong>{m.value}</strong><span>{m.text}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
