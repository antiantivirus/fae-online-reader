import { visit } from "unist-util-visit";

// Map of glyphs to their replacements
const glyphMap = {
  "𝖊": "𝕰", // Emergence (swapped)
  "𝖎": "𝕴", // Interconnection (swapped)
  "𝖗": "𝕽", // Resilience (swapped)
  "𝖒": "𝕸", // Multipliers (swapped)
  "𝖛": "𝖁", // Value (swapped)
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