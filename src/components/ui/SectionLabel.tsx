export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="font-mono text-xs" style={{ color: "#FF003C" }}>{"// "}</span>
      <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#64748B" }}>{text}</span>
    </div>
  );
}
