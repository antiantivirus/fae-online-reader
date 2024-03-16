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
      translateY: -120,
      autoAlpha: 1,
    });

    gsap.to("#chapter-sticky-heading", {
      scrollTrigger: {
        trigger: "#chapter-contents",
        start: "top -50",
        end: "top -150",
        scrub: true,
      },
      translateY: 0,
      duration: 0.5,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "+=550",
        scrub: true,
      },
    });
  });
  return (
    <div id="chapter-heading" className="mx-auto md:max-w-3xl">
      <div
        id="chapter-sticky-heading"
        className="sticky-chapter-header invisible fixed left-11 top-12 z-10 mb-0 mr-2.5 w-[calc(100vw-54px)] rounded-full bg-burgundy px-4 py-2 shadow md:left-auto md:w-full md:max-w-3xl"
      >
        <span>
          {no && <>{no}. </>}
          {title}
        </span>
      </div>
      <div className="relative z-20 mb-24 w-full rounded-lg bg-background p-2 text-typography shadow md:p-5">
        <h1 className="grid grid-cols-6 gap-2.5">
          {no && <span className="col-span-1">{no}</span>}
          <span className="col-span-4">{title}</span>
        </h1>
      </div>
      <ChapterImage video={video} />
    </div>
  );
}
