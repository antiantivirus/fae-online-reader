import { ReactNode } from "react";

export default function Box({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span
      className="text-[2rem] mx-auto transition-all hover:transition-all hover:rotate-180"
    >
      {children}
    </span>
  );
}