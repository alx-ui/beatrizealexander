interface SectionWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <div className={className}>
      <div className="mx-auto max-w-7xl px-0 md:px-16">{children}</div>
    </div>
  );
}
