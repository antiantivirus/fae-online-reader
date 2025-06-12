import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Picture({ main, bg, alt, credit }: {
  main: string;
  bg: string;
  alt: string;
  credit?: string;
}) {
  const mainRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (bgRef.current && mainRef.current) {
      gsap.set(bgRef.current, { opacity: 0 });
      ScrollTrigger.create({
        trigger: mainRef.current,
        start: "top 50%",
        onEnter: () => {
          gsap.to(bgRef.current, { opacity: 1, duration: 1, ease: "power2.out" });
        },
        onEnterBack: () => {
          gsap.to(bgRef.current, { opacity: 1, duration: 1, ease: "power2.out" });
        },
        onLeave: () => {
          gsap.to(bgRef.current, { opacity: 0, duration: 1, ease: "power2.out" });
        },
        onLeaveBack: () => {
          gsap.to(bgRef.current, { opacity: 0, duration: 1, ease: "power2.out" });
        },
        once: false
      });
    }
  }, [bg]);

  return (
    <div className="relative group">
      <div className="relative z-40">
        <Image width={880} height={300} ref={mainRef} className="mx-auto my-[50px]" src={main} alt={alt} />
      </div>
      <Image width={880} height={300} ref={bgRef} src={bg} alt="" className="fixed top-0 left-0 w-full h-full object-cover opacity-0 pointer-events-none object-center transition-opacity duration-700"/>
      {credit && (
        <p className="absolute bottom-2.5 right-2.5 z-50 text-xs text-white bg-silver px-2 py-1 rounded max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {credit}
        </p>
      )}
    </div>
  );
}