import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterImage from "./chapterImage";
import Box from "./box";

export default function ChapterHeading({
  no,
  title,
  video,
}: {
  no: string;
  title: string;
  video: string;
}) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set("#chapter-sticky-heading", {
      translateY: -100,
      autoAlpha: 1,
      ease: "power4.out",
    });

    gsap.to("#chapter-sticky-heading", {
      scrollTrigger: {
        trigger: "#chapter-contents",
        start: "top -50",
        end: "top -150",
        scrub: true,
      },
      translateY: 0,
      ease: "power4.out",
      duration: 0.5,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=550",
        scrub: true,
      },
    });
  });
  return (
    <div id="chapter-heading" className="relative mx-auto md:max-w-3xl">
      <div
        id="chapter-sticky-heading"
        className="invisible fixed top-12 z-10 mb-0 w-full rounded-lg bg-primary px-4 py-2 text-white shadow md:max-w-3xl"
      >
        <span>
          {no && <>{no}.</>}
          {title}
        </span>
      </div>
      <div className="relative z-20 mb-24 w-full rounded-lg bg-background p-2 text-typography shadow md:p-6">
        <h1 className="flex gap-12">
          {no && <span>{no}</span>}
          <span>{title}</span>
        </h1>
      </div>
      <ChapterImage video={video} />
    </div>
  );
}
