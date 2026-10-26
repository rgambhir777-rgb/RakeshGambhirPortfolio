import { contact } from "@/lib/profile";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="panel cta">
          <p className="prompt"><b>$</b> deploy --to production --with-confidence <span className="caret"></span></p>
          <h2>Have an AI system that works in the demo but not in production?</h2>
          <p className="lead">I&apos;m open to Forward Deployed Engineer roles and to engagements focused on agent reliability, LLM cost, observability and AI quality automation.</p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${contact.email}`}>Email me →</a>
            <a className="btn btn-ghost" href={contact.linkedin}>Connect on LinkedIn</a>
            <a className="btn btn-ghost" href={contact.tel}>Call {contact.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
