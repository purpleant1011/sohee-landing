export function SectionIntro({
  id,
  title,
  children,
}: {
  id: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-intro">
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
