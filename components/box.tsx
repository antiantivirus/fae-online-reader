import { ReactNode } from "react";

export default function Box({
  children,
  wide,
  space,
}: {
  children: ReactNode;
  wide?: boolean;
  space?: boolean;
}) {
  return (
    <div
      className={`box relative mx-auto rounded bg-background p-2.5 text-typography shadow md:p-5 ${wide ? "!mt-[50px] md:max-w-3xl" : "pr-7 md:max-w-2xl md:pr-12"}`}
    >
      {children}
    </div>
  );
}
