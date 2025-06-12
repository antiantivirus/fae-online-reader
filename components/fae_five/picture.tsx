import Image from "next/image";
import { useRef } from "react";

export default function Picture({ main, bg, alt, credit }: {
  main: string;
  bg: string;
  alt: string;
  credit?: string;
}) {
  const mainRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  return (
    <div className="relative group">
      <div className="relative z-40">
        <Image width={880} height={300} ref={mainRef} className="mx-auto my-[50px]" src={main} alt={alt} />
      </div>
      <Image width={880} height={300} ref={bgRef} src={bg} alt="" className="fixed top-0 left-0 w-full h-full object-cover opacity-0 pointer-events-none object-center" />
      {credit && (
        <p className="absolute bottom-2.5 right-2.5 z-50 text-xs text-white bg-silver px-2 py-1 rounded max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {credit}
        </p>
      )}
    </div>
  );
}