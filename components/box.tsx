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
      className={`box relative mx-auto rounded bg-background p-2.5 pr-6 text-typography shadow md:p-5 ${wide ? "md:max-w-3xl" : "md:max-w-2xl md:pr-12"}`}
    >
      {children}
    </div>
  );
}
