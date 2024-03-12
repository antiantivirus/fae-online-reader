import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterImage from "./chapterImage";

export default function ChapterHeading() {
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
    <div id="chapter-heading" className="relative mx-auto md:max-w-4xl">
      <div
        id="chapter-sticky-heading"
        className="invisible fixed top-12 z-50 mb-0 w-full rounded-lg bg-primary px-4 py-2 text-white shadow md:max-w-4xl"
      >
        <span>3. Proposals: Pathways to Interoperability</span>
      </div>
      <div className="relative z-20 mb-24 w-full rounded-lg bg-background p-2 text-typography shadow md:p-6">
        <h1 className="flex gap-12">
          <span>3</span> <span>Proposals: Pathways to Interoperability</span>
        </h1>
      </div>
      <ChapterImage />
    </div>
  );
}
