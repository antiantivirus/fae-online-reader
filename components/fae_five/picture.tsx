import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Box from "../box";
import { useRef } from "react";

export default function Picture({ main, bg, alt, credit }: {
  main: string;
  bg: string;
  alt: string;
  credit?: string;
}) {

  const mainRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const creditRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 60%",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, ease: "none" })
      .to(bgRef.current, { opacity: 0, ease: "none" });
      
    if (creditRef.current) {
      gsap.to(creditRef.current, {
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 60%",
          end: "bottom top",
          scrub: 1,
        },
        opacity: 0,
        duration: 0.5,
      });
    }
  });

  return (
    <div>
      <div className="relative z-40">
        <Image width={880} height={300} ref={mainRef} className="mx-auto my-[50px]" src={main} alt={alt} />
      </div>
      <Image width={880} height={300} ref={bgRef} src={bg} alt="" className="fixed top-0 left-0 w-full h-full object-cover opacity-0 pointer-events-none object-center" />
      {credit && (
        <p
          ref={creditRef}
          className="fixed bottom-2.5 right-2.5 z-50 hidden text-xs text-white bg-silver px-2 py-1 rounded xl:block max-w-sm"
        >
          {credit}
        </p>
      )}
    </div>
  );
}