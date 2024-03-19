import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function ChapterVideo({ video }: { video: string }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const videoRef = useRef<HTMLVideoElement>(null);

  // pause video on load to bypass autoplay video requirements for mobile
  const pauseVideo = () => {
    console.log("pause the video");
    videoRef.current?.pause();
  };

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
      currentTime: 4,
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
      <video
        id="chapter-image"
        className="absolute left-1/2 top-[150px] z-10 hidden max-h-[70vh] w-full max-w-6xl -translate-x-1/2 transform md:top-[55%] md:w-auto md:-translate-y-1/2 lg:block"
        muted
        playsInline
        ref={videoRef}
        preload="auto"
      >
        <source src={video} type="video/mp4" />
      </video>
      <video
        id="chapter-image-mobile"
        className="absolute left-1/2 top-[100%] z-10 w-[93.66%] -translate-x-1/2 transform lg:top-[calc(100%+50px)] lg:hidden"
        muted
        playsInline
        autoPlay
        ref={videoRef}
        preload="auto"
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}
