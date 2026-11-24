import { mkdirSync, writeFileSync } from "node:fs";

// Alien Field Notes: The Two Day Earth Review
// Writes one original line — an alien tourist's review of Earth — to /output/entry.txt.
const ENTRY =
  "Two days on Earth: the locals feed a small furry creature on schedule, let it sleep on their bed, and apologise when it ignores them. Clearly not the species in charge here. 4/5 stars.";

// Competition gate for /output/entry.txt:
//   - 1–200 characters, UTF-8
//   - exactly one line (no \n or \r anywhere)
//   - non-whitespace (something must actually be written)
// Validate before writing so a bad entry fails loudly here instead of
// being silently accepted and rejected downstream by the judge.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(
      `entry must be 1-200 characters, got ${text.length}`,
    );
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line (no newline characters)");
  }
}

validateEntry(ENTRY);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
