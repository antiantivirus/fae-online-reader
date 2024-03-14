import { ReactNode } from "react";

export default function Box({
  children,
  wide,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={`relative mx-auto rounded-lg bg-background p-2.5 pr-6 text-typography shadow  md:p-6 md:pr-12 ${wide ? "md:max-w-3xl" : "md:max-w-2xl"}`}
    >
      {children}
    </div>
  );
}
