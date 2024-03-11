import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ChapterImage() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

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
      className="absolute left-1/2 top-[120%] z-10 w-8/12 -translate-x-1/2 transform"
      height={300}
      width={400}
      muted
      playsInline={true}
      preload="auto"
    >
      <source src="/crosslucid_short.mp4" type="video/mp4" />
    </video>
  );
}
