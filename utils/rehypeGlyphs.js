import { visit } from "unist-util-visit";

// Map of glyphs to their replacements
const glyphMap = {
  "𝕰": "𝖊", // Emergence
  "𝕴": "𝖎", // Interconnection
  "𝕽": "𝖗", // Resilience
  "𝕸": "𝖒", // Multipliers
  "𝖁": "𝖛", // Value
};

// Glyph characters to search for in text
const glyphChars = Object.keys(glyphMap);

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
        const matchingGlyphs = glyphChars.filter((glyph) => textContent.includes(glyph)).map((glyph) => glyphMap[glyph]).join("");

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