import { contact, toolbox } from "@/lib/profile";
import Chips from "./Chips";

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <aside className="panel idcard">
          <div className="avatar">RG</div>
          <h3>{contact.name}</h3>
          <p className="role">Forward Deployed AI Engineer</p>
          <dl>
            <div><dt>focus</dt><dd>AI quality &amp; reliability</dd></div>
            <div><dt>status</dt><dd style={{ color: "var(--green)" }}>open to FDE roles</dd></div>
            <div><dt>hugging face</dt><dd><a href={contact.hfSpace}>nusoftai</a></dd></div>
            <div><dt>linkedin</dt><dd><a href={contact.linkedin}>in/rgambhir</a></dd></div>
            <div><dt>email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
            <div><dt>phone</dt><dd><a href={contact.tel}>{contact.phone}</a></dd></div>
          </dl>
        </aside>
        {/* Placeholder: should tell the enterprise PeopleSoft → production AI story from LinkedIn */}
        <div className="about-body">
          <p className="kicker">About</p>
          <h2 style={{ marginBottom: 28 }}>Quality engineering, <span className="sub">rebuilt for AI.</span></h2>
          <p>I&apos;m Rakesh Gambhir, an engineer with a background in quality assurance and test automation who now works on the hardest part of applied AI: making it reliable in someone else&apos;s production environment.</p>
          <p>I&apos;ve spent my career building automated test strategies and release pipelines. Today I apply that discipline to agents and LLM applications: evaluating them, tracing them, controlling their cost, and keeping their accuracy, bias and hallucination rates where the business needs them.</p>
          <p>I work best as a Forward Deployed Engineer: next to the customer, close to their data, and accountable for whether the system actually works.</p>
          <div className="toolbox">
            <h4>Toolbox</h4>
            <Chips items={toolbox} />
          </div>
        </div>
      </div>
    </section>
  );
}
