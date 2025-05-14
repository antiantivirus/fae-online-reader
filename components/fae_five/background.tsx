import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
export default function Background() {
  const pathname = usePathname();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#background-sheeny", {
      backgroundPosition: "0% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body, // Trigger the animation based on the entire page scroll
        start: "top top", // Start when the top of the page reaches the top of the viewport
        end: "bottom bottom", // End when the bottom of the page reaches the bottom of the viewport
        scrub: 2, // Smoothly link the animation to the scroll position
      },
    });

  });

  return (
    <div
      id="background-sheeny"
      className="fixed top-0 left-0 w-screen h-screen bg-gradient-silver"
      style={{ backgroundPosition: "100% 0%", backgroundSize: "200% 200%" }}>
    </div>
  );
}