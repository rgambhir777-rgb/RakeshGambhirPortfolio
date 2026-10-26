import { contact, idRoles } from "@/lib/profile";
import { LinkedInIcon } from "./Icons";

// The two pipe-separated ID lines used at the top and bottom of the page.
// They must stay two lines at every width (360, 390, 768, 1024, 1280 px).
export default function IdLines({ showRoles = false }: { showRoles?: boolean }) {
  return (
    <>
      <p className="idline">
        <span className="id-name">{contact.name}</span>
        <span>{contact.role}</span>
        {showRoles && idRoles.map((r) => <span key={r} className="id-role">{r}</span>)}
      </p>
      <p className="idline id-contact">
        <span><a href={`mailto:${contact.email}`}>{contact.email}</a></span>
        <span><a href={contact.tel}>{contact.phone}</a></span>
        <span>
          <a href={contact.linkedin} aria-label="LinkedIn">
            <LinkedInIcon className="ico" />
            <i className="full">{contact.linkedinShort}</i><i className="lbl">LinkedIn</i>
          </a>
        </span>
        <span>
          <a href={contact.hfSpace} aria-label="Hugging Face">
            <span className="ico emoji" aria-hidden="true">🤗</span>
            <i className="full">{contact.hfShort}</i><i className="lbl">Hugging Face</i>
          </a>
        </span>
      </p>
    </>
  );
}
