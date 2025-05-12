import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function LoadingSheen() {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false), // Hide the element after animation
    });

    gsap.set("#sheeny-loading",
      { backgroundPosition: "100% 0%", opacity: 0 })

    tl.to("#sheeny-loading", {
      backgroundPosition: "0% 25%",
      opacity: 0.95,
      duration: 0.5, // Duration of the animation
    })
    tl.to("#sheeny-loading", {
      backgroundPosition: "0% 100%",
      opacity: 0,
      duration: 0.5, // Duration of the animation
    })

  }, [pathname]);

  return (
    <div
      id="sheeny-loading"
      className={`fixed z-50 top-0 left-0 w-screen h-screen bg-gradient-silver ${!isAnimating && "hidden"}`}
      style={{ backgroundPosition: "100% 0%", backgroundSize: "200% 200%" }}>
    </div>
  );
}