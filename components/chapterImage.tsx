import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ChapterImage() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("#chapter-image", {
      currentTime: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=600",
        scrub: true,
      },
    });
    tl.to("#chapter-image", {
      yPercent: -100,
      // rotationX: -50,
      opacity: 0.5,
      currentTime: 10,
    });
  });
  return (
    <video
      id="chapter-image"
      className="absolute left-1/2 top-[100%] z-10 w-11/12 -translate-x-1/2 transform  lg:top-[120%] lg:w-8/12"
      muted
      playsInline
      autoPlay
    >
      <source src="/crosslucid_short.mp4" type="video/mp4" />
    </video>
  );
}
