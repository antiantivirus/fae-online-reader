import { visit } from "unist-util-visit";

const glyphChars = ["✁", "✂", "✃", "✄", "✅", "✆"];

/**
 * A rehype plugin that adds glyph elements after paragraphs containing glyphChars.
 * Handles multiple glyphs within a single paragraph.
 */
export default function rehypeGlyphs() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName === "p") {
        const textContent = node.children.map((child) => child.value || "").join("");

        // Find all matching glyphs in the paragraph
        const matchingGlyphs = glyphChars.filter((glyph) => textContent.includes(glyph)).join("");

        if (matchingGlyphs.length && parent) {
          // Insert the glyph element after the current paragraph
          parent.children.splice(index + 1, 0, {
            type: "element",
            tagName: "span",
            properties: { className: ["glyphs"] },
            children: [{ type: "text", value: matchingGlyphs }],
          });
        }
      }
    });
  };
}