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
      className={`box relative mx-auto rounded bg-background p-3 text-typography shadow md:p-5 ${wide ? "md:max-w-boxWide !mt-[50px]" : "md:max-w-box pr-7 md:pr-12"}`}
    >
      {children}
    </div>
  );
}
