import { contact } from "@/lib/profile";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="panel cta">
          <p className="prompt"><b>$</b> run --suite release --gate go/no-go <span className="caret"></span></p>
          <h2>Need proof your AI is ready for real customers?</h2>
          <p className="lead">I&apos;m open to AI Quality Analyst roles, and to work in LLM evaluation, test automation, performance testing and QA leadership.</p>
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
