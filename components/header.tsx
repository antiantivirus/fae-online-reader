import Download from "./icons/download";
import Share from "./icons/share";
import Search from "./icons/search";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import GlyphBackground from "./glyphBackground";
import * as Portal from "@radix-ui/react-portal";
import DownloadsDrawer from "./downloadsDrawer";

export default function Header() {
  const [fontSize, setFontSize] = useState(1);
  const { theme, setTheme } = useTheme();

  const increaseFontSize = () => {
    if (fontSize < 2) {
      setFontSize(fontSize + 0.2);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 0.5) {
      setFontSize(fontSize - 0.2);
    }
  };

  useEffect(() => {
    document.documentElement.style.fontSize = `calc(1rem * ${fontSize}`;
  }, [fontSize]);

  return (
    <header className="sticky top-0 z-50 flex w-full justify-between p-4 pb-0">
      <div className="flex gap-2">
        <button className="rounded-2xl border-black/50 px-3 py-1">
          <Share />
        </button>
        <button className="rounded-2xl border-black/50 px-3 py-1">
          <Search />
        </button>
        <DownloadsDrawer />
      </div>
      <div className="flex items-center gap-2">
        <button
          className="h-8 w-8 rounded-full bg-white shadow"
          onClick={() => setTheme("light")}
        >
          <span className="sr-only">Light</span>
        </button>
        <button
          className="h-8 w-8 rounded-full bg-red shadow"
          onClick={() => setTheme("red")}
        >
          <span className="sr-only">Red</span>
        </button>
        <button
          className="h-8 w-8 rounded-full border-white bg-black shadow"
          onClick={() => setTheme("dark")}
        >
          <span className="sr-only">Dark</span>
        </button>
        <div>
          <span>A</span>
          <button onClick={increaseFontSize}>+</button>
          <button onClick={decreaseFontSize}>-</button>
        </div>
      </div>
      <Portal.Root>
        <GlyphBackground />
      </Portal.Root>
    </header>
  );
}
