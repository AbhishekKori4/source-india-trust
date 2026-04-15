interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ title, subtitle, center = true }: Props) {
  return (
    <div className={`mb-12 md:mb-16 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
