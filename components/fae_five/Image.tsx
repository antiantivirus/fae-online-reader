import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Image } from "next/image";

export default function Image({ image, bg, alt }: {
  image: string;
  bg: string;
  alt: string;
}) {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#image-credit, #chapter-image-bg", {
      scrollTrigger: {
        trigger: "main",
        start: "top +80",
        end: "+400",
        scrub: 1,
      },
      opacity: 0,
      duration: 0.5,
    });
  });

  return (
    <div>
      <Image src={image} alt={alt} />
      <Image src={bg} className="fixed top-0 left-0 w-full h-full object-cover" />
    </div>
  );
}