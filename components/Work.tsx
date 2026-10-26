import { githubUser, repos } from "@/lib/profile";
import { RepoIcon } from "./Icons";
import Chips from "./Chips";

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Selected work</p>
          <h2>Proof in working code.</h2>
        </div>
        <div className="repos">
          {repos.map((r) => (
            <a key={r.repo} className="panel repo" href={`https://github.com/${githubUser}/${r.repo}`}>
              <span className="label">{r.label}</span>
              <span className="rname"><RepoIcon />{githubUser} / <b>{r.repo}</b></span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <Chips items={r.chips} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
