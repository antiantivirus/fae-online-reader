import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";
import { Portal } from "radix-ui";

export default function ChapterImage({
  image,
}: {
  image: string;
}) {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#chapter-image", {
      currentTime: 4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "main",
        start: "top +80",
        end: "+=600",
        scrub: 1,
      },
    });

    gsap.to("#chapter-image", {
      yPercent: -150,
      opacity: 0.5,
      // scale: 0.4,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "main",
        start: "top +80",
        end: "+300",
        scrub: 1,
      },
    });

    gsap.to("#chapter-image-mobile", {
      // currentTime: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "main",
        start: "top +80",
        end: "+=600",
        scrub: 1,
      },
    });
    gsap.to("#chapter-image-mobile", {
      yPercent: -150,
      opacity: 0.5,
      // scale: 0.4,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "main",
        start: "top +80",
        end: "+300",
        scrub: 1,
      },
    });
  });
  return (
    <>
      <Image
        id="chapter-image"
        className="absolute left-1/2 top-[calc(100%-10px)] z-10 hidden max-w-6xl -translate-x-1/2 transform lg:block 2xl:max-w-7xl"
        src={image}
        alt=""
        width={850}
        height={400}
      />
      <Portal.Root>
        <Image
          className="absolute left-0 top-0 w-screen h-screen -z-10"
          src={image}
          alt=""
          width={850}
          height={400}
        />
      </Portal.Root>
    </>
  );
}
