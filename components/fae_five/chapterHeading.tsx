import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterImage from "./chapterImage";
import Box from "../box";
import Image from "next/image";

export default function ChapterHeading({
  no,
  title,
  image,
  background,
  credit,
}: {
  no: string;
  title: string;
  image?: string;
  background?: string;
  credit?: string;
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
        scrub: 1,
      },
      translateY: 0,
      duration: 0.5,
    });
  });
  return (
    <div id="chapter-heading" className="relative mx-auto md:max-w-boxWide">
      <div
        id="chapter-sticky-heading"
        className="sticky-chapter-header invisible fixed left-11 top-[3.5rem] z-10 mb-0 mr-2.5 flex w-[calc(100vw-54px)] items-center rounded-full bg-secondary p-2 px-4 pt-2.5 shadow md:left-auto md:w-full md:max-w-boxWide z-50"
      >
        <span>
          {no && <>{no}. </>}
          {title}
        </span>
      </div>
      <div
        className={`relative z-20 ${image ? "mb-[140px]" : "mb-[70px]"} w-full rounded-lg bg-background p-2 text-typography shadow md:p-5`}
      >
        <h1 className="grid grid-cols-6 gap-2.5">
          {no && (
            <span className="col-span-1">
              {no}
              <span className="hidden">: </span>
            </span>
          )}
          <span className="col-span-5 md:col-span-4">{title}</span>
        </h1>
      </div>
      {image && <ChapterImage image={image} background={background} />}
      {credit && (
        <p
          id="image-credit"
          className="fixed bottom-2.5 right-2.5 z-50 hidden text-xs text-white px-2 py-1 rounded xl:block"
        >
          {credit}
        </p>
      )}
    </div>
  );
}
