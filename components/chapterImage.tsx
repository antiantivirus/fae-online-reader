import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function ChapterImage({ video }: { video: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // pause video on load to bypass autoplay video requirements for mobile
  const pauseVideo = () => {
    videoRef.current?.pause();
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#chapter-image", {
      currentTime: 10,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "main",
        start: "top +80",
        end: "+=400",
        scrub: true,
      },
    });
    gsap.to("#chapter-image", {
      yPercent: -100,
      // rotationX: -50,
      opacity: 0.5,
      scrollTrigger: {
        trigger: "main",
        start: "top +80",
        end: "+=400",
        scrub: true,
      },
    });
  });
  return (
    <video
      id="chapter-image"
      className="absolute left-1/2 top-[100%] z-10 w-11/12 -translate-x-1/2 transform  lg:top-[135%] lg:w-9/12"
      muted
      playsInline
      autoPlay
      ref={videoRef}
      onLoadedData={pauseVideo}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}
