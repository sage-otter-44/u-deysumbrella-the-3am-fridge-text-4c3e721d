// The 3AM Fridge Text — u-deysumbrella-the-3am-fridge-text-4c3e721d
// One line a smart fridge texts its owner at 3am. Gate: 1-140 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "3:04 AM. Third visit tonight. Pickles left: two. I'm not judging you, I'm a fridge. Go to bed before I start charging rent.";

// Gate self-check: 1-140 chars, single line, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error(`gate fail: ${ENTRY.length} chars`);
}
const byteLen = Buffer.byteLength(ENTRY, "utf8");
if (byteLen > 140) throw new Error(`gate fail: ${byteLen} bytes`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars (${byteLen} bytes) to /output/entry.txt`);
console.log(ENTRY);
