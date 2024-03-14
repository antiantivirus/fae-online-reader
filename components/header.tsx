import Search from "./search";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import GlyphBackground from "./glyphBackground";
import * as Portal from "@radix-ui/react-portal";
import Share from "./icons/share";
import DownloadsDrawer from "./downloadsDrawer";
import Plus from "./icons/plus";
import Minus from "./icons/minus";
import A from "./icons/a";

export default function Header() {
  const [fontSize, setFontSize] = useState(1);
  const { theme, setTheme } = useTheme();

  const increaseFontSize = () => {
    if (fontSize < 1.5) {
      setFontSize(fontSize + 0.1);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 0.75) {
      setFontSize(fontSize - 0.1);
    }
  };

  useEffect(() => {
    const article = document.getElementById("chapter-contents");
    if (article) {
      article.style.fontSize = `calc(1rem * ${fontSize})`;
    }
  }, [fontSize]);

  return (
    <header>
      <nav className="fixed top-0 z-50 flex w-full justify-between p-2.5">
        <Search />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              className="aspect-square h-[30px] w-[30px] rounded-full bg-white shadow"
              onClick={() => setTheme("light")}
            >
              <span className="sr-only">Light</span>
            </button>
            <button
              className="aspect-square h-[30px] w-[30px] rounded-full bg-red shadow"
              onClick={() => setTheme("red")}
            >
              <span className="sr-only">Red</span>
            </button>
            <button
              className="aspect-square h-[30px] w-[30px] rounded-full border-white bg-black shadow"
              onClick={() => setTheme("dark")}
            >
              <span className="sr-only">Dark</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <A />
            <button onClick={increaseFontSize}>
              <Plus />
            </button>
            <button onClick={decreaseFontSize}>
              <Minus />
            </button>
          </div>
        </div>
        {/* <Portal.Root>
        <GlyphBackground />
      </Portal.Root> */}
      </nav>
      <nav className="fixed bottom-0 left-0 flex gap-2">
        <p>back</p>
        <button className="rounded-2xl border-black/50 px-3 py-1">
          <Share />
        </button>
        <DownloadsDrawer />
      </nav>
    </header>
  );
}
