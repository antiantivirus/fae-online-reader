import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import Cross from "./icons/cross";

export default function ChapterImage() {
  const [visible, setVisible] = useState(true);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("#chapter-image", {
      yPercent: 50,
      xPercent: 250,
      rotate: 180,
      rotateX: 90,
      duration: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=1000",
        scrub: true,
      },
    });

    tl.set("#chapter-image", {
      yPercent: 20,
      xPercent: 100,
      rotate: 90,
      rotateX: 90,
      duration: 0,
    });
    tl.to("#chapter-image", {
      yPercent: -50,
      xPercent: -50,
      rotate: 0,
      rotateX: 0,
      duration: 1,
    });
    tl.to("#chapter-image", {
      duration: 1,
    });
    tl.to("#chapter-image", {
      yPercent: -120,
      xPercent: -200,
      rotate: 90,
      rotateX: 90,
      duration: 1,
    });
  });
  if (visible)
    return (
      <div
        className={`fixed left-1/2 top-1/2 z-20 m-4 w-full max-w-96 transform lg:max-w-lg  ${!visible && "hidden"}`}
        id="chapter-image"
      >
        <button className="float-right mb-4" onClick={() => setVisible(false)}>
          <Cross />
        </button>
        <Image
          alt=""
          className="w-full"
          src="/test-image.jpg"
          height={900}
          width={500}
        />
      </div>
    );
}
