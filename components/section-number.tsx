type SectionNumberProps = Readonly<{
  number: string;
}>;

export function SectionNumber({ number }: SectionNumberProps) {
  const compactNumber = Number.parseInt(number, 10).toString();

  return (
    <span
      aria-hidden="true"
      className="text-ink/[0.04] pointer-events-none absolute right-[-1rem] bottom-[-1.5rem] z-0 text-[24rem] leading-none font-bold md:text-[30rem]"
    >
      <span className="md:hidden">{compactNumber}</span>
      <span className="hidden md:inline">{number}</span>
    </span>
  );
}
