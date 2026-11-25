// Fix Human Sleep: Funniest Patch Note — make.fun entry.
// Emits the single patch-note line into entry.txt under the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PATCH_NOTE =
  "Fixed: waking up five minutes before the alarm no longer counts as a victory. It is now correctly classified as theft.";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), PATCH_NOTE, "utf8");
