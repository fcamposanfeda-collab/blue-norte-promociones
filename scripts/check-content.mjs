import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const target = path.join(dir, entry);
    if (statSync(target).isDirectory()) walk(target, acc);
    else if (target.endsWith(".ts") || target.endsWith(".tsx")) acc.push(target);
  }
  return acc;
}

const stringRe = /"((?:\\.|[^"\\])*)"/g;

for (const file of walk("src")) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(/seoTitle:\s*"([^"]+)"/g)) {
    if (match[1].length > 60) console.log("TITLE", match[1].length, file, match[1]);
  }
  for (const match of text.matchAll(/seoDescription:\s*"([^"]+)"/g)) {
    if (match[1].length > 155) console.log("DESC", match[1].length, file, match[1]);
  }
  for (const match of text.matchAll(/title:\s*"([^"]+)"/g)) {
    if (match[1].length > 60 && file.includes("page.tsx")) {
      console.log("PAGE TITLE", match[1].length, file, match[1]);
    }
  }
}

for (const file of [
  "src/content/cities/malaga.ts",
  "src/content/cities/santander.ts",
  "src/content/cities/madrid.ts",
]) {
  const text = readFileSync(file, "utf8");
  const chunks = [...text.matchAll(stringRe)].map((match) => match[1]);
  const words = chunks.join(" ").split(/\s+/).filter(Boolean);
  console.log(path.basename(file), words.length);
}
