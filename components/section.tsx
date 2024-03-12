import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="relative mx-auto rounded-lg bg-background p-2 pr-6 text-typography shadow md:max-w-[74ch] md:p-6 md:pr-12">
      {children}
    </section>
  );
}
