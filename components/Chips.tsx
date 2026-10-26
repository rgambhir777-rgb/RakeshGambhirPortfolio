export default function Chips({ items }: { items: string[] }) {
  return (
    <div className="chips">
      {items.map((c) => <span key={c} className="chip">{c}</span>)}
    </div>
  );
}
