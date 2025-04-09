import Search from "./search";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import GlyphBackground from "./glyphBackground";
import Share from "./icons/share";
import DownloadsDrawer from "./downloadsDrawer";
import Plus from "./icons/plus";
import Minus from "./icons/minus";
import A from "./icons/a";
import Back from "./icons/back";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/router";

export default function Header() {
  const [fontSize, setFontSize] = useState(1);
  const { theme, setTheme } = useTheme();
  const [isFAE5, setIsFAE5] = useState(false);
  const router = useRouter();

  const increaseFontSize = () => {
    if (fontSize < 1.5) {
      setFontSize(fontSize + 0.1);
    }
    document.getElementById("plus")?.classList.toggle("pulse");
    setTimeout(() => {
      document.getElementById("plus")?.classList.toggle("pulse");
    }, 200);
  };

  const decreaseFontSize = () => {
    if (fontSize > 0.75) {
      setFontSize(fontSize - 0.1);
    }
    document.getElementById("minus")?.classList.toggle("pulse");
    setTimeout(() => {
      document.getElementById("minus")?.classList.toggle("pulse");
    }, 200);
  };

  useEffect(() => {
    const article = document.getElementById("chapter-contents");
    if (article) {
      article.style.fontSize = `calc(1rem * ${fontSize})`;
    }
  }, [fontSize]);

  useEffect(() => {
    if (router.pathname.includes('fae5')) {
      setIsFAE5(true)
    }
  }, [router])

  // useGSAP(() => {
  //   gsap.set("#top-nav", {
  //     translateY: -100,
  //     autoAlpha: 1,
  //     ease: "power3.out",
  //   });

  //   gsap.set("#bottom-nav", {
  //     translateY: 100,
  //     autoAlpha: 0,
  //     ease: "power3.out",
  //   });

  //   gsap.to("#top-nav", {
  //     translateY: 0,
  //     autoAlpha: 1,
  //     ease: "power3.out",
  //     duration: 1,
  //     delay: 0.5,
  //   });

  //   gsap.to("#bottom-nav", {
  //     translateY: 0,
  //     autoAlpha: 1,
  //     ease: "power3.out",
  //     duration: 1,
  //     delay: 0.5,
  //   });
  // });

  return (
    <header>
      <nav
        id="top-nav"
        className="fixed top-0 z-50 flex w-full justify-between gap-4 py-1.5 pl-1.5 pr-2.5 lg:p-2.5"
      >
        <Search />
        <div className="flex items-center gap-4">
          {!isFAE5 && <GlyphBackground />}
          <div className="flex items-center gap-2">
            {isFAE5 ? <>
              <button
                className="icon aspect-square rounded-full bg-white shadow"
                onClick={() => setTheme("light")}
              >
                <span className="sr-only">Light</span>
              </button>
              <button
                className="icon aspect-square rounded-full border-white bg-black shadow"
                onClick={() => setTheme("dark")}
              >
                <span className="sr-only">Dark</span>
              </button>
            </> :
              <>
                <button
                  className="icon aspect-square rounded-full bg-white shadow"
                  onClick={() => setTheme("light")}
                >
                  <span className="sr-only">Light</span>
                </button>
                <button
                  className="icon aspect-square rounded-full bg-grey shadow"
                  onClick={() => setTheme("grey")}
                >
                  <span className="sr-only">Grey</span>
                </button>
                <button
                  className="icon aspect-square rounded-full border-white bg-burgundy shadow"
                  onClick={() => setTheme("dark")}
                >
                  <span className="sr-only">Dark</span>
                </button>
              </>
            }

          </div>

          <div className="hidden items-center gap-2 md:flex">
            <A />
            <button onClick={increaseFontSize}>
              <Plus />
            </button>
            <button onClick={decreaseFontSize}>
              <Minus />
            </button>
          </div>
        </div>
      </nav>
      <nav
        id="bottom-nav"
        className="fixed bottom-2.5 left-2 flex items-center gap-2 lg:left-2.5"
      >
        <Link href="/briefing/fae4" className="hidden lg:block">
          <Back />
          <span className="sr-only">Back to FAE platform</span>
        </Link>
        {/* <button className="hidden rounded-2xl border-black/50 px-3 py-1 lg:block">
          <Share />
        </button> */}
        <DownloadsDrawer />
      </nav>
    </header >
  );
}
