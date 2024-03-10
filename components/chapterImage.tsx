import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ChapterImage() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("#chapter-image", {
      yPercent: -50,
      opacity: 0,
      duration: 2,
      // transformOrigin: "top left",
      // transformPerspective: 200,
      // transformStyle: "preserve-3d"
    });

    gsap.to("#chapter-image", {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      delay: 0.5,
      ease: "power4.out",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=550",
        scrub: true,
      },
    });
    tl.to("#chapter-image", {
      yPercent: -100,
      // rotationX: -50,
      opacity: 0.5,
      currentTime: 0,
    });
  });
  return (
    <video
      id="chapter-image"
      className="absolute left-1/2 top-[100%] z-10 w-10/12 -translate-x-1/2 transform"
      height={300}
      width={500}
      muted
      playsInline={true}
      preload="auto"
      autoPlay={true}
    >
      <source src="/crosslucid_short.mp4" type="video/mp4" />
    </video>
  );
}
