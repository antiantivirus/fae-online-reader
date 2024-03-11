import Glyph1 from "./icons/glyph1";
import Glyph2 from "./icons/glyph2";
import Glyph3 from "./icons/glyph3";

export default function GlyphBackground() {
  // to do: watch for url change and change background glyph
  return (
    <div className="fixed left-0 top-0 -z-10 h-screen w-screen p-12">
      <Glyph3 />
    </div>
  );
}
