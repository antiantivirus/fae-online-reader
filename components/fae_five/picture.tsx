import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Box from "../box";

export default function Picture({ main, bg, alt }: {
  main: string;
  bg: string;
  alt: string;
}) {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#bg-image", {
      opacity: 1,
      scrollTrigger: {
        trigger: "#main-image",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
      duration: 0.5,
      ease: "power1.out",
    });
  });

  return (
    <Box wide>
      <div className="diagram">
        <Image width={880} height={300} id="main-image" src={main} alt={alt} />
        <Image width={880} height={300} id="bg-image" src={bg} alt="" className="fixed top-0 left-0 w-full h-full object-cover opacity-0 pointer-events-none" />
      </div>
    </Box>
  );
}