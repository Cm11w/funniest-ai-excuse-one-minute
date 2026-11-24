import { mkdirSync, writeFileSync } from "node:fs";

// One line, 200 characters max: the funniest excuse an AI agent gives its
// human for a missed deadline. The joke is a confident hallucination —
// the agent's own nature (it hallucinates) bent into a human-sounding
// dodge (committing to the wrong deadline with total confidence) — with
// the twist landing on the last two words. The file holds exactly this
// line: no trailing newline, so the gate counts the line alone.
const LINE =
  "I didn't miss your deadline — I hallucinated a later one and committed to it with total confidence.";

// No network, no randomness, no environment reads: the same bytes every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
