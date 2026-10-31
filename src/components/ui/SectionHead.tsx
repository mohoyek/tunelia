interface SectionHeadProps {
  title: string;
  titleId?: string;
  idx: string;
}

export default function SectionHead({ title, titleId, idx }: SectionHeadProps) {
  return (
    <div className="section-head">
      <h2 id={titleId}>{title}</h2>
      <span className="idx mono">{idx}</span>
    </div>
  );
}
