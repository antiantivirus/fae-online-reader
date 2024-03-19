import Glyph1 from "./icons/glyph1";
import Glyph2 from "./icons/glyph2";
import Glyph3 from "./icons/glyph3";
import GlyphIndicator from "./icons/glyphIndicator";
import * as Portal from "@radix-ui/react-portal";
import { useState } from "react";

export default function GlyphBackground() {
  const [show, setShow] = useState<boolean>(true);
  // to do: watch for url change and change background glyph
  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className={`icon flex aspect-square items-center justify-center rounded-full bg-background shadow ${show && "bg-primary"}`}
      >
        <GlyphIndicator active={show} />
      </button>
      {show && (
        <Portal.Root>
          <div className="fixed left-0 top-0 -z-10 h-screen w-screen lg:p-12">
            <Glyph3 />
          </div>
        </Portal.Root>
      )}
    </>
  );
}
