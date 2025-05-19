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
  return (
    <div className="full-page picture relative">
      <div className="main-picture z-10 relative">
        <Image width={880} height={300} className="" src={main} alt={alt} />
        <span className="text-white bg-silver px-2 py-0.5 rounded mt-2 block w-fit"
        >Line of flight: Intro © Crosslucid 2024</span>
      </div>

      <Image width={880} height={300} src={bg} alt="" className="absolute top-0 left-0 w-full h-full object-cover bg-gradient-pdf" />
    </div>
  );
}