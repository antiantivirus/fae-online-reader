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
      ref={videoRef}
      onLoadedData={pauseVideo}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}
