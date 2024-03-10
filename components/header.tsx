import Download from "./icons/download";
import Share from "./icons/share";
import Search from "./icons/search";
import { useState, useEffect } from "react";

export default function Header() {
  const [fontSize, setFontSize] = useState(1)

  const increaseFontSize = () => {
    if (fontSize < 2){
      setFontSize(fontSize + 0.2)
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 0.5){
      setFontSize(fontSize - 0.2)
    }
  }

  useEffect(() => {
    document.documentElement.style.fontSize = `calc(1rem * ${fontSize}`;
  }, [fontSize])

  return (
    <header className="sticky top-0 z-50 flex w-full justify-between p-4 pb-0">
      <div className="flex gap-2">
        <button className="rounded-2xl border-black/50 px-3 py-1">
          <Share />
        </button>
        <button className="rounded-2xl border-black/50 px-3 py-1">
          <Search />
        </button>
        <button className="rounded-2xl border-black/50 px-4 py-1">
          <Download />
        </button>
      </div>
      <div>
        <span>A</span>
        <button onClick={increaseFontSize}>+</button>
        <button onClick={decreaseFontSize}>-</button>
      </div>
    </header>
  );
}
