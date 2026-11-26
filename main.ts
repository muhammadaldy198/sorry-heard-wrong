// Sorry, I Heard That Wrong — one-line smart-speaker apology.
// One line, at most 140 characters. The program writes the line
// to /output/entry.txt, deterministically.
// Mishear: one word ("car" -> "carp") grows into twelve fish, one driving.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry — I heard 'warm up the car' as 'warm up the carp,' so I ordered twelve carp. They're in the back seat, and one is driving.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
chmodSync("/output/entry.txt", 0o644);
