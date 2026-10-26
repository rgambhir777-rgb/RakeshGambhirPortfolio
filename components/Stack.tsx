import { stack } from "@/lib/profile";

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Tools I build with</p>
          <h2>Technical Stack</h2>
        </div>
        <div className="panel stackline">
          <span className="stack-prompt">$ cat stack.txt</span>
          <p>{stack.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
