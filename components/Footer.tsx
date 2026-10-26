import IdLines from "./IdLines";
import Year from "./Year";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <IdLines />
        <p className="copy">© <Year /> · built &amp; tested in production</p>
      </div>
    </footer>
  );
}
