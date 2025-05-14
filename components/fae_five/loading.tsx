import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function LoadingSheen() {
  const router = useRouter()
  const [isAnimating, setIsAnimating] = useState(false)


  useEffect(() => {
    const beforeHistoryChange = () => {
      setIsAnimating(true);

      const tl = gsap.timeline({
        onComplete: () => setIsAnimating(false), // Hide the element after animation
      });

      gsap.set("#sheeny-loading",
        { backgroundPosition: "100% 0%", opacity: 0 })

      tl.to("main", {
        opacity: 0.25,
        duration: 0.25, // Duration of the animation
      }, "start")
      tl.to("#sheeny-loading", {
        backgroundPosition: "0% 25%",
        opacity: 0.95,
        duration: 0.5, // Duration of the animation
      }, "start")
      tl.to("#sheeny-loading", {
        backgroundPosition: "0% 100%",
        opacity: 0,
        duration: 0.5, // Duration of the animation
      }, "end")
      tl.to("main", {
        opacity: 1,
        duration: 0.1, // Duration of the animation
      }, "end")
    };
    router.events.on('routeChangeStart', beforeHistoryChange);

    return () => {
      router.events.off('routeChangeStart', beforeHistoryChange);
    };

  }, []);

  return (
    <div
      id="sheeny-loading"
      className={`fixed z-50 top-0 left-0 w-screen h-screen bg-gradient-silver ${!isAnimating && "hidden"}`}
      style={{ backgroundPosition: "100% 0%", backgroundSize: "200% 200%" }}>
    </div>
  );
}