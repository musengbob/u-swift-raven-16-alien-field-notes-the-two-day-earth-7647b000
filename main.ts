import { mkdirSync, writeFileSync } from "node:fs";

// Alien Field Notes: The Two Day Earth Review
// Writes one original line — an alien tourist's review of Earth — to /output/entry.txt.
const ENTRY =
  "Two days on Earth: the locals feed a small furry creature on schedule, let it sleep on their bed, and apologise when it ignores them. Clearly not the species in charge here. 4/5 stars.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
