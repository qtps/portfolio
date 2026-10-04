import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-16 max-w-2xl">
      <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-6xl font-bold leading-none tracking-tight text-ink md:text-8xl">
        {title}
      </h2>
      {children && (
        <p className="mt-6 text-lg leading-8 text-gray-600">{children}</p>
      )}
    </div>
  );
}
